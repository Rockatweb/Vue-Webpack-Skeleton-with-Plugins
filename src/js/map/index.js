import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import {loaded} from 'vue2-google-maps'


Vue.use(VueGoogleMaps, {
    load: {
        key: process.env.GOOGLE_API_KEY,
        maxZoom: 10
    }
});

/* implement lib components */
Vue.component('google-map', VueGoogleMaps.Map);
Vue.component('google-marker', VueGoogleMaps.Marker);

/* create object for map-component with methods */
export default {
    data() {
        return {
            // infowindow
            infoWindowPos: {
                lat: 0,
                lng: 0
            },
            infoWinOpen: false,
            currentMidx: null,
            //optional: offset infowindow so it visually sits nicely on top of our marker
            infoOptions: {
                pixelOffset: {
                    width: 0,
                    height: -10
                }
            },
            data: [],

            // marker
            _id:'',
            markers: [],

            // map options
            center: {
                lat: 49.8748499,
                lng: 8.5847819
            },
            zoom: 12,
            options: {
                maxZoom: 16,
                mapTypeId: 'roadmap',
                styles: [{
                    // "stylers": [{
                    //     "hue": "#005a8c"
                    // }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "on"
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "lightness": 100
                    }, {
                        "visibility": "simplified"
                    }]
                }],

            }
        }
    },
    watch: {
        /* watch for this.markers changes */
        markers(markers) {
            if (markers.length) {

                loaded.then(() => {

                    let bounds = new google.maps.LatLngBounds();

                    for (let m of markers) {
                        bounds.extend(m.position);
                    }

                    this.$refs.map.$mapObject.fitBounds(bounds);


                    this.$nextTick(() => {
                        this.$refs.map.resize();
                        this.$refs.map.resizePreserveCenter();
                    });
                })

            }
        }
    },
    methods: {
        clearAndSetMarker(marker) {
            this.markers = [];
            this.data = marker;
            this.data.categoryImg = marker.category.replace(' ', '').toLowerCase()

            this.infoWinOpen = true;
            this.infoWindowPos = {
                lat: marker.position.lat,
                lng: marker.position.lng,
            };

            this.setMarker(marker);
        },

        /* set marker on map
           if param = lat/lng set marker directly
           else param = adressdata then resolve them first

           @param {object} marker contains lat/lng or addressdata
        */
        setMarker(marker) {
            if ( marker.position.lat ) {
                this.markers.push(marker);
            } else {
                this.geocode(marker);
            }
        },

        /* set all markers
        * @param {object} markers contains all markers for the map
        */
        setMarkers(markers) {

            let $this = this;

            $this.markers = [];

            if ( !!markers ) {
                markers.forEach(function(value) {
                    $this.setMarker(value);
                });
            }

        },

        /* resolve address and return coordinates
         *
         * @param {string} location adressdata
         * @return resolved geo coordinates
         */
        geocode(marker) {
            let $this = this;
            axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURI(marker.address))
                .then(response => {
                    console.log(response);
                    if ( response.status === 200 ) {
                        if ( response.body.results[0] ) {
                            let obj = {
                                id: marker.id,
                                address: location,
                                position: {
                                    lat: response.body.results[0].geometry.location.lat,
                                    lng: response.body.results[0].geometry.location.lng
                                }
                            };

                            $this.markers.push(Object.assign(marker, obj));
                        } else {
                            console.log('Error - no Results')
                        }
                    } else {
                        console.log('Error - Status not 200 ', response)
                    }
                }, response => {
                    console.log('Error - Connection', response)
                });
        },

    },
    mounted() {
        loaded.then(() => {
            /* receive setMarkers()-call */
            this.$root.$on('setMarkers', this.setMarkers);

            /* receive clearAndSetMarker()-call */
            this.$root.$on('clearAndSetMarker', this.clearAndSetMarker);
        });

    }

}
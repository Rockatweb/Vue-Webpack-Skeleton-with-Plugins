<template>
    <div id="googleMap">
        <gmap-map :center="center" :zoom="zoom" ref="map" map-type-id="terrain" :options="options">
            <google-marker v-if="markers !== false" v-for="(item, key) in markers" :data="item" :key="item.id" :position="item.position" :icon="mapIcon(item.color, item.id)" :clickable="true" @click="openItem(item)" :opacity="item.opacity"></google-marker>

            <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
                <div class="infoWindow">
                    <div v-if="!!data.company">
                        <span class="name">{{data.text}}</span>
                    </div>
                </div>
            </gmap-info-window>
        </gmap-map>
    </div>
</template>


<script>
    import { default as map } from '../../js/map/index.js'
    export default map
</script>
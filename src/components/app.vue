<template>
    <div id="app">
        <calendar :events="events" />

        <button @click="add()">Add</button>
        {{ events.length }}
    </div>
</template>

<style>
    @import '~fullcalendar/dist/fullcalendar.css';
</style>

<script>
    import Functions from '../js/helpers/functions'
    import Calendar from '../components/fullcalendar/calendar'

    export default {
        name: 'app',
        mixins: [Functions],
        components: {
            Calendar
        },
        data() {
            return {
                events: [
                    {
                        title  : 'event1',
                        start  : '2018-03-26',
                    },
                    {
                        title  : 'event2',
                        start  : '2018-03-26',
                        end    : '2018-03-28',
                    },
                    {
                        title  : 'event3',
                        start  : '2018-03-26T12:30:00',
                        allDay : false,
                    },
                ]
            }
        },
        methods: {
            add() {
                for ( let i = 0; i < 150; i++) {
                    this.events.push({
                        title  : 'event1',
                        start  : '2018-03-26',
                    });
                }

            }
        }
    }
</script>
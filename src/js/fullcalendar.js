Vue.component('calendar', {
    template: '<div ref="calendar"></div>',

    props: {
        events: {
            type: Array,
            required: true
        },

        editable: {
            type: Boolean,
            required: false,
            default: false
        },

        droppable: {
            type: Boolean,
            required: false,
            default: false
        },
    },

    data () {
        return {
            cal: null
        }
    },

    mounted () {
        var self = this;
        self.cal = $(self.$refs.calendar);

        var args = {
            firstDay: 1,
            lang: 'ro',
            header: {
                left:   'prev,next today',
                center: 'title',
                right:  'month,agendaWeek,agendaDay'
            },
            height: "auto",
            allDaySlot: false,
            slotEventOverlap: false,
            timeFormat: 'HH:mm',

            events: self.events,

            dayClick: function(date)
            {
                self.$emit('day::clicked', date);
                self.cal.fullCalendar('gotoDate', date.start);
                self.cal.fullCalendar('changeView', 'agendaDay');
            },

            eventClick: function(event)
            {
                self.$emit('event::clicked', event);
            }
        }

        if (self.editable)
        {
            args.editable = true;
            args.eventResize = function(event)
            {
                self.$emit('event::resized', event);
            }

            args.eventDrop = function(event)
            {
                self.$emit('event::dropped', event);
            }
        }

        if (self.droppable)
        {
            args.droppable = true;
            args.eventReceive = function(event)
            {
                self.$emit('event::received', event);
            }
        }

        self.cal.fullCalendar(args);

    }

})

let vm = new Vue({
    el: '#app',

    data () {
        return {
            events: [
                {
                    title: 'Event1',
                    start: '2018-03-10 12:30:00',
                    end: '2018-03-10 16:30:00'
                },
                {
                    title: 'Event2',
                    start: '2018-03-07 17:30:00',
                    end: '2018-03-07 21:30:00'
                }
            ],
            editable: false
        }
    },

    events: {
        'day::clicked': function(date) {
            console.log(date);
        }
    }
})

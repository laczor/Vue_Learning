// https://jsfiddle.net/smax/7zdak05g/
new Vue({
    el: '#app',
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        increase: function(step, event) {
            this.counter += step;
        },

        //We can pass this event object, and we can actually use the stored information in it.
        updateCoordinates: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function() {
            alert('Alert!');
        }
    }
});
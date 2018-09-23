// https://jsfiddle.net/smax/gowg40ym/
new Vue({
    el: '#app',
    data: {
        attachRed: false,
        color: 'green'
    },

    //Will be only calculated when the attachRed property changes, and willl add red or blue class to the div
    computed: {
        divClasses: function() {
            return {
                red: this.attachRed,
                blue: !this.attachRed
            };
        }
    }
});
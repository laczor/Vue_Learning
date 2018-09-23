// https://jsfiddle.net/smax/yLjqxmw0/

new Vue({
    el: '#app',
    data: {
        counter: 0,
        secondCounter: 0
    },
    //Will be executed only, if it is regarding the counter variable
    computed: {
        output: function() {
            console.log('Computed');
            return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
        }
    },
    //We are watching a property, and if it changes, a code will be executed.
    watch: {
        counter: function(value) {
            var vm = this;              //You have to store the reference to the vue instance to reference it in the setTimeout Function.
            setTimeout(function() {
                vm.counter = 0;
            }, 2000);
        }
    },
    methods: {
        //THis function gets executed all the time, since js doesn't know, what is inside the function
        result: function() {
            console.log('Method');
            return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
        }
    }
});
new Vue({
        el: '#exercise',
        data: {
            value: 0,
            timer: null,
        },
        //Will be executed only, if it is regarding the counter variable
        computed: {
            output: function() {
                console.log('Computed');
                return this.value == 37 ? 'Not there yet' : '';
            }
        },
        //We are watching a property, and if it changes, a code will be executed.
        watch: {
            value: function(value) {
                var vm = this;              //You have to store the reference to the vue instance to reference it in the setTimeout Function.
                if(vm.timer){
                    clearTimeout(vm.timer);
                }
                vm.timer = setTimeout(function() {
                    vm.value = 0;
                }, 5000);
            }
        },

    });
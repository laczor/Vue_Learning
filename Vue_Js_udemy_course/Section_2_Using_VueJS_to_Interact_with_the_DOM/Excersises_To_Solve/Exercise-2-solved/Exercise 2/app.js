new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods:{
            showAlert: function () {
                    alert('It has been clicked');
            },
            storeValue: function ($event) {
                    this.value = $event.target.value;
            }
        }
    });
// https://jsfiddle.net/smax/9a2k6cja/2/
var data = {
    title: 'The VueJS Instance',
    showParagraph: false
}

var vm1 = new Vue({
    data: data,
    methods: {
        show: function() {
            this.showParagraph = true;
            this.updateTitle('The VueJS Instance (Updated)');
            this.$refs.myButton.innerText = 'Test';
        },
        updateTitle: function(title) {
            this.title = title;
        }
    },
    computed: {
        lowercaseTitle: function() {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function(value) {
            alert('Title changed, new value: ' + value);
        }
    }
});

//This is the same as el: '#app1';
vm1.$mount('#app1');


console.log(vm1.$data === data);
vm1.$refs.heading.innerText = 'Something else';

setTimeout(function() {
    vm1.title = 'Changed by Timer';
    vm1.show();
}, 3000);

var vm2 = new Vue({
    el: '#app2',
    data: {
        title: 'The second Instance'
    },
    methods: {
        onChange: function() {
            this.title = 'Original title'    // THis would reference the title property of vue2 instance.
            vm1.title = 'Changed!';          // This would reference the title property of vue1 instance
        }
    }
});

var vm3 = new Vue({
    template: '<h1>Hello!</h1>'
});


//THis would be the same
vm3.$mount('#app3');
document.getElementById('app3').appendChild(vm3.$el);

//Using COmponents

Vue.component('Hello',{

    template:'<h1>Hello!</h1>'

});




import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http.firebaseio.com/';

Vue.http.interceptors.push((request, next) => {
  console.log(request);
//We are intercepting the outgoing request
  if (request.method == 'POST') {
    request.method = 'PUT';
  }
//Then we can check the repsonse as well.
  next(response => {
    response.json = () => { return {messages: response.body} }
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})

import Vue from 'vue';
import axios from 'axios';
import Vuelidate from 'vuelidate';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Vuelidate);

axios.defaults.baseURL = 'https://vue-project-7c451.firebaseio.com';
// axios.defaults.headers.common['Authorization'] = 'test';
axios.defaults.headers.get['Accepts'] = 'application/json';

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('config', config);
  return config;
});
const resInterceptor = axios.interceptors.response.use(res => {
  console.log('response', res);
  return res;
});

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

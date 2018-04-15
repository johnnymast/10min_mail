
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vuetify from 'vuetify'
import 'babel-polyfill'
// import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('mymenu', require('./components/Menu.vue'));


Vue.use(Vuetify)

const app = new Vue({
    el: '#app'
});

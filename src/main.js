import 'bootstrap';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../web/index.html';
import Vue from '../node_modules/vue/dist/vue.esm';
import 'vue-router'

const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }

const routes = {
    '/home': Home,
    '/about': About
}
const router = new VueRouter({
    routes
  });

var app = new Vue({
    el: '#vue_root',
    components: {
    },
    data: {
    },
    methods: {
        clickHomeFunc: function (event) {
            alert('You just clicked:' + event.toString());
        }
    },
    router
});
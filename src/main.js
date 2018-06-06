import 'bootstrap';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../web/index.html';
import Vue from '../node_modules/vue/dist/vue.esm';
import VueRouter from 'vue-router';

const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }

const routes = [
    { path: '/home', component: Home },
    { path: '/about', component: About }
];

const router = new VueRouter({
    routes
  });

  Vue.use(VueRouter);

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
/* import dependencies */
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './js/router'
import store from './js/store'
import VueLocalStorage from 'vue-local-storage';
import moment from 'moment';


/* import .sass-file */
import './assets/scss/main.scss';

/* App component */
import App from './components/app';


Vue.router = router;


Vue.use(VueAxios, axios);
Vue.use(VueLocalStorage);

Vue.config.productionTip = false;

window.api = axios.create({
    baseURL: process.env.API_URL,
    'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest'
    }
});



Vue.filter('formatDate', function(value, format) {
    if (value) {
        return moment(value * 1000).format(format);
    }
});

/* eslint-disable no-new */
const app = new Vue({
    el: '#app',
    // Attach the Vue instance to the window,
    // so it's available globally.
    router: router,
    store: store,
    render: h => h(App),
    created: function () {
        window.Vue = this
    },
    components: { App },

});
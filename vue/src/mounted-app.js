import Vue from 'vue';
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './router';

Vue.use(VueRouter);

const mount = (el) => {
    new Vue({
        render: h => h(App),
        router
    }).$mount(el);
};

export const moduleFederation = {
    mount,
    type: 'vue',
  };
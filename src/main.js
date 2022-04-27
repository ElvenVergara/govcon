import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import "vuetify/dist/vuetify.css";
import HomePage from './components/views/DashboardView.vue'


Vue.use(VueRouter);

const router = new VueRouter({
	routes:[
		{
			path: '/',
			component: HomePage,
		},
	]

});


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import '@aws-amplify/ui-vue';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);
Amplify.configure(awsconfig);

Vue.config.productionTip = false

// Logs to console every time component is created for debugging
Vue.mixin({
  created() {
    console.log('[created] ' + this.$options.name)
  },
});


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'

// imports flags
import CountryFlag from 'vue-country-flag'
Vue.component('country-flag', CountryFlag)

/* imports the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* imports specific icons */
import { faStar } from '@fortawesome/free-solid-svg-icons';

/* imports font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* adds icons to the library */
library.add(faStar)

/* adds font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')

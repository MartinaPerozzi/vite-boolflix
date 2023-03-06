import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css";

import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar, faUserSecret } from '@fortawesome/free-solid-svg-icons'
// Rinomino la stella per usarle in versione solid e regular
import { faStar as faEmptyStars } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faStar, faEmptyStars),

    createApp(App)
        // Componente
        .component('font-awesome-icon', FontAwesomeIcon)
        .mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CustomIcon from '@/components/CustomIcon.vue'

// Voeg de benodigde stijlen en icon fonts toe
import 'bootstrap/dist/css/bootstrap.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// Importeer Vuetify en de componenten en directives
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)

// Maak een instantie van Vuetify met de juiste configuratie
const vuetify = createVuetify({
  ssr: true,
  components,
  directives,
})

// Registreer de CustomIcon-component
app.component('CustomIcon', CustomIcon)

// Gebruik Vuetify, Vue Router en Vuex
app.use(vuetify)
app.use(store)
app.use(router)

// Monteer de app in de HTML-element met id "app"
app.mount('#app')

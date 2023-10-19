import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CustomIcon from '@/components/CustomIcon.vue'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)

const vuetify = createVuetify({
  ssr: true,
  components,
  directives,
})

app.component('CustomIcon', CustomIcon)

app.use(vuetify)
app.use(store)
app.use(router)

app.mount('#app')

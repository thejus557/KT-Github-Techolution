import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './main.css'
import { highlight } from './components/CustomDirective/highlight'
import TextFormatterPlugin from './components/CustomPlugin/TextTransformerPlugin'
const app = createApp(App)

app.use(router)

app.directive('highlight', highlight)

app.use(TextFormatterPlugin, { defaultFormat: 'titleCase' })

app.mount('#app')

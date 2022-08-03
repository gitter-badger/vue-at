// import 'element-ui/lib/theme-chalk/index.css'
// import 'vuetify/dist/vuetify.min.css'
// import Vuetify from 'vuetify'
// import ElementUI from 'element-ui'
import { createApp, configureCompat } from 'vue'
import App from './App.vue'

// Vue.use(Vuetify)
// Vue.use(ElementUI)

configureCompat({
  // migration.3
  // fix: [Vue warn]: (deprecation WATCH_ARRAY) "watch" option or vm.$watch on an array value will no longer trigger on array mutation unless the "deep" option is specified. If current usage is intended, you can disable the compat behavior and suppress this warning with:
  //   configureCompat({ WATCH_ARRAY: false })
  // Details: https://v3-migration.vuejs.org/breaking-changes/watch.html
  WATCH_ARRAY: false,

  // migration.4
  // fix: [Vue warn]: (deprecation ATTR_ENUMERATED_COERCION) Enumerated attribute "contenteditable" with v-bind value `` will render the value as-is instead of coercing the value to "true" in Vue 3. Always use explicit "true" or "false" values for enumerated attributes. If the usage is intended, you can disable the compat behavior and suppress this warning with:
  //   configureCompat({ ATTR_ENUMERATED_COERCION: false })
  // Details: https://v3-migration.vuejs.org/breaking-changes/attribute-coercion.html
  ATTR_ENUMERATED_COERCION: false,
})

// migration.1
// fix: [Vue warn]: (deprecation GLOBAL_MOUNT) The global app bootstrapping API has changed: vm.$mount() and the "el" option have been removed. Use createApp(RootComponent).mount() instead.
// Details: https://v3-migration.vuejs.org/breaking-changes/global-api.html#mounting-app-instance
let app = createApp(App)
app.mount('#app')

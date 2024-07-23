import { defineComponent, createApp } from 'vue/dist/vue.esm-bundler.js'

const App = defineComponent({
  name: 'App',
  setup() {
    const options = {
      dateStyle: 'long'
    };

    function getCurDate() {
      return new Date().toLocaleDateString('en-US', options)
    }

    return {
      getCurDate
    }
  },

  template: `Сегодня {{ getCurDate() }}`
})

const app = createApp(App)

const vm = app.mount('#app')

window.vm = vm

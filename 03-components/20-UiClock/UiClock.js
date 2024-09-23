import { defineComponent,ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const currentTime = ref('');

    const updateTime = () => {
      currentTime.value = new Date().toLocaleTimeString(navigator.language, {
        timeStyle: 'medium',
      });
    };

    let intervalId = null;

    onMounted(() => {
      updateTime();
      intervalId = setInterval(updateTime, 1000);
    });

    onUnmounted(() => {
      clearInterval(intervalId);
    });

    return {
      currentTime,
    };
  },

  template: `<div class="clock">{{ currentTime }}</div>`,
})

import { defineComponent, ref, watch } from 'vue';
import { UiButton } from '@shgk/vue-course-ui';
import './UiCounter.css';

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
      required: true,
    },

    min: {
      type: Number,
      default: 0,
    },

    max: {
      type: Number,
      default: Infinity,
    },
  },

  setup(props, { emit }) {
    const currentCount = ref(props.count);

    watch(() => props.count, (newCount) => {
      currentCount.value = newCount;
    });

    const decrement = () => {
      if (currentCount.value > props.min) {
        currentCount.value--;
        emit('update:count', currentCount.value);
      }
    };

    const increment = () => {
      if (currentCount.value < props.max) {
        currentCount.value++;
        emit('update:count', currentCount.value);
      }
    };

    return {
      currentCount,
      decrement,
      increment,
    };
  },

  template: `
    <div class="counter">
      <UiButton
        aria-label="Decrement"
        :disabled="currentCount <= min"
        @click="decrement"
      >
        ➖
      </UiButton>

      <span class="count" data-testid="count">{{ currentCount }}</span>

      <UiButton
        aria-label="Increment"
        :disabled="currentCount >= max"
        @click="increment"
      >
        ➕
      </UiButton>
    </div>
  `,
});

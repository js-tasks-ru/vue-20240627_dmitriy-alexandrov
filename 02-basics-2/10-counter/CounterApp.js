import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const counter = ref(0)
    const min = 0
    const max = 5

    return {
      counter,
      min,
      max
    }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        @click="counter--"
        :disabled="counter <= min"
      >➖</button>

      <span class="count" data-testid="count"> {{ counter }} </span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        @click="counter++"
        :disabled="counter >= max"
      >➕</button>
    </div>
  `,
})

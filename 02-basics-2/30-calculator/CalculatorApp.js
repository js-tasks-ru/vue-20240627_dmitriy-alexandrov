import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const firstOperand = ref(0)
    const secondOperand = ref(0)
    const curOperator = ref("sum")

    const result = computed(() => {
      switch (curOperator.value) {
        case "sum":
          return firstOperand.value + secondOperand.value
        case "subtract":
          return firstOperand.value - secondOperand.value
        case "multiply":
          return firstOperand.value * secondOperand.value
        case "divide":
          return firstOperand.value / secondOperand.value
        default:
          return -1;
      }
    })

    return {
      firstOperand,
      secondOperand,
      curOperator,
      result
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="firstOperand" />

      <div class="calculator__operators">
        <label><input type="radio" name="operator" v-model="curOperator" value="sum"/>➕</label>
        <label><input type="radio" name="operator" v-model="curOperator" value="subtract"/>➖</label>
        <label><input type="radio" name="operator" v-model="curOperator" value="multiply"/>✖</label>
        <label><input type="radio" name="operator" v-model="curOperator" value="divide"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="secondOperand"/>

      <div>=</div>

      <output> {{ result }} </output>
    </div>
  `,
})

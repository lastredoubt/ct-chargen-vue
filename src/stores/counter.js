import { ref, computed, shallowRef , reactive} from 'vue'
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', () => {

  const currentScreen = shallowRef(null)
  const currentStep = ref('blankSlate')

  const stepNamesMap = reactive({
    blankSlate:'blankSlate',
    rollup:'rollup',

  })


  return {currentScreen, currentStep, stepNamesMap }
})
/*
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
*/
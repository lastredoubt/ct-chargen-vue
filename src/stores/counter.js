import { ref, computed, shallowRef , reactive} from 'vue'
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', () => {

  const currentScreen = shallowRef(null)
  const currentStep = ref('blankSlate')
  const careerLog = reactive([])

  const stepNamesMap = reactive({
    blankSlate:'blankSlate',
    rollup:'rollup',
    setHomeworld: 'setHomeworld',
    chooseCareer: 'chooseCareer',
    doTerm: 'doTerm'

  })

const rollD6 = () => {
  let d1 = Math.floor((Math.random() * 6) + 1);
  
  return d1

}

const roll2D6 = () => {
  let d1 = Math.floor((Math.random() * 6) + 1);
  let d2 = Math.floor((Math.random() * 6) + 1);
  const rollTotal = d1 + d2

  return rollTotal

}

const roll2D6Gen = () => {
  let d1 = Math.floor((Math.random() * 6) + 1);
  let d2 = Math.floor((Math.random() * 6) + 1);
  const rollTotal = d1 + d2

  const rollResult = {
      rollTotal: null,
      rollFirst: null,
  }

  rollResult.rollTotal = rollTotal
  rollResult.rollFirst = d1


  return rollResult

}




  return {rollD6, roll2D6, roll2D6Gen, careerLog, currentScreen, currentStep, stepNamesMap }
})






// generateUPP() {

//   let upp = this.characteristics.strength.pHexValue + this.characteristics.dexterity.pHexValue + this.characteristics.endurance.pHexValue + this.characteristics.intelligence.pHexValue + this.characteristics.education.pHexValue + this.characteristics.social.pHexValue;

//   return upp;
// },
// 
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
import { ref, computed, shallowRef , reactive} from 'vue'
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', () => {

  const currentScreen = shallowRef(null)
  const currentStep = ref('blankSlate')
  const careerLog = reactive([])
  const skillsToChoose = ref(0)
  const skillQueue = reactive([])

  const stepNamesMap = reactive({
    blankSlate:'blankSlate',
    rollup:'rollup',
    setHomeworld: 'setHomeworld',
    chooseCareer: 'chooseCareer',
    doTerm: 'doTerm',
    chooseSkills: 'chooseSkills',

  })


//currentTermLog

  return { currentScreen, currentStep, careerLog, skillsToChoose, skillQueue, stepNamesMap }
})


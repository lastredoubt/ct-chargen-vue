import { ref, computed, shallowRef , reactive} from 'vue'
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', () => {

  const currentScreen = shallowRef(null)
  const currentStep = ref('blankSlate')
  const careerLog = reactive([])

  // Skills to choose is used for manual choices after other
  // automatic assignment of service or other skills
  const skillsToChoose = ref(0)

  //note - skillQ is for skills, stat boosts, benefits, 
  // and so on
  const skillQ = reactive([])


  const stepNamesMap = reactive({
    blankSlate:'blankSlate',
    rollup:'rollup',
    setHomeworld: 'setHomeworld',
    chooseCareer: 'chooseCareer',
    doTerm: 'doTerm',
    chooseSkills: 'chooseSkills',

  })

  const idCounter = ref(1)


//currentTermLog

  return { currentScreen, currentStep, careerLog, skillsToChoose, skillQ, stepNamesMap, idCounter }
})


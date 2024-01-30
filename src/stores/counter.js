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

  let idCounter = ref(1)

  // Called to clear the skill queue after we apply known pending skills
  function clearSkillQ() {
    skillQ.splice(0,skillQ.length);
  }

  function incrementCounterID() {
    console.log( '>>>>  Increment counter ID <<<<<<<  ')
    this.idCounter += 1
  }



//currentTermLog

  return { incrementCounterID, clearSkillQ, currentScreen, currentStep, careerLog, skillsToChoose, skillQ, stepNamesMap, idCounter }
})


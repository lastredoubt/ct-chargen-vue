import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'


/*
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const name = ref('Eduardo')
    const doubleCount = computed(() => count.value * 2)
    function increment() {
      count.value++
    }
  
    return { count, name, doubleCount, increment }
  })

 Setup Stores:

ref()s become state properties
computed()s become getters
function()s become actions

---------------------------

<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
// `name` and `doubleCount` are reactive refs
// This will also extract refs for properties added by plugins
// but skip any action or non reactive (non ref/reactive) property
const { name, doubleCount } = storeToRefs(store)
// the increment action can just be destructured
const { increment } = store
</script>




  */

export const useCharacterStore = defineStore('character', () => {

    // define main PC data
    const pcData = reactive( {
        name: 'New Character',              //--------
        age: 18,                            //--------
        flags: {
            alive: true,
            initialRolls: false,
            draftee:false,                           //--------
            promotions: true,
            newCycle: false,
            retired: false,
            // uppNeedsUpdate: false,
        }, 
        career: {
            // allows later choice of traveller / cepheus versions
            terms: 0,                           //--------
            pension: 0,                          //--------
            yearsCreation: 0,
            termHistory: [],                         //--------
            currentService: null,                           //--------
            currentServiceName: 'none',                           //--------
            finalCreationLog: [],

        },
        characteristics: {                          //--------
            strength: {
                longName: 'strength',
                shortName: 'Stren',
                value: 0,
            },
            dexterity: {
                longName: 'dexterity',
                shortName: 'Dext',
                value: 0,
            },
            endurance: {
                longName: 'endurance',
                shortName: 'Endur',
                value: 0,
            },
            intelligence: {
                longName: 'intelligence',
                shortName: 'Intel',
                value: 0,
            },
            education: {
                longName: 'education',
                shortName: 'Educ',
                value: 0,
            },
            social: {
                longName: 'social standing',
                shortName: 'Soc',
                value: 0,
            }
        },
        // noble title is a string that will be set via social standing
        nobleTitle: 'n/a',                            //--------
        tasMember: false,                            //--------
        militaryRank: {                           //--------
            // type is officer vs enlisted - to be standardized in CharGenTables
            //ct only cares about officer ranks
            type: '',
            level: 0,
            rankName: 'enlisted/none',
        },
        homeWorld: '(none)',                           //--------
        // skills are objects with teh following keys
        //          name: 'Vacc Suit',      // Name of skill for table
        //          skillIndex: 52, 
        //          skillVal: integer
        skills: {},                          //--------
        benefits: {}, 
        wealth:0,                         //--------
    
    })
    
    



    function getPHex(characteristic) {
        // console.log('Value to be converted to pseudoHex: --->' + characteristic)
        // console.log(characteristic.value)

        if (characteristic < 10 ) { 
            const returnValue = characteristic.toString()
            return returnValue
        }

        switch(characteristic) {
            case 10:
                return 'A';
                break;

            case 11:
                return 'B';
                break;
            case 12:
                return 'C';
                break;
            case 13:
                return 'D';
                break;
            case 14:
                return 'E';
                break;
            case 15: 
                return 'F';
                break;
            case 16:
                return 'G';
                break;
        }
    }





    // function adjustPHex (statName, pHexString) {
    //     // alert( 'Affects ' + statName + ', adds: ' + statShift)
    //     const numValue = pcData.characteristics[statName].value

    //     alert( statName + ' value is: ' + numValue + ', setting phex to: ' + pHexString)

    //     pcData.characteristics[statName].pHexValue = pHexString
    //     alert( 'DONE! ' )
         
    // }
    
  




    function bumpTheStat(statName, statShift) {
        // alert( 'Affects ' + statName + ', adds: ' + statShift)
        let statIndex = ''

        switch(statName) {
            case "Stren":
                statIndex = 'strength'
                break;
            case "Dext":
            statIndex = 'dexterity'
                break;
            case 'Endur':
            statIndex = 'endurance'
                break;
            case 'Intel':
            statIndex = 'intelligence'
                break;
            case 'Educ':
            statIndex = 'education'
                break;
            default:
                statIndex = 'social'
        }

        this.pcData.characteristics[statIndex].value += statShift

        //////// const newPHex = this.getPHex(this.pcData.characteristics[statIndex].value)
 
        // alert( 'Affects zee ' + statIndex + ', adds: ' + statShift + ' New phex = ' + newPHex + 'pHex value of ' +  statIndex + ' was ' + this.pcData.characteristics[statIndex].pHexValue)
        // // this.pcData.characteristics[statIndex].pHexValue = newPHex


         //////// adjustPHex( statIndex , newPHex  )
        // this.pcData.characteristics[statIndex].pHexValue = newPHex


        
    }
    
  



    function bumpAge(terms) {
        // console.log('Value to be converted to pseudoHex: --->' + characteristic)
        // console.log(characteristic.value)
        this.pcData.age = 18 + (terms*4)
        
    }




    // function addReupTerm() {
    //     // console.log('Value to be converted to pseudoHex: --->' + characteristic)
    //     // console.log(characteristic.value)
    //     this.pcData.career.terms += 1
        
    // }







  return {pcData, bumpTheStat, getPHex, bumpAge}

})






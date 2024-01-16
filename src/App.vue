
<template>

<div ref="characterSlot">
  
</div>

  <!---
  =======================================================================
  
            LEFT side

  =======================================================================  
  -->


  <div class="lrctcg-left">


  <!---
  =======================================================================
  
            Header Area

  =======================================================================  
  -->

    <div class="lrctcg-header">
      <h1> Welcome to the classic Traveller Character Generator</h1>
      <p>Interactive Classic Traveller Character Creation.</p>
    </div>



  <!---
  =======================================================================
  
            Current actions and feedback
            
  =======================================================================  
  -->
 


    <div class="lrctcg-current">

      <div id="creationUI">
        <component :is="creationStatus.currentScreen">

        </component>
      </div>


      <div id="resetButton">
        <h2>Add button here for reset/start over</h2>
      </div>

     <div class="careerLog">
      <hr>
      <h1>Creation Log</h1>
        <p v-for="(step,index) in creationStatus.careerLog" :key="'careerLog-'+index">{{step}}</p>
      </div>


    </div>

  </div>

  <!---
  =======================================================================
  
            CHARACTER SHEET
  =======================================================================  
  -->

  <div class="lrctcg-charsheet">
  
    <table class="lrctcg-chartable">
      <tr>  <!-- header row -->
        <th colspan="6">TAS Form 2a (character sheet)</th>
      </tr>
      <tr> <!-- name and UPP row -->
        <td colspan="3">
          <div class="celllabel">Name: </div><p>  {{pcData.name}}</p>
        </td>
        <td colspan="3"><div class="celllabel">UPP: <br></div><p> {{ generateUPP}}</p></td>
      </tr>

      <tr> <!-- Stats Row -->
        <td> <div class="celllabel">{{ pcData.characteristics.strength.shortName }}:</div><p> {{pcData.characteristics.strength.pHexValue}} / ({{pcData.characteristics.strength.value}})</p></td>
        <td> <div class="celllabel">{{ pcData.characteristics.dexterity.shortName }}:</div><p>{{pcData.characteristics.dexterity.pHexValue}} / ({{pcData.characteristics.dexterity.value}})</p></td>
        <td> <div class="celllabel">{{ pcData.characteristics.endurance.shortName }}:</div><p>{{pcData.characteristics.endurance.pHexValue}} / ({{pcData.characteristics.endurance.value}})</p></td>
        <td> <div class="celllabel">{{ pcData.characteristics.intelligence.shortName }}:</div><p>{{pcData.characteristics.intelligence.pHexValue}} / ({{pcData.characteristics.intelligence.value}})</p></td>
        <td> <div class="celllabel">{{ pcData.characteristics.education.shortName }}:</div><p>{{pcData.characteristics.education.pHexValue}} / ({{pcData.characteristics.education.value}})</p></td>
        <td> <div class="celllabel">{{ pcData.characteristics.social.shortName }}:</div><p>{{pcData.characteristics.social.pHexValue}} / ({{pcData.characteristics.social.value}})</p></td>
                                                 
      </tr>

      <tr> <!-- name and UPP row -->
        <td colspan="2">
          <div class="celllabel">Noble Title: </div><p>  {{pcData.nobleTitle}}</p>
        </td>
        <td colspan="2"><div class="celllabel">Age:</div><p> {{pcData.age}}</p></td>
        <td colspan="2"><div class="celllabel">TAS Member:</div><p> {{pcData.tasMember? 'Yes':'False'}}</p></td>
      </tr>

      <tr>
        <td colspan="6"><div class="celllabel">Homeworld:</div><p> {{pcData.homeWorld}}</p></td>
      </tr>


      <tr>
        <td class="sectionLabel" colspan="6">Military Record</td>
      </tr>

      <tr>
        <td colspan="4"><div class="celllabel">Service:</div><p> {{pcData.career.currentServiceName}}</p></td>
        <td colspan="1"><div class="celllabel">Terms:</div><p> {{ pcData.career.terms }}</p></td>
        <td colspan="1"><div class="celllabel">Drafted:</div><p> {{pcData.flags.draftee?'Yes':'No'}}</p></td>
      </tr>

      <tr>
        <td colspan="2"><div class="celllabel">Rank:</div><p> {{pcData.militaryRank.rankName}}</p></td>
        <td colspan="2"><div class="celllabel">Retired:</div><p> {{pcData.flags.retired?'Yes':'No'}}</p></td>
        <td colspan="2"><div class="celllabel">Pension:</div><p> Cr. {{ pcData.career.pension }}/mo</p></td>
      </tr>

      <tr>
        <td colspan="6">
          <div class="celllabel">Service History:</div>
          <p v-for="(step,index) in pcData.career.termHistory" :key="'term-history'+index">{{step}}</p>
        </td>
      </tr>


      <tr>
        <td class="sectionLabel" colspan="6">Training</td>
      </tr>

      <tr>
        <td colspan="6">
          <div class="celllabel">Learned Skills:</div>
          <div v-for="(individualSkill, key) in pcData.skills" :key="key + '-skillsList'">
            {{ individualSkill.name }} - {{ individualSkill.level }}
          </div>



          <p>{{  }}</p>
        </td>
      </tr>

      <tr>
        <td class="sectionLabel" colspan="6">Posessions and Benefits</td>
      </tr>

      <tr>
        <td colspan="6">
          <p> Rifle</p>
          <p> High Passage</p>
          <p> v-for through pcData.benefits</p>

        </td>
      </tr>



      <tr>
        <td colspan="3"><div class="celllabel">Wealth:</div><p> Cr {{pcData.wealth}} </p></td>
        <td colspan="3"><div class="celllabel">Retired:</div><p> {{pcData.flags.retired?'Yes':'No'}}</p></td>
      </tr>

      

    </table>

  
    
  </div>    <!--    close out charsheet DIV -->




  <!---
  =======================================================================
  
            Footer
            
  =======================================================================  
  -->


  <div class="lrctcg-footer">
  

    <p>{{  pcData }}</p>

    
  </div>

</template>




<script setup>

/*-------------------------------------
        IMPORTS
----------------------------------------*/

// import relevant vue libraries
import { reactive, provide, ref , computed, onMounted, watch} from 'vue';
import { storeToRefs } from 'pinia';

// import datastore - pinia 
import { useCharacterStore } from '@/stores/character2'
import {useCounterStore} from '@/stores/counter'


import {getPHex} from './assets/General/GetPhex'
import{rollD6, roll2D6} from './assets/General/RollDice';


//import New Character components

// import NewCharacter from './components/NewCharacter.vue';
import RollStats from './components/chargen/ct/ttb/RollStats.vue';
import SetHomeworld from './components/chargen/ct/ttb/SetHomeworld.vue';
import chooseCareer from './components/chargen/ct/ttb/chooseCareer.vue';
import doTerm from './components/chargen/ct/ttb/doTerm.vue';
import chooseSkills from './components/chargen/ct/ttb/chooseSkills.vue';




/*------------------------------------------------------------
        Character Start - status, and entry point
-------------------------------------------------------------*/

// creates the stub character by associating with the datastore
// const character = useCharacterStore()
const charData = useCharacterStore()
//unpacks returned values specifically so they are accessible and reactive
const {pcData} = storeToRefs(charData)

const creationStatus = useCounterStore()
const { currentScreen, currentStep, careerLog, skillsToChoose, skillQueue, stepNamesMap } = storeToRefs( creationStatus)







/*------------------------------------------------------------
        Screen Switcher - switch creationStatus.currentScreen based on 
          careerStarted.value
          creationStatus.currentStep

          We will run a if on mounting to check if creation status is blank
          and if so - set teh new character screen

          NOTE: Watcher for pinia has to be function format
-------------------------------------------------------------*/


onMounted( () => { 

console.log('onMounted');
if (creationStatus.currentStep === creationStatus.stepNamesMap.blankSlate) { 
  console.log('no career started - setting currentScreen')
  creationStatus.currentStep = 'rollup'
//  creationStatus.currentScreen = NewCharacter 
  creationStatus.currentScreen = RollStats 
}

} )



/*---------------------------------------------------------------

Data extraction

------------------------------------------------------------------*/




/*---------------------------------------------------------------

Data collection /formatting

------------------------------------------------------------------*/


const generateUPP = computed( () => {
// //    let upp = this.pcData.characteristics.strength.pHexValue + this.pcData.characteristics.dexterity.pHexValue + this.pcData.characteristics.endurance.pHexValue + this.pcData.characteristics.intelligence.pHexValue + this.pcData.characteristics.education.pHexValue + this.pcData.characteristics.social.pHexValue;
    const strV = charData.pcData.characteristics.strength.pHexValue
    const dexV = charData.pcData.characteristics.dexterity.pHexValue
    const endV = charData.pcData.characteristics.endurance.pHexValue
    const intV = charData.pcData.characteristics.intelligence.pHexValue
    const eduV = charData.pcData.characteristics.education.pHexValue
    const socV = charData.pcData.characteristics.social.pHexValue

    const uppVal = strV+dexV+endV+intV+eduV+socV
    return uppVal;
})



watch(
  () => creationStatus.currentStep,
  (currentStep) => {

//    }
   if ( creationStatus.currentStep ===  creationStatus.stepNamesMap.setHomeworld  ) {
    creationStatus.currentScreen = SetHomeworld
    console.log( 'SWITCHING WATCHER: setting Homeworld')

   }
   if ( creationStatus.currentStep ===  creationStatus.stepNamesMap.chooseCareer  ) {
    creationStatus.currentScreen = chooseCareer
    console.log( 'SWITCHING WATCHER: to choose career')

   }
   if ( creationStatus.currentStep ===  creationStatus.stepNamesMap.doTerm  ) {
    creationStatus.currentScreen = doTerm
    console.log( 'SWITCHING WATCHER: starting a term')

   }
   if ( creationStatus.currentStep ===  creationStatus.stepNamesMap.chooseSkills  ) {
    creationStatus.currentScreen = chooseSkills
    console.log( 'SWITCHING WATCHER: chooseing skills')

   }
  
  }
)









</script>










<style>

#lr-travtools-ct-chargen {
  background-color: #e6ebf0;
  font-family: Arial, Helvetica, sans-serif;
  color: #111111;
}



#lr-travtools-ct-chargen .lrctcg-left {
width: 48%;
float:left;
padding: 0.5em;
}


#lr-travtools-ct-chargen .lrctcg-charsheet {
  width: 47%;
  float:right;
  padding: 0.6em 0.6em 0.6em 1.5em;
  border-left: 1px solid black;

}

#lr-travtools-ct-chargen .lrctcg-footer {
  clear:both;
  width:100%;
  padding: 5px;
  border-top: 1px solid black;
}


#lr-travtools-ct-chargen h1,h2,h3 {
  color: #be2218;
}

#lr-travtools-ct-chargen a:link, a:visited {
  color: #be2218;
}

#lr-travtools-ct-chargen a:hover {
  color: #555555;
}

#lr-travtools-ct-chargen table, th, td ,tr {
  border: 1px solid;
  border-collapse: collapse;
  text-align:left;
  padding: .3em;
}

#lr-travtools-ct-chargen table.lrctcg-chartable {
  width: 95%;
}

#lr-travtools-ct-chargen th {
  color: #cfcfcf;
  border-color: white;
  background-color: #222;
  font-weight: bold;
}

#lr-travtools-ct-chargen td.sectionLabel {
  color: #cfcfcf;
  border-color: white;
  background-color: #222;
  font-weight: bold;
}


#lr-travtools-ct-chargen table div.celllabel {
  color: #111111;
  font-size: 0.8em;
}




</style>

<!-- 
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>


-->
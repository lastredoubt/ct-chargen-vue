<template>
  <main>
    <h1> Welcome to the character sheet generator</h1>



    <!--
      Starting point if no character is present
    -->
    <div ref="characterSlot">
      
    <component :is="creationStatus.currentScreen">

    </component>

    </div>
    <div>
      <h2>Add title of nobility lookup to basic char data</h2>
    </div>
    <div>
      <h2>Add button here for reset/start over</h2>
    </div>

    <hr>
    <!--
      Initial trial of character dump
    -->
    <h2>Character</h2>
    <p><strong>Name: </strong> {{ character.pc.name }}</p>
    <label><strong>Rename the Character:</strong></label><input type="text" v-model="character.pc.name">
    <p><strong>UPP: </strong> {{ character.pc.generateUPP() }}</p>
    <p><strong>Homeworld: </strong> {{ character.pc.homeWorld }}</p>

    <hr />
    
    <p>{{  character.pc }}</p>
    

  </main>
</template>


<script setup>
/*-------------------------------------
        IMPORTS
----------------------------------------*/

// import relevant vue libraries
import { reactive, provide, ref , computed, onMounted, watch} from 'vue';


// import datastore - pinia 
import { useCharacterStore } from '@/stores/character'
import {useCounterStore} from '@/stores/counter'


//import New Character components
import NewCharacter from '../components/NewCharacter.vue';
import RollStats from '../components/chargen/ct/ttb/RollStats.vue';
import SetHomeworld from '../components/chargen/ct/ttb/SetHomeworld.vue';
import chooseCareer from '../components/chargen/ct/ttb/chooseCareer.vue';

/*------------------------------------------------------------
        Character Start - status, and entry point
-------------------------------------------------------------*/

// creates the stub character by associating with the datastore
const character = useCharacterStore()
const creationStatus = useCounterStore()

/*------------------------------------------------------------
        Screen Switcher - switch creationStatus.currentScreen based on 
          careerStarted.value
          creationStatus.currentStep

          We will run a if on mounting to check if creation status is blank
          and if so - set teh new character screen

          NOTE: Watcher for pinia has to be function format
-------------------------------------------------------------*/

onMounted( () => { 

console.log('onUnmounted');
if (creationStatus.currentStep === creationStatus.stepNamesMap.blankSlate) { 
  console.log('no career started - setting currentScreen')
  creationStatus.currentScreen = NewCharacter 
}

} )



watch(
  () => creationStatus.currentStep,
  (currentStep) => {

   if ( creationStatus.currentStep ===  creationStatus.stepNamesMap.rollup  ) {
    creationStatus.currentScreen = RollStats
    console.log( 'SWITCHING WATCHER: rollupset')

   }
   if ( creationStatus.currentStep ===  creationStatus.stepNamesMap.setHomeworld  ) {
    creationStatus.currentScreen = SetHomeworld
    console.log( 'SWITCHING WATCHER: setting Homeworld')

   }
   if ( creationStatus.currentStep ===  creationStatus.stepNamesMap.chooseCareer  ) {
    creationStatus.currentScreen = chooseCareer
    console.log( 'SWITCHING WATCHER: setting Homeworld')

   }
  
  }
)



// if we haven't started, we first start a character


/* 
const computedUPP = computed(() => {
  return character.pc.generateUPP();
})
*/



</script>


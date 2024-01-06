<template>

<h1>What is your character's name and homeworld?:</h1>
<h2> Style this for better spacing of label vs input</h2>
<div>
<label><strong>Name the Character:</strong></label><input type="text" v-model="character.pcData.name">
</div>
<div>
<label><strong>Enter the homeworld if known:</strong></label><input type="text" v-model="character.pcData.homeWorld">
</div>
<button @click.prevent="acceptStats">Accept and continue</button>




</template>

<script setup>

// import relevant vue libraries
import { reactive, provide, ref, computed, onMounted } from 'vue';



/*-------------------------------------
        Iport character datastore and setup
----------------------------------------*/
import { useCharacterStore } from '@/stores/character2'
// creates the stub character by assiciating with the datastore
const character = useCharacterStore()


/*-------------------------------------
        import global status datastore
----------------------------------------*/
import { useCounterStore } from '@/stores/counter'
const creationStatus = useCounterStore()








// /*-------------------------------------
//         Accept the stats
// ----------------------------------------*/

const acceptStats = () => { 

console.log('Accept Name ');

creationStatus.currentStep = creationStatus.stepNamesMap.chooseCareer



}




</script>


<style scoped>



</style>
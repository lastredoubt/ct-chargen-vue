<template>

<h1>What is your character's name and homeworld?:</h1>
<div>
<label><strong>Name the Character:</strong></label><input type="text" v-model="character.pc.name">
</div>
<div>
<label><strong>Enter the homeworld if known:</strong></label><input type="text" v-model="character.pc.homeWorld">
</div>
<button @click.prevent="acceptStats">Accept and continue</button>

<!-- 
<div><h2>UPP: {{ upp }}</h2></div>
<table>
    <tr>
        <th>{{character.pc.characteristics.strength.longName}}</th>
        <th>{{character.pc.characteristics.dexterity.longName}}</th>
        <th>{{character.pc.characteristics.endurance.longName}}</th>
        <th>{{character.pc.characteristics.intelligence.longName}}</th>
        <th>{{character.pc.characteristics.education.longName}}</th>
        <th>{{character.pc.characteristics.social.longName}}</th>
    </tr>
    <tr>
        <td>{{ charStats.str }} ({{ strP }})</td>
        <td>{{ charStats.dex }} ({{ dexP }})</td>
        <td>{{ charStats.end }} ({{ endP }})</td>
        <td>{{ charStats.int }} ({{ intP }})</td>
        <td>{{ charStats.edu }} ({{ eduP }})</td>
        <td>{{ charStats.soc }} ({{ socP }})</td>
    </tr>
</table>

<button @click.prevent="acceptStats">Accept and continue</button>
<button @click.prevent="rollStats">Cheat and Reroll</button>
-->


</template>

<script setup>

// import relevant vue libraries
import { reactive, provide, ref, computed, onMounted } from 'vue';



/*-------------------------------------
        Iport character datastore and setup
----------------------------------------*/
import { useCharacterStore } from '@/stores/character'
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
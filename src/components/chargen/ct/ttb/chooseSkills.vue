<template>

<div class="stageTitle">
<h1>Let's Choose Skills: </h1>
</div>

<div><h2>Existing Skills</h2>

</div>

<div><h2>Skills Earned This Term</h2>

</div>

<div><h2>Remaning Skills to choose:</h2>

</div>



</template>

<script setup>

// import relevant vue libraries
import { reactive, provide, ref, computed, onMounted } from 'vue';


/*-------------------------------------
        Import character datastore and setup
----------------------------------------*/
import { useCharacterStore } from '@/stores/character'
// creates the stub character by assiciating with the datastore
const character = useCharacterStore()


/*-------------------------------------
        import global status datastore
----------------------------------------*/
import { useCounterStore } from '@/stores/counter'
const creationStatus = useCounterStore()


/*-------------------------------------
        import character tables
----------------------------------------*/
import { cttbCharGenTables } from '../../../../assets/CharacterData/ChargenTablesCTTB';
const tables = reactive(cttbCharGenTables)




// /*-------------------------------------
//         Initialize Local Data including matching computed Phex
// ----------------------------------------*/






// /*-------------------------------------
//         Generate a uniquekey based on service and text
// ----------------------------------------*/






 /*-------------------------------------

 
         try to enlist in desired career

            Pick a random career if that fails


 ----------------------------------------*/








</script>


<style scoped>



</style>
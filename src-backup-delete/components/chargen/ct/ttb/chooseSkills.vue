<template>

<div class="stageTitle">
<h1>Let's Choose Skills: </h1>
</div>

<div><h2>Existing Skills</h2>
<p>This will be character.pc.skills[]</p>
</div>

<div><h2>Skills Earned This Term</h2>
        <p>This will be creationStatus.skillQueue</p>
        <ul>
                <li v-for="(skillItem, index) in creationStatus.skillQueue" 
                :key="'skillqueue' + index">{{ skillItem.name }}</li>

        </ul>

</div>

<div><h2>Remaning Skills to choose: {{ creationStatus.skillsToChoose }}</h2>

</div>

<div>

<!-- 

        <div><h2>Possible Career Tracks and Odds</h2></div>
<table>
    
    <tr>
        <th class="firstCol">Services</th>
        <th v-for="(service, index) in careerStart" :key="genServicekey(service, 'tableHeader')" >{{service.displayName}}</th>
    </tr>
    
    <tr>
        <td class="firstCol">Required enlistment roll</td>
        <td v-for="(service, index) in careerStart" :key="genServicekey(service, 'enlistRollRow')" >{{service.enlistment.roll}}+</td>
    </tr>

    <tr>
        <td class="firstCol">+1 to enlist if:</td>
        <td v-for="(service, index) in careerStart" :key="genServicekey(service, 'plusone')" >{{service.enlistment.dm1.shortName}} {{ service.enlistment.dm1.value }}{{ service.enlistment.dm1.value === null ? '' : '+' }}</td>
    </tr>
    <tr>
        <td class="firstCol">+2 to enlist if:</td>
        <td v-for="(service, index) in careerStart" :key="genServicekey(service, 'plustwo')" >{{service.enlistment.dm2.shortName}} {{ service.enlistment.dm2.value }}{{ service.enlistment.dm2.value === null ? '' : '+' }}</td>
    </tr>
    <tr class="survival">
        <td class="firstCol">Survival Roll</td>
        <td v-for="(service, index) in careerStart" :key="genServicekey(service, 'survival')" >{{service.survival.roll}}+</td>
    </tr>
    <tr class="survivalDM">
        <td class="firstCol">Survival DM</td>
        <td v-for="(service, index) in careerStart" :key="genServicekey(service, 'survdm')" >{{service.survival.dm2.shortName}} {{ service.survival.dm2.value }}+</td>
    </tr>
    <tr class="comission">
        <td class="firstCol">Commission</td>
        <td v-for="(service, index) in careerStart" :key="genServicekey(service, 'commish')" >{{service.commission.roll}}{{ service.commission.roll === null ? '' : '+' }}    </td>
    </tr>
    <tr class="commisiondm">
        <td class="firstCol">Commisioning DM if</td>
        <td v-for="(service, index) in careerStart" :key="genServicekey(service, 'commishdm')" >{{service.commission.dm1.shortName}} {{ service.commission.dm1.value }}{{ service.commission.dm1.value === null ? '' : '+' }}</td>
    </tr>
    <tr class="promote">
        <td class="firstCol">Promotion Roll</td>
        <td v-for="(service, index) in careerStart" :key="genServicekey(service, 'promote')" >{{service.promotion.roll}}{{ service.promotion.roll === null ? '' : '+' }} </td>
    </tr>
    <tr class="promotedm">
        <td class="firstCol">Promotion DM if</td>
        <td v-for="(service, index) in careerStart" :key="genServicekey(service, 'promotedm')" >{{service.promotion.dm1.shortName}} {{ service.promotion.dm1.value }}{{ service.promotion.dm1.value === null ? '' : '+' }}</td>
    </tr>
    <tr class="reup">
        <td class="firstCol">Re-enlistment roll</td>
        <td v-for="(service, index) in careerStart" :key="genServicekey(service, 'reup')" >{{service.reenlist.roll}}+</td>
    </tr>

</table>

-->





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
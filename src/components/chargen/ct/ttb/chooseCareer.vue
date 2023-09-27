<template>

<h1>Let's pick a career path: </h1>


<div><h2>Career Tracks</h2></div>
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
        <td v-for="(service, index) in careerStart" :key="genServicekey(service, 'plusone')" >{{service.enlistment.dm1.shortName}} {{ service.enlistment.dm1.value }}+</td>
    </tr>
    <tr>
        <td class="firstCol">+2 to enlist if:</td>
        <td v-for="(service, index) in careerStart" :key="genServicekey(service, 'plustwo')" >{{service.enlistment.dm2.shortName}} {{ service.enlistment.dm2.value }}+</td>
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
        <td v-for="(service, index) in careerStart" :key="genServicekey(service, 'commish')" >{{service.commission.roll}}+</td>
    </tr>
    <tr class="commisiondm">
        <td class="firstCol">Commisioning DM if</td>
        <td v-for="(service, index) in careerStart" :key="genServicekey(service, 'commishdm')" >{{service.commission.dm1.shortName}} {{ service.commission.dm1.value }}+</td>
    </tr>
    <tr class="promote">
        <td class="firstCol">Promotion Roll</td>
        <td v-for="(service, index) in careerStart" :key="genServicekey(service, 'promote')" >{{service.promotion.roll}}+</td>
    </tr>
    <tr class="promotedm">
        <td class="firstCol">Promotion DM if</td>
        <td v-for="(service, index) in careerStart" :key="genServicekey(service, 'promotedm')" >{{service.promotion.dm1.shortName}} {{ service.promotion.dm1.value }}+</td>
    </tr>
    <tr class="reup">
        <td class="firstCol">Re-enlistment roll</td>
        <td v-for="(service, index) in careerStart" :key="genServicekey(service, 'reup')" >{{service.reenlist.roll}}+</td>
    </tr>

</table>
<!--
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


/*-------------------------------------
        import character tables
----------------------------------------*/
import { cttbCharGenTables } from '../../../../assets/CharacterData/ChargenTablesCTTB';
const tables = reactive(cttbCharGenTables)




// /*-------------------------------------
//         Initialize Local Data including matching computed Phex
// ----------------------------------------*/
const careerStart = reactive(tables.services)






// /*-------------------------------------
//         Accept the stats
// ----------------------------------------*/

// const acceptStats = () => { 

// console.log('Accept Name ');

// creationStatus.currentStep = creationStatus.stepNamesMap.chooseCareer

// }



// /*-------------------------------------
//         Generate a uniquekey based on service and text
// ----------------------------------------*/

const genServicekey = (service, header) => {

    const tempKey = service.shortName.toString() + header.toString()


    return tempKey

}





// /*-------------------------------------
//         Initialize Local Data including matching computed Phex
// ----------------------------------------*/

// const charStats = reactive({
//     str: 0,
//     dex: 0,
//     end: 0,
//     int: 0,
//     edu: 0,
//     soc: 0,
// })


// const strP = computed( () => {
//     const pHex = getPHexValue(charStats.str)
//     return pHex
// })
// const dexP = computed( () => {
//     const pHex = getPHexValue(charStats.dex)
//     return pHex
// })
// const endP = computed( () => {
//     const pHex = getPHexValue(charStats.end)
//     return pHex
// })
// const intP = computed( () => {
//     const pHex = getPHexValue(charStats.int)
//     return pHex
// })
// const eduP = computed( () => {
//     const pHex = getPHexValue(charStats.edu)
//     return pHex
// })
// const socP = computed( () => {
//     const pHex = getPHexValue(charStats.soc)
//     return pHex
// })
// const upp = computed( () => {
//     const tempUPP =  strP.value + dexP.value + endP.value + intP.value + eduP.value + socP.value
//     return tempUPP
// })



// /*-------------------------------------
//         roll a characteristic

//         preserving teh first die roll if I ever get to T5 / genetics
// ----------------------------------------*/

// const roll2D6 = () => {
//     let d1 = Math.floor((Math.random() * 6) + 1);
//     let d2 = Math.floor((Math.random() * 6) + 1);
//     const rollTotal = d1 + d2

//     const rollResult = {
//         rollTotal: null,
//         rollFirst: null,
//     }

//     rollResult.rollTotal = rollTotal
//     rollResult.rollFirst = d1


//     return rollResult

// }



// /*-------------------------------------
//         Roll Basic UPP
// ----------------------------------------*/
// const rollStats = () => { 

// console.log('>>> rolling stats ');

// charStats.str = roll2D6().rollTotal
// charStats.dex = roll2D6().rollTotal
// charStats.end = roll2D6().rollTotal
// charStats.int = roll2D6().rollTotal
// charStats.edu = roll2D6().rollTotal
// charStats.soc = roll2D6().rollTotal


// }



/*-------------------------------------
        onMounted initial roll - setup service info
----------------------------------------*/
onMounted( () => { 

} )




</script>


<style scoped>



</style>
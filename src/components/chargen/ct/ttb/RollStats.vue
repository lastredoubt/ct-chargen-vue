<template>

<h1>Your starting stats:</h1>

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

</template>

<script setup>

// import relevant vue libraries
import { reactive, provide, ref, computed, onMounted } from 'vue';



/*-------------------------------------
        Iport phex function
----------------------------------------*/
import {getPHexValue} from '../../../../assets/General/GetPhex'


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
        Initialize Local Data including matching computed Phex
----------------------------------------*/

const charStats = reactive({
    str: 0,
    dex: 0,
    end: 0,
    int: 0,
    edu: 0,
    soc: 0,
})


const strP = computed( () => {
    const pHex = getPHexValue(charStats.str)
    return pHex
})
const dexP = computed( () => {
    const pHex = getPHexValue(charStats.dex)
    return pHex
})
const endP = computed( () => {
    const pHex = getPHexValue(charStats.end)
    return pHex
})
const intP = computed( () => {
    const pHex = getPHexValue(charStats.int)
    return pHex
})
const eduP = computed( () => {
    const pHex = getPHexValue(charStats.edu)
    return pHex
})
const socP = computed( () => {
    const pHex = getPHexValue(charStats.soc)
    return pHex
})
const upp = computed( () => {
    const tempUPP =  strP.value + dexP.value + endP.value + intP.value + eduP.value + socP.value
    return tempUPP
})



/*-------------------------------------
        roll a characteristic

        preserving teh first die roll if I ever get to T5 / genetics
----------------------------------------*/

const roll2D6 = () => {
    let d1 = Math.floor((Math.random() * 6) + 1);
    let d2 = Math.floor((Math.random() * 6) + 1);
    const rollTotal = d1 + d2

    const rollResult = {
        rollTotal: null,
        rollFirst: null,
    }

    rollResult.rollTotal = rollTotal
    rollResult.rollFirst = d1


    return rollResult

}



/*-------------------------------------
        Roll Basic UPP
----------------------------------------*/
const rollStats = () => { 

console.log('>>> rolling stats ');

charStats.str = roll2D6().rollTotal
charStats.dex = roll2D6().rollTotal
charStats.end = roll2D6().rollTotal
charStats.int = roll2D6().rollTotal
charStats.edu = roll2D6().rollTotal
charStats.soc = roll2D6().rollTotal


}



/*-------------------------------------
        onMounted initial roll
----------------------------------------*/
onMounted( () => { 

console.log('onUnmounted -> Rollstats');

rollStats()


} )



/*-------------------------------------
        onMounted initial roll
----------------------------------------*/

const acceptStats = () => { 

console.log('Accept stats ');


character.pc.characteristics.strength.value = charStats.str
character.pc.characteristics.strength.pHexValue = strP

character.pc.characteristics.dexterity.value = charStats.dex
character.pc.characteristics.dexterity.pHexValue = dexP

character.pc.characteristics.endurance.value = charStats.end
character.pc.characteristics.endurance.pHexValue = endP

character.pc.characteristics.intelligence.value = charStats.int
character.pc.characteristics.intelligence.pHexValue = intP 

character.pc.characteristics.education.value = charStats.edu
character.pc.characteristics.education.pHexValue = eduP

character.pc.characteristics.social.value = charStats.soc
character.pc.characteristics.social.pHexValue = socP

character.pc.flags.initialRolls = true

creationStatus.currentStep = creationStatus.stepNamesMap.setHomeworld

}



</script>


<style scoped>



</style>
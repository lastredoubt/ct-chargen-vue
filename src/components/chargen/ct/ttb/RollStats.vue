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
        <td>{{ charStats.str }} / {{ strP }}</td>
        <td>{{ charStats.dex }} / {{ dexP }}</td>
        <td>{{ charStats.end }} / {{ endP }}</td>
        <td>{{ charStats.int }} / {{ intP }}</td>
        <td>{{ charStats.edu }} / {{ eduP }}</td>
        <td>{{ charStats.soc }} / {{ socP }}</td>
    </tr>
</table>

<button @click.prevent="accept">Accept and continue</button>
<button @click.prevent="reroll">Cheat and Reroll</button>

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
onMounted( () => { 

console.log('onUnmounted -> Rollstats');

charStats.str = roll2D6().rollTotal
charStats.dex = roll2D6().rollTotal
charStats.end = roll2D6().rollTotal
charStats.int = roll2D6().rollTotal
charStats.edu = roll2D6().rollTotal
charStats.soc = roll2D6().rollTotal


} )



</script>


<style scoped>



</style>
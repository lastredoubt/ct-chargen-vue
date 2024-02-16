<template>

<h1>Your starting stats:</h1>

<div><h2>UPP: {{ upp }}</h2></div>
<div>
<table>
    <tr>
        <th>{{character.pcData.characteristics.strength.longName}}</th>
        <th>{{character.pcData.characteristics.dexterity.longName}}</th>
        <th>{{character.pcData.characteristics.endurance.longName}}</th>
        <th>{{character.pcData.characteristics.intelligence.longName}}</th>
        <th>{{character.pcData.characteristics.education.longName}}</th>
        <th>{{character.pcData.characteristics.social.longName}}</th>
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
</div>



<div class="titleDisplay">
    <p><strong>Title:</strong> {{ currentTitle.title }}</p>
</div>

<button @click.prevent="acceptStats">Accept and continue</button>
<button @click.prevent="reRollStats">Cheat and Reroll</button>

</template>

<script setup>

// import relevant vue libraries
import { reactive, computed, onMounted } from 'vue';



/*-------------------------------------
        Iport phex function and dice
----------------------------------------*/
import {getPHex} from '../../../../assets/General/GetPhex.js'
import{roll2D6} from '../../../../assets/General/RollDice';
 


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



/*-------------------------------------
        get character tables for nobility
----------------------------------------*/

import { NobilityTables } from '../../../../assets/CharacterData/NobilityTables';
const nobility = NobilityTables
let currentTitle = reactive({title: ''})

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
    const pHex = getPHex(charStats.str)
    return pHex
})
const dexP = computed( () => {
    const pHex = getPHex(charStats.dex)
    return pHex
})
const endP = computed( () => {
    const pHex = getPHex(charStats.end)
    return pHex
})
const intP = computed( () => {
    const pHex = getPHex(charStats.int)
    return pHex
})
const eduP = computed( () => {
    const pHex = getPHex(charStats.edu)
    return pHex
})
const socP = computed( () => {
    const pHex = getPHex(charStats.soc)
    return pHex
})
const upp = computed( () => {
    const tempUPP =  strP.value + dexP.value + endP.value + intP.value + eduP.value + socP.value
    return tempUPP
})





/*-------------------------------------
        nobleTitle
----------------------------------------*/

const setNoble = () => { 
    if (nobility.nobilityTitles[charStats.soc] === 'none') {
        currentTitle.title = 'none'
        return
    } else {

    // console.log('Title is not "none"')
        const titleString = nobility.nobilityTitles[charStats.soc].t1 + ', ' + nobility.nobilityTitles[charStats.soc].t2 + ', or ' + nobility.nobilityTitles[charStats.soc].t3
        currentTitle.title = titleString
    }
}



/*-------------------------------------
        Roll Basic UPP
----------------------------------------*/
const rollStats = () => { 

// console.log('>>> rolling stats using counter ');

charStats.str = roll2D6()
charStats.dex = roll2D6()
charStats.end = roll2D6()
charStats.int = roll2D6()
charStats.edu = roll2D6()
charStats.soc = roll2D6()

creationStatus.careerLog.push("Stats have been rolled")

setNoble()

}


/*-------------------------------------
        Roll Basic UPP
----------------------------------------*/
const reRollStats = () => { 
    
creationStatus.careerLog.push("We've cheated and are rerolling stats:")

rollStats()

}





/*-------------------------------------
        onMounted initial roll
----------------------------------------*/
onMounted( () => { 

// console.log('onUnmounted -> Rollstats');

rollStats()


} )




 

/*-------------------------------------
        Accept Stats
----------------------------------------*/

const acceptStats = () => { 

// console.log('Accept stats ');

creationStatus.careerLog.push('Stats are chosen. The UPP is:' + upp.value)
creationStatus.careerLog.push('The character title is:' + currentTitle.title)

 
character.pcData.characteristics.strength.value = charStats.str
// character.pcData.characteristics.strength.pHexValue = strP

character.pcData.characteristics.dexterity.value = charStats.dex
// character.pcData.characteristics.dexterity.pHexValue = dexP

character.pcData.characteristics.endurance.value = charStats.end
// character.pcData.characteristics.endurance.pHexValue = endP

character.pcData.characteristics.intelligence.value = charStats.int
// character.pcData.characteristics.intelligence.pHexValue = intP 

character.pcData.characteristics.education.value = charStats.edu
// character.pcData.characteristics.education.pHexValue = eduP

character.pcData.characteristics.social.value = charStats.soc
// character.pcData.characteristics.social.pHexValue = socP

character.pcData.nobleTitle = currentTitle.title

character.pcData.flags.initialRolls = true

creationStatus.currentStep = creationStatus.stepNamesMap.setHomeworld

}



</script>


<style scoped>



</style>
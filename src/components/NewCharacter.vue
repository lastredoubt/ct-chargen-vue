<template>
    <div>
        <form action="">
            <label>{{  ruleLabel }} : </label>
            <select name="ruleSet"  id="ruleSet" v-model="selectedShortName">
                <option v-for="(ruleSet, index) in ruleList" :value="ruleSet.shortName" :key="ruleSet.shortName">{{ ruleSet.longName }} </option>

            </select>
            <div>
                <button @click.prevent="startCharacterRolls(selectedShortName)">Let's Get Started</button>
            </div>
        </form>
    </div>


</template>


<script setup>
/*-------------------------------------
        IMPORTS and setup
----------------------------------------*/

// import relevant vue libraries
import { reactive, provide, ref, computed } from 'vue';


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



//import character generation sets
import {CharacterRules}  from '../assets/CharacterData/CharacterRules.js'
const charRuleSets = reactive(CharacterRules)
//assign out values
// used to label the selection dropdown
const ruleLabel = ref(charRuleSets.ruleLabel)
// gets the list of available rule sets - future proofing
const ruleList = reactive(charRuleSets.availableRules)
// used to set the default ruleSet (once there is more than one) and manage teh selection
const defaultIndex = ruleList.findIndex( function(aRuleSet) { return aRuleSet.defaultRules === true }) 
const selectedShortName = ref(ruleList[defaultIndex].shortName)




/*------------------------------------------------------------
        Character Start - status, and entry point
-------------------------------------------------------------*/

const startCharacterRolls = (ruleSet) => { 

console.log('trigger Character Rolls with Ruleset: ' + ruleSet);
character.pc.career.tVersion = ruleSet
creationStatus.currentStep = creationStatus.stepNamesMap.rollup
}




</script>


<style scoped></style>
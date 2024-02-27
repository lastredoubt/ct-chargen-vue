<template>


<div>
    <h1>End of Term</h1>
    <p>This is your {{ displayTermName }} term. </p>
    <ul>
        <li v-for="(item, index) in endOfTermLog" :key="'eotlog'+index">{{ item.li }}</li>
    </ul>
</div>


<div  v-if="reEnlistInit" >
    <button v-if="(reEnlistStatus.status == 'may') || (reEnlistStatus.status == 'failed')" @click.prevent="goMusterOut">Muster Out</button>
    <button v-if="(reEnlistStatus.status == 'mandatory') || (reEnlistStatus.status == 'may') "  @click.prevent="goNewTerm">Reenlist</button>

</div>


    <!--  
    <p>Renlistment roll target for {{ character.pcData.career.currentServiceName }}: {{ tables.services[character.pcData.career.currentService].reenlist.roll }} </p>
    <p> Remember the roll is mandatory, accepting is NOT unless a 12+</p>
    <p> So we need to factor in aging and reenlistment rolls</p>

    -->

<!--   
<button @click.prevent="acceptStats">Accept and continue</button>
<button @click.prevent="reRollStats">Cheat and Reroll</button>
-->


</template>

<script setup>

// import relevant vue libraries
import { ref, reactive, computed, onMounted } from 'vue';



/*-------------------------------------
        Iport phex function and dice
----------------------------------------*/
import {getPHex} from '../../../../assets/General/GetPhex.js'
import{roll2D6} from '../../../../assets/General/RollDice';
 

/*-------------------------------------
        import tools
----------------------------------------*/
import{NumToWords} from '../../../../assets/General/NumToWords'
const numOrder = NumToWords.ord




/*-------------------------------------
        Iport character datastore and setup
----------------------------------------*/

import { useCharacterStore } from '@/stores/character2'
// creates the stub character by assiciating with the datastore
const character = useCharacterStore()
const { bumpTheStat, bumpAge } = character

/*-------------------------------------
        import global status datastore
----------------------------------------*/
import { useCounterStore } from '@/stores/counter'
const creationStatus = useCounterStore()



/*-------------------------------------
        import character tables
----------------------------------------*/
import { cttbCharGenTables } from '../../../../assets/CharacterData/ChargenTablesCTTB';
// const tables = reactive(cttbCharGenTables)

const tables = reactive(cttbCharGenTables)
const currentService = reactive(cttbCharGenTables.services[character.pcData.career.currentService])

console.log( 'End of Term: ' + currentService.displayName)
console.log( 'Re-enlist roll: ' + currentService.reenlist.roll)




/*-------------------------------------
        Local Variables
----------------------------------------*/

let reEnlistRoll = ref(0)
let reEnlistStatus = reactive({})
let reEnlistInit = ref(false)
    // - failed
    // - may
    // - mandatory

let agingStr = ref(0)
let agingDex = ref(0)
let agingEnd = ref(0)
let agingInt = ref(0)
const endOfTermLog = reactive([])
const reEnlistTarget = currentService.reenlist.roll


/*-------------------------------------
        get Term Names
----------------------------------------*/

const displayTermName = computed(() => {

const currentEnglish = numOrder[character.pcData.career.terms] 

return currentEnglish

})







// //eligibleForPension">Able to retire with an annual pension of {{ pensionlookup }} </p>
// //  character.pcData.career.terms
// const eligibleForPension = computed(() => {

//     const minTerms = tables.retirementPay.minterms
//     const hadTerms = character.pcData.career.terms
//     console.log('Minterms:' + minTerms + ', hadTerms:' + hadTerms)
//     const isEligible = (hadTerms >= minTerms)?true : false 

//     return isEligible

// })

// const pensionlookup = computed(() => {
//     const hadTerms = character.pcData.career.terms
//     const annualPension = tables.retirementPay[hadTerms]

//     return annualPension

// })






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
//     const pHex = getPHex(charStats.str)
//     return pHex
// })
// const dexP = computed( () => {
//     const pHex = getPHex(charStats.dex)
//     return pHex
// })
// const endP = computed( () => {
//     const pHex = getPHex(charStats.end)
//     return pHex
// })
// const intP = computed( () => {
//     const pHex = getPHex(charStats.int)
//     return pHex
// })
// const eduP = computed( () => {
//     const pHex = getPHex(charStats.edu)
//     return pHex
// })
// const socP = computed( () => {
//     const pHex = getPHex(charStats.soc)
//     return pHex
// })
// const upp = computed( () => {
//     const tempUPP =  strP.value + dexP.value + endP.value + intP.value + eduP.value + socP.value
//     return tempUPP
// })





// /*-------------------------------------
//         nobleTitle
// ----------------------------------------*/

// const setNoble = () => { 
//     if (nobility.nobilityTitles[charStats.soc] === 'none') {
//         currentTitle.title = 'none'
//         return
//     } else {

//     // console.log('Title is not "none"')
//         const titleString = nobility.nobilityTitles[charStats.soc].t1 + ', ' + nobility.nobilityTitles[charStats.soc].t2 + ', or ' + nobility.nobilityTitles[charStats.soc].t3
//         currentTitle.title = titleString
//     }
// }



// /*-------------------------------------
//         Roll Basic UPP
// ----------------------------------------*/
// const rollStats = () => { 

// // console.log('>>> rolling stats using counter ');

// charStats.str = roll2D6()
// charStats.dex = roll2D6()
// charStats.end = roll2D6()
// charStats.int = roll2D6()
// charStats.edu = roll2D6()
// charStats.soc = roll2D6()

// creationStatus.careerLog.push("Stats have been rolled")

// setNoble()

// }


// /*-------------------------------------
//         Roll Basic UPP
// ----------------------------------------*/
// const reRollStats = () => { 
    
// creationStatus.careerLog.push("We've cheated and are rerolling stats:")

// rollStats()

// }

    // <button v-if="(reEnlistStatus.status == 'may') || (reEnlistStatus.status == 'failed')" @click.prevent="goMusterOut">Muster Out</button>
    // <button v-if="(reEnlistStatus.status == 'mandatory') || (reEnlistStatus.status == 'may') "  @click.prevent="goNewTerm">Reenlist</button>


/*-------------------------------------
        Muster Out
----------------------------------------*/

const goMusterOut = (target, roll) => { 
    creationStatus.careerLog.push( 'Mustered Out')
    console.log('Mustered out')


    creationStatus.currentStep = creationStatus.stepNamesMap.musterOut

}


/*-------------------------------------
        Process reenlistment
----------------------------------------*/

const goNewTerm = (target, roll) => { 
    creationStatus.careerLog.push( 'Reenlisting')
    console.log('Reenlisting')
    //is any other cleanup needed? Increment term numbers?
    // addReupTerm()

    //set flag that it's time for a new cycle - used for the term component
    character.pcData.flags.newCycle = true
    creationStatus.currentStep = creationStatus.stepNamesMap.doTerm

}


/*-------------------------------------
        Aging Check
----------------------------------------*/

const reenlistCheck = (target, roll) => { 
    // affects reEnlistStatus
    // - failed
    // - may
    // - mandatory
    let checkStatus = {}
    checkStatus.target = target
    checkStatus.roll = roll

    if (roll == 12 ) {
        checkStatus.status = 'mandatory'
        checkStatus.text = 'You are required to re-enlist.'
    } else if (roll >= target) {
        checkStatus.status = 'may'
        checkStatus.text = 'You may re-enlist if you wish.'
    } else {
        checkStatus.status = 'failed'
        checkStatus.text = 'You failed to re-enlist.'
    }

    return checkStatus
    
}

/*-------------------------------------
        Aging Check
----------------------------------------*/

const agingCheck = (rollStr, rollDex, rollEnd, rollInt) => { 
    
    const currTerm = character.pcData.career.terms
    const agingThreshold = tables.aging.agingThreshold
    const agingIntThreshold = tables.aging.agingIntThreshold
    const currAge = character.pcData.age

    

 
    if (currTerm >= agingThreshold) {
        const constAgingThreshold01 = 'At the end of term ' + currTerm + ', your character is ' + currAge + ' years old, aging checks are required '
        creationStatus.careerLog.push(constAgingThreshold01 )

        endOfTermLog.push({
            li : constAgingThreshold01
        })

        endOfTermLog.push({
            li : 'ADD EFFECTS FOR TERMS 4+ including 12+'
        })
        //4-11 terms, str/dex/end
        const strTarget = tables.aging[currTerm].str.roll
        const strEffect = tables.aging[currTerm].str.effect
        const dexTarget = tables.aging[currTerm].dex.roll
        const dexEffect = tables.aging[currTerm].dex.effect
        const endTarget = tables.aging[currTerm].end.roll
        const endEffect = tables.aging[currTerm].end.effect

        // function bumpTheStat(statName, statShift)
        // creationStatus.careerLog.push(constAgingThreshold01 )
            const strBlurb = 'Strength roll of ' + rollStr + '  vs target of: ' +  strTarget
            creationStatus.careerLog.push(strBlurb)
            endOfTermLog.push({
                li : strBlurb
            })

            if (rollStr < strTarget) {
                    bumpTheStat('Stren', strEffect)
                    const strChange = 'Strength changed by ' + strEffect + ' due to aging' 
                    creationStatus.careerLog.push(strChange )
                    endOfTermLog.push({
                        li : strChange
                    })

                }
            
            const dexBlurb = 'Dexterity roll of ' + rollDex + '  vs target of: ' +  dexTarget
            creationStatus.careerLog.push(dexBlurb)
            endOfTermLog.push({
                li : dexBlurb
            })
            if (rollDex < dexTarget) {
                bumpTheStat('Dext', dexEffect)
                const dexChange = 'Dexterity changed by ' + dexEffect + ' due to aging' 
                creationStatus.careerLog.push(dexChange)
                endOfTermLog.push({
                        li : dexChange
                    })

            }

            const endBlurb = 'Endurance roll of ' + rollEnd + '  vs target of: ' +  endTarget
            creationStatus.careerLog.push(endBlurb)
            endOfTermLog.push({
                li :endBlurb
            })            
            if (rollEnd < endTarget) {
                bumpTheStat('Endur', endEffect)
                const endChange = 'Endurance changed by ' + endEffect + ' due to aging'
                creationStatus.careerLog.push(endChange)
                endOfTermLog.push({
                        li : endChange
                    })

            }

        //
        //
        //
        if (currTerm >= agingIntThreshold ) {
            // additional check 12 terms or more - int may be affected
            const intTarget = tables.aging[currTerm].int.roll
            const intEffect = tables.aging[currTerm].int.effect

                const intBlurb = 'Intelligence roll of ' + rollInt + '  vs target of: ' +  intTarget
                endOfTermLog.push({
                    li :intBlurb
                })            

                creationStatus.careerLog.push(intBlurb)
                if (rollInt < intTarget) {
                    bumpTheStat('Intel', intEffect)
                    const intChange = 'Intelligence changed by ' + intEffect + ' due to aging'
                    creationStatus.careerLog.push(intChange)
                    endOfTermLog.push({
                        li : intChange
                    })


                }
        } 
    } else {
        // no effect

        const tempNoAge = 'At the end of term ' + currTerm + ', your character is ' + currAge + ' years old, no age roll required'

        creationStatus.careerLog.push( tempNoAge)

        endOfTermLog.push({
            li : tempNoAge
        })

    }
}




/*-------------------------------------
        onMounted initial roll
----------------------------------------*/
onMounted( () => { 

    // bump age
    bumpAge(character.pcData.career.terms)

// rollStats()
    reEnlistRoll = roll2D6()
    agingStr = roll2D6()
    agingDex = roll2D6()
    agingEnd = roll2D6()
    agingInt = roll2D6()

    console.log('Reenlist roll: ' + reEnlistRoll)
    console.log('aging str roll: ' + agingStr)
    console.log('aging dex roll: ' + agingDex)
    console.log('aging end roll: ' + agingEnd)
    console.log('aging int roll: ' + agingInt)


//aging check
    agingCheck(agingStr, agingDex, agingEnd, agingInt)
    reEnlistStatus =  reenlistCheck(reEnlistTarget, reEnlistRoll)
        // text
        // status
        // target
        // roll
    reEnlistInit = true

    const tempRenListText = 'Re-enlistment target: ' + reEnlistStatus.target + ', and you rolled a ' + reEnlistStatus.roll + '. ' + reEnlistStatus.text
    creationStatus.careerLog.push( tempRenListText)


    endOfTermLog.push({
        li : tempRenListText
    })

    
  endOfTermLog.push({
    li : '--'
  })
  endOfTermLog.push({
    li : 'HANDLE MUSTER OUT!'
  })



} )




 

// /*-------------------------------------
//         Accept Stats
// ----------------------------------------*/

// const acceptStats = () => { 

// // console.log('Accept stats ');

// creationStatus.careerLog.push('Stats are chosen. The UPP is:' + upp.value)
// creationStatus.careerLog.push('The character title is:' + currentTitle.title)

 
// character.pcData.characteristics.strength.value = charStats.str
// // character.pcData.characteristics.strength.pHexValue = strP

// character.pcData.characteristics.dexterity.value = charStats.dex
// // character.pcData.characteristics.dexterity.pHexValue = dexP

// character.pcData.characteristics.endurance.value = charStats.end
// // character.pcData.characteristics.endurance.pHexValue = endP

// character.pcData.characteristics.intelligence.value = charStats.int
// // character.pcData.characteristics.intelligence.pHexValue = intP 

// character.pcData.characteristics.education.value = charStats.edu
// // character.pcData.characteristics.education.pHexValue = eduP

// character.pcData.characteristics.social.value = charStats.soc
// // character.pcData.characteristics.social.pHexValue = socP

// character.pcData.nobleTitle = currentTitle.title

// character.pcData.flags.initialRolls = true

// creationStatus.currentStep = creationStatus.stepNamesMap.setHomeworld

// }



</script>


<style scoped>



</style>
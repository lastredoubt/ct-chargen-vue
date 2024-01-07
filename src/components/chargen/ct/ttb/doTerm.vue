<template>
<div>
<h1>Start your {{  termName }} term: </h1>
</div>

<div class="resultsBlock">
<h2>Results</h2>



    <div class="characterDead" v-if="!character.pcData.flags.alive">
        <p>{{ character.pcData.name }} died. Sorry. Try again.</p>
    </div>

    <div class="characterLives" v-if="character.pcData.flags.alive">
        <ul class="resultsList">
            <li v-for="(repStatus, index) in displayStatus" :key="repStatus.keyID">{{ repStatus.statMsg }}</li>
        </ul>

    </div>
    <div class="skillCount" v-if="skillLearnCount.termSkillsCounted">
        <p><strong>Skills to pick:</strong> {{ skillLearnCount.count }}</p>
    </div>
    <div class="chooseSkills">
        <button @click.prevent="chooseSkills">Choose Skills</button>

    </div>
</div>

<!--

    displayStatus.push({ 
                    keyID: genKey(1, 'drtlsrv') ,
                    statMsg: character.pcData.name + ' is not promoted.',
                    })
-->


</template>

<script setup>

// import relevant vue libraries
import { reactive, provide, ref, computed, onMounted , onActivated, onUpdated, watch } from 'vue';


/*-------------------------------------
        Import character datastore and setup
----------------------------------------*/
import { useCharacterStore } from '@/stores/character2'
// creates the stub character by assiciating with the datastore
const character = useCharacterStore()

/*
-----------------------------------------------------
    Import a language helper for numbers
-----------------------------------------------------
*/
import { NumToWords } from '../../../../assets/General/NumToWords';    
const numOrder = NumToWords.ord

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

console.log( currentService.displayName)



// /*-------------------------------------
//         Import other utilities
// ----------------------------------------*/
// import {addSkills} from '../../../../assets/General/AddBenefits.js'
// const skillFunc = addSkills
import{rollD6, roll2D6} from '../../../../assets/General/RollDice';




// /*-------------------------------------
//         Initialize Local Data including matching computed Phex
// ----------------------------------------*/
const firstTerm = 1
const currentTerm = character.pcData.career.terms +1
const earnedServiceSkills = reactive([])
const displayStatus = reactive([])
const skillLearnCount = reactive({
    count: 0,
    termSkillsCounted: false
})

// if (character.pcData.flags.newCycle) {startCareerCycle()}




// watch(
//   () => character.pcData.flags.alive,
//   (isHeAlive) => {
//     if (isHeAlive) {
//         survivalText.msg = character.pcData.name + ' survives the term.'
//     } else {
//         survivalText.msg = character.pcData.name + ' died.'

//     }


//   }
// )

// /*-------------------------------------
//         Computed
// ----------------------------------------*/

const termName = computed( () => {
    const termString = numOrder[ currentTerm ]

    return termString

})
    





/*---------------------------------------------------------
        Generate a uniquekey based on multiple values
------------------------------------------------------------*/

const genKey = (id, role) => {

    const tempKey = id + role


    return tempKey

}




 /*-------------------------------------

 
         On Mount - we've gotten the term up - 


 ----------------------------------------*/

 onMounted( () => { 
    console.log('+++doTerm mounted')
    // startCareerCycle()
    if (character.pcData.flags.newCycle) {startCareerCycle()}
    //clear the cycle
    character.pcData.flags.newCycle = false

} )


 /*-------------------------------------

 
         On Mount - we've gotten the term up - 


 ----------------------------------------*/


onUpdated( () => {
    console.log('+++doTerm updated')

    // startCareerCycle()

})



 /*-------------------------------------

 
         On Mount - we've gotten the term up - 


 ----------------------------------------*/


onActivated( () => {
    console.log('+++doTerm activated')

    // startCareerCycle()

})



 /*-------------------------------------

 
         Iterate possible DMs 


 ----------------------------------------*/
// const getDMs = (characteristic, dmValue) => {
const getDMs = (dmStat,minvalue) => {
    // console.log('Get needed DMs?')
        //default
    let getsBonus = false

    // make an easier handle for the loop
    const pcStats = character.pcData.characteristics
    // break out an array to allow iteration
    const statList = Object.keys(character.pcData.characteristics)

    //get character stat value
    for (const indStat of statList  ) {
        // console.log(' checking indStat : ' + indStat + ' against ' + dmStat )
        if (pcStats[indStat].shortName === dmStat) {
            // console.log('>>> Right stat - check values against ' + minvalue )
            if (pcStats[indStat].value >= minvalue) { 
                getsBonus = true
                return getsBonus 
            }
        }
    }


    return getsBonus

 }



 /*-------------------------------------

 
         Start the Stat Check


 ----------------------------------------*/
 const termCheck = (target, characteristic, minvalue, bonus) => {
// roll against target
    const dieRoll = roll2D6()
    let tempBonus = 0

    const plusDM = getDMs(characteristic,minvalue )
    if (plusDM) { tempBonus = bonus}

    creationStatus.careerLog.push('We need a ' + target + ' and roll a ' + dieRoll + ' on 2D6 with + ' + tempBonus)

    if (  ( dieRoll + tempBonus ) >= target ) {
        return true
    } else {
        return false
    }

 }




 /*--------------------------------------------------------------

 
         Start the career cycle


 -----------------------------------------------------------------*/
 const startCareerCycle = () => {
    creationStatus.careerLog.push('Start the ' + numOrder[ currentTerm ]  + ' term')
    const termLog = { 
        commission: false,
        promotion: false,
        termNumber: currentTerm,
        skills: [],
    }


    // check for survival
    const survTarget = currentService.survival.roll
    const survChar =     currentService.survival.dm2.shortName
    const survCVal = currentService.survival.dm2.value
    const SurvBonus = 2
    
    


 /*--------------------------------------------------------------
         Survival check
 -----------------------------------------------------------------*/
    creationStatus.careerLog.push('Does ' + character.pcData.name + ' survive the ' + numOrder[ currentTerm ] + ' term?')
    
    
    if ( !(termCheck(survTarget, survChar, survCVal , SurvBonus)) ) {
        // failed to survive
        creationStatus.careerLog.push(character.pcData.name + ' dies. Please try again.')
        character.pcData.flags.alive = false
        return
    }
    creationStatus.careerLog.push(character.pcData.name + ' survives the term.')

    
    displayStatus.push({ 
        keyID: genKey(1, 'drtlsrv') ,
        statMsg: character.pcData.name + ' survives the term.',
        })
    // deprecated????
    // survivalText.mesg = character.pcData.name + ' survives the term.'




 /*--------------------------------------------------------------
         Earn service skills for rank zero (enlisted) if first term
 -----------------------------------------------------------------*/
    if (currentTerm === firstTerm  ) { earnedServiceSkills.push(0) }






 /*--------------------------------------------------------------
         Commission check
 -----------------------------------------------------------------*/


    // then check for commission - if not already
    // check if rank is zero and if draftee is false
    // don't forget to set draftee to fasle if it's true

    if (character.pcData.militaryRank.level === 0 ){
        creationStatus.careerLog.push(character.pcData.name + ' is not an officer - checking for promotions.')
        console.log('not an officer - start commissioning check')


    
        // if he ain't zero, he's already an officer
        if (!character.pcData.flags.promotions) {
            console.log('no promotions in service')

            creationStatus.careerLog.push(character.pcData.name + ' No promotions while working in the ' + character.pcData.career.currentServiceName  + ' service.')

        } else if (character.pcData.flags.draftee) {
            console.log('promotions available, but draftee')

            character.pcData.flags.draftee = false
            creationStatus.careerLog.push(character.pcData.name + ' cannot receive a commission his first term as a draftee.')

        } else {
            console.log('commissioning check')
            // at last we can see if he gets promoted a la survival
            const commTargert = currentService.commission.roll
            const comChar =     currentService.commission.dm1.shortName
            const comVal = currentService.commission.dm1.value
            const comBonus = 1

            if ( (termCheck(commTargert, comChar, comVal , comBonus)) ) {
                // made office
                termLog.commission = true
                character.pcData.militaryRank.level = 1
                earnedServiceSkills.push(character.pcData.militaryRank.level)

                creationStatus.careerLog.push(character.pcData.name + ' becomes an officer, and is now ' + currentService.ranks[character.pcData.militaryRank.level] + ' ' + character.pcData.name + ' .')
                displayStatus.push({ 
                    keyID: genKey(1, 'drtlcom') ,
                    statMsg: character.pcData.name + ' is commissioned.',
                })

            } else {
                creationStatus.careerLog.push(character.pcData.name + ' remains enlisted.')

                displayStatus.push({ 
                    keyID: genKey(1, 'drtlsrv') ,
                    statMsg: character.pcData.name + ' stays enlisted.',
                    })

            }
            
        }
    }




 /*--------------------------------------------------------------
         Promotion check - requires rank 1
 -----------------------------------------------------------------*/
    if ( (character.pcData.flags.promotions) && (character.pcData.militaryRank.level >= 1 ) && ( character.pcData.militaryRank.level  <= 6  ) ) {
        // only enter the loop once you  get a commission
        // can't promote above 6/admiral ?
        // requires promotable flag (i.e. not scouts) and rank of 1 (commissioned) and less than 6

        creationStatus.careerLog.push('Checking for promotion.')

        console.log('promotion check')
            // at last we can see if he gets promoted a la survival
            const proTarget = currentService.promotion.roll
            const proChar =     currentService.promotion.dm1.shortName
            const proVal = currentService.promotion.dm1.value
            const proBonus = 1

            if ( (termCheck(proTarget, proChar, proVal , proBonus)) ) {
                // made office
                termLog.promotion = true
                character.pcData.militaryRank.level += 1
                earnedServiceSkills.push(character.pcData.militaryRank.level)

                creationStatus.careerLog.push(character.pcData.name + ' is now ' + currentService.ranks[character.pcData.militaryRank.level] + ' ' + character.pcData.name + ' .')
                displayStatus.push({ 
                    keyID: genKey(1, 'drtlsrv') ,
                    statMsg: character.pcData.name + ' is promoted.',
                    })


            } else {
                creationStatus.careerLog.push(character.pcData.name + ' is not promoted.')

                displayStatus.push({ 
                    keyID: genKey(1, 'drtlsrv') ,
                    statMsg: character.pcData.name + ' is not promoted.',
                    })


            }
 
    }

/*===================================================================
            Add up skills learned 
====================================================================*/
/*-------------------------------------------------------------------
            Check for Career Skills
--------------------------------------------------------------------*/
        // earnedServiceSkills[] has an array of rank levels earned
        console.log('===================================== \n EarnedServiceSkills from ranks this term:')
        console.log(earnedServiceSkills)
        console.log('Possible service Skills in service: ')
        console.log(currentService.serviceSkills)
        console.log('Start check through earnedServiceSkills')




/*        Check array of earned service skills
--------------------------------------------------------------------*/
    for (const skill in earnedServiceSkills) {
            // check currentService.serviceSkills
            /* Since null === undefined is false, the following statements will catch only null or undefined  */
            
            
            const skillObject = currentService.serviceSkills[earnedServiceSkills[skill]]
            console.log('--------------------------------- \n earned service skill: ' + skill)



            // debugger

            if(typeof  skillObject === 'undefined') {
                console.log('no skill defined.');


                
            } else if(skillObject  === null){
                console.log('skill is null.');



            }   else {
                console.log(' Skill Object is not undefined or null')
                console.log(skillObject)
                // debugger

                /*
                    add to display for main screen - make resultsList
                */             
               displayStatus.push({ 
                    keyID: genKey(1, 'drtlsrv') ,
                    statMsg: 'Gains service skill: ' + skillObject.name,
                    })

                console.log('added skill to display status')
                /*
                    add to tail log
                */
                creationStatus.careerLog.push(character.pcData.name + ' gains service skill: ' + skillObject.name )
                console.log('added skill to  the career log')
                
                /*
                    add to termlog.skills[] for record
                */


                termLog.skills.push(skillObject.name)
                console.log('added the pickup of a skill to the termLog')

                creationStatus.skillQueue.push(skillObject)

                /*
                    add to actual skills list - check for existence, etc. - ////   skillFunc.addSkillSwitcher()
                */
               // debugger
                // console.log('--- calling character.pcData.addSkillSwitcher')
                // character.pcData.addSkillSwitcher( skillObject)
                // skillFunc.addSkillSwitcher( skillObject )


            }


    }



//clear the skills dispensed! that we've put together!!!
//don't forget to dump termlog into the character term record


/*-------------------------------------------------------------------
            Skill Elegibility table
--------------------------------------------------------------------*/

    // elegibilitySkills: {
    //         commissionPromotion: 1,
    //         },

    // const skillLearnCount = reactive({
    //     count: 0,
    //     termSkillsCounted: false

    //     currentTerm

    if (character.pcData.career.currentServiceName === 'Scouts' ) {
        //         scoutPerTerm: 2,
        skillLearnCount.count = 2
    } else {
        //         perTermBase: 1,
        skillLearnCount.count = 1
        if ( currentTerm === 1 ) {
            skillLearnCount.count += 1
            console.log('First term second skill')
        }
        if (termLog.commission) {
            skillLearnCount.count += 1
            console.log( 'skill due to commission')
        }

        if (termLog.promotion) {
            skillLearnCount.count += 1
            console.log( 'skill due to promotion')
        }

    }
    skillLearnCount.termSkillsCounted = true
    creationStatus.skillsToChoose= skillLearnCount.count
 }



 const chooseSkills = () => { 

// console.log('Accept stats ');

creationStatus.careerLog.push('We\'ve survived the termCheck, time to get skills')


creationStatus.currentStep = creationStatus.stepNamesMap.chooseSkills

}


</script>


<style scoped>



</style>
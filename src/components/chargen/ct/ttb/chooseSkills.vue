<template>

<div class="stageTitle">
<h1>Let's Choose Skills: </h1>
<p v-if="skillsNeedRolling">You have {{ creationStatus.skillsToChoose }} skills left to choose.</p>
</div>

<div class="skillTable">
    <h2>Roll a skill:</h2>
    <table>
    
        <tr>
            <th class="firstCol">Training Type</th>
            <th>Personal</th>
            <th>Service Skills</th>
            <th>Advanced Education</th>
            <th v-if="advancedPlusTraining">Advanced Education (Edu 8+) </th>
        </tr>

                 

        <tr>
            <td class="firstCol">1</td>
            <td>{{ myService.skills.personal["1"].name }}</td>
            <td>{{ myService.skills.service["1"].name }}</td>
            <td>{{ myService.skills.advanced["1"].name }}</td>
            <td v-if="advancedPlusTraining">{{ myService.skills.advanced2["1"].name }}</td>
        </tr>

              

        <tr>
            <td class="firstCol">2</td>
            <td>{{ myService.skills.personal["2"].name }}</td>
            <td>{{ myService.skills.service["2"].name }}</td>
            <td>{{ myService.skills.advanced["2"].name }}</td>
            <td v-if="advancedPlusTraining">{{ myService.skills.advanced2["2"].name }}</td>
        </tr>

           

        <tr>
            <td class="firstCol">3</td>
            <td>{{ myService.skills.personal["3"].name }}</td>
            <td>{{ myService.skills.service["3"].name }}</td>
            <td>{{ myService.skills.advanced["3"].name }}</td>
            <td v-if="advancedPlusTraining">{{ myService.skills.advanced2["3"].name }}</td>
        </tr>

           

        <tr>
            <td class="firstCol">4</td>
            <td>{{ myService.skills.personal["4"].name }}</td>
            <td>{{ myService.skills.service["4"].name }}</td>
            <td>{{ myService.skills.advanced["4"].name }}</td>
            <td v-if="advancedPlusTraining">{{ myService.skills.advanced2["4"].name }}</td>
        </tr>
            
          

        <tr>
            <td class="firstCol">5</td>
            <td>{{ myService.skills.personal["5"].name }}</td>
            <td>{{ myService.skills.service["5"].name }}</td>
            <td>{{ myService.skills.advanced["5"].name }}</td>
            <td v-if="advancedPlusTraining">{{ myService.skills.advanced2["5"].name }}</td>
        </tr>
           

        <tr>
            <td class="firstCol">6</td>
            <td>{{ myService.skills.personal["6"].name }}</td>
            <td>{{ myService.skills.service["6"].name }}</td>
            <td>{{ myService.skills.advanced["6"].name }}</td>
            <td v-if="advancedPlusTraining">{{ myService.skills.advanced2["6"].name }}</td>
        </tr>
            
           

    </table>    




</div>

<!---- <div class="skillSelect" v-if="!revealResults.reveal">
    -->
<div class="skillSelect"  v-if="skillsNeedRolling && !(haveCascadeList)">
        <div class="skillTableSelectDrop">
            <select name="skillTableChoice"  id="skillTableChoice"  v-model="selectedTable">
                <option value="personal" >Try the Personal Skills table</option>
                <option value="service" >Try the Service Skills table</option>
                <option value="advanced" >Try the Advanced Education Skills table</option>
                <option value="advanced2" v-if="advancedPlusTraining">Try the Advanced Education (8+) Skills table</option>
            </select>
        </div>
        <div class="rollASkillButton">
            <button @click.prevent="rollSkillLoop(selectedTable)">Let's See what you learn!</button>
        </div>
    </div>



<div class="skillResults">
    <p>{{ learnedNewSkill }}</p>
</div>




<!--



-->
    

    <div class="cascadeChooseBlades" v-if="(haveCascadeList) && (cascadeList[0].skill == 'blades') ">
   <!--       <th v-for="(service, index) in careerStart" :key="genServicekey(service, 'tableHeader')" >{{service.displayName}}</th>   -->

        <div class="bladesTable">

            <table>
                <tr>
                    <th class="firstCol">Cascade Skill</th>
                    <th>Minimum Strength</th>
                    <th>Bonus Strength</th>
                    <th>Wounds</th>
                </tr>
                <tr v-for="(tableSkillId, index) in tables.skillIndex.blades.cascadeSID">
                    <td class="firstCol">{{tables.skillIndex[tableSkillId].name}}</td>
                    <td>{{ tables.skillIndex[tableSkillId].minusDM }}</td>
                    <td>{{ tables.skillIndex[tableSkillId].plusDM }}</td>
                    <td>{{ tables.skillIndex[tableSkillId].wounds }}</td>
                </tr>
            </table>
        </div>

         <div class="cascadeBladesSelectDrop">
            <label> Choose a cascade skill for {{ tables.skillIndex[cascadeList[0].skill].name }}</label>
            <select name="cascadeBladesChoice"  id="cascadeBladesChoice"  v-model="selectedBlade">
                <option value="default" selected>--select a specific skill--</option>
                <option v-for="(skillEntry, index) in tables.skillIndex[cascadeList[0].skill].cascadeSID"  :key="index+'skill'" :value="skillEntry">{{tables.skillIndex[skillEntry].name}} </option>
            </select>
        </div>
        <div class="pickCascadeSkill" v-if="selectedBlade != 'default'">
            <button @click.prevent="chooseCascade(selectedBlade)">Select your blade skill!</button>
        </div>

    </div>

<!--

        CASCADE THE GUNS

-->
    


<div class="cascadeChooseGuns" v-if="(haveCascadeList) && (cascadeList[0].skill == 'guns') ">
   <!--       <th v-for="(service, index) in careerStart" :key="genServicekey(service, 'tableHeader')" >{{service.displayName}}</th>   -->


   <div class="gunsTable">

<table>
    <tr>
        <th class="firstCol">Cascade Skill</th>
        <th>Minimum Dex</th>
        <th>Bonus Dex</th>
        <th>Wounds</th>
    </tr>
    <tr v-for="(tableSkillId, index) in tables.skillIndex.guns.cascadeSID">
        <td class="firstCol">{{tables.skillIndex[tableSkillId].name}}</td>
        <td>{{ tables.skillIndex[tableSkillId].minusDM }}</td>
        <td>{{ tables.skillIndex[tableSkillId].plusDM }}</td>
        <td>{{ tables.skillIndex[tableSkillId].wounds }}</td>
    </tr>
</table>
</div>

<div class="cascadeGunsSelectDrop">
            <label> Choose a cascade skill for {{ tables.skillIndex[cascadeList[0].skill].name }}</label>
            <select name="cascadeGunsChoice"  id="cascadeGunsChoice"  v-model="selectedGun">
                <option value="default" selected>--select a specific skill--</option>
                <option v-for="(skillEntry, index) in tables.skillIndex[cascadeList[0].skill].cascadeSID"  :key="index+'skill'" :value="skillEntry">{{tables.skillIndex[skillEntry].name}}</option>
            </select>
        </div>
        <div class="pickCascadeSkill" v-if="selectedGun != 'default'">
            <button @click.prevent="chooseCascade(selectedGun)">Select your gun skill!</button>
        </div>

    </div>


<div class="cascadeChooseVehicles" v-if="(haveCascadeList) && (cascadeList[0].skill == 'vehicles') ">
         <div class="cascadeVehSelectDrop">
            <label> Choose a cascade skill for {{ tables.skillIndex[cascadeList[0].skill].name }}</label>
            <select name="cascadeVehChoice"  id="cascadeVehChoice"  v-model="selectedVehicle">
                <option value="default" selected>--select a specific skill--</option>
                <option v-for="(skillEntry, index) in tables.skillIndex[cascadeList[0].skill].cascadeSID"  :key="index+'skill'" :value="skillEntry">{{tables.skillIndex[skillEntry].name}}</option>
            </select>
        </div>
        <div class="pickCascadeSkill" v-if="selectedVehicle != 'default'">
            <button @click.prevent="chooseCascade(selectedVehicle)">Select your vehicle skill!</button>
        </div>

    </div>





<div class="doneWithSkills" v-if="!(skillsNeedRolling)">
    <!--     <button @click.prevent="endTermAndReUp">End Term</button>    -->
    <!--    character.pcData.career.terms   -->
    <h2> The {{  displayTermName }} term is complete </h2>

    <div class="closeOutTerm">
        <button @click.prevent="closeTheTerm">Close out the term/re-enlistment</button>
    </div>


    <!--  
    <p>Renlistment roll target for {{ character.pcData.career.currentServiceName }}: {{ tables.services[character.pcData.career.currentService].reenlist.roll }} </p>
    <p> Remember the roll is mandatory, accepting is NOT unless a 12+</p>
    <p> So we need to factor in aging and reenlistment rolls</p>

    -->
</div>

<div>

<!-- 

    myService.skills.personal
    myService.skills.service
    myService.skills.advanced
    myService.skills.advanced2 (edu check)

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

</table>

-->





</div>



</template>

<script setup>
/*--------------------------------------------------------------------------

NOTE:: This block is used to handle any and all disbursements of skills and 
benefits, whether muster-out or mid-career


--------------------------------------------------------------------------*/


// import relevant vue libraries
import { reactive, provide, ref, computed, onMounted } from 'vue';


/*-------------------------------------
        Import character datastore and setup
----------------------------------------*/
import { useCharacterStore } from '@/stores/character2'
// creates the stub character by assiciating with the datastore
const character = useCharacterStore()
const { bumpTheStat,getPHex } = character

/*-------------------------------------
        import global status datastore
----------------------------------------*/
import { useCounterStore } from '@/stores/counter'
const creationStatus = useCounterStore()
const { clearSkillQ, incrementCounterID } = creationStatus


/*-------------------------------------
        import character tables
----------------------------------------*/
import { cttbCharGenTables } from '../../../../assets/CharacterData/ChargenTablesCTTB';
const tables = reactive(cttbCharGenTables)



/*-------------------------------------
        import tools
----------------------------------------*/
import{rollD6, roll2D6} from '../../../../assets/General/RollDice'
import{NumToWords} from '../../../../assets/General/NumToWords'
const numOrder = NumToWords.ord


// /*-------------------------------------
//         Initialize Local Data including matching computed Phex
// ----------------------------------------*/
const myService = reactive(tables.services[character.pcData.career.currentService])

let selectedBlade = ref('default')
let selectedGun = ref('default')
let selectedVehicle = ref('default')
let selectedTable = ref("personal")
let learnedNewSkill = ref('')

// used to generate a list of skills that need cascade resolution
let cascadeList = reactive([])

                    // let currentCascadeCoreID = ref('')
                    // let currentCascadeOptions = reactive([])









// /*-------------------------------------
//         Initialize Local Data including matching computed Phex
// ----------------------------------------*/
// let rollReveal = ref(false)





// /*-------------------------------------
//         Generate a uniquekey based on service and text
// ----------------------------------------*/



 /*-------------------------------------

 
        Create skill package


 ----------------------------------------*/

// const genKey = (id, role) => {

    const createSkillRef =  (skillPkg, currentID) => {

//    creationStatus.skillQ.push(createSkillRef(skillObject), creationStatus.idCounter )



    console.log('skillPkg and current ID')
    console.log(skillPkg)
    console.log(currentID)

    const returnVal = {
        skill: skillPkg,
        id: currentID
    }
    console.log('ReturnVal:')
    console.log(returnVal)

    return returnVal

}




 /*-------------------------------------

 
         On Mount - we've gotten the term up - 


 ----------------------------------------*/

 onMounted( () => { 
    console.log('+++chooseSkills mounted - applying and choosing skills')
    
    // start looping through skills for the current term
    // set tracker first
    // let skillStatus = true

    // while (skillStatus) {


        // Check if there's already something in the skill queue (career skills, etc)
        if (creationStatus.skillQ.length != 0) {
            console.log('>>>> We haz skilllz')
            skillAssignLoop()
        }


/////////CHECK IF THERE"S ANY SKILLS TO ROLL!!!!!!
/////////CHECK IF THERE"S ANY SKILLS TO ROLL!!!!!!
/////////CHECK IF THERE"S ANY SKILLS TO ROLL!!!!!!
/////////CHECK IF THERE"S ANY SKILLS TO ROLL!!!!!!
/////////CHECK IF THERE"S ANY SKILLS TO ROLL!!!!!!
/////////CHECK IF THERE"S ANY SKILLS TO ROLL!!!!!!
/////////CHECK IF THERE"S ANY SKILLS TO ROLL!!!!!!




      //  7) if skill queue is empty, check for pending rolled skills
        //   creationStatus.skillsToChoose
        // if (creationStatus.skillsToChoose >= 0) {
            
        //     console.log('Rolling Up Skill Tables - for : ' + myService.displayName)
        //     console.log(myService)

        //     rollSkillLoop()
            
        // }



        // clear skills to choose

        // exit to prevent infinite loop, while developing

    //     skillStatus = false
        
    // }


    // if (character.pcData.flags.newCycle) {startCareerCycle()}
    // //clear the cycle
    // character.pcData.flags.newCycle = false


    //Check if anything needs to be recycled

} )




 /*-----------------------------------------------

 
         Close the term out


 --------------------------------------------------*/



 const closeTheTerm = () => { 

// console.log('Accept stats ');

creationStatus.careerLog.push('We\'ve assigned skills for term ' + character.pcData.career.terms + ', time to check reenlistment')


creationStatus.currentStep = creationStatus.stepNamesMap.endOfTerm

}








 /*-----------------------------------------------

 
         Computed


 --------------------------------------------------*/




//  const strP = computed( () => {
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








 const haveCascadeList = computed(() => {
  return cascadeList.length != 0 ? true : false
})




//watcher education
//     character.pcData.characteristics.education.value
const advancedPlusTraining = computed(() => {
  return character.pcData.characteristics.education.value > 7 ? true : false
})


const skillsNeedRolling = computed(() => {

    //check if there are still skills to roll
    const checkSkills = creationStatus.skillsToChoose > 0 ? true : false

    // check if there are skills to assign
    const flushQueue =    creationStatus.skillQ.length != 0 ? true : false

    // see if either is still true
    const needSkills = checkSkills || flushQueue ? true : false
    
    return needSkills

})



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







                            //  /*-----------------------------------------------

                            
                            //          Start the cascade skill array generation loop


                            //  --------------------------------------------------*/

                            // // check if there are skills in the queue
                            // const genCascade = (nowIndex) => {
                            //     const specList = { cascadeRoot:nowIndex, cascadeName: tables.skillIndex[nowIndex].name , cascadeList: []}

                            //     if (tables.skillIndex[nowIndex].cascadeSpecific) {
                            //         tables.skillIndex[nowIndex].cascadeSID.forEach(skillID => {
                            //             const tableObj = { cascadeOption: true, skillID: skillID , skillName: tables.skillIndex[skillID].name}
                            //             specList.cascadeList.push(tableObj)
                            //         });
                            //     }   


                            //     if (tables.skillIndex[nowIndex].cascadeGroup) {


                            //         tables.skillIndex[nowIndex].cascadeGID.forEach(groupID => {
                            //             // assumes that cascade groups in a cascade skill do not have further subgroups
                            //             tables.skillIndex[groupID].cascadeSID.forEach(skillID => {
                            //                 const tableObj = { cascadeOption: true, skillID: skillID , skillName: tables.skillIndex[skillID].name}
                            //                 specList.cascadeList.push(tableObj)
                            //             });
                                    
                            //         });
                            //     }

                            //     return specList

                            // }







 /*-----------------------------------------------

 
    Get the submitted cascade list, add it to the character
     DON'T FORGET TO CLEAR THE CASCADE STATUS (should auto-clear when cascade list cleared)
      AND SHIFT THE LIST ITEM zero, https://www.w3schools.com/jsref/jsref_shift.asp
       as well as reset selectedCascade to default


 --------------------------------------------------*/

// check if there are skills in the queue
const chooseCascade = (pickedCascade) => {
    //push cascade to skill Queue

    //gah - we already have the selected skill index
    // we need to create a skillpackage similar to below for :learnedSkill
    // fortunately for cascades there's no bumpstat issues
/*
                     {
                        name: 'Blades',
                        skillIndex: 'blades',
                        flags: 'addSkill',
            
                    },
                    */
                    console.log('=======>cascade to add')
                    console.log(' >> skillIndex: ' + pickedCascade)
                    console.log('>> skill name: '  + tables.skillIndex[pickedCascade].name)

    // selectedCascade = 'default'

    const learnedSkill = {
        skillIndex: pickedCascade ,
        name: tables.skillIndex[pickedCascade].name ,
        flags: 'addSkill'
    }


    incrementCounterID()
    creationStatus.skillQ.push(createSkillRef(learnedSkill, creationStatus.idCounter) )

        //  console.log ('@@ rolled a ' + rolledValue)
        console.log('You gain ' +  learnedSkill.name )               
        
        // creationStatus.incrementCounterID()
    skillAssignLoop()

                       

    //remove first item in cascade list to clear it from list
    cascadeList.shift()


    //reset selected cascade for new lists in the future

}


//fluffText(tables.skillIndex[skillEntry].parentGroup


 /*-----------------------------------------------

 
         Start the skill Queue assignmentloop


 --------------------------------------------------*/

// check if there are skills in the queue


// const fluffText = (chosenEntry) => {
//     // check parentGroup
//     // handle blades, guns, or vehicles or aircraft or watercraft
//     // only care about guns and blades for now
//     // show Str (blades) or Dex (guns) and high and low DMs else ''

//     let returnString = ''

//     console.log('>FLUFF: chosenEntry , ' + chosenEntry.name + ' and parentGroup: ' + chosenEntry.parentGroup )
//     console.log(chosenEntry)

//     const parent = chosenEntry.parentGroup

//     console.log('parentGroup '+ chosenEntry.parentGroup)


//     if ((parent == 'guns') || (parent == 'blades') ) {

//         console.log('>>>FLUFF: chosen entry again: ' + chosenEntry.parentGroup )
//          console.log(chosenEntry)



//         const minusDM = chosenEntry.minusDM
//         const plusDM = chosenEntry.plusDM
//         const wounds = chosenEntry.wounds
//         // only two options assumed, so if not one....
//         const dmType = parent == 'guns' ?  'Dext' : 'Stren'

//         returnString = '[ Wounds: ' + wounds +', Penalty: ' + dmType + '<' + minusDM + ', Bonus: ' + dmType + ' ' + plusDM + ' ]'

//     } 

//     return returnString
    

// }






 /*-----------------------------------------------

 
         Start the skill Queue assignmentloop


 --------------------------------------------------*/

// check if there are skills in the queue
const skillAssignLoop = () => {

    // 1) Determine if there are skills/benefits in the queue

        // Loop through
        console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvv')
        console.log(' Loop skills')

        for (const singleSkill of creationStatus.skillQ) {

            if (singleSkill.skill.flags == 'bumpStat') {

                //determine which stat
                const statBumped = singleSkill.skill.affects
                //determine by how much
                const statShift = singleSkill.skill.bonus

                // alert( 'Affects ' + statBumped + ', adds: ' + statShift)

                //bump the stat
                bumpTheStat(statBumped,statShift)
                creationStatus.careerLog.push( statBumped + ' changed by ' + statShift)

                //update the pseudohex as well (above)
            
                //
                //
                //
                // character.pcData.characteristics.strength.value = charStats.str
                // character.pcData.characteristics.strength.pHexValue = strP




                // display the updates on the screen 

            } else {

                // it's not a stat bump

/*------------------------------------------------------------------->

PENDING PENDING

DONT FORGET TO PUT NEW SKILLS INTO THE LOG, AND STAT BUMPS!

------------------------------------------------------------------>*/



            let currentSkillIndex = singleSkill.skill.skillIndex
            let currentSkillname = singleSkill.skill.name
            // const queueID = singleSkill.id


         /*-------------------------------------
        PENDING
        1a) Check if they are skills or benefits******

        WE want to construct a set of individual cascade skills 
        from child groups and speciic skills 

        -------------------------------------*/

            // tables.skillIndex[currentSkillIndex].cascadeSpecific
            // tables.skillIndex[currentSkillIndex].cascadeGroup

             // tables.skillIndex[currentSkillIndex].cascadeSID
            // tables.skillIndex[currentSkillIndex].cascadeGID

           


         /*-----------------------------------------------------------
        PENDING
        2) If skill, then check if they need to be cascaded

            don't forget  haveCascadeList is set if a cascade skill is added
            to cascadeList
            
            cascadeSID
            cascadeGID
            
            cascadeGroup: 
            cascadeSpecific

        -----------------------------------------------------------*/

            if (tables.skillIndex[currentSkillIndex].cascadeSpecific || tables.skillIndex[currentSkillIndex].cascadeGroup) {
                // CASCADE CASE

                // need to push to cascade list : cascadeList

                incrementCounterID()
                const tempObject = { id: creationStatus.idCounter , skill: currentSkillIndex}
                cascadeList.push(tempObject )

                //TEST TEST TEST
                // selectedCascade='default'


                // we also need to clear that specific entry??  
                // No, we'll finish out the loop, adding skills to cascade to resolve 
                // separately, and then callback to skillAssignLoop()
            }  else {
                // NON CASCADE CASE
                /*-----------------------------------------------------------------
                If the skill has been created for the character, increment
                it, otherwise add it as a new skill
                -----------------------------------------------------------------*/
                    // if the level is undefined or null, then it hasn't been created yet
                    if(typeof character.pcData.skills[currentSkillIndex] === 'undefined') {
                        // console.log('character skill at key: '+ currentSkillIndex + ' is undefined.');
                        // console.log('----------=================--------')

                        const tempSkill = {}
                        tempSkill.level = 1
                        tempSkill.name = currentSkillname
                        // console.log('currentSkillIndex (in if): ' + currentSkillIndex)

                        character.pcData.skills[currentSkillIndex] = tempSkill
                        creationStatus.careerLog.push( 'Learned ' + currentSkillname)

                        // console.log('tempSkill: ')
                        // console.log( tempSkill)
                        // console.log('character.pcData.skills: ')

                        // console.log(character.pcData.skills)
                        // console.log('^^^^^^^^^^^^--=================^^^^^^^^^^^^')

                        // character.pcData.skills[singleSkill.skill.skillindex].level = 1
                        // character.pcData.skills[singleSkill.skill.skillindex].name += singleSkill.skill.name

                    } else if(character.pcData.skills[singleSkill.skill.skillindex] === null){
                        alert('Variable "comment" is null.');
                        // character.pcData.skills[singleSkill.skill.skillindex].level = 1
                        // character.pcData.skills[singleSkill.skill.skillindex].name += singleSkill.skill.name

                    } else {
                        character.pcData.skills[currentSkillIndex].level += 1
                        creationStatus.careerLog.push( 'Improved ' + currentSkillname)
                    }
                    
            //close out non-cascade case
            }


// ===============end of skill option ELSE

            }








            // still inside the FOR loop here
        }

        console.log('About to clear skill Q')
        clearSkillQ()


        // const currentSkillQueue = pop(creationStatus.skillQ)
        // console.log(currentSkillQueue)
    
 
 /*-------------------------------------

    4) If YES, then present the cascade options
    - note - in this case I'll present subcascades together with singletons. 
        applicable when getting vehicle, and can choose grav or "watercraft",
        where watercraft has further cascades. We'll just present all of the 
        available options
    5) Once chosen, andd/uprate as applicable
6) If benefits, add as appropriate - note possibility of getting a muster-
    out weapon

---SET A FLAG on muster out status!!!! affects return button!!!

 ----------------------------------------*/

}

















const rollSkillLoop = (selectedTable) => {
    // rollReveal = true

console.log('Chose the ' + selectedTable + ' table')
//learnedNewSkill
//rollD6()
const rolledValue = rollD6()
const learnedSkill = myService.skills[selectedTable][rolledValue]

incrementCounterID()
creationStatus.skillQ.push(createSkillRef(learnedSkill, creationStatus.idCounter) )

        //  console.log ('@@ rolled a ' + rolledValue)
         console.log('You gain ' +  learnedSkill.name )               
        //  console.log('==== CHECK YOUR SKILL QUEUE' )               
        creationStatus.skillsToChoose -= 1
        learnedNewSkill = 'Roll Result: ' +  rolledValue  + ', ' + learnedSkill.name
         
         // creationStatus.incrementCounterID()
         skillAssignLoop()

                        

    // rollReveal = false

}




//creationStatus
        
        // if (creationStatus.skillQ.length <> 0) {
        //     const currentSkillQueue = pop(creationStatus.skillQ)
        //     console.log(currentSkillQueue)
        //     // check skills
        //     if (currentSkillQueue.flags == 'addSkill') {
        //         console.log('it is a skill')

        //     } else if (currentSkillQueue.flags == 'bumpStat') {
        //         console.log('it is a stat improvement')

        //     } else if (currentSkillQueue.flags == 'addBenefit') {
        //         console.log('it is a new benefit')

        //     }


        //     // stats



        //     //benefit




        // }








</script>


<style scoped>



</style>
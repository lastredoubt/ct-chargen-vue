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



<div class="doneWithSkills" v-if="haveCascadeList">
    <p>Cascade resolution Step to be added here</p>
    
    <div v-if="haveCascadeList">
        <p>Have cascade list based in genCascade() and   >>>  cascadeList.length != 0 ? true : false </p>
         <p>Current first cascade entry : {{ cascadeList.length != 0 ? cascadeList[0].skill : 'none'  }}</p>   


   <!--       <th v-for="(service, index) in careerStart" :key="genServicekey(service, 'tableHeader')" >{{service.displayName}}</th>  

id: creationStatus.idCounter , skill: currentSkillIndex


-->

   <div class="cascadeTableSelectDrop">
            <label> Choose a cascade skill for {{ tables.skillIndex[cascadeList[0].skill].name }}</label>
            <select name="cascadeTableChoice"  id="cascadeTableChoice"  v-model="selectedCascade">
                <option v-for="  (skillEntry, index) in genCascade(cascadeList[0])"  :key="index+skill" :value="skillEntry">{{tables.skillIndex[skillEntry]}}</option>
            </select>
        </div>
        <div class="pickCascadeSkill">
            <button @click.prevent="chooseCascade(selectedCascade)">Let's See what you learn!</button>
        </div>

    </div>


</div>




<div class="doneWithSkills" v-if="!(skillsNeedRolling)">
    <p>Next Step to be added here</p>
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
import{rollD6, roll2D6} from '../../../../assets/General/RollDice';



// /*-------------------------------------
//         Initialize Local Data including matching computed Phex
// ----------------------------------------*/
const myService = reactive(tables.services[character.pcData.career.currentService])

let selectedCascade = ref('')
let selectedTable = ref("personal")
let learnedNewSkill = ref('')

// used to generate a list of skills that need cascade resolution
let cascadeList = reactive([])

let currentCascadeCoreID = ref('')
let currentCascadeOptions = reactive([])









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

 
         Computed


 --------------------------------------------------*/


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







 /*-----------------------------------------------

 
         Start the cascade skill array generation loop


 --------------------------------------------------*/

// check if there are skills in the queue
const genCascade = (nowIndex) => {
    const specList = [ {cascadeOption: false, cascadeRoot:nowIndex, cascadeName: tables.skillIndex[nowIndex].name }]

    if (tables.skillIndex[nowIndex].cascadeSpecific) {
        tables.skillIndex[nowIndex].cascadeSID.forEach(skillID => {
            const tableObj = { cascadeOption: true, skillID: skillID , skillName: tables.skillIndex[skillID].name}
            specList.push(tableObj)
        });
    }   


    if (tables.skillIndex[nowIndex].cascadeGroup) {


        tables.skillIndex[nowIndex].cascadeGID.forEach(groupID => {
            // assumes that cascade groups in a cascade skill do not have further subgroups
            tables.skillIndex[groupID].cascadeSID.forEach(skillID => {
                const tableObj = { cascadeOption: true, skillID: skillID , skillName: tables.skillIndex[skillID].name}
                specList.push(tableObj)
            });
        
        });
    }

    return specList

}



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
                    }
                    
            //close out non-cascade case
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
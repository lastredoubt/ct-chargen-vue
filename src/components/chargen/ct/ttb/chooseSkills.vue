<template>

<div class="stageTitle">
<h1>Let's Choose Skills: </h1>
</div>

<div><h2>Skills Earned This Term</h2>
        <p>This will be creationStatus.skillQueue</p>
        <ul>
                <li v-for="(skillItem, index) in creationStatus.skillQ" 
                :key="'skillqueue' + index">{{ skillItem.skill.name }}</li>

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

 
         On Mount - we've gotten the term up - 


 ----------------------------------------*/

 onMounted( () => { 
    console.log('+++chooseSkills mounted - applying and choosing skills')
    
    skillAssignLoop()
    // if (character.pcData.flags.newCycle) {startCareerCycle()}
    // //clear the cycle
    // character.pcData.flags.newCycle = false

} )



 /*-------------------------------------

 
         Start teh skill loop


 ----------------------------------------*/

// check if there are skills in the queue
const skillAssignLoop = () => {

    // 1) Determine if there are skills/benefits in the queue
    if (creationStatus.skillQ.length != 0) {

        // Loop through
        console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvv')
        console.log(' Loop skills')

        for (const singleSkill of creationStatus.skillQ) {
            const currentSkillIndex = singleSkill.skill.skillIndex

         /*-------------------------------------
        PENDING
        1a) Check if they are skills or benefits******
        -------------------------------------*/
         /*-------------------------------------
        PENDING
        2) If skill, then check if they need to be cascaded
        -------------------------------------*/

        // 3) If NOT, then check the skill list and add/uprate the skill as applicable



            // if the level is undefined or null, then it hasn't been created yet
            if(typeof character.pcData.skills[currentSkillIndex] === 'undefined') {
                // console.log('character skill at key: '+ currentSkillIndex + ' is undefined.');
                // console.log('----------=================--------')

                const tempSkill = {}
                tempSkill.level = 1
                tempSkill.name = singleSkill.skill.name
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
            



        }








        // const currentSkillQueue = pop(creationStatus.skillQ)
        // console.log(currentSkillQueue)
    }
 
 /*-------------------------------------

    4) If YES, then present the cascade options
    - note - in this case I'll present subcascades together with singletons. 
        applicable when getting vehicle, and can choose grav or "watercraft",
        where watercraft has further cascades. We'll just present all of the 
        available options
    5) Once chosen, andd/uprate as applicable
6) If benefits, add as appropriate - note possibility of getting a muster-
    out weapon
7) if skill queue is empty, check for pending rolled skills

---SET A FLAG on muster out status!!!! affects return button!!!

 ----------------------------------------*/





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
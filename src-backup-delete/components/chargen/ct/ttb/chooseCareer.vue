<template>

<h1>Let's pick a career path: </h1>


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


<!--   const careerStart = reactive(tables.services)
   -->
<div>
<select name="careerChoice"  id="careerChoice" v-model="selectedIndex">
                <option v-for="(career, index) in careerStart" :value="index" :key="genServicekey(career, 'choosecareer')">Try the {{ career.displayName }} </option>

            </select>

            </div>
            <div>
                <button @click.prevent="tryCareer(selectedIndex)">Let's See if you get in!</button>
                </div>


<div class="results" v-if="revealResults.reveal">
    <h2>Enlistment results:</h2>
    <div class="resultText"><p>{{ resultsText.value }}</p></div>
    <button @click.prevent="startCareer()">Start your career</button>
</div>


</template>

<script setup>

// import relevant vue libraries
import { reactive, provide, ref, computed, onMounted } from 'vue';


/*-------------------------------------
        Import character datastore and setup
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

const selectedIndex = ref(0)
const revealResults = reactive({reveal:false})
const resultsText = reactive({value:''})






// /*-------------------------------------
//         Generate a uniquekey based on service and text
// ----------------------------------------*/

const genServicekey = (service, header) => {

    const tempKey = service.shortName.toString() + header.toString()


    return tempKey

}





 /*-------------------------------------

 
         try to enlist in desired career

            Pick a random career if that fails


 ----------------------------------------*/






const tryCareer = (selectedService) => {
    // we see if  we get in
    creationStatus.careerLog.push('Try to enslist in the ' + careerStart[selectedService].displayName + ' career path')
    // get the target
    const rollTarget = careerStart[selectedService].enlistment.roll
    creationStatus.careerLog.push('> Required roll is:  ' + rollTarget)

    // set the base DM to zero
    let totalDMs = 0


    // get an array of characteristic keys
    //  const object1 = { }
    //   // console.log(Object.keys(object1));
    // create an easier handle
    const pcStats = character.pc.characteristics
    // break out an array to allow iteration
    const statList = Object.keys(pcStats)


    //does a dm of +1 or +2 apply
    // find the dm characteristic and required value
    const rollDM1stat = careerStart[selectedService].enlistment.dm1.shortName
    const rollDM1value = careerStart[selectedService].enlistment.dm1.value
    //get character stat value

    for (const indStat of statList  ) {
        // console.log(' checking indStat : ' + indStat + ' against ' + rollDM1stat )
        // console.log('---> character ' + pcStats[indStat].longName + ' is: ' +pcStats[indStat].value)
        if (pcStats[indStat].shortName === rollDM1stat) {
            // console.log('>>> Right stat - check values')
            if (pcStats[indStat].value >= rollDM1value) { 
                totalDMs += 1 
                creationStatus.careerLog.push('+1 for  ' + pcStats[indStat].longName + ' being ' + rollDM1value + '+')
            }
        }
    }


    const rollDM2stat = careerStart[selectedService].enlistment.dm2.shortName
    const rollDM2value = careerStart[selectedService].enlistment.dm2.value

    for (const indStat of statList  ) {
        // console.log(' checking indStat : ' + indStat + ' against ' + rollDM2stat + ' for +2 dm' )
        // console.log('---> character ' + pcStats[indStat].longName + ' is: ' +pcStats[indStat].value)
        if (pcStats[indStat].shortName === rollDM2stat) {
            // console.log('>>> Right stat - check values')
            if (pcStats[indStat].value >= rollDM2value) { 
                totalDMs += 2
                creationStatus.careerLog.push('+2 for  ' + pcStats[indStat].longName + ' being ' + rollDM2value + '+')
            }

        }
    }

    // console.log(' Our total DM is : ' +   totalDMs )

    const dRoll = creationStatus.roll2D6()
    const enlistResult = dRoll + totalDMs
    let assignedService = null
    let enlistSuccess = false
    

    ///////DEBUG!!!!!!
    if (enlistResult >= rollTarget) { enlistSuccess = true }


    creationStatus.careerLog.push('You rolled ' + dRoll + ' for a total of ' + enlistResult)

    if (!enlistSuccess) {
        // console.log('Did not successfully enlist - randomly pick one')
        // no plus one because index zero
        assignedService = Math.floor(( Math.random() * careerStart.length ));
        // console.log('we got assigned : ' + assignedService)
        // console.log('we got (lname)) : ' + careerStart[assignedService].displayName)
        resultsText.value = careerStart[assignedService].drafted
        character.pc.flags.draftee = true
        creationStatus.careerLog.push(resultsText.value)
    } else {
        // console.log('succeeded: assign the correct service  : ' + selectedService)
        assignedService = selectedService
        resultsText.value = careerStart[assignedService].congrats
        creationStatus.careerLog.push(resultsText.value)

    }

    if (careerStart[assignedService].shortName === 'scouts' || careerStart[assignedService].shortName === 'other') {
        character.pc.flags.promotions = false
    }

     character.pc.career.currentServiceName = careerStart[assignedService].displayName
     character.pc.career.currentService = assignedService

    
    revealResults.reveal = true
   
}




const startCareer = () => {
    character.pc.flags.newCycle = true


    // has to be last
    creationStatus.currentStep = creationStatus.stepNamesMap.doTerm
}

</script>


<style scoped>



</style>
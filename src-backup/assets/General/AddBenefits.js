// import { getPHexValue } from './GetPhex.js'
// import { useCharacterStore } from '@/stores/character'
// const character = useCharacterStore()

/* 

Integrated mappings for pHex to convert numerical values for characteristics to pseudohex

*/
// export { addSkillSwitcher, abBumpStat, abAddBenefit , abAddCasSkill, abAddSkill   }


/*-------------------------------------
        Import character datastore and setup
----------------------------------------*/


export const addSkills = {

    abBumpStat: function( statSet) {
        console.log( ' Bump Stats ')
        
    },

    abAddBenefit: function( benefitName) {
        console.log( ' Add benefits ')

    },

    abAddCasSkill: function( casSkill) {
        console.log( ' Add cascading skills')
        // this will need to be expanded, later. 


    },

    abAddSkill: function( skillSet) {
//             // skills are objects with teh following keys
//     //          name: 'Vacc Suit',      // Name of skill for table
//     //          skillIndex: 52, 
//     //          skillVal: integer  (this is in the character)
 
//         // the skillset will give you the name and the index 
//         //(hopefully unique - data entry enforcement)
//         // we check if the entry already exists in 
//         // character.pc.skills
//         // (do we need to import that? in the context of this already being imported?)
//         // if not, we create it at level 1
//         // if it exists, we bump the value


//         // load character store
//         const character = useCharacterStore()


//         console.log('adding straight skill')
//         console.log('does the character have the skill:  ' + skillSet.name)
//         console.log(' Character skill list is: ')
//         console.log(character.pc.skills)
//         console.log ('(search index)')

//         // debugger

//         const skillResult =  character.pc.skills.findIndex( element => element.skillIndex === skillSet.skillindex  )  
//         console.log('Returned index is: ' + skillResult)

//         // debugger
        
//         if (skillResult < 0 ) {
//             // debugger
//             console.log('It\'s a new skill (less than zero): just add it')
// //            new skill, just add it
//             // debugger
//             character.pc.skills.push(  {  name: skillSet.name, skillindex: skillSet.skillIndex , skillVal: 1       }   ) 
//             // debugger
//             console.log('verify pinia for: character.pc.skills: ')
//             console.log(character.pc.skills)
//         } else {

//             character.pc.skills[skillResult].skillVal += 1

//         }

    },

    /*-------------------------------------------------------------

      addSkillSwitcher

    -------------------------------------------------------------*/


    addSkillSwitcher: function( skill) {

    console.log('Entering the skillswitcher to apply the actual skill')

    // console.log('call the skillswitcher to apply the below actual skill to ' + this.character.pc.name)
    console.log(skill)

    // you need to pas in the character handle

    // first determine what we go to based on the tag
    // flags available are: 
                // addBenefit
                // - bumpStat
                // - addSkill
                // - addCasSkill
                //-----------------------------------

                switch (skill.flags) {
                    case 'addBenefit':
                      // actions to take / statements
                      this.abAddBenefit( skill)
                      break
                    case 'bumpStat':
                      // actions to take / statements
                      this.abBumpStat( skill)
                      break
                    // …
                    case 'addSkill':
                      console.log('the tag is addSkill - we will go to adding a stright skill')
                      this.abAddSkill( skill)
                      break
                    case 'addCasSkill':
                      // actions to take / statements
                      this.abAddCasSkill( skill)
                      break
                    default:
                      // actions to take / statements
                  }
                  



    // //array.find(x => x.name === 'string 1')
    // // const searchObject = carList.find((car) => car.id == searchId);




    // // const isLargeNumber = (element) => element > 13;

    // // console.log(array1.findIndex(isLargeNumber));
    // // Expected output: 3




    // // const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    // // const result = words.filter((word) => word.length > 6);
    
    // // console.log(result);
    // // Expected output: Array ["exuberant", "destruction", "present"]



    }


}
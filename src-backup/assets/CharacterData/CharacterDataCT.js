export const CharacterDataCT = {
    name: 'New Character',
    age: 18,
    flags: {
        alive: true,
        initialRolls: false,
        draftee:false,
        promotions: true,
        newCycle: false,
        // uppNeedsUpdate: false,
    },
    career: {
        // allows later choice of traveller / cepheus versions
        tVersion: '',
        terms: 0,
        yearsCreation: 0,
        termHistory: [],
        currentService: null,
        currentServiceName: '',
        finalCreationLog: []

    },
    characteristics: {
        strength: {
            longName: 'strength',
            shortName: 'Stren',
            value: 0,
            pHexValue: '0'
        },
        dexterity: {
            longName: 'dexterity',
            shortName: 'Dext',
            value: 0,
            pHexValue: '0'
        },
        endurance: {
            longName: 'endurance',
            shortName: 'Endur',
            value: 0,
            pHexValue: '0'
        },
        intelligence: {
            longName: 'intelligence',
            shortName: 'Intel',
            value: 0,
            pHexValue: '0'
        },
        education: {
            longName: 'education',
            shortName: 'Educ',
            value: 0,
            pHexValue: '0'
        },
        social: {
            longName: 'social standing',
            shortName: 'Soc',
            value: 0,
            pHexValue: '0'
        }
    },
    // noble title is a string that will be set via social standing
    nobleTitle: '',
    militaryRank: {
        // type is officer vs enlisted - to be standardized in CharGenTables
        //ct only cares about officer ranks
        type: '',
        level: 0
    },
    homeWorld: '(none)',
    // skills are objects with teh following keys
    //          name: 'Vacc Suit',      // Name of skill for table
    //          skillIndex: 52, 
    //          skillVal: integer
    skills: [],
    benefits: [],





    /*
    
    Built in methods / functions
    
    */

    

    generateUPP() {

        let upp = this.characteristics.strength.pHexValue + this.characteristics.dexterity.pHexValue + this.characteristics.endurance.pHexValue + this.characteristics.intelligence.pHexValue + this.characteristics.education.pHexValue + this.characteristics.social.pHexValue;

        return upp;
    },

/* 



    getPHexValue(characteristic) {
        // Yeah - we're repeating this one, because for right now because
        // I'm not sure how to call the exisitng module into these internal 
        // functions, AND, I'm not sure everything needing pseudoHex will be 
        // character related, for now    
        
                if (characteristic < 10 ) { 
                    const returnValue = characteristic.toString()
                    return returnValue
                }
            
                switch(characteristic) {
                    case 10:
                        return 'A';
                        break;
            
                    case 11:
                        return 'B';
                        break;
                    case 12:
                        return 'C';
                        break;
                    case 13:
                        return 'D';
                        break;
                    case 14:
                        return 'E';
                        break;
                    case 15: 
                        return 'F';
                        break;
                    case 16:
                        return 'G';
                        break;
                }
            },
            
        
        



    abBumpStat( statSet) {
        console.log( ' Bump Stats ')
        /////////////////////////////////////////////////////////////////////////////
        // bump the respective stat once
        console.log('Bumping the following stat: ------------')
        console.log(statSet)
        let tempPhex = ''


        switch (statSet.affects) {
            case 'Stren':
              // actions to take / statements
              this.characteristics.strength.value += statSet.bonus
              this.characteristics.strength.pHexValue = tempPhex

              break
            case 'Dext':
              // actions to take / statements
              this.characteristics.dexterity.value += statSet.bonus
              break
            case 'Endur':
              // actions to take / statements
              this.characteristics.endurance.value += statSet.bonus
              break
            case 'Intel':
                // actions to take / statements
                this.characteristics.intelligence.value += statSet.bonus
                break
            case 'Educ':
                // actions to take / statements
                this.characteristics.education.value += statSet.bonus
                break
            case 'Soc':
                // actions to take / statements
                this.characteristics.social.value += statSet.bonus
                break
                              

            default:
              // actions to take / statements
          }
          

        this.uppNeedsUpdate = true


        
    },

    abAddBenefit( benefitName) {
        console.log( ' Add benefits ')
        /////////////////////////////////////////////////////////////////////////////

    },

    abAddSkill( skillSet) {
            // skills are objects with the following keys
                //          name: 'Vacc Suit',      // Name of skill for table
                //          skillIndex: 52, 
                //          skillVal: integer  (this is in the character)

        // the skillset will give you the name and the index 
        //(hopefully unique - data entry enforcement)
        // we check if the entry already exists in 
        // character.pc.skills
        // (do we need to import that? in the context of this already being imported?)
        // if not, we create it at level 1
        // if it exists, we bump the value



        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> \n Adding straight skill: __abAddSkill__   ')
        console.log(' Character skill list is currently: ')
        console.log(this.skills)
        console.log('(searched the character skills index)')
        console.log('Adding the skill (skillSet): ')
        console.log(skillSet)

        // debugger

        const skillResult =  this.skills.findIndex( element => element.skillIndex === skillSet.skillIndex  )  
        console.log('Returned index is: ' + skillResult)
        console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')

        // debugger
        
        if (skillResult < 0 ) {
            // debugger
            console.log('It\'s a new skill (less than zero): just add it')
    //            new skill, just add it
            // debugger
            this.skills.push(  {  name: skillSet.name, skillIndex: skillSet.skillIndex , skillVal: 1       }   ) 

        } else {
            // debugger

            this.skills[skillResult].skillVal += 1

        }
        
        console.log('Verify this.skills : ')
        console.log(this.skills)
        console.log('!!!!!!!!!')

        // debugger


    },


    abAddCasSkill( casSkill) {
        console.log( ' Add cascading skills')
        // this will need to be expanded, later. 
        /////////////////////////////////////////////////////////////////////////////


    },


    addSkillSwitcher( skill) {

        console.log('Entering the skillswitcher to apply the actual skill')

    console.log('call the skillswitcher to apply the below actual skill to ' + this.name)
    console.log(skill)



        /////////////////////////////////////////  DEBUG
        debugger
        const tempBuff = {
                    name: '+1 Social',
                    affects: 'Soc',
                    bonus: 1,
                    flags: 'bumpStat'
                }
        this.abBumpStat( tempBuff)





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
                      console.log('the tag is bumpStat - we will call the bump routine')

                      this.abBumpStat( skill)
                      break
                    // …
                    case 'addSkill':
                      console.log('the tag is addSkill - we will call the add routine')
                      this.abAddSkill( skill)
                      break
                    case 'addCasSkill':
                      // actions to take / statements
                      this.abAddCasSkill( skill)
                      break
                    default:
                      // actions to take / statements
                  }
                  



    //array.find(x => x.name === 'string 1')
    // const searchObject = carList.find((car) => car.id == searchId);




    // const isLargeNumber = (element) => element > 13;

    // console.log(array1.findIndex(isLargeNumber));
    // Expected output: 3




    // const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    // const result = words.filter((word) => word.length > 6);
    
    // console.log(result);
    // Expected output: Array ["exuberant", "destruction", "present"]



    }

    
 */


}
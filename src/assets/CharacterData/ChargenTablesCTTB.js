export const cttbCharGenTables = {

/*-------------------------------------------------------------------
Flag Key
    - addBenefit
    - bumpStat
    - addSkill - cascade skill self-determined
------------------*/


/*-------------------------------------------------------------------
Benefits and Skills

    Since these are fairly interchangeably referenced in muster out 
    benefits, acquired skills, and service skills, we'll reference
    them in the following ways: 

    Characteristic changes: 
                { 
                    name: '+1 Intel',   //display name for table
                    affects: 'Intel',   //short name of characteristic
                                        //    from character store template
                                        //    'Stren'
                                        //    'Dext'
                                        //    'Endur'
                                        //    'Intel'
                                        //    'Educ'
                                        //    'Soc'
                    bonus: 1,           //how much is gained
                    flags: 'bumpStat'   // flags to set on character
                },




    Straight Benefit: 
                { 
                    name: 'Low Passage',    //display name
                                            //also how it will be added to posessions
                    flags: 'addBenefit'     // flag to set
                },





    Skills:  
                { 
                        name: 'Vacc Suit',      // Name of skill for table
                        skillIndex: 52,         // skill reference to object key
                        flags: 'addSkill'       // add flag to set
                },





**********  Skills

Note - that vehicles as a cascade skill has two groups of specific skills plus a number of 
individual vehicle types

    
'vehicles':{
    name: 'Vehicle',              //required
    cascadeParent: false,         //required: true if it has a parent group or general category
    parentGroup: ,                // - only if is a child. Key/ID of containing group or general category
    
    cascadeGroup: true,           //required - true if it has a child group of further cascade skills
    cascadeGID: ['aircraft'],     // - only if there is a child group of further specific skills . array of object key names

    cascadeSpecific: true,        //required - true if it has specific child cascade skills
    cascadeSID: [],               // - only if there are specific child skills. array of object key names

},



    
    We will add up what the character gets flagged over a term / muster out cycle, 
    and then resolve each one. 



--------------------------------------------------------------------*/









/*-------------------------------------------------------------------
Services
    - includes survival and promotion rolls
    - service-specific musterinig tables
    - service modifiers (other than scout 2/turn skills)
    - service-specific skill tables

    NOTE - these are entered in draft order / book order



    The skill results for a roll of ―1‖ for Marines, Army and 
    Scouts should be ―Vehicle‖, rather than ―ATV‖ (Marines/Army) 
    or ―Air/Raft‖ (Scouts).
--------------------------------------------------------------------*/

    services: [
/*-------------------------------------------------------------------
            Navy (0)
--------------------------------------------------------------------*/
        {
            displayName: 'Navy',
            shortName: 'navy',
            congrats: 'Congratulations, sailor. You joined the Navy!',
            drafted: 'Congratulations, sailor. You were drafted by the Navy',
            serviceLog: 'Joined the Navy',
            draft: 1,
            enlistment: {
                roll: 8,
                dm1: {
                    shortName: 'Intel',
                    value: 8,
                },
                dm2: {
                    shortName: 'Educ',
                    value: 9,
                },
            },
            survival: {
                roll: 5,
                dm2: {
                    shortName: 'Intel',
                    value: 7,
                },
            },
            commission: {
                roll: 10,
                dm1: {
                    shortName: 'Soc',
                    value: 9,
                },
            },
            //3
            promotion: {
                roll: 8,
                dm1: {
                    shortName: 'Educ',
                    value: 8,
                },
            },
            reenlist: {
                roll: 6
            },
            ranks: {
                1: 'Ensign',
                2: 'Lieutenant',
                3: 'Lt Commander',
                4: 'Commander',
                5: 'Captain',
                6: 'Admiral'
            }, 
            serviceSkills: {
                // note - the key/index here is the rank. Zero is enlisted
                5: {
                    name: '+1 Social',
                    affects: 'Soc',
                    bonus: 1,
                    flags: 'bumpStat'
                },
                6: {
                    name: '+1 Social',
                    affects: 'Soc',
                    bonus: 1,
                    flags: 'bumpStat'
                },
            },





            //further data
            //
            //
            //
            musterOut: {
                1: { 
                    name: 'Low Passage',
                    flags: 'addBenefit'
                },
                2: { 
                    name: '+1 Intel',
                    affects: 'Intel',
                    bonus: 1,
                    flags: 'bumpStat'
                },
                3: { 
                    name: '+2 Educ',
                    affects: 'Educ',
                    bonus: 2,
                    flags: 'bumpStat'
                },
                4:  {
                    name: 'Blade',
                    skillIndex: 'blades',
                    flags: 'addSkill',       
                },
                5: { 
                    name: 'Travellers Aid Society Membership',
                    flags: 'addBenefit'
                },
                6: { 
                    name: 'High Passage',
                    flags: 'addBenefit'
                },
                7:  { 
                    name: '+2 Social',
                    affects: 'Soc',
                    bonus: 2,
                    flags: 'bumpStat'
                },
            } , 
            cashTable: {
                1: 1000,
                2: 5000,
                3: 5000,
                4: 10000,
                5: 20000,
                6: 50000,
                7: 50000
            },
            skills: {
                personal: {
                    1: { 
                        name: '+1 Strength',
                        affects: 'Stren',
                        bonus: 1,
                        flags: 'bumpStat'
                    },
                    2: { 
                        name: '+1 Dexterity',
                        affects: 'Dext',
                        bonus: 1,
                        flags: 'bumpStat'
                    },
                    3: { 
                        name: '+1 Endurance',
                        affects: 'Endur',
                        bonus: 1,
                        flags: 'bumpStat'
                    },
                    4: { 
                        name: '+1 Intelligence',
                        affects: 'Intel',
                        bonus: 1,
                        flags: 'bumpStat'
                    },
                    5: { 
                        name: '+Education',
                        affects: 'Educ',
                        bonus: 1,
                        flags: 'bumpStat'
                    },
                    6: { 
                        name: '+1 Social',
                        affects: 'Soc',
                        bonus: 1,
                        flags: 'bumpStat'
                    },
                },
                service: {

                    1: { 
                        name: 'Ship\'s Boat',
                        skillIndex: 'shipsboat',
                        flags: 'addSkill'
                    },
                    2: { 
                        name: 'Vacc Suit',
                        skillIndex: 'vaccsuit',
                        flags: 'addSkill'
                    },
                    3: { 
                        name: 'Forward Observer',
                        skillIndex: 'forwardobs',
                        flags: 'addSkill'
                    },
                    4: { 
                        name: 'Gunnery',
                        skillIndex: 'gunnery',
                        flags: 'addSkill'
                    },
                    5:  {
                        name: 'Blades',
                        skillIndex: 'blades',
                        flags: 'addSkill',
            
                    },
                    6: {
                        name: 'Guns',
                        skillIndex: 'guns',
                        flags: 'addSkill',
             
                    },
                },
                advanced: {

                    1: { 
                        name: 'Vacc Suit',
                        skillIndex: 'vaccsuit',
                        flags: 'addSkill'
                    },
                    2: { 
                        name: 'Mechanical',
                        skillIndex: 'mechanical',
                        flags: 'addSkill'
                    },
                    3: { 
                        name: 'Electronic',
                        skillIndex: 'electronic',
                        flags: 'addSkill'
                    },
                    4: { 
                        name: 'Engineering',
                        skillIndex: 'engineering',
                        flags: 'addSkill'
                    },
                    5: { 
                        name: 'Gunnery',
                        skillIndex: 'gunnery',
                        flags: 'addSkill'
                        },
                    6: { 
                        name: 'Jack-of-all-trades',
                        skillIndex: 'jot',
                        flags: 'addSkill'
                    },

                },
                advanced2: {
                    requiredEdu: 8,

                    1: { 
                        name: 'Medical',
                        skillIndex: 'medical',
                        flags: 'addSkill'
                    },
                    2: { 
                        name: 'Navigation',
                        skillIndex: 'navigation',
                        flags: 'addSkill'
                    },
                    3: { 
                        name: 'Engineering',
                        skillIndex: 'engineering',
                        flags: 'addSkill'
                    },
                    4: { 
                        name: 'Computer',
                        skillIndex: 'computer',
                        flags: 'addSkill'
                    },
                    5: { 
                        name: 'Pilot',
                        skillIndex: 'pilot',
                        flags: 'addSkill'
                        },
                    6: { 
                        name: 'Administration',
                        skillIndex: 'administration',
                        flags: 'addSkill'
                    },

                },
            },

        },

/*-------------------------------------------------------------------
            Marines (1)
--------------------------------------------------------------------*/

    /// MARINES
        {
            displayName: 'Marines',
            shortName: 'marines',
            congrats: 'Congratulations, soldier. You joined the Marines!',
            drafted: 'Congratulations, soldier. You were drafted by the Marines',
            serviceLog: 'Joined the Marines',
            draft: 2,
            enlistment: {
                roll: 9,
                dm1: {
                    shortName: 'Intel',
                    value: 8,
                },
                dm2: {
                    shortName: 'Stren',
                    value: 8,
                },
            },
            survival: {
                roll: 6,
                dm2: {
                    shortName: 'Endur',
                    value: 8,
                },
            },
            commission: {
                roll: 9,
                dm1: {
                    shortName: 'Educ',
                    value: 7,
                },
            },
            //3
            promotion: {
                roll: 9,
                dm1: {
                    shortName: 'Soc',
                    value: 8,
                },
            },
            reenlist: {
                roll: 6
            },  
            
            ranks: {
                1: 'Lieutenant',
                2: 'Captain',
                3: 'Force Commander',
                4: 'Lt Colonel',
                5: 'Colonel',
                6: 'Brigadier'
            }, 
            serviceSkills: {
                // note - the key/index here is the rank. Zero is enlisted
                0: {
                    name: 'Cutlass',
                    skillIndex: 'cutlass',
                    flags: 'addSkill'  
                    },
                1:
                {
                    name: 'Revolver',
                    skillIndex: 'revolver',
                    flags: 'addSkill'  
                },
            },  
 


            //further data
            //
            //
            //
            musterOut: {
                1: { 
                    name: 'Low Passage',
                    flags: 'addBenefit'
                },
                2: { 
                    name: '+2 Intel',
                    affects: 'Intel',
                    bonus: 2,
                    flags: 'bumpStat'
                },
                3: { 
                    name: '+1 Educ',
                    affects: 'Educ',
                    bonus: 1,
                    flags: 'bumpStat'
                },
                4:  {
                    name: 'Blade',
                    skillIndex: 'blades',
                    flags: 'addSkill',       
                },
                5: { 
                    name: 'Travellers Aid Society Membership',
                    flags: 'addBenefit'
                },
                6: { 
                    name: 'High Passage',
                    flags: 'addBenefit'
                },
                7:  { 
                    name: '+2 Social',
                    affects: 'Soc',
                    bonus: 2,
                    flags: 'bumpStat'
                },
            } , 
            cashTable: {
                1: 2000,
                2: 5000,
                3: 5000,
                4: 10000,
                5: 20000,
                6: 30000,
                7: 40000
            },
 
            skills: {
                personal: {
                    1: { 
                        name: '+1 Strength',
                        affects: 'Stren',
                        bonus: 1,
                        flags: 'bumpStat'
                    },
                    2: { 
                        name: '+1 Dexterity',
                        affects: 'Dext',
                        bonus: 1,
                        flags: 'bumpStat'
                    },
                    3: { 
                        name: '+1 Endurance',
                        affects: 'Endur',
                        bonus: 1,
                        flags: 'bumpStat'
                    },
                    4: { 
                        name: 'Gambling',
                        skillIndex: 'gambling',
                        flags: 'addSkill'
                    },
                    5: { 
                        name: 'Brawling',
                        skillIndex: 'brawling',
                        flags: 'addSkill'
                    },
                    6: { 
                        name: 'Blades',
                        skillIndex: 'blades',
                        flags: 'addSkill'
                    },
                },
                service: {

                    1: { 
                        name: 'Vehicle',
                        skillIndex: 'vehicles',
                        flags: 'addSkill'
                    },
                    2: { 
                        name: 'Vacc Suit',
                        skillIndex: 'vaccsuit',
                        flags: 'addSkill'
                    },
                    3: { 
                        name: 'Blades',
                        skillIndex: 'blades',
                        flags: 'addSkill'
                    },
                    4: { 
                        name: 'Gun',
                        skillIndex: 'guns',
                        flags: 'addSkill',
                    },
                    5:  {
                        name: 'Blade',
                        skillIndex: 'blades',
                        flags: 'addSkill',
            
                    },
                    6: {
                        name: 'Gun',
                        skillIndex: 'guns',
                        flags: 'addSkill',
             
                    },
                },
                advanced: {

                    1: { 
                        name: 'Vehicle',
                        skillIndex: 'vehicles',
                        flags: 'addSkill'
                    },
                    2: { 
                        name: 'Mechanical',
                        skillIndex: 'mechanical',
                        flags: 'addSkill'
                    },
                    3: { 
                        name: 'Electronic',
                        skillIndex: 'electronic',
                        flags: 'addSkill'
                    },
                    4: { 
                        name: 'Tactics',
                        skillIndex: 'tactics',
                        flags: 'addSkill',
                    },
                    5: { 
                        name: 'Blade',
                        skillIndex: 'blades',
                        flags: 'addSkill',
                        },
                    6: { 
                        name: 'Gun',
                        skillIndex: 'guns',
                        flags: 'addSkill',
                    },

                },
                advanced2: {
                    requiredEdu: 8,

                    1: { 
                        name: 'Medical',
                        skillIndex: 'medical',
                        flags: 'addSkill'
                    },
                    2: { 
                        name: 'Tactics',
                        skillIndex: 'tactics',
                        flags: 'addSkill',
                    },
                    3: { 
                        name: 'Tactics',
                        skillIndex: 'tactics',
                        flags: 'addSkill',
                    },
                    4: { 
                        name: 'Computer',
                        skillIndex: 'computer',
                        flags: 'addSkill'
                    },
                    5: { 
                        name: 'Leader',
                        skillIndex: 'leader',
                        flags: 'addSkill'
                        },
                    6: { 
                        name: 'Administration',
                        skillIndex: 'administration',
                        flags: 'addSkill'
                    },

                },
            },

        },

        /*-------------------------------------------------------------------
                    The Army (2)
        --------------------------------------------------------------------*/
        
                {
                    displayName: 'Army',
                    shortName: 'army',
                    congrats: "Congratulations, soldier. You're in the Army now!",
                    drafted: 'Congratulations, soldier. You were drafted by the Army',
                    serviceLog: 'Joined the Army',
                    draft: 3,
                    enlistment: {
                        roll: 5,
                        dm1: {
                            shortName: 'Dext',
                            value: 6,
                        },
                        dm2: {
                            shortName: 'Endur',
                            value: 5,
                        },
                    },
                    survival: {
                        roll: 5,
                        dm2: {
                            shortName: 'Educ',
                            value: 6,
                        },
                    },
                    commission: {
                        roll: 5,
                        dm1: {
                            shortName: 'Endur',
                            value: 7,
                        },
                    },
                    //3
                    promotion: {
                        roll: 6,
                        dm1: {
                            shortName: 'Educ',
                            value: 7,
                        },
                    },
                    reenlist: {
                        roll: 7
                    }, 
                    
                    
                    ranks: {
                        1: 'Lieutenant',
                        2: 'Captain',
                        3: 'Major',
                        4: 'Lt Colonel',
                        5: 'Colonel',
                        6: 'Brigadier'
                    }, 
                    serviceSkills: {
                        // note - the key/index here is the rank. Zero is enlisted
                        0:  {
                            name: 'Rifle',
                            skillIndex: 'rifle',
                            flags: 'addSkill'  
                        },
                        1: {
                            name: 'SMG',
                            skillIndex: 'smg',
                            flags: 'addSkill'  
                        },
                    },    
                    

            //further data
            //
            //
            //
            musterOut: {
                1: { 
                    name: 'Low Passage',
                    flags: 'addBenefit'
                },
                2: { 
                    name: '+1 Intel',
                    affects: 'Intel',
                    bonus: 1,
                    flags: 'bumpStat'
                },
                3: { 
                    name: '+2 Educ',
                    affects: 'Educ',
                    bonus: 2,
                    flags: 'bumpStat'
                },
                4:  {
                    name: 'Gun',
                    skillIndex: 'guns',
                    flags: 'addSkill',       
                },
                5: { 
                    name: 'High Passage',
                    flags: 'addBenefit'
                },
                6: { 
                    name: 'Middle Passage',
                    flags: 'addBenefit'
                },
                7:  { 
                    name: '+1 Social',
                    affects: 'Soc',
                    bonus: 1,
                    flags: 'bumpStat'
                },
            } , 
            cashTable: {
                1: 2000,
                2: 5000,
                3: 10000,
                4: 10000,
                5: 10000,
                6: 20000,
                7: 30000
            },
 
            skills: {
                personal: {
                    1: { 
                        name: '+1 Strength',
                        affects: 'Stren',
                        bonus: 1,
                        flags: 'bumpStat'
                    },
                    2: { 
                        name: '+1 Dexterity',
                        affects: 'Dext',
                        bonus: 1,
                        flags: 'bumpStat'
                    },
                    3: { 
                        name: '+1 Endurance',
                        affects: 'Endur',
                        bonus: 1,
                        flags: 'bumpStat'
                    },
                    4: { 
                        name: 'Gambling',
                        skillIndex: 'gambling',
                        flags: 'addSkill'
                    },
                    5: { 
                        name: '+1 Education',
                        affects: 'Educ',
                        bonus: 1,
                        flags: 'bumpStat'
                    },
                    6: { 
                        name: 'Brawling',
                        skillIndex: 'brawling',
                        flags: 'addSkill'
                    },
                },
                service: {

                    1: { 
                        name: 'Vehicle',
                        skillIndex: 'vehicles',
                        flags: 'addSkill'
                    },
                    2: { 
                        name: 'Vehicle',
                        skillIndex: 'vehicles',
                        flags: 'addSkill'
                    },
                    3: { 
                        name: 'Gun',
                        skillIndex: 'guns',
                        flags: 'addSkill',
                    },
                    4: { 
                        name: 'Forward Observer',
                        skillIndex: 'forwardobs',
                        flags: 'addSkill',
                    },
                    5:  {
                        name: 'Blade',
                        skillIndex: 'blades',
                        flags: 'addSkill',
            
                    },
                    6: {
                        name: 'Gun',
                        skillIndex: 'guns',
                        flags: 'addSkill',
             
                    },
                },
                advanced: {

                    1: { 
                        name: 'Vehicle',
                        skillIndex: 'vehicles',
                        flags: 'addSkill'
                    },
                    2: { 
                        name: 'Mechanical',
                        skillIndex: 'mechanical',
                        flags: 'addSkill'
                    },
                    3: { 
                        name: 'Electronic',
                        skillIndex: 'electronic',
                        flags: 'addSkill'
                    },
                    4: { 
                        name: 'Tactics',
                        skillIndex: 'tactics',
                        flags: 'addSkill',
                    },
                    5: { 
                        name: 'Blade',
                        skillIndex: 'blades',
                        flags: 'addSkill',
                        },
                    6: { 
                        name: 'Gun',
                        skillIndex: 'guns',
                        flags: 'addSkill',
                    },

                },
                advanced2: {
                    requiredEdu: 8,

                    1: { 
                        name: 'Medical',
                        skillIndex: 'medical',
                        flags: 'addSkill'
                    },
                    2: { 
                        name: 'Tactics',
                        skillIndex: 'tactics',
                        flags: 'addSkill',
                    },
                    3: { 
                        name: 'Tactics',
                        skillIndex: 'tactics',
                        flags: 'addSkill',
                    },
                    4: { 
                        name: 'Computer',
                        skillIndex: 'computer',
                        flags: 'addSkill'
                    },
                    5: { 
                        name: 'Leader',
                        skillIndex: 'leader',
                        flags: 'addSkill'
                        },
                    6: { 
                        name: 'Administration',
                        skillIndex: 'administration',
                        flags: 'addSkill'
                    },

                },
            }, 
                },
        
          

        /*-------------------------------------------------------------------
                    Scout Service (3)
        --------------------------------------------------------------------*/
        
            {
                displayName: 'Scouts',
                shortName: 'scouts',
                congrats: "Congratulations, you're in the Scout Service now!",
                drafted: 'Pack your bags, you were drafted by the Scout Service',
                serviceLog: 'Joined the Scouts',
                draft: 4,
                enlistment: {
                    roll: 7,
                    dm1: {
                        shortName: 'Intel',
                        value: 6,
                    },
                    dm2: {
                        shortName: 'Stren',
                        value: 8,
                    },
                },
                survival: {
                    roll: 7,
                    dm2: {
                        shortName: 'Endur',
                        value: 9,
                    },
                },
                commission: {
                    roll: null,
                    dm1: {
                        shortName: '',
                        value: null,
                    },
                },
                //3
                promotion: {
                    roll: null,
                    dm1: {
                        shortName: '',
                        value: null,
                    },
                },
                reenlist: {
                    roll: 3
                },   
                    
                    
                ranks: {
                    1: 'none',
                    2: 'none',
                    3: 'none',
                    4: 'none',
                    5: 'none',
                    6: 'none'
                }, 
                serviceSkills: {
                    // note - the key/index here is the rank. Zero is enlisted
                    0:  {
                        name: 'Pilot',
                        skillIndex: 'pilot',
                        flags: 'addSkill' 
                        
            
                    },
                },  
                 
                    

            //further data
            //
            //
            //
            musterOut: {
                1: { 
                    name: 'Low Passage',
                    flags: 'addBenefit'
                },
                2: { 
                    name: '+2 Intel',
                    affects: 'Intel',
                    bonus: 2,
                    flags: 'bumpStat'
                },
                3: { 
                    name: '+2 Educ',
                    affects: 'Educ',
                    bonus: 2,
                    flags: 'bumpStat'
                },
                4:  {
                    name: 'Blade',
                    skillIndex: 'blades',
                    flags: 'addSkill',       
                },
                5:   {
                    name: 'Gun',
                    skillIndex: 'guns',
                    flags: 'addSkill',       
                },
                6: { 
                    name: 'Scout Ship',
                    flags: 'addBenefit'
                },
            } , 
            cashTable: {
                1: 20000,
                2: 20000,
                3: 30000,
                4: 30000,
                5: 50000,
                6: 50000,
                7: 50000
            },
 
            skills: {
                personal: {
                    1: { 
                        name: '+1 Strength',
                        affects: 'Stren',
                        bonus: 1,
                        flags: 'bumpStat'
                    },
                    2: { 
                        name: '+1 Dexterity',
                        affects: 'Dext',
                        bonus: 1,
                        flags: 'bumpStat'
                    },
                    3: { 
                        name: '+1 Endurance',
                        affects: 'Endur',
                        bonus: 1,
                        flags: 'bumpStat'
                    },
                    4: { 
                        name: '+1 Intelligence',
                        affects: 'Intel',
                        bonus: 1,
                        flags: 'bumpStat'
                    },
                    5: { 
                        name: '+1 Education',
                        affects: 'Educ',
                        bonus: 1,
                        flags: 'bumpStat'
                    },
                    6: {
                        name: 'Gun',
                        skillIndex: 'guns',
                        flags: 'addSkill',
             
                    },
                },
                service: {

                    1: { 
                        name: 'Vehicle',
                        skillIndex: 'vehicles',
                        flags: 'addSkill'
                    },
                    2: { 
                        name: 'Vacc Suit',
                        skillIndex: 'vaccsuit',
                        flags: 'addSkill'
                    },
                    3: { 
                        name: 'Mechanical',
                        skillIndex: 'mechanical',
                        flags: 'addSkill'
                    },
                    4: { 
                        name: 'Navigation',
                        skillIndex: 'navigation',
                        flags: 'addSkill'
                    },
                    5:  { 
                        name: 'Electronic',
                        skillIndex: 'electronic',
                        flags: 'addSkill'
                    },
                    6: { 
                        name: 'Jack-of-all-trades',
                        skillIndex: 'jot',
                        flags: 'addSkill'
                    },
                },
                advanced: {

                    1: { 
                        name: 'Vehicle',
                        skillIndex: 'vehicles',
                        flags: 'addSkill'
                    },
                    2: { 
                        name: 'Mechanical',
                        skillIndex: 'mechanical',
                        flags: 'addSkill'
                    },
                    3: { 
                        name: 'Electronic',
                        skillIndex: 'electronic',
                        flags: 'addSkill'
                    },
                    4: { 
                        name: 'Jack-of-all-trades',
                        skillIndex: 'jot',
                        flags: 'addSkill'
                    },
                    5: { 
                        name: 'Gunnery',
                        skillIndex: 'gunnery',
                        flags: 'addSkill'
                    },
                    6: { 
                        name: 'Medical',
                        skillIndex: 'medical',
                        flags: 'addSkill'
                    },

                },
                advanced2: {
                    requiredEdu: 8,

                    1: { 
                        name: 'Medical',
                        skillIndex: 'medical',
                        flags: 'addSkill'
                    },
                    2: { 
                        name: 'Navigation',
                        skillIndex: 'navigation',
                        flags: 'addSkill'
                    },
                    3: { 
                        name: 'Engineering',
                        skillIndex: 'engineering',
                        flags: 'addSkill'
                    },
                    4: { 
                        name: 'Computer',
                        skillIndex: 'computer',
                        flags: 'addSkill'
                    },
                    5: { 
                        name: 'Pilot',
                        skillIndex: 'pilot',
                        flags: 'addSkill'
                        },
                    6: { 
                        name: 'Jack-of-all-trades',
                        skillIndex: 'jot',
                        flags: 'addSkill'
                    },

                },
            },     
            },

            /*-------------------------------------------------------------------
                        Merchants (4)
            --------------------------------------------------------------------*/
            
            {
                    displayName: 'Merchant Service',
                    shortName: 'merchants',
                    congrats: "Congratulations, you're in the Merchant Service now!",
                    drafted: 'Come aboard, you were drafted by the Merchant Service',
                    serviceLog: 'Joined the Merchant Services',
                    draft: 5,
                    enlistment: {
                        roll: 7,
                        dm1: {
                            shortName: 'Stren',
                            value: 7,
                        },
                        dm2: {
                            shortName: 'Intel',
                            value: 6,
                        },
                    },
                    survival: {
                        roll: 5,
                        dm2: {
                            shortName: 'Intel',
                            value: 7,
                        },
                    },
                    commission: {
                        roll: 4,
                        dm1: {
                            shortName: 'Intel',
                            value: 6,
                        },
                    },
                    //3
                    promotion: {
                        roll: 10,
                        dm1: {
                            shortName: 'Intel',
                            value: 9,
                        },
                    },
                    reenlist: {
                        roll: 4
                    },  
                    
                    
                    ranks: {
                        1: '4th Officer',
                        2: '3rd Officer',
                        3: '2nd Officer',
                        4: '1st Officer',
                        5: 'Captain',
                        6: 'Captain'
                    }, 
                    serviceSkills: {
                        // note - the key/index here is the rank. Zero is enlisted
                        4:  {
                            name: 'Pilot',
                            skillIndex: 'pilot',
                            flags: 'addSkill',  
                
                        },  
                },   
                
                 
                    

            //further data
            //
            //
            //
            musterOut: {
                1: { 
                    name: 'Low Passage',
                    flags: 'addBenefit'
                },
                2: { 
                    name: '+1 Intel',
                    affects: 'Intel',
                    bonus: 1,
                    flags: 'bumpStat'
                },
                3: { 
                    name: '+1 Educ',
                    affects: 'Educ',
                    bonus: 1,
                    flags: 'bumpStat'
                },
                4:   {
                    name: 'Gun',
                    skillIndex: 'guns',
                    flags: 'addSkill',       
                },
                5:  {
                    name: 'Blade',
                    skillIndex: 'blades',
                    flags: 'addSkill',       
                },
                6: { 
                    name: 'Low Passage',
                    flags: 'addBenefit'
                },
                7: { 
                    name: 'Free Trader',
                    flags: 'addBenefit'
                },
            } , 
            cashTable: {
                1: 2000,
                2: 5000,
                3: 10000,
                4: 20000,
                5: 20000,
                6: 40000,
                7: 40000
            },
 
            skills: {
                personal: {
                    1: { 
                        name: '+1 Strength',
                        affects: 'Stren',
                        bonus: 1,
                        flags: 'bumpStat'
                    },
                    2: { 
                        name: '+1 Dexterity',
                        affects: 'Dext',
                        bonus: 1,
                        flags: 'bumpStat'
                    },
                    3: { 
                        name: '+1 Endurance',
                        affects: 'Endur',
                        bonus: 1,
                        flags: 'bumpStat'
                    },
                    4: { 
                        name: '+1 Strength',
                        affects: 'Stren',
                        bonus: 1,
                        flags: 'bumpStat'
                    },
                    5: {
                        name: 'Blades',
                        skillIndex: 'blades',
                        flags: 'addSkill',
            
                    },
                    6: {
                        name: 'Bribery',
                        skillIndex: 'bribery',
                        flags: 'addSkill',
             
                    },
                },
                service: {

                    1: { 
                        name: 'Vehicle',
                        skillIndex: 'vehicles',
                        flags: 'addSkill'
                    },
                    2: { 
                        name: 'Vacc Suit',
                        skillIndex: 'vaccsuit',
                        flags: 'addSkill'
                    },
                    3: { 
                        name: 'Jack-of-all-trades',
                        skillIndex: 'jot',
                        flags: 'addSkill'
                    },
                    4: { 
                        name: 'Steward',
                        skillIndex: 'steward',
                        flags: 'addSkill'
                    },
                    5:  { 
                        name: 'Electronic',
                        skillIndex: 'electronic',
                        flags: 'addSkill'
                    },
                    6: {
                        name: 'Gun',
                        skillIndex: 'guns',
                        flags: 'addSkill',           
                    },
                },
                advanced: {

                    1: { 
                        name: 'Streetwise',
                        skillIndex: 'streetwise',
                        flags: 'addSkill'
                    },
                    2: { 
                        name: 'Mechanical',
                        skillIndex: 'mechanical',
                        flags: 'addSkill'
                    },
                    3: { 
                        name: 'Electronic',
                        skillIndex: 'electronic',
                        flags: 'addSkill'
                    },
                    4: { 
                        name: 'Navigation',
                        skillIndex: 'navigation',
                        flags: 'addSkill'
                    },
                    5: { 
                        name: 'Gunnery',
                        skillIndex: 'gunnery',
                        flags: 'addSkill'
                    },
                    6: { 
                        name: 'Medical',
                        skillIndex: 'medical',
                        flags: 'addSkill'
                    },

                },
                advanced2: {
                    requiredEdu: 8,

                    1: { 
                        name: 'Medical',
                        skillIndex: 'medical',
                        flags: 'addSkill'
                    },
                    2: { 
                        name: 'Navigation',
                        skillIndex: 'navigation',
                        flags: 'addSkill'
                    },
                    3: { 
                        name: 'Engineering',
                        skillIndex: 'engineering',
                        flags: 'addSkill'
                    },
                    4: { 
                        name: 'Computer',
                        skillIndex: 'computer',
                        flags: 'addSkill'
                    },
                    5: { 
                        name: 'Pilot',
                        skillIndex: 'pilot',
                        flags: 'addSkill'
                        },
                    6: { 
                        name: 'Administration',
                        skillIndex: 'administration',
                        flags: 'addSkill'
                    },

                },
            },       
            },
           

            /*-------------------------------------------------------------------
                        Other (5)
            -------------------------- ------------------------------------------*/
            
            {
                displayName: 'Other',
                shortName: 'other',
                congrats: "You've found another career!",
                drafted: 'You have accepted another job',
                serviceLog: 'Found other employment',
                draft: 6,
                enlistment: {
                    roll: 3,
                    dm1: {
                        shortName: '',
                        value: null,
                    },
                    dm2: {
                        shortName: '',
                        value: null,
                    },
                },
                survival: {
                    roll: 5,
                    dm2: {
                        shortName: 'Intel',
                        value: 9,
                    },
                },
                commission: {
                    roll: null,
                    dm1: {
                        shortName: '',
                        value: null,
                    },
                },
                //3
                promotion: {
                    roll: null,
                    dm1: {
                        shortName: '',
                        value: null,
                    },
                },
                reenlist: {
                    roll: 5
                },            
                    
                ranks: {
                    1: 'none',
                    2: 'none',
                    3: 'none',
                    4: 'none',
                    5: 'none',
                    6: 'none'
                },  

                serviceSkills: {
                    // note - the key/index here is the rank. Zero is enlisted
                    // 4:  {
                    //     name: 'Pilot',
                    //     cascading: false,
                    //     skillIndex: 62,
                    //     flags: 'addSkill',  
            
                    // },  
            },   
                    

            //further data
            //
            //
            //
            musterOut: {
                1: { 
                    name: 'Low Passage',
                    flags: 'addBenefit'
                },
                2: { 
                    name: '+1 Intel',
                    affects: 'Intel',
                    bonus: 1,
                    flags: 'bumpStat'
                },
                3: { 
                    name: '+1 Educ',
                    affects: 'Educ',
                    bonus: 1,
                    flags: 'bumpStat'
                },
                4:   {
                    name: 'Gun',
                    skillIndex: 'guns',
                    flags: 'addSkill',       
                },
                5:  { 
                    name: 'High Passage',
                    flags: 'addBenefit'
                },
                6: { 
                    name: 'None',
                    flags: 'addBenefit'
                },
            } , 
            cashTable: {
                1: 1000,
                2: 5000,
                3: 10000,
                4: 10000,
                5: 10000,
                6: 50000,
                7: 100000
            },
 
            skills: {
                personal: {
                    1: { 
                        name: '+1 Strength',
                        affects: 'Stren',
                        bonus: 1,
                        flags: 'bumpStat'
                    },
                    2: { 
                        name: '+1 Dexterity',
                        affects: 'Dext',
                        bonus: 1,
                        flags: 'bumpStat'
                    },
                    3: { 
                        name: '+1 Endurance',
                        affects: 'Endur',
                        bonus: 1,
                        flags: 'bumpStat'
                    },
                    4: {
                        name: 'Blades',
                        skillIndex: 'blades',
                        flags: 'addSkill',
            
                    },
                    5: {
                        name: 'Brawling',
                        skillIndex: 'brawling',
                        flags: 'addSkill',
            
                    },
                    6: { 
                        name: '-1 Social',
                        affects: 'Soc',
                        bonus: -1,
                        flags: 'bumpStat'
                    },
                },
                service: {

                    1: { 
                        name: 'Vehicle',
                        skillIndex: 'vehicles',
                        flags: 'addSkill'
                    },
                    2: { 
                        name: 'Gambling',
                        skillIndex: 'gambling',
                        flags: 'addSkill'
                    },
                    3: {
                        name: 'Brawling',
                        skillIndex: 'brawling',
                        flags: 'addSkill',
            
                    },
                    4: {
                        name: 'Bribery',
                        skillIndex: 'bribery',
                        flags: 'addSkill',
             
                    },
                    5:  {
                        name: 'Blade',
                        skillIndex: 'blades',
                        flags: 'addSkill',
            
                    },
                    6: {
                        name: 'Gun',
                        skillIndex: 'guns',
                        flags: 'addSkill',           
                    },
                },
                advanced: {

                    1: { 
                        name: 'Streetwise',
                        skillIndex: 'streetwise',
                        flags: 'addSkill'
                    },
                    2: { 
                        name: 'Mechanical',
                        skillIndex: 'mechanical',
                        flags: 'addSkill'
                    },
                    3: { 
                        name: 'Electronic',
                        skillIndex: 'electronic',
                        flags: 'addSkill'
                    },
                    4: { 
                        name: 'Gambling',
                        skillIndex: 'gambling',
                        flags: 'addSkill'
                    },
                    5: {
                        name: 'Brawling',
                        skillIndex: 'brawling',
                        flags: 'addSkill',
            
                    },
                    6: { 
                        name: 'Forgery',
                        skillIndex: 'forgery',
                        flags: 'addSkill'
                    },

                },
                advanced2: {
                    requiredEdu: 8,

                    1: { 
                        name: 'Medical',
                        skillIndex: 'medical',
                        flags: 'addSkill'
                    },
                    2: { 
                        name: 'Forgery',
                        skillIndex: 'forgery',
                        flags: 'addSkill'
                    },
                    3: { 
                        name: 'Electronic',
                        skillIndex: 'electronic',
                        flags: 'addSkill'
                    },
                    4: { 
                        name: 'Computer',
                        skillIndex: 'computer',
                        flags: 'addSkill'
                    },
                    5: { 
                        name: 'Streetwise',
                        skillIndex: 'streetwise',
                        flags: 'addSkill'
                    },
                    6: { 
                        name: 'Jack-of-all-trades',
                        skillIndex: 'jot',
                        flags: 'addSkill'
                    },

                },
            },    
            }, 
               

       
         

       


    ],





/*-------------------------------------------------------------------
            Skill Elegibility table
--------------------------------------------------------------------*/

    elegibilitySkills: {
        firstTerm: 2,
        perTermBase: 1,
        scoutPerTerm: 2,
        commissionPromotion: 1,
        },


/*-------------------------------------------------------------------
            Muster benefits elegibility
--------------------------------------------------------------------*/        
    elegibilityMuster: {
        perTerm: 1,
        rank: {
            1: 1,
            2: 1,
            3: 2,
            4: 2,
            5: 3,
            6: 3
        }
    },



/*-------------------------------------------------------------------
            Retirement Pay
--------------------------------------------------------------------*/    

    retirementPay: {
        minterms: 5,
        base: 4000,
        perAddTerm: 2000,
        5: 4000,
        6: 6000,
        7: 8000,
        8: 10000,
        9: 12000,
        10: 14000,
        11: 16000,
        12: 18000,
        13: 20000,

    },


/*-------------------------------------------------------------------
            Aging Tables
--------------------------------------------------------------------*/


    aging: {
        agingThreshold: 4,
        agingIntThreshold: 12,
        4: {
            age: 34,
            str: {
                affects: 'Stren',
                roll: 8,
                effect: -1,
            },
            dex: {
                affects: 'Dext',
                roll: 7,
                effect: -1,
            },
            end: {
                affects: 'Endur',
                roll: 8,
                effect: -1,
            },
            
        },
        5: {
            age: 38,
            str: {
                affects: 'Stren',
                roll: 8,
                effect: -1,
            },
            dex: {
                affects: 'Dext',
                roll: 7,
                effect: -1,
            },
            end: {
                affects: 'Endur',
                roll: 8,
                effect: -1,
            },
            
        },
        6: {
            age: 42,
            str: {
                affects: 'Stren',
                roll: 8,
                effect: -1,
            },
            dex: {
                affects: 'Dext',
                roll: 7,
                effect: -1,
            },
            end: {
                affects: 'Endur',
                roll: 8,
                effect: -1,
            },
            
        },
        7: {
            age: 46,
            str: {
                affects: 'Stren',
                roll: 8,
                effect: -1,
            },
            dex: {
                affects: 'Dext',
                roll: 7,
                effect: -1,
            },
            end: {
                affects: 'Endur',
                roll: 8,
                effect: -1,
            },
            
        },
        8: {
            age: 50,
            str: {
                affects: 'Stren',
                roll: 9,
                effect: -1,
            },
            dex: {
                affects: 'Dext',
                roll: 8,
                effect: -1,
            },
            end: {
                affects: 'Endur',
                roll: 9,
                effect: -1,
            },
            
        },
        9: {
            age: 54,
            str: {
                affects: 'Stren',
                roll: 9,
                effect: -1,
            },
            dex: {
                affects: 'Dext',
                roll: 8,
                effect: -1,
            },
            end: {
                affects: 'Endur',
                roll: 9,
                effect: -1,
            },
            
        },
        10: {
            age: 58,
            str: {
                affects: 'Stren',
                roll: 9,
                effect: -1,
            },
            dex: {
                affects: 'Dext',
                roll: 8,
                effect: -1,
            },
            end: {
                affects: 'Endur',
                roll: 9,
                effect: -1,
            },
            
        },
        11: {
            age: 62,
            str: {
                affects: 'Stren',
                roll: 9,
                effect: -1,
            },
            dex: {
                affects: 'Dext',
                roll: 8,
                effect: -1,
            },
            end: {
                affects: 'Endur',
                roll: 9,
                effect: -1,
            },
            
        },       
        12: {
            age: 66,
            str: {
                affects: 'Stren',
                roll: 9,
                effect: -2,
            },
            dex: {
                affects: 'Dext',
                roll: 9,
                effect: -2,
            },
            end: {
                affects: 'Endur',
                roll: 9,
                effect: -2,
            },
            int: {
                affects: 'Intel',
                roll: 9,
                effect: -1,
            },
            
        },      
        13: {
            age: 70,
            str: {
                affects: 'Stren',
                roll: 9,
                effect: -2,
            },
            dex: {
                affects: 'Dext',
                roll: 9,
                effect: -2,
            },
            end: {
                affects: 'Endur',
                roll: 9,
                effect: -2,
            },
            int: {
                affects: 'Intel',
                roll: 9,
                effect: -1,
            },
            
        },      
        14: {
            age: 74,
            str: {
                affects: 'Stren',
                roll: 9,
                effect: -2,
            },
            dex: {
                affects: 'Dext',
                roll: 9,
                effect: -2,
            },
            end: {
                affects: 'Endur',
                roll: 9,
                effect: -2,
            },
            int: {
                affects: 'Intel',
                roll: 9,
                effect: -1,
            },
            
        },
    },




/*-------------------------------------------------------------------
            skill index

--------------------------------------------------------------------*/




skillIndex: {


// -------------------------------------------------------------------

//             SKILLS - no cascades

// --------------------------------------------------------------------

bribery: {
    name: "Bribery",
    cascadeParent: false,
    cascadeGroup: false,
    cascadeSpecific: false,
}, 
streetwise: {
    name: "Streetwise",
    cascadeParent: false,
    cascadeGroup: false,
    cascadeSpecific: false,
}, 
steward: {
    name: "Steward",
    cascadeParent: false,
    cascadeGroup: false,
    cascadeSpecific: false,
}, 
shipsboat: {
    name: "Ship's Boat",
    cascadeParent: false,
    cascadeGroup: false,
    cascadeSpecific: false,
},    
vaccsuit:{
    name: 'Vacc Suit',
    cascadeParent: false,
    cascadeGroup: false,
    cascadeSpecific: false,
},
forwardobs:{
    name: 'Forward Observer',
    cascadeParent: false,
    cascadeGroup: false,
    cascadeSpecific: false,
},
forgery:{
    name: 'Forgery',
    cascadeParent: false,
    cascadeGroup: false,
    cascadeSpecific: false,
},
gambling:{
    name: 'Gambling',
    cascadeParent: false,
    cascadeGroup: false,
    cascadeSpecific: false,
},
gunnery:{
    name: 'Gunnery',
    cascadeParent: false,
    cascadeGroup: false,
    cascadeSpecific: false,
},
mechanical:{
    name: 'Mechanical',
    cascadeParent: false,
    cascadeGroup: false,
    cascadeSpecific: false,
},
electronic:{
    name: 'Electronics',
    cascadeParent: false,
    cascadeGroup: false,
    cascadeSpecific: false,
},
engineering:{
    name: 'Engineering',
    cascadeParent: false,
    cascadeGroup: false,
    cascadeSpecific: false,
},
jot:{
    name: 'Jack-of-all-trades',
    cascadeParent: false,
    cascadeGroup: false,
    cascadeSpecific: false,
},
leader:{
    name: 'Leader',
    cascadeParent: false,
    cascadeGroup: false,
    cascadeSpecific: false,
},
medical:{
    name: 'Medical',
    cascadeParent: false,
    cascadeGroup: false,
    cascadeSpecific: false,
},
navigation:{
    name: 'Navigation',
    cascadeParent: false,
    cascadeGroup: false,
    cascadeSpecific: false,
},
computer:{
    name: 'Computer',
    cascadeParent: false,
    cascadeGroup: false,
    cascadeSpecific: false,
},
pilot:{
    name: 'Pilot',
    cascadeParent: false,
    cascadeGroup: false,
    cascadeSpecific: false,
},
tactics:{
    name: 'Tactics',
    cascadeParent: false,
    cascadeGroup: false,
    cascadeSpecific: false,
},
administration:{
    name: 'Administration',
    cascadeParent: false,
    cascadeGroup: false,
    cascadeSpecific: false,
},
brawling:{
    name: 'Brawling',
    cascadeParent: false,
    cascadeGroup: false,
    cascadeSpecific: false,
},



// -------------------------------------------------------------------
//             Cascading Skills - general types

// ---------------------------------------------------------------

blades: {
    name: 'Blades and Polearms',
    cascadeParent: false,
    cascadeGroup: false,
    cascadeSpecific: true,
    cascadeSID: ['dagger','blade','foil','sword','cutlass','broadsword','bayonet','spear','halberd','pike','cudgel'],
    cascadeGID: [],
},

guns:{
    name: 'Guns',
    cascadeParent: false,
    cascadeGroup: false,
    cascadeSpecific: true,
    cascadeSID: ['lasrifle','lascarbine','smg','shotgun','arifle','rifle','carbine','revolver','apistol','bpistol'],
    cascadeGID: [],
},


vehicles:{
    name: 'Vehicle',
    cascadeParent: false,
    cascadeGroup: true,
    cascadeSpecific: true,
    cascadeSID: ['propfw','jetfw','helicopter','largewater','smallwater','hovercraft','submersible','airraft','wheeledvehicle','trackedvehicle'],
    cascadeGID: ['aircraft','watercraft'],

},




// -------------------------------------------------------------------
//             Cascading Skills with subtypes

// ---------------------------------------------------------------



aircraft:{
    name: 'Aircraft',
    cascadeParent: true,
    parentGroup: 'vehicles',
    cascadeGroup: false,
    cascadeSpecific: true,
    cascadeSID: ['propfw','jetfw','helicopter'],

},
watercraft:{
    name: 'Watercraft',
    cascadeParent: true,
    parentGroup: 'vehicles',
    cascadeGroup: false,
    cascadeSpecific: true,
    cascadeSID: ['largewater','smallwater','hovercraft','submersible'],

},


// -------------------------------------------------------------------

//             Cascading Skills - Melee / Blade

// ---------------------------------------------------------------



        dagger: {
            name: 'Dagger',
            plusDM: 8,
            minusDM: 3,
            wounds: 2,
            cascadeParent: true,
            parentGroup: 'blades',
            cascadeGroup: false,
            cascadeSpecific: false,
        
        },  
        blade:{
            name: 'Blade',
            plusDM: 9,
            minusDM: 4,
            wounds: 2,
            cascadeParent: true,
            parentGroup: 'blades',
            cascadeGroup: false,
            cascadeSpecific: false,
        

        },
        foil:{
            name: 'Foil',
            plusDM: 10,
            minusDM: 4,
            wounds: 1,
            cascadeParent: true,
            parentGroup: 'blades',
            cascadeGroup: false,
            cascadeSpecific: false,
        

        },
        sword:{
            name: 'Sword',
            plusDM: 10,
            minusDM: 5,
            wounds: 2,
            cascadeParent: true,
            parentGroup: 'blades',
            cascadeGroup: false,
            cascadeSpecific: false,
        
        },

        cutlass:{
            name: 'Cutlass',
            plusDM: 11,
            minusDM: 6,
            wounds: 3,
            cascadeParent: true,
            parentGroup: 'blades',
            cascadeGroup: false,
            cascadeSpecific: false,
    
    },


       broadsword: {
        name: 'Broadsword',
        plusDM: 12,
        minusDM: 7,
        wounds: 4,
        cascadeParent: true,
        parentGroup: 'blades',
        cascadeGroup: false,
        cascadeSpecific: false,
    
    },

        bayonet:{
        name: 'Bayonet',
        plusDM: 9,
        minusDM: 4,
        wounds: 3,
        cascadeParent: true,
        parentGroup: 'blades',
        cascadeGroup: false,
        cascadeSpecific: false,
    
    },

        spear:{
        name: 'Spear',
        plusDM: 9,
        minusDM: 4,
        wounds: 2,
        cascadeParent: true,
        parentGroup: 'blades',
        cascadeGroup: false,
        cascadeSpecific: false,
    
    },


        halberd:{
            name: 'Halberd',
            plusDM: 10,
            minusDM: 5,
            wounds: 3,
            cascadeParent: true,
            parentGroup: 'blades',
            cascadeGroup: false,
            cascadeSpecific: false,
        
    },

        pike:{
                name: 'Pike',
                plusDM: 10,
                minusDM: 6,
                wounds: 3,
                cascadeParent: true,
                parentGroup: 'blades',
                cascadeGroup: false,
                cascadeSpecific: false,
            
            },


        cudgel:{
        name: 'Cudgel',
        plusDM: 8,
        minusDM: 4,
        wounds: 2,
        cascadeParent: true,
        parentGroup: 'blades',
        cascadeGroup: false,
        cascadeSpecific: false,
    
    },

//-------------------------------------------------------------------
//         Cascading Skills - firearms

// ---------------------------------------------------------------



        bpistol: {
            name: 'Body Pistol',
            plusDM: 11,
            minusDM: 7,
            wounds: 2,
            cascadeParent: true,
            parentGroup: 'guns',
            cascadeGroup: false,
            cascadeSpecific: false,
        
    },

        apistol:{
            name: 'Auto Pistol',
            plusDM: 10,
            minusDM: 6,
            wounds: 3,
            cascadeParent: true,
            parentGroup: 'guns',
            cascadeGroup: false,
            cascadeSpecific: false,
        
    },



        revolver:{
            name: 'Revolver',
            plusDM: 9,
            minusDM: 6,
            wounds: 3,
            cascadeParent: true,
            parentGroup: 'guns',
            cascadeGroup: false,
            cascadeSpecific: false,
        
    },




        carbine:{
            name: 'Carbine',
            plusDM: 9,
            minusDM: 4,
            wounds: 3,
            cascadeParent: true,
            parentGroup: 'guns',
            cascadeGroup: false,
            cascadeSpecific: false,
        
    },




        rifle:{
            name: 'Rifle',
            plusDM: 8,
            minusDM: 5,
            wounds: 3,
            cascadeParent: true,
            parentGroup: 'guns',
            cascadeGroup: false,
            cascadeSpecific: false,
        
    },





        arifle:{
            name: 'Auto Rifle',
            plusDM: 10,
            minusDM: 6,
            wounds: 3,
            cascadeParent: true,
            parentGroup: 'guns',
            cascadeGroup: false,
            cascadeSpecific: false,
        
    },




        shotgun:{
            name: 'Shotgun',
            plusDM: 9,
            minusDM: 3,
            wounds: 4,
            cascadeParent: true,
            parentGroup: 'guns',
            cascadeGroup: false,
            cascadeSpecific: false,
        
    },

        smg:{
            name: 'SMG',
            plusDM: 9,
            minusDM: 5,
            wounds: 3,
            cascadeParent: true,
            parentGroup: 'guns',
            cascadeGroup: false,
            cascadeSpecific: false,
        
    },

        lascarbine:{
            name: 'Laser Carbine',
            plusDM: 10,
            minusDM: 5,
            wounds: 5,
            cascadeParent: true,
            parentGroup: 'guns',
            cascadeGroup: false,
            cascadeSpecific: false,
        
    },
        lasrifle:{
            name: 'Laser Rifle',
            plusDM: 11,
            minusDM: 6,
            wounds: 5,
            cascadeParent: true,
            parentGroup: 'guns',
            cascadeGroup: false,
            cascadeSpecific: false,
        
    },






    // -------------------------------------------------------------------
    // Cascading Skills - specific vehicles
    // ---------------------------------------------------------------


    propfw:{
        name: 'Prop-driven Fixed Wing',
        cascadeParent: true,
        parentGroup: 'aircraft',
        cascadeGroup: false,
        cascadeSpecific: false,
    },

    jetfw:{
        name: 'Jet-driven Fixed Wing',
        cascadeParent: true,
        parentGroup: 'aircraft',
        cascadeGroup: false,
        cascadeSpecific: false,

    },
    helicopter:{
        name: 'Helicopter',
        cascadeParent: true,
        parentGroup: 'aircraft',
        cascadeGroup: false,
        cascadeSpecific: false,
    },
    largewater:{
        name: 'Large watercraft',
        cascadeParent: true,
        parentGroup: 'watercraft',
        cascadeGroup: false,
        cascadeSpecific: false,
    },
    smallwater:{
        name: 'Small watercraft',
        cascadeParent: true,
        parentGroup: 'watercraft',
        cascadeGroup: false,
        cascadeSpecific: false,
    },
    hovercraft:{
        name: 'Hovercraft',
        cascadeParent: true,
        parentGroup: 'watercraft',
        cascadeGroup: false,
        cascadeSpecific: false,
    },
    submersible:{
        name: 'Submersible',
        cascadeParent: true,
        parentGroup: 'watercraft',
        cascadeGroup: false,
        cascadeSpecific: false,
    },

    airraft:{
        name: 'Grav Vehicle (Air/Raft)',
        cascadeParent: true,
        parentGroup: 'vehicles',
        cascadeGroup: false,
        cascadeSpecific: false,
    },
    wheeledvehicle:{
        name: 'Wheeled vehicle',
        cascadeParent: true,
        parentGroup: 'vehicles',
        cascadeGroup: false,
        cascadeSpecific: false,
    },
    trackedvehicle:{
        name: 'Tracked vehicle',
        cascadeParent: true,
        parentGroup: 'vehicles',
        cascadeGroup: false,
        cascadeSpecific: false,
    },





}


//ranklookup
//enlist roll
//draft roll
//survival roll
// commission roll
// promotion roll
// reenlist roll

// muster out rolls
// Characters with rank 5 or 6 may add +Ito their rolls on this table. Gun and
// blade benefits must be declared by type immediately; additional benefits of gun or
// blade may be declared as skill in a weapon of the type previously taken.

// Amounts shown are in credits (Cr). No more than three rolls may be made on
// this table. Individuals with gambling skill receive a DM of +Io n the cash table


    // /*
    
    // Built in methods / functions
    
    // */
    // generateUPP() {


    //     return upp;
    // },

}

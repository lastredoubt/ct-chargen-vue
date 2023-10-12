export const cttbCharGenTables = {

/*-------------------------------------------------------------------
Flag Key
    - addBenefit
    - bumpStat
    - addSkill
    - addCasSkill


--------------------------------------------------------------------*/

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


    Skills:  Straight Specific Skill
                { 
                        name: 'Vacc Suit',      // Name of skill for table
                        skillIndex: 52,         // skill reference to allow stacking
                        flags: 'addSkill'       // add flag to set
                },

    Cascade and Subtype Skills
            GEENRAL type - weapon example - cascading true means subtyoes
                            -- cascade type used for grouping / searches
                {
                    name: 'Blade',
                    skillIndex: 1001,
                    cascading: true,
                    cascadeType: 'blade',
                    flags: 'addCasSkill'        //because there is further selection to be done

                },
            
            Specific Weapon/cascade item:   -- cascade type used for grouping / searches

                {
                    name: 'Dagger',
                    plusDM: 8,                  // this info is for the beenfit of choosing
                    minusDM: 3,
                    wounds: 2,                  //wounds in d6
                    skillIndex: 1,
                    cascadeType: 'blade',
                    flags: 'addSkill'       // because it is a specific one with no further cascades

                },  



            General vehicle class of cascade

                {
                    name: 'Tracked vehicle',
                    hasSubtype: false,          //no more specific subtypes
                    skillIndex: 31,
                    cascadeType: 'vehicle',     //for search grouping
                    flags: 'addSkill'       // because it is a specific one with no further cascades
                },



            General vehicle class with subtypes

                {
                    name: 'Aircraft',
                    hasSubtype: true,
                    relatedType: 'aircraft'
                    skillIndex: 1004,
                    cascadeType: 'vehicle',
                    flags: 'addCasSkill'        //because there is further selection to be done

                },


            Specific vehicle subtype

                {
                    name: 'Submersible',
                    hasSubtype: false,          //no further subtypes
                    relatedType: 'watercraft'
                    skillIndex: 28,
                    cascadeType: 'vehicle',
                    flags: 'addSkill'       // because it is a specific one with no further cascades

                },



    Cascade Skill: 
                { 
                    name: 'Blade',
                    reference: 'blade',         // matches the reference in skillIndex:[]
                                                //also used to find the further cascades
                    flags: 'addCasSkill'
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
            Navy
--------------------------------------------------------------------*/
        {
            displayName: 'Navy',
            shortName: 'navy',
            congrats: 'Congratulations, sailor. You joined the Navy!',
            drafted: 'Congratulations, sailor. You were drafted by the Navy',
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
                    skillIndex: 1001,
                    cascading: true,
                    cascadeType: 'blade',
        
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
                        skillIndex: 51,
                        flags: 'addSkill'
                    },
                    2: { 
                        name: 'Vacc Suit',
                        skillIndex: 52,
                        flags: 'addSkill'
                    },
                    3: { 
                        name: 'Forward Observer',
                        skillIndex: 53,
                        flags: 'addSkill'
                    },
                    4: { 
                        name: 'Gunnery',
                        skillIndex: 54,
                        flags: 'addSkill'
                    },
                    5:  {
                        name: 'Blade',
                        skillIndex: 1001,
                        cascading: true,
                        cascadeType: 'blade',
            
                    },
                    6: {
                        name: 'Gun',
                        skillIndex: 1002,
                        cascading: true,
                        cascadeType: 'gun',
            
                    },
                },
                advanced: {

                    1: { 
                        name: 'Vacc Suit',
                        skillIndex: 52,
                        flags: 'addSkill'
                    },
                    2: { 
                        name: 'Mechanical',
                        skillIndex: 55,
                        flags: 'addSkill'
                    },
                    3: { 
                        name: 'Electronic',
                        skillIndex: 56,
                        flags: 'addSkill'
                    },
                    4: { 
                        name: 'Engineering',
                        skillIndex: 57,
                        flags: 'addSkill'
                    },
                    5: { 
                        name: 'Gunnery',
                        skillIndex: 54,
                        flags: 'addSkill'
                        },
                    6: { 
                        name: 'Jack-of-all-trades',
                        skillIndex: 58,
                        flags: 'addSkill'
                    },

                },
                advanced2: {
                    requiredEdu: 8,

                    1: { 
                        name: 'Medical',
                        skillIndex: 59,
                        flags: 'addSkill'
                    },
                    2: { 
                        name: 'Navigation',
                        skillIndex: 60,
                        flags: 'addSkill'
                    },
                    3: { 
                        name: 'Engineering',
                        skillIndex: 57,
                        flags: 'addSkill'
                    },
                    4: { 
                        name: 'Computer',
                        skillIndex: 61,
                        flags: 'addSkill'
                    },
                    5: { 
                        name: 'Pilot',
                        skillIndex: 62,
                        flags: 'addSkill'
                        },
                    6: { 
                        name: 'Administration',
                        skillIndex: 63,
                        flags: 'addSkill'
                    },

                },
            },

        },

/*-------------------------------------------------------------------
            Marines
--------------------------------------------------------------------*/

    /// MARINES
        {
            displayName: 'Marines',
            shortName: 'marines',
            congrats: 'Congratulations, soldier. You joined the Marines!',
            drafted: 'Congratulations, soldier. You were drafted by the Marines',
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
                    skillIndex: 5,
                    cascadeType: 'blade',
                    flags: 'addSkill'  
                    },
                1:
                {
                    name: 'Revolver',
                    skillIndex: 14,
                    cascadeType: 'gun',
                    flags: 'addSkill'  
                },
            },  
        },

        /*-------------------------------------------------------------------
                    The Army
        --------------------------------------------------------------------*/
        
                {
                    displayName: 'Army',
                    shortName: 'army',
                    congrats: "Congratulations, soldier. You're in the Army now!",
                    drafted: 'Congratulations, soldier. You were drafted by the Army',
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
                            skillIndex: 16,
                            cascadeType: 'gun',
                            flags: 'addSkill'  
                        },
                        1: {
                            name: 'SMG',
                            skillIndex: 19,
                            cascadeType: 'gun',
                            flags: 'addSkill'  
                        },
                    },     
                },
        
          

        /*-------------------------------------------------------------------
                    Scout Service
        --------------------------------------------------------------------*/
        
            {
                displayName: 'Scouts',
                shortName: 'scouts',
                congrats: "Congratulations, you're in the Scout Service now!",
                drafted: 'Pack your bags, you were drafted by the Scout Service',
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
                        cascading: false,
                        skillIndex: 62,
                        flags: 'addSkill' 
                        
            
                    },
                },      
            },

            /*-------------------------------------------------------------------
                        Merchants
            --------------------------------------------------------------------*/
            
            {
                    displayName: 'Merchant Service',
                    shortName: 'merchants',
                    congrats: "Congratulations, you're in the Merchant Service now!",
                    drafted: 'Come aboard, you were drafted by the Merchant Service',
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
                            cascading: false,
                            skillIndex: 62,
                            flags: 'addSkill',  
                
                        },  
                },     
            },
           

            /*-------------------------------------------------------------------
                        Other
            --------------------------------------------------------------------*/
            
            {
                displayName: 'Other',
                shortName: 'other',
                congrats: "You've found another career!",
                drafted: 'You have accepted another job',
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
        perAddTerm: 6000,
    },


/*-------------------------------------------------------------------
            Aging Tables
--------------------------------------------------------------------*/


    aging: {
        4: {
            age: 34,
            str: {
                affects: 'Stren',
                roll: 8,
                effect: 1,
            },
            dex: {
                affects: 'Dext',
                roll: 7,
                effect: 1,
            },
            end: {
                affects: 'Endur',
                roll: 8,
                effect: 1,
            },
            
        },
        5: {
            age: 38,
            str: {
                affects: 'Stren',
                roll: 8,
                effect: 1,
            },
            dex: {
                affects: 'Dext',
                roll: 7,
                effect: 1,
            },
            end: {
                affects: 'Endur',
                roll: 8,
                effect: 1,
            },
            
        },
        6: {
            age: 42,
            str: {
                affects: 'Stren',
                roll: 8,
                effect: 1,
            },
            dex: {
                affects: 'Dext',
                roll: 7,
                effect: 1,
            },
            end: {
                affects: 'Endur',
                roll: 8,
                effect: 1,
            },
            
        },
        7: {
            age: 46,
            str: {
                affects: 'Stren',
                roll: 8,
                effect: 1,
            },
            dex: {
                affects: 'Dext',
                roll: 7,
                effect: 1,
            },
            end: {
                affects: 'Endur',
                roll: 8,
                effect: 1,
            },
            
        },
        8: {
            age: 50,
            str: {
                affects: 'Stren',
                roll: 9,
                effect: 1,
            },
            dex: {
                affects: 'Dext',
                roll: 8,
                effect: 1,
            },
            end: {
                affects: 'Endur',
                roll: 9,
                effect: 1,
            },
            
        },
        9: {
            age: 54,
            str: {
                affects: 'Stren',
                roll: 9,
                effect: 1,
            },
            dex: {
                affects: 'Dext',
                roll: 8,
                effect: 1,
            },
            end: {
                affects: 'Endur',
                roll: 9,
                effect: 1,
            },
            
        },
        10: {
            age: 58,
            str: {
                affects: 'Stren',
                roll: 9,
                effect: 1,
            },
            dex: {
                affects: 'Dext',
                roll: 8,
                effect: 1,
            },
            end: {
                affects: 'Endur',
                roll: 9,
                effect: 1,
            },
            
        },
        11: {
            age: 62,
            str: {
                affects: 'Stren',
                roll: 9,
                effect: 1,
            },
            dex: {
                affects: 'Dext',
                roll: 8,
                effect: 1,
            },
            end: {
                affects: 'Endur',
                roll: 9,
                effect: 1,
            },
            
        },       
        12: {
            age: 66,
            str: {
                affects: 'Stren',
                roll: 9,
                effect: 2,
            },
            dex: {
                affects: 'Dext',
                roll: 9,
                effect: 2,
            },
            end: {
                affects: 'Endur',
                roll: 9,
                effect: 2,
            },
            int: {
                affects: 'Intel',
                roll: 9,
                effect: 1,
            },
            
        },      
        13: {
            age: 70,
            str: {
                affects: 'Stren',
                roll: 9,
                effect: 2,
            },
            dex: {
                affects: 'Dext',
                roll: 9,
                effect: 2,
            },
            end: {
                affects: 'Endur',
                roll: 9,
                effect: 2,
            },
            int: {
                affects: 'Intel',
                roll: 9,
                effect: 1,
            },
            
        },      
        14: {
            age: 74,
            str: {
                affects: 'Stren',
                roll: 9,
                effect: 2,
            },
            dex: {
                affects: 'Dext',
                roll: 9,
                effect: 2,
            },
            end: {
                affects: 'Endur',
                roll: 9,
                effect: 2,
            },
            int: {
                affects: 'Intel',
                roll: 9,
                effect: 1,
            },
            
        },
    },




/*-------------------------------------------------------------------
            skill index

--------------------------------------------------------------------*/


    cascadeTypes: [
        "blade",
        'gun',
        'vehicle',
    ],

    skillIndex: [

/*-------------------------------------------------------------------
            Cascading Skills - general types

--------------------------------------------------------------------*/

        {
            name: 'Blade',
            skillIndex: 1001,
            cascading: true,
            cascadeType: 'blade',

        },

        {
            name: 'Gun',
            skillIndex: 1002,
            cascading: true,
            cascadeType: 'gun',

        },



        {
            name: 'Vehicle',
            cascading: true,
            skillIndex: 1003,
            cascadeType: 'vehicle',

        },


/*-------------------------------------------------------------------
            Cascading Skills with subtypes

--------------------------------------------------------------------*/



        {
            name: 'Aircraft',
            hasSubtype: true,
            relatedType: 'aircraft',
            skillIndex: 1004,
            cascadeType: 'vehicle',

        },
        {
            name: 'Watercraft',
            hasSubtype: true,
            relatedType: 'watercraft',
            skillIndex: 1005,
            cascadeType: 'vehicle',

        },

/*-------------------------------------------------------------------
            Cascading Skills - Melee

--------------------------------------------------------------------*/



        {
            name: 'Dagger',
            plusDM: 8,
            minusDM: 3,
            wounds: 2,
            skillIndex: 1,
            cascadeType: 'blade',

        },  
        {
            name: 'Blade',
            plusDM: 9,
            minusDM: 4,
            wounds: 2,
            skillIndex: 2,
            cascadeType: 'blade',

        },
        {
            name: 'Foil',
            plusDM: 10,
            minusDM: 4,
            wounds: 1,
            skillIndex: 3,
            cascadeType: 'blade',

        },
        {
            name: 'Sword',
            plusDM: 10,
            minusDM: 5,
            wounds: 2,
            skillIndex: 4,
            cascadeType: 'blade',
        },

        {
        name: 'Cutlass',
        plusDM: 11,
        minusDM: 6,
        wounds: 3,
        skillIndex: 5,
        cascadeType: 'blade',
        },


        {
        name: 'Broadsword',
        plusDM: 12,
        minusDM: 7,
        wounds: 4,
        skillIndex: 6,

        cascadeType: 'blade',
        },

        {
        name: 'Bayonet',
        plusDM: 9,
        minusDM: 4,
        wounds: 3,
        skillIndex: 7,

        cascadeType: 'blade',
        },

        {
        name: 'Spear',
        plusDM: 9,
        minusDM: 4,
        wounds: 2,
        skillIndex: 8,

        cascadeType: 'blade',
        },


        {
        name: 'Halberd',
        plusDM: 10,
        minusDM: 5,
        wounds: 3,
        skillIndex: 9,

        cascadeType: 'blade',
        },

        {
        name: 'Pike',
        plusDM: 10,
        minusDM: 6,
        wounds: 3,
        skillIndex: 10,

        cascadeType: 'blade',
        },


        {
        name: 'Cudgel',
        plusDM: 8,
        minusDM: 4,
        wounds: 2,
        skillIndex: 11,

        cascadeType: 'blade',
        },

/*-------------------------------------------------------------------
            Cascading Skills - firearms

--------------------------------------------------------------------*/



        {
            name: 'Body Pistol',
            plusDM: 11,
            minusDM: 7,
            wounds: 2,
            skillIndex: 12,
            cascadeType: 'gun',
        },

        {
            name: 'Auto Pistol',
            plusDM: 10,
            minusDM: 6,
            wounds: 3,
            skillIndex: 13,
            cascadeType: 'gun',
        },



        {
            name: 'Revolver',
            plusDM: 9,
            minusDM: 6,
            wounds: 3,
            skillIndex: 14,
            cascadeType: 'gun',
        },




        {
            name: 'Carbine',
            plusDM: 9,
            minusDM: 4,
            wounds: 3,
            skillIndex: 15,
            cascadeType: 'gun',
        },




        {
            name: 'Rifle',
            plusDM: 8,
            minusDM: 5,
            wounds: 3,
            skillIndex: 16,
            cascadeType: 'gun',
        },





        {
            name: 'Auto Rifle',
            plusDM: 10,
            minusDM: 6,
            wounds: 3,
            skillIndex: 17,
            cascadeType: 'gun',
        },




        {
            name: 'Shotgun',
            plusDM: 9,
            minusDM: 3,
            wounds: 4,
            skillIndex: 18,
            cascadeType: 'gun',
        },






        {
            name: 'SMG',
            plusDM: 9,
            minusDM: 5,
            wounds: 3,
            skillIndex: 19,
            cascadeType: 'gun',
        },

        {
            name: 'Laser Carbine',
            plusDM: 10,
            minusDM: 5,
            wounds: 5,
            skillIndex: 20,
            cascadeType: 'gun',
        },
        {
            name: 'Laser Rifle',
            plusDM: 11,
            minusDM: 6,
            wounds: 5,
            skillIndex: 21,
            cascadeType: 'gun',
        },


/*-------------------------------------------------------------------
            Cascading Skills - specific vehicles

--------------------------------------------------------------------*/


        {
            name: 'Prop-driven Fixed Wing',
            hasSubtype: false,
            relatedType: 'aircraft',
            skillIndex: 22,
            cascadeType: 'vehicle',

        },
        {
            name: 'Jet-driven Fixed Wing',
            hasSubtype: false,
            relatedType: 'aircraft',
            skillIndex: 23,
            cascadeType: 'vehicle',

        },
        {
            name: 'Helicopter',
            hasSubtype: false,
            relatedType: 'aircraft',
            skillIndex: 24,
            cascadeType: 'vehicle',

        },
        {
            name: 'Large watercraft',
            hasSubtype: false,
            relatedType: 'watercraft',
            skillIndex: 25,
            cascadeType: 'vehicle',

        },
        {
            name: 'Small watercraft',
            hasSubtype: false,
            relatedType: 'watercraft',
            skillIndex: 26,
            cascadeType: 'vehicle',

        },
        {
            name: 'Hovercraft',
            hasSubtype: false,
            relatedType: 'watercraft',
            skillIndex: 27,
            cascadeType: 'vehicle',

        },
        {
            name: 'Submersible',
            hasSubtype: false,
            relatedType: 'watercraft',
            skillIndex: 28,
            cascadeType: 'vehicle',

        },

  

        {
            name: 'Grav Vehicle (Air/Raft)',
            hasSubtype: false,
            skillIndex: 29,
            cascadeType: 'vehicle',

        },
        {
            name: 'Wheeled vehicle',
            hasSubtype: false,
            skillIndex: 30,
            cascadeType: 'vehicle',

        },
        {
            name: 'Tracked vehicle',
            hasSubtype: false,
            skillIndex: 31,
            cascadeType: 'vehicle',

        },

     

/*-------------------------------------------------------------------
-------------------------------------------------------------------

            SKILLS

--------------------------------------------------------------------
--------------------------------------------------------------------*/




        {
            name: "Ship's Boat",
            cascading: false,
            skillIndex: 51,

        },
        {
            name: 'Vacc Suit',
            cascading: false,
            skillIndex: 52,

        },
        {
            name: 'Forward Observer',
            cascading: false,
            skillIndex: 53,

        },
        {
            name: 'Gunnery',
            cascading: false,
            skillIndex: 54,

        },
        {
            name: 'Mechanical',
            cascading: false,
            skillIndex: 55,

        },
        {
            name: 'Electronic',
            cascading: false,
            skillIndex: 56,

        },
        {
            name: 'Engineering',
            cascading: false,
            skillIndex: 57,

        },
        {
            name: 'Jack-of-all-trades',
            cascading: false,
            skillIndex: 58,

        },
        {
            name: 'Medical',
            cascading: false,
            skillIndex: 59,

        },
        {
            name: 'Navigation',
            cascading: false,
            skillIndex: 60,

        },
        {
            name: 'Computer',
            cascading: false,
            skillIndex: 61,

        },
        {
            name: 'Pilot',
            cascading: false,
            skillIndex: 62,

        },
        {
            name: 'Administration',
            cascading: false,
            skillIndex: 63,

        },
    ],
    

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

    //     let upp = this.characteristics.strength.pHexValue + this.characteristics.dexterity.pHexValue + this.characteristics.endurance.pHexValue + this.characteristics.intelligence.pHexValue + this.characteristics.education.pHexValue + this.characteristics.social.pHexValue;

    //     return upp;
    // },




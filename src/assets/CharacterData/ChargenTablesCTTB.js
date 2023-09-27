export const cttbCharGenTables = {

/*-------------------------------------------------------------------
Flag Key
    - addBenefit
    - bumpStat
    - addSkill



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


    Straight Skill: 
                { 
                        name: 'Vacc Suit',      // Name of skill for table
                        skillIndex: 52,         // skill reference to allow stacking
                        flags: 'addSkill'       // add flag to set
                },

    Cascade Skill: 
                { 
                    name: 'Blade',
                    reference: 'blade',         // matches the reference in skillIndex:[]
                                                //also used to find the further cascades
                    flags: 'addSkill'
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





    The skill results for a roll of ―1‖ for Marines, Army and 
    Scouts should be ―Vehicle‖, rather than ―ATV‖ (Marines/Army) 
    or ―Air/Raft‖ (Scouts).
--------------------------------------------------------------------*/

    services: {
/*-------------------------------------------------------------------
            Navy
--------------------------------------------------------------------*/
        navy: {
            shortName: 'navy',
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









            //further data
            //
            //
            //
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
            ranks: {
                1: 'Ensign',
                2: 'Lieutenant',
                3: 'Lt Commander',
                4: 'Commander',
                5: 'Captain',
                6: 'Admiral'
            }, 
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
                4: { 
                    name: 'Blade',
                    reference: 'blade',
                    flags: 'addSkill'
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
                    5: { 
                        name: 'Blade Combat',
                        reference: 'blade',
                        flags: 'addSkill'
                        },
                    6: { 
                        name: 'Gun Combat',
                        reference: 'guns',
                        flags: 'addSkill'
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
        Marines:  {
            shortName: 'marines',
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
        },

       


    },




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


    skillIndex: [
        // start at 51 for non-cascading
        //cascading skills indexed further down starting from 1
        {
            name: 'Blade',
            reference: 'blade',
            cascading: true,

        },
        {
            name: 'Guns',
            reference: 'guns',
            cascading: true,

        },
        {
            name: 'vehicle',
            cascading: true,

        },
        {
            name: 'Ship\s Boat',
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
    

/*-------------------------------------------------------------------
            Cascading Skills

--------------------------------------------------------------------*/

    cascade: {
        blades: {
            cascadeType: 'blade',
            //wounds for weapons are in d6
            dagger: {
                name: 'Dagger',
                plusDM: 8,
                minusDM: 3,
                wounds: 2,
                skillIndex: 1,
            },
            blade:  {
                name: 'Blade',
                plusDM: 9,
                minusDM: 4,
                wounds: 2,
                skillIndex: 2,
            },
            foil:  {
                name: 'Foil',
                plusDM: 10,
                minusDM: 4,
                wounds: 1,
                skillIndex: 3,
            },
            sword:  {
                name: 'Sword',
                plusDM: 10,
                minusDM: 5,
                wounds: 2,
                skillIndex: 4,
            },
            cutlass:  {
                name: 'Cutlass',
                plusDM: 11,
                minusDM: 6,
                wounds: 3,
                skillIndex: 5,
            },
            broadsword:  {
                name: 'Broadsword',
                plusDM: 12,
                minusDM: 7,
                wounds: 4,
                skillIndex: 6,
            },
            bayonet:  {
                name: 'Bayonet',
                plusDM: 9,
                minusDM: 4,
                wounds: 3,
                skillIndex: 7,
            },
            spear:  {
                name: 'Spear',
                plusDM: 9,
                minusDM: 4,
                wounds: 2,
                skillIndex: 8,
            },
            halberd:  {
                name: 'Halberd',
                plusDM: 10,
                minusDM: 5,
                wounds: 3,
                skillIndex: 9,
            },
            pike:  {
                name: 'Pike',
                plusDM: 10,
                minusDM: 6,
                wounds: 3,
                skillIndex: 10,
            },
            cudgel:  {
                name: 'Cudgel',
                plusDM: 8,
                minusDM: 4,
                wounds: 2,
                skillIndex: 11,
            },
        },
        guns: {
            cascadeType: 'guns',
            //wounds for weapons are in d6
            bpistol: {
                name: 'Body Pistol',
                plusDM: 11,
                minusDM: 7,
                wounds: 2,
                skillIndex: 12,
            },
            apistol:  {
                name: 'Auto Pistol',
                plusDM: 10,
                minusDM: 6,
                wounds: 3,
                skillIndex: 13,
            },
            revolver:  {
                name: 'Revolver',
                plusDM: 9,
                minusDM: 6,
                wounds: 3,
                skillIndex: 14,
            },
            carbine:  {
                name: 'Carbine',
                plusDM: 9,
                minusDM: 4,
                wounds: 3,
                skillIndex: 15,
            },
            rifle:  {
                name: 'Rifle',
                plusDM: 8,
                minusDM: 5,
                wounds: 3,
                skillIndex: 16,
            },
            arifle:  {
                name: 'Auto Rifle',
                plusDM: 10,
                minusDM: 6,
                wounds: 3,
                skillIndex: 17,
            },
            shotgun:  {
                name: 'Shotgun',
                plusDM: 9,
                minusDM: 3,
                wounds: 4,
                skillIndex: 18,
            },
            smg:  {
                name: 'SMG',
                plusDM: 9,
                minusDM: 5,
                wounds: 3,
                skillIndex: 19,
            },
            lcarbine:  {
                name: 'Laser Carbine',
                plusDM: 10,
                minusDM: 5,
                wounds: 5,
                skillIndex: 20,
            },
            lrifle:  {
                name: 'Laser Rifle',
                plusDM: 11,
                minusDM: 6,
                wounds: 5,
                skillIndex: 21,
            },
        },
        vehicle: {
            cascadeType: 'vehicle',
            aircraft: {
                pick: true,
                title: 'aircraft',
                type: {
                    prop: {
                        name: 'Prop-driven Fixed Wing',
                        skillIndex: 22,
                    },
                        
                    jet: {
                        name: 'Jet-driven Fixed Wing',
                        skillIndex: 23,
                    },
                    helicopter:  {
                        name: 'Helicopter',
                        skillIndex: 24,
                    },
                },
            },
            watercraft: {
                pick: true,
                title: 'watercraft',
                type: {
                    large:   {
                        name: 'Large watercraft',
                        skillIndex: 25,
                    },
                    small:   {
                        name: 'Small watercraft',
                        skillIndex: 26,
                    }, 
                    hover:   {
                        name: 'Hovercraft',
                        skillIndex: 27,
                    }, 
                    sub:    {
                        name: 'Submersible',
                        skillIndex: 28,
                    },
                },
            },
            grav:     {
                name: 'Grav Vehicle (Air/Raft)',
                skillIndex: 29,
            },
            wheeled:    {
                name:  'Wheeled',
                skillIndex: 30,
            },
            tracked:    {
                name:'Tracked',
                skillIndex: 31,
            }, 
        },

    },
    

    

/*-------------------------------------------------------------------
            Nobility Mappings

--------------------------------------------------------------------*/


    // nobility mappings
    nobilityTitles: {
        2: 'none',
        3: 'none',
        4: 'none',
        5: 'none',
        6: 'none',
        7: 'none',
        8: 'none',
        9: 'none',
        10: 'none',
        11: {
            male: 'Knight',
            female: 'Knightess',
            female2: 'Dame'
        },
        12:  {
            male: 'Baron',
            female: 'Baronet',
            female2: 'Baroness'
        },
        13: {
            male: 'Marquis',
            female: 'Marquesa',
            female2: 'Marchioness'
        },
        14:  {
            male: 'Count',
            female: 'Countess',
            female2: 'Contessa'
        },
        15:  {
            male: 'Duke',
            female: 'Duchess',
            female2: 'Duchess'
        },
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

    //     let upp = this.characteristics.strength.pHexValue + this.characteristics.dexterity.pHexValue + this.characteristics.endurance.pHexValue + this.characteristics.intelligence.pHexValue + this.characteristics.education.pHexValue + this.characteristics.social.pHexValue;

    //     return upp;
    // },




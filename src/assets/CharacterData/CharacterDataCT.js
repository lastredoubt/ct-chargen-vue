export const CharacterDataCT = {
    name: 'New Character',
    age: 18,
    flags: {
        initialRolls: false,
    },
    career: {
        // allows later choice of traveller / cepheus versions
        tVersion: '',
        terms: 0,
        yearsCreation: 0,
        termHistory: [],

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
    skills: [],





    /*
    
    Built in methods / functions
    
    */
    generateUPP() {

        let upp = this.characteristics.strength.pHexValue + this.characteristics.dexterity.pHexValue + this.characteristics.endurance.pHexValue + this.characteristics.intelligence.pHexValue + this.characteristics.education.pHexValue + this.characteristics.social.pHexValue;

        return upp;
    },



}
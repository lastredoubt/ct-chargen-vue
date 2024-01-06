

/* 

Integrated mappings for pHex to convert numerical values for characteristics to pseudohex

*/
export function getPHexValue(characteristic) {
    // console.log('Value to be converted to pseudoHex: --->' + characteristic)
    // console.log(characteristic.value)

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
}



/* 

Die Roll functions

*/


export function rollD6() {
    let d1 = Math.floor((Math.random() * 6) + 1);
    
    return d1
}


export function roll2D6() {
  
    let d1 = Math.floor((Math.random() * 6) + 1);
    let d2 = Math.floor((Math.random() * 6) + 1);
    const rollTotal = d1 + d2
  
    return rollTotal
  
}
  

export function roll2D6Gen() {

    let d1 = Math.floor((Math.random() * 6) + 1);
    let d2 = Math.floor((Math.random() * 6) + 1);
    const rollTotal = d1 + d2
  
    const rollResult = {
        rollTotal: null,
        rollFirst: null,
    }
  
    rollResult.rollTotal = rollTotal
    rollResult.rollFirst = d1
  
  
    return rollResult
  
}
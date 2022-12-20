const myFunkyArray = ["Buddy","Is",4,true,"coding","class","Ahead?",false,2,69 === 420,"bored",120,11];

console.log("my orginal funky array: ",myFunkyArray);

const stringArray = myFunkyArray.filter(item => typeof item === 'string');
const alphaStringArray = stringArray.sort((a, b) => {
    if (a < b) {
    return -1;
    } else if (a > b) {
    return 1;
    } else {
    return 0;
    }
    });

console.log("alpha desc: ", alphaStringArray);
console.log("Upper case has priority");

const numberArray = myFunkyArray.filter(item => typeof item === 'number');
const ascenNumberArray = numberArray.sort((a, b) => {
    if (a < b) {
    return -1;
    } else if (a > b) {
    return 1;
    } else {
    return 0;
    }
    });

    console.log("numbers ascen: ", ascenNumberArray);

const descNumberArray = numberArray.sort((a, b) => {
     if (a < b) {
     return 1;
      } else if (a > b) {
      return -1;
      } else {
      return 0;
      }
     });
    
     console.log("numbers desc: ", descNumberArray);


const lowerCase = stringArray.map(string => string.toLowerCase());
console.log("Lower Case: ",lowerCase);

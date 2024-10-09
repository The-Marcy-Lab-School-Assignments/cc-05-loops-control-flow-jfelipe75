
//1
const multiplesOfSixAndNine = () => {
    for (let i = 0; i <= 100; i++) {
        if (i % 6 === 0 && i % 9 === 0) {
            console.log(i)
        }

    }

}
multiplesOfSixAndNine()

//2
const greaterNum = (num1, num2) => {
    if (typeof num1 != 'number' || typeof num2 != 'number' ) {
        return null;
    } else if (num1 > num2) {
        return num1;
    } else if ( num2 > num1) {
        return num2
    } else if (num1 === num2) {
        return "both"
    }
} 
console.log(greaterNum(2, 2));

//3
const sumOfFourAndSix = () => {
    let sum = 0;
    for (let i = 1; i <= 1000; i++) {
        if (i % 4 === 0 && i % 6 === 0) {
            sum += i;
        } 
    } 
    return sum
} 
console.log(sumOfFourAndSix());

//4 

const oddAndEvenToN = (num) => {
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is even`);
        } else {
            console.log(`${i} is odd`);
        }
  }
}
 oddAndEvenToN(6)
 

// normal function declaration

function squareNormal(number){
    return number * number;
}
console.log(squareNormal(5));

// Declaration with variables

const squareVariable = function (number){
    return number*number;
}

console.log(squareVariable(3))

// Arrow Function

const sqaureArrow = number => number*number;
console.log(sqaureArrow(4));
function calculate(a,b,...rest){


    if (rest[0]==="-"){
        return a-b;
    }

    else if (rest){
        let count = 0;
        for (let i=0;i<=rest.length;i++){
            count += rest[i];
        }
        return count
    }

    else return a+b;

}

console.log(calculate(15,20,"-"))
console.log(calculate(15,20))
console.log(calculate(10,20,30,40,50,60,70,80))
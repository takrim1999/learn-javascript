function Calculator(operator, x, y){
    this.operator = operator;
    this.x = x;
    this.y = y;
    this.sum = function (){
        console.log(this.x + this.y);
    }
    if (this.operator === "add"){
        return this.x + this.y;
    }

}

let add = new Calculator("add", 5,10);
console.log(add);
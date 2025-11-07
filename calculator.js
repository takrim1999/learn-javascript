function calculator(operator, x, y){
    this.operator = operator;
    this.x = x;
    this.y = y;
    this.sum = function (){
        console.log(this.x + this.y);
    }

}

let add = new calculator("add", 5,10);
add.sum();
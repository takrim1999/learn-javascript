function Person(name, age){
    this.name = name;
    this.age = age;

    this.talk = function (){
        console.log("Hello, My name is " + this.name);
        console.log("I am " + this.age + " years old!");
    }

}

takrim = new Person("Takrim",26);
takrim.talk();
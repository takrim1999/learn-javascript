export function User(name, age, profession){
    this.name = name;
    this.age = age;
    this.profession = profession;

    this.introduce = function (){
        return "Hello there! My name is " + this.name + "\nand I am a " + this.profession + " of " + this.age + " years old.";
    };
}
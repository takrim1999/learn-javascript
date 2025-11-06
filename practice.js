// Simple Data Structures Practice

person = {
    name : "Takrim",
    age : 26
}

console.log(person)

// Starting OOP

// const circle = {
//     radius : 1,
//     position : {
//         x: 12,
//         y: 15
//     },
//     draw: function (){
//         console.log("Drawing circle at position " + this.position)
//     }
// }

// factory method

function createCircle(radius){
    return {
        radius,
        draw: function draw(){
        console.log("Circle radius is " + radius);
    }
    };
}


const circle = createCircle(5);
circle.draw()
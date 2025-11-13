colors = ["red", "green", "blue"];

// without mapping
for(let i = 0; i< colors.length; i++){
    console.log(`<li>${colors[i]}</li>`);
}

const processedItmes = colors.map(color => `<li>${color}</li>`);
console.log(processedItmes);
throw new Error("")
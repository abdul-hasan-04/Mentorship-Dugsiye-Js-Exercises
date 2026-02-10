//creating loop that runs throgh array and prints array values, in each iteration should print one value of that array//

const fruitsStore = ["Banana", "Mangoes", "PineApples", "Lemons"];
// what does iterationLoop is doing inside it's body//

//console.log(fruitsStore[0]);
//console.log(fruitsStore[1]);
//console.log(fruitsStore[2]);
//console.log(fruitsStore[3]);

// create for loop that will run and iterate through fruits array//

for(let iterationLoop = fruitsStore.length - 4; iterationLoop <= fruitsStore.length - 1; iterationLoop ++){
    console.log(fruitsStore[iterationLoop]);
}

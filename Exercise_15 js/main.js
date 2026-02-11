const peopleInformation = [
    {name : "Abdulahi Mohamed Hassan", age : 20, city : "Mogadishu"},
    {name : "Hafso Ali Kasim", age : 19, city : "Stanbul"},
    {name : "Mohamed Daahir Bashir", age : 18, city : "Hargeisa"},
];

// create for of loop to iterate through this array objects//

console.log("Properties And Values : ");
for(let eachPerson of peopleInformation){
    // create for in to iterate through object//
    for(let key in eachPerson){
        console.table(key + " : " + eachPerson [key]);
    }
    console.log("<===================>");
    
}
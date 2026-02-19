const calcArea = (width, hight = width) =>{
    return `Area Result is : ${width} X ${hight}`;
} 

let getResult = calcArea(1200);

console.log(getResult); //With use of Default Parameter

getResult = calcArea(4000,2000);

console.log(getResult); // witout Default parameter

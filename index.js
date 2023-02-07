
//Problem 1: Mind Game problem(input a positive number)


function mindGame(number){
    if(typeof number !== "number"){
        return "please enter a number";
    }
    
    let multi = number * 3;
    let add = multi + 10;
    let div = add/2;
    let finalResult = div - 5;
    return finalResult

}
let num = 50;
let result = mindGame(num);
console.log(result);



// Problem 2: Find even or odd based on string character input
/*
function evenOdd(str){
    if(typeof str !== "string"){
        return "please enter a string";
    }
   let length = str.length;
   if(length % 2 === 0){
    return "even";
   }
   else{
    return "odd";
   }

}

let str = "Dhaka";
let result =evenOdd(str);
console.log(result);
*/

// Problem 3: Is less or greater than seven
/*

function isLGSeven(number){
    if(typeof number !== "number"){
        return "please enter a number";
    }
    let diff = number - 7;
    if(diff < 7){
        return diff;
    }
    else{
        return number *2;
    }



}
let number = 6;
let output = isLGSeven(number);
console.log(output);
*/


// problem 4: If negative number given, then it will show number of negative data/bad data

/*
function findingBadData(arr){
     if(Array.isArray(arr)!== true){
        return "please enter a array";
    }
    let negative = [];
    for(let i =0; i<arr.length; i++){
        let ele = arr[i];
        if(ele < 0){
            negative.push(ele);
             
        }
    }
    return negative.length;
    
    
    

}

let arr =[12,34,56,-12,-33, -11,44,-8, -3];
let output = findingBadData(arr);
console.log(output);
*/


// Problem 5: Convert gems to diamond. Input will be three numbers
/*
function gemsTODiamond(x,y,z){
     if(typeof x !== "number" || typeof y !== "number" || typeof z !== "number"){
        return "please enter a number";
    }
    
    let diamond1 = x*21;
    let  diamond2 = y*32;
    let  diamond3 = z*43;

   let totalDiamond = diamond1 + diamond2 + diamond3;
   if(totalDiamond > 2000){
     let diamondLeft = totalDiamond - 2000;
     return diamondLeft;
   }
   else{
    return totalDiamond;
   }
  

}
let firstFriend = 100;
let secondFriend = 5;
let thirdFriend = 1;

let diamond = gemsTODiamond(firstFriend, secondFriend, thirdFriend);
console.log(diamond);

*/
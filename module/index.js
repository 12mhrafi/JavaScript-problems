// function factorial(number){
//     let result = 1;
//     for(i=1;i<=number;i++){
//         result = result * i;
//     }
//     return result;
// }
// var result = factorial(5);
// console.log(result);

// function factorial(){
//     let result = 1;
//     for(i=number;i>=1;i--){
//         result = result * i;
//         console.log(i);
//     }
//     return result;
// }
// var fact = factorial(5);
// console.log(fact);
// -----------------------------------------------
// remove duplicate elements i an array
// const names = ['rafi','hasan','mahdi','rafi','hasan','mahdi','rafi','kamal','gedu','hasan','mahdi','rafi','hasan','mahdi',]

// function removeDuplicateName(){
//     let uniqueNames = [];
//     for(i=0;i < names.length;i++){
//         let name = names[i];
//         if(uniqueNames.includes(name)==false){
//             uniqueNames.push(name);
//         }
//     }
//     return uniqueNames;
// }
// const allName = removeDuplicateName();
// console.log(allName);

// ----------------------------------------------------

// find cheapest elements in an object indside array

// const phones = [
//     {name:"Symphony", camera:16,storage:64,ram:"4GB",price:12000,color:"silver"},
//     {name:"Realme", camera:16,storage:64,ram:"4GB",price:14000,color:"green"},
//     {name:"Oppo", camera:16,storage:64,ram:"4GB",price:16000,color:"dark"},
//     {name:"Xiaomi", camera:64,storage:128,ram:"8GB",price:20000,color:"yellow"},
//     {name:"Google pixel", camera:16,storage:128,ram:"8GB",price:58000,color:"white"},
//     {name:"Walton", camera:16,storage:64,ram:"4GB",price:10000,color:"orange"},
//     {name:"Vision", camera:16,storage:32,ram:"4GB",price:8000,color:"diamond"},
//     {name:"Apple", camera:48,storage:128,ram:"8GB",price:149000,color:"gold"},
// ]

// function findLowestPricePhone(){
//     let lowestPrice = phones[0];
//     for(i=0; i < phones.length; i++){
   
//     let phone = phones[i];
//     if(phone.price  < lowestPrice.price){
//         lowestPrice = phone;
        
//     }
//   }
//   return lowestPrice;
// }

// const LowestPhone = findLowestPricePhone();
// console.log(LowestPhone)


// -------------------------------------------------------


// total cart price all phone

// const phones = [
//         {name:"Symphony", camera:16,storage:64,ram:"4GB",price:12000,color:"silver",quatity:4},
//         // {name:"Realme", camera:16,storage:64,ram:"4GB",price:14000,color:"green",quatity:5},
//         // {name:"Oppo", camera:16,storage:64,ram:"4GB",price:16000,color:"dark",quatity:3},
//         // {name:"Xiaomi", camera:64,storage:128,ram:"8GB",price:20000,color:"yellow",quatity:7},
//         // {name:"Google pixel", camera:16,storage:128,ram:"8GB",price:58000,color:"white",quatity:4},
//         // {name:"Walton", camera:16,storage:64,ram:"4GB",price:10000,color:"orange",quatity:2},
//         // {name:"Vision", camera:16,storage:32,ram:"4GB",price:8000,color:"diamond",quatity:9},
//         // {name:"Apple", camera:48,storage:128,ram:"8GB",price:149000,color:"gold",quatity:6 },
//     ]

//     function totalPrice(phones){
//         let sum = 0;
//         for(i=0; i < phones.length; i++){
//             let phone = phones[i]
//             let totalQuantityPrice = phone.price * phone.quatity;
//             sum = sum + totalQuantityPrice ;
//         }
//         return sum;
      
//     }

//     const totalCost = totalPrice(phones);
//     console.log(totalCost);


// ---------------------------------------------------------

/*
1.if ticket numbers is less than 100, per ticket price:100;
2.if ticket number is more than 100, but less than 200.First 100 tickets will be 100 and rest tickets will be 90 taka per piece;
3.if you purchage more than 200 tickets 
first 100 > 100tk 
101-200  > 90tk
200+  > 70tk
*/ 

// function discountTicketPrice(totalTicket){
//     const firstHundredPrice = 100;
//     const firstTwoHundredPrice = 90;
//     const uppTwoHundred = 70;
//     if(totalTicket <= 100){
//         let totalCost = firstHundredPrice * totalTicket;
//         return totalCost;
//     }else if(totalTicket <= 200){
//         let firstHundredPrice = 100 * 100;
//         let restTicket = totalTicket - 100;
//         let restTicketPrice = restTicket * firstTwoHundredPrice;
//         let totalCost = firstHundredPrice + restTicketPrice;
//      return totalCost;
//     }else{
//       let firstHundredPrice = 100 * 100;
//       let firstTwoHundredPrice = 100 * 90;
//       let restTicket = totalTicket - 200;
//       let restTicketPrice = restTicket * uppTwoHundred;
//       let totalCost = firstHundredPrice + firstTwoHundredPrice + restTicketPrice;
//       return totalCost;
//     }
// }

// const priceAfterDiscount = discountTicketPrice(300);
// console.log(priceAfterDiscount);

// -----------------------------------------------------------------

// // feet to inche

// function feetToInch(feet){
//     let inch = 12 * feet +" inches";
//     return inch;
// }

// const totalInch = feetToInch(5);
// console.log(totalInch);

// ----------------------------------------

// centimeter to meter

// function centimeterToMeter(centimeter){
//     let meter  = centimeter / 100 + " meter";
//     return meter;
// }

// const totalMeter = centimeterToMeter(100);
// console.log(totalMeter);

// ------------------------------------

// total paper need for books
/*
function paperRequirements(book1,book2,book3){
    // total pages
    const firstBookPaper = 100;
    const secondBookPaper = 200;
    const thirdBookPaper = 300;

    let totalBookPapers = (firstBookPaper * book1) + (secondBookPaper * book2) + (thirdBookPaper * book3);
    return totalBookPapers;
}

let total = paperRequirements(4,2,23);
console.log(total);

*/
// ------------------------------------

// return the max length name

// function bestFriend(friends){
//     let highest = friends[0];
//     for(i=0;i < friends.length;i++){
//        if(highest.length <  friends[i].length){
//             highest = friends[i];
//        }
//     }return highest;
// }
//  const friends = ['mahdi','hasan','rafi','mahdi hasan rafi'];
//  const high = bestFriend(friends);
//  console.log(high)


/*
return onlypositive number with an array ;

 function onlyPositive(numbers){
    let positiveNumber = [];
    for(i=0;i < numbers.length ; i++){
         if(numbers[i] > 0 ){
            positiveNumber.push(numbers[i]);
        }else{
            break;
         }
    }
    return positiveNumber;
}
// const numbers = [23,34,767,435,76,23,56,34,65,34,6,-23,45,324,54]
// const positive = onlyPositive(numbers);
// console.log(positive);
// -----------------------------------------------------
// even and odd number checker
*/
/* function evenOrOdd(numbers){
         let evenNum = [];
         let oddNum = [];
     for(i=0; i < numbers.length; i++){
        
        if(numbers[i] % 2 == 0 ){
            evenNum.push(numbers[i]);
         }else{
             oddNum.push(numbers[i]);
         }
     }
     return {evenNum:evenNum,
               oddNum:oddNum
     }
 }
 const numbers = [23,38,68,78,100,767,435,76,23,56,34,65,34,6,23,45,324,54];

 let num = evenOrOdd(numbers);
 console.log("even", num.evenNum);
 console.log("odd",num.oddNum);
*/



// finding bad data ( search in array and if find negtive number this wil be called as bad number)

// function findingBadData(numbers){
//     let badNum = [];
//     for(i=0;i < numbers.length; i++){
//         if(numbers[i] < 0){
//           badNum.push(numbers[i])
//         }
//     } 
//     let totalBadNum = badNum.length
//     return totalBadNum ;
// }
// const numbers = [23,38,68,-78,100,-767,435,-76,23,-56,34,-65,34,6,23,45,324,54];

// console.log((findingBadData(numbers))); 
// // ans: total bad number is 5;


// take an array  its inside the numbers is integer return true;


// function isInterger(numbers){
//     let integerNum = [];
//     let decimalNum = [];
//     for(i=0;i < numbers.length;i++){
//         if(typeof numbers[i] !== "number"){
//             console.log("Give me right number");
//         }else{
//             if(numbers[i] % 1 === 0){
//                 integerNum.push(numbers[i]);
//             }else{
//                 decimalNum.push(numbers[i]);
//             }
//         }
//     }
//     return [integerNum,
//         decimalNum];
// }
// const numbers = [65.4,4,64,45,6.34,34.64,34,2346,3654,324,5.2,545.45,54/5];
// const num  = isInterger(numbers);
// console.log(num[0])
// console.log(num[1])


// take a function name is called isJavaScriptFile

// let fileName = "index.js";

// function isJavaScriptFile(fileName){
//     if(fileName.toLowerCase().endsWith(".js") === true){
//         return true;
//     }else{
//         return false;
//     }

// }

// console.log( isJavaScriptFile(fileName));

// function totalValue(num){
//     if(typeof num !== 'number'){
//        return "Please Give me number"
//     }else{
//         let totalMul = num * 3;
//         let totaladd = totalMul + 10;
//         let totalDiv = totaladd / 2;
//         let totSub = totalDiv - 5;
//         return totSub;
//     }
// }

// console.log(totalValue(6));
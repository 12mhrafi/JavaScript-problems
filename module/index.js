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


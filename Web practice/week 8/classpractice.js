// let num1=7;
// let num2 = 4;
// let result = num1+num2;

// console.log("result of num1 and num2 is "+ result);

// console.log(`the addition of ${num1} and ${num2} is ${result}`)
// console.log(`My name is 
// Sonia rejhra`);
// const n = 'Sonia';
// console.log(`Hello, ${n}!`);

// //Arrow function
// let greet =function(user){
//     console.log("Sonia "+user);
//     return 1;
// }
// console.log(greet("Rejhra"));

// let gret = () => {console.log("Hello world");
// }
// console.log(gret());
// const keyname ='name';
// const a ={
//     [keyname]:"Sonia",
//     price: 100,
// };
// console.log(a);

const sos = function(...arg){
    let total =0;
    for (let a of arg){
        total+=a;
    }
    return total;
}
let arr =[0,1,2,3,4];
console .log(sos(arr));

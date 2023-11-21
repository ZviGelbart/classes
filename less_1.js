// function maxMin(min, max){
//     return Math.floor(Math.random() * (max - min) + min);
// }


// function listRandom(size, min, max){
//     let newList = [];
//     while(size>0, size--){
//         newList.push(maxMin(min, max));
//     }
//     return newList
// }

// function add(num1, num2){
//     return num1+ num2;
// }

// function addAllNumbers(arr){
//     let answer = 0;
//     for(n of arr){
//         answer = add(answer, n);
//         n = 0 ;
//     }
//     return answer
// }

// console.log(maxMin(30, 80));
// console.log(listRandom(5, 30 ,80))
// console.log(add(8, 7))
// console.log(addAllNumbers([2,4,6,7,8]))

// let add = (num1, num2) => {return num1 + num2}
// let deblle = (num1, num2) => {return num1 * num2}
// let div = (num1, num2) => {return num1 / num2}
// let minos = (num1, num2) => {return num1 - num2}
// let arr = [add, deblle, div, minos]


// function oprtors(){
// n = 4 , n2 = 5, chice = "4";
//     if(chice == "1"){
//         return arr[0](n, n2);
//     }else if(chice == "2"){
//         return arr[1](n, n2);
//     }else if(chice == "3"){
//         return arr[2](n, n2);
//     }else if(chice == "4"){
//         return arr[3](n, n2);
//     }else{
//         return "erro";
//     }
// }
// console.log(oprtors())
  


// function question(ques, True, False){
//     confirm(ques);
//     if (true){
//         return True();
//     }else{
//         return False();
//     }
// }
// let answerTrue = () => {return console.log("true true true")}
// let answerFalse = () => {return console.log("false false false")}
// let answerTrue2 = () => {return console.log("nice nice nice")}
// let answerFalse2 = () => {return console.log("notNice notNice notNice")}
// let question1 = "you like banana"
// let question2 = "you like apple"

// console.log(question(question1, answerTrue, answerFalse))
// console.log(question(question2, answerTrue2, answerFalse2))


function sumofnumbers(percentage, ...numbers){
    sum = 0;
    for(i of numbers){
        sum += i;
    }
    return sum -(sum * percentage) / 100;
}
console.log(sumofnumbers(10,3,4,5,6))













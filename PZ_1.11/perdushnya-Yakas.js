// function seconds(total) {
//     return total % 60
// }console.log(seconds(150))

//      Task 2
// function perimeter(side, count) {
//     return side * count
// }console.log(perimeter(4,3))

   //  Task 3
// function task3(n) {
//     for (let i = 0; i < n; i++) {
//         if (i % 3 === 0 && i % 5 === 0){
//             console.log('fizzbuzz' + i)
//         }
//          else if (i % 3 === 0){
//             console.log('fizz' + i)
//         }
//         else if (i % 5 === 0){
//             console.log('buzz' + i)
//         }
//     }
//     return  n + ' This is the end'
// }console.log(task3(20))

//      Task 4
// function calculate(a, b, c) {
//     return (a + b + c) / 3
// }console.log(calculate(4,6,8))

//      Task 5
// function isDivisible(n,x,y){
//     let end;
//     if(n % x === 0 && n % y === 0){
//         end ="Success";
//     }
//     else{
//         end ="Ooopss, there are error";
//     }
//     return end;
// }
// console.log(isDivisible(12,5,4));
// //part2
// const isd = (n, x, y) =>{
//     const s =(n % x === 0) && (n % y === 0);
//     return s;
// };
// console.log(isd(12,3,4))
// //part3
//
// function isD(n,x,y){
//     let res =(n % x === 0 && n % y === 0) ? 'Success' : 'Error';
//     return res;
// }
// console.log(isD(13,3,4));

//      Task 6
// function Fun6(n) {
//     let arr = new Array(n)
//     for (let i = 0; i < n; i++) {
//         arr[i] = i
//     }
//
//     console.log(`Max = ${Math.max(...arr)}`)
//     console.log(`Min = ${Math.min(...arr)}`)
//     arr.filter((value) => value % 2).forEach((x) => console.log(x))
//     let sum = arr.reduce((main, value) => main += value)
//     console.log(`Sum of all elements = ${sum}`)
//     console.log(`average of all elements = ${sum / n}`)
// }
// console.log(Fun6(5))

//      Task 7
// function Fun7(){
//     let arr = [5]
//     for (let i = 0; i < 5; i++) {
//         arr[i] = [5]
//         for (let j = 0; j < 5; j++) {
//             if (Math.random() < 0.5){
//                 arr[i][j] = 2
//             }
//             else arr [i][j] = -2
//         }
//     }
//     for (let i = 0; i < 5; i++) {
//         if (arr[i][i] < 0){
//             arr[i][i] = 0
//         }
//         else arr [i][i] = 1
//     }
//     arr.forEach((v) =>console.log(v))
// }
// Fun7()

//       TASK 8
// let a = +prompt('Enter a to calculate', '')
// let b = +prompt('Enter b to calculate', '')
// let chose = +prompt('If you wanna Add enter 1, to Sub enter 2, to Mul enter 3, to Div enter 4', '')
// switch (chose){
//     case 1:
//         document.write(Add(a, b))
//         break
//     case 2:
//         document.write(Sub(a, b))
//         break
//     case 3:
//         document.write(Mul(a, b))
//         break
//     case 4:
//         document.write(Div(a, b))
//         break
//     default:
// }
// function Add(a, b){
//     return 'result of Add = ' + (a + b)
// }
// Add()
// function Sub(a, b) {
//     return 'result of Sub = ' + (a - b)
// }
//
// function Mul(a, b) {
//     return 'result of Mul = ' + (a * b)
// }
//
// function Div(a, b) {
//     if (b == 0){
//         document.write(' b can not be equal 0')
//     }
//     else return 'result of Div = ' + (a / b)
// }

//          TASK 9
// function Fun9(a) {
//     if (a > 0 ){
//         console.log('is positive')
//     }
//     else if (a < 0){
//         console.log('is negative')
//     }
//
//     if (a > 0){
//         console.log('your number is simple')
//     }
//     else console.log('your number is not simple')
//
//
//     if (a % 2 === 0 || a % 5 === 0 || a % 3 === 0 || a % 6 === 0 || a % 9 === 0){
//         console.log(`Number ${a} is possible to Div on 2, 5, 3, 6, 9 without remainder`)
//     }
//     else return `Will mistake in Div`
// }
// console.log(Fun9(7))

// Task 10
// let array = [7, 3, 5, 6, "perdushnya"];
//
// function arrayTrick(array) {
//     array.reverse();
//     for (let i = 0; i < array.length; i++) {
//         if (!isNaN(Number.parseInt(array[i]))) {
//             array[i] *= array[i];
//         }
//     }
//     return array;
// };
// console.log(arrayTrick(array));
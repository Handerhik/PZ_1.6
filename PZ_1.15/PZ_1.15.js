
//      TASK 1
// let obj = {}
// function numberToObj(number) {
//     if (number > 9999 || number < 1){
//         return ('Number can not be higher than 9999 or lower than 1' + '\n' + obj)
//     }
//     else{
//         let arr = number.toString().split('').reverse()
//         return{
//             units: !arr[0] ? 0 : arr[0],
//             tens: !arr[1] ? 0 : arr[1],
//             hundreds: !arr[2] ? 0 : arr[2],
//             thousands: !arr[3] ? 0 : arr[3]
//         }
//     }
//
// }
// console.log(numberToObj(6754))

//      TASK 2
// function getExt(str) {
//     return str.split('.').reverse()[0]
// }
// console.log('Расширение файла : ' + getExt('/home/Vladislav/WebstormProjects/PZ1.15/script.js'))

//      TASK 3
// function returnArr(arr) {
//     let mass = []
//     return arr.filter(x => {
//         if (mass.includes(x)){
//             return false
//         }
//         else{
//             mass.push(x)
//             return true
//         }
//     })
// }
// console.log(returnArr([1,2,2,4,5,6,6]))
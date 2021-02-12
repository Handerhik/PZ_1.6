function seconds(total) {
    return total % 60
}console.log(seconds(150))

//      Task 2
function perimeter(side, count) {
    return side * count
}console.log(perimeter(4,3))

//      Task 3
function task3(n) {
    for (let i = 0; i < n; i++) {
        if (i % 3 === 0){
            console.log('fizz' + i)
        }
        else if (i % 5 === 0){
            console.log('buzz' + i)
        }
        else if (i % 3 === 0 && i % 5 === 0){
            console.log('fizzbuzz' + i)
        }
    }
    return  n + ' This is the end'
}console.log(task3(20))

//      Task 4
function calculate(a, b, c) {
    return (a + b + c) / 3
}console.log(calculate(4,6,8))

//      Task 5
function isDivisible(n, x, y) {
    // if (n % x === 0 && n % y === 0 && n > 0 && x > 0 && y > 0)
    //     return true
    // else return false
    // return (n !== 0 && n > 0 && x !==0 && x > 0 && y !==0 && y > 0 && n % x === 0 && n % y === 0) ? true : false;
    // return n !== 0 && n > 0 && x !==0 && x > 0 && y !==0 && y > 0 && n % x === 0 && n % y === 0;
}console.log(isDivisible(4, 7, 9))

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
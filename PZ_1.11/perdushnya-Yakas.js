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
}
console.log(task3(20))

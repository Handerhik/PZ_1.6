//      TASK 1
// const os = require("os");
// console.log(os.userInfo().username);

//      TASK 2
// const colors = require('colors')
// const say = require('say')
// console.log(colors.random('Hello'))
// //say.play('C:\\Users\\Vladislav\\WebstormProjects\\PZ_1.4\\PZ_2.3')
// say.speak('sound-play for some reason does not work, so I did it using the say module')

//      TASK 3
// const path = require('path')
// let way = 'C:\\Users\\Vladislav\\WebstormProjects\\PZ_1.4\\PZ_2.3\\index.html'
// console.log(path.basename(way))
// console.log(path.extname(way))
// if (new RegExp(/^[A-Z]?:/i).test(way)){
//     console.log('Microsoft Windows')
// }
// else if (new RegExp(/^[/]?[a-z]/i).test(way)){
//     console.log('Unixxxx')
// }
// else console.log('error')

//      TASK 4
function coinGame() {
    const readline = require('readline')
    const colors = require('colors')
    let result = Math.round(Math.random())
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    read.question(colors.random('\tОрел или решка?\n Введи 0 если ОРЕЛ, введи 1 если РЕШКА: '), answer => {
        if (result === Number.parseInt(answer)){
            console.log(colors.random('\tТы победил'))
        }else {
            console.log(colors.random('\tУвы, ты проиграл'))
        }
        read.close()
    })
}
coinGame()

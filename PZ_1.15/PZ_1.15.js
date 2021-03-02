
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

//      TASK 4
// function splitText(str) {
//     let vowelsLetters = ['а', 'у', 'е', 'о', 'э', 'и', 'ы', 'я', 'ю']
//     let result = {
//         text: str,
//         vowelsLetters: 0,
//         consonantsLetters: 0
//     }
//     str.split(' ').forEach(x => {
//         if (vowelsLetters.includes(x.split('')[0])){
//             return result.vowelsLetters++
//         }else {
//             return result.consonantsLetters++
//         }
//     })
//     return result
// }
// console.log(splitText('я люблю учить вебку, и стану тем самым, всемирно известным разрабом'))

//      TASK 5
// function isValidEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     return re.test(String(email).toLowerCase())
// }
// console.log(isValidEmail('mrJohn@gmail.com'))

//      TASK 6
// function repeatedWords(str) {
//     let newString = str.match(/the/gi)
//     return newString + '\n' + 'Количество повторений = ' + newString.length
// }
// console.log(repeatedWords('London is the capital of GB. Kiev is The capital of Ukraine '))

//      TASK 7
// function getFullDate() {
//     let hours = new Date().getHours() + ':'
//     let minutes = new Date().getMinutes() + ':'
//     let seconds = new Date().getSeconds() + ', '
//     let day = new Date().getDay()
//     switch (day){
//         case 0:
//             day = 'воскресенье' + ', '
//             break
//         case 1:
//             day = 'понедельник' + ', '
//             break
//         case 2:
//             day = 'вторник' + ', '
//             break
//         case 3:
//             day = 'среда' + ', '
//             break
//         case 4:
//             day = 'четверг' + ', '
//             break
//         case 5:
//             day = 'пятница' + ', '
//             break
//         case 6:
//             day = 'суббота' + ', '
//             break
//     }
//     let date = new Date().getDate() + ' '
//     let month = new Date().getMonth()
//     switch (month){
//         case 0:
//             month = 'Января' + ' '
//             break
//         case 1:
//             month = 'Февраля' + ' '
//             break
//         case 2:
//             month = 'Марта' + ' '
//             break
//         case 3:
//             month = 'Апреля' + ' '
//             break
//         case 4:
//             month = 'Мая' + ' '
//             break
//         case 5:
//             month = 'Июня' + ' '
//             break
//         case 6:
//             month = 'Июля' + ' '
//             break
//         case 7:
//             month = 'Августа' + ' '
//             break
//         case 8:
//             month = 'Сентября' + ' '
//             break
//         case 9:
//             month = 'Октября' + ' '
//             break
//         case 10:
//             month = 'Ноября' + ' '
//             break
//         case 11:
//             month = 'Декабря' + ' '
//             break
//     }
//     let year = new Date().getFullYear() + ' года'
//     return hours + minutes + seconds + day + date + month  + year
// }
// console.log(getFullDate())

//      TASK 8
// function game() {
//     alert('Game started')
//     let answer = true
//     let date = new Date()
//     while (answer){
//         let hint = ''
//         let attempts = 0
//         let attempt = 0
//         let result = Math.floor(Math.random() * 100)
//         let win = false
//         while (win = (result !== (attempt = +prompt('Угадывай число ' + hint + ':)')))){
//             if (attempt+15 <= result || attempt-15 >= result){
//                 hint = 'Очень холодно'
//             }else if (attempt+10 <= result || attempt-10 >= result){
//                 hint = 'Холодно'
//             }else if (attempt+5 <= result || attempt-5 >= result){
//                 hint = 'Жарко'
//             }else hint = 'Очень жарко'
//             attempts++
//             console.log(`${date.toLocaleDateString()} ${date.toLocaleTimeString()}
//             Попытка ${attempts}: число ${attempt} - не верно`)
//         }
//         console.log(`${date.toLocaleDateString()} ${date.toLocaleTimeString()}
//                 Спроба ${attempts}: число ${attempt} – вірно`)
//         answer = confirm(`Вам удалось угадать число ${result} за ${attempts} попыток! \n Желаете сыграть еще раз?`)
//     }
// }game()
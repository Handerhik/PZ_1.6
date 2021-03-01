'use strict'
//      TASK 1
// let language = true;
// let flag = true
// let numb;
// while (language){
//     let info = prompt('Виберіть мову: "ua" або "en"?', '')
//     if (info === 'ua' || info === 'Ua' || info === 'uA' || info === 'UA'){
//         numb = +prompt('Виберіть номер тижня від 1 до 7')
//         language = false
//         while (flag){
//             if (numb <=7 && numb > 0){
//                 flag = false
//             }
//             else numb = +prompt('Некорректний номер. Введіть від 1 до 7 :', '')
//         }
//         switch (numb){
//             case 1:
//                 alert('Понеділок')
//                 break
//             case 2:
//                 alert('Вівторок')
//                 break
//             case 3:
//                 alert('Середа')
//                 break
//             case 4:
//                 alert('Четвер')
//                 break
//             case 5:
//                 alert('Пятница')
//                 break
//             case 6:
//                 alert('Суббота')
//                 break
//             case 7:
//                 alert('Неділя')
//                 break
//             default: alert('Помилка')
//         }
//     }
//     else if (info === 'en' || info === 'En' || info === 'eN' || info === 'EN'){
//         numb = +prompt('Enter number from 1 to 7')
//         language = false
//         while (flag){
//             if (numb <=7 && numb > 0){
//                 flag = false
//             }
//             else numb = +prompt('Incorrect numb. Enter number from 1 to 7 :', '')
//         }
//         switch (numb){
//             case 1:
//                 alert('Monday')
//                 break
//             case 2:
//                 alert('Thursday')
//                 break
//             case 3:
//                 alert('Wednesday')
//                 break
//             case 4:
//                 alert('Tuesday')
//                 break
//             case 5:
//                 alert('Friday')
//                 break
//             case 6:
//                 alert('Saturday')
//                 break
//             case 7:
//                 alert('Sunday')
//                 break
//             default: alert('Error here')
//
//         }
//
//     }
// }

//      TASK 2
// function Board(length, width) {
//     this.length = length;
//     this.width = width;
//     let rows = '';
//     let columns = '';
//     for (;length > 0; length--){
//         rows += '\n'
//         rows += length;
//         for (let y = 1; y < width + 1; y++){
//             if ( y % 2 !== 0){
//                 rows += " #"
//             } else rows += " @"
//         }
//     }
//     console.log(rows)
//     for (let i = 0; i < width; i++) {
//         columns += String.fromCodePoint(65 + i) + ' ';
//     }
//     console.log('  ' + columns);
// }
//
// let chess = new Board(8, 8);
// console.log(chess);

//      TASK 3
// class Random {
//     static nextDouble(low, high) {
//         return Math.random() * (high - low) + low;
//     }
//     static nextInt(low, high) {
//         let rand = low + Math.random() * (high + 1 - low);
//         return Math.floor(rand)
//     }
//     static nextElement(array) {
//         let index = Math.floor(Math.random() * array.length);
//         return array[index]
//     }
// }
// console.log(Random.nextDouble(2.3, 14.7))
// console.log(Random.nextInt(2, 10))
// console.log(Random.nextElement([1, 4, 5, 8, 25]));

//      TASK 4
// function createGreetable (str) {
//     const result = function(){};
//     result.prototype.name = str;
//     result.prototype.greet = function (greeting) {return `${greeting}, ${result.prototype.name}!`};
//     return result;
// }
// const g = createGreetable('VladislavcheG');
// console.log(g.prototype.greet('Salam'));
//      TASK 5
//
// function sequence(start, step) {
//     return () => (start === 0 ? start += 1 : start += step)
// }
// let generator = sequence(10, 3);
// let generator2 = sequence(7,1);
//
// console.log(generator());
// console.log(generator2());
// console.log(generator());
// console.log(generator2());
// console.log(generator());

//      TASK 6
// let characters = [
//     {name: "Valet", age: 20},
//     {name: "Perdushnya", age: 24}
// ];
//
// function pluck(array) {
//     return array.map(item => item.name)
//         .filter((value, index, self) => self.indexOf(value) === index)
// }
// console.log(pluck(characters));

//      TASK 7
// function count(a) {
//     return Object.keys(a).length
// }
// let  a = {name: 'John', surname: 'Angel', age: 20}
// console.log(count(a))

//      TASK 8
// class Task {
//     constructor(name, description, startDate, endDate) {
//         this.name = name;
//         this.description = description;
//         this.startDate = startDate;
//         this.endDate = endDate;
//     }
//     subtask(){
//         let today = new Date();
//         return Math.round(( ( today - Date.parse(this.startDate)) / ( Date.parse(this.endDate) - Date.parse(this.startDate) ) ) * 100) + "%"
//     }
// }
//
// let t1 = new Task('Выучить вебку', 'Нужно работать!', 'Jan 8, 2021','Aug 30, 2021' )
// console.log(t1)
// console.log(t1.subtask())

//     TASK 9
// class Worker {
//     constructor(name, surname, rate, days) {
//         this.name = name
//         this.surname = surname;
//         this.rate = rate
//         this.days = days
//     }
//     getSalary(){
//         return this.rate * this.days
//     }
// }
// let worker = new Worker('Vladislav', 'Borshch', 1000, 30)
// console.log(worker.getSalary())
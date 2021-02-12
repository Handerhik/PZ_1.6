// 'use strict'

// let n = 100;
// while (n<=100){
//     console.log(n)
//     n++
// }

//  TASK 2
//  let a = 0
// do {
//     if (a == 0){
//         console.log(a + '- це нуль')
//         a++
//     }
//     else if (a%2 != 0){
//         console.log(a + '-непарне число')
//         a++
//     }
//     else if (a%2 == 0){
//         console.log(a + '-парне число')
//         a++
//     }
// }while (a<=10)

//      TASK 3
//for (let i = 0; i<10;console.log(i++)){}

//      TASK 4
// let a = +prompt('Количество этажей пирамиды?', '')
// document.write('Количество этажей пирамиды равно ' + a + '</br>')
// for (let i = 1; i <= a; i++) {
//     for (let n = 1; n <= i; n++) {
//         document.write('*');
//     }
//     document.write('' + '</br>')
// }
//
// // РАВНОБЕДРЕННЫЙ
// let maxCount = 2 * a - 1;
// for (let i = 1; i <= a; i++) {
//     let countOfStars = 2 * i - 1;
//     let countOfSpaces = maxCount - countOfStars;
//     let string = '';
//     for (let j = 0; j < countOfSpaces / 2; j++) {
//         string+= ' ';
//     }
//     for (let j = 0; j < countOfStars; j++) {
//         string+= '*';
//     }
//     for (let j = 0; j < countOfSpaces / 2; j++) {
//         string+= ' ';
//     }
//     console.log(string);
// }
//
//
// //  РОМБ
// for (let i = 1; i <= a / 2; i++) {
//     let countOfStars = i * 2 - 1;
//     let countOfSpaces = a - countOfStars;
//     let string = '';
//     for (let j = 0; j < countOfSpaces / 2; j++) {
//         string += ' ';
//     }
//     for (let j = 0; j < countOfStars; j++) {
//         string += '*';
//     }
//     for (let j = 0; j < countOfSpaces / 2; j++) {
//         string += ' ';
//     }
//     console.log(string);
// }
// let string = '';
// for (let i = 0; i < a; i++) {
//     string += '*'
// }
// console.log(string)
//
// for (let i = 1; i <= a / 2; i++) {
//     let countOfStars = a - 2 * i;
//     let countOfSpaces = a - countOfStars;
//     let string = '';
//     for (let j = 0; j < countOfSpaces / 2; j++) {
//         string += ' ';
//     }
//     for (let j = 0; j < countOfStars; j++) {
//         string += '*';
//     }
//     for (let j = 0; j < countOfSpaces / 2; j++) {
//         string += ' ';
//     }
//     console.log(string);
// }

//      TASK 5
// let numb = 10000;
// let result = 0;
// let counter = 0;
// while(numb > 50 ){
//     numb/=2;
//     counter +=1;
// }
// result = numb;
// console.log('Число которое получили равно ' + result);
// console.log(counter);

//      TASK 6
// let mounth = prompt('Введите число от 1 до 12', '')
// switch (mounth){
//     case '1':
//         alert('January')
//         break
//     case '2':
//         alert('February')
//         break
//     case '3':
//         alert('March')
//         break
//     case '4':
//         alert('April')
//         break
//     case '5':
//         alert('May')
//         break
//     case '6':
//         alert('June')
//         break
//     case '7':
//         alert('July')
//         break
//     case '8':
//         alert('August')
//         break
//     case '9':
//         alert('September')
//         break
//     case '10':
//         alert('October')
//         break
//     case '11':
//         alert('November')
//         break
//     case '12':
//         alert('December')
//         break
//     default:
// }


//      TASK 7
// let tempCels = prompt('Введите температуру в цельсиях', '')
// let tempFar = (9/5) * tempCels + 32
// alert(tempFar)

//      TASK 8
// let numb = prompt('Введите число от 1 до 7', '')
// switch (numb){
//     case '1':
//         alert('Monday')
//         break
//     case '2':
//         alert('Tuesday')
//         break
//     case '3':
//         alert('Wednesday')
//         break
//     case '4':
//         alert('Thursday')
//         break
//     case '5':
//         alert('Friday')
//         break
//     case '6':
//         alert('Saturday')
//         break
//     case '7':
//         alert('Sunday')
//         break
//     default:
// }
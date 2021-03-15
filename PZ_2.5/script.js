const process = require('process')
const prompt = require('prompt-sync')()
const fs = require('fs')
const path = require('path')
const readline = require('readline')
let events = require('events')
let emitter = new events.EventEmitter()


emitter.on('start', function (){
    console.log('1 (list) - просмотр содержимого каталога')
    console.log('2 (transition) - переход между каталогами')
    console.log('3 (create) - создание файла/каталога')
    console.log('4 (contentOfFile) - просмотр содержимого файла')
    console.log('5 (edit) - редактирование файлов')
    console.log('6 (rename) - переименовать файл/каталог')
    console.log('7 (delete) - удаление файла/каталога')
    console.log('8 (aboutFile) - просмотреть информацию о файле и каталоге (размер, владелец, права доступа)')
    console.log('0 (Exit) - выход с программы')
})

emitter.on('first', function (){
    console.log('This is 1 part')

    let directory_name = prompt('Enter name of directory which you want to see content ', '')
    let filenames = fs.readdirSync(directory_name)
    filenames.forEach((file) => {
        console.log('File: ' + file)
    })
})

emitter.on('second', function (){
    console.log('This is 2 part')
    const pathToNewDir = prompt('Paste here new path to dir', '')
    __dirname = path.normalize(pathToNewDir)
    console.log('Success')
})

emitter.on('third', function (){
    console.log('This is 3 part')

    const choiceToCreate = +prompt('If you wanna create FILE enter 1, to create DIR enter 2 ')
    if (choiceToCreate === 1){
        const newFileToCreate = prompt('Enter name of new file ')
        const contentOfNewFile = prompt('Write content for new file there ')
        fs.appendFile(newFileToCreate, contentOfNewFile, function (err){
            if (err) throw err
            console.log('File is created!')
        })
    }
    else if (choiceToCreate === 2){
        const dir = prompt('Enter name of new DIR ')
        fs.mkdir(dir, (err => {
            if (err)throw err
            console.log('Directory is created')
        }))
    }
    else console.log('Error! You should enter ONLY 1 or 2!')
})

emitter.on('fourth', function (){
    console.log('This is 4 part')
    console.log('Enter the file name which you wanna read')
    const fileName = prompt('')
    fs.readFile(fileName, (err, data) =>{
        if (err) throw err
        console.log(data.toString())
    })
})

emitter.on('fifth', function (){
    console.log('This is 5 part')

    const fileName = prompt('Type the name of file to modify ', '')
    const info = prompt('Type the info to write ', '')
    const operation = +prompt('Append or rewrite? (Type 1 to append or 2 to rewrite )', '')
    if (operation === 1){
        fs.appendFile(__dirname + '/' + fileName, info, function (err){
            if (err){
                console.log('\n\nSomething wrong\n\n')
            }
            console.log('File successfully modified')
        })
    }
    if (operation === 2){
        fs.writeFile(__dirname + '/' + fileName, info, function (err){
            if (err){
                console.log('Something wrong')
            }
            console.log('Success')
        })
    }
})

emitter.on('sixth', function (){
    console.log('This is 6 part')

    const choice = +prompt('If you wanna rename file name, click 1, for DIR name click 2 ')
    if (choice === 1){
        const fileName = prompt(`Enter file name which you wanna to rename - ` )
        const pathToFile = path.join(__dirname, fileName)
        const newFileName = prompt('Enter new name of file - ')
        const newPathToFile = path.join(__dirname, newFileName )

        fs.rename(pathToFile, newPathToFile, function (err){
            if (err) throw err
            console.log('Successfully renamed the file!')
        })
    }
    else if (choice === 2){
        const currPath = prompt('Enter name of dir which you wanna rename in format ./dir_name - ')
        const newPath = prompt('Enter new name of dir in format ./new_dirname - ')

        fs.rename(currPath, newPath, function (err){
            if (err) throw err
            console.log('Successfully renamed the directory!')
        })
    }
    else console.log('error')
})

emitter.on('seventh', function (){
    console.log('This is 7 part')
    const choiceForTask = +prompt('If you wanna delete FILE enter 1, for delete DIR enter 2 ')
    if (choiceForTask === 1){
        const nameOfFileForDelete = prompt('Enter file name which you want to delete ')
        fs.unlink(nameOfFileForDelete, (err => {
            if (err) throw err
            console.log('File is deleted')
        }))
    }
    else if (choiceForTask === 2){
        const nameOfDirForDelete = prompt('Enter dir name which you want to delete ')
        fs.rmdir(nameOfDirForDelete, {recursive: true}, (err => {
            if (err) throw err
            console.log(`${nameOfDirForDelete} is deleted!`)
        }))
    }
    else console.log('Mistake. Enter 1 or 2')
})

emitter.on('eight', function (){
    console.log('This is 8 part')

    const nameToInfo = prompt('Enter name FILE or DIR in format "./" for info about... ')
    fs.stat(nameToInfo, (err, stat) =>{
        if (err) throw err
        console.log(stat)
    })
})

emitter.emit('start')
const choiceOfTask = +prompt('') //Выбираем пункт задания
    switch (choiceOfTask){
        case 1:
            emitter.emit('first')
            break
        case 2:
            emitter.emit('second')
            break
        case 3:
            emitter.emit('third')
            break
        case 4:
            emitter.emit('fourth')
            break
        case 5:
            emitter.emit('fifth')
            break
        case 6:
            emitter.emit('sixth')
            break
        case 7:
            emitter.emit('seventh')
            break
        case 8:
            emitter.emit('eight')
            break
        default:
            console.log('Good luck')
}








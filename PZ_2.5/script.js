const process = require('process')
const prompt = require('prompt-sync')()
const fs = require('fs')
const path = require('path')
const readline = require('readline')
let events = require('events')
let emitter = new events.EventEmitter()
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
start()

emitter.on('first', function (){
    console.log('This is 1 part')

    let directory_name = prompt('Enter name of directory which you want to see content ', '')
    let filenames = fs.readdirSync(directory_name)
    filenames.forEach((file) => {
        console.log('File: ' + file)
    })
    start()
})

emitter.on('second', function (){
    console.log('This is 2 part')
    const pathToNewDir = prompt('Paste here new path to dir ', '')
    __dirname = path.normalize(pathToNewDir)
    console.log('Success')
    start()
})

emitter.on('third', function (){
    const choiceToCreate = +prompt('If you wanna create FILE enter 1, to create DIR enter 2 ')
    if (choiceToCreate === 1){
        const newFileToCreate = prompt('Enter name of new file ')
        const contentOfNewFile = prompt('Write content for new file there ')
        fs.appendFile(newFileToCreate, contentOfNewFile, function (err){
            if (err) throw err
            else {
                console.log('File is created!')
            }
            start()
        })
    }
    else if (choiceToCreate === 2){
        const dir = prompt('Enter name of new DIR ')
        fs.mkdir(dir, (err => {
            if (err){
                throw err
            }
            else{
                console.log('Directory is created')
            }
            start()
        }))
    }
    else console.log('Error! You should enter ONLY 1 or 2!')
    start()
})

emitter.on('fourth', function (){
    console.log('This is 4 part')
    console.log('Enter the file name which you wanna read')
    const fileName = prompt('')
    fs.readFile(fileName, (err, data) =>{
        if (err) throw err
        console.log(data.toString())
        start()
    })
})

emitter.on('fifth', function (){
    const fileName = prompt('Type the name of file to modify ', '')
    const info = prompt('Type the info to write ', '')
    const operation = +prompt('Append or rewrite? (Type 1 to append or 2 to rewrite )', '')
    if (operation === 1){
        fs.appendFile(__dirname + '/' + fileName, info, function (err){
            if (err){
                console.log('\n\nSomething wrong\n\n')
                start()
            }
            console.log('File successfully modified')
            start()
        })
    }
    if (operation === 2){
        fs.writeFile(__dirname + '/' + fileName, info, function (err){
            if (err){
                console.log('\n\nSomething wrong\n\n')
                start()
            }
            console.log('Successfully rewrite')
            start()
        })
    }
})

emitter.on('sixth', function (){
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
        start()
    }
    else if (choice === 2){
        const currPath = prompt('Enter name of dir which you wanna rename in format ./dir_name - ')
        const newPath = prompt('Enter new name of dir in format ./new_dirname - ')

        fs.rename(currPath, newPath, function (err){
            if (err) throw err
            console.log('Successfully renamed the directory!')
        })
        start()
    }
    else console.log('error')
    start()
})

emitter.on('seventh', function (){
    const choiceForTask = +prompt('If you wanna delete FILE enter 1, for delete DIR enter 2: ')
    if (choiceForTask === 1){
        const nameOfFileForDelete = prompt('Enter file name which you want to delete: ')
        fs.unlink(nameOfFileForDelete, (err => {
            if (err) throw err
            else{
                console.log('File is deleted')
            }
            start()
        }))
    }
    else if (choiceForTask === 2){
        const nameOfDirForDelete = prompt('Enter dir name which you want to delete: ')
        fs.rmdir(nameOfDirForDelete, {recursive: true}, (err => {
            if (err) throw err
            console.log(`${nameOfDirForDelete} is deleted!`)
            start()
        }))
    }
    else console.log('Mistake. Enter only 1 or 2')
    start()
})

emitter.on('eight', function (){
    const nameToInfo = prompt('Enter name FILE or DIR in format "./" for info about... ')
    fs.stat(nameToInfo, (err, stat) =>{
        if (err) throw err
        console.log(stat)
        start()
    })
})

emitter.on('exit', function (){
    console.log('Good luck')
    rl.close()
})


function start() {
    rl.question('   1 (list) - просмотр содержимого каталога\n' +
        '   2 (transition) - переход между каталогами\n' +
        '   3 (create) - создание файла/каталога\n' +
        '   4 (contentOfFile) - просмотр содержимого файла\n' +
        '   5 (edit) - редактирование файлов\n' +
        '   6 (rename) - переименовать файл/каталог\n' +
        '   7 (delete) - удаление файла/каталога\n' +
        '   8 (aboutFile) - просмотреть информацию о файле и каталоге (размер, владелец, права доступа)\n' +
        '   0 (Exit) - выход с программы\n' +
        '   You are on ' + __dirname + '\n', (answer => {
        switch (answer){
            case '1':
                emitter.emit('first')
                break
            case '2':
                emitter.emit('second')
                break
            case '3':
                emitter.emit('third')
                break
            case '4':
                emitter.emit('fourth')
                break
            case '5':
                emitter.emit('fifth')
                break
            case '6':
                emitter.emit('sixth')
                break
            case '7':
                emitter.emit('seventh')
                break
            case '8':
                emitter.emit('eight')
                break
            case '0':
                emitter.emit('exit')
                break
            default:
                console.log('Invalid input')
        }
    }))
}
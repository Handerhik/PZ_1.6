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
    let directory_name = prompt('Введи имя каталога, содержимое которого ты хочешь увидеть: ', '')
    let filenames = fs.readdirSync(directory_name)
    filenames.forEach((file) => {
        console.log('Имя файла: ' + file)
    })
    start()
})

emitter.on('second', function (){
    const pathToNewDir = prompt('Вставь сюда путь директории куда ты хочешь переместиться ', '')
    __dirname = path.normalize(pathToNewDir)
    console.log('Переход в другой каталог успешно осуществлен!')
    start()
})

emitter.on('third', function (){
    const choiceToCreate = +prompt('Если ты хочешь создать ФАЙЛ - нажми 1, для создания КАТАЛОГА - нажми 2: ')
    if (choiceToCreate === 1){
        const newFileToCreate = prompt('Введи имя нового файла: ')
        const contentOfNewFile = prompt('Введи содержимое для нового файла: ')
        fs.appendFile(newFileToCreate, contentOfNewFile, function (err){
            if (err) throw err
            else {
                console.log('Файл успешно создан!')
            }
            start()
        })
    }
    else if (choiceToCreate === 2){
        const dir = prompt('Введи имя нового каталога: ')
        fs.mkdir(dir, (err => {
            if (err){
                throw err
            }
            else{
                console.log('Каталог успешно создан!')
            }
            start()
        }))
    }
    else console.log('Ошибка! Ты должен ввести только 1 или 2!')
    start()
})

emitter.on('fourth', function (){
    console.log('Введи имя файла содержимое которого ты хочешь увидеть: ')
    const fileName = prompt('')
    fs.readFile(fileName, (err, data) =>{
        if (err) throw err
        console.log(data.toString())
        start()
    })
})

emitter.on('fifth', function (){
    const fileName = prompt('Введи имя файла для модификации ', '')
    const info = prompt('Введи содержимое которое ты хочешь дополнить/перезаписать в файл ', '')
    const operation = +prompt('Дополнить или перезаписать? (Введи 1 чтобы дополнить или 2 чтобы перезаписать )', '')
    if (operation === 1){
        fs.appendFile(__dirname + '/' + fileName, info, function (err){
            if (err){
                console.log('\n\nSomething wrong\n\n')
                start()
            }
            console.log('Файл успешно изменен!')
            start()
        })
    }
    if (operation === 2){
        fs.writeFile(__dirname + '/' + fileName, info, function (err){
            if (err){
                console.log('\n\nSomething wrong\n\n')
                start()
            }
            console.log('Файл успешно изменен')
            start()
        })
    }
})

emitter.on('sixth', function (){
    const choice = +prompt('Если хочешь переименовать ФАЙЛ нажми 1, КАТАЛОГ - 2: ')
    if (choice === 1){
        const fileName = prompt(`Введи имя файла который хочешь переименовать: ` )
        const pathToFile = path.join(__dirname, fileName)
        const newFileName = prompt('Введи новое имя файла ')
        const newPathToFile = path.join(__dirname, newFileName )

        fs.rename(pathToFile, newPathToFile, function (err){
            if (err) throw err
            console.log('Файл успешно переименован!')
        })
        start()
    }
    else if (choice === 2){
        const currPath = prompt('Введи имя каталога который хочешь переименовать в формате ./dir_name - ')
        const newPath = prompt('Введи имя каталога который переименовать в формате ./new_dirname - ')

        fs.rename(currPath, newPath, function (err){
            if (err) throw err
            console.log('Каталог успешно переименован!')
        })
        start()
    }
    else console.log('Ошибка! Нужно выбрать только 1 или 2!')
    start()
})

emitter.on('seventh', function (){
    const choiceForTask = +prompt('Если хочешь удалить ФАЙЛ нажми 1, КАТАЛОГ - 2: ')
    if (choiceForTask === 1){
        const nameOfFileForDelete = prompt('Введи имя файла который хочешь удалить: ')
        fs.unlink(nameOfFileForDelete, (err => {
            if (err) throw err
            else{
                console.log('Файл успешно удален!')
            }
            start()
        }))
    }
    else if (choiceForTask === 2){
        const nameOfDirForDelete = prompt('Введи имя каталога который хочешь удалить: ')
        fs.rmdir(nameOfDirForDelete, {recursive: true}, (err => {
            if (err) throw err
            console.log(`${nameOfDirForDelete} успешно удален!`)
            start()
        }))
    }
    else console.log('Ошибка! Нужно выбрать только 1 или 2')
    start()
})

emitter.on('eight', function (){
    const nameToInfo = prompt('Введи имя ФАЙЛА или КАТАЛОГА в формате "./" чтобы увидеть информацию о нём: ')
    fs.stat(nameToInfo, (err, stat) =>{
        if (err) throw err
        console.log(stat)
        start()
    })
})

emitter.on('exit', function (){
    console.log('Удачи!')
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
                console.log('Неправильный ввод! Читай вниательно!')
        }
    }))
}
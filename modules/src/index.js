const {getCircleArea, getSquareArea} = require('./mathUtils')
const {logInput, logResult, logError} = require('./log')
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

rl.question('원하는 도형을 작성해 주세요(정사각형, 원): ', figure => {
    console.log(`선택한 도형은 '${figure}'입니다.`)

    switch(figure){
        case('정사각형'):
        rl.question('변의 길이를 입력해 주세요: ', input => {
            console.log(logInput(input))
            console.log(logResult(figure, getSquareArea(input)))
            rl.close()
        })
        break
        case('원'):
        rl.question('반지름의 길이를 입력해 주세요: ', input => {
            console.log(logInput(input))
            console.log(logResult(figure, getCircleArea(input)))
            rl.close()
        })
        break
        default:
            return (
                logError
            )
            rl.close()    
    }
    
})
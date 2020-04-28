const logInput = input => `입력한 값: ${input}`
const logResult = (figure, result) => `${figure}의 넓이는 ${result} 입니다.`
const logError = `제시한 도형을 입력해 주세요. \n 커맨드 라인을 종료합니다. `

module.exports = {
    logInput,
    logResult,
    logError
}

# WEBPACK

## Module?
프로그램을 구성하는 내부의 코드가 기능별로 나뉘어져 있는 형태

### Module 가져오기
CommonJS(nodeJS): require(모듈의 경로)
ESM: import 모듈 이름 from 모듈 경로
### Module 내보내기
CommonJS(nodeJS): module.exports ={...} or module.exports=값 or module.exports.키이름 = 값 or exports.키이름 = 값
한가지 표현으로만 사용하자. 두 가지를 다 쓰면 내용 유실 가능성이 있음.
ESM: export or export default


var hello = require("./test2.js")
hello.name = " 김진아"
hello.hello()
hello.test(function () {
    console.log("콜백 호출됨")
})
var button = document.querySelector('#btn')
var pcartao = document.getElementById("pcartao")
var scartao = document.getElementById("scartao")

button.addEventListener("click", function() {
    pcartao.style.display = "none"
    scartao.style.display = "flow-root"

})

var button2 = document.querySelector('#btn2')
var tcartao = document.getElementById("tcartao")

button2.addEventListener("click", function() {
    scartao.style.display = "none"
    tcartao.style.display = "flow-root"

})

var button3 = document.querySelector('#btn3')
var qcartao = document.getElementById("qcartao")

button3.addEventListener("click", function() {
    scartao.style.display = "none"
    qcartao.style.display = "flow-root"

})
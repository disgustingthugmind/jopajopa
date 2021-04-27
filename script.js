var imp1 = document.querySelector('input')
var k1 = document.querySelector('.pic1')
var btn = document.querySelector('button')
btn.onmousedown = function () {
    if (imp1.value == 1) {
        k1.style.backgroundImage = 'url("1.jpg")'
    }
   
}

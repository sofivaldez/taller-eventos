document.addEventListener("DOMContentLoaded", function() {

let buttonDiv = document.querySelector('.div-button')
console.log('buttonDiv', buttonDiv)
buttonDiv.addEventListener("click", function(){
alert("Hola, soy el div")
});
})

function myFunction() {
    alert("Hola!")
  }
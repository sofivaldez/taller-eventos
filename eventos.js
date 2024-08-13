document.addEventListener("DOMContentLoaded", function() {

let buttonDiv = document.querySelector('.div-button')
console.log('buttonDiv', buttonDiv)
buttonDiv.addEventListener("click", function(event){
alert("Hola, soy el div")
});
})

function myFunction() {
    alert("Hola!")
    event.stopPropagation();
  }
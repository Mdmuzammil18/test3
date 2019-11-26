function checkAge() {
let named = document.querySelectorAll(".name");
for (var i = 0; i < named.length; i++) {
    let myage = named[i].querySelector(".color");
    if(myage.value  && myage.value <= 20){
        named[i].style.backgroundColor = 'blue';
} else if(myage.value  && myage.value <= 40){
        named[i].style.backgroundColor = 'green'; 
} else if(myage.value  && myage.value <= 60){
    named[i].style.backgroundColor = 'yellow'; 
}
  else if(myage.value  && myage.value > 60){
    named[i].style.backgroundColor = 'red'; 
}
}
}
function findAvg(){
let elms = document.querySelectorAll('.color');
let total = 0;
let min = elms[0].value;
let max = 0;
for( let i=0; i < elms.length; i++){
total = parseInt(elms[i].value) + parseInt(total);
let v = elms[i].value;
    min = (v < min) ? v : min;
    max = (v > max) ? v : max;
}
let avg = total / elms.length;
document.querySelector('.avg').innerHTML =`Average is: ${avg}` ;
document.querySelector('.min').innerHTML = `Smallest number is: ${min}`;
document.querySelector('.max').innerHTML = `largest number is: ${max}`;
}




   


function marksheet (){

    var num = document.getElementById('num').value

    var result = document.getElementById('result')
    
if(num >= 80 && num <= 100){
    result.innerText = ' I Am A+';
}
else if(num >= 70 && num <= 79){
    result.innerText = 'A';
}
else if(num >= 60 && num <= 69){
    result.innerText = 'A-';
}
else if(num >= 50 && num <= 59){
   result.innerText = 'B';
}
else if(num >= 40 && num <= 49){
    result.innerText = 'C';
}
else if(num >= 30 && num <= 39){
    result.innerText = 'D';
}
else if(num >= 0 && num <= 33){
   result.innerText = 'FAIL';
}
else{
    alert('failed');
}
}

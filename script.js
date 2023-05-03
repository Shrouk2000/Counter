let decreaseBtn=document.getElementById('btnDec');
let increaseBtn=document.getElementById('btnInc');
let resetBtn=document.getElementById('btnReset');
let counterValue=document.getElementById('counter')
let counter=0;

decreaseBtn.addEventListener('click',()=>{
counter--;
counterValue.innerHTML=counter;
})
increaseBtn.addEventListener('click',()=>{
counter++;
counterValue.innerHTML=counter;
})
resetBtn.addEventListener('click',()=>{
counter=0;
counterValue.innerHTML=counter;
})

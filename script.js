const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const bat = document.getElementById('bat');
const i = document.getElementById('i');
const status = document.getElementById('status');

btn1.addEventListener('click' , () => {
    
    status.innerText = 'charging ....';
     i.style.display = 'block';
    
   const funloop = () => {
    
      var s1 =  setTimeout(() =>{
        i.setAttribute('class' , 'fa fa-battery-quarter');
    },1000);
    
    var s2 = setTimeout(() =>{
        i.setAttribute('class' , 'fa fa-battery-half');
    },2000);
    
   var s3 = setTimeout(() =>{
        i.setAttribute('class' , 'fa fa-battery-three-quarters');
    },3000);
    
   var s4 = setTimeout(() =>{
        i.setAttribute('class' , 'fa fa-battery-full');
    },4000);
   }
   
  var funloop1 =  setInterval(funloop,4000);
//    clearInterval(funloop1);
   
})


btn2.addEventListener('click' , () => {
  status.innerText = 'Charge 80%';
    i.style.display = 'none';
    i.setAttribute('class' ,'');
      
})
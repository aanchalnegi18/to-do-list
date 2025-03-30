
const input=document.querySelector('input');
const button=document.querySelector('button');
const taskContainer=document.querySelector('.taskContainer')


button.addEventListener('click',()=>{

  if( input.value===''){prompt('please Enter task')}

  

  else{

const newElement=document.createElement('div');
newElement.classList.add('task');
const h3=document.createElement('h3');
h3.classList.add('addtask')
  h3.innerHTML=` ${input.value}`;
  const checkbox=document.createElement('input');
  checkbox.type='checkbox';
  checkbox.classList.add('clear')
  const btn=document.createElement('button');
  btn.innerHTML='✖';
  btn.classList.add('remove')
    

taskContainer.appendChild(newElement);
   newElement.appendChild(h3);
   newElement.appendChild(checkbox);
   newElement.appendChild(btn);
   input.value='';

  


  
btn.addEventListener('click',()=>{
  newElement.classList.remove('task');
newElement.classList.add('none');



})

//add event listener for the checkbox;


checkbox.addEventListener('change',()=>{
  if(checkbox.checked){
    newElement.classList.add('completed')
  }
  else{
    newElement.classList.remove('completed')
  }
});
  
  }})
  

let task = document.getElementById('task');
let time = document.getElementById('time');
let btn = document.getElementById('subBtn');
let taskLister = document.getElementById('taskLister');
btn.addEventListener('click', listItems);
function listItems(){
     if (task.value  === '' || time.value === '') {
          alert("Please enter a task with devoted time");
      }
      if(isNaN(time.value)){
         alert('please enter a valid number!');
     }
      else{
     let div = document.createElement('div');
     div.classList.add('taskLister1');
     let span = document.createElement('span');
     span.textContent ='-' +' '+ task.value + '  '    +'Time:'+  time.value + "  "+"Minutes";
     span.classList.add('taskSpan');
     //let btn = document.createElement('button');
     //btn.textContent = "Reminder";
     //btn.classList.add('reminderBtn');
     //span.appendChild(btn);
     let cross = document.createElement('i');
     cross.classList.add('fas', 'fa-times');
     cross.style.color = "red";
     cross.style.cursor = "pointer";
     cross.style.paddingTop = "0";
     cross.style.marginLeft = "100px"
     cross.addEventListener('click', () =>{
          div.remove();
     });
     let button = document.createElement('button');
     button.textContent = "Done";
     button.classList.add('doneBtn');
     button.addEventListener('click', ()=>{
          let check = document.createElement('i');
          check.classList.add('fas', 'fa-check');
          div.appendChild(check);
          button.remove();
          check.style.paddingLeft = "60px";
     })
     taskLister.appendChild(div);
     div.appendChild(span);
     div.appendChild(cross);
     div.appendChild(button);
     task.value = '';
     time.value = '';
}
}
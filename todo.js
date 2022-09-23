function add(){
   const input = document.getElementById('input');
   const list = document.getElementById('list');
   console.log(input.value);
   const li = document.createElement('li');
   li.innerText = input.value
   list.appendChild(li);
}
function erase(){
    const list = document.getElementById('list');
    list.innerHTML = '';
    console.log('clear');
}

function logSubmit(event){
  event.preventDefault();
}

var form = document.getElementById('form');
console.log(form);
form.addEventListener('submit', logSubmit);

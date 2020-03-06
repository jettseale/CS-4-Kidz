
function logSubmit(event){

  for (var i = 0; i <form.length - 2; i++ ){
    console.log(form.elements[i].value);
  }

var count = 0;

  $.getJSON("./email-data.json", function(obj){
    var countForObject = obj.length;
    for (var i = 0; i < countForObject; i++){
    if ( obj[i].email == form.elements[0].value && obj[i].password == form.elements[1].value )   {
      var emailstring ="Email: " + obj[i].email;
      var passstring = "Pass: " + obj[i].password;
      var user = "Username: " + obj[i].username;
      alert(emailstring + "\n" + passstring +  "\n" + user + "\n" + "Valid Credentials");
      count++;
      break;
    }
    }

    if (count == 0 ) {
    alert("Not A Valid Email or Password");
}

  });

  event.preventDefault();
}

var form = document.getElementById('form');
form.addEventListener('submit', logSubmit);

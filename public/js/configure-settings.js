var email;
var username;
var password;

$.ajaxSetup({
  async: false
  });

$.getJSON("./file-info.json", function(obj){
  var countForObject = obj.length - 1;
  console.log(countForObject);

    email =  obj[countForObject].email;
    username =  obj[countForObject].username;
    password = obj[countForObject].password;

    document.getElementById("username").textContent = username;

    document.getElementById("password").textContent = password;

    document.getElementById("email").textContent = email;

});

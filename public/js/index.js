function decrypt(encrypted, key){

	var decrypted = CryptoJS.AES.decrypt(encrypted, key);
    var plainText = decrypted.toString(CryptoJS.enc.Utf8);
	//outputDecrypted.innerHTML = plainText;

	return plainText;
}

function loadFile(){

window.location.href =  "http://localhost:3000/configure-user-settings";

}


function logSubmit(event){

  for (var i = 0; i <form.length - 2; i++ ){
    console.log(form.elements[i].value);
  }

var count = 0;

  var emailstring;
  var passstring;
  var username;

  $.ajaxSetup({
    async: false
    });

    var thing = {};

$.getJSON("./email-data.json", function(obj){
	
	var countForObject = obj.length;
    for (var i = 0; i < countForObject; i++){
		
		var decryptedPass = decrypt(obj[i].password, form.elements[0].value);
		console.log(decryptedPass);
    
	if ( obj[i].email == form.elements[0].value && decryptedPass == form.elements[1].value )   {
      emailstring ="Email: " + obj[i].email;
      passstring = "Pass: " + obj[i].password;
      user = "Username: " + obj[i].username;
      thing = {

        "email" : obj[i].email,
        "username": obj[i].username,
        "password": obj[i].password

      };
      count++;
      break;
    }

    }

  });

  if (count == 0 ) {
  alert("Not A Valid Email or Password");
  window.location.href =  "http://localhost:3000";
}

  //addText.appenChild("Hello");
if (count != 0){

  var postreq = new XMLHttpRequest();

  postreq.onreadystatechange = function() {

    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                        //loadPage(path.join(`${__dirname}/public/js/index.js`);
                    }
    if (this.readyState == XMLHttpRequest.DONE && this.status == 404) {
                                            alert("Error Occurred");
                    }

  };
                postreq.open('POST', 'login', true);
                postreq.setRequestHeader('Content-Type', 'application/json');
                postreq.send(JSON.stringify(thing));

loadFile();
}

event.preventDefault();
}

var form = document.getElementById('form');
form.addEventListener('submit', logSubmit);

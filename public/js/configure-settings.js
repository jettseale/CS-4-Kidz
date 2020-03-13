
var email;
var username;
var password;

$.ajaxSetup({
  async: false
  });

function displayInfo(){
	$.getJSON("./file-info.json", function(obj){
	  var countForObject = obj.length - 1;
	  console.log(countForObject);

		email =  obj[countForObject].email;
		username =  obj[countForObject].username;
		password = obj[countForObject].password;

		document.getElementById("username").textContent = username;

		document.getElementById("encryptedPassword").textContent = password;
		
		var decryptedPassword = decrypt(password, email);
		
		document.getElementById("decryptedPassword").textContent = decryptedPassword;

		document.getElementById("email").textContent = email;

	});
}

function decrypt(encrypted, key){

	var decrypted = CryptoJS.AES.decrypt(encrypted, key);
    var plainText = decrypted.toString(CryptoJS.enc.Utf8);
	//outputDecrypted.innerHTML = plainText;

	return plainText;
}

window.addEventListener('load', function () {
  displayInfo();
})

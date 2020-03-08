function generateCode () {
	var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 5; i++) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

var code = generateCode();

function sendEmail() {
	var form = document.getElementById('form');
	Email.send({
	Host: "smtp.gmail.com",
	Username : "cs4kidzemail@gmail.com",
	Password : "CS4KidzPassword",
	To : form.elements[0].value,
	From : "cs4kidzemail@gmail.com",
	Subject : "Code to reset your password",
	Body : `Your code is: ${code}`,
	}).then(
		message => alert("An email has been sent to the entered email address.")
	);
}

function checkCode() {
	var form = document.getElementById('form');
	if (form.elements[1].value === code) {
		alert("The code you entered is correct!");
	} else {
		alert("The code you entered is incorrect.");
	}
}
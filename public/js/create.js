function reloadPage(){

  window.location.href =  "http://localhost:3000";
}

function returnToFunction(){

    window.history.back();
}

function logSubmit(event){

var check = 0;

$.ajaxSetup({
  async: false
  });

$.getJSON("./email-data.json", function(obj){

    var countForObject = obj.length;
      for (var i = 0; i < countForObject; i++){
        if ( form.elements[0].value == obj[i].email ) {
          alert("Email or Username Already Exists");
          check++;
          break;
        }
        if (form.elements[1].value == obj[i].username){
          alert("Username Already Exists");
          check++;
          break;
        }

      }

      if (check != 0){
        window.location.href =  "http://localhost:3000/create-account";
      }

  });

  if (check !=0){
    console.log(check);
    return;
  }

  var thing = {

    "email" : form.elements[0].value,
    "username": form.elements[1].value,
    "password": form.elements[2].value
};

  var postreq = new XMLHttpRequest();

  postreq.onreadystatechange = function() {

    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                        //loadPage(path.join(`${__dirname}/public/js/index.js`);
                    }
    if (this.readyState == XMLHttpRequest.DONE && this.status == 404) {
                                            alert("Error Occurred");
                    }

  };
                postreq.open('POST', 'create', true);
                postreq.setRequestHeader('Content-Type', 'application/json');
                postreq.send(JSON.stringify(thing));

reloadPage();

event.preventDefault();

}

var form = document.getElementById('form');
form.addEventListener('submit', logSubmit);

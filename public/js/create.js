function reloadPage(){

  window.location.href =  "http://localhost:3000";

}

function logSubmit(event){

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

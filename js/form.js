// -- Popup --

var modal = document.getElementById("myModal");
var btn = document.getElementById("sub");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
    age = document.getElementById("age").value;
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    game = document.getElementById("game").value;
    country = document.getElementById("country").value;


    // alert(age);

    if(fname == "" || lname == "" || email == "" || game == "" || country == "") {
      document.getElementById("modal-content-1").innerHTML = "<b>Nem töltötte ki az egész űrlapot!</b>";
    }
    else {
      if(age < 12) {
        document.getElementById("modal-content-1").innerHTML = "Sajnáljuk, de csak <b>12 év felett</b> jelentkezhetsz a tanfolyamunkra.";
      } else {
        document.getElementById("modal-content-1").innerHTML = "Köszönjük a jelentkezésedet, " + "<i>" +lname + "</i>" + "! A részletekről értesítünk erre az E-mail címre: " + "<b>" + email + "</b>."; 
      }
    }

    
    
  }
  

span.onclick = function() {
    modal.style.display = "none";
    document.location.reload(true)
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "block";
    }
}

// -- Popup Content --



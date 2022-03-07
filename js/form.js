age = document.getElementById('age').value;
var modal = document.getElementById("myModal");
var btn = document.getElementById("sub");
var span = document.getElementsByClassName("close")[0];
// alert(age);

btn.onclick = function() {
    modal.style.display = "block";
  }
  

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "block";
    }
}
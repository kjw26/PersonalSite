<<<<<<< HEAD:index_js.js
// Change style of navbar on scroll
window.onscroll = function () { myFunction() };
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-white" ;
    } else {
        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white","");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
=======
// Change style of navbar on scroll
window.onscroll = function () { myFunction() };
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-white" ;
    } else {
        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white","");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
>>>>>>> fbcd24a5a8a584e5f269ad829b7c4daab5d528d6:index_js.js

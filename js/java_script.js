function validateForm() {
var x = document.forms["myForm"]["name"].value;
var a = document.forms["myForm"]["phone"].value;
var i = document.forms["myForm"]["email"].value;
if (x == "" || a == "" || i == "") {
    alert("All fields must be filled out");
    }
}

function openForm() {
    document.getElementById("login_popup").style.display = "block";
}

function closeForm() {
    document.getElementById("login_popup").style.display = "none";
}

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow > div:first')
        .fadeOut([1000])
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
}, 3000);
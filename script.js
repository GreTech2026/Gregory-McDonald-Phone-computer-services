document.getElementById("bookingForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let problem = document.getElementById("problem").value;

let message = "Hello Gregory, I want to book an appointment.%0A%0A"
+ "Name: " + name + "%0A"
+ "Phone: " + phone + "%0A"
+ "Problem: " + problem;

let whatsappURL = "https://wa.me/27842133696?text=" + message;

window.open(whatsappURL, "_blank");

});

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlides(){

slides.forEach(slide => slide.style.display = "none");

index++;

if(index > slides.length){
index = 1;
}

slides[index-1].style.display = "block";

setTimeout(showSlides,3000);

}

showSlides();

function toggleMode(){
document.body.classList.toggle("dark");
}

window.onload = function(){
document.getElementById("loader").style.display="none";
}



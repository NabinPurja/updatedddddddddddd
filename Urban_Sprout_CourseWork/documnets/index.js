function addToCart() {
    // Implementation for adding item to cart
    alert("Item added to cart!");
}

//function to validate form inputs
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields correctly.");
        return false;
    }
    else{
        alert("Message sent successfully!");
        clearForm();
    }
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}
//function to show details of memberwhen team member is clicked
function showDetails(member) {
    
}

//function for banner slider
let list = document.querySelector(".slider .lists");
let items = document.querySelectorAll(".slider .lists .items");
let dots = document.querySelectorAll(".slider .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let lengthItems = items.length;
next.onclick = function() {
    if(active + 1 >= lengthItems) {
        active = 0;
    }
    else {
        active = active + 1;
    }
    reloadSlider();
}
prev.onclick = function() {
    if(active - 1 < 0) {
        active = lengthItems - 1;
    }
    else {
        active = active - 1;
    }
    reloadSlider();
}
let refreshSlider = setInterval(() => {next.click()}, 5000);
function reloadSlider() {
    let checkleft = items[active].offsetLeft;
    list.style.left = -checkleft + "px";

    let lastActiveDot = document.querySelector(".slider .dots li.active");
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
     refreshSlider = setInterval(() => {next.click()}, 5000);
}
dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    });
});
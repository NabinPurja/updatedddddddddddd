function addToCart() {
    // Implementation for adding item to cart
    alert("Item added to cart!");
}

//function to validate form inputs
function validateForm() {
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields.");
        clearForm();
    }
    else{
        alert("Message sent successfully!");
    }
}
//function to show details of memberwhen team member is clicked
function showDetails(member) {
    
}
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
        return false;
    }
}
//function to clear the form
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
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


// ===== Product Detail Modal Script =====
function openModal(name, img, price, originalPrice, discount, description, watering, sunlight, category, stock) {
    currentQty = 1;
    document.getElementById('qty-display').textContent = 1;

    document.getElementById('modal-img').src = img;
    document.getElementById('modal-img').alt = name;
    document.getElementById('modal-name').textContent = name;
    document.getElementById('modal-price').textContent = price;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-watering').textContent = watering;
    document.getElementById('modal-sunlight').textContent = sunlight;
    document.getElementById('modal-category').textContent = category;
    document.getElementById('modal-stock').textContent = stock;

    const origEl = document.getElementById('modal-original-price');
    const discEl = document.getElementById('modal-discount');
    const badgeEl = document.getElementById('modal-badge');

    if (originalPrice && discount) {
            origEl.textContent = originalPrice;
            origEl.style.display = 'inline';
            discEl.textContent = discount + '% off';
            discEl.style.display = 'inline';
            badgeEl.textContent = discount + '% OFF';
            badgeEl.style.display = 'inline-block';
    } else {
            origEl.style.display = 'none';
            discEl.style.display = 'none';
            badgeEl.style.display = 'none';
    }

    document.getElementById('product-modal-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

//function for closing the model
function closeModal(event, force) {
if (force || (event && event.target === document.getElementById('product-modal-overlay'))) {
        document.getElementById('product-modal-overlay').classList.remove('active');
        document.body.style.overflow = '';
    }
}

//function for changing quantity of products in the add to cart
function changeQty(delta) {
    currentQty = Math.max(1, currentQty + delta);
    document.getElementById('qty-display').textContent = currentQty;
}

//add to cart button function
function modalAddToCart() {
    const name = document.getElementById('modal-name').textContent;
    alert('Added ' + currentQty + ' × ' + name + ' to your cart!');
    closeModal(null, true);
}


document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal(null, true);
});
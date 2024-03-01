// let btn = document.querySelector(".menu-btn")
let hanburger = document.getElementById("hamburger")
let btn_items = document.querySelector('.menu-items');
hamburger.addEventListener('click',()=>{
    btn_items.classList.toggle('-translate-x-full')

})






// Selecting elements with class plus and minus
// const plusButtons = document.querySelectorAll(".plus");
// const minusButtons = document.querySelectorAll(".minus");
// const foodElement = document.getElementById("food");

// // Adding click event listeners to plus buttons
// plusButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         // Get the current quantity from the foodElement text
//         let quantity = parseInt(foodElement.textContent.split(':')[1].trim());
//         // Increment the quantity by 1
//         quantity++;
//         // Update the text content of foodElement
//         foodElement.textContent = `Food quantity: ${quantity}`;
//     });
// });

// // Adding click event listeners to minus buttons
// minusButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         // Get the current quantity from the foodElement text
//         let quantity = parseInt(foodElement.textContent.split(':')[1].trim());
//         // Decrement the quantity by 1, ensuring it's not negative
//         quantity = Math.max(0, quantity - 1);
//         // Update the text content of foodElement
//         foodElement.textContent = `Food quantity: ${quantity}`;
//     });
// });






// let plus = document.querySelectorAll(".plus")
// let minus = document.querySelectorAll(".minus")
// let food = getElementById("food")

// plus.addEventListener('click', () => {
// })


// const toggleButton = document.querySelector('.menu');
//         const content = document.querySelector('.menu-item');

//         // Add click event listener to the button
//         toggleButton.addEventListener('click', function() {
//             // Toggle the visibility of the content
//             if (content.style.display === 'none') {
//                 content.style.display = 'block';
//             } else {
//                 content.style.display = 'none';
//             }
//         });
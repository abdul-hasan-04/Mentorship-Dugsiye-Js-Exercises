const toggleButton = document.querySelector('.toggle-button');
const navbar = document.querySelector('.navbar');
let anchors = document.querySelectorAll(".link");

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


anchors.forEach(anchor => {
    anchor.addEventListener("click", () => {
        navbar.classList.toggle('active');
    })
})

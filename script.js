document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.nav-buttons button');
    const sections = document.querySelectorAll('.content-section');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-section');

            sections.forEach(section => {
                section.classList.remove('active');
            });

            document.getElementById(target).classList.add('active');
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const closeButton = document.querySelector(".close-button");
    const popup = document.querySelector(".popup");

    closeButton.addEventListener("click", function() {
        popup.style.display = "none";
    });
});

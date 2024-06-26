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

    const closeButton = document.querySelector(".close-button");
    const popup = document.querySelector(".popup");

    closeButton.addEventListener("click", function() {
        popup.style.display = "none";
    });

    // Carousel functionality
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const nextButton = document.querySelector('.carousel-control.next');
    const prevButton = document.querySelector('.carousel-control.prev');
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    });

    showItem(currentIndex);
});

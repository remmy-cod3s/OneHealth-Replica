const tabs = document.querySelectorAll(".tab");
const testimonials = document.querySelectorAll(".testimonial");
const prevBtn = document.getElementById("prev-tab");
const nextBtn = document.getElementById("next-tab");
let current = 0;

function showTab(index) {
    tabs.forEach(function (t) {
        t.classList.remove("active");
    });
    testimonials.forEach(function (card) {
        card.classList.remove("active");
    });

    tabs[index].classList.add("active");
    document.getElementById("tab-" + tabs[index].dataset.tab).classList.add("active");
    current = index;
}

tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
        showTab(index);
    });
});

prevBtn.addEventListener("click", function () {
    if (current === 0) {
        showTab(tabs.length - 1);
    } else {
        showTab(current - 1);
    }
});

nextBtn.addEventListener("click", function () {
    if (current === tabs.length - 1) {
        showTab(0);
    } else {
        showTab(current + 1);
    }
});



const slides = document.querySelectorAll(".slide");
const slideCount = document.querySelector(".slide-count");
const slideProgress = document.querySelector(".slide-progress");
const slideButtons = document.querySelectorAll(".slide-btn");
const slidePrev = slideButtons[0];
const slideNext = slideButtons[1];
let slideIndex = 0;

function showSlide(index) {
    slides.forEach(function (s) {
        s.classList.remove("active");
    });
    slides[index].classList.add("active");

    slideCount.textContent = (index + 1) + " of " + slides.length;
    slideProgress.style.setProperty("--progress", ((index + 1) / slides.length * 100) + "%");

    slideIndex = index;
}

slidePrev.addEventListener("click", function () {
    if (slideIndex === 0) {
        showSlide(slides.length - 1);
    } else {
        showSlide(slideIndex - 1);
    }
});

slideNext.addEventListener("click", function () {
    if (slideIndex === slides.length - 1) {
        showSlide(0);
    } else {
        showSlide(slideIndex + 1);
    }
});

showSlide(0);  
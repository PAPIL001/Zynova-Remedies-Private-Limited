let currentSlide = 0;
let slides = document.querySelectorAll("#carousel img");
let totalSlides = slides.length;
let autoSlide;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 3000); // change every 3 sec
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

// Start auto-slide on load
window.onload = () => {
  showSlide(currentSlide);
  startAutoSlide();

  // Pause on hover, resume on leave
  let carousel = document.getElementById("carousel");
  carousel.addEventListener("mouseenter", stopAutoSlide);
  carousel.addEventListener("mouseleave", startAutoSlide);
};




function toggleReadMore(button) {
  let moreText = button.previousElementSibling; // hidden <p>
  moreText.classList.toggle("show");

  if (moreText.classList.contains("show")) {
    button.textContent = "Read Less";
  } else {
    button.textContent = "Read More";
  }
}


// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
// Get all buttons
const openModalButtons = document.querySelectorAll('#open-modal, #open-modal-footer');
const closeModalBtn = document.getElementById('close-modal');
const modal = document.getElementById('contact-modal');

// Open modal when any button is clicked
openModalButtons.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  });
});

// Close modal
closeModalBtn.addEventListener('click', function() {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
});

// Close when clicking outside modal content
modal.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  
  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Form submitted successfully! We will get back to you soon.");
      form.reset();
    });
  }
});

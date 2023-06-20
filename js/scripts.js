document.getElementById('contactBtn').addEventListener('click', function() {
  const form = document.getElementById('contactForm');
  if (form.classList.contains('hidden')) {
      form.classList.remove('hidden');
  } else {
      form.classList.add('hidden');
  }
});


// Function to scroll to a specific section of the page!!!!
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Scroll to contact section
function scrollToHerobot() {
  const herobotSection = document.getElementById("herobot");
  if (herobotSection) {
    herobotSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Add slide-right class when elements shownn
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-right');
    } else {
      entry.target.classList.remove('slide-right');
    }
  });
});

const elements = document.querySelectorAll('.slide-right');
elements.forEach(element => {
  observer.observe(element);
});

// Scroll to work section
const workLink = document.querySelector('a[href="#work"]');
workLink.addEventListener('click', function(event) {
  event.preventDefault();
  scrollToSection('work');
});

// Scroll to contact section
const contactLink = document.querySelector('a[href="#Contact"]');
contactLink.addEventListener('click', function(event) {
  event.preventDefault();
  scrollToSection('herobot');
});


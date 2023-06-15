function scrollToHerobot() {
    document.getElementById("herobot").scrollIntoView({ behavior: "smooth" });
}

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
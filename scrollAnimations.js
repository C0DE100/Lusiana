  document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll('.fade-in-left, .fade-in-right');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    }, { threshold: 0.3 }); // Trigger when 10% of the element is visible

    fadeInElements.forEach(element => {
      observer.observe(element);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const fadeInSections = document.querySelectorAll('.fade-in-on-scroll');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
          observer.unobserve(entry.target); // Stop observing once it has faded in
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the section is visible
  
    fadeInSections.forEach(section => {
      observer.observe(section);
    });
  });

  // QUOTE EVERY CHILD IS AN ARTIST ON SCROLL SHOW + border bottom add
  document.addEventListener("DOMContentLoaded", function () {
    const quote = document.querySelector('.typewriter-quote');
    const text = '“Every child is an artist.”';
    
    let typed = false; // To ensure typing happens only once
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !typed) {
          typed = true;
          typeWriterEffect(quote, text); // Call the function when the section is in view
          observer.unobserve(entry.target); // Stop observing after it's typed out
        }
      });
    }, { threshold: 0.5 }); // Trigger when 10% of the section is visible
  
    observer.observe(quote);
  });
  
  // Function to simulate typing
  function typeWriterEffect(element, text, speed = 100) {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        element.classList.add('bottom-border');
      }
    }
    type();
  }
// Cluster 9 Website JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Burger menu functionality
  const navToggle =
    document.querySelector(".nav-toggle.mobile-only") ||
    document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navToggle.classList.toggle("active");
      navMenu.classList.toggle("active");

      // Add show class after a small delay for smooth animation
      setTimeout(() => {
        if (navMenu.classList.contains("active")) {
          navMenu.classList.add("show");
        } else {
          navMenu.classList.remove("show");
        }
      }, 10);
    });

    // Close menu when clicking on a link
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navToggle.classList.remove("active");
        navMenu.classList.remove("active", "show");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.classList.remove("active");
        navMenu.classList.remove("active", "show");
      }
    });
  }

  // Smooth scrolling for navigation links
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add fade-in animation to sections as they come into view
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, observerOptions);

  // Observe all sections
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Form submission handling
  const contactForm = document.querySelector(".contact-form form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const name =
        formData.get("name") || this.querySelector('input[type="text"]').value;
      const email =
        formData.get("email") ||
        this.querySelector('input[type="email"]').value;
      const subject =
        formData.get("subject") ||
        this.querySelector('input[placeholder="Subject"]').value;
      const message =
        formData.get("message") || this.querySelector("textarea").value;

      // Simple validation
      if (!name || !email || !message) {
        alert("Please fill in all required fields.");
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Simulate form submission
      const submitButton = this.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;

      submitButton.textContent = "Sending...";
      submitButton.disabled = true;

      // Simulate API call
      setTimeout(() => {
        alert("Thank you for your message! We'll get back to you soon.");
        this.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }, 2000);
    });
  }

  // Add hover effects to portfolio items
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  portfolioItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Parallax effect for hero section
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero");
    const geometricPattern = document.querySelector(".geometric-pattern");

    if (hero && geometricPattern) {
      const rate = scrolled * -0.5;
      geometricPattern.style.transform = `translateY(${rate}px)`;
    }
  });
});

// Additional CSS for notifications (will be injected)
const notificationStyles = document.createElement("style");
notificationStyles.textContent = `
    .notification {
        font-family: 'Inter', sans-serif !important;
    }

    .notification-close:hover {
        opacity: 0.8;
    }

    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }

    .navbar.scrolled {
        background: rgba(255, 255, 255, 0.98);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
`;

document.head.appendChild(notificationStyles);

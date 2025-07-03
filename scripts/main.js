// Cluster 9 Website JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Mobile Navigation Toggle
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("show");
      navToggle.classList.toggle("active");
    });
  }

  // Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });

        // Close mobile menu if open
        if (navMenu.classList.contains("show")) {
          navMenu.classList.remove("show");
          navToggle.classList.remove("active");
        }
      }
    });
  });

  // Navbar Scroll Effect
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Fade In Animation on Scroll
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

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".section-header, .portfolio-item, .vision-point, .about-content, .contact-content"
  );
  animatedElements.forEach((el) => observer.observe(el));

  // Contact Form Handling
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const data = {};

      formData.forEach((value, key) => {
        data[key] = value;
      });

      // Simple validation
      if (!data.name || !data.email || !data.subject || !data.message) {
        showNotification("Please fill in all fields", "error");
        return;
      }

      if (!isValidEmail(data.email)) {
        showNotification("Please enter a valid email address", "error");
        return;
      }

      // Simulate form submission
      showNotification(
        "Thank you for your message! We'll get back to you soon.",
        "success"
      );

      // Reset form
      this.reset();
    });
  }

  // Email validation
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Notification system
  function showNotification(message, type = "info") {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll(".notification");
    existingNotifications.forEach((notification) => notification.remove());

    // Create notification element
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;

    // Add to page
    document.body.appendChild(notification);

    // Position notification
    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${
              type === "success"
                ? "#10B981"
                : type === "error"
                ? "#EF4444"
                : "#3B82F6"
            };
            color: white;
            padding: 16px 20px;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 12px;
            font-family: var(--font-primary);
            font-weight: 500;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        `;

    // Close button styles
    const closeBtn = notification.querySelector(".notification-close");
    closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
            padding: 0;
            margin-left: 8px;
        `;

    // Show notification
    setTimeout(() => {
      notification.style.transform = "translateX(0)";
    }, 100);

    // Auto hide after 5 seconds
    setTimeout(() => {
      notification.style.transform = "translateX(400px)";
      setTimeout(() => notification.remove(), 300);
    }, 5000);

    // Close button functionality
    closeBtn.addEventListener("click", () => {
      notification.style.transform = "translateX(400px)";
      setTimeout(() => notification.remove(), 300);
    });
  }

  // Parallax effect for hero triangles
  const triangles = document.querySelectorAll(".triangle");

  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    triangles.forEach((triangle, index) => {
      const speed = 0.2 + index * 0.1;
      triangle.style.transform = `translateY(${rate * speed}px)`;
    });
  });

  // Button hover effects
  const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Portfolio item hover animations
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  portfolioItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Loading animation
  window.addEventListener("load", function () {
    document.body.classList.add("loaded");

    // Animate hero elements
    const heroElements = document.querySelectorAll(".hero-content > *");
    heroElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("fade-in");
      }, index * 200);
    });
  });

  // Initialize all animations
  function initAnimations() {
    // Add initial opacity to animated elements
    const animatedEls = document.querySelectorAll(
      ".section-header, .portfolio-item, .vision-point, .about-content, .contact-content"
    );
    animatedEls.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    });
  }

  // Call init function
  initAnimations();
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
    
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            flex-direction: column;
            padding: 20px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .nav-menu.show {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        
        .nav-toggle.active .bar:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }
        
        .nav-toggle.active .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    }
`;

document.head.appendChild(notificationStyles);

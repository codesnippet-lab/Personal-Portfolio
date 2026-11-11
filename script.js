
/* =========================================
   PREMIUM 3D DEVELOPER PORTFOLIO
   JavaScript interactions
========================================= */

// Wait until the HTML page has loaded
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // 1. DARK / LIGHT THEME TOGGLE
    // =====================================

    const themeButton = document.getElementById("theme-toggle");

    if (themeButton) {
        themeButton.addEventListener("click", function () {

            // Add or remove the light-theme class
            document.body.classList.toggle("light-theme");

            // Check which theme is currently active
            const isLight = document.body.classList.contains("light-theme");

            // Change the button symbol
            themeButton.textContent = isLight ? "☀️" : "🌙";

            // Update accessibility information
            themeButton.setAttribute(
                "aria-label",
                isLight ? "Switch to dark mode" : "Switch to light mode"
            );
        });
    }


    // =====================================
    // 2. MOBILE NAVIGATION MENU
    // =====================================

    const menuButton = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuButton && navMenu) {

        // Open or close the menu
        menuButton.addEventListener("click", function () {

            navMenu.classList.toggle("show");

            const isOpen = navMenu.classList.contains("show");

            menuButton.textContent = isOpen ? "✕" : "☰";

            menuButton.setAttribute("aria-expanded", isOpen);
        });

        // Close the menu after clicking a navigation link
        const navLinks = navMenu.querySelectorAll(".nav-link");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("show");
                menuButton.textContent = "☰";
                menuButton.setAttribute("aria-expanded", "false");

            });

        });
    }


    // =====================================
    // 3. ACTIVE NAVIGATION LINK
    // =====================================

    const sections = document.querySelectorAll("main section[id]");
    const navigationLinks = document.querySelectorAll(".nav-link");

    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop - 150 &&
                window.scrollY < sectionTop + sectionHeight - 150
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navigationLinks.forEach(function (link) {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }

        });
    }

    // Update navigation when the user scrolls
    window.addEventListener("scroll", updateActiveLink);

    // Set the correct link when the page first loads
    updateActiveLink();


    // =====================================
    // 4. CONTACT FORM VALIDATION
    // =====================================

    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    if (contactForm && formStatus) {

        contactForm.addEventListener("submit", function (event) {

            // Stop the browser from submitting the form
            event.preventDefault();

            // Get the form values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Check whether any field is empty
            if (name === "" || email === "" || message === "") {

                formStatus.textContent = "Please fill in all the fields.";
                formStatus.style.color = "#f87171";

                return;
            }

            // Check whether the email looks valid
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                formStatus.textContent = "Please enter a valid email address.";
                formStatus.style.color = "#f87171";

                return;
            }

            // Show a success message
            formStatus.textContent =
                "Thank you, " + name + "! Your form has been validated successfully.";

            formStatus.style.color = "#4ade80";

            // Clear the form fields
            contactForm.reset();

        });
    }


    // =====================================
    // 5. BACK TO TOP BUTTON
    // =====================================

    const backTopButton = document.querySelector(".back-top");

    if (backTopButton) {

        backTopButton.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }

});

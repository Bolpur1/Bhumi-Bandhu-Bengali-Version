```javascript
/* =========================================================
   BHUMI BANDHU - MAIN JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       1. WEBSITE INFORMATION
       ===================================================== */

    const whatsapp = "918370833510";
    const phone = "+918370833510";
    const email = "officework.bolpur@gmail.com";


    /* =====================================================
       2. WHATSAPP BUTTONS
       ===================================================== */

    document.querySelectorAll("[data-wa], [data-whatsapp]").forEach(function (btn) {

        btn.addEventListener("click", function (e) {

            e.preventDefault();

            const message =
                "নমস্কার, আমি ভূমি বন্ধু-এর পরিষেবা সম্পর্কে জানতে চাই।";

            const whatsappURL =
                "https://wa.me/" +
                whatsapp +
                "?text=" +
                encodeURIComponent(message);

            window.open(whatsappURL, "_blank");

        });

    });


    /* =====================================================
       3. MOBILE MENU
       ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", function () {

            nav.classList.toggle("open");

        });


        /* Close menu after clicking a navigation link */

        nav.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                nav.classList.remove("open");

            });

        });

    }


    /* =====================================================
       4. PHONE LINKS
       ===================================================== */

    document.querySelectorAll("[data-phone]").forEach(function (link) {

        link.href = "tel:" + phone;

    });


    document.querySelectorAll("[data-phone-text]").forEach(function (text) {

        text.textContent = "+91 8370833510";

    });


    /* =====================================================
       5. EMAIL LINKS
       ===================================================== */

    document.querySelectorAll("[data-email]").forEach(function (link) {

        link.href = "mailto:" + email;

    });


    document.querySelectorAll("[data-email-text]").forEach(function (text) {

        text.textContent = email;

    });


    /* =====================================================
       6. GALLERY LIGHTBOX
       ===================================================== */

    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("galleryLightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxTitle = document.getElementById("lightboxTitle");
    const lightboxClose = document.querySelector(".gallery-close");


    if (galleryItems.length && lightbox && lightboxImage) {

        galleryItems.forEach(function (item) {

            item.addEventListener("click", function () {

                const image = item.querySelector("img");

                if (!image) return;

                lightboxImage.src = image.src;

                lightboxImage.alt =
                    image.alt || "ভূমি বন্ধু গ্যালারি";

                if (lightboxTitle) {

                    const title = item.querySelector("h3");

                    lightboxTitle.textContent =
                        title ? title.textContent : "";

                }

                lightbox.classList.add("open");

                document.body.style.overflow = "hidden";

            });

        });


        /* Close button */

        if (lightboxClose) {

            lightboxClose.addEventListener("click", function () {

                closeLightbox();

            });

        }


        /* Click outside image */

        lightbox.addEventListener("click", function (e) {

            if (e.target === lightbox) {

                closeLightbox();

            }

        });


        /* ESC key */

        document.addEventListener("keydown", function (e) {

            if (e.key === "Escape") {

                closeLightbox();

            }

        });


        function closeLightbox() {

            lightbox.classList.remove("open");

            document.body.style.overflow = "";

            setTimeout(function () {

                lightboxImage.src = "";

            }, 250);

        }

    }


    /* =====================================================
       7. QUERY FORM
       ===================================================== */

    const queryForm = document.getElementById("queryForm");

    if (queryForm) {

        queryForm.addEventListener("submit", function (e) {

            e.preventDefault();


            /* Get form values */

            const name =
                document.getElementById("name")?.value.trim() || "";

            const mobile =
                document.getElementById("mobile")?.value.trim() || "";

            const service =
                document.getElementById("service")?.value.trim() || "";

            const district =
                document.getElementById("district")?.value.trim() || "";

            const mouza =
                document.getElementById("mouza")?.value.trim() || "";

            const dag =
                document.getElementById("dag")?.value.trim() || "";

            const khatian =
                document.getElementById("khatian")?.value.trim() || "";

            const details =
                document.getElementById("details")?.value.trim() || "";


            /* Basic validation */

            if (!name) {

                alert("অনুগ্রহ করে আপনার নাম লিখুন।");

                document.getElementById("name")?.focus();

                return;

            }


            if (!mobile) {

                alert("অনুগ্রহ করে আপনার মোবাইল নম্বর লিখুন।");

                document.getElementById("mobile")?.focus();

                return;

            }


            /* Create WhatsApp message */

            let message =
                "নমস্কার, আমি ভূমি বন্ধু-এর মাধ্যমে জমি/সম্পত্তি সংক্রান্ত তথ্য জানতে চাই।\n\n";

            message += "নাম: " + name + "\n";
            message += "মোবাইল: " + mobile + "\n";

            if (service) {
                message += "পরিষেবা: " + service + "\n";
            }

            if (district) {
                message += "জেলা: " + district + "\n";
            }

            if (mouza) {
                message += "মৌজা: " + mouza + "\n";
            }

            if (dag) {
                message += "দাগ নং: " + dag + "\n";
            }

            if (khatian) {
                message += "খতিয়ান নং: " + khatian + "\n";
            }

            if (details) {
                message += "\nঅতিরিক্ত তথ্য:\n" + details + "\n";
            }


            /* Open WhatsApp */

            const whatsappURL =
                "https://wa.me/" +
                whatsapp +
                "?text=" +
                encodeURIComponent(message);

            window.open(whatsappURL, "_blank");

        });

    }


    /* =====================================================
       8. ACTIVE NAVIGATION
       ===================================================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav a[href^='#']");


    if (sections.length && navLinks.length) {

        window.addEventListener("scroll", function () {

            let currentSection = "";

            sections.forEach(function (section) {

                const sectionTop =
                    section.offsetTop - 120;

                const sectionHeight =
                    section.offsetHeight;

                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY < sectionTop + sectionHeight
                ) {

                    currentSection = section.getAttribute("id");

                }

            });


            navLinks.forEach(function (link) {

                link.classList.remove("active");

                const href =
                    link.getAttribute("href");

                if (href === "#" + currentSection) {

                    link.classList.add("active");

                }

            });

        });

    }


    /* =====================================================
       9. CURRENT YEAR
       ===================================================== */

    document.querySelectorAll("[data-year]").forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });

});
```

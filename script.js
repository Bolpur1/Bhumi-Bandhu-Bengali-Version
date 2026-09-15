/* =========================================================
   BHUMI BANDHU - MAIN JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ---------------------------------------------------------
       1. CONFIGURATION
       --------------------------------------------------------- */

    const BB_CONFIG = {
        whatsapp: "918370833510",
        phone: "+918370833510",
        email: "officework.bolpur@gmail.com"
    };


    /* ---------------------------------------------------------
       2. MOBILE MENU
       --------------------------------------------------------- */

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", function () {

            const isOpen = nav.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        // Mobile menu থেকে link click করলে menu বন্ধ হবে
        nav.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                nav.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* ---------------------------------------------------------
       3. WHATSAPP BUTTONS
       --------------------------------------------------------- */

    document.querySelectorAll("[data-whatsapp]").forEach(function (element) {

        element.addEventListener("click", function (event) {

            event.preventDefault();

            const message =
                element.getAttribute("data-message") ||
                "নমস্কার, আমি ভূমি বন্ধু-এর পরিষেবা সম্পর্কে জানতে চাই।";

            const whatsappURL =
                "https://wa.me/" +
                BB_CONFIG.whatsapp +
                "?text=" +
                encodeURIComponent(message);

            window.open(whatsappURL, "_blank");

        });

    });


    /* ---------------------------------------------------------
       4. PHONE LINKS
       --------------------------------------------------------- */

    document.querySelectorAll("[data-phone]").forEach(function (element) {

        element.setAttribute(
            "href",
            "tel:" + BB_CONFIG.phone
        );

    });


    /* ---------------------------------------------------------
       5. EMAIL LINKS
       --------------------------------------------------------- */

    document.querySelectorAll("[data-email]").forEach(function (element) {

        element.setAttribute(
            "href",
            "mailto:" + BB_CONFIG.email
        );

    });


    /* ---------------------------------------------------------
       6. QUERY FORM
       --------------------------------------------------------- */

    const queryForm = document.getElementById("queryForm");

    if (queryForm) {

        queryForm.addEventListener("submit", function (event) {

            event.preventDefault();


            // Get form values
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


            /* -------------------------------------------------
               VALIDATION
               ------------------------------------------------- */

            if (name === "") {
                alert("অনুগ্রহ করে আপনার নাম লিখুন।");
                document.getElementById("name")?.focus();
                return;
            }


            // Indian mobile number validation
            if (!/^[6-9][0-9]{9}$/.test(mobile)) {

                alert(
                    "সঠিক ১০ সংখ্যার মোবাইল নম্বর দিন।\n" +
                    "উদাহরণ: 8370833510"
                );

                document.getElementById("mobile")?.focus();

                return;
            }


            if (service === "") {

                alert("অনুগ্রহ করে পরিষেবা নির্বাচন করুন।");

                document.getElementById("service")?.focus();

                return;
            }


            if (details === "") {

                alert("অনুগ্রহ করে আপনার সমস্যার বিস্তারিত লিখুন।");

                document.getElementById("details")?.focus();

                return;
            }


            /* -------------------------------------------------
               CREATE WHATSAPP MESSAGE
               ------------------------------------------------- */

            let message = "";

            message += "নমস্কার, ভূমি বন্ধু-এর কাছে একটি কুয়েরি আছে।";
            message += "\n\n";

            message += "━━━━━━━━━━━━━━━━━━";
            message += "\n";
            message += "🏠 ভূমি বন্ধু - কুয়েরি";
            message += "\n";
            message += "━━━━━━━━━━━━━━━━━━";
            message += "\n\n";

            message += "👤 নাম: " + name;
            message += "\n";

            message += "📱 মোবাইল: " + mobile;
            message += "\n";

            message += "📋 পরিষেবা: " + service;
            message += "\n";


            if (district !== "") {
                message += "📍 জেলা: " + district;
                message += "\n";
            }


            if (mouza !== "") {
                message += "🏘️ মৌজা: " + mouza;
                message += "\n";
            }


            if (dag !== "") {
                message += "📄 দাগ নম্বর: " + dag;
                message += "\n";
            }


            if (khatian !== "") {
                message += "📑 খতিয়ান নম্বর: " + khatian;
                message += "\n";
            }


            message += "\n";
            message += "📝 বিস্তারিত:";
            message += "\n";
            message += details;
            message += "\n\n";

            message += "ধন্যবাদ।";


            /* -------------------------------------------------
               OPEN WHATSAPP
               ------------------------------------------------- */

            const whatsappURL =
                "https://wa.me/" +
                BB_CONFIG.whatsapp +
                "?text=" +
                encodeURIComponent(message);


            window.open(whatsappURL, "_blank");


            /* -------------------------------------------------
               OPTIONAL FORM RESET
               ------------------------------------------------- */

            queryForm.reset();

        });

    }


    /* ---------------------------------------------------------
       7. GALLERY LIGHTBOX
       --------------------------------------------------------- */

    const galleryLightbox =
        document.getElementById("galleryLightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxTitle =
        document.getElementById("lightboxTitle");

    const galleryClose =
        document.querySelector(".gallery-close");


    // Gallery items
    document.querySelectorAll(".gallery-item").forEach(function (item) {

        item.addEventListener("click", function () {

            const image =
                item.getAttribute("data-image");

            const title =
                item.getAttribute("data-title") ||
                item.querySelector("h3")?.textContent ||
                "ভূমি বন্ধু";


            if (galleryLightbox) {

                galleryLightbox.classList.add("active");

                galleryLightbox.setAttribute(
                    "aria-hidden",
                    "false"
                );

            }


            if (lightboxImage && image) {
                lightboxImage.src = image;
                lightboxImage.alt = title;
            }


            if (lightboxTitle) {
                lightboxTitle.textContent = title;
            }

        });

    });


    /* ---------------------------------------------------------
       8. CLOSE LIGHTBOX
       --------------------------------------------------------- */

    function closeLightbox() {

        if (galleryLightbox) {

            galleryLightbox.classList.remove("active");

            galleryLightbox.setAttribute(
                "aria-hidden",
                "true"
            );

        }

    }


    if (galleryClose) {

        galleryClose.addEventListener(
            "click",
            closeLightbox
        );

    }


    // Click outside image
    if (galleryLightbox) {

        galleryLightbox.addEventListener(
            "click",
            function (event) {

                if (event.target === galleryLightbox) {
                    closeLightbox();
                }

            }
        );

    }


    // ESC key
    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {
                closeLightbox();
            }

        }
    );


    /* ---------------------------------------------------------
       9. SMOOTH SCROLL
       --------------------------------------------------------- */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetID =
                link.getAttribute("href");

            if (!targetID || targetID === "#") {
                return;
            }


            const target =
                document.querySelector(targetID);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* ---------------------------------------------------------
       10. CURRENT YEAR
       --------------------------------------------------------- */

    const yearElements =
        document.querySelectorAll("[data-year]");

    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });


    /* ---------------------------------------------------------
       11. FORM MOBILE NUMBER - ONLY DIGITS
       --------------------------------------------------------- */

    const mobileInput =
        document.getElementById("mobile");

    if (mobileInput) {

        mobileInput.addEventListener(
            "input",
            function () {

                this.value =
                    this.value.replace(/\D/g, "").slice(0, 10);

            }
        );

    }


    /* ---------------------------------------------------------
       12. ACTIVE NAVIGATION ON SCROLL
       --------------------------------------------------------- */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".nav a[href^='#']");


    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNav
    );


    /* ---------------------------------------------------------
       13. CONSOLE MESSAGE
       --------------------------------------------------------- */

    console.log(
        "Bhumi Bandhu website JavaScript loaded successfully."
    );

});

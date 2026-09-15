document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       BHUMI BANDHU CONFIGURATION
       ===================================================== */

    const WHATSAPP_NUMBER = "918370833510";
    const PHONE_NUMBER = "+918370833510";
    const EMAIL_ADDRESS = "officework.bolpur@gmail.com";


    /* =====================================================
       WHATSAPP BUTTONS
       Supports:
       data-whatsapp
       data-wa
       ===================================================== */

    const whatsappButtons = document.querySelectorAll(
        "[data-whatsapp], [data-wa]"
    );

    whatsappButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            const message =
                "নমস্কার, আমি ভূমি বন্ধু-এর পরিষেবা সম্পর্কে জানতে চাই।";

            const whatsappURL =
                "https://wa.me/" +
                WHATSAPP_NUMBER +
                "?text=" +
                encodeURIComponent(message);

            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );

        });

    });


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav");

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", function () {

            const isOpen =
                navigation.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        /* Close menu after clicking a navigation link */

        navigation.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =====================================================
       PHONE LINKS
       ===================================================== */

    document.querySelectorAll("[data-phone]").forEach(function (link) {

        link.href = "tel:" + PHONE_NUMBER;

    });


    /* =====================================================
       EMAIL LINKS
       ===================================================== */

    document.querySelectorAll("[data-email]").forEach(function (link) {

        link.href = "mailto:" + EMAIL_ADDRESS;

    });


    /* =====================================================
       GALLERY LIGHTBOX
       ===================================================== */

    const galleryItems =
        document.querySelectorAll(".gallery-item");

    const lightbox =
        document.getElementById("galleryLightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxTitle =
        document.getElementById("lightboxTitle");

    const closeButton =
        document.querySelector(".gallery-close");


    /* Open Lightbox */

    if (
        galleryItems.length &&
        lightbox &&
        lightboxImage
    ) {

        galleryItems.forEach(function (item) {

            item.addEventListener("click", function () {

                const image =
                    item.getAttribute("data-image") ||
                    item.querySelector("img")?.getAttribute("src");

                const title =
                    item.getAttribute("data-title") ||
                    item.querySelector(".gallery-caption")?.textContent.trim() ||
                    "ভূমি বন্ধু গ্যালারি";


                if (!image) {
                    return;
                }


                lightboxImage.src = image;
                lightboxImage.alt = title;


                if (lightboxTitle) {
                    lightboxTitle.textContent = title;
                }


                lightbox.classList.add("active");

                document.body.classList.add(
                    "lightbox-open"
                );

            });

        });


        /* Close button */

        if (closeButton) {

            closeButton.addEventListener(
                "click",
                closeLightbox
            );

        }


        /* Close by clicking outside image */

        lightbox.addEventListener(
            "click",
            function (event) {

                if (event.target === lightbox) {

                    closeLightbox();

                }

            }
        );


        /* Close with ESC key */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape" &&
                    lightbox.classList.contains("active")
                ) {

                    closeLightbox();

                }

            }
        );

    }


    /* =====================================================
       CLOSE LIGHTBOX FUNCTION
       ===================================================== */

    function closeLightbox() {

        if (!lightbox) {
            return;
        }

        lightbox.classList.remove("active");

        document.body.classList.remove(
            "lightbox-open"
        );


        setTimeout(function () {

            if (lightboxImage) {
                lightboxImage.src = "";
            }

        }, 200);

    }


    /* =====================================================
       QUERY FORM → WHATSAPP
       ===================================================== */

    const queryForm =
        document.getElementById("queryForm");


    if (queryForm) {

        queryForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                /* -----------------------------------------
                   GET FORM VALUES
                   ----------------------------------------- */

                const name =
                    document.getElementById("name")
                    ?.value
                    .trim() || "";


                const mobile =
                    document.getElementById("mobile")
                    ?.value
                    .trim() || "";


                const service =
                    document.getElementById("service")
                    ?.value
                    .trim() || "";


                const district =
                    document.getElementById("district")
                    ?.value
                    .trim() || "";


                const mouza =
                    document.getElementById("mouza")
                    ?.value
                    .trim() || "";


                const dag =
                    document.getElementById("dag")
                    ?.value
                    .trim() || "";


                const khatian =
                    document.getElementById("khatian")
                    ?.value
                    .trim() || "";


                const details =
                    document.getElementById("details")
                    ?.value
                    .trim() || "";


                /* -----------------------------------------
                   NAME VALIDATION
                   ----------------------------------------- */

                if (!name) {

                    alert(
                        "দয়া করে আপনার নাম লিখুন।"
                    );

                    document
                        .getElementById("name")
                        ?.focus();

                    return;

                }


                /* -----------------------------------------
                   MOBILE VALIDATION
                   ----------------------------------------- */

                if (!/^[0-9]{10}$/.test(mobile)) {

                    alert(
                        "দয়া করে সঠিক ১০ সংখ্যার মোবাইল নম্বর দিন।"
                    );

                    document
                        .getElementById("mobile")
                        ?.focus();

                    return;

                }


                /* -----------------------------------------
                   SERVICE VALIDATION
                   ----------------------------------------- */

                if (!service) {

                    alert(
                        "দয়া করে একটি পরিষেবা নির্বাচন করুন।"
                    );

                    document
                        .getElementById("service")
                        ?.focus();

                    return;

                }


                /* -----------------------------------------
                   DETAILS VALIDATION
                   ----------------------------------------- */

                if (!details) {

                    alert(
                        "দয়া করে আপনার সমস্যাটি বিস্তারিত লিখুন।"
                    );

                    document
                        .getElementById("details")
                        ?.focus();

                    return;

                }


                /* -----------------------------------------
                   CREATE WHATSAPP MESSAGE
                   ----------------------------------------- */

                let message =
                    "নমস্কার, আমি ভূমি বন্ধু-তে একটি কুয়েরি পাঠাতে চাই।\n\n";


                message +=
                    "━━━━━━━━━━━━━━━━━━\n";

                message +=
                    "ভূমি বন্ধু - অনলাইন কুয়েরি\n";

                message +=
                    "━━━━━━━━━━━━━━━━━━\n\n";


                message +=
                    "নাম: " +
                    name +
                    "\n";


                message +=
                    "মোবাইল: " +
                    mobile +
                    "\n";


                message +=
                    "পরিষেবা: " +
                    service +
                    "\n";


                if (district) {

                    message +=
                        "জেলা: " +
                        district +
                        "\n";

                }


                if (mouza) {

                    message +=
                        "মৌজা: " +
                        mouza +
                        "\n";

                }


                if (dag) {

                    message +=
                        "দাগ নম্বর: " +
                        dag +
                        "\n";

                }


                if (khatian) {

                    message +=
                        "খতিয়ান নম্বর: " +
                        khatian +
                        "\n";

                }


                message +=
                    "\nবিস্তারিত:\n" +
                    details +
                    "\n\n";


                message +=
                    "ধন্যবাদ।";


                /* -----------------------------------------
                   OPEN WHATSAPP
                   ----------------------------------------- */

                const whatsappURL =
                    "https://wa.me/" +
                    WHATSAPP_NUMBER +
                    "?text=" +
                    encodeURIComponent(message);


                window.open(
                    whatsappURL,
                    "_blank",
                    "noopener,noreferrer"
                );

            }
        );

    }


    /* =====================================================
       MOBILE NUMBER INPUT
       Only numbers + maximum 10 digits
       ===================================================== */

    const mobileInput =
        document.getElementById("mobile");


    if (mobileInput) {

        mobileInput.addEventListener(
            "input",
            function () {

                this.value =
                    this.value
                    .replace(/\D/g, "")
                    .slice(0, 10);

            }
        );

    }


    /* =====================================================
       FOOTER YEAR
       ===================================================== */

    const year =
        document.getElementById("year");


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    /* Only actual section links */

    const navLinks =
        document.querySelectorAll(
            ".nav a[href^='#']:not([href='#'])"
        );


    if (
        sections.length &&
        navLinks.length
    ) {

        function updateActiveNavigation() {

            let current = "";

            const position =
                window.scrollY + 160;


            sections.forEach(function (section) {

                const sectionTop =
                    section.offsetTop;

                const sectionBottom =
                    sectionTop +
                    section.offsetHeight;


                if (
                    position >= sectionTop &&
                    position < sectionBottom
                ) {

                    current =
                        section.id;

                }

            });


            navLinks.forEach(function (link) {

                link.classList.remove("active");


                const href =
                    link.getAttribute("href");


                if (
                    current &&
                    href === "#" + current
                ) {

                    link.classList.add("active");

                }

            });

        }


        window.addEventListener(
            "scroll",
            updateActiveNavigation,
            {
                passive: true
            }
        );


        /* Run once when page loads */

        updateActiveNavigation();

    }


    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]:not([href="#"])'
    ).forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetID =
                    this.getAttribute("href");

                const target =
                    document.querySelector(targetID);


                if (!target) {
                    return;
                }


                event.preventDefault();


                const header =
                    document.querySelector(
                        ".site-header"
                    );


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.pageYOffset -
                    headerHeight;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });


    /* =====================================================
       END OF BHUMI BANDHU SCRIPT
       ===================================================== */

});

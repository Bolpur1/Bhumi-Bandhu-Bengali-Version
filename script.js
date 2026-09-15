document.addEventListener("DOMContentLoaded", function () {

    /* ================================
       BASIC SETTINGS
    ================================= */

    const WHATSAPP_NUMBER = "918370833510";
    const PHONE_NUMBER = "+918370833510";
    const EMAIL_ADDRESS = "officework.bolpur@gmail.com";


    /* ================================
       WHATSAPP BUTTONS
    ================================= */

    const whatsappButtons =
        document.querySelectorAll(
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


    /* ================================
       MOBILE MENU
    ================================= */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navigation =
        document.querySelector(".nav");

    if (menuToggle && navigation) {

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "মেনু খুলুন"
        );


        /* OPEN / CLOSE MENU */

        menuToggle.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                const isOpen =
                    navigation.classList.toggle("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    isOpen ? "true" : "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    isOpen
                        ? "মেনু বন্ধ করুন"
                        : "মেনু খুলুন"
                );
            }
        );


        /* CLOSE MENU AFTER CLICKING LINK */

        navigation
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navigation.classList.remove(
                            "open"
                        );

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                        menuToggle.setAttribute(
                            "aria-label",
                            "মেনু খুলুন"
                        );
                    }
                );

            });


        /* CLOSE MENU WHEN CLICKING OUTSIDE */

        document.addEventListener(
            "click",
            function (event) {

                if (
                    navigation.classList.contains("open") &&
                    !navigation.contains(event.target) &&
                    !menuToggle.contains(event.target)
                ) {

                    navigation.classList.remove(
                        "open"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    menuToggle.setAttribute(
                        "aria-label",
                        "মেনু খুলুন"
                    );
                }

            }
        );

    }


    /* ================================
       PHONE NUMBER
    ================================= */

    document
        .querySelectorAll("[data-phone]")
        .forEach(function (link) {

            link.href =
                "tel:" + PHONE_NUMBER;

        });


    /* ================================
       EMAIL ADDRESS
    ================================= */

    document
        .querySelectorAll("[data-email]")
        .forEach(function (link) {

            link.href =
                "mailto:" + EMAIL_ADDRESS;

        });


    /* ================================
       GALLERY LIGHTBOX
    ================================= */

    const galleryItems =
        document.querySelectorAll(
            ".gallery-item"
        );

    const galleryLightbox =
        document.getElementById(
            "galleryLightbox"
        );

    const lightboxImage =
        document.getElementById(
            "lightboxImage"
        );

    const lightboxTitle =
        document.getElementById(
            "lightboxTitle"
        );

    const galleryClose =
        document.querySelector(
            ".gallery-close"
        );


    /* OPEN GALLERY */

    galleryItems.forEach(function (item) {

        item.addEventListener(
            "click",
            function () {

                if (!galleryLightbox) {
                    return;
                }

                const image =
                    item.getAttribute(
                        "data-image"
                    );

                const title =
                    item.getAttribute(
                        "data-title"
                    ) || "";


                if (lightboxImage && image) {

                    lightboxImage.src = image;

                    lightboxImage.alt = title;

                }


                if (lightboxTitle) {

                    lightboxTitle.textContent =
                        title;

                }


                galleryLightbox.classList.add(
                    "open"
                );

                document.body.style.overflow =
                    "hidden";
            }
        );

    });


    /* CLOSE GALLERY */

    function closeGallery() {

        if (!galleryLightbox) {
            return;
        }

        galleryLightbox.classList.remove(
            "open"
        );

        document.body.style.overflow = "";

        if (lightboxImage) {

            lightboxImage.src = "";

        }

    }


    if (galleryClose) {

        galleryClose.addEventListener(
            "click",
            closeGallery
        );

    }


    /* CLOSE WHEN CLICKING BACKGROUND */

    if (galleryLightbox) {

        galleryLightbox.addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    galleryLightbox
                ) {

                    closeGallery();

                }

            }
        );

    }


    /* CLOSE WITH ESC KEY */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeGallery();

            }

        }
    );


    /* ================================
       QUERY FORM
    ================================= */

    const queryForm =
        document.getElementById(
            "queryForm"
        );


    if (queryForm) {

        queryForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                /* GET FORM VALUES */

                const name =
                    document
                        .getElementById("name")
                        ?.value
                        .trim() || "";


                const mobile =
                    document
                        .getElementById("mobile")
                        ?.value
                        .trim() || "";


                const service =
                    document
                        .getElementById("service")
                        ?.value
                        .trim() || "";


                const district =
                    document
                        .getElementById("district")
                        ?.value
                        .trim() || "";


                const mouza =
                    document
                        .getElementById("mouza")
                        ?.value
                        .trim() || "";


                const dag =
                    document
                        .getElementById("dag")
                        ?.value
                        .trim() || "";


                const khatian =
                    document
                        .getElementById("khatian")
                        ?.value
                        .trim() || "";


                const details =
                    document
                        .getElementById("details")
                        ?.value
                        .trim() || "";


                /* VALIDATION */

                if (!name) {

                    alert(
                        "দয়া করে আপনার নাম লিখুন।"
                    );

                    document
                        .getElementById("name")
                        ?.focus();

                    return;
                }


                if (
                    !/^[0-9]{10}$/.test(
                        mobile
                    )
                ) {

                    alert(
                        "দয়া করে সঠিক ১০ সংখ্যার মোবাইল নম্বর দিন।"
                    );

                    document
                        .getElementById("mobile")
                        ?.focus();

                    return;
                }


                if (!service) {

                    alert(
                        "দয়া করে একটি পরিষেবা নির্বাচন করুন।"
                    );

                    document
                        .getElementById("service")
                        ?.focus();

                    return;
                }


                if (!details) {

                    alert(
                        "দয়া করে আপনার সমস্যাটি বিস্তারিত লিখুন।"
                    );

                    document
                        .getElementById("details")
                        ?.focus();

                    return;
                }


                /* CREATE WHATSAPP MESSAGE */

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


                /* WHATSAPP URL */

                const whatsappURL =
                    "https://wa.me/" +
                    WHATSAPP_NUMBER +
                    "?text=" +
                    encodeURIComponent(
                        message
                    );


                /* OPEN WHATSAPP */

                window.open(
                    whatsappURL,
                    "_blank",
                    "noopener,noreferrer"
                );

            }
        );

    }


    /* ================================
       MOBILE NUMBER INPUT
    ================================= */

    const mobileInput =
        document.getElementById(
            "mobile"
        );


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


    /* ================================
       ACTIVE NAVIGATION
    ================================= */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            'header nav a[href^="#"]:not([data-wa]):not([data-whatsapp])'
        );


    function updateActiveNavigation() {

        let current = "";

        const position =
            window.scrollY + 120;


        sections.forEach(
            function (section) {

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

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                const href =
                    link.getAttribute(
                        "href"
                    );


                if (
                    href ===
                    "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }


    if (
        sections.length &&
        navLinks.length
    ) {

        window.addEventListener(
            "scroll",
            updateActiveNavigation,
            {
                passive: true
            }
        );


        updateActiveNavigation();

    }


    /* ================================
       FOOTER YEAR
    ================================= */

    const yearElement =
        document.getElementById(
            "year"
        );


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


});

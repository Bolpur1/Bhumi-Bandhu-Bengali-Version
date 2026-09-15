document.addEventListener("DOMContentLoaded", function () {

```
/* =====================================================
   BHUMI BANDHU CONFIGURATION
   ===================================================== */

const WHATSAPP_NUMBER = "918370833510";
const PHONE_NUMBER = "+918370833510";
const EMAIL_ADDRESS = "officework.bolpur@gmail.com";


/* =====================================================
   COMMON WHATSAPP MESSAGE
   ===================================================== */

const defaultWhatsAppMessage =
    "নমস্কার, আমি ভূমি বন্ধু-এর পরিষেবা সম্পর্কে জানতে চাই।";


/* =====================================================
   WHATSAPP BUTTONS
   Works with:
   data-whatsapp
   data-wa
   ===================================================== */

const whatsappButtons = document.querySelectorAll(
    "[data-whatsapp], [data-wa]"
);

whatsappButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        const whatsappURL =
            "https://wa.me/" +
            WHATSAPP_NUMBER +
            "?text=" +
            encodeURIComponent(defaultWhatsAppMessage);

        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );

    });

});


/* =====================================================
   MOBILE MENU
   Matches:
   .menu-toggle
   .nav
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


    /* Close menu after clicking any navigation link */

    const navLinks =
        navigation.querySelectorAll("a");

    navLinks.forEach(function (link) {

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

const phoneLinks =
    document.querySelectorAll("[data-phone]");

phoneLinks.forEach(function (link) {

    link.href =
        "tel:" + PHONE_NUMBER;

});


/* =====================================================
   EMAIL LINKS
   ===================================================== */

const emailLinks =
    document.querySelectorAll("[data-email]");

emailLinks.forEach(function (link) {

    link.href =
        "mailto:" + EMAIL_ADDRESS;

});


/* =====================================================
   GALLERY LIGHTBOX
   Matches current HTML:
   .gallery-item
   #galleryLightbox
   #lightboxImage
   #lightboxTitle
   .gallery-close
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


if (
    galleryItems.length &&
    lightbox &&
    lightboxImage &&
    lightboxTitle
) {

    galleryItems.forEach(function (item) {

        item.addEventListener("click", function () {

            const image =
                item.getAttribute("data-image");

            const title =
                item.getAttribute("data-title");


            if (!image) {
                return;
            }


            lightboxImage.src = image;

            lightboxImage.alt =
                title || "ভূমি বন্ধু গ্যালারি";


            lightboxTitle.textContent =
                title || "";


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


    /* Click outside image */

    lightbox.addEventListener(
        "click",
        function (event) {

            if (event.target === lightbox) {

                closeLightbox();

            }

        }
    );


    /* ESC key */

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
   QUERY FORM
   Sends complete form information to WhatsApp
   ===================================================== */

const queryForm =
    document.getElementById("queryForm");


if (queryForm) {

    queryForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* -----------------------------------------
               Get form values
               ----------------------------------------- */

            const name =
                document.getElementById("name")?.value.trim() || "";

            const mobile =
                document.getElementById("mobile")?.value.trim() || "";

            const service =
                document.getElementById("service")?.value.trim() || "";

            const district =
                document.getElementById("district
```

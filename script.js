```javascript
document.addEventListener("DOMContentLoaded", function () {

    /* WhatsApp number */
    const whatsapp = "918370833510";

    /* Phone & Email */
    const phone = "+918370833510";
    const email = "officework.bolpur@gmail.com";


    /* =========================
       WhatsApp Buttons
       ========================= */

    document.querySelectorAll("[data-wa]").forEach(function (btn) {

        btn.addEventListener("click", function (e) {
            e.preventDefault();

            const message =
                "নমস্কার, আমি ভূমি বন্ধু-এর পরিষেবা সম্পর্কে জানতে চাই।";

            window.open(
                "https://wa.me/" +
                whatsapp +
                "?text=" +
                encodeURIComponent(message),
                "_blank"
            );
        });

    });


    /* =========================
       Mobile Menu
       ========================= */

    const menu = document.querySelector(".menu");
    const nav = document.querySelector("nav");

    if (menu && nav) {

        menu.addEventListener("click", function () {
            nav.classList.toggle("open");
        });

        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("open");
            });
        });

    }


    /* =========================
       Phone
       ========================= */

    document.querySelectorAll("[data-phone]").forEach(function (link) {
        link.href = "tel:" + phone;
    });

    document.querySelectorAll("[data-phone-text]").forEach(function (text) {
        text.textContent = "+91 8370833510";
    });


    /* =========================
       Email
       ========================= */

    document.querySelectorAll("[data-email]").forEach(function (link) {
        link.href = "mailto:" + email;
    });

    document.querySelectorAll("[data-email-text]").forEach(function (text) {
        text.textContent = email;
    });

});
```

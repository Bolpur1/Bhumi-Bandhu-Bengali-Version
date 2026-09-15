/* =========================================================
   BHUMI BANDHU - MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   1. WHATSAPP CONFIGURATION
   =========================================================
   এখানে আপনার WhatsApp নম্বর দিন।

   উদাহরণ:
   919876543210

   + চিহ্ন দেবেন না
   space দেবেন না
   শুরুতে 0 দেবেন না
   ========================================================= */

const BB_CONFIG = {
    whatsapp: "919XXXXXXXXX"
};


/* =========================================================
   2. PAGE LOAD
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       3. WHATSAPP BUTTONS
       ===================================================== */

    document.querySelectorAll("[data-wa]").forEach(function (button) {

        button.addEventListener("click", function (e) {

            e.preventDefault();

            const number = BB_CONFIG.whatsapp;

            if (!number || number.includes("X")) {
                alert("অনুগ্রহ করে প্রথমে script.js ফাইলে সঠিক WhatsApp নম্বর দিন।");
                return;
            }

            const url = "https://wa.me/" + number;

            window.open(url, "_blank");
        });

    });


    /* =====================================================
       4. QUERY FORM
       ===================================================== */

    const form = document.getElementById("queryForm");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const d = new FormData(form);

            /* ---------------------------------------------
               Mobile Number
               --------------------------------------------- */

            const mobile = String(
                d.get("mobile") || ""
            ).replace(/\D/g, "");


            /* ---------------------------------------------
               Mobile Number Validation
               --------------------------------------------- */

            if (!/^[6-9]\d{9}$/.test(mobile)) {

                alert(
                    "দয়া করে সঠিক ১০ সংখ্যার মোবাইল নম্বর দিন।"
                );

                return;
            }


            /* ---------------------------------------------
               WhatsApp Number Check
               --------------------------------------------- */

            if (
                !BB_CONFIG.whatsapp ||
                BB_CONFIG.whatsapp.includes("X")
            ) {

                alert(
                    "প্রথমে script.js ফাইলে আপনার WhatsApp নম্বর দিন।"
                );

                return;
            }


            /* =================================================
               5. WHATSAPP MESSAGE
               ================================================= */

            const message =
`*ভূমি বন্ধু — নতুন কুয়েরি*
━━━━━━━━━━━━━━━━━━━━

*নাম:* ${d.get("name") || "দেওয়া হয়নি"}

*মোবাইল:* ${mobile}

*পরিষেবা:* ${d.get("service") || "দেওয়া হয়নি"}

*জেলা:* ${d.get("district") || "দেওয়া হয়নি"}

*মৌজা:* ${d.get("mouza") || "দেওয়া হয়নি"}

*দাগ নম্বর:* ${d.get("dag") || "দেওয়া হয়নি"}

*খতিয়ান নম্বর:* ${d.get("khatian") || "দেওয়া হয়নি"}

*বিস্তারিত:*
${d.get("details") || "দেওয়া হয়নি"}

━━━━━━━━━━━━━━━━━━━━
*Bhumi Bandhu*
Land & Property Assistance`;


            /* =================================================
               6. OPEN WHATSAPP
               ================================================= */

            const whatsappURL =
                "https://wa.me/" +
                BB_CONFIG.whatsapp +
                "?text=" +
                encodeURIComponent(message);


            window.open(
                whatsappURL,
                "_blank"
            );

        });

    }


    /* =====================================================
       7. GALLERY LIGHTBOX
       ===================================================== */

    const box = document.getElementById("galleryLightbox");

    const image = document.getElementById("lightboxImage");

    const title = document.getElementById("lightboxTitle");


    /* ---------------------------------------------
       Gallery exists?
       --------------------------------------------- */

    if (box && image && title) {

        /* -----------------------------------------
           Open Gallery Image
           ----------------------------------------- */

        document
            .querySelectorAll(".gallery-item")
            .forEach(function (item) {

                item.addEventListener(
                    "click",
                    function () {

                        image.src =
                            item.dataset.image;

                        title.textContent =
                            item.dataset.title;

                        box.classList.add("open");

                    }
                );

            });


        /* -----------------------------------------
           Close Button
           ----------------------------------------- */

        const closeButton =
            document.querySelector(".gallery-close");


        if (closeButton) {

            closeButton.addEventListener(
                "click",
                function () {

                    box.classList.remove("open");

                }
            );

        }


        /* -----------------------------------------
           Click Outside Image = Close
           ----------------------------------------- */

        box.addEventListener(
            "click",
            function (e) {

                if (e.target === box) {

                    box.classList.remove("open");

                }

            }
        );


        /* -----------------------------------------
           ESC Key = Close
           ----------------------------------------- */

        document.addEventListener(
            "keydown",
            function (e) {

                if (e.key === "Escape") {

                    box.classList.remove("open");

                }

            }
        );

    }


    /* =====================================================
       8. MOBILE MENU
       ===================================================== */

    const menuButton =
        document.querySelector(".menu-toggle");

    const navigation =
        document.querySelector(".nav-links");


    if (menuButton && navigation) {

        menuButton.addEventListener(
            "click",
            function () {

                navigation.classList.toggle("active");

            }
        );


        /* ---------------------------------------------
           Close Mobile Menu After Clicking Link
           --------------------------------------------- */

        navigation
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navigation.classList.remove(
                            "active"
                        );

                    }
                );

            });

    }


    /* =====================================================
       9. SMOOTH SCROLL
       ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function (e) {

                    const targetID =
                        this.getAttribute("href");

                    if (
                        targetID &&
                        targetID !== "#"
                    ) {

                        const target =
                            document.querySelector(
                                targetID
                            );

                        if (target) {

                            e.preventDefault();

                            target.scrollIntoView({
                                behavior: "smooth"
                            });

                        }

                    }

                }
            );

        });


});

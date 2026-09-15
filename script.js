/* =========================
   BHUMI BANDHU SETTINGS
   Replace these sample values before publishing.
   WhatsApp: digits only, country code included.
   Example: 919876543210
   ========================= */
const CONFIG = {
  whatsapp: "918370833510",
  phone: "+91 8370833510",
  email: "officework.bolpur@gmail.com"
};

document.querySelectorAll("[data-whatsapp]").forEach(el => {
  el.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent("নমস্কার ভূমি বন্ধু, জমি/সম্পত্তি সংক্রান্ত বিষয়ে আমার সহায়তা প্রয়োজন।")}`;
});

document.querySelectorAll("[data-phone]").forEach(el => {
  el.href = `tel:${CONFIG.phone.replace(/[^0-9+]/g, "")}`;
});
document.querySelectorAll("[data-phone-text]").forEach(el => el.textContent = CONFIG.phone);
document.querySelectorAll("[data-email]").forEach(el => el.href = `mailto:${CONFIG.email}`);
document.querySelectorAll("[data-email-text]").forEach(el => el.textContent = CONFIG.email);
document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));
const form = document.getElementById("queryForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const d = new FormData(form);
        const mobile = String(d.get("mobile") || "").replace(/\D/g, "");

        if (!/^[6-9]\d{9}$/.test(mobile)) {
            alert("দয়া করে সঠিক ১০ সংখ্যার মোবাইল নম্বর দিন।");
            return;
        }

        const t =
`*ভূমি বন্ধু — নতুন কুয়েরি*
━━━━━━━━━━━━━━
*নাম:* ${d.get("name")}
*মোবাইল:* ${mobile}
*পরিষেবা:* ${d.get("service")}
*জেলা:* ${d.get("district") || "দেওয়া হয়নি"}
*মৌজা:* ${d.get("mouza") || "দেওয়া হয়নি"}
*দাগ:* ${d.get("dag") || "দেওয়া হয়নি"}
*খতিয়ান:* ${d.get("khatian") || "দেওয়া হয়নি"}

*বিস্তারিত:*
${d.get("details") || "দেওয়া হয়নি"}`;

        window.open(
            "https://wa.me/" +
            BB_CONFIG.whatsapp +
            "?text=" +
            encodeURIComponent(t),
            "_blank"
        );
    });
}

/* =========================
   BHUMI BANDHU SETTINGS
   Replace these sample values before publishing.
   WhatsApp: digits only, country code included.
   Example: 919876543210
   ========================= */
const CONFIG = {
  whatsapp: "919XXXXXXXXX",
  phone: "+91 9XXXXXXXXX",
  email: "yourmail@example.com"
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

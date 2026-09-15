const CONFIG={
  whatsapp:"919XXXXXXXXX",
  phone:"+91 9XXXXXXXXX",
  email:"yourmail@example.com"
};
document.addEventListener("DOMContentLoaded",()=>{
  const msg=encodeURIComponent("নমস্কার ভূমি বন্ধু, আমার একটি জমি/সম্পত্তি সংক্রান্ত বিষয়ে সহায়তা প্রয়োজন।");
  document.querySelectorAll("[data-wa]").forEach(a=>{
    a.href=`https://wa.me/${CONFIG.whatsapp}?text=${msg}`;
    a.target="_blank"; a.rel="noopener";
  });
  document.querySelectorAll("[data-phone]").forEach(a=>a.href=`tel:${CONFIG.phone.replace(/\s/g,"")}`);
  document.querySelectorAll("[data-email]").forEach(a=>a.href=`mailto:${CONFIG.email}`);
  document.querySelector("[data-phone-text]").textContent=CONFIG.phone;
  document.querySelector("[data-email-text]").textContent=CONFIG.email;
  document.querySelector(".menu").onclick=()=>document.querySelector("nav").classList.toggle("open");
});

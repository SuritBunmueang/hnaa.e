// เปิดภาพใหญ่

const images = document.querySelectorAll(".art-scroll img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img => {

img.addEventListener("click", () => {

lightbox.style.display = "flex";
lightboxImg.src = img.src;

});

});

lightbox.addEventListener("click", () => {

lightbox.style.display = "none";

});


// ปุ่มเลื่อน Gallery

const scrollContainer = document.querySelector(".art-scroll");

const leftBtn = document.querySelector(".scroll-btn.left");
const rightBtn = document.querySelector(".scroll-btn.right");

rightBtn.addEventListener("click", () => {

scrollContainer.scrollBy({
left: 300,
behavior: "smooth"
});

});

leftBtn.addEventListener("click", () => {

scrollContainer.scrollBy({
left: -300,
behavior: "smooth"
});

});

// smooth page transition

document.querySelectorAll("a").forEach(link => {

link.addEventListener("click", function(e){

const href = this.getAttribute("href");

if(href && !href.startsWith("#") && !href.startsWith("http")){

e.preventDefault();

document.body.style.opacity = "0";

setTimeout(()=>{
window.location = href;
},300);

}

});

});
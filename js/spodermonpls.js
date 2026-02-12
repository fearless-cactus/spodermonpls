document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.classList.add("active");
            lightboxImg.src = img.src;
            document.body.classList.add("no-scroll");
        });
    });

    closeBtn.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.classList.remove("active");
        document.body.classList.remove("no-scroll");
    }

});

const images = document.querySelectorAll(".gallery-item img");

images.forEach(img => {

    img.onerror = function () {
        const text = document.createElement("div");
        text.className = "img-error-text";
        text.innerText = "Image not available";

        img.style.visibility = "hidden";
        img.parentElement.appendChild(text);
    };

});


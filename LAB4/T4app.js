document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".gallery img");
    const modal = document.querySelector(".modal");
    const fullImg = document.querySelector(".full-image");

    images.forEach(img => {

        img.addEventListener("click", () => {

            // ใช้รูปเดียวกับที่คลิก
            fullImg.src = img.src;

            modal.classList.add("open");
        });

    });

    modal.addEventListener("click", (e) => {

        if(e.target === modal){
            modal.classList.remove("open");
        }

    });

});

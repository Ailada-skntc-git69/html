const modal = document.getElementById("productModal");
    const closeBtn = document.querySelector(".close-btn");


    document.querySelectorAll(".box2").forEach(card => {
        card.addEventListener("click", () => {
            // ดึงข้อมูลจาก data-* attributes
            const title = card.getAttribute("data-title");
            const price = card.getAttribute("data-price");
            const desc = card.getAttribute("data-desc");
            const img = card.getAttribute("data-img");

            document.getElementById("modalTitle").innerText = title;
            document.getElementById("modalPrice").innerText = price;
            document.getElementById("modalDesc").innerText = desc;
            document.getElementById("modalImg").src = img;

        
            modal.style.display = "flex";
        });
    });


    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

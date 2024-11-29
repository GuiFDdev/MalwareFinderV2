document.addEventListener("DOMContentLoaded", function () {
    const btnsVerMais = document.querySelectorAll(".btn-ver-mais");
    const btnsVoltar = document.querySelectorAll(".btn-voltar");

    btnsVerMais.forEach((btn) => {
        btn.addEventListener("click", function () {
            const card = this.closest(".card");
            const originalContent = card.querySelector(".original-content");
            const hiddenContent = card.querySelector(".hidden-content");

            originalContent.classList.add("d-none");
            hiddenContent.classList.remove("d-none");
            this.classList.add("d-none");
            card.querySelector(".btn-voltar").classList.remove("d-none");
        });
    });

    btnsVoltar.forEach((btn) => {
        btn.addEventListener("click", function () {
            const card = this.closest(".card");
            const originalContent = card.querySelector(".original-content");
            const hiddenContent = card.querySelector(".hidden-content");

            hiddenContent.classList.add("d-none");
            originalContent.classList.remove("d-none");
            this.classList.add("d-none");
            card.querySelector(".btn-ver-mais").classList.remove("d-none");
        });
    });
});
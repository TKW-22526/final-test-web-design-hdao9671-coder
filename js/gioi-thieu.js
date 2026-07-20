// =====================================
// FLOWER SHOP - TRANG GIỚI THIỆU
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    hienThiNoiDung();

});


// =====================================
// HIỆU ỨNG XUẤT HIỆN KHI CUỘN
// =====================================

function hienThiNoiDung() {

    const danhSach = document.querySelectorAll(
        ".about, .service, .team"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.2

    });

    danhSach.forEach(item => {

        item.classList.add("hidden");

        observer.observe(item);

    });

}
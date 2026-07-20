// =====================================
// FLOWER SHOP - LIÊN HỆ
// =====================================

function guiLienHe() {

    const hoTen = document
        .getElementById("hoTen")
        .value
        .trim();

    const email = document
        .getElementById("email")
        .value
        .trim();

    const chuDe = document
        .getElementById("chuDe")
        .value
        .trim();

    const noiDung = document
        .getElementById("noiDung")
        .value
        .trim();


    // =============================
    // KIỂM TRA DỮ LIỆU
    // =============================

    if (
        hoTen === "" ||
        email === "" ||
        chuDe === "" ||
        noiDung === ""
    ) {

        alert("Vui lòng nhập đầy đủ thông tin!");

        return;

    }


    // Kiểm tra email

    const mauEmail =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!mauEmail.test(email)) {

        alert("Email không hợp lệ!");

        return;

    }


    // =============================
    // LƯU DỮ LIỆU
    // =============================

    const lienHe = {

        hoTen: hoTen,

        email: email,

        chuDe: chuDe,

        noiDung: noiDung,

        thoiGian: new Date().toLocaleString("vi-VN")

    };


    let danhSach = JSON.parse(

        localStorage.getItem("lienHe")

    ) || [];


    danhSach.push(lienHe);


    localStorage.setItem(

        "lienHe",

        JSON.stringify(danhSach)

    );


    // =============================
    // THÔNG BÁO
    // =============================

    alert("🎉 Gửi liên hệ thành công!\nFlower Shop sẽ phản hồi bạn sớm nhất.");



    // =============================
    // XÓA FORM
    // =============================

    document.getElementById("formLienHe").reset();

}
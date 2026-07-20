document
    .getElementById("formDangKy")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        const hoTen = document.getElementById("hoTen").value;
        const email = document.getElementById("email").value;
        const sdt = document.getElementById("sdt").value;
        const matKhau = document.getElementById("matKhau").value;
        const nhapLai = document.getElementById("nhapLai").value;


        if (matKhau !== nhapLai) {
            alert("Mật khẩu nhập lại không đúng!");
            return;
        }


        const taiKhoan = {
            hoTen,
            email,
            sdt,
            matKhau
        };


        localStorage.setItem(
            "taiKhoan",
            JSON.stringify(taiKhoan)
        );


        alert("Đăng ký thành công!");

        window.location.href = "dang-nhap.html";

    });
// =====================================
// FLOWER SHOP - THANH TOÁN
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    hienThiSanPham();

});


// =====================================
// HIỂN THỊ SẢN PHẨM MUA NGAY
// =====================================

function hienThiSanPham() {

    const maHoa = localStorage.getItem("muaNgay");

    if (!maHoa) {

        document.querySelector(".thanh-toan-box").innerHTML =

            "<h2>Không có sản phẩm để thanh toán!</h2>";

        return;

    }

    const hoa = danhSachHoa.find(item => item.ma == maHoa);

    if (!hoa) return;

    document.getElementById("anhHoa").src = hoa.hinh;

    document.getElementById("tenHoa").innerHTML = hoa.ten;

    const giaSauGiam =
        hoa.gia - (hoa.gia * hoa.giamGia / 100);

    document.getElementById("giaHoa").innerHTML =

        `
        <span class="gia-cu">

            ${doiTien(hoa.gia)}

        </span>

        <br>

        <span class="gia-moi">

            ${doiTien(giaSauGiam)}

        </span>
        `;

}



// =====================================
// ĐẶT HÀNG
// =====================================

function datHang() {

    const hoTen = document.getElementById("hoTen").value.trim();

    const sdt = document.getElementById("sdt").value.trim();

    const diaChi = document.getElementById("diaChi").value.trim();

    if (hoTen == "" || sdt == "" || diaChi == "") {

        alert("Vui lòng nhập đầy đủ thông tin!");

        return;

    }

    alert(

        "🎉 Đặt hàng thành công!\n\n" +

        "Cảm ơn " + hoTen +

        " đã mua hoa tại Flower Shop."

    );

    localStorage.removeItem("muaNgay");

    window.location.href = "../index.html";

}



// =====================================
// ĐỔI ĐỊNH DẠNG TIỀN
// =====================================

function doiTien(gia) {

    return gia.toLocaleString("vi-VN") + " VNĐ";

}
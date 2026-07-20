// =====================================
// FLOWER SHOP - THANH TOÁN
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    hienThiSanPham();

});

// =====================================
// HIỂN THỊ SẢN PHẨM THANH TOÁN
// =====================================

function hienThiSanPham() {

    const khung = document.getElementById("sanPhamThanhToan");

    let html = "";

    let tongTien = 0;

    // ==========================
    // THANH TOÁN TỪ GIỎ HÀNG
    // ==========================

    if (localStorage.getItem("thanhToanGioHang")) {

        let gioHang = JSON.parse(
            localStorage.getItem("gioHang")
        ) || [];

        if (gioHang.length == 0) {

            khung.innerHTML = "<h3>Giỏ hàng đang trống!</h3>";

            document.getElementById("tongTien").innerHTML = "0 VNĐ";

            return;

        }

        gioHang.forEach(hoa => {

            let gia = hoa.gia - hoa.gia * hoa.giamGia / 100;

            tongTien += gia * hoa.soLuong;

            html += `

            <div class="item-thanh-toan">

                <img src="${hoa.hinh}" alt="${hoa.ten}">

                <div>

                    <h3>${hoa.ten}</h3>

                    <p>Đơn giá: ${doiTien(gia)}</p>

                    <p>Số lượng: ${hoa.soLuong}</p>

                    <p><b>Thành tiền:
                    ${doiTien(gia * hoa.soLuong)}</b></p>

                </div>

            </div>

            `;

        });

    }

    // ==========================
    // MUA NGAY
    // ==========================

    else {

        const maHoa = localStorage.getItem("muaNgay");

        const soLuong = parseInt(
            localStorage.getItem("soLuongMuaNgay")
        ) || 1;

        if (!maHoa) {

            khung.innerHTML =
                "<h3>Không có sản phẩm để thanh toán!</h3>";

            return;

        }

        const hoa = danhSachHoa.find(
            item => item.ma == maHoa
        );

        if (!hoa) return;

        let gia = hoa.gia - hoa.gia * hoa.giamGia / 100;

        tongTien = gia * soLuong;

        html = `

        <div class="item-thanh-toan">

            <img src="${hoa.hinh}" alt="${hoa.ten}">

            <div>

                <h3>${hoa.ten}</h3>

                <p>Đơn giá: ${doiTien(gia)}</p>

                <p>Số lượng: ${soLuong}</p>

            </div>

        </div>

        `;

    }

    khung.innerHTML = html;

    document.getElementById("tongTien").innerHTML =
        doiTien(tongTien);

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

        " đã mua hàng tại Flower Shop."

    );

    localStorage.removeItem("muaNgay");
    localStorage.removeItem("soLuongMuaNgay");
    localStorage.removeItem("thanhToanGioHang");
    localStorage.removeItem("gioHang");

    window.location.href = "../index.html";

}

// =====================================
// ĐỊNH DẠNG TIỀN
// =====================================

function doiTien(gia) {

    return gia.toLocaleString("vi-VN") + " VNĐ";

}
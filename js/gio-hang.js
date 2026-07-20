// =====================================
// FLOWER SHOP - GIỎ HÀNG
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    hienThiGioHang();

});

// =====================================
// HIỂN THỊ GIỎ HÀNG
// =====================================

function hienThiGioHang() {

    let gioHang = JSON.parse(

        localStorage.getItem("gioHang")

    ) || [];

    const khung = document.getElementById("danhSachGioHang");

    const tongTien = document.getElementById("tongTien");

    if (gioHang.length === 0) {

        khung.innerHTML = `

        <h2 style="text-align:center">

            Giỏ hàng đang trống

        </h2>

        `;

        tongTien.innerHTML = "0 VNĐ";

        return;

    }

    let html = "";

    let tong = 0;

    gioHang.forEach((hoa, index) => {

        let giaSauGiam =

            hoa.gia -

            (hoa.gia * hoa.giamGia / 100);

        tong += giaSauGiam * hoa.soLuong;

        html += `

        <div class="item-cart">

            <img src="${hoa.hinh}" alt="${hoa.ten}">

            <div class="cart-info">

                <h3>${hoa.ten}</h3>

                <p>

                    Giá:
                    ${giaSauGiam.toLocaleString("vi-VN")} VNĐ

                </p>

                <div class="so-luong">

                    <button onclick="giamSoLuong(${index})">

                        -

                    </button>

                    <span>

                        ${hoa.soLuong}

                    </span>

                    <button onclick="tangSoLuong(${index})">

                        +

                    </button>

                </div>

            </div>

            <button
                class="btn-xoa"
                onclick="xoaSanPham(${index})">

                Xóa

            </button>

        </div>

        `;

    });

    khung.innerHTML = html;

    tongTien.innerHTML =

        tong.toLocaleString("vi-VN") + " VNĐ";

}

// =====================================
// TĂNG SỐ LƯỢNG
// =====================================

function tangSoLuong(index) {

    let gioHang = JSON.parse(

        localStorage.getItem("gioHang")

    ) || [];

    gioHang[index].soLuong++;

    localStorage.setItem(

        "gioHang",

        JSON.stringify(gioHang)

    );

    hienThiGioHang();

}

// =====================================
// GIẢM SỐ LƯỢNG
// =====================================

function giamSoLuong(index) {

    let gioHang = JSON.parse(

        localStorage.getItem("gioHang")

    ) || [];

    if (gioHang[index].soLuong > 1) {

        gioHang[index].soLuong--;

    } else {

        gioHang.splice(index, 1);

    }

    localStorage.setItem(

        "gioHang",

        JSON.stringify(gioHang)

    );

    hienThiGioHang();

}

// =====================================
// XÓA SẢN PHẨM
// =====================================

function xoaSanPham(index) {

    let gioHang = JSON.parse(

        localStorage.getItem("gioHang")

    ) || [];

    if (confirm("Bạn có muốn xóa sản phẩm này không?")) {

        gioHang.splice(index, 1);

        localStorage.setItem(

            "gioHang",

            JSON.stringify(gioHang)

        );

        hienThiGioHang();

    }

}

// =====================================
// THANH TOÁN
// =====================================

function thanhToan(){

    let gioHang = JSON.parse(
        localStorage.getItem("gioHang")
    ) || [];

    if(gioHang.length == 0){

        alert("Giỏ hàng đang trống!");

        return;

    }

    localStorage.setItem(
        "thanhToanGioHang",
        "true"
    );

    localStorage.removeItem("muaNgay");

    window.location.href = "thanh-toan.html";

}
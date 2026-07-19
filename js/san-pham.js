// =====================================
// FLOWER SHOP - TRANG SẢN PHẨM
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    hienThiSanPham(danhSachHoa);

});

// =====================================
// HIỂN THỊ DANH SÁCH SẢN PHẨM
// =====================================

function hienThiSanPham(ds){

    const khung = document.getElementById("danhSachSanPham");

    if(!khung) return;

    let html = "";

    ds.forEach((hoa)=>{

        html += `

        <div class="product">

            <img src="${hoa.hinh}" alt="${hoa.ten}">

            <div class="product-content">

                <h3>${hoa.ten}</h3>

                <p class="price">

                    ${hoa.gia.toLocaleString()}đ

                </p>

                <p class="sale">

                    Giảm ${hoa.giamGia}%

                </p>

                <button onclick="xemChiTiet('${hoa.ma}')">

                    Xem chi tiết

                </button>

                <button onclick="themGioHang('${hoa.ma}')">

                    Thêm giỏ hàng

                </button>

            </div>

        </div>

        `;

    });

    khung.innerHTML = html;

}

// =====================================
// TÌM KIẾM SẢN PHẨM
// =====================================

function timKiemSanPham(){

    const tuKhoa = document
        .getElementById("txtTimKiem")
        .value
        .toLowerCase();

    const ketQua = danhSachHoa.filter(hoa =>

        hoa.ten.toLowerCase().includes(tuKhoa)

    );

    hienThiSanPham(ketQua);

}

// =====================================
// LỌC THEO DANH MỤC
// =====================================

function locDanhMuc(danhMuc){

    const ketQua = danhSachHoa.filter(hoa =>

        hoa.danhMuc === danhMuc

    );

    hienThiSanPham(ketQua);

}

// =====================================
// XEM TẤT CẢ SẢN PHẨM
// =====================================

function xemTatCa(){

    document.getElementById("txtTimKiem").value = "";

    hienThiSanPham(danhSachHoa);

}

// =====================================
// XEM CHI TIẾT
// =====================================

function xemChiTiet(ma){

    window.location.href =

    "chi-tiet.html?ma=" + ma;

}

// =====================================
// THÊM GIỎ HÀNG
// =====================================

function themGioHang(ma){

    const hoa = danhSachHoa.find(item =>

        item.ma === ma

    );

    let gioHang = JSON.parse(

        localStorage.getItem("gioHang")

    ) || [];

    const viTri = gioHang.findIndex(item =>

        item.ma === ma

    );

    if(viTri >= 0){

        gioHang[viTri].soLuong++;

    }else{

        hoa.soLuong = 1;

        gioHang.push(hoa);

    }

    localStorage.setItem(

        "gioHang",

        JSON.stringify(gioHang)

    );

    alert("Đã thêm \"" + hoa.ten + "\" vào giỏ hàng!");

}
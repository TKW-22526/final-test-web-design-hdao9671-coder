// =====================================
// FLOWER SHOP - CHI TIẾT SẢN PHẨM
// =====================================


document.addEventListener("DOMContentLoaded",()=>{


    hienThiChiTiet();


});




// HIỂN THỊ THÔNG TIN

function hienThiChiTiet(){


    let url = 
    new URLSearchParams(
        window.location.search
    );


    let maHoa = url.get("ma");



    let hoa = danhSachHoa.find(

        item => item.ma == maHoa

    );



    if(!hoa){

        document.querySelector(".chi-tiet").innerHTML =
        `
        <h2>Không tìm thấy sản phẩm</h2>
        `;

        return;

    }





    // hình ảnh

    document.getElementById("anhSP").src =
    hoa.hinh;



    // tên

    document.getElementById("tenSP").innerHTML =
    hoa.ten;




    // danh mục

    document.getElementById("danhMuc").innerHTML =

    "Danh mục: " + hoa.danhMuc;




    // giá

    let giaSauGiam =

    hoa.gia -
    (
        hoa.gia *
        hoa.giamGia /
        100
    );



    document.getElementById("giaSP").innerHTML =

    `

    <p class="gia-cu">

    Giá gốc:
    ${formatGia(hoa.gia)}

    </p>



    <p class="giam">

    Giảm giá:
    ${hoa.giamGia}%

    </p>



    <h2 class="gia-moi">

    ${formatGia(giaSauGiam)}

    </h2>


    `;





    // mô tả


    document.getElementById("moTa").innerHTML =

    `

    Sản phẩm ${hoa.ten} thuộc danh mục 
    ${hoa.danhMuc}. 
    Hoa được lựa chọn và thiết kế 
    tinh tế, phù hợp để làm quà tặng 
    trong các dịp đặc biệt.


    `;


}




// ĐỊNH DẠNG TIỀN

function formatGia(gia){

    return gia.toLocaleString("vi-VN")
    +" VNĐ";

}
// ================================
// THÊM GIỎ HÀNG
// ================================
function themGioHang(){

    const maHoa = new URLSearchParams(
        window.location.search
    ).get("ma");

    const hoa = danhSachHoa.find(
        item => item.ma == maHoa
    );

    const soLuong = parseInt(
        document.getElementById("soLuong").value
    ) || 1;

    let gioHang = JSON.parse(
        localStorage.getItem("gioHang")
    ) || [];

    const viTri = gioHang.findIndex(
        item => item.ma == hoa.ma
    );

    if(viTri >= 0){

        gioHang[viTri].soLuong += soLuong;

    }else{

        gioHang.push({

            ma: hoa.ma,
            ten: hoa.ten,
            gia: hoa.gia,
            giamGia: hoa.giamGia,
            hinh: hoa.hinh,
            soLuong: soLuong

        });

    }

    localStorage.setItem(
        "gioHang",
        JSON.stringify(gioHang)
    );

    alert("Đã thêm vào giỏ hàng!");

}

// ================================
// MUA NGAY
// ================================
function muaNgay(){

    const maHoa = new URLSearchParams(
        window.location.search
    ).get("ma");

    const soLuong = parseInt(
        document.getElementById("soLuong").value
    );

    localStorage.setItem("muaNgay", maHoa);

    localStorage.setItem("soLuongMuaNgay", soLuong);

    localStorage.removeItem("thanhToanGioHang");

    window.location.href = "thanh-toan.html";


}
// ================================
// TĂNG SỐ LƯỢNG
// ================================

function tangSoLuong(){

    const input = document.getElementById("soLuong");

    input.value = parseInt(input.value) + 1;

}

// ================================
// GIẢM SỐ LƯỢNG
// ================================

function giamSoLuong(){

    const input = document.getElementById("soLuong");

    if(parseInt(input.value) > 1){

        input.value = parseInt(input.value) - 1;

    }

}
function quayLaiSanPham(){

    let ma = localStorage.getItem("sanPhamVuaXem");

    if(ma){

        window.location.href = "san-pham.html#" + ma;

    }else{

        window.location.href = "san-pham.html";

    }

}
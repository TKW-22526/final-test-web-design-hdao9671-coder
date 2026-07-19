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
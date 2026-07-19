// =====================================
// HIỂN THỊ SẢN PHẨM NỔI BẬT
// =====================================

function hienThiSanPhamNoiBat(){

    const khuVuc = document.getElementById("sanPhamNoiBat");

    if(!khuVuc) return;


    // lấy 4 sản phẩm đầu tiên
    const sanPham = danhSachHoa.slice(0,4);


    khuVuc.innerHTML = "";


    sanPham.forEach(hoa => {


        let giaSauGiam = hoa.gia - (hoa.gia * hoa.giamGia / 100);


        khuVuc.innerHTML += `

        <div class="product-card">

            <img src="${hoa.hinh}" alt="${hoa.ten}">


            <h3>
                ${hoa.ten}
            </h3>


            <p class="price">
                ${giaSauGiam.toLocaleString()} VNĐ
            </p>


            <p class="sale">
                Giảm ${hoa.giamGia}%
            </p>


            <button>
                Xem chi tiết
            </button>

        </div>

        `;


    });

}



// chạy khi mở trang

document.addEventListener("DOMContentLoaded",()=>{

    hienThiSanPhamNoiBat();

});
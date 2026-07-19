// =====================================
// FLOWER SHOP - TRANG CHỦ
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    chayBanner();

    hienThiSanPham();

});

// =====================================
// SLIDESHOW BANNER
// =====================================

const banner = [

    "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1600",

    "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=1600",

    "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=1600"

];

let indexBanner = 0;

function chayBanner(){

    const img = document.getElementById("bannerImage");

    if(!img) return;

    setInterval(()=>{

        indexBanner++;

        if(indexBanner >= banner.length){

            indexBanner = 0;

        }

        img.src = banner[indexBanner];

    },3000);

}

// =====================================
// HIỂN THỊ SẢN PHẨM
// =====================================

function hienThiSanPham(){

    const khung = document.getElementById("sanPhamNoiBat");

    if(!khung) return;

    let html = "";

    danhSachHoa.forEach((hoa,index)=>{

        html += `

        <div class="product">

            <img src="${hoa.hinh}">

            <div class="product-content">

                <h3>${hoa.ten}</h3>

                <p class="price">

                    ${hoa.gia.toLocaleString()}đ

                </p>

                <p class="sale">

                    Giảm ${hoa.giamGia}%

                </p>

                <button onclick="xemChiTiet(${index})">

                    Xem chi tiết

                </button>

                <button onclick="themGioHang(${index})">

                    Thêm giỏ hàng

                </button>

            </div>

        </div>

        `;

    });

    khung.innerHTML = html;

}

// =====================================
// XEM CHI TIẾT
// =====================================

function xemChiTiet(index){

    alert(

        "Tên hoa: " + danhSachHoa[index].ten +

        "\nGiá: " +

        danhSachHoa[index].gia.toLocaleString() +

        "đ"

    );

}

// =====================================
// THÊM GIỎ HÀNG
// =====================================

function themGioHang(index){

    let gioHang = JSON.parse(

        localStorage.getItem("gioHang")

    ) || [];

    gioHang.push(danhSachHoa[index]);

    localStorage.setItem(

        "gioHang",

        JSON.stringify(gioHang)

    );

    alert("Đã thêm vào giỏ hàng!");

}
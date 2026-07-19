// =====================================
// FLOWER SHOP - DỮ LIỆU SẢN PHẨM
// =====================================

const danhSachHoa = [

    // ================= HOA SINH NHẬT =================

    {
        ma:"H001",
        ten:"Bó Hoa Cẩm Chướng Hồng",
        gia:350000,
        giamGia:10,
        danhMuc:"Hoa Sinh Nhật",
        hinh:"https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600"
    },

    {
        ma:"H002",
        ten:"Hoa Hướng Dương",
        gia:420000,
        giamGia:15,
        danhMuc:"Hoa Sinh Nhật",
        hinh:"https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=600"
    },

    {
        ma:"H003",
        ten:"Bó Hoa Đồng Tiền Mix",
        gia:390000,
        giamGia:5,
        danhMuc:"Hoa Sinh Nhật",
        hinh:"https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=600"
    },

    {
        ma:"H004",
        ten:"Hoa Cẩm Tú Cầu",
        gia:520000,
        giamGia:20,
        danhMuc:"Hoa Sinh Nhật",
        hinh:"https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600"
    },

    {
        ma:"H005",
        ten:"Bó Hoa Gerbera",
        gia:380000,
        giamGia:10,
        danhMuc:"Hoa Sinh Nhật",
        hinh:"https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=600"
    },



    // ================= HOA TÌNH YÊU =================

    {
        ma:"H006",
        ten:"Hoa Hồng Đỏ",
        gia:650000,
        giamGia:10,
        danhMuc:"Hoa Tình Yêu",
        hinh:"https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600"
    },

    {
        ma:"H007",
        ten:"Hoa Tulip",
        gia:580000,
        giamGia:15,
        danhMuc:"Hoa Tình Yêu",
        hinh:"https://images.unsplash.com/photo-1455656678494-4d1b5f3e7ad1?w=600"
    },

    {
        ma:"H008",
        ten:"Bó Hoa Mao Lương",
        gia:470000,
        giamGia:5,
        danhMuc:"Hoa Tình Yêu",
        hinh:"https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600"
    },

    {
        ma:"H009",
        ten:"Bó Hoa Mẫu Đơn Hồng",
        gia:620000,
        giamGia:20,
        danhMuc:"Hoa Tình Yêu",
        hinh:"https://images.unsplash.com/photo-1526397751294-331021109fbd?w=600"
    },

    {
        ma:"H010",
        ten:"Bó Hoa Lavender",
        gia:450000,
        giamGia:10,
        danhMuc:"Hoa Tình Yêu",
        hinh:"https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600"
    },



    // ================= HOA CƯỚI =================

    {
        ma:"H011",
        ten:"Bó Hoa Calla Lily",
        gia:550000,
        giamGia:10,
        danhMuc:"Hoa Cưới",
        hinh:"https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=600"
    },

    {
        ma:"H012",
        ten:"Bó Hoa Lan Hồ Điệp",
        gia:720000,
        giamGia:15,
        danhMuc:"Hoa Cưới",
        hinh:"https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=600"
    },

    {
        ma:"H013",
        ten:"Bó Hoa Baby Trắng",
        gia:390000,
        giamGia:5,
        danhMuc:"Hoa Cưới",
        hinh:"https://images.unsplash.com/photo-1526397751294-331021109fbd?w=600"
    },

    {
        ma:"H014",
        ten:"Bó Hoa Cẩm Tú Cầu Trắng",
        gia:540000,
        giamGia:20,
        danhMuc:"Hoa Cưới",
        hinh:"https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600"
    },

    {
        ma:"H015",
        ten:"Bó Hoa Freesia",
        gia:510000,
        giamGia:10,
        danhMuc:"Hoa Cưới",
        hinh:"https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=600"
    },



    // ================= HOA KHAI TRƯƠNG =================

    {
        ma:"H016",
        ten:"Kệ Hoa Thiên Điểu",
        gia:950000,
        giamGia:15,
        danhMuc:"Hoa Khai Trương",
        hinh:"https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600"
    },

    {
        ma:"H017",
        ten:"Kệ Hoa Lan Vàng",
        gia:1200000,
        giamGia:10,
        danhMuc:"Hoa Khai Trương",
        hinh:"https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=600"
    },

    {
        ma:"H018",
        ten:"Kệ Hoa Đồng Tiền Đỏ",
        gia:880000,
        giamGia:5,
        danhMuc:"Hoa Khai Trương",
        hinh:"https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=600"
    },

    {
        ma:"H019",
        ten:"Kệ Hoa Hồng Cam",
        gia:990000,
        giamGia:20,
        danhMuc:"Hoa Khai Trương",
        hinh:"https://images.unsplash.com/photo-1455656678494-4d1b5f3e7ad1?w=600"
    },

    {
        ma:"H020",
        ten:"Kệ Hoa Cúc Mẫu Đơn",
        gia:930000,
        giamGia:10,
        danhMuc:"Hoa Khai Trương",
        hinh:"https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600"
    },



    // ================= HOA CHIA BUỒN =================

    {
        ma:"H021",
        ten:"Kệ Hoa Cúc Trắng",
        gia:700000,
        giamGia:10,
        danhMuc:"Hoa Chia Buồn",
        hinh:"https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=600"
    },

    {
        ma:"H022",
        ten:"Kệ Hoa Ly Trắng",
        gia:820000,
        giamGia:15,
        danhMuc:"Hoa Chia Buồn",
        hinh:"https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600"
    },

    {
        ma:"H023",
        ten:"Kệ Hoa Sen Trắng",
        gia:780000,
        giamGia:5,
        danhMuc:"Hoa Chia Buồn",
        hinh:"https://images.unsplash.com/photo-1526397751294-331021109fbd?w=600"
    },

    {
        ma:"H024",
        ten:"Kệ Hoa Lan Trắng",
        gia:950000,
        giamGia:20,
        danhMuc:"Hoa Chia Buồn",
        hinh:"https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=600"
    },

    {
        ma:"H025",
        ten:"Kệ Hoa Huệ Trắng",
        gia:860000,
        giamGia:10,
        danhMuc:"Hoa Chia Buồn",
        hinh:"https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600"
    }

];
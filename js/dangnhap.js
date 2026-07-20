document
.getElementById("formLogin")
.addEventListener("submit",function(e){


e.preventDefault();



let email =
document.getElementById("email").value;


let matKhau =
document.getElementById("matKhau").value;



let taiKhoan =
JSON.parse(localStorage.getItem("taiKhoan"));



if(!taiKhoan){

alert("Chưa có tài khoản!");

return;

}



if(
email == taiKhoan.email &&
matKhau == taiKhoan.matKhau
){


alert("Đăng nhập thành công!");



localStorage.setItem(
"dangNhap",
"true"
);



window.location.href="index.html";


}

else{


alert("Email hoặc mật khẩu sai!");

}


});
// Đặt hàng
document.querySelector('.cart button:nth-child(1)').addEventListener('click', function() {
  alert('Đặt hàng thành công!');
});

// Thanh toán và giao hàng
document.querySelector('.cart button:nth-child(2)').addEventListener('click', function() {
  alert('Thanh toán và giao hàng thành công!');
});

// Thêm vào giỏ hàng
var addToCartButtons = document.querySelectorAll('.product button');
for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', function() {
    alert('Sản phẩm đã được thêm vào giỏ hàng!');
  });
}


document.addEventListener('DOMContentLoaded', function() {
  var registerForm = document.getElementById('register-form');
  var loginForm = document.getElementById('login-form');

  // Xử lý sự kiện submit form đăng ký
  registerForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Ngăn chặn submit form mặc định

    // Xử lý logic đăng ký tại đây

    // Điều hướng tới trang sau khi đăng ký thành công
    window.location.href = 'success.html';
  });

  // Xử lý sự kiện submit form đăng nhập
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Ngăn chặn submit form mặc định

    // Xử lý logic đăng nhập tại đây

    // Điều hướng tới trang sau khi đăng nhập thành công
    window.location.href = 'dashboard.html';
  });
});

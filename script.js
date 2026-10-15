// Form minh họa: đề chưa cung cấp server nhận dữ liệu.
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const result = document.getElementById('formResult');
    result.textContent = 'Đã thực hiện gửi form minh họa. Dữ liệu chưa được gửi đến server hoặc lưu lại.';
    result.hidden = false;
});

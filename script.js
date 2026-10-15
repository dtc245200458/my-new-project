const form = document.getElementById('registerForm');
const password = document.getElementById('password');
const confirmation = document.getElementById('confirmPassword');
const result = document.getElementById('result');
function validatePasswords() {
    confirmation.setCustomValidity(confirmation.value !== password.value ? 'Mật khẩu xác nhận chưa khớp.' : '');
}
form.addEventListener('input', () => {
    validatePasswords();
    result.hidden = true;
});
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validatePasswords();
    if (!form.reportValidity()) return;
    result.textContent = 'Thông tin hợp lệ. Đây là thao tác đăng ký minh họa, chưa tạo tài khoản trên server.';
    result.hidden = false;
});

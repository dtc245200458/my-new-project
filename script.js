const form = document.getElementById('registrationForm');
const password = document.getElementById('password');
const confirmation = document.getElementById('confirmPassword');
const result = document.getElementById('result');

function checkPasswords() {
    confirmation.setCustomValidity(
        confirmation.value !== password.value ? 'Mật khẩu xác nhận chưa khớp.' : ''
    );
}

form.addEventListener('input', () => {
    checkPasswords();
    result.hidden = true;
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkPasswords();
    if (!form.reportValidity()) return;
    result.textContent = 'Thông tin hợp lệ. Bạn đã hoàn thành thao tác gửi form minh họa; chưa tạo tài khoản trên server.';
    result.hidden = false;
});

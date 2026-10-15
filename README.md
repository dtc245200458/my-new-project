# Tạo mixins và biến để tối ưu CSS

## Cấu trúc theo đề
- abstracts/_variables.scss: đủ 6 biến với giá trị gốc.
- abstracts/_mixins.scss: button-style($bg-color) và box-style.
- base/_typography.scss: h1 và h2 dùng biến.
- components/_buttons.scss: include button-style.
- components/_cards.scss: include box-style.
- main.scss: tập hợp partials.
- styles-original.css: CSS trước khi tối ưu.
- styles.css, styles.css.map: CSS được biên dịch từ main.scss.
- index.html: trang minh họa.

## Xem và biên dịch
Mở index.html để xem. Sau khi thay đổi SCSS, biên dịch:

    sass main.scss styles.css

Watch:

    sass main.scss styles.css --watch

Trên máy Long có thể dùng cách gọi Sass CLI đã hoạt động:

    node "%APPDATA%\npm\node_modules\sass\sass.js" main.scss styles.css

Ví dụ đổi $primary-color trong abstracts/_variables.scss, biên dịch lại để cập nhật màu nút. Bản nộp giữ nguyên red theo đề.

## Kiểm tra
Đã biên dịch thực tế bằng Dart Sass 1.105.1, so sánh CSS đầu ra với styles-original.css sau khi bỏ khác biệt định dạng; các selector và giá trị giữ nguyên. Chưa kiểm tra trực tiếp trên trình duyệt.

Bài dùng @import để giữ cú pháp biến toàn cục trong mẫu và nhất quán bài trước. Sass hiện cảnh báo deprecation nhưng biên dịch thành công; dự án mới nên dùng @use/@forward.
Nguồn: https://sass-lang.com/documentation/at-rules/import/

## Nộp
Tải nguyên thư mục sass-variables-mixins lên GitHub, giữ tất cả partials và CSS đầu ra. Nộp link trực tiếp đến thư mục bài.

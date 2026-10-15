# Chuyển đổi CSS có sẵn sang SCSS

## File và thư mục
- styles-original.css: CSS ban đầu theo đề.
- main.scss: entry point, import đủ 6 partials theo Bước 5.
- abstracts/_variables.scss: 5 biến màu sắc và bóng đổ.
- abstracts/_mixins.scss: button-style và box-shadow.
- base/_global.scss: body, có property nesting font: { family: ... } để giữ nguyên font-family đầu ra.
- layout/_container.scss: container.
- components/_buttons.scss và _cards.scss: sử dụng mixins.
- styles.css và styles.css.map: kết quả biên dịch Sass.
- index.html: minh họa CSS đầu ra.

## Chạy và biên dịch
Mở index.html để xem bài. Khi chỉnh SCSS cần biên dịch lại:

    sass main.scss styles.css
    sass main.scss styles.css --watch

Trên máy Long, nếu lệnh sass.cmd vẫn không hoạt động, dùng cách đã chạy thành công:

    node "%APPDATA%\npm\node_modules\sass\sass.js" main.scss styles.css

## Lưu ý @import
Bài giữ @import theo mẫu để bám sát đề. Dart Sass từ 1.80.0 đánh dấu @import là deprecated; có thể hiện cảnh báo nhưng Sass 1.105.1 vẫn biên dịch được. Dự án mới nên chuyển sang @use/@forward.
Nguồn: https://sass-lang.com/documentation/at-rules/import/

## Kiểm tra
Biên dịch thực tế bằng Dart Sass 1.105.1 và so sánh CSS đầu ra với CSS ban đầu sau khi bỏ khác biệt định dạng. Không thêm selector hay thay đổi giá trị CSS gốc. Chưa kiểm tra trực quan trên trình duyệt.

## Nộp
Tải toàn bộ thư mục css-to-scss lên GitHub, giữ nguyên các thư mục partials và nộp link trực tiếp đến thư mục bài.

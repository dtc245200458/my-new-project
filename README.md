# Tái cấu trúc Responsive Grid sang Sass

## Chạy
Mở index.html hoặc responsive_grid.htm. Giữ css/styles.css đi kèm; không cần Internet.

## Nguồn
https://github.com/codegym-vn/responsive-grid
Commit gốc ghi trong SOURCE.md. Bản gốc được lưu nguyên nội dung trong original/responsive_grid.htm.

## Tái cấu trúc
- scss/main.scss: entry point dùng @use.
- scss/abstracts/_variables.scss: độ rộng cột, màu và khoảng cách dùng lại.
- scss/abstracts/_mixins.scss: white-column, grid-line cho các nhóm khai báo lặp.
- scss/base/_global.scss: box-sizing.
- scss/layout/_grid.scss: gridwrapper/gridcontent, giữ float theo nguồn.
- scss/layout/_sections.scss: chuyển toàn bộ style nội tuyến sang class inline-N, dùng biến và mixins. Các class này ánh xạ từng nhóm style gốc, ghi lại trong original/inline-styles.json.
- css/styles.css và styles.css.map: kết quả biên dịch thực tế.

Các selector gốc, kích thước, màu, thứ tự hai khai báo background-color và cơ chế float được giữ nguyên. Không thay bằng CSS Grid hay thêm breakpoint mới. Hai lớp mô phỏng lưới với opacity 0.9/0.1 cũng được giữ lại. Không còn style nội tuyến trong bản refactor.

## Biên dịch
    sass scss/main.scss css/styles.css

Watch:
    sass scss/main.scss css/styles.css --watch

Cách gọi trên máy Long nếu sass.cmd chưa hoạt động:
    node "%APPDATA%\npm\node_modules\sass\sass.js" scss/main.scss css/styles.css

## Kiểm tra
Đã biên dịch thực tế bằng Dart Sass 1.105.1. Đã đối chiếu từng nhóm khai báo CSS được biên dịch với CSS trong style và toàn bộ style nội tuyến gốc: khớp giá trị và thứ tự sau khi bỏ khoảng trắng. Chưa kiểm tra trực quan trên trình duyệt.
Để kiểm tra trực quan, mở original/responsive_grid.htm và index.html, so sánh khi thay đổi độ rộng cửa sổ.

## Nộp
Tải nguyên thư mục responsive-grid-sass lên GitHub, gồm scss, css, original và các file liên quan. Nộp link trực tiếp đến thư mục bài, tránh lẫn với bài khác.

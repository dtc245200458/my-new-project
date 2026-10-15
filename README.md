# Tái cấu trúc CSS Landing Page với Sass

## Phạm vi
Long Studio là mẫu Landing Page mới được tạo theo lựa chọn của người học. Đây KHÔNG phải bản khôi phục mẫu thiết kế sẵn của khóa học. Vì chưa có nguồn gốc mẫu khóa học, bài này chưa thể xác nhận đáp ứng tiêu chí giữ nguyên đúng Landing Page cũ nếu người chấm đối chiếu mẫu đó.

Có đủ bốn khu vực: navigation/header, sản phẩm nổi bật, số liệu thống kê và footer. Sản phẩm và số liệu là nội dung giả định phục vụ thiết kế. Hình minh họa được tạo bằng HTML/CSS, không cần ảnh ngoài. Không có chức năng mua hàng.

## Xem bài
- Mở index.html: bản sử dụng CSS được biên dịch từ SCSS.
- Mở original/index.html: bản dùng CSS thuần để đối chiếu.
- Hai trang cùng nội dung và các khai báo CSS. Cặp CSS/SCSS được tạo mới trong bài này, không phải bằng chứng về trình tự chỉnh sửa một bài cũ.

## SCSS
- abstracts/_variables.scss: màu sắc, khoảng cách, bo góc, breakpoint.
- abstracts/_mixins.scss: row, grid và mobile nhận @content.
- _base.scss: quy tắc chung.
- components/_header.scss: navigation và hero.
- components/_products.scss: ba sản phẩm nổi bật.
- components/_statistics.scss: bốn nhóm số liệu.
- components/_footer.scss: footer.
- main.scss: tập hợp module bằng @use.
- Dùng nesting với selector con, &-suffix, pseudo-elements và Media Query.

## Biên dịch
    sass scss/main.scss css/styles.css

Watch:
    sass scss/main.scss css/styles.css --watch

Trên máy Long, nếu sass.cmd không hoạt động:
    node "%APPDATA%\npm\node_modules\sass\sass.js" scss/main.scss css/styles.css

## Kiểm tra
Đã biên dịch thực tế bằng Dart Sass 1.105.1, đối chiếu toàn bộ CSS đầu ra với bản CSS thuần, kiểm tra ID/đích liên kết nội bộ. Chưa kiểm tra trực quan trên trình duyệt.
Mở hai trang và kiểm tra ở 1280px, 768px, 375px. Từ 768px trở xuống, header/sản phẩm/footer xếp dọc, số liệu chia hai cột.

## Nộp bài
Tải nguyên thư mục landing-sass-refactor lên GitHub, giữ các thư mục scss, css và original. Nộp link trực tiếp đến thư mục để người chấm thấy đủ bản SCSS và CSS.

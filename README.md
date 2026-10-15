# Bài tập Bootstrap Grid System

Mở index.html bằng trình duyệt có Internet. Giữ style.css cùng thư mục.

## Nội dung
Header, Bootstrap Navbar có dropdown, Main Content, Sidebar và Footer.
Dùng container, row, col-12, col-md-8/col-md-4 và col-lg-8/col-lg-4.

## Xử lý điểm chưa thống nhất trong đề
- Phần mô tả ghi sidebar chỉ xuất hiện trên màn hình lớn, nhưng yêu cầu cụ thể ghi sidebar nằm dưới nội dung trên mobile. Bài làm theo yêu cầu cụ thể: sidebar vẫn hiển thị và xếp xuống dưới khi chiều rộng dưới 992px.
- Bootstrap col-md-* mặc định chia cột từ 768px, trong khi đề yêu cầu từ 992px. CSS tùy chỉnh ghi đè chiều rộng thành 100% dưới 992px, giữ nguyên tên class col-md-* theo đề. Từ 992px bố cục 8/4.

## Kiểm tra trước khi nộp
1. 1280px và 992px: nội dung chính và sidebar nằm cạnh nhau theo 8/4.
2. 991px, 768px và 375px: sidebar nằm dưới, mỗi phần rộng 12 cột.
3. Thử nút mở/đóng Navbar dưới 992px và dropdown Nội dung.
4. Thử các liên kết đến phần tương ứng trong trang.

Đã kiểm tra cấu trúc HTML, liên kết nội bộ, tham chiếu Bootstrap và khai báo breakpoint trong mã nguồn; chưa kiểm tra trực tiếp trên trình duyệt.

Tải cả thư mục bootstrap-grid-system lên GitHub và nộp link thư mục hoặc repository trên CodeGym.

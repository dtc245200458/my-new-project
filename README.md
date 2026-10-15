# Trang giới thiệu sản phẩm với Bootstrap

## Chạy
Mở index.html bằng trình duyệt có Internet để tải Bootstrap 5.3.3, Bootstrap bundle và Font Awesome 6.5.2. Giữ style.css và images/phone.svg đi kèm.

## Nội dung
Sản phẩm giả định Nova Phone, ảnh SVG tự vẽ; không đưa thông số hay giá thương mại chưa được kiểm chứng.
Tham khảo ý tưởng trang https://www.apple.com/iphone/: hình sản phẩm lớn, tiêu đề nổi bật, CTA và các phần tính năng. Không sao chép toàn bộ giao diện.

## Kỹ thuật
- Bootstrap container, row, col-12, col-md-6 và col-md-4.
- Margin/padding bằng my-4, mb-4, mb-5, py-5, p-4, p-lg-5.
- d-flex, flex-wrap, justify-content-center, align-items-center, gap-3 cho CTA.
- CSS riêng chỉ có display: contents trên phần tử bọc CTA không mang ý nghĩa ngữ nghĩa; các nút trở thành Flex Item của cha.
- Font Awesome cho các tính năng; img-fluid cho ảnh.
- Navbar collapse dưới 992px, các cột nội dung xếp dọc dưới 768px.

## Kiểm tra
Đã kiểm tra cấu trúc HTML, tài nguyên SVG, đích menu/CTA, Grid và display: contents bằng mã nguồn. Chưa kiểm tra trực tiếp trên trình duyệt.
Mở ở desktop và mobile, thử menu, các nút CTA và kiểm tra icon trước khi nộp.

Tải cả thư mục bootstrap-product lên GitHub rồi nộp link thư mục hoặc repository.

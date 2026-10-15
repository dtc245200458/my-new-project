# Trang web tĩnh giới thiệu sách — Mỗi ngày một trang

## Chạy
Mở index.html. Bootstrap 5.3.3 CSS và JS bundle đã được đóng gói trong vendor nên trang chạy offline.

## Các phần theo đề
Header (Navbar + Hero), Book Overview, Author, Features, Prices, Download, Reader’s Say, Footer.
- Navbar collapse dưới 992px.
- Grid chia cột trên desktop, xếp dọc trên mobile.
- Download tải file downloads/doc-thu.txt thật, không cần server.
- Các CTA dẫn đến mục có ID thật. Không có nút mua hàng giả hoặc thu thập dữ liệu.
- Ảnh bìa SVG tự vẽ, nhân vật tác giả thể hiện bằng monogram LS.
- Sách, thương hiệu, tác giả, giá và nhận xét độc giả đều là nội dung giả định được ghi rõ trên giao diện.

## Tham khảo
Đã đọc mã nguồn https://github.com/hoanv7169/bootstrap-demo để tham khảo thứ tự các phần. Bài này viết lại bằng Bootstrap 5.3.3, nội dung và tài nguyên riêng; không sao chép ảnh hoặc nội dung thương mại.

## Kiểm tra
Đã kiểm tra cấu trúc HTML, các phần bắt buộc, ID duy nhất, đích liên kết nội bộ, file đọc thử, SVG, Bootstrap local và cú pháp JS bundle. Chưa kiểm tra trực tiếp trên trình duyệt.
Trước khi nộp: mở ở 1280px, 768px, 375px; thử menu mobile, tất cả CTA và nút tải đọc thử. Kiểm tra không có tràn ngang.

## Nộp
Giải nén, kéo NGUYÊN thư mục book-landing lên GitHub, gồm assets, downloads, vendor. Kiểm tra có book-landing/index.html và book-landing/vendor/bootstrap.min.css trong danh sách upload. Commit rồi nộp link trực tiếp đến thư mục book-landing.

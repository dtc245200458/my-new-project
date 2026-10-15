# Website hoạt hình — bài thực hành

Mở index.html. Giữ toàn bộ thư mục media cùng cấp với HTML/CSS/JS.
Không cần cài đặt. Các clip nội bộ chạy offline.

## Đã thực hiện
- Layout bằng div: Header, Head-link, Left Content, Right Content, Footer.
- Header fixed; bố cục co giãn trên PC/tablet/mobile.
- Thẻ video phát clip đầu tiên mặc định, người dùng bấm Play.
- iframe nhúng YouTube khi chọn mục tham khảo.
- Tìm tên có/không dấu, thông báo không có kết quả.
- Sắp xếp mới cập nhật hoặc lượt mở cục bộ; không giả số lượt xem.
- Không chèn banner hoặc mã quảng cáo của website.
- Liên kết hover đổi màu và đậm.
- Clip MP4 tự dựng 1280x720, 12 fps, 8 giây mỗi clip; hình minh họa tự dựng.

## Các yêu cầu chưa đáp ứng hoàn toàn
- Clip nội bộ không có âm thanh/thuyết minh, chỉ có chữ tiếng Việt. Cần bổ sung phim có quyền sử dụng và thuyết minh Việt nếu yêu cầu bắt buộc.
- YouTube tham khảo: Big Buck Bunny, ID aqz-KE-bpKQ, Blender Foundation. Không phải thuyết minh Việt.
- YouTube có thể chèn quảng cáo và tự chọn chất lượng; iframe không đảm bảo không quảng cáo hoặc giới hạn 1080p.
- Chưa có backend hoặc lượt xem toàn hệ thống; lượt mở lưu riêng trên trình duyệt bằng localStorage.
- Không thể cam kết tốc độ phát với mọi thiết bị và mạng.
- Chưa kiểm tra trực quan trong trình duyệt ở môi trường tạo bài.

## Kiểm tra thủ công
1. Giải nén đầy đủ; mở index.html, bấm Play clip đầu.
2. Chọn ba clip nội bộ để kiểm tra phát.
3. Tìm "cay xanh", thử tên không có để kiểm tra trạng thái rỗng.
4. Mở các clip rồi chọn sắp xếp lượt mở.
5. Chọn YouTube, thử nút mở ngoài nếu trình phát nhúng bị chặn.
6. Cuộn trang và thu nhỏ cửa sổ để kiểm tra header và bố cục.

## Nguồn video tham khảo
https://www.youtube.com/watch?v=aqz-KE-bpKQ
Clip/ảnh nội bộ do người tạo bài dựng bằng hình học và chữ; không tái sử dụng phim thương mại.

## GitHub
Tải nguyên thư mục hoat-hinh lên repository hiện có.
Giữ đủ media/*.mp4 và media/*.jpg, không chỉ HTML.
Nộp link thư mục hoat-hinh trên GitHub.

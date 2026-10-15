# Thực hành CSS flex-grow

## Chạy bài
Giữ index.html và style.css trong cùng thư mục, mở index.html bằng trình duyệt.

## Yêu cầu đã triển khai
- Container có display: flex và đúng 5 phần tử con trực tiếp.
- Ô thứ hai có flex-grow: 1, các ô còn lại có flex-grow: 0.
- Các ô cùng flex-basis: 80px để thấy rõ phần không gian dư được ô thứ hai nhận.
- Container rộng 800px (gồm border), giới hạn max-width: 100%.

Khi container đủ rộng 800px: vùng nội dung rộng 796px, bốn gap dùng 40px, tổng cơ sở 5 ô là 400px. Phần dư 356px được cộng vào ô thứ hai, nên ô thứ hai rộng 436px; các ô khác rộng 80px.
flex-grow phân phối phần không gian dư, không trực tiếp chỉ định tỷ lệ kích thước cuối cùng. Khi màn hình hẹp và thiếu không gian, flex-shrink mặc định có thể làm các ô co lại.

## Kiểm tra và nộp
Đã kiểm tra cấu trúc HTML và quy tắc CSS; chưa kiểm tra trực quan trên trình duyệt.
Mở bài trên trình duyệt, kiểm tra ô thứ hai lớn hơn các ô khác ở màn hình rộng và chụp ảnh kết quả thực tế.
Đưa toàn bộ thư mục flex-grow lên GitHub rồi nộp link repository/thư mục và ảnh theo yêu cầu.

# Phân tích và xây dựng cấu trúc Website Template

Website gốc: https://www.python.org/
Ngày quan sát và chụp ảnh: 15/10/2026.
Ảnh minh chứng toàn trang: original-python.jpg, chụp trực tiếp từ trình duyệt, không phải ảnh dựng giao diện.

## Mô tả tổng quan
Trang chủ Python.org có bố cục dọc, nội dung được giới hạn chiều rộng và căn giữa. Phần đầu dùng tông xanh đậm, nhận diện thương hiệu ở bên trái và công cụ tìm kiếm ở bên phải. Bên dưới là menu ngang, một vùng giới thiệu chia hai cột và đoạn giới thiệu ngắn. Phần thân chuyển sang nền sáng, dùng các nhóm thông tin nhiều cột. Cuối trang là hệ thống liên kết phân nhóm và dòng bản quyền.

## Vai trò từng phần
| Phần | Bố trí quan sát được | Vai trò |
| --- | --- | --- |
| Header | Thanh liên kết hệ sinh thái ở trên; nhận diện Python bên trái, Donate và tìm kiếm bên phải; nền xanh | Nhận diện website và cung cấp công cụ truy cập nhanh |
| Navigation Menu | Thanh ngang dưới nhận diện, gồm About, Downloads, Documentation, Community, Success Stories, News, Events | Điều hướng tới các nhóm nội dung chính |
| Content Section | Khối mã minh họa bên trái, giải thích bên phải; dưới đó là 4 cột Get Started, Download, Docs, Jobs; tiếp theo các nhóm tin tức, sự kiện, câu chuyện và ứng dụng chia hai cột; có khối giới thiệu PSF | Làm nổi bật nội dung và phân nhóm tài nguyên |
| Footer | Nền xám sáng có các cột liên kết theo danh mục; phía dưới nền xanh chứa các liên kết phụ và bản quyền | Điều hướng bổ sung và thông tin tổ chức/pháp lý |

## Cách triển khai bản đơn giản
Bản HTML/CSS giữ thứ tự các khu vực, tông xanh, menu ngang, khối giới thiệu hai cột, hàng nội dung bốn cột, các nhóm thông tin hai cột và Footer nhiều cột. Nội dung được viết ngắn bằng tiếng Việt. Header có h1; Navigation có 5 mục; Footer có bản quyền bài thực hành.
Không sao chép đầy đủ nội dung, logo, tìm kiếm hay slideshow của trang gốc vì đề chỉ yêu cầu bố cục cơ bản. Phần đầu dùng tên Python bằng chữ; ví dụ mã nguồn được viết trực tiếp trong HTML.
CSS sử dụng Flexbox cho hàng nhận diện/menu, Grid cho các nhóm nội dung, margin/padding và Media Query để giảm số cột trên màn hình nhỏ.

## Tổ chức file
- index.html: cấu trúc trang, Header/Nav/Main/Footer.
- style.css: toàn bộ bố cục và màu sắc.
- PHAN-TICH.md: bài phân tích.
- original-python.jpg: ảnh chụp thật của website gốc.
- README.md: cách chạy và nộp bài.

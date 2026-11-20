# Klyro

Web tĩnh (HTML/CSS/JS), không cần build. Backend: Google Apps Script (file `Code.gs` đi kèm, KHÔNG đặt trong thư mục web).

## Cấu trúc
- `index.html` — trang "sắp ra mắt" (tự chuyển sang `index-main.html` khi hết đếm ngược 01/12/2026)
- `index-main.html` — trang chủ, bảng giá, hướng dẫn đặt, FAQ
- `payment.html` — form đặt hàng
- `track.html` — tra cứu đơn (cần mã đơn + email)
- `terms.html`, `privacy.html`, `refund.html` — chính sách
- `klyro-config.js` — mọi thông tin hiển thị (liên hệ, gói, mã giảm giá, nhận xét)

## Việc cần làm sau khi đưa lên
1. Dán `Code.gs` vào Apps Script, triển khai **phiên bản mới** (giữ nguyên link /exec).
2. Điền `phone`, `zalo`, `address`, `hours` trong `klyro-config.js` nếu muốn hiển thị (để trống thì tự ẩn).
3. Khi có tài khoản ngân hàng thật: điền `payment` và đổi `enabled: true`.
4. Thu hồi khóa Gemini cũ trên Google AI Studio (từng nằm công khai trong `ai-config.js`).
5. Nếu đổi giá hoặc mã giảm giá: sửa ở CẢ `klyro-config.js` (hiển thị) và `Code.gs` (tính tiền thật).

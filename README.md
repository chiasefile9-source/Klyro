# Klyro — bản dựng lại

Web tĩnh (HTML/CSS/JS), không cần build. Backend vẫn là Google Apps Script cũ ("mã gs.txt"), giữ nguyên các action:
submitOrder, validateGiftcode, lookupOrder, register, login, session, requestReset, resetPassword, getNotices, myOrders.

## Việc bạn cần làm
1. Mở `klyro-config.js`, điền `phone`, `zalo`, `address`, `story`, `founder`, `reviews` bằng thông tin THẬT. Ô nào để trống thì mục đó tự ẩn.
2. Tải ảnh thật của bạn/đội ngũ lên cùng thư mục và điền tên file vào `founder.photo`.
3. Thu hồi khóa Gemini cũ (đã lộ công khai trong bản trước) trên Google AI Studio.

## Đã bỏ
- Khung chat "Klyro AI" (ai-assistant.js, ai-config.js, AI-README.md) và các mục về trợ lý AI trong terms/privacy.
- Popup 20/10 (đã hết hạn), màn hình loading, đoạn code chặn chuột phải/F12 (không bảo vệ được gì, chỉ gây khó chịu).

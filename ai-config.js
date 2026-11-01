/*!
 * Cấu hình trợ lý AI Klyro.
 *
 * CHẾ ĐỘ ĐANG DÙNG: Google Gemini API (gọi trực tiếp từ trình duyệt).
 * - `role: 'gemini'` + `apiKey` bên dưới.
 * - `model` là model chính; `fallbackModels` được thử lần lượt nếu model chính
 *   quá tải (503), hết hạn mức (429) hoặc không còn khả dụng (404).
 * - Endpoint dùng {model} làm chỗ thay thế cho tên model.
 *
 * ⚠️ LƯU Ý BẢO MẬT QUAN TRỌNG
 * Khóa API đặt trong tệp này sẽ được gửi xuống trình duyệt, nghĩa là bất kỳ ai
 * mở website đều có thể đọc và sử dụng khóa của bạn. Chỉ nên dùng cách này khi
 * đã đặt hạn mức (quota) và giới hạn theo website (HTTP referrer) cho khóa.
 * Cách an toàn hơn: giữ khóa trong Google Apps Script và trỏ `endpoint` tới
 * proxy đó (xem AI-README.md mục 5). Khi chuyển sang proxy, đặt `apiKey: ''`
 * và `role: 'apps-script'`.
 *
 * Có thể tắt trợ lý hoàn toàn bằng `enabled: false`, hoặc chạy không cần mạng
 * bằng `mode: 'local'` (chỉ dùng kho kiến thức của website).
 */
window.KLYRO_AI_CONFIG = Object.freeze({
  enabled: true,

  /* 'local' = chỉ dùng kho kiến thức trên máy; 'auto' = dùng AI nếu cấu hình. */
  mode: 'auto',

  /* 'auto' | 'gemini' | 'apps-script' | 'openai' */
  role: 'gemini',
  endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent',
  model: 'gemini-3.5-flash',
  fallbackModels: ['gemini-flash-latest', 'gemini-flash-lite-latest'],

  /* Khóa API Gemini. Xem cảnh báo bảo mật ở đầu tệp. */
  apiKey: 'AQ.Ab8RN6LN_fkGIW3i5QEmtO46bmlJCWfU3MDSPYz0uVOjSMBzvQ',

  requestTimeoutMs: 30000,
  maxInputChars: 800,
  maxHistory: 8,
  persistHistory: true
});

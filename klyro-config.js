// klyro-config.js
// Ô nào để trống ("") thì mục đó tự ẩn trên website.
const KLYRO_CONFIG = {
  brand: {
    name: "Klyro",
    domain: "https://ww.klyro.gt.tc",
    email: "cskh.klyro@gmail.com",       // email hỗ trợ hiển thị trên web
    facebook: "https://www.facebook.com/klyro.2026", // link fanpage thật
    phone: "",      // VD: ""  (để trống = ẩn)
    zalo: "",       // VD: ""    (để trống = ẩn)
    address: "",    // VD: "" (để trống = ẩn)
    hours: "",      // VD: "10h - 21h hằng ngày" (để trống = ẩn)
    credit: "Thiết kế bởi Klyro"
  },

  // Link Web App của Google Apps Script (Deploy > Web app)
  apiEndpoint: "https://script.google.com/macros/s/AKfycbyT2GddBaQF96NxwM1Z09WzCRmDK5tegIZm3v9TNmyS5Fwk8ySglIfnPh8L6VHs19sk/exec",

  // Thông tin nhận thanh toán (VietQR).
  // enabled: false  -> trang thanh toán KHÔNG hiện mã QR, chỉ báo "Klyro sẽ gửi thông tin thanh toán qua liên hệ bạn đã nhập".
  // Khi có tài khoản ngân hàng thật: đổi enabled thành true, bankId là mã ngân hàng của VietQR
  // (VD: MB, VCB, TCB, ACB, BIDV, TPB...), accountNo là số tài khoản, accountName là tên chủ TK (in hoa, không dấu).
  // Lưu ý: "Zalopay" không phải mã ngân hàng của VietQR nên QR sẽ không quét được.
  payment: {
    enabled: false,
    bankId: "",
    accountNo: "",
    accountName: "",
    template: "compact2"
  },

  // Danh sách các gói dịch vụ. Giá ở đây chỉ để HIỂN THỊ — giá tính tiền thật nằm ở Apps Script (Code.gs).
  // Nếu đổi giá, nhớ đổi cả hai nơi.
  packages: [
    {
      id: "free",
      name: "Gói Trải Nghiệm Miễn Phí (Free)",
      price: 0,
      originalPrice: 35000,
      badge: "🎁 Tặng 1 lần dùng",
      isFree: true,
      description: "Dành cho khách hàng mới trải nghiệm chất lượng thiết kế slide của Klyro.",
      features: [
        "Từ 3 - 5 slides mẫu định hình phong cách",
        "Bàn giao file PowerPoint (.pptx)",
        "Giới hạn: Chỉ dùng 1 lần cho mỗi Gmail / SĐT",
        "Thời gian giao: 2 - 3 ngày"
      ]
    },
    {
      id: "basic",
      name: "Gói Tiêu Chuẩn (Standard)",
      price: 25000,
      originalPrice: 50000,
      badge: "🔥 Tiết kiệm nhất",
      description: "Phù hợp bài thuyết trình nhóm, báo cáo môn học cần sự gọn gàng, nghiêm túc.",
      features: [
        "Từ 10 - 15 slides bố cục chuẩn mực",
        "Phối màu & font chữ đồng bộ",
        "Bàn giao file PowerPoint (.pptx) & PDF",
        "Hỗ trợ chỉnh sửa 2 lần miễn phí",
        "Thời gian giao: Nhanh nhất 1 ngày - Muộn nhất 3 ngày"
      ]
    },
    {
      id: "pro",
      name: "Gói Chuyên Nghiệp (Pro)",
      price: 90000,
      originalPrice: 130000,
      badge: "⭐ Phổ biến nhất",
      popular: true,
      description: "Đầu tư hình ảnh, hiệu ứng chuyển cảnh mượt mà để ghi điểm tuyệt đối.",
      features: [
        "Từ 15 - 22 slides thiết kế sáng tạo, độc bản",
        "Hiệu ứng Morph & Animation chuyên sâu",
        "Tặng kèm bộ icon & hình ảnh minh họa",
        "Hỗ trợ chỉnh sửa 3 lần miễn phí",
        "Thời gian giao: 2 - 4 ngày"
      ]
    },
    {
      id: "vip",
      name: "Gói Đồ Án / Cao Cấp (VIP)",
      price: 144000,
      originalPrice: 190000,
      badge: "👑 Đầu tư chỉn chu",
      description: "Dành cho đồ án tốt nghiệp, bài thuyết trình quan trọng cần chiều sâu nội dung.",
      features: [
        "Từ 25 - 35 slides thiết kế cao cấp A-Z",
        "Hỗ trợ tóm tắt & biên tập lại nội dung thô",
        "Thiết kế biểu đồ, infographic trực quan",
        "Chỉnh sửa không giới hạn đến khi hoàn thiện",
        "Thời gian giao: 3 ngày - tối đa 1 tuần"
      ]
    }
  ],

  // Mã giảm giá (chỉ để hiển thị nhanh trên web — Apps Script mới là nơi kiểm tra thật).
  giftcodes: {
    "KLYRO10": { discount: 10000, minOrder: 50000, desc: "Giảm 10.000đ cho đơn từ 50k" },
    "KLYRO20": { discount: 20000, minOrder: 100000, desc: "Giảm 20.000đ cho đơn từ 100k" }
  },

  // Nhận xét thật của khách. Để [] thì mục này ẩn. Mỗi phần tử: { name: "Minh Anh", text: "...", role: "SV năm 2, ĐH ABC" }
  reviews: []
};

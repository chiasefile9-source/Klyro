// klyro-config.js
const KLYRO_CONFIG = {
  brand: {
    name: "Klyro",
    domain: "https://ww.klyro.gt.tc",
    email: "chiasefile9@gmail.com",
    facebook: "https://www.facebook.com/klyro.2026", // Thay bằng link Fanpage Klyro của bạn
    credit: "Thiết kế bởi Klyro"
  },
  
  // Link Web App từ Google Apps Script của bạn
  apiEndpoint: "https://script.google.com/macros/s/AKfycbyJzjsxpJdIeThkYE5ZdH7uMR-fekbeEzoe9_UHh6b5DuI3Uo89XBjm3FyaIOQ32cO1/exec",

  // Thông tin nhận thanh toán (Dùng để tạo VietQR tự động)
  payment: {
    bankId: "Zalopay", // Mã ngân hàng (VD: MB, VCB, TCB, ACB, BIDV...)
    accountNo: "99ZP26294M80657068", // Số tài khoản của bạn
    accountName: "NGUYEN VAN TUYEN", // Tên chủ tài khoản (viết hoa không dấu)
    template: "compact2"
  },

  // Danh sách các gói dịch vụ thiết kế Slide (Đã cập nhật giá và biểu tượng mới)
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
        "Phối màu & font chữ đồng bộ chuyên nghiệp",
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
        "Tặng kèm bộ icon & hình ảnh minh họa cao cấp",
        "Hỗ trợ chỉnh sửa 3 lần miễn phí",
        "Thời gian giao: 2 - 4 ngày"
      ]
    },
    {
      id: "vip",
      name: "Gói Đồ Án / Cao Cấp (VIP)",
      price: 144000,
      originalPrice: 190000,
      badge: "👑 Đỉnh cao chất lượng",
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

  // Danh sách mã giảm giá (Giftcode)
  giftcodes: {
    "KLYRO10": { discount: 10000, minOrder: 50000, desc: "Giảm 10.000đ cho đơn từ 50k" },
    "KLYRO20": { discount: 20000, minOrder: 100000, desc: "Giảm 20.000đ cho đơn từ 100k" }
  }
};

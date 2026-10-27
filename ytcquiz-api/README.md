# YTC Quiz API

Backend Express + Mongoose để lưu kết quả chơi từ `quiz-game.html` vào MongoDB Atlas.

## Cài đặt

1. Đổi mật khẩu database user Atlas trước, vì URI/mật khẩu trước đó đã bị chia sẻ trong chat. Tạo connection string mới và giữ riêng.
2. Trong thư mục này, chạy `npm install`.
3. Sao chép `.env.example` thành `.env`, đặt URI mới vào `MONGO_URI`. Nên chỉ rõ database name, ví dụ `ytcquiz`, trong URI.
4. Trong Atlas → Network Access, cho phép IP máy chạy backend; không dùng `0.0.0.0/0` lâu dài.
5. Chạy `npm start`; kiểm tra `http://localhost:3000/health`.

## API

- `POST /api/results` — lưu lượt chơi; gửi object kết quả game. `recordId` là khóa idempotent.
- `GET /api/results?limit=50` — danh sách kết quả theo điểm giảm dần (tối đa 100).
- `GET /api/results/player/:playerId` — lịch sử của một ID (tối đa 100).

Game tự lưu vào localStorage trước; khi cấu hình URL API, nó gửi thêm bản sao lên server. Đặt `window.YTC_QUIZ_API_BASE_URL = 'https://<api-host>'` trước script game (không có dấu `/` cuối), hoặc cập nhật biến tương ứng trong HTML.

## Lưu ý bảo mật

API này hiện chưa có đăng nhập/xác thực danh tính. ID người chơi và tên do trình duyệt gửi lên có thể bị giả mạo; rate limit/CORS không thay thế xác thực. Không dùng dữ liệu này cho phần thưởng hay bảng xếp hạng có giá trị cho tới khi bổ sung auth. Không đưa `MONGO_URI` vào frontend, repository, ảnh chụp hoặc chat. Giữ `.env` riêng tư.

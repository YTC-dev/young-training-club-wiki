from pathlib import Path
from datetime import datetime
import shutil

path = Path(r"D:\YTC\quiz-game.html")
backup_dir = Path(r"D:\YTC\.work\backups")
backup_dir.mkdir(parents=True, exist_ok=True)
shutil.copy2(path, backup_dir / f"quiz-game.before-python-{datetime.now():%Y%m%d-%H%M%S}.html")
text = path.read_text(encoding="utf-8")

def replace_once(old: str, new: str, label: str):
    global text
    if old not in text:
        raise RuntimeError(f"Không tìm thấy marker: {label}")
    text = text.replace(old, new, 1)

replace_once("""  { type: 'word', q: 'Sắp xếp thứ hạng ONE-TAKE Gen 14.2 từ giải nhất đến giải ba:',
    pool: ['ShineOn','Donald Trump','OneTeam'], answer: ['Donald Trump','OneTeam','ShineOn'] },
];
""", """  { type: 'word', q: 'Sắp xếp thứ hạng ONE-TAKE Gen 14.2 từ giải nhất đến giải ba:',
    pool: ['ShineOn','Donald Trump','OneTeam'], answer: ['Donald Trump','OneTeam','ShineOn'] },

  // ----- Câu hỏi mở rộng từ thông tin YTC công khai -----
  { type: 'choice', q: 'YTC được thành lập vào ngày nào?', options: ['23/04/2012','01/06/2013','15/09/2014','20/10/2015'], answer: 0 },
  { type: 'choice', q: 'Tài khoản TikTok được giới thiệu trên kênh chính thức của YTC là tài khoản nào?', options: ['@ytc.uneti','@youngtrainingclub','@ytc.hanoi','@uneti.ytc'], answer: 0 },
  { type: 'choice', q: 'YTC có khoảng bao nhiêu sự kiện mỗi năm?', options: ['5+','15+','30+','100+'], answer: 2 },
  { type: 'choice', q: 'Địa chỉ được giới thiệu của CLB Đào Tạo Kỹ Năng Trẻ là gì?', options: ['218 Lĩnh Nam, Hoàng Mai, Hà Nội','144 Xuân Thuỷ, Cầu Giấy, Hà Nội','353 Trần Hưng Đạo, Nam Định','1 Đại Cồ Việt, Hai Bà Trưng'], answer: 0 },
  { type: 'fill', q: 'Slogan YTC bắt đầu bằng hai chữ nào?', answer: 'Ý tưởng', accept: ['ý tưởng','y tuong'] },
  { type: 'fill', q: 'YTC được thành lập vào năm nào?', answer: '2012', accept: ['2012'] },
  { type: 'choice', q: 'YTC giới thiệu mình là nơi rèn luyện kỹ năng mềm, tư duy sáng tạo và khả năng nào?', options: ['Làm việc nhóm','Chơi thể thao','Nấu ăn','Lập trình game'], answer: 0 },
  { type: 'choice', q: 'Nội dung nào là một hoạt động chính của YTC?', options: ['Cuộc thi MC - Giọng nói','Đua xe địa hình','Thi đấu cờ vua quốc tế','Triển lãm robot'], answer: 0 },
];
""", "câu hỏi mở rộng")

replace_once("""  { id: 'phuonganh', name: 'Lê Thị Phương Anh', role: 'Đồng hành cơ hội', avatar: 'P',
    ability: 'Mỗi câu được trả lời sai thêm 1 lần mà không mất streak' },
];
""", """  { id: 'phuonganh', name: 'Lê Thị Phương Anh', role: 'Đồng hành cơ hội', avatar: 'P',
    ability: 'Mỗi câu được trả lời sai thêm 1 lần mà không mất streak' },
  { id: 'nhatminh', name: 'Vũ Xuân Nhật Minh', role: 'Đồng hành may mắn', avatar: 'N', ability: 'Xúc xắc ra 1: cộng thêm 300 điểm' },
  { id: 'nguyenphuonganh', name: 'Nguyễn Phương Anh', role: 'Đồng hành bứt phá', avatar: 'PA', ability: 'Sau mỗi lần trả lời sai, câu đúng kế tiếp được x2 bước và x2 điểm câu hỏi' },
  { id: 'halinh', name: 'Hoàng Thị Hà Linh', role: 'Đồng hành lặp lại', avatar: 'HL', ability: 'Trả lời đúng: câu vừa làm sẽ xuất hiện lại; kích hoạt tối đa 1 lần mỗi 3 vòng câu hỏi' },
];
""", "đồng hành mới")

replace_once("const EARLY_WINDOW = 5;               // seconds for Thảo Anh's bonus", "const EARLY_WINDOW = 5;               // seconds for Thảo Anh's bonus\nconst DICE_ONE_BONUS = 300;           // Nhật Minh: bonus when dice shows 1", "hằng số xúc xắc")
replace_once("""    retryUsed: false,
    reachedFinish: false,
    selectedWords: [],
""", """    retryUsed: false,
    phuongAnhBoostPending: false,
    haLinhCooldown: 0,
    pendingRepeatQuestion: null,
    isRepeatQuestion: false,
    reachedFinish: false,
    selectedWords: [],
""", "state reset")
replace_once("""  state.currentQ = state.questions[state.qIndex];
  state.timeLeft = state.companions.includes('minh') ? BASE_TIME + 10 : BASE_TIME;
""", """  state.currentQ = state.questions[state.qIndex];
  state.isRepeatQuestion = Boolean(state.currentQ.isRepeatQuestion);
  state.timeLeft = state.companions.includes('minh') ? BASE_TIME + 10 : BASE_TIME;
""", "loadQuestion state")
replace_once("""function handleTimeout() {
  if (state.answered) return;
  clearInterval(state.timer);
  if (offerRetry()) return;
  state.answered = true;
  state.streak = 0;
""", """function handleTimeout() {
  if (state.answered) return;
  clearInterval(state.timer);
  registerWrongAnswer();
  if (offerRetry()) return;
  state.answered = true;
""", "handleTimeout")
replace_once("function handleChoiceAnswer(picked, btn) {", """function registerWrongAnswer() {
  state.streak = 0;
  if (state.companions.includes('nguyenphuonganh')) state.phuongAnhBoostPending = true;
}

function handleChoiceAnswer(picked, btn) {""", "wrong answer helper")
text = text.replace("else { state.streak = 0;", "else { registerWrongAnswer();")
replace_once("""  let streakBonus = 0;
  if (state.companions.includes('anh')) { streakBonus = state.streak * 50; earned += streakBonus; }

  // Phạm Thị Thảo Anh bonus: x2 if answered within EARLY_WINDOW seconds
""", """  let streakBonus = 0;
  if (state.companions.includes('anh')) { streakBonus = state.streak * 50; earned += streakBonus; }
  const phuongAnhBoost = state.companions.includes('nguyenphuonganh') && state.phuongAnhBoostPending;

  // Phạm Thị Thảo Anh bonus: x2 if answered within EARLY_WINDOW seconds
""", "điểm boost")
replace_once("""  state.score += earned;

  showFloatingPoints('+' + earned + (streakBonus ? ` (streak +${streakBonus})` : ''), thaoAnhBonus > 0 || streakBonus > 0);
""", """  if (phuongAnhBoost) earned *= 2;
  state.score += earned;
  if (phuongAnhBoost) state.phuongAnhBoostPending = false;
  if (phuongAnhBoost) showFloatingPoints(`Nguyễn Phương Anh x2 điểm · +${earned}`, true, '#b06cff');
  showFloatingPoints('+' + earned + (streakBonus ? ` (streak +${streakBonus})` : ''), thaoAnhBonus > 0 || streakBonus > 0 || phuongAnhBoost);
""", "cộng điểm")
replace_once("""    let totalSteps = steps;
    if (state.companions.includes('trang') && (steps === 3 || steps === 4)) {
""", """    let totalSteps = steps;
    if (state.companions.includes('nguyenphuonganh') && phuongAnhBoost) {
      totalSteps *= 2;
      showFloatingPoints(`Nguyễn Phương Anh x2 bước · +${totalSteps}`, true, '#b06cff');
    }
    if (state.companions.includes('nhatminh') && steps === 1) {
      state.score += DICE_ONE_BONUS;
      updateTopbar();
      showFloatingPoints(`Nhật Minh · xúc 1 · +${DICE_ONE_BONUS}`, true, '#d19a00');
      document.getElementById('diceResult').textContent += ` · +${DICE_ONE_BONUS} điểm`;
    }
    if (state.companions.includes('trang') && (steps === 3 || steps === 4)) {
""", "xử lý xúc xắc")
replace_once("""  state.correctCount++;
  const timeUsed =
""", """  state.correctCount++;
  if (state.companions.includes('halinh') && !state.isRepeatQuestion && state.haLinhCooldown === 0) {
    state.pendingRepeatQuestion = JSON.parse(JSON.stringify(state.currentQ));
    state.pendingRepeatQuestion.isRepeatQuestion = true;
    state.haLinhCooldown = 4;
    document.getElementById('feedback').innerHTML += '<br>Hà Linh: câu hỏi này sẽ xuất hiện lại ở lượt kế tiếp.';
  }
  const timeUsed =
""", "Hà Linh")
replace_once("""function goNext() {
  if (!state.answered || state.resolvingTurn || state.finished) return;
  state.qIndex++;
  // Reset next button text
""", """function goNext() {
  if (!state.answered || state.resolvingTurn || state.finished) return;
  if (!state.isRepeatQuestion && state.haLinhCooldown > 0) state.haLinhCooldown--;
  state.qIndex++;
  if (state.pendingRepeatQuestion) {
    state.questions.splice(state.qIndex, 0, state.pendingRepeatQuestion);
    state.pendingRepeatQuestion = null;
  }
  // Reset next button text
""", "goNext")
replace_once("""      <li>Đồng hành mới: Tô Thu Trang (tung 3: x1,2; tung 4: x1,5) · Đặng Thị Phương Linh (+100 điểm mỗi ô chẵn) · Trần Mạnh Dũng (+500 điểm khi về đích; nếu hết câu hỏi trước đích: +100 điểm mỗi bước) · Nguyễn Minh Ánh (streak cộng điểm) · Lê Thị Phương Anh (thêm 1 lần trả lời sai)</li><li>Bùi Quang Minh: +10s · Đào Thị Thu Hằng: +2 bước · Phạm Thị Thảo Anh: x2 điểm khi trả lời sớm</li>
""", """      <li>Đồng hành: Tô Thu Trang (xúc 3/4 nhân điểm) · Phương Linh (+100 điểm mỗi ô chẵn) · Mạnh Dũng (thưởng về đích) · Minh Ánh (streak) · Lê Thị Phương Anh (thêm 1 lần trả lời sai)</li>
      <li>Đồng hành mới: Nhật Minh (+300 điểm khi xúc 1) · Nguyễn Phương Anh (sau câu sai: câu đúng kế tiếp x2 điểm và x2 bước) · Hà Linh (lặp lại câu đúng, tối đa 1 lần/3 vòng)</li>
      <li>Bùi Quang Minh: +10s · Đào Thị Thu Hằng: +2 bước · Phạm Thị Thảo Anh: x2 điểm khi trả lời sớm</li>
""", "luật đồng hành")
css = """\n/* ===== Companion upgrade states ===== */
.companion-row.companion-pending { border-left-color:#a76cff; background:linear-gradient(135deg,#f3eaff,#fff8e1); box-shadow:0 0 0 2px rgba(167,108,255,.12); }
.char-card .char-ability { min-height:54px; }
@media (max-width:600px) { .start-rules ul { grid-template-columns:1fr; } .game-body { gap:12px; } .char-grid { grid-template-columns:1fr; } }
"""
replace_once("</style>", css + "</style>", "CSS")
path.write_text(text, encoding="utf-8")
print(f"UPDATED {path} ({path.stat().st_size} bytes)")

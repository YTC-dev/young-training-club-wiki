
/* ============================================================
   QUESTION POOL — Easy to edit/add more questions
   Each question: { type, q, ... }
   type: 'choice' | 'fill' | 'word'
   ============================================================ */
const QUESTIONS = [
  // ----- Multiple Choice -----
  { type: 'choice', q: 'YTC (Young Training Club) có màu chủ đạo là màu gì?',
    options: ['xanh dương','đỏ','vàng','xanh lá'], answer: 0 },
  { type: 'choice', q: 'YTC trực thuộc trường đại học nào?',
    options: ['HAUI','UNETI','Bách Khoa','NEU'], answer: 1 },
  { type: 'choice', q: 'Slogan của YTC là gì?',
    options: ['Tuổi trẻ năng động','Ý tưởng lớn - Tài năng trẻ - Chung niềm tin','Tiếp lửa đam mê','Kết nối trí tuệ'], answer: 1 },
  { type: 'choice', q: 'Quán quân cuộc thi Rising Voice 2025 là ai?',
    options: ['Nguyễn Thị Thanh Hoa','Nguyễn Ngọc Như Quỳnh','Tô Thu Trang','Ngô Hạnh Nguyên'], answer: 2 },
  { type: 'choice', q: 'Chủ nhiệm CLB YTC (năm học 2025-2026) là ai?',
    options: ['Nguyễn Hồng Thanh','Đào Thị Thu Hằng','Tô Thu Trang','Nguyễn Thanh Lan'], answer: 0 },
  { type: 'choice', q: 'Email liên hệ chính thức của YTC?',
    options: ['ytc@gmail.com','genz.ytc@gmail.com','contact.ytc@uneti.vn','ytc.uneti@gmail.com'], answer: 1 },
  { type: 'choice', q: 'Đến năm 2026, YTC đã có bao nhiêu thế hệ (Gen)?',
    options: ['12','14','15','20'], answer: 2 },
  { type: 'choice', q: 'Cơ sở Lĩnh Nam, Hà Nội của UNETI nằm ở đường nào?',
    options: ['218 Lĩnh Nam','353 Trần Hưng Đạo','1 Đại Cồ Việt','144 Xuân Thuỷ'], answer: 0 },
  { type: 'choice', q: 'Giải nhất cuộc thi ONE-TAKE Gen 14.2 thuộc nhóm nào?',
    options: ['OneTeam','ShineOn','Donald Trump','Rising Stars'], answer: 2 },
  { type: 'choice', q: 'YTC trực thuộc tổ chức nào của UNETI?',
    options: ['Đoàn TNCS Hồ Chí Minh','Hội Sinh viên','Ban Giám hiệu','Phòng Công tác Sinh viên'], answer: 0 },
  { type: 'choice', q: 'Ai là Trưởng ban MC - Lễ tân (năm 2025-2026)?',
    options: ['Nguyễn Minh Ánh','Tô Thu Trang','Nguyễn Thuỳ Trang','Lê Thị Phương Anh'], answer: 1 },
  { type: 'choice', q: 'Cuộc thi nào của YTC tập trung vào kỹ năng dẫn chương trình?',
    options: ['ONE-TAKE','Rising Voice','Podcast & Phim','Team Building'], answer: 1 },
  { type: 'choice', q: 'Sinh viên UNETI tiêu biểu "Nguyễn Hồng Thanh" học lớp nào?',
    options: ['DHLQ18A3HN','DHMK18A1HN','DHKT17A6HN','DHLQ17A1HN'], answer: 1 },
    { type: 'choice', q: 'Sinh viên UNETI tiêu biểu "Nguyễn Thanh Lan" học lớp nào?',
    options: ['DHLQ18A3HN','DHMK18A1HN','DHKT17A6HN','DHLQ17A1HN'], answer: 3 },
  { type: 'choice', q: 'Cơ sở Nam Định, Ninh Bình của UNETI nằm ở đâu?',
    options: ['218 Lĩnh Nam','353 Trần Hưng Đạo','451 Tôn Đức Thắng','12 Nguyễn Văn Cừ'], answer: 1 },
  { type: 'choice', q: 'YTC có khoảng bao nhiêu thành viên (đến 2026)?',
    options: ['50+','100+','200+','500+'], answer: 2 },
  { type: 'choice', q: 'Cuộc thi ONE-TAKE thuộc mảng nào của YTC?',
    options: ['MC - Giọng nói','Sáng tạo & Media','Tình nguyện','Team Building'], answer: 1 },
  { type: 'choice', q: 'Phạm Thị Thảo Anh giữ vai trò gì trong YTC?',
    options: ['Trưởng ban MC','Phó ban Nhân sự - Hậu cần','Chủ nhiệm','Truyền thông'], answer: 1 },
  { type: 'choice', q: 'Đào Thị Thu Hằng giữ vai trò gì trong YTC?',
    options: ['Phó ban Nhân sự - Hậu cần','Trưởng ban MC','Kỹ thuật','Truyền thông'], answer: 0 },
  { type: 'choice', q: 'Nguyễn Minh Ánh đạt giải gì trong Rising Voice 2025?',
    options: ['Quán quân','Á quân 1','Á quân 2','Yêu thích nhất'], answer: 2 },
    { type: 'choice', q: 'Tiêu đề của chuỗi sự kiện "Sinh nhật lần thứ 14 của YTC" là gì?',
    options: ['Fourteen','Chuyến tàu thời gian','Những dòng ký ức','Rising Voice'], answer: 1 },

  // ----- Fill in the blank -----
  { type: 'fill', q: 'YTC là viết tắt của cụm từ nào? (tiếng Anh)', answer: 'Young Training Club',
    accept: ['young training club','youngtrainingclub'] },
  { type: 'fill', q: 'Hoàn thành slogan: "Ý tưởng lớn - Tài năng trẻ - ___ niềm tin"', answer: 'Chung',
    accept: ['chung'] },
  { type: 'fill', q: 'UNETI là trường Đại học Kinh tế - ___ Công Nghiệp', answer: 'Kỹ thuật',
    accept: ['kỹ thuật','ky thuat'] },
  { type: 'fill', q: 'Email YTC có phần tên (trước @gmail.com) là gì?', answer: 'genz.ytc',
    accept: ['genz.ytc','genzytc'] },
  { type: 'fill', q: 'Tô Thu Trang là quán quân cuộc thi ___ 2025', answer: 'Rising Voice',
    accept: ['rising voice','risingvoice'] },
  { type: 'fill', q: 'Nguyễn Minh Ánh là á quân 2 cuộc thi ___ 2025', answer: 'Rising Voice',
    accept: ['rising voice','risingvoice'] },
  { type: 'fill', q: 'YTC được thành lập vào tháng mấy năm 2012? (viết số)', answer: '4',
    accept: ['4','tháng 4','04'] },
  { type: 'fill', q: 'Ở đây có bao nhiêu bước trên đường đua này? (số)', answer: '50',
    accept: ['50','năm mươi'] },
  { type: 'fill', q: 'Slogan của YTC gồm bao nhiêu chữ "c" (Tính cả chữ viết hoa)?', answer: '3',
    accept: ['ba','3'] },
  { type: 'fill', q: 'Ô số ___ và ___ trên đường đua cho phép chọn đồng hành (viết theo thứ tự, cách nhau bởi dấu phẩy)', answer: '15, 30',
    accept: ['15, 30','15,30','15 30','15-30'] },
  { type: 'fill', q: 'Nguyễn Hồng Thanh là ___ CLB YTC (chức vụ)', answer: 'Chủ nhiệm',
    accept: ['chủ nhiệm','chu nhiem'] },

  // ----- Word select / arrange -----
  { type: 'word', q: 'Sắp xếp các từ để tạo thành slogan của YTC:',
    pool: ['Ý tưởng lớn','Tài năng trẻ','Chung niềm tin'], answer: ['Ý tưởng lớn','Tài năng trẻ','Chung niềm tin'] },
  { type: 'word', q: 'Sắp xếp 3 từ sau theo đúng thứ tự để ghép thành tên CLB (tiếng Anh):',
    pool: ['Club','Young','Training'], answer: ['Young','Training','Club'] },
  { type: 'word', q: 'Sắp xếp các ban chuyên môn theo thứ tự bảng chữ cái:',
    pool: ['MC - Lễ tân','Nhân sự - Hậu cần','Kỹ thuật - Vận hành','Truyền thông'], answer: ['Kỹ thuật - Vận hành','MC - Lễ tân','Nhân sự - Hậu cần','Truyền thông'] },
  { type: 'word', q: 'Sắp xếp các giải ONE-TAKE Gen 14.2 theo thứ tự: Nhất → Nhì → Ba:',
    pool: ['ShineOn','OneTeam','Donald Trump'], answer: ['Donald Trump','OneTeam','ShineOn'] },
  { type: 'word', q: 'Sắp xếp thứ tự các cuộc thi đã tổ chức từ cũ đến mới:',
    pool: ['One Take','Rewrite Destiny','Rising Voice'], answer: ['Rewrite Destiny','Rising Voice','One Take'] },
  { type: 'word', q: 'Sắp xếp các thế hệ Gen theo thứ tự từ cũ đến mới:',
    pool: ['Gen 14','Gen 15.1','Gen 13'], answer: ['Gen 13','Gen 14','Gen 15.1'] },
  { type: 'word', q: 'Sắp xếp: ______ là _____ ______',
    pool: ['Phó ban','Lê Thị Phương Anh','MC - Lễ tân'], answer: ['Lê Thị Phương Anh','Phó ban','MC - Lễ tân'] },

  // ----- hehehe-----
  { type: 'choice', q: 'YTC tạo cơ hội cho sinh viên rèn luyện những kỹ năng nào?',
    options: ['Kỹ năng mềm, tư duy sáng tạo và làm việc nhóm','Chỉ kỹ năng lập trình','Chỉ kỹ năng ngoại ngữ','Kỹ năng kế toán chuyên sâu'], answer: 0 },
  { type: 'choice', q: 'ONE TAKE là cuộc thi thuộc lĩnh vực nào?',
    options: ['Podcast - Phim và sáng tạo video','Thể thao thành tích cao','Khởi nghiệp kinh doanh','Hùng biện tiếng Anh'], answer: 0 },
  { type: 'choice', q: 'Rising Voice hướng tới việc tìm kiếm và bồi dưỡng tài năng nào?',
    options: ['Dẫn chương trình và giọng nói','Thiết kế thời trang','Nhiếp ảnh phong cảnh','Nghiên cứu khoa học'], answer: 0 },
  { type: 'choice', q: 'Cuộc thi ONE-TAKE Gen 14.2: nhóm nào giành giải nhì?',
    options: ['OneTeam','Donald Trump','ShineOn','Rising Stars'], answer: 0 },
  { type: 'fill', q: 'YTC trực thuộc Đoàn TNCS Hồ Chí Minh của Trường Đại học Kinh tế - Kỹ thuật ___', answer: 'Công Nghiệp', accept: ['công nghiệp','cong nghiep'] },
  { type: 'word', q: 'Sắp xếp thứ hạng ONE-TAKE Gen 14.2 từ giải nhất đến giải ba:',
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
  { type: 'choice', q: 'Mỗi năm YTC tổ chức khoảng bao nhiêu mùa Podcast & Phim?', options: ['1 mùa','2 mùa','5 mùa','8 mùa'], answer: 1 },
  { type: 'choice', q: 'Cuộc thi Rewrite Destiny thuộc Gen nào của YTC?', options: ['Gen 12.1','Gen 13.2','Gen 14.1','Gen 15.1'], answer: 2 },
  { type: 'choice', q: 'Đội giành giải nhất cuộc thi Rewrite Destiny là đội nào?', options: ['Good Vibes Tribe','Together We Rise','THE INNOVATORS','OneTeam'], answer: 0 },
  { type: 'choice', q: 'Đội giành giải nhất cuộc thi Voice Your Mind là đội nào?', options: ['Crew 1718','Biệt Đội Xanh','Good Vibes Tribe','Together We Rise'], answer: 3 },
  { type: 'choice', q: 'Tô Thu Trang đạt thành tích nào tại UNETI GOT TALENT 2026?', options: ['Top 20 Chung Kết','Giải nhất','Giải nhì','Giải yêu thích nhất'], answer: 0 },
  { type: 'choice', q: 'Đội thi của Nguyễn Thị Hồng Quyên tại MARKET MAKER 2026 có tên là gì?', options: ['WINX','YoungBoost','FinFin Mind','THE LIGHT'], answer: 0 },
  { type: 'fill', q: 'Chuyến dã ngoại YTC 2026 diễn ra từ ngày ___ đến 01/07/2026.', answer: '30/06', accept: ['30/06','30-06','30 tháng 6'] },
  { type: 'fill', q: '“Chuyến tàu thời gian” là đêm sinh nhật lần thứ mấy của YTC?', answer: '14', accept: ['14','mười bốn'] },
  { type: 'choice', q: 'YTC đồng hành cùng chương trình nào dành cho thí sinh trước kỳ thi năm 2026?', options: ['Tiếp Sức Mùa Thi','UNETI CUP','Rising Voice','Market Maker'], answer: 0 },
];

/* ============================================================
   COMPANIONS
   ============================================================ */
const COMPANION_IMAGES = {
  minh: 'Image/BCN Gen14/BuiQuangMinh.jpg', hang: 'Image/BCN Gen14/DaoThiThuHang.jpg', thoanh: 'Image/BCN Gen14/PhamThiThaoAnh.jpg', trang: 'Image/BCN Gen14/ToThuTrang.jpg', phuonglinh: 'Image/BCN Gen14/DangThiPhuongLinh.jpg', dung: 'Image/BCN Gen14/TranManhDung.jpg', anh: 'Image/BCN Gen14/NguyenMinhAnh.jpg', phuonganh: 'Image/BCN Gen14/LeThiPhuongAnh.jpg', nhatminh: 'Image/BCN Gen14/VuXuanNhatMinh.jpg', nguyenphuonganh: 'Image/BCN Gen14/NguyenPhuongAnh.jpg', halinh: 'Image/BCN Gen14/HoangThiHaLinh.jpg'
};

const COMPANIONS = [
  { id: 'minh',   name: 'Bùi Quang Minh',     role: 'Đồng hành thời gian',   avatar: 'M',
    ability: '+10 giây cho mỗi câu hỏi (tăng từ 15s → 25s)' },
  { id: 'hang',   name: 'Đào Thị Thu Hằng',   role: 'Đồng hành bước tiến',   avatar: 'H',
    ability: '+2 bước tiến thêm sau mỗi câu trả lời đúng' },
  { id: 'thoanh', name: 'Phạm Thị Thảo Anh',  role: 'Đồng hành tốc độ',      avatar: 'A',
    ability: 'Trả lời đúng trong 5s đầu: thưởng x2 điểm câu đó' },
  { id: 'trang', name: 'Tô Thu Trang', role: 'Đồng hành xúc xắc', avatar: 'T',
    ability: 'Tung ra 3: nhân x1,2 điểm hiện tại; ra 4: nhân x1,5 điểm hiện tại' },
  { id: 'phuonglinh', name: 'Đặng Thị Phương Linh', role: 'Đồng hành bước chẵn', avatar: 'L',
    ability: 'Mỗi ô số chẵn đi qua: +100 điểm' },
  { id: 'dung', name: 'Trần Mạnh Dũng', role: 'Đồng hành về đích', avatar: 'D',
    ability: 'Về đích: thêm +500 điểm; nếu hết câu hỏi trước đích: +100 điểm mỗi bước đã đi' },
  { id: 'anh', name: 'Nguyễn Minh Ánh', role: 'Đồng hành streak', avatar: 'Á',
    ability: 'Giữ chuỗi trả lời đúng để cộng điểm; trả lời sai sẽ mất hiệu lực chuỗi' },
  { id: 'phuonganh', name: 'Lê Thị Phương Anh', role: 'Đồng hành cơ hội', avatar: 'P',
    ability: 'Mỗi câu được trả lời sai thêm 1 lần mà không mất streak' },
  { id: 'nhatminh', name: 'Vũ Xuân Nhật Minh', role: 'Đồng hành may mắn', avatar: 'N', ability: 'Xúc xắc ra 1: cộng thêm 300 điểm' },
  { id: 'nguyenphuonganh', name: 'Nguyễn Phương Anh', role: 'Đồng hành bứt phá', avatar: 'PA', ability: 'Sau mỗi lần trả lời sai, câu đúng kế tiếp được x2 bước và x2 điểm câu hỏi' },
  { id: 'halinh', name: 'Hoàng Thị Hà Linh', role: 'Đồng hành lặp lại', avatar: 'HL', ability: 'Trả lời đúng: câu vừa làm sẽ xuất hiện lại; kích hoạt tối đa 1 lần mỗi 3 vòng câu hỏi' },
];

/* ============================================================
   GAME STATE
   ============================================================ */
const TOTAL_QUESTIONS = 20;
const BOARD_SIZE = 50;
const BASE_TIME = 15;
const MILESTONES = [15, 30];
const POINTS_BASE = 100;
const POINTS_TIME_BONUS = 100;        // extra if answered fast
const POINTS_FINISH_BONUS = 500;
const EARLY_WINDOW = 5;               // seconds for Thảo Anh's bonus
const DICE_ONE_BONUS = 300;           // Nhật Minh: bonus when dice shows 1

let state = {};

function resetState() {
  state = {
    score: 0,
    step: 0,
    qIndex: 0,
    questions: [],
    currentQ: null,
    timeLeft: BASE_TIME,
    timer: null,
    countdownTimer: null,
    answered: false,
    companions: [],          // picked companion ids
    passedMilestones: new Set(),
    correctCount: 0,
    streak: 0,
    retryUsed: false,
    phuongAnhBoostPending: false,
    haLinhCooldown: 0,
    pendingRepeatQuestion: null,
    isRepeatQuestion: false,
    reachedFinish: false,
    selectedWords: [],
    pendingNext: false,
    resolvingTurn: false,
    sessionId: 0,
    finished: false,
  };
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Chọn 20 câu theo tỷ lệ 10 trắc nghiệm / 6 điền khuyết / 4 sắp xếp.
// Nếu sau này một dạng chưa đủ câu, tự bù từ các dạng còn lại.
function buildQuestionDeck() {
  const quota = { choice: 10, fill: 6, word: 4 };
  const groups = Object.fromEntries(Object.keys(quota).map(type => [type, shuffle(QUESTIONS.filter(q => q.type === type))]));
  const selected = [];
  for (const type of Object.keys(quota)) selected.push(...groups[type].splice(0, quota[type]));
  const chosen = new Set(selected);
  const remaining = shuffle(QUESTIONS.filter(q => !chosen.has(q)));
  while (selected.length < Math.min(TOTAL_QUESTIONS, QUESTIONS.length) && remaining.length) selected.push(remaining.pop());
  return shuffle(selected).map(question => {
    const copy = { ...question };
    if (question.options) {
      const answerText = question.options[question.answer];
      copy.options = shuffle(question.options);
      copy.answer = copy.options.indexOf(answerText);
    }
    if (question.pool) copy.pool = question.pool.slice();
    if (question.answer && Array.isArray(question.answer)) copy.answer = question.answer.slice();
    if (question.accept) copy.accept = question.accept.slice();
    return copy;
  });
}


/* ============================================================
   SOUND EFFECTS — Web Audio, no external files required
   ============================================================ */
let ytcAudioContext = null;
function getAudioContext() { if (!ytcAudioContext) { const AudioCtx = window.AudioContext || window.webkitAudioContext; if (AudioCtx) ytcAudioContext = new AudioCtx(); } if (ytcAudioContext && ytcAudioContext.state === 'suspended') ytcAudioContext.resume(); return ytcAudioContext; }
function playSound(type) {
  const ctx = getAudioContext(); if (!ctx) return;
  const patterns = { start:[[392,.08,'sine',0],[523,.12,'sine',.09],[659,.16,'sine',.22]], correct:[[523,.09,'sine',0],[659,.12,'sine',.1],[784,.18,'sine',.22]], wrong:[[220,.14,'sawtooth',0],[165,.2,'sawtooth',.14]], dice:[[180,.05,'square',0],[240,.05,'square',.07],[300,.05,'square',.14]], select:[[392,.08,'triangle',0],[587,.16,'triangle',.09]], finish:[[523,.1,'sine',0],[659,.1,'sine',.11],[784,.1,'sine',.22],[1046,.28,'sine',.34]] };
  const notes = patterns[type] || patterns.select;
  const now = ctx.currentTime;
  notes.forEach(([frequency,duration,wave,offset]) => { const osc = ctx.createOscillator(); const gain = ctx.createGain(); osc.type = wave; osc.frequency.setValueAtTime(frequency, now + offset); gain.gain.setValueAtTime(.0001, now + offset); gain.gain.exponentialRampToValueAtTime(.09, now + offset + .01); gain.gain.exponentialRampToValueAtTime(.0001, now + offset + duration); osc.connect(gain); gain.connect(ctx.destination); osc.start(now + offset); osc.stop(now + offset + duration + .02); });
}

function startGame() {
  playSound('start');
  showLoading('Đang chuẩn bị đường đua...');
  setTimeout(() => {
    resetState();
    state.sessionId = (window.__ytcSessionId || 0) + 1;
    window.__ytcSessionId = state.sessionId;
    state.questions = buildQuestionDeck();
    document.getElementById('startScreen').classList.remove('active');
    document.getElementById('gameScreen').classList.add('active');
    buildBoard();
    renderCompanions();
    updateTopbar();
    loadQuestion(false);
    hideLoading();
    runStartCountdown();
  }, 720);
}

function showLoading(message = 'Đang tải...') {
  const screen = document.getElementById('loadingScreen');
  const messageEl = document.getElementById('loadingMessage');
  const progress = document.getElementById('loadingProgress');
  const percentEl = document.getElementById('loadingPercent');
  if (!screen) return;
  screen.classList.remove('is-hidden');
  screen.classList.add('is-preparing');
  if (progress) progress.style.width = '';
  if (messageEl) messageEl.textContent = message;
  if (percentEl) percentEl.textContent = '92%';
}

function hideLoading() {
  const screen = document.getElementById('loadingScreen');
  const percentEl = document.getElementById('loadingPercent');
  if (!screen) return;
  screen.classList.remove('is-preparing');
  screen.classList.add('is-hidden');
  if (percentEl) percentEl.textContent = '100%';
}

function finishInitialLoading() {
  const progress = document.getElementById('loadingProgress');
  const percentEl = document.getElementById('loadingPercent');
  if (progress) progress.style.width = '100%';
  if (percentEl) percentEl.textContent = '100%';
  setTimeout(hideLoading, 420);
}

if (document.readyState === 'complete') {
  setTimeout(finishInitialLoading, 520);
} else {
  window.addEventListener('load', () => setTimeout(finishInitialLoading, 320), { once: true });
}

function runStartCountdown() {
  const overlay = document.getElementById('countdownOverlay');
  const number = document.getElementById('countdownNumber');
  let count = 3;
  const sessionId = state.sessionId;
  overlay.classList.add('show');
  number.textContent = count;
  state.countdownTimer = setInterval(() => {
    if (sessionId !== state.sessionId || state.finished) {
      clearInterval(state.countdownTimer);
      overlay.classList.remove('show');
      return;
    }
    count--;
    if (count > 0) {
      number.textContent = count;
      number.style.animation = 'none';
      void number.offsetWidth;
      number.style.animation = '';
      return;
    }
    clearInterval(state.countdownTimer);
    number.textContent = 'XUẤT PHÁT!';
    number.style.fontSize = 'clamp(44px,10vw,82px)';
    setTimeout(() => {
      if (sessionId !== state.sessionId || state.finished) return;
      overlay.classList.remove('show');
      number.style.fontSize = '';
      startTimer();
      const input = document.getElementById('fillInput');
      if (input) input.focus();
    }, 650);
  }, 900);
}

function restartGame() {
  clearInterval(state.timer);
  clearInterval(state.countdownTimer);
  document.getElementById('countdownOverlay').classList.remove('show');
  state.finished = true;
  document.getElementById('charModal').classList.remove('show');
  document.getElementById('gameOverModal').classList.remove('show');
  document.body.classList.remove('modal-open');
  hideLoading();
  document.getElementById('gameScreen').classList.remove('active');
  document.getElementById('startScreen').classList.add('active');
}

/* ============================================================
   BOARD RENDERING
   ============================================================ */
function buildBoard() {
  const board = document.getElementById('board');
  board.innerHTML = '';
  // 5 rows of 10, serpentine. Bottom row left-to-right = steps 1..10,
  // next row right-to-left = 11..20, etc. Display column-reverse so row 1 (steps 1-10) is at bottom.
  const rows = 5, cols = 10;
  for (let r = 0; r < rows; r++) {
    const row = document.createElement('div');
    row.className = 'board-row' + (r % 2 === 1 ? ' reverse' : '');
    for (let c = 0; c < cols; c++) {
      const stepNum = r * cols + c + 1;
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.step = stepNum;
      if (stepNum === BOARD_SIZE) cell.classList.add('finish');
      else if (MILESTONES.includes(stepNum)) cell.classList.add('milestone-' + stepNum);
      let label = stepNum;
      if (stepNum === BOARD_SIZE) label = '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 21h8m-4-4v4M7 4h10v5a5 5 0 0 1-10 0zm10 2h4v2a4 4 0 0 1-4 4M7 6H3v2a4 4 0 0 0 4 4"/></svg>';
      else if (MILESTONES.includes(stepNum)) label = '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10h18v11H3zM2 6h20v4H2zM12 6v15M12 6H7a2 2 0 1 1 2-2c0 2 3 2 3 2zm0 0h5a2 2 0 1 0-2-2c0 2-3 2-3 2z"/></svg>' + stepNum;
      cell.innerHTML = label;
      cell.id = 'cell-' + stepNum;
      row.appendChild(cell);
    }
    board.appendChild(row);
  }
  updatePlayerToken();
}

function updatePlayerToken() {
  // Remove existing
  document.querySelectorAll('.player-token').forEach(t => t.remove());
  document.querySelectorAll('.cell.player-here').forEach(c => c.classList.remove('player-here'));

  if (state.step === 0) {
    // Show at start area (cell 0 doesn't exist, highlight start)
    return;
  }
  const cell = document.getElementById('cell-' + state.step);
  if (!cell) return;
  cell.classList.add('player-here');

  const token = document.createElement('div');
  token.className = 'player-token';
  token.innerHTML = `<div class="player-icon">YOU</div>`;
  // companion mini icons
  if (state.companions.length) {
    const wrap = document.createElement('div');
    wrap.className = 'companion-icons';
    state.companions.forEach(cid => {
      const c = COMPANIONS.find(x => x.id === cid);
      const m = document.createElement('div');
      m.className = 'companion-mini';
      m.textContent = c.avatar;
      wrap.appendChild(m);
    });
    token.appendChild(wrap);
  }
  cell.appendChild(token);
}

/* ============================================================
   COMPANIONS UI
   ============================================================ */
function renderCompanions() {
  const list = document.getElementById('companionsList');
  list.innerHTML = '';
  if (state.companions.length === 0) {
    list.innerHTML = `
      <div class="companion-row empty">Chưa có đồng hành — đạt ô 15 để chọn</div>
      <div class="companion-row empty">Ô thứ 2 mở ở ô 30</div>`;
    return;
  }
  state.companions.forEach(cid => {
    const c = COMPANIONS.find(x => x.id === cid);
    const row = document.createElement('div');
    row.className = 'companion-row';
    const image = COMPANION_IMAGES[c.id];
    row.innerHTML = `
      <div class="companion-avatar${image ? ' has-photo' : ''}">${image ? `<img src="${image}" alt="${c.name}" loading="lazy">` : c.avatar}</div>
      <div class="companion-info">
        <div class="companion-name">${c.name}</div>
        <div class="companion-ability">${c.ability}</div>
      </div>`;
    list.appendChild(row);
  });
  // Fill remaining slot
  const pickedCount = state.companions.length;
  if (pickedCount < 2) {
    const empty = document.createElement('div');
    empty.className = 'companion-row empty';
    empty.textContent = pickedCount === 0
      ? 'Đạt ô 15 để chọn đồng hành đầu tiên'
      : 'Đạt ô 30 để chọn đồng hành thứ hai';
    list.appendChild(empty);
  }
}

/* ============================================================
   QUESTION LOADING
   ============================================================ */
function loadQuestion(startClock = true) {
  if (state.qIndex >= state.questions.length || state.reachedFinish) {
    endGame();
    return;
  }
  state.answered = false;
  state.retryUsed = false;
  state.selectedWords = [];
  state.currentQ = state.questions[state.qIndex];
  state.isRepeatQuestion = Boolean(state.currentQ.isRepeatQuestion);
  state.timeLeft = state.companions.includes('minh') ? BASE_TIME + 10 : BASE_TIME;

  const q = state.currentQ;
  document.getElementById('qCounter').textContent = `Câu ${state.qIndex + 1} / ${state.questions.length}`;
  document.getElementById('qNumVal').textContent = `${state.qIndex + 1}/${state.questions.length}`;
  const badge = document.getElementById('qTypeBadge');
  if (q.type === 'choice') { badge.textContent = 'Trắc nghiệm'; badge.className = 'q-type-badge choice'; }
  else if (q.type === 'fill') { badge.textContent = 'Điền khuyết'; badge.className = 'q-type-badge fill'; }
  else { badge.textContent = 'Chọn từ'; badge.className = 'q-type-badge word'; }

  document.getElementById('qText').textContent = q.q;
  document.getElementById('feedback').className = 'feedback';
  document.getElementById('btnNext').classList.remove('show');

  renderAnswerArea(q);
  if (startClock) startTimer();
}

function renderAnswerArea(q) {
  const area = document.getElementById('answerArea');
  area.innerHTML = '';

  if (q.type === 'choice') {
    const wrap = document.createElement('div');
    wrap.className = 'options';
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option';
      btn.innerHTML = `<span class="letter">${String.fromCharCode(65+i)}</span><span>${opt}</span>`;
      btn.onclick = () => handleChoiceAnswer(i, btn);
      wrap.appendChild(btn);
    });
    area.appendChild(wrap);
  } else if (q.type === 'fill') {
    const wrap = document.createElement('div');
    wrap.className = 'fill-input-wrap';
    wrap.innerHTML = `
      <input type="text" class="fill-input" id="fillInput" placeholder="Nhập câu trả lời của bạn..." autocomplete="off">
      <button class="btn-submit" onclick="submitFill()">XÁC NHẬN</button>`;
    area.appendChild(wrap);
    setTimeout(() => document.getElementById('fillInput').focus(), 50);
    document.getElementById('fillInput').addEventListener('keydown', e => {
      if (e.key === 'Enter') submitFill();
    });
  } else if (q.type === 'word') {
    // Answer slots
    const slots = document.createElement('div');
    slots.className = 'word-answer-slots';
    slots.id = 'wordSlots';
    q.answer.forEach((_, i) => {
      const slot = document.createElement('div');
      slot.className = 'word-slot-empty';
      slot.textContent = `___`;
      slot.dataset.slot = i;
      slot.onclick = () => removeWord(i);
      slots.appendChild(slot);
    });
    area.appendChild(slots);

    // Word pool
    const pool = document.createElement('div');
    pool.className = 'word-pool';
    // Shuffle pool for variety
    shuffle(q.pool).forEach(w => {
      const chip = document.createElement('div');
      chip.className = 'word-chip';
      chip.textContent = w;
      chip.dataset.word = w;
      chip.onclick = () => addWord(w, chip);
      pool.appendChild(chip);
    });
    area.appendChild(pool);

    const submit = document.createElement('button');
    submit.className = 'btn-submit';
    submit.style.width = '100%';
    submit.textContent = 'XÁC NHẬN';
    submit.onclick = submitWord;
    area.appendChild(submit);
  }
}

/* ============================================================
   TIMER
   ============================================================ */
function startTimer() {
  clearInterval(state.timer);
  const max = state.timeLeft;
  updateTimerUI(max);
  state.timer = setInterval(() => {
    state.timeLeft--;
    updateTimerUI(max);
    if (state.timeLeft <= 0) {
      clearInterval(state.timer);
      handleTimeout();
    }
  }, 1000);
}

function updateTimerUI(max) {
  document.getElementById('timerVal').textContent = state.timeLeft;
  const bar = document.getElementById('timerBar');
  bar.style.width = Math.max(0, (state.timeLeft / max) * 100) + '%';
  const chip = document.getElementById('timerChip');
  if (state.timeLeft <= 5) chip.classList.add('warning');
  else chip.classList.remove('warning');
}

function handleTimeout() {
  if (state.answered) return;
  clearInterval(state.timer);
  registerWrongAnswer();
  if (offerRetry()) return;
  state.answered = true;
  // Disable inputs
  document.querySelectorAll('.option, .word-chip, .btn-submit').forEach(b => b.classList.add('disabled'));
  const fb = document.getElementById('feedback');
  fb.className = 'feedback wrong show';
  fb.innerHTML = `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg> Hết giờ! Đáp án: ${getCorrectAnswerText(state.currentQ)}`;
  document.getElementById('btnNext').classList.add('show');
}

/* ============================================================
   ANSWER HANDLERS
   ============================================================ */
function registerWrongAnswer() {
  state.streak = 0;
  if (state.companions.includes('nguyenphuonganh')) state.phuongAnhBoostPending = true;
}

function handleChoiceAnswer(picked, btn) {
  if (state.answered) return;
  state.answered = true;
  clearInterval(state.timer);
  const q = state.currentQ;
  const correct = picked === q.answer;
  if (!correct && offerRetry()) return;
  const allOptions = document.querySelectorAll('.option');
  allOptions.forEach(o => o.classList.add('disabled'));
  allOptions[q.answer].classList.add('correct');
  if (!correct) btn.classList.add('wrong');

  showFeedback(correct);
  if (correct) onCorrectAnswer();
  else { registerWrongAnswer();
    const fb = document.getElementById('feedback');
    fb.textContent += ` — Đáp án đúng: ${q.options[q.answer]}`;
  }
  document.getElementById('btnNext').classList.add('show');
}

function submitFill() {
  if (state.answered) return;
  const input = document.getElementById('fillInput');
  const val = (input.value || '').trim().toLowerCase();
  if (!val) return;
  state.answered = true;
  clearInterval(state.timer);
  input.disabled = true;

  const q = state.currentQ;
  const accepts = (q.accept || [q.answer]).map(a => a.toLowerCase());
  const correct = accepts.some(a => a === val || val.normalize('NFD').replace(/[\u0300-\u036f]/g,'') === a.normalize('NFD').replace(/[\u0300-\u036f]/g,''));
  if (!correct && offerRetry()) return;
  showFeedback(correct);
  if (correct) onCorrectAnswer();
  else { state.streak = 0;
    const fb = document.getElementById('feedback');
    fb.textContent += ` — Đáp án đúng: ${q.answer}`;
  }
  document.getElementById('btnNext').classList.add('show');
}

function addWord(word, chip) {
  if (state.answered) return;
  // Find first empty slot
  const slots = document.querySelectorAll('#wordSlots .word-slot-empty');
  if (slots.length === 0) return;
  const slot = slots[0];
  slot.className = 'word-slot';
  slot.textContent = word + ' ✕';
  slot.dataset.word = word;
  chip.classList.add('used');
  state.selectedWords.push(word);
}

function removeWord(slotIndex) {
  if (state.answered) return;
  const slot = document.querySelectorAll('#wordSlots > div')[slotIndex];
  if (!slot || !slot.classList.contains('word-slot')) return;
  const word = slot.dataset.word;
  slot.className = 'word-slot-empty';
  slot.textContent = '___';
  slot.removeAttribute('data-word');
  state.selectedWords.splice(state.selectedWords.indexOf(word), 1);
  // Re-enable chip
  const chip = document.querySelector(`.word-chip[data-word="${word}"]`);
  if (chip) chip.classList.remove('used');
}

function submitWord() {
  if (state.answered) return;
  const visibleWords = Array.from(document.querySelectorAll('#wordSlots .word-slot'))
    .map(slot => slot.dataset.word || slot.textContent.replace(/\s+✕\s*$/, '').trim())
    .filter(Boolean);
  if (visibleWords.length !== state.currentQ.answer.length) {
    const fb = document.getElementById('feedback');
    fb.className = 'feedback info show';
    fb.textContent = `Hãy chọn đủ ${state.currentQ.answer.length} từ trước khi xác nhận.`;
    return;
  }
  state.selectedWords = visibleWords;
  state.answered = true;
  clearInterval(state.timer);
  document.querySelectorAll('.word-chip, .word-slot').forEach(b => b.classList.add('disabled'));

  const q = state.currentQ;
  const normalizeWord = value => String(value).normalize('NFKC').replace(/\s+/g, ' ').trim().toLocaleLowerCase('vi-VN');
  const correct = state.selectedWords.length === q.answer.length
    && state.selectedWords.every((word, i) => normalizeWord(word) === normalizeWord(q.answer[i]));
  if (!correct && offerRetry()) return;
  showFeedback(correct);
  if (correct) onCorrectAnswer();
  else { state.streak = 0;
    const fb = document.getElementById('feedback');
    fb.textContent += ` — Đáp án đúng: ${q.answer.join(' → ')}`;
  }
  document.getElementById('btnNext').classList.add('show');
}

function getCorrectAnswerText(q) {
  if (q.type === 'choice') return q.options[q.answer];
  if (q.type === 'fill') return q.answer;
  return q.answer.join(' → ');
}

function offerRetry() {
  if (!state.companions.includes('phuonganh') || state.retryUsed) return false;
  state.retryUsed = true;
  state.answered = false;
  state.selectedWords = [];
  state.timeLeft = Math.max(state.timeLeft, Math.floor(BASE_TIME / 2));
  document.getElementById('feedback').className = 'feedback info show';
  document.getElementById('feedback').textContent = 'Lê Thị Phương Anh: bạn còn 1 cơ hội nữa — streak vẫn được giữ!';
  document.getElementById('btnNext').classList.remove('show');
  // Reset the answer controls while preserving remaining time and the current question.
  renderAnswerArea(state.currentQ);
  startTimer();
  return true;
}

function showFeedback(correct) {
  playSound(correct ? 'correct' : 'wrong');
  const fb = document.getElementById('feedback');
  fb.className = 'feedback ' + (correct ? 'correct' : 'wrong') + ' show';
  fb.textContent = correct ? '✓ Chính xác!' : '✗ Chưa đúng';
}

/* ============================================================
   CORRECT ANSWER → SCORE & DICE
   ============================================================ */
function onCorrectAnswer() {
  state.resolvingTurn = true;
  state.correctCount++;
  if (state.companions.includes('halinh') && !state.isRepeatQuestion && state.haLinhCooldown === 0) {
    state.pendingRepeatQuestion = JSON.parse(JSON.stringify(state.currentQ));
    state.pendingRepeatQuestion.isRepeatQuestion = true;
    state.haLinhCooldown = 4;
    document.getElementById('feedback').innerHTML += '<br>Hà Linh: câu hỏi này sẽ xuất hiện lại ở lượt kế tiếp.';
  }
  const timeUsed = (state.companions.includes('minh') ? BASE_TIME + 10 : BASE_TIME) - state.timeLeft;
  let earned = POINTS_BASE + Math.round(POINTS_TIME_BONUS * (state.timeLeft / (state.companions.includes('minh') ? BASE_TIME + 10 : BASE_TIME)));
  state.streak++;
  let streakBonus = 0;
  if (state.companions.includes('anh')) { streakBonus = state.streak * 50; earned += streakBonus; }
  const phuongAnhBoost = state.companions.includes('nguyenphuonganh') && state.phuongAnhBoostPending;

  // Phạm Thị Thảo Anh bonus: x2 if answered within EARLY_WINDOW seconds
  let thaoAnhBonus = 0;
  if (state.companions.includes('thoanh') && timeUsed <= EARLY_WINDOW) {
    thaoAnhBonus = earned; // double
    earned += thaoAnhBonus;
  }

  if (phuongAnhBoost) earned *= 2;
  state.score += earned;
  if (phuongAnhBoost) state.phuongAnhBoostPending = false;
  if (phuongAnhBoost) showFloatingPoints(`Nguyễn Phương Anh x2 điểm · +${earned}`, true, '#b06cff');
  showFloatingPoints('+' + earned + (streakBonus ? ` (streak +${streakBonus})` : ''), thaoAnhBonus > 0 || streakBonus > 0 || phuongAnhBoost);
  updateTopbar();

  // Roll dice
  const sessionId = state.sessionId;
  rollDice().then(steps => {
    if (sessionId !== state.sessionId || state.finished) return;
    let totalSteps = steps;
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
      const multiplier = steps === 3 ? 1.2 : 1.5;
      const bonus = Math.round(state.score * (multiplier - 1));
      state.score += bonus; updateTopbar();
      showFloatingPoints(`Tô Thu Trang x${multiplier} · +${bonus}`, true, '#d19a00');
      document.getElementById('diceResult').textContent += ` · điểm x${multiplier}`;
    }
    // Đào Thị Thu Hằng: +2
    if (state.companions.includes('hang')) totalSteps += 2;
    movePlayer(totalSteps, steps);
  });
}

function rollDice() {
  playSound('dice');
  return new Promise(resolve => {
    const dice = document.getElementById('dice');
    dice.classList.add('rolling');
    let counter = 0;
    const interval = setInterval(() => {
      dice.textContent = Math.floor(Math.random() * 4) + 1;
      counter++;
      if (counter > 8) {
        clearInterval(interval);
        const result = Math.floor(Math.random() * 4) + 1;
        dice.textContent = result;
        dice.classList.remove('rolling');
        document.getElementById('diceResult').textContent = `Được ${result} bước`;
        resolve(result);
      }
    }, 70);
  });
}

function movePlayer(totalSteps, diceVal) {
  if (state.finished) return;
  let waitingForCompanion = false;
  const fromStep = state.step;
  let target = Math.min(fromStep + totalSteps, BOARD_SIZE);
  state.step = target;
  updatePlayerToken();
  updateTopbar();

  // Đặng Thị Phương Linh: +100 điểm cho mỗi ô chẵn được đi qua.
  if (state.companions.includes('phuonglinh')) {
    let evenSteps = 0;
    for (let crossed = fromStep + 1; crossed <= target; crossed++) {
      if (crossed % 2 === 0) evenSteps++;
    }
    const bonus = evenSteps * 100;
    if (bonus > 0) {
      state.score += bonus;
      showFloatingPoints(`Phương Linh · +${bonus} (ô chẵn)`, true, '#d19a00');
    }
  }
  updateTopbar();

  // Show floating steps
  showFloatingPoints('<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 8h.01M16 8h.01M12 12h.01M8 16h.01M16 16h.01"/></svg> +' + totalSteps + ' bước', false, '#00bbfe');

  // Check finish
  if (target >= BOARD_SIZE && !state.reachedFinish) {
    state.reachedFinish = true;
    playSound('finish');
    state.score += POINTS_FINISH_BONUS;
    if (state.companions.includes('dung')) state.score += POINTS_FINISH_BONUS;
    updateTopbar();
    setTimeout(() => {
      showFloatingPoints('<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 21h8m-4-4v4M7 4h10v5a5 5 0 0 1-10 0zm10 2h4v2a4 4 0 0 1-4 4M7 6H3v2a4 4 0 0 0 4 4"/></svg> +' + (state.companions.includes('dung') ? '1.000' : '500') + ' VỀ ĐÍCH!', false, '#ffd24a');
      launchConfetti();
      const fb = document.getElementById('feedback');
      fb.className = 'feedback info show';
      fb.innerHTML = fb.textContent + '<br>CHÚC MỪNG! Bạn đã về đích và nhận +500 điểm thưởng!';
      // Disable next button (game will end after a delay)
      document.getElementById('btnNext').textContent = 'XEM KẾT QUẢ ▶';
      state.resolvingTurn = false;
    }, 600);
    return;
  }

  // Check milestones (only if not already triggered for this milestone and we passed it)
  for (const m of MILESTONES) {
    if (fromStep < m && target >= m && !state.passedMilestones.has(m)) {
      state.passedMilestones.add(m);
      // Only trigger if there's still a companion to pick
      const remaining = COMPANIONS.filter(c => !state.companions.includes(c.id));
      if (remaining.length > 0) {
        waitingForCompanion = true;
        const sessionId = state.sessionId;
        setTimeout(() => {
          if (sessionId === state.sessionId && !state.finished) openCharModal(m);
        }, 700);
      }
      break; // Only one modal at a time
    }
  }
  if (!waitingForCompanion) state.resolvingTurn = false;
}

/* ============================================================
   CHARACTER SELECT MODAL
   ============================================================ */
function openCharModal(milestone) {
  const modal = document.getElementById('charModal');
  const subtitle = document.getElementById('charModalSubtitle');
  subtitle.textContent = `Bạn vừa đạt ô ${milestone} — chọn 1 đồng hành còn lại`;
  const grid = document.getElementById('charGrid');
  grid.innerHTML = '';
  COMPANIONS.forEach(c => {
    const picked = state.companions.includes(c.id);
    const card = document.createElement('div');
    card.className = 'char-card' + (picked ? ' picked' : '');
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', picked ? '-1' : '0');
    card.setAttribute('aria-label', picked ? `${c.name}, đã chọn` : `Chọn ${c.name}`);
      const image = COMPANION_IMAGES[c.id];
      card.innerHTML = `
        <div class="char-card-head"><span class="char-index">YTC / ${String(COMPANIONS.indexOf(c) + 1).padStart(2, '0')}</span><span class="char-tag">ĐỒNG HÀNH</span></div>
        <div class="char-avatar-big${image ? ' has-photo' : ''}">${image ? `<img src="${image}" alt="${c.name}" loading="lazy">` : c.avatar}</div>
        <div class="char-name">${c.name}</div>
        <div class="char-role">${c.role}</div>
        <div class="char-ability"><span class="char-ability-label">NĂNG LỰC</span>${c.ability}</div>`;
    if (!picked) {
      card.onclick = () => pickCompanion(c.id);
      card.onkeydown = event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          pickCompanion(c.id);
        }
      };
    }
    grid.appendChild(card);
  });
  modal.classList.add('show');
  document.body.classList.add('modal-open');
  requestAnimationFrame(() => {
    const firstAvailable = grid.querySelector('.char-card:not(.picked)');
    if (firstAvailable && window.matchMedia('(min-width: 601px)').matches) firstAvailable.focus();
  });
}

function pickCompanion(id) {
  if (state.finished || state.companions.includes(id)) return;
  playSound('select');
  state.companions.push(id);
  const c = COMPANIONS.find(x => x.id === id);
  document.getElementById('charModal').classList.remove('show');
  document.body.classList.remove('modal-open');
  renderCompanions();
  updatePlayerToken();
  showFloatingPoints('<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m8 12 3 3a2 2 0 0 0 3 0l4-4M4 9l4-4 4 2 4-2 4 4-3 3-4-1-3 2-5-4"/><path d="m4 9-2 2 3 4 2-2m13-4 2 2-3 4-2-2"/></svg> ' + c.name, false, '#ffd24a');
  state.resolvingTurn = false;
}

/* ============================================================
   NAVIGATE TO NEXT QUESTION
   ============================================================ */
function goNext() {
  if (!state.answered || state.resolvingTurn || state.finished) return;
  if (!state.isRepeatQuestion && state.haLinhCooldown > 0) state.haLinhCooldown--;
  state.qIndex++;
  if (state.pendingRepeatQuestion) {
    state.questions.splice(state.qIndex, 0, state.pendingRepeatQuestion);
    state.pendingRepeatQuestion = null;
  }
  // Reset next button text
  document.getElementById('btnNext').textContent = 'CÂU TIẾP THEO ▶';
  // If character modal is showing, wait — but flow continues
  if (state.qIndex >= state.questions.length || state.reachedFinish) {
    endGame();
    return;
  }
  loadQuestion();
}


/* ============================================================
   LOCAL RECORDS — highscore & play history
   ============================================================ */
const HIGHSCORE_KEY = 'ytcQuizRaceHighscores';
const HISTORY_KEY = 'ytcQuizRaceHistory';
function readRecords(key) { try { const value = JSON.parse(localStorage.getItem(key) || '[]'); return Array.isArray(value) ? value : []; } catch { return []; } }
function writeRecords(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function formatRecordDate(iso) { try { return new Intl.DateTimeFormat('vi-VN', { day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' }).format(new Date(iso)); } catch { return iso; } }
function renderRecords() {
  const highscore = readRecords(HIGHSCORE_KEY).sort((a,b) => b.score - a.score || b.step - a.step || b.correct - a.correct).slice(0, 5);
  const history = readRecords(HISTORY_KEY).sort((a,b) => new Date(b.playedAt) - new Date(a.playedAt)).slice(0, 8);
  const highscoreList = document.getElementById('highscoreList');
  const historyList = document.getElementById('historyList');
  if (!highscoreList || !historyList) return;
  highscoreList.innerHTML = highscore.length ? highscore.map(item => `<li><span>${item.correct}/${item.total} đúng</span><span class="record-score">${Number(item.score).toLocaleString('vi-VN')} điểm</span></li>`).join('') : '<li class="record-empty">Chưa có kỷ lục</li>';
  historyList.innerHTML = history.length ? history.map(item => `<div class="history-item"><span><strong>${Number(item.score).toLocaleString('vi-VN')} điểm</strong><br>${item.step}/50 ô · ${item.correct}/${item.total} đúng</span><span>${formatRecordDate(item.playedAt)}</span></div>`).join('') : '<div class="record-empty">Chưa có lượt chơi</div>';
}

function renderCompanionIntro() {
  const grid = document.getElementById('companionIntroGrid'); if (!grid) return;
  grid.innerHTML = COMPANIONS.map(c => { const image = COMPANION_IMAGES[c.id]; return `<article class="intro-companion-card"><div class="intro-companion-avatar">${image ? `<img src="${image}" alt="${c.name}" loading="lazy">` : c.avatar}</div><div><div class="intro-companion-name">${c.name}</div><div class="intro-companion-role">${c.role}</div></div><div class="intro-companion-ability">${c.ability}</div></article>`; }).join('');
}

function saveRunRecord() {
  const record = { score: state.score, step: state.step, correct: state.correctCount, total: state.questions.length, reachedFinish: state.reachedFinish, companions: state.companions.slice(), playedAt: new Date().toISOString() };
  const history = [record, ...readRecords(HISTORY_KEY)].slice(0, 20);
  const highscore = [record, ...readRecords(HIGHSCORE_KEY)].sort((a,b) => b.score - a.score || b.step - a.step || b.correct - a.correct).slice(0, 10);
  writeRecords(HISTORY_KEY, history); writeRecords(HIGHSCORE_KEY, highscore); renderRecords();
  const best = highscore[0] && highscore[0].playedAt === record.playedAt && highscore[0].score === record.score;
  const result = document.getElementById('recordResult');
  if (result) result.textContent = best ? 'KỶ LỤC MỚI — Bạn đang đứng đầu bảng điểm trên thiết bị này.' : 'Kết quả đã được lưu vào lịch sử chơi trên thiết bị này.';
}
function clearRecords() {
  if (!confirm('Xóa toàn bộ highscore và lịch sử chơi trên thiết bị này?')) return;
  localStorage.removeItem(HIGHSCORE_KEY); localStorage.removeItem(HISTORY_KEY); renderRecords();
  const message = document.getElementById('recordsMessage'); if (message) message.textContent = 'Đã xóa highscore và lịch sử chơi.';
  const result = document.getElementById('recordResult'); if (result) result.textContent = '';
}

/* ============================================================
   END GAME
   ============================================================ */
function endGame() {
  if (state.finished) return;
  state.finished = true;
  state.resolvingTurn = false;
  clearInterval(state.timer);
  // Trần Mạnh Dũng: nếu hết câu hỏi trước khi về đích, mỗi bước được quy đổi thành 100 điểm.
  if (!state.reachedFinish && state.companions.includes('dung')) {
    const distanceBonus = state.step * 100;
    state.score += distanceBonus;
    if (distanceBonus > 0) showFloatingPoints(`Mạnh Dũng · +${distanceBonus} điểm theo ${state.step} bước`, true, '#d19a00');
  }
  document.getElementById('finalScore').textContent = state.score.toLocaleString('vi-VN');
  document.getElementById('finalStep').textContent = state.step + '/50';
  document.getElementById('finalCorrect').textContent = state.correctCount + '/' + state.questions.length;
  document.getElementById('finalCompanions').textContent = state.companions.length + ' người';
  saveRunRecord();

  let rank = 'Cố gắng lần sau!';
  if (state.score >= 10000) rank = '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 21h8m-4-4v4M7 4h10v5a5 5 0 0 1-10 0zm10 2h4v2a4 4 0 0 1-4 4M7 6H3v2a4 4 0 0 0 4 4"/></svg> HUYỀN THOẠI YTC!';
  else if (state.score >= 5000) rank = '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="14" r="7"/><path d="M9 3h6l2 4H7zM12 10l1.2 2.5 2.8.4-2 1.9.5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-1.9 2.8-.4z"/></svg> BẬC THẦY QUIZ!';
  else if (state.score >= 2000) rank = '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="14" r="7"/><path d="M9 3h6l2 4H7zM9.5 12a2.5 2.5 0 1 1 4 2L10 18h4"/></svg> XUẤT SẮC!';
  else if (state.score >= 1000) rank = '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="14" r="7"/><path d="M9 3h6l2 4H7zM9.5 12a2.5 2.5 0 1 1 2.5 2m0 0a2.5 2.5 0 1 1-2.5 2"/></svg> KHÁ TỐT!';
  if (state.reachedFinish) rank = '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 21V4m0 1h14l-3 4 3 4H5"/><path d="M9 5v4m4-4v4m-4 0v4m4-4v4"/></svg> VỀ ĐÍCH! ' + rank;
  document.getElementById('gameOverRank').innerHTML = rank;
  document.getElementById('gameOverTitle').innerHTML = state.reachedFinish ? '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 21h8m-4-4v4M7 4h10v5a5 5 0 0 1-10 0zm10 2h4v2a4 4 0 0 1-4 4M7 6H3v2a4 4 0 0 0 4 4"/></svg> VỀ ĐÍCH!' : '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 21V4m0 1h14l-3 4 3 4H5"/><path d="M9 5v4m4-4v4m-4 0v4m4-4v4"/></svg> KẾT THÚC!';
  document.getElementById('gameOverModal').classList.add('show');
  if (state.reachedFinish) launchConfetti();
}

/* ============================================================
   UI HELPERS
   ============================================================ */
function updateTopbar() {
  document.getElementById('scoreVal').textContent = state.score.toLocaleString('vi-VN');
  document.getElementById('stepVal').textContent = state.step + '/50';
  document.getElementById('stepNowBadge').textContent = 'Ô ' + state.step;
}

function showFloatingPoints(text, isBonus, color) {
  const pop = document.createElement('div');
  pop.className = 'points-pop';
  pop.innerHTML = text;
  if (color) pop.style.color = color;
  // Position near top center
  pop.style.left = '50%';
  pop.style.top = '120px';
  pop.style.transform = 'translateX(-50%)';
  document.body.appendChild(pop);
  setTimeout(() => pop.remove(), 1300);
}

function launchConfetti() {
  const colors = ['#00bbfe', '#273b93', '#ffd24a', '#2ed47a', '#ff7e5f'];
  for (let i = 0; i < 80; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.left = Math.random() * 100 + 'vw';
    c.style.top = '-20px';
    c.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    c.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(c);
    const fall = c.animate([
      { transform: `translate(0,0) rotate(0deg)`, opacity: 1 },
      { transform: `translate(${(Math.random()-0.5)*200}px, ${window.innerHeight + 50}px) rotate(${Math.random()*720}deg)`, opacity: 0 }
    ], { duration: 2000 + Math.random() * 1500, easing: 'cubic-bezier(0.3, 0.7, 0.4, 1)' });
    fall.onfinish = () => c.remove();
  }
}

renderRecords();
renderCompanionIntro();


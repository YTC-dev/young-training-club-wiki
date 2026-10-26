const fs = require('fs');
const path = String.raw`D:\YTC\quiz-game.html`;
const backup = String.raw`D:\YTC\quiz-game.before-dedupe-sfx.html`;
let text = fs.readFileSync(path, 'utf8');
fs.copyFileSync(path, backup);

const removeQuestions = [
  'YTC được thành lập vào tháng mấy năm 2012?',
  'Slogan YTC bắt đầu bằng hai chữ nào?',
  'YTC được thành lập vào năm nào?',
  'ONE TAKE là cuộc thi thuộc lĩnh vực nào?',
  'Rising Voice hướng tới việc tìm kiếm và bồi dưỡng tài năng nào?',
  'YTC giới thiệu mình là nơi rèn luyện kỹ năng mềm, tư duy sáng tạo và khả năng nào?',
  'Sắp xếp thứ hạng ONE-TAKE Gen 14.2 từ giải nhất đến giải ba:',
  'YTC tổ chức khoảng bao nhiêu sự kiện mỗi năm?',
  'Trang Facebook Young Training Club giới thiệu YTC thuộc trường đại học nào?',
  'YTC được thành lập ngày 23/04 năm ___'
];
function removeQuestionByText(qText) {
  const lines = text.split('\n');
  const hit = lines.findIndex(line => line.includes(`q: '${qText}`));
  if (hit < 0) throw new Error(`Question not found: ${qText}`);
  let start = hit;
  while (start >= 0 && !lines[start].includes('{ type:')) start--;
  let end = hit;
  while (end < lines.length && !lines[end].trim().endsWith('},')) end++;
  if (start < 0 || end >= lines.length) throw new Error(`Question boundary not found: ${qText}`);
  lines.splice(start, end - start + 1);
  text = lines.join('\n');
}
for (const q of removeQuestions) removeQuestionByText(q);

const newQuestions = `
  // ----- Câu hỏi mới, không lặp nội dung cũ -----
  { type: 'choice', q: 'Bài recap “Đồng hành hỗ trợ lễ vinh danh sinh viên tiêu biểu, xuất sắc tại UNETI” được đăng ngày nào?', options: ['16/10/2026','18/10/2026','20/10/2026','22/10/2026'], answer: 1 },
  { type: 'choice', q: 'Buổi sinh hoạt đầu tiên cùng Gen 15.1 của YTC diễn ra vào ngày nào?', options: ['28/09/2026','08/10/2026','15/10/2026','20/10/2026'], answer: 1 },
  { type: 'choice', q: 'Bài đăng về chương trình nâng cao năng lực số được YTC ghi nhận vào ngày nào?', options: ['08/10/2026','15/09/2026','16/10/2026','25/09/2026'], answer: 2 },
  { type: 'choice', q: 'Bài đăng “20/10 cùng YTC” ghi thời gian tổ chức vào ngày nào?', options: ['18/10/2026','20/10/2026','22/10/2026','28/10/2026'], answer: 2 },
  { type: 'choice', q: 'Trang Facebook Young Training Club hiện giới thiệu khoảng bao nhiêu người theo dõi?', options: ['860','2,6 nghìn','8,6 nghìn','86 nghìn'], answer: 2 },
  { type: 'choice', q: 'Hoạt động nào được Wiki YTC xếp vào nhóm “Nhiệt huyết & Cống hiến”?', options: ['Hỗ trợ hoạt động phong trào và chiến dịch tình nguyện','Cuộc thi MC - Giọng nói','Workshop thiết kế đồ hoạ','Cuộc thi Podcast - Phim'], answer: 0 },
  { type: 'fill', q: 'Tên cuộc thi video có cụm “ONE - ___” là gì?', answer: 'TAKE', accept: ['take'] },
  { type: 'fill', q: 'YTC có hơn ___ thành viên theo thống kê trên Wiki (viết số)', answer: '200', accept: ['200','200+'] },
  { type: 'word', q: 'Sắp xếp các mốc sự kiện theo thời gian từ sớm đến muộn:', pool: ['15/09/2026','25/09/2026','28/09/2026','08/10/2026'], answer: ['15/09/2026','25/09/2026','28/09/2026','08/10/2026'] },
`;
const listMarker = '\n];\n\n/* ============================================================\n   COMPANIONS';
if (!text.includes(listMarker)) throw new Error('Question list marker not found');
text = text.replace(listMarker, '\n' + newQuestions + '];\n\n/* ============================================================\n   COMPANIONS');

// Expand the Web Audio palette and attach sounds to more game states.
text = text.replace("click:[[660,.035,'sine',0]], countdown:[[330,.08,'triangle',0],[440,.1,'triangle',.1]], finish:", "click:[[660,.035,'sine',0]], word:[[520,.035,'triangle',0],[700,.045,'triangle',.05]], timeout:[[130,.18,'sawtooth',0],[90,.25,'sawtooth',.16]], milestone:[[440,.08,'sine',0],[660,.1,'sine',.1],[880,.18,'sine',.22]], modal:[[330,.06,'triangle',0],[494,.1,'triangle',.08]], diceTick:[[150,.025,'square',0]], gameover:[[392,.12,'sine',0],[330,.14,'sine',.14],[262,.25,'sine',.3]], countdown:[[330,.08,'triangle',0],[440,.1,'triangle',.1]], finish:");
text = text.replace("function handleTimeout() {\n  if (state.answered) return;", "function handleTimeout() {\n  if (state.answered) return;\n  playSound('timeout');");
text = text.replace("      if (sessionId === state.sessionId && !state.finished) openCharModal(m);", "      if (sessionId === state.sessionId && !state.finished) { playSound('milestone'); openCharModal(m); }");
text = text.replace("  modal.classList.add('show');\n  document.body.classList.add('modal-open');", "  modal.classList.add('show');\n  playSound('modal');\n  document.body.classList.add('modal-open');");
text = text.replace("  playSound('click');\n}\n\nfunction removeWord", "  playSound('word');\n}\n\nfunction removeWord");
text = text.replace("  playSound('click');\n}\n\nfunction submitWord", "  playSound('word');\n}\n\nfunction submitWord");
text = text.replace("      dice.textContent = Math.floor(Math.random() * 4) + 1;\n      counter++;", "      dice.textContent = Math.floor(Math.random() * 4) + 1;\n      if (counter % 2 === 0) playSound('diceTick');\n      counter++;");
text = text.replace("  document.getElementById('gameOverModal').classList.add('show');", "  document.getElementById('gameOverModal').classList.add('show');\n  playSound('gameover');");

fs.writeFileSync(path, text, 'utf8');
console.log(`Updated ${path}; backup: ${backup}; removed ${removeQuestions.length} duplicate questions; added 9 new questions.`);

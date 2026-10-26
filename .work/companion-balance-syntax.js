
/* ============================================================
   QUESTION POOL Ã¢â‚¬â€ Easy to edit/add more questions
   Each question: { type, q, ... }
   type: 'choice' | 'fill' | 'word'
   ============================================================ */
const QUESTIONS = [
  // ----- Multiple Choice -----
  { type: 'choice', q: 'YTC (Young Training Club) cÃƒÂ³ mÃƒÂ u chÃ¡Â»Â§ Ã„â€˜Ã¡ÂºÂ¡o lÃƒÂ  mÃƒÂ u gÃƒÂ¬?',
    options: ['xanh dÃ†Â°Ã†Â¡ng','Ã„â€˜Ã¡Â»Â','vÃƒÂ ng','xanh lÃƒÂ¡'], answer: 0 },
  { type: 'choice', q: 'YTC trÃ¡Â»Â±c thuÃ¡Â»â„¢c trÃ†Â°Ã¡Â»Âng Ã„â€˜Ã¡ÂºÂ¡i hÃ¡Â»Âc nÃƒÂ o?',
    options: ['HAUI','UNETI','BÃƒÂ¡ch Khoa','NEU'], answer: 1 },
  { type: 'choice', q: 'Slogan cÃ¡Â»Â§a YTC lÃƒÂ  gÃƒÂ¬?',
    options: ['TuÃ¡Â»â€¢i trÃ¡ÂºÂ» nÃ„Æ’ng Ã„â€˜Ã¡Â»â„¢ng','ÃƒÂ tÃ†Â°Ã¡Â»Å¸ng lÃ¡Â»â€ºn - TÃƒÂ i nÃ„Æ’ng trÃ¡ÂºÂ» - Chung niÃ¡Â»Âm tin','TiÃ¡ÂºÂ¿p lÃ¡Â»Â­a Ã„â€˜am mÃƒÂª','KÃ¡ÂºÂ¿t nÃ¡Â»â€˜i trÃƒÂ­ tuÃ¡Â»â€¡'], answer: 1 },
  { type: 'choice', q: 'QuÃƒÂ¡n quÃƒÂ¢n cuÃ¡Â»â„¢c thi Rising Voice 2025 lÃƒÂ  ai?',
    options: ['NguyÃ¡Â»â€¦n ThÃ¡Â»â€¹ Thanh Hoa','NguyÃ¡Â»â€¦n NgÃ¡Â»Âc NhÃ†Â° QuÃ¡Â»Â³nh','TÃƒÂ´ Thu Trang','NgÃƒÂ´ HÃ¡ÂºÂ¡nh NguyÃƒÂªn'], answer: 2 },
  { type: 'choice', q: 'ChÃ¡Â»Â§ nhiÃ¡Â»â€¡m CLB YTC (nÃ„Æ’m hÃ¡Â»Âc 2025-2026) lÃƒÂ  ai?',
    options: ['NguyÃ¡Â»â€¦n HÃ¡Â»â€œng Thanh','Ã„ÂÃƒÂ o ThÃ¡Â»â€¹ Thu HÃ¡ÂºÂ±ng','TÃƒÂ´ Thu Trang','NguyÃ¡Â»â€¦n Thanh Lan'], answer: 0 },
  { type: 'choice', q: 'Email liÃƒÂªn hÃ¡Â»â€¡ chÃƒÂ­nh thÃ¡Â»Â©c cÃ¡Â»Â§a YTC?',
    options: ['ytc@gmail.com','genz.ytc@gmail.com','contact.ytc@uneti.vn','ytc.uneti@gmail.com'], answer: 1 },
  { type: 'choice', q: 'Ã„ÂÃ¡ÂºÂ¿n nÃ„Æ’m 2026, YTC Ã„â€˜ÃƒÂ£ cÃƒÂ³ bao nhiÃƒÂªu thÃ¡ÂºÂ¿ hÃ¡Â»â€¡ (Gen)?',
    options: ['12','14','15','20'], answer: 2 },
  { type: 'choice', q: 'CÃ†Â¡ sÃ¡Â»Å¸ LÃ„Â©nh Nam, HÃƒÂ  NÃ¡Â»â„¢i cÃ¡Â»Â§a UNETI nÃ¡ÂºÂ±m Ã¡Â»Å¸ Ã„â€˜Ã†Â°Ã¡Â»Âng nÃƒÂ o?',
    options: ['218 LÃ„Â©nh Nam','353 TrÃ¡ÂºÂ§n HÃ†Â°ng Ã„ÂÃ¡ÂºÂ¡o','1 Ã„ÂÃ¡ÂºÂ¡i CÃ¡Â»â€œ ViÃ¡Â»â€¡t','144 XuÃƒÂ¢n ThuÃ¡Â»Â·'], answer: 0 },
  { type: 'choice', q: 'GiÃ¡ÂºÂ£i nhÃ¡ÂºÂ¥t cuÃ¡Â»â„¢c thi ONE-TAKE Gen 14.2 thuÃ¡Â»â„¢c nhÃƒÂ³m nÃƒÂ o?',
    options: ['OneTeam','ShineOn','Donald Trump','Rising Stars'], answer: 2 },
  { type: 'choice', q: 'YTC trÃ¡Â»Â±c thuÃ¡Â»â„¢c tÃ¡Â»â€¢ chÃ¡Â»Â©c nÃƒÂ o cÃ¡Â»Â§a UNETI?',
    options: ['Ã„ÂoÃƒÂ n TNCS HÃ¡Â»â€œ ChÃƒÂ­ Minh','HÃ¡Â»â„¢i Sinh viÃƒÂªn','Ban GiÃƒÂ¡m hiÃ¡Â»â€¡u','PhÃƒÂ²ng CÃƒÂ´ng tÃƒÂ¡c Sinh viÃƒÂªn'], answer: 0 },
  { type: 'choice', q: 'Ai lÃƒÂ  TrÃ†Â°Ã¡Â»Å¸ng ban MC - LÃ¡Â»â€¦ tÃƒÂ¢n (nÃ„Æ’m 2025-2026)?',
    options: ['NguyÃ¡Â»â€¦n Minh ÃƒÂnh','TÃƒÂ´ Thu Trang','NguyÃ¡Â»â€¦n ThuÃ¡Â»Â³ Trang','LÃƒÂª ThÃ¡Â»â€¹ PhÃ†Â°Ã†Â¡ng Anh'], answer: 1 },
  { type: 'choice', q: 'CuÃ¡Â»â„¢c thi nÃƒÂ o cÃ¡Â»Â§a YTC tÃ¡ÂºÂ­p trung vÃƒÂ o kÃ¡Â»Â¹ nÃ„Æ’ng dÃ¡ÂºÂ«n chÃ†Â°Ã†Â¡ng trÃƒÂ¬nh?',
    options: ['ONE-TAKE','Rising Voice','Podcast & Phim','Team Building'], answer: 1 },
  { type: 'choice', q: 'Sinh viÃƒÂªn UNETI tiÃƒÂªu biÃ¡Â»Æ’u "NguyÃ¡Â»â€¦n HÃ¡Â»â€œng Thanh" hÃ¡Â»Âc lÃ¡Â»â€ºp nÃƒÂ o?',
    options: ['DHLQ18A3HN','DHMK18A1HN','DHKT17A6HN','DHLQ17A1HN'], answer: 1 },
    { type: 'choice', q: 'Sinh viÃƒÂªn UNETI tiÃƒÂªu biÃ¡Â»Æ’u "NguyÃ¡Â»â€¦n Thanh Lan" hÃ¡Â»Âc lÃ¡Â»â€ºp nÃƒÂ o?',
    options: ['DHLQ18A3HN','DHMK18A1HN','DHKT17A6HN','DHLQ17A1HN'], answer: 3 },
  { type: 'choice', q: 'CÃ†Â¡ sÃ¡Â»Å¸ Nam Ã„ÂÃ¡Â»â€¹nh, Ninh BÃƒÂ¬nh cÃ¡Â»Â§a UNETI nÃ¡ÂºÂ±m Ã¡Â»Å¸ Ã„â€˜ÃƒÂ¢u?',
    options: ['218 LÃ„Â©nh Nam','353 TrÃ¡ÂºÂ§n HÃ†Â°ng Ã„ÂÃ¡ÂºÂ¡o','451 TÃƒÂ´n Ã„ÂÃ¡Â»Â©c ThÃ¡ÂºÂ¯ng','12 NguyÃ¡Â»â€¦n VÃ„Æ’n CÃ¡Â»Â«'], answer: 1 },
  { type: 'choice', q: 'YTC cÃƒÂ³ khoÃ¡ÂºÂ£ng bao nhiÃƒÂªu thÃƒÂ nh viÃƒÂªn (Ã„â€˜Ã¡ÂºÂ¿n 2026)?',
    options: ['50+','100+','200+','500+'], answer: 2 },
  { type: 'choice', q: 'CuÃ¡Â»â„¢c thi ONE-TAKE thuÃ¡Â»â„¢c mÃ¡ÂºÂ£ng nÃƒÂ o cÃ¡Â»Â§a YTC?',
    options: ['MC - GiÃ¡Â»Âng nÃƒÂ³i','SÃƒÂ¡ng tÃ¡ÂºÂ¡o & Media','TÃƒÂ¬nh nguyÃ¡Â»â€¡n','Team Building'], answer: 1 },
  { type: 'choice', q: 'PhÃ¡ÂºÂ¡m ThÃ¡Â»â€¹ ThÃ¡ÂºÂ£o Anh giÃ¡Â»Â¯ vai trÃƒÂ² gÃƒÂ¬ trong YTC?',
    options: ['TrÃ†Â°Ã¡Â»Å¸ng ban MC','PhÃƒÂ³ ban NhÃƒÂ¢n sÃ¡Â»Â± - HÃ¡ÂºÂ­u cÃ¡ÂºÂ§n','ChÃ¡Â»Â§ nhiÃ¡Â»â€¡m','TruyÃ¡Â»Ân thÃƒÂ´ng'], answer: 1 },
  { type: 'choice', q: 'Ã„ÂÃƒÂ o ThÃ¡Â»â€¹ Thu HÃ¡ÂºÂ±ng giÃ¡Â»Â¯ vai trÃƒÂ² gÃƒÂ¬ trong YTC?',
    options: ['PhÃƒÂ³ ban NhÃƒÂ¢n sÃ¡Â»Â± - HÃ¡ÂºÂ­u cÃ¡ÂºÂ§n','TrÃ†Â°Ã¡Â»Å¸ng ban MC','KÃ¡Â»Â¹ thuÃ¡ÂºÂ­t','TruyÃ¡Â»Ân thÃƒÂ´ng'], answer: 0 },
  { type: 'choice', q: 'NguyÃ¡Â»â€¦n Minh ÃƒÂnh Ã„â€˜Ã¡ÂºÂ¡t giÃ¡ÂºÂ£i gÃƒÂ¬ trong Rising Voice 2025?',
    options: ['QuÃƒÂ¡n quÃƒÂ¢n','ÃƒÂ quÃƒÂ¢n 1','ÃƒÂ quÃƒÂ¢n 2','YÃƒÂªu thÃƒÂ­ch nhÃ¡ÂºÂ¥t'], answer: 2 },
    { type: 'choice', q: 'TiÃƒÂªu Ã„â€˜Ã¡Â»Â cÃ¡Â»Â§a chuÃ¡Â»â€”i sÃ¡Â»Â± kiÃ¡Â»â€¡n "Sinh nhÃ¡ÂºÂ­t lÃ¡ÂºÂ§n thÃ¡Â»Â© 14 cÃ¡Â»Â§a YTC" lÃƒÂ  gÃƒÂ¬?',
    options: ['Fourteen','ChuyÃ¡ÂºÂ¿n tÃƒÂ u thÃ¡Â»Âi gian','NhÃ¡Â»Â¯ng dÃƒÂ²ng kÃƒÂ½ Ã¡Â»Â©c','Rising Voice'], answer: 1 },

  // ----- Fill in the blank -----
  { type: 'fill', q: 'YTC lÃƒÂ  viÃ¡ÂºÂ¿t tÃ¡ÂºÂ¯t cÃ¡Â»Â§a cÃ¡Â»Â¥m tÃ¡Â»Â« nÃƒÂ o? (tiÃ¡ÂºÂ¿ng Anh)', answer: 'Young Training Club',
    accept: ['young training club','youngtrainingclub'] },
  { type: 'fill', q: 'HoÃƒÂ n thÃƒÂ nh slogan: "ÃƒÂ tÃ†Â°Ã¡Â»Å¸ng lÃ¡Â»â€ºn - TÃƒÂ i nÃ„Æ’ng trÃ¡ÂºÂ» - ___ niÃ¡Â»Âm tin"', answer: 'Chung',
    accept: ['chung'] },
  { type: 'fill', q: 'UNETI lÃƒÂ  trÃ†Â°Ã¡Â»Âng Ã„ÂÃ¡ÂºÂ¡i hÃ¡Â»Âc Kinh tÃ¡ÂºÂ¿ - ___ CÃƒÂ´ng NghiÃ¡Â»â€¡p', answer: 'KÃ¡Â»Â¹ thuÃ¡ÂºÂ­t',
    accept: ['kÃ¡Â»Â¹ thuÃ¡ÂºÂ­t','ky thuat'] },
  { type: 'fill', q: 'Email YTC cÃƒÂ³ phÃ¡ÂºÂ§n tÃƒÂªn (trÃ†Â°Ã¡Â»â€ºc @gmail.com) lÃƒÂ  gÃƒÂ¬?', answer: 'genz.ytc',
    accept: ['genz.ytc','genzytc'] },
  { type: 'fill', q: 'TÃƒÂ´ Thu Trang lÃƒÂ  quÃƒÂ¡n quÃƒÂ¢n cuÃ¡Â»â„¢c thi ___ 2025', answer: 'Rising Voice',
    accept: ['rising voice','risingvoice'] },
  { type: 'fill', q: 'NguyÃ¡Â»â€¦n Minh ÃƒÂnh lÃƒÂ  ÃƒÂ¡ quÃƒÂ¢n 2 cuÃ¡Â»â„¢c thi ___ 2025', answer: 'Rising Voice',
    accept: ['rising voice','risingvoice'] },
  { type: 'fill', q: 'Ã¡Â»Å¾ Ã„â€˜ÃƒÂ¢y cÃƒÂ³ bao nhiÃƒÂªu bÃ†Â°Ã¡Â»â€ºc trÃƒÂªn Ã„â€˜Ã†Â°Ã¡Â»Âng Ã„â€˜ua nÃƒÂ y? (sÃ¡Â»â€˜)', answer: '50',
    accept: ['50','nÃ„Æ’m mÃ†Â°Ã†Â¡i'] },
  { type: 'fill', q: 'Slogan cÃ¡Â»Â§a YTC gÃ¡Â»â€œm bao nhiÃƒÂªu chÃ¡Â»Â¯ "c" (TÃƒÂ­nh cÃ¡ÂºÂ£ chÃ¡Â»Â¯ viÃ¡ÂºÂ¿t hoa)?', answer: '3',
    accept: ['ba','3'] },
  { type: 'fill', q: 'Ãƒâ€ sÃ¡Â»â€˜ ___ vÃƒÂ  ___ trÃƒÂªn Ã„â€˜Ã†Â°Ã¡Â»Âng Ã„â€˜ua cho phÃƒÂ©p chÃ¡Â»Ân Ã„â€˜Ã¡Â»â€œng hÃƒÂ nh (viÃ¡ÂºÂ¿t theo thÃ¡Â»Â© tÃ¡Â»Â±, cÃƒÂ¡ch nhau bÃ¡Â»Å¸i dÃ¡ÂºÂ¥u phÃ¡ÂºÂ©y)', answer: '15, 30',
    accept: ['15, 30','15,30','15 30','15-30'] },
  { type: 'fill', q: 'NguyÃ¡Â»â€¦n HÃ¡Â»â€œng Thanh lÃƒÂ  ___ CLB YTC (chÃ¡Â»Â©c vÃ¡Â»Â¥)', answer: 'ChÃ¡Â»Â§ nhiÃ¡Â»â€¡m',
    accept: ['chÃ¡Â»Â§ nhiÃ¡Â»â€¡m','chu nhiem'] },

  // ----- Word select / arrange -----
  { type: 'word', q: 'SÃ¡ÂºÂ¯p xÃ¡ÂºÂ¿p cÃƒÂ¡c tÃ¡Â»Â« Ã„â€˜Ã¡Â»Æ’ tÃ¡ÂºÂ¡o thÃƒÂ nh slogan cÃ¡Â»Â§a YTC:',
    pool: ['ÃƒÂ tÃ†Â°Ã¡Â»Å¸ng lÃ¡Â»â€ºn','TÃƒÂ i nÃ„Æ’ng trÃ¡ÂºÂ»','Chung niÃ¡Â»Âm tin'], answer: ['ÃƒÂ tÃ†Â°Ã¡Â»Å¸ng lÃ¡Â»â€ºn','TÃƒÂ i nÃ„Æ’ng trÃ¡ÂºÂ»','Chung niÃ¡Â»Âm tin'] },
  { type: 'word', q: 'SÃ¡ÂºÂ¯p xÃ¡ÂºÂ¿p 3 tÃ¡Â»Â« sau theo Ã„â€˜ÃƒÂºng thÃ¡Â»Â© tÃ¡Â»Â± Ã„â€˜Ã¡Â»Æ’ ghÃƒÂ©p thÃƒÂ nh tÃƒÂªn CLB (tiÃ¡ÂºÂ¿ng Anh):',
    pool: ['Club','Young','Training'], answer: ['Young','Training','Club'] },
  { type: 'word', q: 'SÃ¡ÂºÂ¯p xÃ¡ÂºÂ¿p cÃƒÂ¡c ban chuyÃƒÂªn mÃƒÂ´n theo thÃ¡Â»Â© tÃ¡Â»Â± bÃ¡ÂºÂ£ng chÃ¡Â»Â¯ cÃƒÂ¡i:',
    pool: ['MC - LÃ¡Â»â€¦ tÃƒÂ¢n','NhÃƒÂ¢n sÃ¡Â»Â± - HÃ¡ÂºÂ­u cÃ¡ÂºÂ§n','KÃ¡Â»Â¹ thuÃ¡ÂºÂ­t - VÃ¡ÂºÂ­n hÃƒÂ nh','TruyÃ¡Â»Ân thÃƒÂ´ng'], answer: ['KÃ¡Â»Â¹ thuÃ¡ÂºÂ­t - VÃ¡ÂºÂ­n hÃƒÂ nh','MC - LÃ¡Â»â€¦ tÃƒÂ¢n','NhÃƒÂ¢n sÃ¡Â»Â± - HÃ¡ÂºÂ­u cÃ¡ÂºÂ§n','TruyÃ¡Â»Ân thÃƒÂ´ng'] },
  { type: 'word', q: 'SÃ¡ÂºÂ¯p xÃ¡ÂºÂ¿p cÃƒÂ¡c giÃ¡ÂºÂ£i ONE-TAKE Gen 14.2 theo thÃ¡Â»Â© tÃ¡Â»Â±: NhÃ¡ÂºÂ¥t Ã¢â€ â€™ NhÃƒÂ¬ Ã¢â€ â€™ Ba:',
    pool: ['ShineOn','OneTeam','Donald Trump'], answer: ['Donald Trump','OneTeam','ShineOn'] },
  { type: 'word', q: 'SÃ¡ÂºÂ¯p xÃ¡ÂºÂ¿p thÃ¡Â»Â© tÃ¡Â»Â± cÃƒÂ¡c cuÃ¡Â»â„¢c thi Ã„â€˜ÃƒÂ£ tÃ¡Â»â€¢ chÃ¡Â»Â©c tÃ¡Â»Â« cÃ…Â© Ã„â€˜Ã¡ÂºÂ¿n mÃ¡Â»â€ºi:',
    pool: ['One Take','Rewrite Destiny','Rising Voice'], answer: ['Rewrite Destiny','Rising Voice','One Take'] },
  { type: 'word', q: 'SÃ¡ÂºÂ¯p xÃ¡ÂºÂ¿p cÃƒÂ¡c thÃ¡ÂºÂ¿ hÃ¡Â»â€¡ Gen theo thÃ¡Â»Â© tÃ¡Â»Â± tÃ¡Â»Â« cÃ…Â© Ã„â€˜Ã¡ÂºÂ¿n mÃ¡Â»â€ºi:',
    pool: ['Gen 14','Gen 15.1','Gen 13'], answer: ['Gen 13','Gen 14','Gen 15.1'] },
  { type: 'word', q: 'SÃ¡ÂºÂ¯p xÃ¡ÂºÂ¿p: ______ lÃƒÂ  _____ ______',
    pool: ['PhÃƒÂ³ ban','LÃƒÂª ThÃ¡Â»â€¹ PhÃ†Â°Ã†Â¡ng Anh','MC - LÃ¡Â»â€¦ tÃƒÂ¢n'], answer: ['LÃƒÂª ThÃ¡Â»â€¹ PhÃ†Â°Ã†Â¡ng Anh','PhÃƒÂ³ ban','MC - LÃ¡Â»â€¦ tÃƒÂ¢n'] },

  // ----- hehehe-----
  { type: 'choice', q: 'YTC tÃ¡ÂºÂ¡o cÃ†Â¡ hÃ¡Â»â„¢i cho sinh viÃƒÂªn rÃƒÂ¨n luyÃ¡Â»â€¡n nhÃ¡Â»Â¯ng kÃ¡Â»Â¹ nÃ„Æ’ng nÃƒÂ o?',
    options: ['KÃ¡Â»Â¹ nÃ„Æ’ng mÃ¡Â»Âm, tÃ†Â° duy sÃƒÂ¡ng tÃ¡ÂºÂ¡o vÃƒÂ  lÃƒÂ m viÃ¡Â»â€¡c nhÃƒÂ³m','ChÃ¡Â»â€° kÃ¡Â»Â¹ nÃ„Æ’ng lÃ¡ÂºÂ­p trÃƒÂ¬nh','ChÃ¡Â»â€° kÃ¡Â»Â¹ nÃ„Æ’ng ngoÃ¡ÂºÂ¡i ngÃ¡Â»Â¯','KÃ¡Â»Â¹ nÃ„Æ’ng kÃ¡ÂºÂ¿ toÃƒÂ¡n chuyÃƒÂªn sÃƒÂ¢u'], answer: 0 },
  { type: 'choice', q: 'CuÃ¡Â»â„¢c thi ONE-TAKE Gen 14.2: nhÃƒÂ³m nÃƒÂ o giÃƒÂ nh giÃ¡ÂºÂ£i nhÃƒÂ¬?',
    options: ['OneTeam','Donald Trump','ShineOn','Rising Stars'], answer: 0 },
  { type: 'fill', q: 'YTC trÃ¡Â»Â±c thuÃ¡Â»â„¢c Ã„ÂoÃƒÂ n TNCS HÃ¡Â»â€œ ChÃƒÂ­ Minh cÃ¡Â»Â§a TrÃ†Â°Ã¡Â»Âng Ã„ÂÃ¡ÂºÂ¡i hÃ¡Â»Âc Kinh tÃ¡ÂºÂ¿ - KÃ¡Â»Â¹ thuÃ¡ÂºÂ­t ___', answer: 'CÃƒÂ´ng NghiÃ¡Â»â€¡p', accept: ['cÃƒÂ´ng nghiÃ¡Â»â€¡p','cong nghiep'] },

  // ----- CÃƒÂ¢u hÃ¡Â»Âi mÃ¡Â»Å¸ rÃ¡Â»â„¢ng tÃ¡Â»Â« thÃƒÂ´ng tin YTC cÃƒÂ´ng khai -----
  { type: 'choice', q: 'YTC Ã„â€˜Ã†Â°Ã¡Â»Â£c thÃƒÂ nh lÃ¡ÂºÂ­p vÃƒÂ o ngÃƒÂ y nÃƒÂ o?', options: ['23/04/2012','01/06/2013','15/09/2014','20/10/2015'], answer: 0 },
  { type: 'choice', q: 'TÃƒÂ i khoÃ¡ÂºÂ£n TikTok Ã„â€˜Ã†Â°Ã¡Â»Â£c giÃ¡Â»â€ºi thiÃ¡Â»â€¡u trÃƒÂªn kÃƒÂªnh chÃƒÂ­nh thÃ¡Â»Â©c cÃ¡Â»Â§a YTC lÃƒÂ  tÃƒÂ i khoÃ¡ÂºÂ£n nÃƒÂ o?', options: ['@ytc.uneti','@youngtrainingclub','@ytc.hanoi','@uneti.ytc'], answer: 0 },
  { type: 'choice', q: 'YTC cÃƒÂ³ khoÃ¡ÂºÂ£ng bao nhiÃƒÂªu sÃ¡Â»Â± kiÃ¡Â»â€¡n mÃ¡Â»â€”i nÃ„Æ’m?', options: ['5+','15+','30+','100+'], answer: 2 },
  { type: 'choice', q: 'Ã„ÂÃ¡Â»â€¹a chÃ¡Â»â€° Ã„â€˜Ã†Â°Ã¡Â»Â£c giÃ¡Â»â€ºi thiÃ¡Â»â€¡u cÃ¡Â»Â§a CLB Ã„ÂÃƒÂ o TÃ¡ÂºÂ¡o KÃ¡Â»Â¹ NÃ„Æ’ng TrÃ¡ÂºÂ» lÃƒÂ  gÃƒÂ¬?', options: ['218 LÃ„Â©nh Nam, HoÃƒÂ ng Mai, HÃƒÂ  NÃ¡Â»â„¢i','144 XuÃƒÂ¢n ThuÃ¡Â»Â·, CÃ¡ÂºÂ§u GiÃ¡ÂºÂ¥y, HÃƒÂ  NÃ¡Â»â„¢i','353 TrÃ¡ÂºÂ§n HÃ†Â°ng Ã„ÂÃ¡ÂºÂ¡o, Nam Ã„ÂÃ¡Â»â€¹nh','1 Ã„ÂÃ¡ÂºÂ¡i CÃ¡Â»â€œ ViÃ¡Â»â€¡t, Hai BÃƒÂ  TrÃ†Â°ng'], answer: 0 },
  { type: 'choice', q: 'NÃ¡Â»â„¢i dung nÃƒÂ o lÃƒÂ  mÃ¡Â»â„¢t hoÃ¡ÂºÂ¡t Ã„â€˜Ã¡Â»â„¢ng chÃƒÂ­nh cÃ¡Â»Â§a YTC?', options: ['CuÃ¡Â»â„¢c thi MC - GiÃ¡Â»Âng nÃƒÂ³i','Ã„Âua xe Ã„â€˜Ã¡Â»â€¹a hÃƒÂ¬nh','Thi Ã„â€˜Ã¡ÂºÂ¥u cÃ¡Â»Â vua quÃ¡Â»â€˜c tÃ¡ÂºÂ¿','TriÃ¡Â»Æ’n lÃƒÂ£m robot'], answer: 0 },
  { type: 'choice', q: 'MÃ¡Â»â€”i nÃ„Æ’m YTC tÃ¡Â»â€¢ chÃ¡Â»Â©c khoÃ¡ÂºÂ£ng bao nhiÃƒÂªu mÃƒÂ¹a Podcast & Phim?', options: ['1 mÃƒÂ¹a','2 mÃƒÂ¹a','5 mÃƒÂ¹a','8 mÃƒÂ¹a'], answer: 1 },
  { type: 'choice', q: 'CuÃ¡Â»â„¢c thi Rewrite Destiny thuÃ¡Â»â„¢c Gen nÃƒÂ o cÃ¡Â»Â§a YTC?', options: ['Gen 12.1','Gen 13.2','Gen 14.1','Gen 15.1'], answer: 2 },
  { type: 'choice', q: 'Ã„ÂÃ¡Â»â„¢i giÃƒÂ nh giÃ¡ÂºÂ£i nhÃ¡ÂºÂ¥t cuÃ¡Â»â„¢c thi Rewrite Destiny lÃƒÂ  Ã„â€˜Ã¡Â»â„¢i nÃƒÂ o?', options: ['Good Vibes Tribe','Together We Rise','THE INNOVATORS','OneTeam'], answer: 0 },
  { type: 'choice', q: 'Ã„ÂÃ¡Â»â„¢i giÃƒÂ nh giÃ¡ÂºÂ£i nhÃ¡ÂºÂ¥t cuÃ¡Â»â„¢c thi Voice Your Mind lÃƒÂ  Ã„â€˜Ã¡Â»â„¢i nÃƒÂ o?', options: ['Crew 1718','BiÃ¡Â»â€¡t Ã„ÂÃ¡Â»â„¢i Xanh','Good Vibes Tribe','Together We Rise'], answer: 3 },
  { type: 'choice', q: 'TÃƒÂ´ Thu Trang Ã„â€˜Ã¡ÂºÂ¡t thÃƒÂ nh tÃƒÂ­ch nÃƒÂ o tÃ¡ÂºÂ¡i UNETI GOT TALENT 2026?', options: ['Top 20 Chung KÃ¡ÂºÂ¿t','GiÃ¡ÂºÂ£i nhÃ¡ÂºÂ¥t','GiÃ¡ÂºÂ£i nhÃƒÂ¬','GiÃ¡ÂºÂ£i yÃƒÂªu thÃƒÂ­ch nhÃ¡ÂºÂ¥t'], answer: 0 },
  { type: 'choice', q: 'Ã„ÂÃ¡Â»â„¢i thi cÃ¡Â»Â§a NguyÃ¡Â»â€¦n ThÃ¡Â»â€¹ HÃ¡Â»â€œng QuyÃƒÂªn tÃ¡ÂºÂ¡i MARKET MAKER 2026 cÃƒÂ³ tÃƒÂªn lÃƒÂ  gÃƒÂ¬?', options: ['WINX','YoungBoost','FinFin Mind','THE LIGHT'], answer: 0 },
  { type: 'fill', q: 'ChuyÃ¡ÂºÂ¿n dÃƒÂ£ ngoÃ¡ÂºÂ¡i YTC 2026 diÃ¡Â»â€¦n ra tÃ¡Â»Â« ngÃƒÂ y ___ Ã„â€˜Ã¡ÂºÂ¿n 01/07/2026.', answer: '30/06', accept: ['30/06','30-06','30 thÃƒÂ¡ng 6'] },
  { type: 'fill', q: 'Ã¢â‚¬Å“ChuyÃ¡ÂºÂ¿n tÃƒÂ u thÃ¡Â»Âi gianÃ¢â‚¬Â lÃƒÂ  Ã„â€˜ÃƒÂªm sinh nhÃ¡ÂºÂ­t lÃ¡ÂºÂ§n thÃ¡Â»Â© mÃ¡ÂºÂ¥y cÃ¡Â»Â§a YTC?', answer: '14', accept: ['14','mÃ†Â°Ã¡Â»Âi bÃ¡Â»â€˜n'] },
  { type: 'choice', q: 'YTC Ã„â€˜Ã¡Â»â€œng hÃƒÂ nh cÃƒÂ¹ng chÃ†Â°Ã†Â¡ng trÃƒÂ¬nh nÃƒÂ o dÃƒÂ nh cho thÃƒÂ­ sinh trong kÃ¡Â»Â³ thi tÃ¡Â»â€˜t nghiÃ¡Â»â€¡p THPT nÃ„Æ’m 2026?', options: ['TiÃ¡ÂºÂ¿p SÃ¡Â»Â©c MÃƒÂ¹a Thi','UNETI CUP','Rising Voice','Market Maker'], answer: 0 },
  { type: 'choice', q: 'Ai Ã„â€˜Ã†Â°Ã¡Â»Â£c bÃƒÂ¬nh chÃ¡Â»Ân lÃƒÂ  thÃƒÂ­ sinh Ã„â€˜Ã†Â°Ã¡Â»Â£c yÃƒÂªu thÃƒÂ­ch nhÃ¡ÂºÂ¥t tÃ¡ÂºÂ¡i Rising Voice 2025?', options: ['TÃƒÂ´ Thu Trang','NguyÃ¡Â»â€¦n Minh ÃƒÂnh','NgÃƒÂ´ HÃ¡ÂºÂ¡nh NguyÃƒÂªn','NguyÃ¡Â»â€¦n ThÃ¡Â»â€¹ Thanh Hoa'], answer: 2 },
  { type: 'choice', q: 'HoÃ¡ÂºÂ¡t Ã„â€˜Ã¡Â»â„¢ng nÃƒÂ o thuÃ¡Â»â„¢c nhÃƒÂ³m Ã¢â‚¬Å“GÃ¡ÂºÂ¯n kÃ¡ÂºÂ¿t & TrÃ¡ÂºÂ£i nghiÃ¡Â»â€¡mÃ¢â‚¬Â cÃ¡Â»Â§a YTC?', options: ['DÃƒÂ£ ngoÃ¡ÂºÂ¡i vÃƒÂ  team building','Thi Ã„â€˜Ã¡ÂºÂ¥u bÃƒÂ³ng Ã„â€˜ÃƒÂ¡ chuyÃƒÂªn nghiÃ¡Â»â€¡p','TriÃ¡Â»Æ’n lÃƒÂ£m cÃƒÂ´ng nghÃ¡Â»â€¡','CÃƒÂ¢u lÃ¡ÂºÂ¡c bÃ¡Â»â„¢ ngoÃ¡ÂºÂ¡i ngÃ¡Â»Â¯'], answer: 0 },
  { type: 'choice', q: 'BÃƒÂ i Ã„â€˜Ã„Æ’ng gÃ¡ÂºÂ§n Ã„â€˜ÃƒÂ¢y trÃƒÂªn Facebook YTC nhÃ¡ÂºÂ¯c Ã„â€˜Ã¡ÂºÂ¿n lÃ¡Â»â€¦ phÃƒÂ¡t Ã„â€˜Ã¡Â»â„¢ng cuÃ¡Â»â„¢c thi vÃ¡Â»Â chÃ¡Â»Â§ Ã„â€˜Ã¡Â»Â nÃƒÂ o?', options: ['SÃ¡Â»Â­ dÃ¡Â»Â¥ng nÃ„Æ’ng lÃ†Â°Ã¡Â»Â£ng tiÃ¡ÂºÂ¿t kiÃ¡Â»â€¡m vÃƒÂ  hiÃ¡Â»â€¡u quÃ¡ÂºÂ£','KhÃ¡Â»Å¸i nghiÃ¡Â»â€¡p sinh viÃƒÂªn','NhiÃ¡ÂºÂ¿p Ã¡ÂºÂ£nh trÃ¡ÂºÂ»','VÃ„Æ’n nghÃ¡Â»â€¡ hÃ¡Â»Âc Ã„â€˜Ã†Â°Ã¡Â»Âng'], answer: 0 },

  // ----- CÃƒÂ¢u hÃ¡Â»Âi mÃ¡Â»â€ºi, khÃƒÂ´ng lÃ¡ÂºÂ·p nÃ¡Â»â„¢i dung cÃ…Â© -----
  { type: 'choice', q: 'Trang Facebook Young Training Club hiÃ¡Â»â€¡n giÃ¡Â»â€ºi thiÃ¡Â»â€¡u khoÃ¡ÂºÂ£ng bao nhiÃƒÂªu ngÃ†Â°Ã¡Â»Âi theo dÃƒÂµi?', options: ['860','2,6 nghÃƒÂ¬n','8,6 nghÃƒÂ¬n','86 nghÃƒÂ¬n'], answer: 2 },
  { type: 'choice', q: 'HoÃ¡ÂºÂ¡t Ã„â€˜Ã¡Â»â„¢ng nÃƒÂ o Ã„â€˜Ã†Â°Ã¡Â»Â£c xÃ¡ÂºÂ¿p vÃƒÂ o nhÃƒÂ³m Ã¢â‚¬Å“NhiÃ¡Â»â€¡t huyÃ¡ÂºÂ¿t & CÃ¡Â»â€˜ng hiÃ¡ÂºÂ¿nÃ¢â‚¬Â?', options: ['HÃ¡Â»â€” trÃ¡Â»Â£ hoÃ¡ÂºÂ¡t Ã„â€˜Ã¡Â»â„¢ng phong trÃƒÂ o vÃƒÂ  chiÃ¡ÂºÂ¿n dÃ¡Â»â€¹ch tÃƒÂ¬nh nguyÃ¡Â»â€¡n','CuÃ¡Â»â„¢c thi MC - GiÃ¡Â»Âng nÃƒÂ³i','Workshop thiÃ¡ÂºÂ¿t kÃ¡ÂºÂ¿ Ã„â€˜Ã¡Â»â€œ hoÃ¡ÂºÂ¡','CuÃ¡Â»â„¢c thi Podcast - Phim'], answer: 0 },
  { type: 'fill', q: 'TÃƒÂªn cuÃ¡Â»â„¢c thi video cÃƒÂ³ cÃ¡Â»Â¥m Ã¢â‚¬Å“ONE - ___Ã¢â‚¬Â lÃƒÂ  gÃƒÂ¬?', answer: 'TAKE', accept: ['take'] },
  { type: 'word', q: 'SÃ¡ÂºÂ¯p xÃ¡ÂºÂ¿p cÃƒÂ¡c mÃ¡Â»â€˜c sÃ¡Â»Â± kiÃ¡Â»â€¡n theo thÃ¡Â»Âi gian tÃ¡Â»Â« sÃ¡Â»â€ºm Ã„â€˜Ã¡ÂºÂ¿n muÃ¡Â»â„¢n:', pool: ['15/09/2026','25/09/2026','28/09/2026','08/10/2026'], answer: ['15/09/2026','25/09/2026','28/09/2026','08/10/2026'] },
];

/* ============================================================
   COMPANIONS
   ============================================================ */
const COMPANION_IMAGES = {
  minh: 'Image/BCN Gen14/BuiQuangMinh.jpg', hang: 'Image/BCN Gen14/DaoThiThuHang.jpg', thoanh: 'Image/BCN Gen14/PhamThiThaoAnh.jpg', trang: 'Image/BCN Gen14/ToThuTrang.jpg', phuonglinh: 'Image/BCN Gen14/DangThiPhuongLinh.jpg', dung: 'Image/BCN Gen14/TranManhDung.jpg', anh: 'Image/BCN Gen14/NguyenMinhAnh.jpg', phuonganh: 'Image/BCN Gen14/LeThiPhuongAnh.jpg', nhatminh: 'Image/BCN Gen14/VuXuanNhatMinh.jpg', nguyenphuonganh: 'Image/BCN Gen14/NguyenPhuongAnh.jpg', halinh: 'Image/BCN Gen14/HoangThiHaLinh.jpg', hongthanh: 'Image/BCN Gen14/NguyenHongThanh.jpg', thanhlan: 'Image/BCN Gen14/NguyenThanhLan.jpg', doantrang: 'Image/BCN Gen14/LeHuyenDoanTrang.jpg'
};

const COMPANIONS = [
  { id: 'minh',   name: 'BÃƒÂ¹i Quang Minh',     role: 'Ã„ÂÃ¡Â»â€œng hÃƒÂ nh thÃ¡Â»Âi gian',   avatar: 'M',
    ability: '+10 giÃƒÂ¢y cho mÃ¡Â»â€”i cÃƒÂ¢u hÃ¡Â»Âi (tÃ„Æ’ng tÃ¡Â»Â« 15s Ã¢â€ â€™ 25s)' },
  { id: 'hang',   name: 'Ã„ÂÃƒÂ o ThÃ¡Â»â€¹ Thu HÃ¡ÂºÂ±ng',   role: 'Ã„ÂÃ¡Â»â€œng hÃƒÂ nh bÃ†Â°Ã¡Â»â€ºc tiÃ¡ÂºÂ¿n',   avatar: 'H',
    ability: '+2 bÃ†Â°Ã¡Â»â€ºc tiÃ¡ÂºÂ¿n thÃƒÂªm sau mÃ¡Â»â€”i cÃƒÂ¢u trÃ¡ÂºÂ£ lÃ¡Â»Âi Ã„â€˜ÃƒÂºng' },
  { id: 'thoanh', name: 'PhÃ¡ÂºÂ¡m ThÃ¡Â»â€¹ ThÃ¡ÂºÂ£o Anh',  role: 'Ã„ÂÃ¡Â»â€œng hÃƒÂ nh tÃ¡Â»â€˜c Ã„â€˜Ã¡Â»â„¢',      avatar: 'A',
    ability: 'TrÃ¡ÂºÂ£ lÃ¡Â»Âi Ã„â€˜ÃƒÂºng trong 5s Ã„â€˜Ã¡ÂºÂ§u: thÃ†Â°Ã¡Â»Å¸ng x2 Ã„â€˜iÃ¡Â»Æ’m cÃƒÂ¢u Ã„â€˜ÃƒÂ³' },
  { id: 'trang', name: 'TÃƒÂ´ Thu Trang', role: 'Ã„ÂÃ¡Â»â€œng hÃƒÂ nh xÃƒÂºc xÃ¡ÂºÂ¯c', avatar: 'T',
    ability: 'Tung ra 3: nhÃƒÂ¢n x1,2 Ã„â€˜iÃ¡Â»Æ’m hiÃ¡Â»â€¡n tÃ¡ÂºÂ¡i; ra 4: nhÃƒÂ¢n x1,3 Ã„â€˜iÃ¡Â»Æ’m hiÃ¡Â»â€¡n tÃ¡ÂºÂ¡i' },
  { id: 'phuonglinh', name: 'Ã„ÂÃ¡ÂºÂ·ng ThÃ¡Â»â€¹ PhÃ†Â°Ã†Â¡ng Linh', role: 'Ã„ÂÃ¡Â»â€œng hÃƒÂ nh bÃ†Â°Ã¡Â»â€ºc tiÃ¡ÂºÂ¿n', avatar: 'L',
    ability: 'MÃ¡Â»â€”i ÃƒÂ´ Ã„â€˜i qua: +100 Ã„â€˜iÃ¡Â»Æ’m' },
  { id: 'dung', name: 'TrÃ¡ÂºÂ§n MÃ¡ÂºÂ¡nh DÃ…Â©ng', role: 'Ã„ÂÃ¡Â»â€œng hÃƒÂ nh vÃ¡Â»Â Ã„â€˜ÃƒÂ­ch', avatar: 'D',
    ability: 'VÃ¡Â»Â Ã„â€˜ÃƒÂ­ch: +5.000 Ã„â€˜iÃ¡Â»Æ’m; chÃ†Â°a vÃ¡Â»Â Ã„â€˜ÃƒÂ­ch: +75 Ã„â€˜iÃ¡Â»Æ’m mÃ¡Â»â€”i bÃ†Â°Ã¡Â»â€ºc Ã„â€˜ÃƒÂ£ Ã„â€˜i' },
  { id: 'anh', name: 'NguyÃ¡Â»â€¦n Minh ÃƒÂnh', role: 'Ã„ÂÃ¡Â»â€œng hÃƒÂ nh streak', avatar: 'ÃƒÂ',
    ability: 'GiÃ¡Â»Â¯ chuÃ¡Â»â€”i trÃ¡ÂºÂ£ lÃ¡Â»Âi Ã„â€˜ÃƒÂºng Ã„â€˜Ã¡Â»Æ’ cÃ¡Â»â„¢ng Ã„â€˜iÃ¡Â»Æ’m; trÃ¡ÂºÂ£ lÃ¡Â»Âi sai sÃ¡ÂºÂ½ mÃ¡ÂºÂ¥t hiÃ¡Â»â€¡u lÃ¡Â»Â±c chuÃ¡Â»â€”i' },
  { id: 'phuonganh', name: 'LÃƒÂª ThÃ¡Â»â€¹ PhÃ†Â°Ã†Â¡ng Anh', role: 'Ã„ÂÃ¡Â»â€œng hÃƒÂ nh cÃ†Â¡ hÃ¡Â»â„¢i', avatar: 'P',
    ability: 'MÃ¡Â»â€”i cÃƒÂ¢u sai Ã„â€˜Ã†Â°Ã¡Â»Â£c thÃƒÂªm 1 lÃ¡ÂºÂ§n trÃ¡ÂºÂ£ lÃ¡Â»Âi, kÃ¡Â»Æ’ cÃ¡ÂºÂ£ khi Ã„â€˜ang cÃ†Â°Ã¡Â»â€ºp cÃƒÂ¢u' },
  { id: 'nhatminh', name: 'VÃ…Â© XuÃƒÂ¢n NhÃ¡ÂºÂ­t Minh', role: 'Ã„ÂÃ¡Â»â€œng hÃƒÂ nh may mÃ¡ÂºÂ¯n', avatar: 'N', ability: 'XÃƒÂºc xÃ¡ÂºÂ¯c ra 1: cÃ¡Â»â„¢ng thÃƒÂªm 500 Ã„â€˜iÃ¡Â»Æ’m' },
  { id: 'nguyenphuonganh', name: 'NguyÃ¡Â»â€¦n PhÃ†Â°Ã†Â¡ng Anh', role: 'Ã„ÂÃ¡Â»â€œng hÃƒÂ nh bÃ¡Â»Â©t phÃƒÂ¡', avatar: 'PA', ability: 'Sau mÃ¡Â»â€”i lÃ¡ÂºÂ§n trÃ¡ÂºÂ£ lÃ¡Â»Âi sai, cÃƒÂ¢u Ã„â€˜ÃƒÂºng kÃ¡ÂºÂ¿ tiÃ¡ÂºÂ¿p Ã„â€˜Ã†Â°Ã¡Â»Â£c x2 bÃ†Â°Ã¡Â»â€ºc vÃƒÂ  x2 Ã„â€˜iÃ¡Â»Æ’m cÃƒÂ¢u hÃ¡Â»Âi' },
  { id: 'halinh', name: 'HoÃƒÂ ng ThÃ¡Â»â€¹ HÃƒÂ  Linh', role: 'Ã„ÂÃ¡Â»â€œng hÃƒÂ nh lÃ¡ÂºÂ·p lÃ¡ÂºÂ¡i', avatar: 'HL', ability: 'TrÃ¡ÂºÂ£ lÃ¡Â»Âi Ã„â€˜ÃƒÂºng: cÃƒÂ¢u vÃ¡Â»Â«a lÃƒÂ m sÃ¡ÂºÂ½ xuÃ¡ÂºÂ¥t hiÃ¡Â»â€¡n lÃ¡ÂºÂ¡i; kÃƒÂ­ch hoÃ¡ÂºÂ¡t tÃ¡Â»â€˜i Ã„â€˜a 1 lÃ¡ÂºÂ§n mÃ¡Â»â€”i 3 vÃƒÂ²ng cÃƒÂ¢u hÃ¡Â»Âi' },
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
const EARLY_WINDOW = 5;               // seconds for ThÃ¡ÂºÂ£o Anh's bonus
const DICE_ONE_BONUS = 500;           // NhÃ¡ÂºÂ­t Minh: bonus when dice shows 1
const FINISH_BONUS_WITH_DUNG = 5000;
const DISTANCE_BONUS_WITH_DUNG = 75;

let state = {};
let selectedGameMode = 'classic';
const VS_COMPANIONS = [
  { id:'hongthanh', name:'NguyÃ¡Â»â€¦n HÃ¡Â»â€œng Thanh', ability:'KÃ¡Â»Â¹ nÃ„Æ’ng: Ã„â€˜ÃƒÂºng 2 lÃ†Â°Ã¡Â»Â£t liÃƒÂªn tiÃ¡ÂºÂ¿p, bÃ¡ÂºÂ¥m nÃƒÂºt Ã„â€˜Ã¡Â»Æ’ lÃƒÂ m choÃƒÂ¡ng bot. Cooldown 4 lÃ†Â°Ã¡Â»Â£t.' },
  { id:'thanhlan', name:'NguyÃ¡Â»â€¦n Thanh Lan', ability:'KÃ¡Â»Â¹ nÃ„Æ’ng: tung xÃƒÂºc xÃ¡ÂºÂ¯c Ã„â€˜Ã¡Â»Æ’ bot lÃƒÂ¹i sÃ¡Â»â€˜ bÃ†Â°Ã¡Â»â€ºc. Cooldown 3 lÃ†Â°Ã¡Â»Â£t.' },
  { id:'doantrang', name:'LÃƒÂª HuyÃ¡Â»Ân Ã„Âoan Trang', ability:'KÃ¡Â»Â¹ nÃ„Æ’ng: cÃ†Â°Ã¡Â»â€ºp 1/4 Ã„â€˜iÃ¡Â»Æ’m cÃ¡Â»Â§a bot. Cooldown 3 lÃ†Â°Ã¡Â»Â£t.' }
];

function resetState() {
  state = {
    mode: 'classic',
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
    vs: { botScore:0, botStep:0, botCorrect:0, playerCompanion:null, botCompanion:null, botCompanions:[], botStreak:0, botHongCooldown:0, botSkillCooldowns:{ thanhlan:0, doantrang:0 }, playerStunned:false, stealOpportunities:0, stealCorrect:0, botStealOpportunities:0, botStealCorrect:0, botPassedMilestones:new Set(), playerTurn:true, stealMode:false, stealQuestion:false, botQuestion:null, cooldowns:{ hongthanh:0, thanhlan:0, doantrang:0 }, streak:0, playerFinished:false, botFinished:false, playerFinishedBonus:false, botFinishedBonus:false, botSkipped:false, passedMilestones:new Set(), pendingFinish:null }
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

// ChÃ¡Â»Ân 20 cÃƒÂ¢u theo tÃ¡Â»Â· lÃ¡Â»â€¡ 10 trÃ¡ÂºÂ¯c nghiÃ¡Â»â€¡m / 6 Ã„â€˜iÃ¡Â»Ân khuyÃ¡ÂºÂ¿t / 4 sÃ¡ÂºÂ¯p xÃ¡ÂºÂ¿p.
// NÃ¡ÂºÂ¿u sau nÃƒÂ y mÃ¡Â»â„¢t dÃ¡ÂºÂ¡ng chÃ†Â°a Ã„â€˜Ã¡Â»Â§ cÃƒÂ¢u, tÃ¡Â»Â± bÃƒÂ¹ tÃ¡Â»Â« cÃƒÂ¡c dÃ¡ÂºÂ¡ng cÃƒÂ²n lÃ¡ÂºÂ¡i.
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
   SOUND EFFECTS Ã¢â‚¬â€ Web Audio, no external files required
   ============================================================ */
let ytcAudioContext = null;
let ytcSoundEnabled = localStorage.getItem('ytcSoundEnabled') !== '0';
function getAudioContext() { if (!ytcAudioContext) { const AudioCtx = window.AudioContext || window.webkitAudioContext; if (AudioCtx) ytcAudioContext = new AudioCtx(); } if (ytcAudioContext && ytcAudioContext.state === 'suspended') ytcAudioContext.resume(); return ytcAudioContext; }
function playSound(type) {
  if (!ytcSoundEnabled) return;
  const ctx = getAudioContext(); if (!ctx) return;
  const patterns = { start:[[392,.08,'sine',0],[523,.12,'sine',.09],[659,.16,'sine',.22]], correct:[[523,.09,'sine',0],[659,.12,'sine',.1],[784,.18,'sine',.22]], wrong:[[220,.14,'sawtooth',0],[165,.2,'sawtooth',.14]], dice:[[180,.05,'square',0],[240,.05,'square',.07],[300,.05,'square',.14]], select:[[392,.08,'triangle',0],[587,.16,'triangle',.09]], click:[[660,.035,'sine',0]], word:[[520,.035,'triangle',0],[700,.045,'triangle',.05]], timeout:[[130,.18,'sawtooth',0],[90,.25,'sawtooth',.16]], milestone:[[440,.08,'sine',0],[660,.1,'sine',.1],[880,.18,'sine',.22]], modal:[[330,.06,'triangle',0],[494,.1,'triangle',.08]], diceTick:[[150,.025,'square',0]], gameover:[[392,.12,'sine',0],[330,.14,'sine',.14],[262,.25,'sine',.3]], countdown:[[330,.08,'triangle',0],[440,.1,'triangle',.1]], finish:[[523,.1,'sine',0],[659,.1,'sine',.11],[784,.1,'sine',.22],[1046,.28,'sine',.34]] };
  const notes = patterns[type] || patterns.select;
  const now = ctx.currentTime;
  notes.forEach(([frequency,duration,wave,offset]) => { const osc = ctx.createOscillator(); const gain = ctx.createGain(); osc.type = wave; osc.frequency.setValueAtTime(frequency, now + offset); gain.gain.setValueAtTime(.0001, now + offset); gain.gain.exponentialRampToValueAtTime(.09, now + offset + .01); gain.gain.exponentialRampToValueAtTime(.0001, now + offset + duration); osc.connect(gain); gain.connect(ctx.destination); osc.start(now + offset); osc.stop(now + offset + duration + .02); });
}
function updateSoundToggle() { const button = document.getElementById('soundToggle'); if (!button) return; button.classList.toggle('is-muted', !ytcSoundEnabled); button.setAttribute('aria-pressed', String(ytcSoundEnabled)); button.innerHTML = `<span aria-hidden="true">${ytcSoundEnabled ? 'Ã°Å¸â€Å ' : 'Ã°Å¸â€â€¡'}</span> Ãƒâ€šM THANH: ${ytcSoundEnabled ? 'BÃ¡ÂºÂ¬T' : 'TÃ¡ÂºÂ®T'}`; }
function toggleSound() { ytcSoundEnabled = !ytcSoundEnabled; localStorage.setItem('ytcSoundEnabled', ytcSoundEnabled ? '1' : '0'); updateSoundToggle(); if (ytcSoundEnabled) playSound('select'); }
window.addEventListener('DOMContentLoaded', updateSoundToggle, { once: true });

function setGameMode(mode) { selectedGameMode = mode; document.body.classList.toggle('vs-mode', mode === 'vs'); document.getElementById('classicModeBtn').classList.toggle('active', mode === 'classic'); document.getElementById('vsModeBtn').classList.toggle('active', mode === 'vs'); }
function openVSCompanionMilestone(milestone){const modal=document.getElementById('charModal');const subtitle=document.getElementById('charModalSubtitle');subtitle.textContent=`BÃ¡ÂºÂ¡n vÃ¡Â»Â«a Ã„â€˜Ã¡ÂºÂ¡t ÃƒÂ´ ${milestone} Ã¢â‚¬â€ chÃ¡Â»Ân kÃ¡Â»Â¹ nÃ„Æ’ng VS tiÃ¡ÂºÂ¿p theo`;const grid=document.getElementById('charGrid');grid.innerHTML='';VS_COMPANIONS.forEach(c=>{const card=document.createElement('div');card.className='char-card';card.setAttribute('role','button');card.setAttribute('tabindex','0');const image=COMPANION_IMAGES[c.id];card.innerHTML=`<div class="char-card-head"><span class="char-index">VS / ${c.id.toUpperCase()}</span><span class="char-tag">VS MODE</span></div><div class="char-avatar-big${image?' has-photo':''}">${image?`<img src="${image}" alt="${c.name}" loading="lazy">`:c.name.slice(0,2)}</div><div class="char-name">${c.name}</div><div class="char-role">Ã„ÂÃ¡Â»â€œng hÃƒÂ nh VS mode</div><div class="char-ability"><span class="char-ability-label">KÃ¡Â»Â¸ NÃ„â€šNG</span>${c.ability}</div>`;card.onclick=()=>pickVSCompanion(c.id);card.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();pickVSCompanion(c.id);}};grid.appendChild(card);});modal.classList.add('show');document.body.classList.add('modal-open');playSound('modal');}
function pickVSCompanion(id){if(state.finished||state.mode!=='vs')return;state.vs.playerCompanion=id;document.getElementById('charModal').classList.remove('show');document.body.classList.remove('modal-open');state.resolvingTurn=false;updateVSHUD();const pending=state.vs.pendingFinish;state.vs.pendingFinish=null;if(pending!==null)finishVSRound(pending);}
function openVSClassicMilestone(milestone){const EXCLUDED_VS_IDS=VS_COMPANIONS.map(c=>c.id);const availableCompanions=COMPANIONS.filter(c=>!EXCLUDED_VS_IDS.includes(c.id));const modal=document.getElementById('charModal');const subtitle=document.getElementById('charModalSubtitle');subtitle.textContent=`BÃ¡ÂºÂ¡n vÃ¡Â»Â«a Ã„â€˜Ã¡ÂºÂ¡t ÃƒÂ´ ${milestone} Ã¢â‚¬â€ chÃ¡Â»Ân 1 trong cÃƒÂ¡c Ã„â€˜Ã¡Â»â€œng hÃƒÂ nh bÃƒÂªn dÃ†Â°Ã¡Â»â€ºi (trÃ¡Â»Â« 3 nhÃƒÂ¢n vÃ¡ÂºÂ­t VS)`;const grid=document.getElementById('charGrid');grid.innerHTML='';availableCompanions.forEach(c=>{const picked=state.companions.includes(c.id);const card=document.createElement('div');card.className='char-card'+(picked?' picked':'');card.setAttribute('role','button');card.setAttribute('tabindex',picked?'-1':'0');card.setAttribute('aria-label',picked?`${c.name}, Ã„â€˜ÃƒÂ£ chÃ¡Â»Ân`:`ChÃ¡Â»Ân ${c.name}`);const image=COMPANION_IMAGES[c.id];card.innerHTML=`<div class="char-card-head"><span class="char-index">YTC / ${String(COMPANIONS.indexOf(c)+1).padStart(2,'0')}</span><span class="char-tag">Ã„ÂÃ¡Â»â€™NG HÃƒâ‚¬NH</span></div><div class="char-avatar-big${image?' has-photo':''}">${image?`<img src="${image}" alt="${c.name}" loading="lazy">`:c.avatar}</div><div class="char-name">${c.name}</div><div class="char-role">${c.role}</div><div class="char-ability"><span class="char-ability-label">NÃ„â€šNG LÃ¡Â»Â°C</span>${c.ability}</div>`;if(!picked){card.onclick=()=>pickCompanion(c.id);card.onkeydown=event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();pickCompanion(c.id);}};}grid.appendChild(card);});modal.classList.add('show');document.body.classList.add('modal-open');playSound('modal');requestAnimationFrame(()=>{const firstAvailable=grid.querySelector('.char-card:not(.picked)');if(firstAvailable&&window.matchMedia('(min-width: 601px)').matches)firstAvailable.focus();});}
function checkVSMilestone(fromStep,target){if(state.mode!=='vs'||!state.vs)return;if(state.companions.length>=2)return;for(const m of MILESTONES){if(fromStep<m&&target>=m&&!state.vs.passedMilestones.has(m)){state.vs.passedMilestones.add(m);setTimeout(()=>{if(!state.finished&&!document.getElementById('charModal').classList.contains('show')&&state.companions.length<2){state.resolvingTurn=true;openVSClassicMilestone(m);}},450);break;}}}
function openVSSetup() { const grid=document.getElementById('vsCompanionChoices'); grid.innerHTML=''; window.vsSetupChoice=null; VS_COMPANIONS.forEach(c=>{const card=document.createElement('button'); card.type='button'; card.className='vs-companion-choice'; const image=COMPANION_IMAGES[c.id]; card.innerHTML=`${image?`<img src="${image}" alt="${c.name}" loading="lazy">`:''}<strong>${c.name}</strong><small>${c.ability}</small>`; card.onclick=()=>{window.vsSetupChoice=c.id; document.querySelectorAll('.vs-companion-choice').forEach(x=>x.classList.remove('selected')); card.classList.add('selected');}; grid.appendChild(card)}); document.getElementById('coinResult').textContent=''; document.getElementById('vsSetup').classList.add('show'); }
function closeVSSetup(){document.getElementById('vsSetup').classList.remove('show');}
function tossCoin(){ if(!window.vsSetupChoice){document.getElementById('coinResult').textContent='HÃƒÂ£y chÃ¡Â»Ân ngÃ†Â°Ã¡Â»Âi Ã„â€˜Ã¡Â»â€œng hÃƒÂ nh trÃ†Â°Ã¡Â»â€ºc.'; return;} const playerFirst=Math.random()<.5; document.getElementById('coinResult').textContent='Ã„ÂÃ¡Â»â€œng xu: '+(playerFirst?'BÃ¡ÂºÂ¡n Ã„â€˜i trÃ†Â°Ã¡Â»â€ºc!':'Bot Ã„â€˜i trÃ†Â°Ã¡Â»â€ºc!'); setTimeout(()=>beginVSGame(playerFirst),900); }
function beginVSGame(playerFirst){ closeVSSetup(); playSound('start'); showLoading('Ã„Âang chuÃ¡ÂºÂ©n bÃ¡Â»â€¹ VS mode...'); setTimeout(()=>{resetState(); state.mode='vs'; state.vs.playerCompanion=window.vsSetupChoice; state.vs.botCompanion=VS_COMPANIONS[Math.floor(Math.random()*VS_COMPANIONS.length)].id; state.vs.botCompanions=[...shuffle(COMPANIONS)].slice(0,1).map(c=>c.id); state.vs.playerTurn=playerFirst; state.sessionId=(window.__ytcSessionId||0)+1; window.__ytcSessionId=state.sessionId; state.questions=buildQuestionDeck(); document.getElementById('startScreen').classList.remove('active'); document.getElementById('gameScreen').classList.add('active'); buildBoard(); renderCompanions(); updateTopbar(); updateVSHUD(); loadQuestion(false); runStartCountdown(); hideLoading(); },720); }
function startGame() {
  if(selectedGameMode==='vs'){ openVSSetup(); return; }
  playSound('start');
  showLoading('Ã„Âang chuÃ¡ÂºÂ©n bÃ¡Â»â€¹ Ã„â€˜Ã†Â°Ã¡Â»Âng Ã„â€˜ua...');
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

function showLoading(message = 'Ã„Âang tÃ¡ÂºÂ£i...') {
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
  playSound('countdown');
  state.countdownTimer = setInterval(() => {
    if (sessionId !== state.sessionId || state.finished) {
      clearInterval(state.countdownTimer);
      overlay.classList.remove('show');
      return;
    }
    count--;
    if (count > 0) {
      number.textContent = count;
      playSound('countdown');
      number.style.animation = 'none';
      void number.offsetWidth;
      number.style.animation = '';
      return;
    }
    clearInterval(state.countdownTimer);
    number.textContent = 'XUÃ¡ÂºÂ¤T PHÃƒÂT!';
    number.style.fontSize = 'clamp(44px,10vw,82px)';
    setTimeout(() => {
      if (sessionId !== state.sessionId || state.finished) return;
      overlay.classList.remove('show');
      number.style.fontSize = '';
      if (state.mode === 'vs' && !state.vs.playerTurn) botTurn();
      else startTimer();
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
  updateBotToken();
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

function updateBotToken() {
  document.querySelectorAll('.bot-token').forEach(t => t.remove());
  document.querySelectorAll('.cell.bot-here').forEach(c => c.classList.remove('bot-here'));
  if (state.mode !== 'vs' || !state.vs || state.vs.botStep === 0) return;
  const cell = document.getElementById('cell-' + state.vs.botStep);
  if (!cell) return;
  cell.classList.add('bot-here');
  const token = document.createElement('div');
  token.className = 'bot-token';
  token.innerHTML = '<div class="bot-icon">BOT</div>';
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
      <div class="companion-row empty">ChÃ†Â°a cÃƒÂ³ Ã„â€˜Ã¡Â»â€œng hÃƒÂ nh Ã¢â‚¬â€ Ã„â€˜Ã¡ÂºÂ¡t ÃƒÂ´ 15 Ã„â€˜Ã¡Â»Æ’ chÃ¡Â»Ân</div>
      <div class="companion-row empty">Ãƒâ€ thÃ¡Â»Â© 2 mÃ¡Â»Å¸ Ã¡Â»Å¸ ÃƒÂ´ 30</div>`;
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
      ? 'Ã„ÂÃ¡ÂºÂ¡t ÃƒÂ´ 15 Ã„â€˜Ã¡Â»Æ’ chÃ¡Â»Ân Ã„â€˜Ã¡Â»â€œng hÃƒÂ nh Ã„â€˜Ã¡ÂºÂ§u tiÃƒÂªn'
      : 'Ã„ÂÃ¡ÂºÂ¡t ÃƒÂ´ 30 Ã„â€˜Ã¡Â»Æ’ chÃ¡Â»Ân Ã„â€˜Ã¡Â»â€œng hÃƒÂ nh thÃ¡Â»Â© hai';
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
  document.getElementById('qCounter').textContent = `CÃƒÂ¢u ${state.qIndex + 1} / ${state.questions.length}`;
  document.getElementById('qNumVal').textContent = `${state.qIndex + 1}/${state.questions.length}`;
  const badge = document.getElementById('qTypeBadge');
  if (q.type === 'choice') { badge.textContent = 'TrÃ¡ÂºÂ¯c nghiÃ¡Â»â€¡m'; badge.className = 'q-type-badge choice'; }
  else if (q.type === 'fill') { badge.textContent = 'Ã„ÂiÃ¡Â»Ân khuyÃ¡ÂºÂ¿t'; badge.className = 'q-type-badge fill'; }
  else { badge.textContent = 'ChÃ¡Â»Ân tÃ¡Â»Â«'; badge.className = 'q-type-badge word'; }

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
      <input type="text" class="fill-input" id="fillInput" placeholder="NhÃ¡ÂºÂ­p cÃƒÂ¢u trÃ¡ÂºÂ£ lÃ¡Â»Âi cÃ¡Â»Â§a bÃ¡ÂºÂ¡n..." autocomplete="off">
      <button class="btn-submit" onclick="submitFill()">XÃƒÂC NHÃ¡ÂºÂ¬N</button>`;
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
    submit.textContent = 'XÃƒÂC NHÃ¡ÂºÂ¬N';
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
  playSound('timeout');
  clearInterval(state.timer);
  registerWrongAnswer();
  if (offerRetry()) return;
  state.answered = true;
  // Disable inputs
  document.querySelectorAll('.option, .word-chip, .btn-submit').forEach(b => b.classList.add('disabled'));
  const fb = document.getElementById('feedback');
  fb.className = 'feedback wrong show';
  fb.innerHTML = `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg> HÃ¡ÂºÂ¿t giÃ¡Â»Â! Ã„ÂÃƒÂ¡p ÃƒÂ¡n: ${getCorrectAnswerText(state.currentQ)}`;
  document.getElementById('btnNext').classList.add('show');
}

/* ============================================================
   ANSWER HANDLERS
   ============================================================ */
function registerWrongAnswer() {
  state.streak = 0;
  if (state.companions.includes('nguyenphuonganh')) state.phuongAnhBoostPending = true;
}

function revealNextButtonAfterCorrect() {
  const button = document.getElementById('btnNext');
  const sessionId = state.sessionId;
  button.classList.remove('show');
  setTimeout(() => {
    if (sessionId !== state.sessionId || state.finished) return;
    button.classList.add('show');
  }, 1500);
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
  if (state.mode === 'vs') { resolveVSPlayerAnswer(correct); return; }
  if (correct) { onCorrectAnswer(); revealNextButtonAfterCorrect(); }
  else { registerWrongAnswer();
    const fb = document.getElementById('feedback');
    fb.textContent += ` Ã¢â‚¬â€ Ã„ÂÃƒÂ¡p ÃƒÂ¡n Ã„â€˜ÃƒÂºng: ${q.options[q.answer]}`;
    document.getElementById('btnNext').classList.add('show');
  }
}

function submitFill() {
  if (state.answered) return;
  const input = document.getElementById('fillInput');
  const normalizeFillAnswer = value => String(value ?? '')
    .normalize('NFKC')
    .trim()
    .toLocaleLowerCase('vi-VN')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[Ã¢â‚¬Å“Ã¢â‚¬Â"'`]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*[,;|/]\s*/g, ',')
    .replace(/\s*-\s*/g, '-')
    .trim();
  const val = normalizeFillAnswer(input.value);
  if (!val) return;
  state.answered = true;
  clearInterval(state.timer);
  input.disabled = true;

  const q = state.currentQ;
  const accepts = (q.accept || [q.answer]).map(normalizeFillAnswer);
  const correct = accepts.some(answer => answer === val);
  if (!correct && offerRetry()) return;
  showFeedback(correct);
  if (state.mode === 'vs') { resolveVSPlayerAnswer(correct); return; }
  if (correct) { onCorrectAnswer(); revealNextButtonAfterCorrect(); }
  else { state.streak = 0;
    const fb = document.getElementById('feedback');
    fb.textContent += ` Ã¢â‚¬â€ Ã„ÂÃƒÂ¡p ÃƒÂ¡n Ã„â€˜ÃƒÂºng: ${q.answer}`;
    document.getElementById('btnNext').classList.add('show');
  }
}

function addWord(word, chip) {
  if (state.answered) return;
  // Find first empty slot
  const slots = document.querySelectorAll('#wordSlots .word-slot-empty');
  if (slots.length === 0) return;
  const slot = slots[0];
  slot.className = 'word-slot';
  slot.textContent = word + ' Ã¢Å“â€¢';
  slot.dataset.word = word;
  chip.classList.add('used');
  state.selectedWords.push(word);
  playSound('word');
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
  playSound('word');
}

function submitWord() {
  if (state.answered) return;
  const visibleWords = Array.from(document.querySelectorAll('#wordSlots .word-slot'))
    .map(slot => slot.dataset.word || slot.textContent.replace(/\s+Ã¢Å“â€¢\s*$/, '').trim())
    .filter(Boolean);
  if (visibleWords.length !== state.currentQ.answer.length) {
    const fb = document.getElementById('feedback');
    fb.className = 'feedback info show';
    fb.textContent = `HÃƒÂ£y chÃ¡Â»Ân Ã„â€˜Ã¡Â»Â§ ${state.currentQ.answer.length} tÃ¡Â»Â« trÃ†Â°Ã¡Â»â€ºc khi xÃƒÂ¡c nhÃ¡ÂºÂ­n.`;
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
  if (state.mode === 'vs') { resolveVSPlayerAnswer(correct); return; }
  if (correct) { onCorrectAnswer(); revealNextButtonAfterCorrect(); }
  else { state.streak = 0;
    const fb = document.getElementById('feedback');
    fb.textContent += ` Ã¢â‚¬â€ Ã„ÂÃƒÂ¡p ÃƒÂ¡n Ã„â€˜ÃƒÂºng: ${q.answer.join(' Ã¢â€ â€™ ')}`;
    document.getElementById('btnNext').classList.add('show');
  }
}

function updateVSHUD(){if(state.mode!=='vs')return; const v=state.vs; document.getElementById('botScoreVal').textContent=v.botScore.toLocaleString('vi-VN'); document.getElementById('turnVal').textContent=v.playerTurn?'BÃ¡ÂºÂ¡n':'Bot'; const c=VS_COMPANIONS.find(x=>x.id===v.playerCompanion); document.getElementById('vsCompanionLabel').textContent=c?c.name+' Ã¢â‚¬â€ '+c.ability:'ChÃ†Â°a chÃ¡Â»Ân'; const cd=v.cooldowns[v.playerCompanion]||0; const thanhReady=v.playerCompanion==='hongthanh'&&v.streak>=2&&!cd; document.getElementById('vsCooldown').textContent=v.playerCompanion==='hongthanh'&&!cd&&!thanhReady?'CÃ¡ÂºÂ§n Ã„â€˜ÃƒÂºng 2 lÃ†Â°Ã¡Â»Â£t liÃƒÂªn tiÃ¡ÂºÂ¿p':cd?'Cooldown: '+cd+' lÃ†Â°Ã¡Â»Â£t': 'SÃ¡ÂºÂµn sÃƒÂ ng'; const btn=document.getElementById('vsSkillBtn'); btn.textContent=v.playerCompanion==='hongthanh'?'LÃƒâ‚¬M CHOÃƒÂNG BOT':'DÃƒâ„¢NG KÃ¡Â»Â¸ NÃ„â€šNG'; btn.disabled=Boolean(cd)||!v.playerTurn||state.finished||(v.playerCompanion==='hongthanh'&&!thanhReady); const botList=document.getElementById('vsBotCompanions'); if(botList){const names=v.botCompanions.map(id=>{const bc=COMPANIONS.find(x=>x.id===id); return bc?bc.name:'';}).filter(Boolean); const botSkill=VS_COMPANIONS.find(x=>x.id===v.botCompanion); botList.textContent='Ã„ÂÃ¡Â»â€œng hÃƒÂ nh cÃ¡Â»Â§a Bot: '+(names.length?names.join(', '):'chÃ†Â°a cÃƒÂ³')+(botSkill?' Ã‚Â· KÃ¡Â»Â¹ nÃ„Æ’ng: '+botSkill.name:'');}}
function moveVS(who,steps){const v=state.vs; if(who==='player'){const fromStep=state.step; let totalSteps=steps; if(state.companions.includes('hang')){totalSteps+=2; showFloatingPoints('Thu HÃ¡ÂºÂ±ng Ã‚Â· +2 bÃ†Â°Ã¡Â»â€ºc', true, '#d19a00');} state.step=Math.min(BOARD_SIZE,state.step+totalSteps); v.playerFinished=state.step>=BOARD_SIZE; if(state.companions.includes('phuonglinh')){const bonus=Math.max(0,state.step-fromStep)*100; if(bonus>0){ state.score+=bonus; showFloatingPoints('PhÃ†Â°Ã†Â¡ng Linh Ã‚Â· +'+bonus+' ('+(state.step-fromStep)+' ÃƒÂ´)', true, '#d19a00'); } } if(v.playerFinished && !v.playerFinishedBonus){ v.playerFinishedBonus=true; playSound('finish'); const finishBonus=state.companions.includes('dung')?FINISH_BONUS_WITH_DUNG:POINTS_FINISH_BONUS; state.score+=finishBonus; showFloatingPoints('VÃ¡Â»â‚¬ Ã„ÂÃƒÂCH! +'+finishBonus+' Ã„â€˜iÃ¡Â»Æ’m', false, '#ffd24a'); launchConfetti(); } updatePlayerToken(); checkVSMilestone(fromStep,state.step); }else{const fromStep=v.botStep; let totalSteps=steps; if(v.botCompanions.includes('hang')){totalSteps+=2; showFloatingPoints('Bot / Thu HÃ¡ÂºÂ±ng Ã‚Â· +2 bÃ†Â°Ã¡Â»â€ºc', false, '#ed5b69');} v.botStep=Math.min(BOARD_SIZE,v.botStep+totalSteps); v.botFinished=v.botStep>=BOARD_SIZE; if(v.botCompanions.includes('phuonglinh')){const bonus=Math.max(0,v.botStep-fromStep)*100; if(bonus>0){ v.botScore+=bonus; showFloatingPoints('Bot / PhÃ†Â°Ã†Â¡ng Linh Ã‚Â· +'+bonus+' ('+(v.botStep-fromStep)+' ÃƒÂ´)', false, '#ed5b69'); } } if(v.botFinished && !v.botFinishedBonus){ v.botFinishedBonus=true; const finishBonus=v.botCompanions.includes('dung')?FINISH_BONUS_WITH_DUNG:POINTS_FINISH_BONUS; v.botScore+=finishBonus; showFloatingPoints('Bot vÃ¡Â»Â Ã„â€˜ÃƒÂ­ch! +'+finishBonus+' Ã„â€˜iÃ¡Â»Æ’m', false, '#ed5b69'); } checkVSBotMilestone(fromStep,v.botStep); } updateBotToken(); updateTopbar(); updateVSHUD(); }
function checkVSBotMilestone(fromStep,target){const v=state.vs; if(v.botCompanions.length>=2) return; const EXCLUDED_VS_IDS=VS_COMPANIONS.map(c=>c.id); for(const m of MILESTONES){ if(fromStep<m && target>=m && !v.botPassedMilestones.has(m)){ v.botPassedMilestones.add(m); const available=COMPANIONS.filter(c=>!EXCLUDED_VS_IDS.includes(c.id) && !v.botCompanions.includes(c.id)); if(available.length){ const pick=available[Math.floor(Math.random()*available.length)]; v.botCompanions.push(pick.id); showFloatingPoints('Bot chÃ¡Â»Ân Ã„â€˜Ã¡Â»â€œng hÃƒÂ nh: '+pick.name, false, '#ed5b69'); } break; } } }
function awardVSPlayer(){const v=state.vs; const bonus=v.playerFinished&&!v.botFinished?2:1; const timeUsed=(state.companions.includes('minh')?BASE_TIME+10:BASE_TIME)-state.timeLeft; let pts=(POINTS_BASE+Math.round(POINTS_TIME_BONUS*(state.timeLeft/BASE_TIME)))*bonus; let thaoAnhBonus=0; if(state.companions.includes('thoanh')&&timeUsed<=EARLY_WINDOW){thaoAnhBonus=pts; pts+=thaoAnhBonus;} let streakBonus=0; if(state.companions.includes('anh')){streakBonus=v.streak*50; pts+=streakBonus;} state.score+=pts; showFloatingPoints('BÃ¡ÂºÂ¡n +'+pts+(bonus===2?' (x2 vÃ¡Â»Â Ã„â€˜ÃƒÂ­ch)':'')+(thaoAnhBonus?' (ThÃ¡ÂºÂ£o Anh x2)':'')+(streakBonus?' (streak +'+streakBonus+')':''),true); updateTopbar(); return rollDice().then(steps=>{ if(state.companions.includes('trang')&&(steps===3||steps===4)){const multiplier=steps===3?1.2:1.3; const bPts=Math.round(state.score*(multiplier-1)); state.score+=bPts; showFloatingPoints('TÃƒÂ´ Thu Trang x'+multiplier+' Ã‚Â· +'+bPts, true, '#d19a00'); document.getElementById('diceResult').textContent+=' Ã‚Â· Ã„â€˜iÃ¡Â»Æ’m x'+multiplier; } if(state.companions.includes('nhatminh')&&steps===1){state.score+=DICE_ONE_BONUS; showFloatingPoints('NhÃ¡ÂºÂ­t Minh Ã‚Â· xÃƒÂºc 1 Ã‚Â· +'+DICE_ONE_BONUS, true, '#d19a00'); document.getElementById('diceResult').textContent+=' Ã‚Â· +'+DICE_ONE_BONUS+' Ã„â€˜iÃ¡Â»Æ’m';} updateTopbar(); moveVS('player',steps); });}
function awardVSBot(){const v=state.vs; const multiplier=v.botFinished&&!v.playerFinished?2:1; let pts=(POINTS_BASE+Math.floor(Math.random()*101))*multiplier; v.botStreak++; let streakBonus=0; if(v.botCompanions.includes('anh')){streakBonus=v.botStreak*50; pts+=streakBonus;} v.botScore+=pts; v.botCorrect++; if(v.botCompanion==='hongthanh'&&v.botStreak>=2&&v.botHongCooldown===0){v.playerStunned=true;v.botStreak=0;v.botHongCooldown=4;showFloatingPoints('Bot / HÃ¡Â»â€œng Thanh: bÃ¡ÂºÂ¡n bÃ¡Â»â€¹ lÃƒÂ m choÃƒÂ¡ng!',false,'#ed5b69');} showFloatingPoints('Bot +'+pts+(multiplier===2?' (x2 vÃ¡Â»Â Ã„â€˜ÃƒÂ­ch)':'')+(streakBonus?' (streak +'+streakBonus+')':''),false,'#ed5b69'); updateTopbar(); return rollDice().then(steps=>{ if(v.botCompanions.includes('trang')&&(steps===3||steps===4)){const m=steps===3?1.2:1.3; const bPts=Math.round(v.botScore*(m-1)); v.botScore+=bPts; showFloatingPoints('Bot / TÃƒÂ´ Thu Trang x'+m+' Ã‚Â· +'+bPts, false, '#ed5b69');} if(v.botCompanions.includes('nhatminh')&&steps===1){v.botScore+=DICE_ONE_BONUS; showFloatingPoints('Bot / NhÃ¡ÂºÂ­t Minh Ã‚Â· xÃƒÂºc 1 Ã‚Â· +'+DICE_ONE_BONUS, false, '#ed5b69');} updateTopbar(); moveVS('bot',steps); const id=v.botCompanion; if(id==='thanhlan'&&v.botSkillCooldowns.thanhlan===0&&Math.random()<.65){const n=Math.floor(Math.random()*4)+1;state.step=Math.max(0,state.step-n);updatePlayerToken();v.botSkillCooldowns.thanhlan=3;showFloatingPoints('Bot / Thanh Lan: bÃ¡ÂºÂ¡n lÃƒÂ¹i '+n+' bÃ†Â°Ã¡Â»â€ºc Ã‚Â· Cooldown 3 lÃ†Â°Ã¡Â»Â£t',false,'#ed5b69');} if(id==='doantrang'&&v.botSkillCooldowns.doantrang===0&&Math.random()<.65){const stolen=Math.floor(state.score/4);state.score=Math.max(0,state.score-stolen);v.botScore+=stolen;v.botSkillCooldowns.doantrang=3;showFloatingPoints('Bot / Ã„Âoan Trang: cÃ†Â°Ã¡Â»â€ºp '+stolen+' Ã„â€˜iÃ¡Â»Æ’m Ã‚Â· Cooldown 3 lÃ†Â°Ã¡Â»Â£t',false,'#ed5b69');} updateTopbar();});}
async function resolveVSPlayerAnswer(correct){const v=state.vs; if(v.stealMode){v.stealMode=false; if(correct){state.correctCount++;v.stealCorrect++;await awardVSPlayer();} else {showFeedback(false);} finishVSRound(true); return;} if(correct){state.correctCount++;v.streak++; await awardVSPlayer(); finishVSRound(false);} else {v.streak=0; setTimeout(()=>botStealPlayerQuestion(),700);}}
function botStealPlayerQuestion(){if(state.finished)return; const v=state.vs; v.botStealOpportunities++; v.playerTurn=false; updateVSHUD(); document.getElementById('answerArea').innerHTML=''; document.getElementById('qText').textContent='Bot Ã„â€˜ang cÃ†Â°Ã¡Â»â€ºp cÃƒÂ¢u hÃ¡Â»Âi cÃ¡Â»Â§a bÃ¡ÂºÂ¡n...'; const fb=document.getElementById('feedback'); fb.className='feedback info show'; fb.innerHTML='Ã¢Å¡Â  Bot cÃ†Â°Ã¡Â»â€ºp cÃƒÂ¢u hÃ¡Â»Âi! Bot Ã„â€˜ang suy nghÃ„Â©...'; playSound('modal'); setTimeout(()=>{if(state.finished)return; const correct=Math.random()<.78; if(correct){v.botStealCorrect++;fb.className='feedback wrong show'; fb.innerHTML='<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M15 9l-6 6M9 9l6 6"/></svg> Bot cÃ†Â°Ã¡Â»â€ºp thÃƒÂ nh cÃƒÂ´ng! Bot trÃ¡ÂºÂ£ lÃ¡Â»Âi Ã„â€˜ÃƒÂºng vÃƒÂ  tung xÃƒÂºc xÃ¡ÂºÂ¯c.'; awardVSBot().then(()=>finishVSRound(true));}else{v.botStreak=0; fb.className='feedback correct show'; fb.innerHTML='<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 12 2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg> Bot cÃ†Â°Ã¡Â»â€ºp thÃ¡ÂºÂ¥t bÃ¡ÂºÂ¡i! CÃƒÂ¢u nÃƒÂ y khÃƒÂ´ng ai ghi Ã„â€˜iÃ¡Â»Æ’m. Ã„ÂÃƒÂ¡p ÃƒÂ¡n Ã„â€˜ÃƒÂºng: '+getCorrectAnswerText(state.currentQ); finishVSRound(true);}},1200);}
function advanceVSQuestion(){if(state.finished)return; const v=state.vs; state.qIndex+=v.stealQuestion?2:1; v.stealQuestion=false; if(state.qIndex>=state.questions.length|| (v.playerFinished&&v.botFinished)){endVSGame();return;} state.resolvingTurn=false; if(v.cooldowns.hongthanh>0)v.cooldowns.hongthanh--; if(v.cooldowns.thanhlan>0)v.cooldowns.thanhlan--; if(v.cooldowns.doantrang>0)v.cooldowns.doantrang--; if(v.botHongCooldown>0)v.botHongCooldown--; if(v.botSkillCooldowns.thanhlan>0)v.botSkillCooldowns.thanhlan--; if(v.botSkillCooldowns.doantrang>0)v.botSkillCooldowns.doantrang--; v.botSkipped=false; if(v.playerStunned){v.playerStunned=false;v.playerTurn=false;loadQuestion(true);updateVSHUD();setTimeout(()=>botTurn(false),450);return;} v.playerTurn=true; loadQuestion(true); updateVSHUD();}
function finishVSRound(fromBot=false){state.resolvingTurn=true; updateVSHUD(); setTimeout(()=>{if(state.finished)return; if(document.getElementById('charModal').classList.contains('show')){state.vs.pendingFinish=fromBot;return;} if(!fromBot&&!state.vs.botSkipped){botTurn(false);return;} if(!fromBot&&state.vs.botSkipped){showFloatingPoints('Bot mÃ¡ÂºÂ¥t lÃ†Â°Ã¡Â»Â£t!',true,'#b06cff');} advanceVSQuestion();},fromBot?1200:700);}
function botTurn(fromSteal=false){if(state.finished)return; const v=state.vs; v.playerTurn=false; updateVSHUD(); document.getElementById('answerArea').innerHTML=''; document.getElementById('qText').textContent='LÃ†Â°Ã¡Â»Â£t cÃ¡Â»Â§a Bot Ã¢â‚¬â€ Ã„â€˜ang suy nghÃ„Â©...'; document.getElementById('feedback').className='feedback info show'; document.getElementById('feedback').textContent='Bot Ã„â€˜ang trÃ¡ÂºÂ£ lÃ¡Â»Âi cÃƒÂ¢u hÃ¡Â»Âi riÃƒÂªng.'; setTimeout(()=>{if(state.finished)return; const correct=Math.random()<.82; if(correct){document.getElementById('feedback').textContent='Bot trÃ¡ÂºÂ£ lÃ¡Â»Âi Ã„â€˜ÃƒÂºng vÃƒÂ  tung xÃƒÂºc xÃ¡ÂºÂ¯c.'; awardVSBot().then(()=>finishVSRound(true));}else{v.playerTurn=true;v.stealMode=true;v.stealQuestion=true;v.stealOpportunities++;state.currentQ=state.questions[(state.qIndex+1)%state.questions.length]; state.answered=false; state.timeLeft=BASE_TIME; document.getElementById('qCounter').textContent=`CÃƒÂ¢u ${state.qIndex + 2} / ${state.questions.length} Ã¢â‚¬â€ CÃ†Â¯Ã¡Â»Å¡P CÃƒâ€šU`; document.getElementById('qNumVal').textContent=`${state.qIndex + 2}/${state.questions.length}`; document.getElementById('qText').textContent=state.currentQ.q; const badge=document.getElementById('qTypeBadge'); if(state.currentQ.type==='choice'){badge.textContent='TrÃ¡ÂºÂ¯c nghiÃ¡Â»â€¡m';badge.className='q-type-badge choice';}else if(state.currentQ.type==='fill'){badge.textContent='Ã„ÂiÃ¡Â»Ân khuyÃ¡ÂºÂ¿t';badge.className='q-type-badge fill';}else{badge.textContent='ChÃ¡Â»Ân tÃ¡Â»Â«';badge.className='q-type-badge word';} document.getElementById('feedback').textContent='Bot trÃ¡ÂºÂ£ lÃ¡Â»Âi sai Ã¢â‚¬â€ bÃ¡ÂºÂ¡n Ã„â€˜Ã†Â°Ã¡Â»Â£c quyÃ¡Â»Ân cÃ†Â°Ã¡Â»â€ºp cÃƒÂ¢u hÃ¡Â»Âi!'; renderAnswerArea(state.currentQ); startTimer();}},900);}
function useVSSkill(){const v=state.vs; const id=v.playerCompanion; if(!id||v.cooldowns[id]||!v.playerTurn||state.finished)return; if(id==='hongthanh'){if(v.streak<2)return;v.botSkipped=true;v.cooldowns[id]=4;v.streak=0;showFloatingPoints('HÃ¡Â»â€œng Thanh: Bot bÃ¡Â»â€¹ lÃƒÂ m choÃƒÂ¡ng!',true,'#b06cff');}else if(id==='thanhlan'){const n=Math.floor(Math.random()*4)+1;v.botStep=Math.max(0,v.botStep-n);updateBotToken();v.cooldowns[id]=3;showFloatingPoints('Thanh Lan: Bot lÃƒÂ¹i '+n+' bÃ†Â°Ã¡Â»â€ºc',true,'#b06cff');}else if(id==='doantrang'){const stolen=Math.floor(v.botScore/4);v.botScore-=stolen;state.score+=stolen;v.cooldowns[id]=3;showFloatingPoints('Ã„Âoan Trang: cÃ†Â°Ã¡Â»â€ºp '+stolen+' Ã„â€˜iÃ¡Â»Æ’m',true,'#b06cff');} updateTopbar();updateVSHUD();}
function endVSGame(){state.finished=true; clearInterval(state.timer); if(!state.vs.playerFinished&&state.companions.includes('dung')){const distanceBonus=state.step*DISTANCE_BONUS_WITH_DUNG; state.score+=distanceBonus; if(distanceBonus>0) showFloatingPoints('MÃ¡ÂºÂ¡nh DÃ…Â©ng Ã‚Â· +'+distanceBonus+' Ã„â€˜iÃ¡Â»Æ’m theo '+state.step+' bÃ†Â°Ã¡Â»â€ºc', true, '#d19a00');} if(!state.vs.botFinished&&state.vs.botCompanions.includes('dung')){const distanceBonus=state.vs.botStep*DISTANCE_BONUS_WITH_DUNG; state.vs.botScore+=distanceBonus; if(distanceBonus>0) showFloatingPoints('Bot / MÃ¡ÂºÂ¡nh DÃ…Â©ng Ã‚Â· +'+distanceBonus+' Ã„â€˜iÃ¡Â»Æ’m theo '+state.vs.botStep+' bÃ†Â°Ã¡Â»â€ºc', false, '#ed5b69');} updateTopbar(); saveRunRecord(); const winner=state.score===state.vs.botScore?'HÃƒÂ²a!':state.score>state.vs.botScore?'BÃ¡ÂºÂ¡n chiÃ¡ÂºÂ¿n thÃ¡ÂºÂ¯ng!':'Bot chiÃ¡ÂºÂ¿n thÃ¡ÂºÂ¯ng!'; document.getElementById('gameOverTitle').textContent=winner; document.getElementById('gameOverRank').textContent='BÃ¡ÂºÂ¡n '+state.score.toLocaleString('vi-VN')+' Ã„â€˜iÃ¡Â»Æ’m Ã¢â‚¬â€ Bot '+state.vs.botScore.toLocaleString('vi-VN'); document.getElementById('finalScore').textContent=state.score.toLocaleString('vi-VN'); document.getElementById('finalStep').textContent=state.step+'/50'; document.getElementById('finalCorrect').textContent=state.correctCount+'/'+state.questions.length; document.getElementById('finalBotScore').textContent=state.vs.botScore.toLocaleString('vi-VN'); document.getElementById('finalBotStep').textContent=state.vs.botStep+'/50'; document.getElementById('finalBotCorrect').textContent=state.vs.botCorrect+'/'+state.questions.length; document.getElementById('finalSteals').textContent=state.vs.stealCorrect+'/'+state.vs.stealOpportunities; document.getElementById('finalBotSteals').textContent=state.vs.botStealCorrect+'/'+state.vs.botStealOpportunities; const names=state.companions.map(id=>{const c=COMPANIONS.find(x=>x.id===id); return c?c.name:'';}).filter(Boolean).join(', '); const botNames=state.vs.botCompanions.map(id=>{const c=COMPANIONS.find(x=>x.id===id); return c?c.name:'';}).filter(Boolean).join(', '); const botSkill=VS_COMPANIONS.find(x=>x.id===state.vs.botCompanion); document.getElementById('finalCompanions').textContent=names||'ChÃ†Â°a chÃ¡Â»Ân'; document.getElementById('finalBotCompanions').textContent=(botNames||'ChÃ†Â°a chÃ¡Â»Ân')+(botSkill?' + '+botSkill.name:''); document.getElementById('gameOverModal').classList.add('show'); playSound('gameover');}

function getCorrectAnswerText(q) {
  if (q.type === 'choice') return q.options[q.answer];
  if (q.type === 'fill') return q.answer;
  return q.answer.join(' Ã¢â€ â€™ ');
}

function offerRetry() {
  // In VS steal mode this retry is intentionally available to the player.
  if (!state.companions.includes('phuonganh') || state.retryUsed) return false;
  state.retryUsed = true;
  state.answered = false;
  state.selectedWords = [];
  state.timeLeft = Math.max(state.timeLeft, Math.floor(BASE_TIME / 2));
  document.getElementById('feedback').className = 'feedback info show';
  document.getElementById('feedback').textContent = 'LÃƒÂª ThÃ¡Â»â€¹ PhÃ†Â°Ã†Â¡ng Anh: bÃ¡ÂºÂ¡n cÃƒÂ²n 1 cÃ†Â¡ hÃ¡Â»â„¢i nÃ¡Â»Â¯a Ã¢â‚¬â€ streak vÃ¡ÂºÂ«n Ã„â€˜Ã†Â°Ã¡Â»Â£c giÃ¡Â»Â¯!';
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
  fb.textContent = correct ? 'Ã¢Å“â€œ ChÃƒÂ­nh xÃƒÂ¡c!' : 'Ã¢Å“â€” ChÃ†Â°a Ã„â€˜ÃƒÂºng';
}

/* ============================================================
   CORRECT ANSWER Ã¢â€ â€™ SCORE & DICE
   ============================================================ */
function onCorrectAnswer() {
  state.resolvingTurn = true;
  state.correctCount++;
  if (state.companions.includes('halinh') && !state.isRepeatQuestion && state.haLinhCooldown === 0) {
    state.pendingRepeatQuestion = JSON.parse(JSON.stringify(state.currentQ));
    state.pendingRepeatQuestion.isRepeatQuestion = true;
    state.haLinhCooldown = 4;
    document.getElementById('feedback').innerHTML += '<br>HÃƒÂ  Linh: cÃƒÂ¢u hÃ¡Â»Âi nÃƒÂ y sÃ¡ÂºÂ½ xuÃ¡ÂºÂ¥t hiÃ¡Â»â€¡n lÃ¡ÂºÂ¡i Ã¡Â»Å¸ lÃ†Â°Ã¡Â»Â£t kÃ¡ÂºÂ¿ tiÃ¡ÂºÂ¿p.';
  }
  const timeUsed = (state.companions.includes('minh') ? BASE_TIME + 10 : BASE_TIME) - state.timeLeft;
  let earned = POINTS_BASE + Math.round(POINTS_TIME_BONUS * (state.timeLeft / (state.companions.includes('minh') ? BASE_TIME + 10 : BASE_TIME)));
  state.streak++;
  let streakBonus = 0;
  if (state.companions.includes('anh')) { streakBonus = state.streak * 50; earned += streakBonus; }
  const phuongAnhBoost = state.companions.includes('nguyenphuonganh') && state.phuongAnhBoostPending;

  // PhÃ¡ÂºÂ¡m ThÃ¡Â»â€¹ ThÃ¡ÂºÂ£o Anh bonus: x2 if answered within EARLY_WINDOW seconds
  let thaoAnhBonus = 0;
  if (state.companions.includes('thoanh') && timeUsed <= EARLY_WINDOW) {
    thaoAnhBonus = earned; // double
    earned += thaoAnhBonus;
  }

  if (phuongAnhBoost) earned *= 2;
  state.score += earned;
  if (phuongAnhBoost) state.phuongAnhBoostPending = false;
  if (phuongAnhBoost) showFloatingPoints(`NguyÃ¡Â»â€¦n PhÃ†Â°Ã†Â¡ng Anh x2 Ã„â€˜iÃ¡Â»Æ’m Ã‚Â· +${earned}`, true, '#b06cff');
  showFloatingPoints('+' + earned + (streakBonus ? ` (streak +${streakBonus})` : ''), thaoAnhBonus > 0 || streakBonus > 0 || phuongAnhBoost);
  updateTopbar();

  // Roll dice
  const sessionId = state.sessionId;
  rollDice().then(steps => {
    if (sessionId !== state.sessionId || state.finished) return;
    let totalSteps = steps;
    if (state.companions.includes('nguyenphuonganh') && phuongAnhBoost) {
      totalSteps *= 2;
      showFloatingPoints(`NguyÃ¡Â»â€¦n PhÃ†Â°Ã†Â¡ng Anh x2 bÃ†Â°Ã¡Â»â€ºc Ã‚Â· +${totalSteps}`, true, '#b06cff');
    }
    if (state.companions.includes('nhatminh') && steps === 1) {
      state.score += DICE_ONE_BONUS;
      updateTopbar();
      showFloatingPoints(`NhÃ¡ÂºÂ­t Minh Ã‚Â· xÃƒÂºc 1 Ã‚Â· +${DICE_ONE_BONUS}`, true, '#d19a00');
      document.getElementById('diceResult').textContent += ` Ã‚Â· +${DICE_ONE_BONUS} Ã„â€˜iÃ¡Â»Æ’m`;
    }
    if (state.companions.includes('trang') && (steps === 3 || steps === 4)) {
      const multiplier = steps === 3 ? 1.2 : 1.3;
      const bonus = Math.round(state.score * (multiplier - 1));
      state.score += bonus; updateTopbar();
      showFloatingPoints(`TÃƒÂ´ Thu Trang x${multiplier} Ã‚Â· +${bonus}`, true, '#d19a00');
      document.getElementById('diceResult').textContent += ` Ã‚Â· Ã„â€˜iÃ¡Â»Æ’m x${multiplier}`;
    }
    // Ã„ÂÃƒÂ o ThÃ¡Â»â€¹ Thu HÃ¡ÂºÂ±ng: +2
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
      if (counter % 2 === 0) playSound('diceTick');
      counter++;
      if (counter > 8) {
        clearInterval(interval);
        const result = Math.floor(Math.random() * 4) + 1;
        dice.textContent = result;
        dice.classList.remove('rolling');
        document.getElementById('diceResult').textContent = `Ã„ÂÃ†Â°Ã¡Â»Â£c ${result} bÃ†Â°Ã¡Â»â€ºc`;
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

  // Ã„ÂÃ¡ÂºÂ·ng ThÃ¡Â»â€¹ PhÃ†Â°Ã†Â¡ng Linh: +100 Ã„â€˜iÃ¡Â»Æ’m cho mÃ¡Â»â€”i ÃƒÂ´ Ã„â€˜i qua.
  if (state.companions.includes('phuonglinh')) {
    const bonus = Math.max(0, target - fromStep) * 100;
    if (bonus > 0) {
      state.score += bonus;
      showFloatingPoints(`PhÃ†Â°Ã†Â¡ng Linh Ã‚Â· +${bonus} (${target - fromStep} ÃƒÂ´)`, true, '#d19a00');
    }
  }
  updateTopbar();

  // Show floating steps
  showFloatingPoints('<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 8h.01M16 8h.01M12 12h.01M8 16h.01M16 16h.01"/></svg> +' + totalSteps + ' bÃ†Â°Ã¡Â»â€ºc', false, '#00bbfe');

  // Check finish
  if (target >= BOARD_SIZE && !state.reachedFinish) {
    state.reachedFinish = true;
    playSound('finish');
    state.score += state.companions.includes('dung') ? FINISH_BONUS_WITH_DUNG : POINTS_FINISH_BONUS;
    updateTopbar();
    setTimeout(() => {
      showFloatingPoints('<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 21h8m-4-4v4M7 4h10v5a5 5 0 0 0 4 4M7 6H3v2a4 4 0 0 0 4 4"/></svg> +' + (state.companions.includes('dung') ? '5.000' : '500') + ' VÃ¡Â»â‚¬ Ã„ÂÃƒÂCH!', false, '#ffd24a');
      launchConfetti();
      const fb = document.getElementById('feedback');
      fb.className = 'feedback info show';
      fb.innerHTML = fb.textContent + '<br>CHÃƒÅ¡C MÃ¡Â»ÂªNG! BÃ¡ÂºÂ¡n Ã„â€˜ÃƒÂ£ vÃ¡Â»Â Ã„â€˜ÃƒÂ­ch vÃƒÂ  nhÃ¡ÂºÂ­n +' + (state.companions.includes('dung') ? '5.000' : '500') + ' Ã„â€˜iÃ¡Â»Æ’m thÃ†Â°Ã¡Â»Å¸ng!';
      // Disable next button (game will end after a delay)
      document.getElementById('btnNext').textContent = 'XEM KÃ¡ÂºÂ¾T QUÃ¡ÂºÂ¢ Ã¢â€“Â¶';
      state.resolvingTurn = false;
    }, 600);
    return;
  }

  // Check milestones (only if not already triggered for this milestone and we passed it)
  for (const m of MILESTONES) {
    if (fromStep < m && target >= m && !state.passedMilestones.has(m)) {
      state.passedMilestones.add(m);
      // MÃ¡Â»â€”i ngÃ†Â°Ã¡Â»Âi chÃ†Â¡i Classic cÃƒÂ³ tÃ¡Â»â€˜i Ã„â€˜a 2 slot Ã„â€˜Ã¡Â»â€œng hÃƒÂ nh: ÃƒÂ´ 15 vÃƒÂ  ÃƒÂ´ 30.
      if (state.mode !== 'vs' && state.companions.length < 2 && !document.getElementById('charModal').classList.contains('show')) {
        waitingForCompanion = true;
        setTimeout(() => {
          if (!state.finished && state.mode !== 'vs' && state.companions.length < 2 && !document.getElementById('charModal').classList.contains('show')) {
            playSound('milestone');
            openCharModal(m);
          }
        }, 450);
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
  subtitle.textContent = `BÃ¡ÂºÂ¡n vÃ¡Â»Â«a Ã„â€˜Ã¡ÂºÂ¡t ÃƒÂ´ ${milestone} Ã¢â‚¬â€ chÃ¡Â»Ân 1 Ã„â€˜Ã¡Â»â€œng hÃƒÂ nh cÃƒÂ²n lÃ¡ÂºÂ¡i`;
  const grid = document.getElementById('charGrid');
  grid.innerHTML = '';
  COMPANIONS.forEach(c => {
    const picked = state.companions.includes(c.id);
    const card = document.createElement('div');
    card.className = 'char-card' + (picked ? ' picked' : '');
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', picked ? '-1' : '0');
    card.setAttribute('aria-label', picked ? `${c.name}, Ã„â€˜ÃƒÂ£ chÃ¡Â»Ân` : `ChÃ¡Â»Ân ${c.name}`);
      const image = COMPANION_IMAGES[c.id];
      card.innerHTML = `
        <div class="char-card-head"><span class="char-index">YTC / ${String(COMPANIONS.indexOf(c) + 1).padStart(2, '0')}</span><span class="char-tag">Ã„ÂÃ¡Â»â€™NG HÃƒâ‚¬NH</span></div>
        <div class="char-avatar-big${image ? ' has-photo' : ''}">${image ? `<img src="${image}" alt="${c.name}" loading="lazy">` : c.avatar}</div>
        <div class="char-name">${c.name}</div>
        <div class="char-role">${c.role}</div>
        <div class="char-ability"><span class="char-ability-label">NÃ„â€šNG LÃ¡Â»Â°C</span>${c.ability}</div>`;
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
  playSound('modal');
  document.body.classList.add('modal-open');
  requestAnimationFrame(() => {
    const firstAvailable = grid.querySelector('.char-card:not(.picked)');
    if (firstAvailable && window.matchMedia('(min-width: 601px)').matches) firstAvailable.focus();
  });
}

function pickCompanion(id) {
  if (state.finished || state.companions.includes(id)) return;
  const pendingVSFinish = state.mode === 'vs' ? state.vs.pendingFinish : null;
  playSound('select');
  state.companions.push(id);
  const c = COMPANIONS.find(x => x.id === id);
  document.getElementById('charModal').classList.remove('show');
  document.body.classList.remove('modal-open');
  renderCompanions();
  updatePlayerToken();
  showFloatingPoints('<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m8 12 3 3a2 2 0 0 0 3 0l4-4M4 9l4-4 4 2 4-2 4 4-3 3-4-1-3 2-5-4"/><path d="m4 9-2 2 3 4 2-2m13-4 2 2-3 4-2-2"/></svg> ' + c.name, false, '#ffd24a');
  state.resolvingTurn = false;
  if (pendingVSFinish !== null) { state.vs.pendingFinish = null; finishVSRound(pendingVSFinish); }
}

/* ============================================================
   NAVIGATE TO NEXT QUESTION
   ============================================================ */
function goNext() {
  if (state.mode === 'vs') return;
  if (!state.answered || state.resolvingTurn || state.finished) return;
  playSound('click');
  if (!state.isRepeatQuestion && state.haLinhCooldown > 0) state.haLinhCooldown--;
  state.qIndex++;
  if (state.pendingRepeatQuestion) {
    state.questions.splice(state.qIndex, 0, state.pendingRepeatQuestion);
    state.pendingRepeatQuestion = null;
  }
  // Reset next button text
  document.getElementById('btnNext').textContent = 'CÃƒâ€šU TIÃ¡ÂºÂ¾P THEO Ã¢â€“Â¶';
  // If character modal is showing, wait Ã¢â‚¬â€ but flow continues
  if (state.qIndex >= state.questions.length || state.reachedFinish) {
    endGame();
    return;
  }
  loadQuestion();
}


/* ============================================================
   LOCAL RECORDS Ã¢â‚¬â€ highscore & play history
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
  highscoreList.innerHTML = highscore.length ? highscore.map(item => `<li><span>${item.correct}/${item.total} Ã„â€˜ÃƒÂºng</span><span class="record-score">${Number(item.score).toLocaleString('vi-VN')} Ã„â€˜iÃ¡Â»Æ’m</span></li>`).join('') : '<li class="record-empty">ChÃ†Â°a cÃƒÂ³ kÃ¡Â»Â· lÃ¡Â»Â¥c</li>';
  historyList.innerHTML = history.length ? history.map(item => `<div class="history-item"><span><strong>${Number(item.score).toLocaleString('vi-VN')} Ã„â€˜iÃ¡Â»Æ’m</strong><br><b class="history-mode ${(item.mode || 'classic') === 'vs' ? 'vs' : 'classic'}">${(item.mode || 'classic') === 'vs' ? 'VS MODE' : 'CLASSIC'}</b> Ã‚Â· ${item.step}/50 ÃƒÂ´ Ã‚Â· ${item.correct}/${item.total} Ã„â€˜ÃƒÂºng</span><span>${formatRecordDate(item.playedAt)}</span></div>`).join('') : '<div class="record-empty">ChÃ†Â°a cÃƒÂ³ lÃ†Â°Ã¡Â»Â£t chÃ†Â¡i</div>';
}

function renderCompanionIntro() {
  const grid = document.getElementById('companionIntroGrid'); if (!grid) return;
  const vsIntroCompanions = VS_COMPANIONS.map(c => ({ ...c, role: 'Ã„ÂÃ¡Â»â€œng hÃƒÂ nh VS mode', avatar: c.name.split(' ').map(part => part[0]).slice(-2).join('') }));
  const introCompanions = [...COMPANIONS, ...vsIntroCompanions];
  grid.innerHTML = introCompanions.map(c => { const image = COMPANION_IMAGES[c.id]; return `<article class="intro-companion-card"><div class="intro-companion-avatar">${image ? `<img src="${image}" alt="${c.name}" loading="lazy">` : c.avatar}</div><div><div class="intro-companion-name">${c.name}</div><div class="intro-companion-role">${c.role}</div></div><div class="intro-companion-ability">${c.ability}</div></article>`; }).join('');
}

function saveRunRecord() {
  const record = { score: state.score, step: state.step, correct: state.correctCount, total: state.questions.length, mode: state.mode, botScore: state.mode === 'vs' ? state.vs.botScore : null, botCorrect: state.mode === 'vs' ? state.vs.botCorrect : null, stealCorrect: state.mode === 'vs' ? state.vs.stealCorrect : null, stealOpportunities: state.mode === 'vs' ? state.vs.stealOpportunities : null, botStealCorrect: state.mode === 'vs' ? state.vs.botStealCorrect : null, botStealOpportunities: state.mode === 'vs' ? state.vs.botStealOpportunities : null, reachedFinish: state.reachedFinish, companions: state.companions.slice(), botCompanion: state.mode === 'vs' ? state.vs.botCompanion : null, botCompanions: state.mode === 'vs' ? state.vs.botCompanions.slice() : [], playedAt: new Date().toISOString() };
  const history = [record, ...readRecords(HISTORY_KEY)].slice(0, 20);
  const highscore = [record, ...readRecords(HIGHSCORE_KEY)].sort((a,b) => b.score - a.score || b.step - a.step || b.correct - a.correct).slice(0, 10);
  writeRecords(HISTORY_KEY, history); writeRecords(HIGHSCORE_KEY, highscore); renderRecords();
  const best = highscore[0] && highscore[0].playedAt === record.playedAt && highscore[0].score === record.score;
  const result = document.getElementById('recordResult');
  if (result) result.textContent = best ? 'KÃ¡Â»Â¶ LÃ¡Â»Â¤C MÃ¡Â»Å¡I Ã¢â‚¬â€ BÃ¡ÂºÂ¡n Ã„â€˜ang Ã„â€˜Ã¡Â»Â©ng Ã„â€˜Ã¡ÂºÂ§u bÃ¡ÂºÂ£ng Ã„â€˜iÃ¡Â»Æ’m trÃƒÂªn thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ nÃƒÂ y.' : 'KÃ¡ÂºÂ¿t quÃ¡ÂºÂ£ Ã„â€˜ÃƒÂ£ Ã„â€˜Ã†Â°Ã¡Â»Â£c lÃ†Â°u vÃƒÂ o lÃ¡Â»â€¹ch sÃ¡Â»Â­ chÃ†Â¡i trÃƒÂªn thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ nÃƒÂ y.';
}
function clearRecords() {
  if (!confirm('XÃƒÂ³a toÃƒÂ n bÃ¡Â»â„¢ highscore vÃƒÂ  lÃ¡Â»â€¹ch sÃ¡Â»Â­ chÃ†Â¡i trÃƒÂªn thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ nÃƒÂ y?')) return;
  localStorage.removeItem(HIGHSCORE_KEY); localStorage.removeItem(HISTORY_KEY); renderRecords();
  const message = document.getElementById('recordsMessage'); if (message) message.textContent = 'Ã„ÂÃƒÂ£ xÃƒÂ³a highscore vÃƒÂ  lÃ¡Â»â€¹ch sÃ¡Â»Â­ chÃ†Â¡i.';
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
  // TrÃ¡ÂºÂ§n MÃ¡ÂºÂ¡nh DÃ…Â©ng: nÃ¡ÂºÂ¿u hÃ¡ÂºÂ¿t cÃƒÂ¢u hÃ¡Â»Âi trÃ†Â°Ã¡Â»â€ºc khi vÃ¡Â»Â Ã„â€˜ÃƒÂ­ch, mÃ¡Â»â€”i bÃ†Â°Ã¡Â»â€ºc Ã„â€˜Ã†Â°Ã¡Â»Â£c quy Ã„â€˜Ã¡Â»â€¢i thÃƒÂ nh 100 Ã„â€˜iÃ¡Â»Æ’m.
  if (!state.reachedFinish && state.companions.includes('dung')) {
    const distanceBonus = state.step * DISTANCE_BONUS_WITH_DUNG;
    state.score += distanceBonus;
    if (distanceBonus > 0) showFloatingPoints(`MÃ¡ÂºÂ¡nh DÃ…Â©ng Ã‚Â· +${distanceBonus} Ã„â€˜iÃ¡Â»Æ’m theo ${state.step} bÃ†Â°Ã¡Â»â€ºc`, true, '#d19a00');
  }
  document.getElementById('finalScore').textContent = state.score.toLocaleString('vi-VN');
  document.getElementById('finalStep').textContent = state.step + '/50';
  document.getElementById('finalCorrect').textContent = state.correctCount + '/' + state.questions.length;
  document.getElementById('finalCompanions').textContent = state.companions.length + ' ngÃ†Â°Ã¡Â»Âi';
  saveRunRecord();

  let rank = 'CÃ¡Â»â€˜ gÃ¡ÂºÂ¯ng lÃ¡ÂºÂ§n sau!';
  if (state.score >= 10000) rank = '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 21h8m-4-4v4M7 4h10v5a5 5 0 0 1-10 0zm10 2h4v2a4 4 0 0 1-4 4M7 6H3v2a4 4 0 0 0 4 4"/></svg> HUYÃ¡Â»â‚¬N THOÃ¡ÂºÂ I YTC!';
  else if (state.score >= 5000) rank = '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="14" r="7"/><path d="M9 3h6l2 4H7zM12 10l1.2 2.5 2.8.4-2 1.9.5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-1.9 2.8-.4z"/></svg> BÃ¡ÂºÂ¬C THÃ¡ÂºÂ¦Y QUIZ!';
  else if (state.score >= 2000) rank = '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="14" r="7"/><path d="M9 3h6l2 4H7zM9.5 12a2.5 2.5 0 1 1 4 2L10 18h4"/></svg> XUÃ¡ÂºÂ¤T SÃ¡ÂºÂ®C!';
  else if (state.score >= 1000) rank = '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="14" r="7"/><path d="M9 3h6l2 4H7zM9.5 12a2.5 2.5 0 1 1 2.5 2m0 0a2.5 2.5 0 1 1-2.5 2"/></svg> KHÃƒÂ TÃ¡Â»ÂT!';
  if (state.reachedFinish) rank = '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 21V4m0 1h14l-3 4 3 4H5"/><path d="M9 5v4m4-4v4m-4 0v4m4-4v4"/></svg> VÃ¡Â»â‚¬ Ã„ÂÃƒÂCH! ' + rank;
  document.getElementById('gameOverRank').innerHTML = rank;
  document.getElementById('gameOverTitle').innerHTML = state.reachedFinish ? '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 21h8m-4-4v4M7 4h10v5a5 5 0 0 1-10 0zm10 2h4v2a4 4 0 0 1-4 4M7 6H3v2a4 4 0 0 0 4 4"/></svg> VÃ¡Â»â‚¬ Ã„ÂÃƒÂCH!' : '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 21V4m0 1h14l-3 4 3 4H5"/><path d="M9 5v4m4-4v4m-4 0v4m4-4v4"/></svg> KÃ¡ÂºÂ¾T THÃƒÅ¡C!';
  document.getElementById('gameOverModal').classList.add('show');
  playSound('gameover');
  if (state.reachedFinish) launchConfetti();
}

/* ============================================================
   UI HELPERS
   ============================================================ */
function updateTopbar() {
  document.getElementById('scoreVal').textContent = state.score.toLocaleString('vi-VN');
  document.getElementById('stepVal').textContent = state.step + '/50';
  document.getElementById('stepNowBadge').textContent = 'Ãƒâ€ ' + state.step;
  if (state.mode === 'vs') updateVSHUD();
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


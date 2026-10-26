
/* ============================================================
   QUESTION POOL â€” Easy to edit/add more questions
   Each question: { type, q, ... }
   type: 'choice' | 'fill' | 'word'
   ============================================================ */
const QUESTIONS = [
  // ----- Multiple Choice -----
  { type: 'choice', q: 'YTC (Young Training Club) cÃ³ mÃ u chá»§ Ä‘áº¡o lÃ  mÃ u gÃ¬?',
    options: ['xanh dÆ°Æ¡ng','Ä‘á»','vÃ ng','xanh lÃ¡'], answer: 0 },
  { type: 'choice', q: 'YTC trá»±c thuá»™c trÆ°á»ng Ä‘áº¡i há»c nÃ o?',
    options: ['HAUI','UNETI','BÃ¡ch Khoa','NEU'], answer: 1 },
  { type: 'choice', q: 'Slogan cá»§a YTC lÃ  gÃ¬?',
    options: ['Tuá»•i tráº» nÄƒng Ä‘á»™ng','Ã tÆ°á»Ÿng lá»›n - TÃ i nÄƒng tráº» - Chung niá»m tin','Tiáº¿p lá»­a Ä‘am mÃª','Káº¿t ná»‘i trÃ­ tuá»‡'], answer: 1 },
  { type: 'choice', q: 'QuÃ¡n quÃ¢n cuá»™c thi Rising Voice 2025 lÃ  ai?',
    options: ['Nguyá»…n Thá»‹ Thanh Hoa','Nguyá»…n Ngá»c NhÆ° Quá»³nh','TÃ´ Thu Trang','NgÃ´ Háº¡nh NguyÃªn'], answer: 2 },
  { type: 'choice', q: 'Chá»§ nhiá»‡m CLB YTC (nÄƒm há»c 2025-2026) lÃ  ai?',
    options: ['Nguyá»…n Há»“ng Thanh','ÄÃ o Thá»‹ Thu Háº±ng','TÃ´ Thu Trang','Nguyá»…n Thanh Lan'], answer: 0 },
  { type: 'choice', q: 'Email liÃªn há»‡ chÃ­nh thá»©c cá»§a YTC?',
    options: ['ytc@gmail.com','genz.ytc@gmail.com','contact.ytc@uneti.vn','ytc.uneti@gmail.com'], answer: 1 },
  { type: 'choice', q: 'Äáº¿n nÄƒm 2026, YTC Ä‘Ã£ cÃ³ bao nhiÃªu tháº¿ há»‡ (Gen)?',
    options: ['12','14','15','20'], answer: 2 },
  { type: 'choice', q: 'CÆ¡ sá»Ÿ LÄ©nh Nam, HÃ  Ná»™i cá»§a UNETI náº±m á»Ÿ Ä‘Æ°á»ng nÃ o?',
    options: ['218 LÄ©nh Nam','353 Tráº§n HÆ°ng Äáº¡o','1 Äáº¡i Cá»“ Viá»‡t','144 XuÃ¢n Thuá»·'], answer: 0 },
  { type: 'choice', q: 'Giáº£i nháº¥t cuá»™c thi ONE-TAKE Gen 14.2 thuá»™c nhÃ³m nÃ o?',
    options: ['OneTeam','ShineOn','Donald Trump','Rising Stars'], answer: 2 },
  { type: 'choice', q: 'YTC trá»±c thuá»™c tá»• chá»©c nÃ o cá»§a UNETI?',
    options: ['ÄoÃ n TNCS Há»“ ChÃ­ Minh','Há»™i Sinh viÃªn','Ban GiÃ¡m hiá»‡u','PhÃ²ng CÃ´ng tÃ¡c Sinh viÃªn'], answer: 0 },
  { type: 'choice', q: 'Ai lÃ  TrÆ°á»Ÿng ban MC - Lá»… tÃ¢n (nÄƒm 2025-2026)?',
    options: ['Nguyá»…n Minh Ãnh','TÃ´ Thu Trang','Nguyá»…n Thuá»³ Trang','LÃª Thá»‹ PhÆ°Æ¡ng Anh'], answer: 1 },
  { type: 'choice', q: 'Cuá»™c thi nÃ o cá»§a YTC táº­p trung vÃ o ká»¹ nÄƒng dáº«n chÆ°Æ¡ng trÃ¬nh?',
    options: ['ONE-TAKE','Rising Voice','Podcast & Phim','Team Building'], answer: 1 },
  { type: 'choice', q: 'Sinh viÃªn UNETI tiÃªu biá»ƒu "Nguyá»…n Há»“ng Thanh" há»c lá»›p nÃ o?',
    options: ['DHLQ18A3HN','DHMK18A1HN','DHKT17A6HN','DHLQ17A1HN'], answer: 1 },
    { type: 'choice', q: 'Sinh viÃªn UNETI tiÃªu biá»ƒu "Nguyá»…n Thanh Lan" há»c lá»›p nÃ o?',
    options: ['DHLQ18A3HN','DHMK18A1HN','DHKT17A6HN','DHLQ17A1HN'], answer: 3 },
  { type: 'choice', q: 'CÆ¡ sá»Ÿ Nam Äá»‹nh, Ninh BÃ¬nh cá»§a UNETI náº±m á»Ÿ Ä‘Ã¢u?',
    options: ['218 LÄ©nh Nam','353 Tráº§n HÆ°ng Äáº¡o','451 TÃ´n Äá»©c Tháº¯ng','12 Nguyá»…n VÄƒn Cá»«'], answer: 1 },
  { type: 'choice', q: 'YTC cÃ³ khoáº£ng bao nhiÃªu thÃ nh viÃªn (Ä‘áº¿n 2026)?',
    options: ['50+','100+','200+','500+'], answer: 2 },
  { type: 'choice', q: 'Cuá»™c thi ONE-TAKE thuá»™c máº£ng nÃ o cá»§a YTC?',
    options: ['MC - Giá»ng nÃ³i','SÃ¡ng táº¡o & Media','TÃ¬nh nguyá»‡n','Team Building'], answer: 1 },
  { type: 'choice', q: 'Pháº¡m Thá»‹ Tháº£o Anh giá»¯ vai trÃ² gÃ¬ trong YTC?',
    options: ['TrÆ°á»Ÿng ban MC','PhÃ³ ban NhÃ¢n sá»± - Háº­u cáº§n','Chá»§ nhiá»‡m','Truyá»n thÃ´ng'], answer: 1 },
  { type: 'choice', q: 'ÄÃ o Thá»‹ Thu Háº±ng giá»¯ vai trÃ² gÃ¬ trong YTC?',
    options: ['PhÃ³ ban NhÃ¢n sá»± - Háº­u cáº§n','TrÆ°á»Ÿng ban MC','Ká»¹ thuáº­t','Truyá»n thÃ´ng'], answer: 0 },
  { type: 'choice', q: 'Nguyá»…n Minh Ãnh Ä‘áº¡t giáº£i gÃ¬ trong Rising Voice 2025?',
    options: ['QuÃ¡n quÃ¢n','Ã quÃ¢n 1','Ã quÃ¢n 2','YÃªu thÃ­ch nháº¥t'], answer: 2 },
    { type: 'choice', q: 'TiÃªu Ä‘á» cá»§a chuá»—i sá»± kiá»‡n "Sinh nháº­t láº§n thá»© 14 cá»§a YTC" lÃ  gÃ¬?',
    options: ['Fourteen','Chuyáº¿n tÃ u thá»i gian','Nhá»¯ng dÃ²ng kÃ½ á»©c','Rising Voice'], answer: 1 },

  // ----- Fill in the blank -----
  { type: 'fill', q: 'YTC lÃ  viáº¿t táº¯t cá»§a cá»¥m tá»« nÃ o? (tiáº¿ng Anh)', answer: 'Young Training Club',
    accept: ['young training club','youngtrainingclub'] },
  { type: 'fill', q: 'HoÃ n thÃ nh slogan: "Ã tÆ°á»Ÿng lá»›n - TÃ i nÄƒng tráº» - ___ niá»m tin"', answer: 'Chung',
    accept: ['chung'] },
  { type: 'fill', q: 'UNETI lÃ  trÆ°á»ng Äáº¡i há»c Kinh táº¿ - ___ CÃ´ng Nghiá»‡p', answer: 'Ká»¹ thuáº­t',
    accept: ['ká»¹ thuáº­t','ky thuat'] },
  { type: 'fill', q: 'Email YTC cÃ³ pháº§n tÃªn (trÆ°á»›c @gmail.com) lÃ  gÃ¬?', answer: 'genz.ytc',
    accept: ['genz.ytc','genzytc'] },
  { type: 'fill', q: 'TÃ´ Thu Trang lÃ  quÃ¡n quÃ¢n cuá»™c thi ___ 2025', answer: 'Rising Voice',
    accept: ['rising voice','risingvoice'] },
  { type: 'fill', q: 'Nguyá»…n Minh Ãnh lÃ  Ã¡ quÃ¢n 2 cuá»™c thi ___ 2025', answer: 'Rising Voice',
    accept: ['rising voice','risingvoice'] },
  { type: 'fill', q: 'YTC Ä‘Æ°á»£c thÃ nh láº­p vÃ o thÃ¡ng máº¥y nÄƒm 2012? (viáº¿t sá»‘)', answer: '4',
    accept: ['4','thÃ¡ng 4','04'] },
  { type: 'fill', q: 'á»ž Ä‘Ã¢y cÃ³ bao nhiÃªu bÆ°á»›c trÃªn Ä‘Æ°á»ng Ä‘ua nÃ y? (sá»‘)', answer: '50',
    accept: ['50','nÄƒm mÆ°Æ¡i'] },
  { type: 'fill', q: 'Slogan cá»§a YTC gá»“m bao nhiÃªu chá»¯ "c" (TÃ­nh cáº£ chá»¯ viáº¿t hoa)?', answer: '3',
    accept: ['ba','3'] },
  { type: 'fill', q: 'Ã” sá»‘ ___ vÃ  ___ trÃªn Ä‘Æ°á»ng Ä‘ua cho phÃ©p chá»n Ä‘á»“ng hÃ nh (viáº¿t theo thá»© tá»±, cÃ¡ch nhau bá»Ÿi dáº¥u pháº©y)', answer: '15, 30',
    accept: ['15, 30','15,30','15 30','15-30'] },
  { type: 'fill', q: 'Nguyá»…n Há»“ng Thanh lÃ  ___ CLB YTC (chá»©c vá»¥)', answer: 'Chá»§ nhiá»‡m',
    accept: ['chá»§ nhiá»‡m','chu nhiem'] },

  // ----- Word select / arrange -----
  { type: 'word', q: 'Sáº¯p xáº¿p cÃ¡c tá»« Ä‘á»ƒ táº¡o thÃ nh slogan cá»§a YTC:',
    pool: ['Ã tÆ°á»Ÿng lá»›n','TÃ i nÄƒng tráº»','Chung niá»m tin'], answer: ['Ã tÆ°á»Ÿng lá»›n','TÃ i nÄƒng tráº»','Chung niá»m tin'] },
  { type: 'word', q: 'Sáº¯p xáº¿p 3 tá»« sau theo Ä‘Ãºng thá»© tá»± Ä‘á»ƒ ghÃ©p thÃ nh tÃªn CLB (tiáº¿ng Anh):',
    pool: ['Club','Young','Training'], answer: ['Young','Training','Club'] },
  { type: 'word', q: 'Sáº¯p xáº¿p cÃ¡c ban chuyÃªn mÃ´n theo thá»© tá»± báº£ng chá»¯ cÃ¡i:',
    pool: ['MC - Lá»… tÃ¢n','NhÃ¢n sá»± - Háº­u cáº§n','Ká»¹ thuáº­t - Váº­n hÃ nh','Truyá»n thÃ´ng'], answer: ['Ká»¹ thuáº­t - Váº­n hÃ nh','MC - Lá»… tÃ¢n','NhÃ¢n sá»± - Háº­u cáº§n','Truyá»n thÃ´ng'] },
  { type: 'word', q: 'Sáº¯p xáº¿p cÃ¡c giáº£i ONE-TAKE Gen 14.2 theo thá»© tá»±: Nháº¥t â†’ NhÃ¬ â†’ Ba:',
    pool: ['ShineOn','OneTeam','Donald Trump'], answer: ['Donald Trump','OneTeam','ShineOn'] },
  { type: 'word', q: 'Sáº¯p xáº¿p thá»© tá»± cÃ¡c cuá»™c thi Ä‘Ã£ tá»• chá»©c tá»« cÅ© Ä‘áº¿n má»›i:',
    pool: ['One Take','Rewrite Destiny','Rising Voice'], answer: ['Rewrite Destiny','Rising Voice','One Take'] },
  { type: 'word', q: 'Sáº¯p xáº¿p cÃ¡c tháº¿ há»‡ Gen theo thá»© tá»± tá»« cÅ© Ä‘áº¿n má»›i:',
    pool: ['Gen 14','Gen 15.1','Gen 13'], answer: ['Gen 13','Gen 14','Gen 15.1'] },
  { type: 'word', q: 'Sáº¯p xáº¿p: ______ lÃ  _____ ______',
    pool: ['PhÃ³ ban','LÃª Thá»‹ PhÆ°Æ¡ng Anh','MC - Lá»… tÃ¢n'], answer: ['LÃª Thá»‹ PhÆ°Æ¡ng Anh','PhÃ³ ban','MC - Lá»… tÃ¢n'] },

  // ----- hehehe-----
  { type: 'choice', q: 'YTC táº¡o cÆ¡ há»™i cho sinh viÃªn rÃ¨n luyá»‡n nhá»¯ng ká»¹ nÄƒng nÃ o?',
    options: ['Ká»¹ nÄƒng má»m, tÆ° duy sÃ¡ng táº¡o vÃ  lÃ m viá»‡c nhÃ³m','Chá»‰ ká»¹ nÄƒng láº­p trÃ¬nh','Chá»‰ ká»¹ nÄƒng ngoáº¡i ngá»¯','Ká»¹ nÄƒng káº¿ toÃ¡n chuyÃªn sÃ¢u'], answer: 0 },
  { type: 'choice', q: 'ONE TAKE lÃ  cuá»™c thi thuá»™c lÄ©nh vá»±c nÃ o?',
    options: ['Podcast - Phim vÃ  sÃ¡ng táº¡o video','Thá»ƒ thao thÃ nh tÃ­ch cao','Khá»Ÿi nghiá»‡p kinh doanh','HÃ¹ng biá»‡n tiáº¿ng Anh'], answer: 0 },
  { type: 'choice', q: 'Rising Voice hÆ°á»›ng tá»›i viá»‡c tÃ¬m kiáº¿m vÃ  bá»“i dÆ°á»¡ng tÃ i nÄƒng nÃ o?',
    options: ['Dáº«n chÆ°Æ¡ng trÃ¬nh vÃ  giá»ng nÃ³i','Thiáº¿t káº¿ thá»i trang','Nhiáº¿p áº£nh phong cáº£nh','NghiÃªn cá»©u khoa há»c'], answer: 0 },
  { type: 'choice', q: 'Cuá»™c thi ONE-TAKE Gen 14.2: nhÃ³m nÃ o giÃ nh giáº£i nhÃ¬?',
    options: ['OneTeam','Donald Trump','ShineOn','Rising Stars'], answer: 0 },
  { type: 'fill', q: 'YTC trá»±c thuá»™c ÄoÃ n TNCS Há»“ ChÃ­ Minh cá»§a TrÆ°á»ng Äáº¡i há»c Kinh táº¿ - Ká»¹ thuáº­t ___', answer: 'CÃ´ng Nghiá»‡p', accept: ['cÃ´ng nghiá»‡p','cong nghiep'] },
  { type: 'word', q: 'Sáº¯p xáº¿p thá»© háº¡ng ONE-TAKE Gen 14.2 tá»« giáº£i nháº¥t Ä‘áº¿n giáº£i ba:',
    pool: ['ShineOn','Donald Trump','OneTeam'], answer: ['Donald Trump','OneTeam','ShineOn'] },

  // ----- CÃ¢u há»i má»Ÿ rá»™ng tá»« thÃ´ng tin YTC cÃ´ng khai -----
  { type: 'choice', q: 'YTC Ä‘Æ°á»£c thÃ nh láº­p vÃ o ngÃ y nÃ o?', options: ['23/04/2012','01/06/2013','15/09/2014','20/10/2015'], answer: 0 },
  { type: 'choice', q: 'TÃ i khoáº£n TikTok Ä‘Æ°á»£c giá»›i thiá»‡u trÃªn kÃªnh chÃ­nh thá»©c cá»§a YTC lÃ  tÃ i khoáº£n nÃ o?', options: ['@ytc.uneti','@youngtrainingclub','@ytc.hanoi','@uneti.ytc'], answer: 0 },
  { type: 'choice', q: 'YTC cÃ³ khoáº£ng bao nhiÃªu sá»± kiá»‡n má»—i nÄƒm?', options: ['5+','15+','30+','100+'], answer: 2 },
  { type: 'choice', q: 'Äá»‹a chá»‰ Ä‘Æ°á»£c giá»›i thiá»‡u cá»§a CLB ÄÃ o Táº¡o Ká»¹ NÄƒng Tráº» lÃ  gÃ¬?', options: ['218 LÄ©nh Nam, HoÃ ng Mai, HÃ  Ná»™i','144 XuÃ¢n Thuá»·, Cáº§u Giáº¥y, HÃ  Ná»™i','353 Tráº§n HÆ°ng Äáº¡o, Nam Äá»‹nh','1 Äáº¡i Cá»“ Viá»‡t, Hai BÃ  TrÆ°ng'], answer: 0 },
  { type: 'fill', q: 'Slogan YTC báº¯t Ä‘áº§u báº±ng hai chá»¯ nÃ o?', answer: 'Ã tÆ°á»Ÿng', accept: ['Ã½ tÆ°á»Ÿng','y tuong'] },
  { type: 'fill', q: 'YTC Ä‘Æ°á»£c thÃ nh láº­p vÃ o nÄƒm nÃ o?', answer: '2012', accept: ['2012'] },
  { type: 'choice', q: 'YTC giá»›i thiá»‡u mÃ¬nh lÃ  nÆ¡i rÃ¨n luyá»‡n ká»¹ nÄƒng má»m, tÆ° duy sÃ¡ng táº¡o vÃ  kháº£ nÄƒng nÃ o?', options: ['LÃ m viá»‡c nhÃ³m','ChÆ¡i thá»ƒ thao','Náº¥u Äƒn','Láº­p trÃ¬nh game'], answer: 0 },
  { type: 'choice', q: 'Ná»™i dung nÃ o lÃ  má»™t hoáº¡t Ä‘á»™ng chÃ­nh cá»§a YTC?', options: ['Cuá»™c thi MC - Giá»ng nÃ³i','Äua xe Ä‘á»‹a hÃ¬nh','Thi Ä‘áº¥u cá» vua quá»‘c táº¿','Triá»ƒn lÃ£m robot'], answer: 0 },
  { type: 'choice', q: 'Má»—i nÄƒm YTC tá»• chá»©c khoáº£ng bao nhiÃªu mÃ¹a Podcast & Phim?', options: ['1 mÃ¹a','2 mÃ¹a','5 mÃ¹a','8 mÃ¹a'], answer: 1 },
  { type: 'choice', q: 'Cuá»™c thi Rewrite Destiny thuá»™c Gen nÃ o cá»§a YTC?', options: ['Gen 12.1','Gen 13.2','Gen 14.1','Gen 15.1'], answer: 2 },
  { type: 'choice', q: 'Äá»™i giÃ nh giáº£i nháº¥t cuá»™c thi Rewrite Destiny lÃ  Ä‘á»™i nÃ o?', options: ['Good Vibes Tribe','Together We Rise','THE INNOVATORS','OneTeam'], answer: 0 },
  { type: 'choice', q: 'Äá»™i giÃ nh giáº£i nháº¥t cuá»™c thi Voice Your Mind lÃ  Ä‘á»™i nÃ o?', options: ['Crew 1718','Biá»‡t Äá»™i Xanh','Good Vibes Tribe','Together We Rise'], answer: 3 },
  { type: 'choice', q: 'TÃ´ Thu Trang Ä‘áº¡t thÃ nh tÃ­ch nÃ o táº¡i UNETI GOT TALENT 2026?', options: ['Top 20 Chung Káº¿t','Giáº£i nháº¥t','Giáº£i nhÃ¬','Giáº£i yÃªu thÃ­ch nháº¥t'], answer: 0 },
  { type: 'choice', q: 'Äá»™i thi cá»§a Nguyá»…n Thá»‹ Há»“ng QuyÃªn táº¡i MARKET MAKER 2026 cÃ³ tÃªn lÃ  gÃ¬?', options: ['WINX','YoungBoost','FinFin Mind','THE LIGHT'], answer: 0 },
  { type: 'fill', q: 'Chuyáº¿n dÃ£ ngoáº¡i YTC 2026 diá»…n ra tá»« ngÃ y ___ Ä‘áº¿n 01/07/2026.', answer: '30/06', accept: ['30/06','30-06','30 thÃ¡ng 6'] },
  { type: 'fill', q: 'â€œChuyáº¿n tÃ u thá»i gianâ€ lÃ  Ä‘Ãªm sinh nháº­t láº§n thá»© máº¥y cá»§a YTC?', answer: '14', accept: ['14','mÆ°á»i bá»‘n'] },
  { type: 'choice', q: 'YTC Ä‘á»“ng hÃ nh cÃ¹ng chÆ°Æ¡ng trÃ¬nh nÃ o dÃ nh cho thÃ­ sinh trÆ°á»›c ká»³ thi nÄƒm 2026?', options: ['Tiáº¿p Sá»©c MÃ¹a Thi','UNETI CUP','Rising Voice','Market Maker'], answer: 0 },

  // ----- CÃ¢u há»i má»Ÿ rá»™ng tá»« Wiki vÃ  Facebook YTC -----
  { type: 'choice', q: 'Ai Ä‘Æ°á»£c bÃ¬nh chá»n lÃ  thÃ­ sinh Ä‘Æ°á»£c yÃªu thÃ­ch nháº¥t táº¡i Rising Voice 2025?', options: ['TÃ´ Thu Trang','Nguyá»…n Minh Ãnh','NgÃ´ Háº¡nh NguyÃªn','Nguyá»…n Thá»‹ Thanh Hoa'], answer: 2 },
  { type: 'choice', q: 'YTC tá»• chá»©c khoáº£ng bao nhiÃªu sá»± kiá»‡n má»—i nÄƒm?', options: ['10+','20+','30+','50+'], answer: 2 },
  { type: 'choice', q: 'Hoáº¡t Ä‘á»™ng nÃ o thuá»™c nhÃ³m â€œGáº¯n káº¿t & Tráº£i nghiá»‡mâ€ cá»§a YTC?', options: ['DÃ£ ngoáº¡i vÃ  team building','Thi Ä‘áº¥u bÃ³ng Ä‘Ã¡ chuyÃªn nghiá»‡p','Triá»ƒn lÃ£m cÃ´ng nghá»‡','CÃ¢u láº¡c bá»™ ngoáº¡i ngá»¯'], answer: 0 },
  { type: 'choice', q: 'Trang Facebook Young Training Club giá»›i thiá»‡u YTC thuá»™c trÆ°á»ng Ä‘áº¡i há»c nÃ o?', options: ['Äáº¡i há»c Kinh táº¿ Quá»‘c dÃ¢n','Äáº¡i há»c Kinh táº¿ - Ká»¹ thuáº­t CÃ´ng nghiá»‡p','Äáº¡i há»c BÃ¡ch khoa HÃ  Ná»™i','Äáº¡i há»c ThÆ°Æ¡ng máº¡i'], answer: 1 },
  { type: 'choice', q: 'BÃ i Ä‘Äƒng gáº§n Ä‘Ã¢y trÃªn Facebook YTC nháº¯c Ä‘áº¿n lá»… phÃ¡t Ä‘á»™ng cuá»™c thi vá» chá»§ Ä‘á» nÃ o?', options: ['Sá»­ dá»¥ng nÄƒng lÆ°á»£ng tiáº¿t kiá»‡m vÃ  hiá»‡u quáº£','Khá»Ÿi nghiá»‡p sinh viÃªn','Nhiáº¿p áº£nh tráº»','VÄƒn nghá»‡ há»c Ä‘Æ°á»ng'], answer: 0 },
  { type: 'fill', q: 'YTC Ä‘Æ°á»£c thÃ nh láº­p ngÃ y 23/04 nÄƒm ___', answer: '2012', accept: ['2012'] },
  { type: 'fill', q: 'TÃªn tiáº¿ng Anh cá»§a cuá»™c thi MC - Giá»ng nÃ³i lÃ  ___', answer: 'Rising Voice', accept: ['rising voice','risingvoice'] },
  { type: 'word', q: 'Sáº¯p xáº¿p cÃ¡c máº£ng hoáº¡t Ä‘á»™ng theo thá»© tá»± xuáº¥t hiá»‡n trÃªn Wiki YTC:', pool: ['SÃ¡ng táº¡o & Media','Ká»¹ nÄƒng & SÃ¢n kháº¥u','Nhiá»‡t huyáº¿t & Cá»‘ng hiáº¿n','Gáº¯n káº¿t & Tráº£i nghiá»‡m'], answer: ['SÃ¡ng táº¡o & Media','Ká»¹ nÄƒng & SÃ¢n kháº¥u','Nhiá»‡t huyáº¿t & Cá»‘ng hiáº¿n','Gáº¯n káº¿t & Tráº£i nghiá»‡m'] },
];

/* ============================================================
   COMPANIONS
   ============================================================ */
const COMPANION_IMAGES = {
  minh: 'Image/BCN Gen14/BuiQuangMinh.jpg', hang: 'Image/BCN Gen14/DaoThiThuHang.jpg', thoanh: 'Image/BCN Gen14/PhamThiThaoAnh.jpg', trang: 'Image/BCN Gen14/ToThuTrang.jpg', phuonglinh: 'Image/BCN Gen14/DangThiPhuongLinh.jpg', dung: 'Image/BCN Gen14/TranManhDung.jpg', anh: 'Image/BCN Gen14/NguyenMinhAnh.jpg', phuonganh: 'Image/BCN Gen14/LeThiPhuongAnh.jpg', nhatminh: 'Image/BCN Gen14/VuXuanNhatMinh.jpg', nguyenphuonganh: 'Image/BCN Gen14/NguyenPhuongAnh.jpg', halinh: 'Image/BCN Gen14/HoangThiHaLinh.jpg'
};

const COMPANIONS = [
  { id: 'minh',   name: 'BÃ¹i Quang Minh',     role: 'Äá»“ng hÃ nh thá»i gian',   avatar: 'M',
    ability: '+10 giÃ¢y cho má»—i cÃ¢u há»i (tÄƒng tá»« 15s â†’ 25s)' },
  { id: 'hang',   name: 'ÄÃ o Thá»‹ Thu Háº±ng',   role: 'Äá»“ng hÃ nh bÆ°á»›c tiáº¿n',   avatar: 'H',
    ability: '+2 bÆ°á»›c tiáº¿n thÃªm sau má»—i cÃ¢u tráº£ lá»i Ä‘Ãºng' },
  { id: 'thoanh', name: 'Pháº¡m Thá»‹ Tháº£o Anh',  role: 'Äá»“ng hÃ nh tá»‘c Ä‘á»™',      avatar: 'A',
    ability: 'Tráº£ lá»i Ä‘Ãºng trong 5s Ä‘áº§u: thÆ°á»Ÿng x2 Ä‘iá»ƒm cÃ¢u Ä‘Ã³' },
  { id: 'trang', name: 'TÃ´ Thu Trang', role: 'Äá»“ng hÃ nh xÃºc xáº¯c', avatar: 'T',
    ability: 'Tung ra 3: nhÃ¢n x1,2 Ä‘iá»ƒm hiá»‡n táº¡i; ra 4: nhÃ¢n x1,5 Ä‘iá»ƒm hiá»‡n táº¡i' },
  { id: 'phuonglinh', name: 'Äáº·ng Thá»‹ PhÆ°Æ¡ng Linh', role: 'Äá»“ng hÃ nh bÆ°á»›c cháºµn', avatar: 'L',
    ability: 'Má»—i Ã´ sá»‘ cháºµn Ä‘i qua: +100 Ä‘iá»ƒm' },
  { id: 'dung', name: 'Tráº§n Máº¡nh DÅ©ng', role: 'Äá»“ng hÃ nh vá» Ä‘Ã­ch', avatar: 'D',
    ability: 'Vá» Ä‘Ã­ch: thÃªm +500 Ä‘iá»ƒm; náº¿u háº¿t cÃ¢u há»i trÆ°á»›c Ä‘Ã­ch: +100 Ä‘iá»ƒm má»—i bÆ°á»›c Ä‘Ã£ Ä‘i' },
  { id: 'anh', name: 'Nguyá»…n Minh Ãnh', role: 'Äá»“ng hÃ nh streak', avatar: 'Ã',
    ability: 'Giá»¯ chuá»—i tráº£ lá»i Ä‘Ãºng Ä‘á»ƒ cá»™ng Ä‘iá»ƒm; tráº£ lá»i sai sáº½ máº¥t hiá»‡u lá»±c chuá»—i' },
  { id: 'phuonganh', name: 'LÃª Thá»‹ PhÆ°Æ¡ng Anh', role: 'Äá»“ng hÃ nh cÆ¡ há»™i', avatar: 'P',
    ability: 'Má»—i cÃ¢u Ä‘Æ°á»£c tráº£ lá»i sai thÃªm 1 láº§n mÃ  khÃ´ng máº¥t streak' },
  { id: 'nhatminh', name: 'VÅ© XuÃ¢n Nháº­t Minh', role: 'Äá»“ng hÃ nh may máº¯n', avatar: 'N', ability: 'XÃºc xáº¯c ra 1: cá»™ng thÃªm 300 Ä‘iá»ƒm' },
  { id: 'nguyenphuonganh', name: 'Nguyá»…n PhÆ°Æ¡ng Anh', role: 'Äá»“ng hÃ nh bá»©t phÃ¡', avatar: 'PA', ability: 'Sau má»—i láº§n tráº£ lá»i sai, cÃ¢u Ä‘Ãºng káº¿ tiáº¿p Ä‘Æ°á»£c x2 bÆ°á»›c vÃ  x2 Ä‘iá»ƒm cÃ¢u há»i' },
  { id: 'halinh', name: 'HoÃ ng Thá»‹ HÃ  Linh', role: 'Äá»“ng hÃ nh láº·p láº¡i', avatar: 'HL', ability: 'Tráº£ lá»i Ä‘Ãºng: cÃ¢u vá»«a lÃ m sáº½ xuáº¥t hiá»‡n láº¡i; kÃ­ch hoáº¡t tá»‘i Ä‘a 1 láº§n má»—i 3 vÃ²ng cÃ¢u há»i' },
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
const EARLY_WINDOW = 5;               // seconds for Tháº£o Anh's bonus
const DICE_ONE_BONUS = 300;           // Nháº­t Minh: bonus when dice shows 1

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

// Chá»n 20 cÃ¢u theo tá»· lá»‡ 10 tráº¯c nghiá»‡m / 6 Ä‘iá»n khuyáº¿t / 4 sáº¯p xáº¿p.
// Náº¿u sau nÃ y má»™t dáº¡ng chÆ°a Ä‘á»§ cÃ¢u, tá»± bÃ¹ tá»« cÃ¡c dáº¡ng cÃ²n láº¡i.
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
   SOUND EFFECTS â€” Web Audio, no external files required
   ============================================================ */
let ytcAudioContext = null;
let ytcSoundEnabled = localStorage.getItem('ytcSoundEnabled') !== '0';
function getAudioContext() { if (!ytcAudioContext) { const AudioCtx = window.AudioContext || window.webkitAudioContext; if (AudioCtx) ytcAudioContext = new AudioCtx(); } if (ytcAudioContext && ytcAudioContext.state === 'suspended') ytcAudioContext.resume(); return ytcAudioContext; }
function playSound(type) {
  if (!ytcSoundEnabled) return;
  const ctx = getAudioContext(); if (!ctx) return;
  const patterns = { start:[[392,.08,'sine',0],[523,.12,'sine',.09],[659,.16,'sine',.22]], correct:[[523,.09,'sine',0],[659,.12,'sine',.1],[784,.18,'sine',.22]], wrong:[[220,.14,'sawtooth',0],[165,.2,'sawtooth',.14]], dice:[[180,.05,'square',0],[240,.05,'square',.07],[300,.05,'square',.14]], select:[[392,.08,'triangle',0],[587,.16,'triangle',.09]], click:[[660,.035,'sine',0]], countdown:[[330,.08,'triangle',0],[440,.1,'triangle',.1]], finish:[[523,.1,'sine',0],[659,.1,'sine',.11],[784,.1,'sine',.22],[1046,.28,'sine',.34]] };
  const notes = patterns[type] || patterns.select;
  const now = ctx.currentTime;
  notes.forEach(([frequency,duration,wave,offset]) => { const osc = ctx.createOscillator(); const gain = ctx.createGain(); osc.type = wave; osc.frequency.setValueAtTime(frequency, now + offset); gain.gain.setValueAtTime(.0001, now + offset); gain.gain.exponentialRampToValueAtTime(.09, now + offset + .01); gain.gain.exponentialRampToValueAtTime(.0001, now + offset + duration); osc.connect(gain); gain.connect(ctx.destination); osc.start(now + offset); osc.stop(now + offset + duration + .02); });
}
function updateSoundToggle() { const button = document.getElementById('soundToggle'); if (!button) return; button.classList.toggle('is-muted', !ytcSoundEnabled); button.setAttribute('aria-pressed', String(ytcSoundEnabled)); button.innerHTML = `<span aria-hidden="true">${ytcSoundEnabled ? 'ðŸ”Š' : 'ðŸ”‡'}</span> Ã‚M THANH: ${ytcSoundEnabled ? 'Báº¬T' : 'Táº®T'}`; }
function toggleSound() { ytcSoundEnabled = !ytcSoundEnabled; localStorage.setItem('ytcSoundEnabled', ytcSoundEnabled ? '1' : '0'); updateSoundToggle(); if (ytcSoundEnabled) playSound('select'); }
window.addEventListener('DOMContentLoaded', updateSoundToggle, { once: true });

function startGame() {
  playSound('start');
  showLoading('Äang chuáº©n bá»‹ Ä‘Æ°á»ng Ä‘ua...');
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

function showLoading(message = 'Äang táº£i...') {
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
    number.textContent = 'XUáº¤T PHÃT!';
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
      <div class="companion-row empty">ChÆ°a cÃ³ Ä‘á»“ng hÃ nh â€” Ä‘áº¡t Ã´ 15 Ä‘á»ƒ chá»n</div>
      <div class="companion-row empty">Ã” thá»© 2 má»Ÿ á»Ÿ Ã´ 30</div>`;
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
      ? 'Äáº¡t Ã´ 15 Ä‘á»ƒ chá»n Ä‘á»“ng hÃ nh Ä‘áº§u tiÃªn'
      : 'Äáº¡t Ã´ 30 Ä‘á»ƒ chá»n Ä‘á»“ng hÃ nh thá»© hai';
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
  document.getElementById('qCounter').textContent = `CÃ¢u ${state.qIndex + 1} / ${state.questions.length}`;
  document.getElementById('qNumVal').textContent = `${state.qIndex + 1}/${state.questions.length}`;
  const badge = document.getElementById('qTypeBadge');
  if (q.type === 'choice') { badge.textContent = 'Tráº¯c nghiá»‡m'; badge.className = 'q-type-badge choice'; }
  else if (q.type === 'fill') { badge.textContent = 'Äiá»n khuyáº¿t'; badge.className = 'q-type-badge fill'; }
  else { badge.textContent = 'Chá»n tá»«'; badge.className = 'q-type-badge word'; }

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
      <input type="text" class="fill-input" id="fillInput" placeholder="Nháº­p cÃ¢u tráº£ lá»i cá»§a báº¡n..." autocomplete="off">
      <button class="btn-submit" onclick="submitFill()">XÃC NHáº¬N</button>`;
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
    submit.textContent = 'XÃC NHáº¬N';
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
  fb.innerHTML = `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg> Háº¿t giá»! ÄÃ¡p Ã¡n: ${getCorrectAnswerText(state.currentQ)}`;
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
    fb.textContent += ` â€” ÄÃ¡p Ã¡n Ä‘Ãºng: ${q.options[q.answer]}`;
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
    fb.textContent += ` â€” ÄÃ¡p Ã¡n Ä‘Ãºng: ${q.answer}`;
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
  slot.textContent = word + ' âœ•';
  slot.dataset.word = word;
  chip.classList.add('used');
  state.selectedWords.push(word);
  playSound('click');
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
  playSound('click');
}

function submitWord() {
  if (state.answered) return;
  const visibleWords = Array.from(document.querySelectorAll('#wordSlots .word-slot'))
    .map(slot => slot.dataset.word || slot.textContent.replace(/\s+âœ•\s*$/, '').trim())
    .filter(Boolean);
  if (visibleWords.length !== state.currentQ.answer.length) {
    const fb = document.getElementById('feedback');
    fb.className = 'feedback info show';
    fb.textContent = `HÃ£y chá»n Ä‘á»§ ${state.currentQ.answer.length} tá»« trÆ°á»›c khi xÃ¡c nháº­n.`;
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
    fb.textContent += ` â€” ÄÃ¡p Ã¡n Ä‘Ãºng: ${q.answer.join(' â†’ ')}`;
  }
  document.getElementById('btnNext').classList.add('show');
}

function getCorrectAnswerText(q) {
  if (q.type === 'choice') return q.options[q.answer];
  if (q.type === 'fill') return q.answer;
  return q.answer.join(' â†’ ');
}

function offerRetry() {
  if (!state.companions.includes('phuonganh') || state.retryUsed) return false;
  state.retryUsed = true;
  state.answered = false;
  state.selectedWords = [];
  state.timeLeft = Math.max(state.timeLeft, Math.floor(BASE_TIME / 2));
  document.getElementById('feedback').className = 'feedback info show';
  document.getElementById('feedback').textContent = 'LÃª Thá»‹ PhÆ°Æ¡ng Anh: báº¡n cÃ²n 1 cÆ¡ há»™i ná»¯a â€” streak váº«n Ä‘Æ°á»£c giá»¯!';
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
  fb.textContent = correct ? 'âœ“ ChÃ­nh xÃ¡c!' : 'âœ— ChÆ°a Ä‘Ãºng';
}

/* ============================================================
   CORRECT ANSWER â†’ SCORE & DICE
   ============================================================ */
function onCorrectAnswer() {
  state.resolvingTurn = true;
  state.correctCount++;
  if (state.companions.includes('halinh') && !state.isRepeatQuestion && state.haLinhCooldown === 0) {
    state.pendingRepeatQuestion = JSON.parse(JSON.stringify(state.currentQ));
    state.pendingRepeatQuestion.isRepeatQuestion = true;
    state.haLinhCooldown = 4;
    document.getElementById('feedback').innerHTML += '<br>HÃ  Linh: cÃ¢u há»i nÃ y sáº½ xuáº¥t hiá»‡n láº¡i á»Ÿ lÆ°á»£t káº¿ tiáº¿p.';
  }
  const timeUsed = (state.companions.includes('minh') ? BASE_TIME + 10 : BASE_TIME) - state.timeLeft;
  let earned = POINTS_BASE + Math.round(POINTS_TIME_BONUS * (state.timeLeft / (state.companions.includes('minh') ? BASE_TIME + 10 : BASE_TIME)));
  state.streak++;
  let streakBonus = 0;
  if (state.companions.includes('anh')) { streakBonus = state.streak * 50; earned += streakBonus; }
  const phuongAnhBoost = state.companions.includes('nguyenphuonganh') && state.phuongAnhBoostPending;

  // Pháº¡m Thá»‹ Tháº£o Anh bonus: x2 if answered within EARLY_WINDOW seconds
  let thaoAnhBonus = 0;
  if (state.companions.includes('thoanh') && timeUsed <= EARLY_WINDOW) {
    thaoAnhBonus = earned; // double
    earned += thaoAnhBonus;
  }

  if (phuongAnhBoost) earned *= 2;
  state.score += earned;
  if (phuongAnhBoost) state.phuongAnhBoostPending = false;
  if (phuongAnhBoost) showFloatingPoints(`Nguyá»…n PhÆ°Æ¡ng Anh x2 Ä‘iá»ƒm Â· +${earned}`, true, '#b06cff');
  showFloatingPoints('+' + earned + (streakBonus ? ` (streak +${streakBonus})` : ''), thaoAnhBonus > 0 || streakBonus > 0 || phuongAnhBoost);
  updateTopbar();

  // Roll dice
  const sessionId = state.sessionId;
  rollDice().then(steps => {
    if (sessionId !== state.sessionId || state.finished) return;
    let totalSteps = steps;
    if (state.companions.includes('nguyenphuonganh') && phuongAnhBoost) {
      totalSteps *= 2;
      showFloatingPoints(`Nguyá»…n PhÆ°Æ¡ng Anh x2 bÆ°á»›c Â· +${totalSteps}`, true, '#b06cff');
    }
    if (state.companions.includes('nhatminh') && steps === 1) {
      state.score += DICE_ONE_BONUS;
      updateTopbar();
      showFloatingPoints(`Nháº­t Minh Â· xÃºc 1 Â· +${DICE_ONE_BONUS}`, true, '#d19a00');
      document.getElementById('diceResult').textContent += ` Â· +${DICE_ONE_BONUS} Ä‘iá»ƒm`;
    }
    if (state.companions.includes('trang') && (steps === 3 || steps === 4)) {
      const multiplier = steps === 3 ? 1.2 : 1.5;
      const bonus = Math.round(state.score * (multiplier - 1));
      state.score += bonus; updateTopbar();
      showFloatingPoints(`TÃ´ Thu Trang x${multiplier} Â· +${bonus}`, true, '#d19a00');
      document.getElementById('diceResult').textContent += ` Â· Ä‘iá»ƒm x${multiplier}`;
    }
    // ÄÃ o Thá»‹ Thu Háº±ng: +2
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
        document.getElementById('diceResult').textContent = `ÄÆ°á»£c ${result} bÆ°á»›c`;
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

  // Äáº·ng Thá»‹ PhÆ°Æ¡ng Linh: +100 Ä‘iá»ƒm cho má»—i Ã´ cháºµn Ä‘Æ°á»£c Ä‘i qua.
  if (state.companions.includes('phuonglinh')) {
    let evenSteps = 0;
    for (let crossed = fromStep + 1; crossed <= target; crossed++) {
      if (crossed % 2 === 0) evenSteps++;
    }
    const bonus = evenSteps * 100;
    if (bonus > 0) {
      state.score += bonus;
      showFloatingPoints(`PhÆ°Æ¡ng Linh Â· +${bonus} (Ã´ cháºµn)`, true, '#d19a00');
    }
  }
  updateTopbar();

  // Show floating steps
  showFloatingPoints('<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 8h.01M16 8h.01M12 12h.01M8 16h.01M16 16h.01"/></svg> +' + totalSteps + ' bÆ°á»›c', false, '#00bbfe');

  // Check finish
  if (target >= BOARD_SIZE && !state.reachedFinish) {
    state.reachedFinish = true;
    playSound('finish');
    state.score += POINTS_FINISH_BONUS;
    if (state.companions.includes('dung')) state.score += POINTS_FINISH_BONUS;
    updateTopbar();
    setTimeout(() => {
      showFloatingPoints('<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 21h8m-4-4v4M7 4h10v5a5 5 0 0 1-10 0zm10 2h4v2a4 4 0 0 1-4 4M7 6H3v2a4 4 0 0 0 4 4"/></svg> +' + (state.companions.includes('dung') ? '1.000' : '500') + ' Vá»€ ÄÃCH!', false, '#ffd24a');
      launchConfetti();
      const fb = document.getElementById('feedback');
      fb.className = 'feedback info show';
      fb.innerHTML = fb.textContent + '<br>CHÃšC Má»ªNG! Báº¡n Ä‘Ã£ vá» Ä‘Ã­ch vÃ  nháº­n +500 Ä‘iá»ƒm thÆ°á»Ÿng!';
      // Disable next button (game will end after a delay)
      document.getElementById('btnNext').textContent = 'XEM Káº¾T QUáº¢ â–¶';
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
  subtitle.textContent = `Báº¡n vá»«a Ä‘áº¡t Ã´ ${milestone} â€” chá»n 1 Ä‘á»“ng hÃ nh cÃ²n láº¡i`;
  const grid = document.getElementById('charGrid');
  grid.innerHTML = '';
  COMPANIONS.forEach(c => {
    const picked = state.companions.includes(c.id);
    const card = document.createElement('div');
    card.className = 'char-card' + (picked ? ' picked' : '');
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', picked ? '-1' : '0');
    card.setAttribute('aria-label', picked ? `${c.name}, Ä‘Ã£ chá»n` : `Chá»n ${c.name}`);
      const image = COMPANION_IMAGES[c.id];
      card.innerHTML = `
        <div class="char-card-head"><span class="char-index">YTC / ${String(COMPANIONS.indexOf(c) + 1).padStart(2, '0')}</span><span class="char-tag">Äá»’NG HÃ€NH</span></div>
        <div class="char-avatar-big${image ? ' has-photo' : ''}">${image ? `<img src="${image}" alt="${c.name}" loading="lazy">` : c.avatar}</div>
        <div class="char-name">${c.name}</div>
        <div class="char-role">${c.role}</div>
        <div class="char-ability"><span class="char-ability-label">NÄ‚NG Lá»°C</span>${c.ability}</div>`;
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
  playSound('click');
  if (!state.isRepeatQuestion && state.haLinhCooldown > 0) state.haLinhCooldown--;
  state.qIndex++;
  if (state.pendingRepeatQuestion) {
    state.questions.splice(state.qIndex, 0, state.pendingRepeatQuestion);
    state.pendingRepeatQuestion = null;
  }
  // Reset next button text
  document.getElementById('btnNext').textContent = 'CÃ‚U TIáº¾P THEO â–¶';
  // If character modal is showing, wait â€” but flow continues
  if (state.qIndex >= state.questions.length || state.reachedFinish) {
    endGame();
    return;
  }
  loadQuestion();
}


/* ============================================================
   LOCAL RECORDS â€” highscore & play history
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
  highscoreList.innerHTML = highscore.length ? highscore.map(item => `<li><span>${item.correct}/${item.total} Ä‘Ãºng</span><span class="record-score">${Number(item.score).toLocaleString('vi-VN')} Ä‘iá»ƒm</span></li>`).join('') : '<li class="record-empty">ChÆ°a cÃ³ ká»· lá»¥c</li>';
  historyList.innerHTML = history.length ? history.map(item => `<div class="history-item"><span><strong>${Number(item.score).toLocaleString('vi-VN')} Ä‘iá»ƒm</strong><br>${item.step}/50 Ã´ Â· ${item.correct}/${item.total} Ä‘Ãºng</span><span>${formatRecordDate(item.playedAt)}</span></div>`).join('') : '<div class="record-empty">ChÆ°a cÃ³ lÆ°á»£t chÆ¡i</div>';
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
  if (result) result.textContent = best ? 'Ká»¶ Lá»¤C Má»šI â€” Báº¡n Ä‘ang Ä‘á»©ng Ä‘áº§u báº£ng Ä‘iá»ƒm trÃªn thiáº¿t bá»‹ nÃ y.' : 'Káº¿t quáº£ Ä‘Ã£ Ä‘Æ°á»£c lÆ°u vÃ o lá»‹ch sá»­ chÆ¡i trÃªn thiáº¿t bá»‹ nÃ y.';
}
function clearRecords() {
  if (!confirm('XÃ³a toÃ n bá»™ highscore vÃ  lá»‹ch sá»­ chÆ¡i trÃªn thiáº¿t bá»‹ nÃ y?')) return;
  localStorage.removeItem(HIGHSCORE_KEY); localStorage.removeItem(HISTORY_KEY); renderRecords();
  const message = document.getElementById('recordsMessage'); if (message) message.textContent = 'ÄÃ£ xÃ³a highscore vÃ  lá»‹ch sá»­ chÆ¡i.';
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
  // Tráº§n Máº¡nh DÅ©ng: náº¿u háº¿t cÃ¢u há»i trÆ°á»›c khi vá» Ä‘Ã­ch, má»—i bÆ°á»›c Ä‘Æ°á»£c quy Ä‘á»•i thÃ nh 100 Ä‘iá»ƒm.
  if (!state.reachedFinish && state.companions.includes('dung')) {
    const distanceBonus = state.step * 100;
    state.score += distanceBonus;
    if (distanceBonus > 0) showFloatingPoints(`Máº¡nh DÅ©ng Â· +${distanceBonus} Ä‘iá»ƒm theo ${state.step} bÆ°á»›c`, true, '#d19a00');
  }
  document.getElementById('finalScore').textContent = state.score.toLocaleString('vi-VN');
  document.getElementById('finalStep').textContent = state.step + '/50';
  document.getElementById('finalCorrect').textContent = state.correctCount + '/' + state.questions.length;
  document.getElementById('finalCompanions').textContent = state.companions.length + ' ngÆ°á»i';
  saveRunRecord();

  let rank = 'Cá»‘ gáº¯ng láº§n sau!';
  if (state.score >= 10000) rank = '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 21h8m-4-4v4M7 4h10v5a5 5 0 0 1-10 0zm10 2h4v2a4 4 0 0 1-4 4M7 6H3v2a4 4 0 0 0 4 4"/></svg> HUYá»€N THOáº I YTC!';
  else if (state.score >= 5000) rank = '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="14" r="7"/><path d="M9 3h6l2 4H7zM12 10l1.2 2.5 2.8.4-2 1.9.5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-1.9 2.8-.4z"/></svg> Báº¬C THáº¦Y QUIZ!';
  else if (state.score >= 2000) rank = '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="14" r="7"/><path d="M9 3h6l2 4H7zM9.5 12a2.5 2.5 0 1 1 4 2L10 18h4"/></svg> XUáº¤T Sáº®C!';
  else if (state.score >= 1000) rank = '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="14" r="7"/><path d="M9 3h6l2 4H7zM9.5 12a2.5 2.5 0 1 1 2.5 2m0 0a2.5 2.5 0 1 1-2.5 2"/></svg> KHÃ Tá»T!';
  if (state.reachedFinish) rank = '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 21V4m0 1h14l-3 4 3 4H5"/><path d="M9 5v4m4-4v4m-4 0v4m4-4v4"/></svg> Vá»€ ÄÃCH! ' + rank;
  document.getElementById('gameOverRank').innerHTML = rank;
  document.getElementById('gameOverTitle').innerHTML = state.reachedFinish ? '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 21h8m-4-4v4M7 4h10v5a5 5 0 0 1-10 0zm10 2h4v2a4 4 0 0 1-4 4M7 6H3v2a4 4 0 0 0 4 4"/></svg> Vá»€ ÄÃCH!' : '<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 21V4m0 1h14l-3 4 3 4H5"/><path d="M9 5v4m4-4v4m-4 0v4m4-4v4"/></svg> Káº¾T THÃšC!';
  document.getElementById('gameOverModal').classList.add('show');
  if (state.reachedFinish) launchConfetti();
}

/* ============================================================
   UI HELPERS
   ============================================================ */
function updateTopbar() {
  document.getElementById('scoreVal').textContent = state.score.toLocaleString('vi-VN');
  document.getElementById('stepVal').textContent = state.step + '/50';
  document.getElementById('stepNowBadge').textContent = 'Ã” ' + state.step;
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


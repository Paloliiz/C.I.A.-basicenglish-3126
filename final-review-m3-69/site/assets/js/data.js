/* ================================================================
   SPARK 3 REVIEW — content database
   Sourced from the M.3/1-3/2 Semester 1 workbook (SPARK 3).
   All content lives here so the pages stay thin templates.
   ================================================================ */

/* ---------------------------------------------------------------
   1) VOCABULARY — grouped by unit → topic → words
   --------------------------------------------------------------- */
const VOCAB = {
  starter: {
    label: "Starter Unit",
    topics: [
      {
        name: "Food & Drinks", color: "vocab",
        words: [
          { w: "pork", m: "เนื้อหมู", ex: "We don't eat pork at home." },
          { w: "cream", m: "ครีม", ex: "Add a little cream to the soup." },
          { w: "lemon", m: "มะนาวเหลือง", ex: "She squeezed a lemon into her tea." },
          { w: "cherries", m: "เชอร์รี่", ex: "These cherries are very sweet." },
          { w: "apple pie", m: "พายแอปเปิล", ex: "Grandma baked an apple pie." },
          { w: "lemon tart", m: "ทาร์ตมะนาว", ex: "I'd like a slice of lemon tart, please." },
          { w: "cola", m: "น้ำอัดลมโคล่า", ex: "Can I have a cold cola?" },
          { w: "lemonade", m: "น้ำมะนาว", ex: "We made lemonade on a hot day." },
          { w: "omelette", m: "ไข่เจียว/ไข่ออมเล็ต", ex: "He cooked a cheese omelette." },
          { w: "sandwich", m: "แซนด์วิช", ex: "I had a chicken sandwich for lunch." },
          { w: "pepper", m: "พริกไทย", ex: "Add a little salt and pepper." },
          { w: "flour", m: "แป้ง", ex: "You need two cups of flour for this cake." },
        ]
      }
    ]
  },
  unit1: {
    label: "Unit 1: Lifestyles",
    topics: [
      {
        name: "Jobs", color: "vocab",
        words: [
          { w: "security guard", m: "ยามรักษาความปลอดภัย", ex: "The security guard checks every bag." },
          { w: "make-up artist", m: "ช่างแต่งหน้า", ex: "A make-up artist works backstage before the show." },
          { w: "travel agent", m: "ตัวแทนท่องเที่ยว", ex: "The travel agent booked our flights and hotel." },
          { w: "dry cleaner", m: "ช่างซักแห้ง", ex: "I took my suit to the dry cleaner." },
          { w: "delivery boy", m: "พนักงานส่งของ", ex: "The delivery boy brought the pizza in 20 minutes." },
          { w: "fighter pilot", m: "นักบินเครื่องบินรบ", ex: "A fighter pilot needs excellent eyesight." },
          { w: "shop assistant", m: "พนักงานขายของในร้าน", ex: "The shop assistant helped me find my size." },
          { w: "computer programmer", m: "โปรแกรมเมอร์คอมพิวเตอร์", ex: "She works as a computer programmer for a games company." },
          { w: "graphic designer", m: "นักออกแบบกราฟิก", ex: "The graphic designer made a new logo." },
          { w: "bank clerk", m: "พนักงานธนาคาร", ex: "The bank clerk counted the money carefully." },
          { w: "bus driver", m: "คนขับรถบัส", ex: "The bus driver stops here every morning at eight." },
          { w: "personal trainer", m: "ผู้ฝึกสอนส่วนตัว", ex: "My personal trainer helps me exercise safely." },
          { w: "TV presenter", m: "พิธีกรโทรทัศน์", ex: "The TV presenter reads the news every evening." },
          { w: "heart surgeon", m: "ศัลยแพทย์หัวใจ", ex: "The heart surgeon operated for six hours." },
          { w: "accountant", m: "นักบัญชี", ex: "An accountant checks the company's money." },
          { w: "interior decorator", m: "นักตกแต่งภายใน", ex: "The interior decorator chose bright colours for the room." },
          { w: "photographer", m: "ช่างภาพ", ex: "The photographer took pictures of the wedding." },
          { w: "tour guide", m: "ไกด์นำเที่ยว", ex: "Our tour guide knew a lot about the old temple." },
          { w: "lifeguard", m: "เจ้าหน้าที่ช่วยชีวิตทางน้ำ", ex: "The lifeguard watches the swimmers all day." },
          { w: "truck driver", m: "คนขับรถบรรทุก", ex: "The truck driver delivers goods across the country." },
        ]
      },
      {
        name: "Clothes", color: "vocab",
        words: [
          { w: "polo-neck jumper", m: "เสื้อสเวตเตอร์คอโปโล", ex: "He wore a warm polo-neck jumper in winter." },
          { w: "tight-fitting jeans", m: "กางเกงยีนส์รัดรูป", ex: "Those tight-fitting jeans look great on you." },
          { w: "short-sleeved top", m: "เสื้อแขนสั้น", ex: "Wear a short-sleeved top; it's hot today." },
          { w: "flared skirt", m: "กระโปรงบาน", ex: "She twirled around in her flared skirt." },
          { w: "loose-fitting top", m: "เสื้อทรงหลวม", ex: "A loose-fitting top is comfortable in summer." },
          { w: "tartan skirt", m: "กระโปรงลายสก็อต", ex: "The tartan skirt is part of the school uniform." },
          { w: "polka-dot dress", m: "เดรสลายจุด", ex: "I love your polka-dot dress." },
          { w: "flat shoes", m: "รองเท้าส้นเตี้ย", ex: "She prefers flat shoes for walking all day." },
        ]
      },
      {
        name: "Physical Appearance & Character", color: "vocab",
        words: [
          { w: "plump", m: "อวบอ้วนเล็กน้อย", ex: "The plump little dog loves to nap." },
          { w: "easy-going", m: "อารมณ์ดี เข้ากับคนง่าย", ex: "My cousin is very easy-going and never gets angry." },
          { w: "honest", m: "ซื่อสัตย์", ex: "He's honest, so people trust him." },
          { w: "fair", m: "(ผิว/ผม) สีอ่อน", ex: "She has fair skin and blonde hair." },
          { w: "reserved", m: "เก็บตัว ไม่แสดงออก", ex: "He's quite reserved when he meets new people." },
          { w: "of medium height", m: "สูงปานกลาง", ex: "The man is of medium height, not tall or short." },
          { w: "moustache", m: "หนวด", ex: "My grandfather has a grey moustache." },
          { w: "rude", m: "หยาบคาย", ex: "It's rude to interrupt someone speaking." },
          { w: "shy", m: "ขี้อาย", ex: "The new student is shy but very kind." },
          { w: "in her late twenties", m: "อายุปลาย 20 ปี", ex: "My sister is in her late twenties now." },
          { w: "outgoing", m: "เข้าสังคมเก่ง ร่าเริง", ex: "He's outgoing, so he makes friends easily." },
          { w: "patient", m: "ใจเย็น อดทน", ex: "A good teacher is patient with students." },
          { w: "beard", m: "เครา", ex: "He grew a beard over the summer." },
          { w: "well built", m: "รูปร่างบึกบึนสมส่วน", ex: "The rugby player is tall and well built." },
          { w: "slim", m: "ผอมเพรียว", ex: "She stayed slim by cycling every day." },
          { w: "wavy", m: "(ผม) ลอน", ex: "She has long, wavy brown hair." },
          { w: "overweight", m: "น้ำหนักเกิน", ex: "Eating too much fast food can make you overweight." },
          { w: "curly", m: "(ผม) หยิก", ex: "His curly hair is hard to comb." },
        ]
      },
    ]
  },
  unit2: {
    label: "Unit 2: Believe It or Not",
    topics: [
      {
        name: "Natural Phenomena", color: "vocab",
        words: [
          { w: "flood", m: "น้ำท่วม", ex: "The flood damaged many houses near the river." },
          { w: "earthquake", m: "แผ่นดินไหว", ex: "The earthquake measured 6.5 on the Richter scale." },
          { w: "tsunami", m: "สึนามิ", ex: "An earthquake on the sea bed caused the tsunami." },
          { w: "avalanche", m: "หิมะถล่ม", ex: "The avalanche covered the mountain road with snow." },
          { w: "lightning", m: "ฟ้าผ่า", ex: "Lightning lit up the whole sky." },
          { w: "hurricane", m: "พายุเฮอริเคน", ex: "The hurricane brought strong winds and heavy rain." },
          { w: "drought", m: "ภัยแล้ง", ex: "The drought caused plants and animals to die from a lack of water." },
          { w: "tornado", m: "พายุทอร์นาโด", ex: "They watched the tornado lift cars from the roads." },
          { w: "volcanic eruption", m: "ภูเขาไฟระเบิด", ex: "After the volcanic eruption, lava flowed down the mountain." },
        ]
      },
      {
        name: "Injuries, Accidents & First Aid", color: "vocab",
        words: [
          { w: "burn (your) hand", m: "มือถูกลวก/ไหม้", ex: "She burnt her hand on the frying pan." },
          { w: "sprain (your) wrist", m: "ข้อมือแพลง", ex: "He sprained his wrist while swinging a golf club." },
          { w: "hit (your) head", m: "หัวโดนกระแทก", ex: "Mark hit his head when a ball hit him." },
          { w: "cut (your) leg", m: "ขาถูกบาดเป็นแผล", ex: "Tom cut his leg while climbing the rocks." },
          { w: "pull a muscle", m: "กล้ามเนื้อฉีก/ยึด", ex: "She pulled a muscle during basketball practice." },
          { w: "bruise (your) eye", m: "ตาเขียวช้ำ", ex: "He bruised his eye and couldn't see properly for days." },
          { w: "twist (your) ankle", m: "ข้อเท้าพลิก", ex: "Jane twisted her ankle and had to rest her foot." },
          { w: "break a leg", m: "ขาหัก", ex: "Simon broke his leg after falling off his bike." },
        ]
      },
      {
        name: "Aches, Pains & Illnesses", color: "vocab",
        words: [
          { w: "stomach ache", m: "ปวดท้อง", ex: "I have a stomach ache after eating too much." },
          { w: "headache", m: "ปวดหัว", ex: "Simon has a terrible headache today." },
          { w: "temperature", m: "มีไข้", ex: "The doctor said the baby has a temperature." },
          { w: "cold/flu", m: "หวัด/ไข้หวัดใหญ่", ex: "Jane is sneezing a lot; I think she has a cold." },
          { w: "toothache", m: "ปวดฟัน", ex: "Paul's toothache is getting worse." },
          { w: "sore throat", m: "เจ็บคอ", ex: "I can barely speak because of my sore throat." },
          { w: "cough", m: "ไอ", ex: "He has a bad cough that keeps him up at night." },
          { w: "backache", m: "ปวดหลัง", ex: "Carrying heavy bags gave her a backache." },
          { w: "feel sick", m: "รู้สึกไม่สบาย/คลื่นไส้", ex: "The smell of milk makes John feel sick." },
          { w: "rash", m: "ผื่นคัน", ex: "She has an itchy rash on her arm." },
        ]
      },
    ]
  },
  unit3: {
    label: "Unit 3: Experiences",
    topics: [
      {
        name: "Extreme Sports", color: "vocab",
        words: [
          { w: "bungee jumping", m: "บันจี้จัมพ์", ex: "Bungee jumping is one of the scariest things I've tried." },
          { w: "skateboarding", m: "สเก็ตบอร์ด", ex: "He practises skateboarding at the park every weekend." },
          { w: "hang-gliding", m: "ร่อนร่มปีก", ex: "Hang-gliding lets you fly like a bird over the hills." },
          { w: "motocross", m: "แข่งมอเตอร์ไซค์วิบาก", ex: "The motocross track was full of mud and jumps." },
          { w: "snowboarding", m: "สโนว์บอร์ด", ex: "She learnt snowboarding on her trip to Japan." },
          { w: "skydiving", m: "กระโดดร่มดิ่งพสุธา", ex: "Skydiving from a plane takes a lot of courage." },
          { w: "white-water rafting", m: "ล่องแก่ง", ex: "We went white-water rafting down the river." },
          { w: "canoeing", m: "พายเรือแคนู", ex: "Canoeing on the calm lake was relaxing." },
          { w: "rock climbing", m: "ปีนหน้าผา", ex: "Rock climbing needs strong arms and a lot of focus." },
          { w: "mountain biking", m: "ปั่นจักรยานเสือภูเขา", ex: "Mountain biking on rocky trails is his favourite hobby." },
          { w: "snorkelling", m: "ดำน้ำตื้น", ex: "We went snorkelling to see the colourful fish." },
        ]
      },
      {
        name: "Sports Equipment", color: "vocab",
        words: [
          { w: "goggles", m: "แว่นตาว่ายน้ำ/สกี", ex: "Wear goggles so the water doesn't sting your eyes." },
          { w: "racquet", m: "ไม้แร็กเกต", ex: "She bought a new tennis racquet." },
          { w: "gloves", m: "ถุงมือ", ex: "Boxers wear thick gloves during a match." },
          { w: "flippers", m: "ตีนกบ", ex: "Flippers help you swim faster underwater." },
          { w: "pads", m: "สนับป้องกัน", ex: "Cricket players wear pads to protect their legs." },
          { w: "paddle", m: "ไม้พาย", ex: "Hold the paddle with both hands when canoeing." },
          { w: "helmet", m: "หมวกกันน็อก", ex: "Always wear a helmet when you ride a motorbike." },
          { w: "snowboard", m: "กระดานสโนว์บอร์ด", ex: "He carried his snowboard up the snowy hill." },
          { w: "bat", m: "ไม้ตี", ex: "The batter swung the bat and hit the ball." },
        ]
      },
      {
        name: "Holiday Problems", color: "vocab",
        words: [
          { w: "miss a flight", m: "ตกเครื่องบิน", ex: "We almost missed our flight because of traffic." },
          { w: "get a puncture / a flat tyre", m: "ยางรถรั่ว/แบน", ex: "We got a flat tyre halfway to the beach." },
          { w: "lose (your) passport", m: "ทำพาสปอร์ตหาย", ex: "He panicked when he lost his passport at the airport." },
          { w: "get sunburnt", m: "ผิวไหม้แดด", ex: "She got sunburnt after a day at the beach." },
          { w: "lose (your) luggage", m: "กระเป๋าเดินทางหาย", ex: "The airline lost my luggage on the way home." },
          { w: "car break down", m: "รถเสีย", ex: "Our car broke down on the motorway." },
          { w: "steal a wallet", m: "ขโมยกระเป๋าสตางค์", ex: "Someone stole her wallet on the crowded bus." },
        ]
      },
    ]
  }
};

/* ---------------------------------------------------------------
   2) GRAMMAR — grouped by unit → topics with rule + examples
   --------------------------------------------------------------- */
const GRAMMAR = {
  starter: {
    label: "Starter Unit",
    topics: [
      {
        title: "Pronouns & Possessive Determiners",
        body: `
          <div class="th-explain">
            <p><b>สรรพนาม (Pronoun)</b> คือคำที่ใช้แทนคำนาม เพื่อไม่ให้ต้องพูดหรือเขียนชื่อคน สัตว์ สิ่งของซ้ำๆ ในภาษาอังกฤษมีสรรพนามหลายแบบที่ทำหน้าที่ต่างกันในประโยค ต้องเลือกใช้ให้ถูกตำแหน่ง:</p>
            <p>• <b>Subject pronoun</b> (I, you, he, she, it, we, they) ทำหน้าที่เป็น "ประธาน" ผู้กระทำกริยา อยู่หน้าสุดของประโยค เช่น <i>She is my friend.</i> (เธอเป็นเพื่อนของฉัน)</p>
            <p>• <b>Object pronoun</b> (me, you, him, her, it, us, them) ทำหน้าที่เป็น "กรรม" ผู้ถูกกระทำ อยู่หลังกริยาหรือหลัง preposition เช่น <i>I see them every day.</i> (ฉันเห็นพวกเขาทุกวัน)</p>
            <p>• <b>Possessive determiner</b> (my, your, his, her, its, our, their) แปลว่า "ของฉัน ของคุณ..." ต้องมีคำนามตามหลังเสมอ เช่น <i>This is my bag.</i> (นี่คือกระเป๋าของฉัน)</p>
            <p>• <b>Possessive pronoun</b> (mine, yours, his, hers, ours, theirs) แปลว่า "ของฉัน ของคุณ..." เช่นกัน แต่ใช้แทนคำนามได้เลย ไม่ต้องมีคำนามตามหลัง เช่น <i>This bag is mine.</i> (กระเป๋าใบนี้เป็นของฉัน)</p>
          </div>
          <table>
            <tr><th></th><th>Subject</th><th>Object</th><th>Possessive det.</th><th>Possessive pronoun</th></tr>
            <tr><td>I</td><td>I</td><td>me</td><td>my</td><td>mine</td></tr>
            <tr><td>you</td><td>you</td><td>you</td><td>your</td><td>yours</td></tr>
            <tr><td>he</td><td>he</td><td>him</td><td>his</td><td>his</td></tr>
            <tr><td>she</td><td>she</td><td>her</td><td>her</td><td>hers</td></tr>
            <tr><td>it</td><td>it</td><td>it</td><td>its</td><td>–</td></tr>
            <tr><td>we</td><td>we</td><td>us</td><td>our</td><td>ours</td></tr>
            <tr><td>they</td><td>they</td><td>them</td><td>their</td><td>theirs</td></tr>
          </table>
          <p>Possessive determiners go <b>before a noun</b> (my puppy). Possessive pronouns stand <b>alone</b> and replace the noun.</p>
          <div class="example">This is <em>my</em> book. → It's <em>mine</em>. (NOT: It's my.)<span class="ex-th">นี่คือหนังสือของฉัน → มันเป็นของฉัน (ห้ามพูดว่า It's my)</span></div>
          <div class="example"><em>Its</em> tail is short. (possession) vs. <em>It's</em> a warm day. (it is)<span class="ex-th">หางของมันสั้น (แสดงความเป็นเจ้าของ) เทียบกับ วันนี้อากาศอบอุ่น (it is)</span></div>
          <div class="th-tip"><b>จุดสังเกต:</b> <i>its</i> (ไม่มี apostrophe) แปลว่า "ของมัน" ใช้นำหน้าคำนาม เช่น <i>The dog wagged its tail.</i> (สุนัขกระดิกหางของมัน) ส่วน <i>it's</i> (มี apostrophe) ย่อมาจาก it is หรือ it has อย่าใช้สลับกันเด็ดขาด เพราะเป็นจุดที่ข้อสอบชอบออก!</div>
        `
      },
      {
        title: "Can — Have got",
        body: `
          <div class="th-explain">
            <p><b>can</b> ใช้พูดถึงความสามารถ (สิ่งที่ทำได้หรือทำไม่ได้) โครงสร้างง่ายมากเพราะ can ไม่เปลี่ยนรูปตามประธานเลย ไม่ว่าประธานจะเป็น I, you, he, she หรือ they ก็ใช้ can เหมือนกันหมด ตามด้วยกริยาช่องที่ 1 เสมอ (ห้ามเติม to หรือเติม s)</p>
          </div>
          <p><b>can</b> + base verb (same form for every person) shows ability.</p>
          <div class="example">I <em>can</em> swim. She <em>can't</em> play the violin. <em>Can</em> you drive?<span class="ex-th">ฉันว่ายน้ำเป็น เธอเล่นไวโอลินไม่เป็น คุณขับรถเป็นไหม</span></div>
          <div class="th-explain">
            <p><b>have got</b> ใช้ 3 แบบหลักๆ คือ (1) บอกว่ามีสิ่งของ/เป็นเจ้าของอะไร เช่น มีรถ มีบ้าน (2) ใช้บรรยายลักษณะรูปร่างหน้าตาของคนหรือสัตว์ เช่น มีผมสีดำ มีตาสีฟ้า และ (3) ใช้ในสำนวนบอกอาการ เช่น มีอาการปวดหัว มีไข้หวัด ต้องผันตามประธาน: I/we/you/they ใช้ have got (หรือย่อ 've got) ส่วน he/she/it ใช้ has got (หรือย่อ 's got)</p>
          </div>
          <p><b>have got</b> shows that something belongs to somebody, describes people/animals/things, or is used in fixed expressions (a headache, a cold, a problem...).</p>
          <table>
            <tr><th></th><th>I/we/you/they</th><th>he/she/it</th></tr>
            <tr><td>Affirmative</td><td>'ve got</td><td>'s got</td></tr>
            <tr><td>Negative</td><td>haven't got</td><td>hasn't got</td></tr>
            <tr><td>Question</td><td>Have ... got?</td><td>Has ... got?</td></tr>
          </table>
          <div class="example">Tracey <em>has got</em> a laptop. She <em>hasn't got</em> a car. <em>Has</em> Tina <em>got</em> straight hair? No, she hasn't.<span class="ex-th">เทรซีย์มีแล็ปท็อป แต่เธอไม่มีรถ — ทีน่ามีผมตรงไหม? ไม่มีค่ะ</span></div>
          <div class="th-tip"><b>จุดสังเกต:</b> 's ในประโยคอาจย่อมาจาก is หรือ has ก็ได้ ต้องดูจากบริบท เช่น <i>He's got a car.</i> = He has got a car (เขามีรถ) แต่ <i>He's driving a car.</i> = He is driving a car (เขากำลังขับรถ) — ให้สังเกตจากคำที่ตามมา ถ้าตามด้วย got มักจะเป็น has เสมอ</div>
        `
      },
      {
        title: "Present Simple",
        body: `
          <div class="th-explain">
            <p><b>Present Simple Tense (ปัจจุบันกาลธรรมดา)</b> ใช้พูดถึง 2 เรื่องหลักๆ คือ (1) กิจวัตรหรือสิ่งที่ทำเป็นประจำ เช่น ตื่นนอน ไปโรงเรียน กินข้าว และ (2) ข้อเท็จจริงทั่วไปหรือสิ่งที่ไม่เปลี่ยนแปลง เช่น ดวงอาทิตย์ขึ้นทางทิศตะวันออก น้ำเดือดที่ 100 องศา</p>
            <p>โครงสร้าง: ประธาน I/You/We/They ตามด้วยกริยาช่องที่ 1 รูปเดิม แต่ถ้าประธานเป็น He/She/It (บุรุษที่ 3 เอกพจน์) ต้องเติม <b>s</b> หรือ <b>es</b> ที่ท้ายกริยาเสมอ</p>
          </div>
          <p>Used for habits/routines and permanent facts.</p>
          <div class="example">John <em>starts</em> school at 8:45 every day. Angela <em>likes</em> rock music.<span class="ex-th">จอห์นเริ่มเรียนเวลา 8:45 ทุกวัน แองเจล่าชอบเพลงร็อก</span></div>
          <p><b>Spelling</b> (3rd person singular): most verbs +s; verbs ending -ss/-sh/-ch/-x/-o → +es (watch→watches, go→goes); consonant+y → -ies (try→tries); vowel+y → +s (play→plays).</p>
          <div class="example">Thomas <em>doesn't live</em> in Bradford. He <em>lives</em> in Leeds.<span class="ex-th">โทมัสไม่ได้อาศัยอยู่ในแบรดฟอร์ด เขาอาศัยอยู่ในลีดส์</span></div>
          <div class="th-tip"><b>กฎการเติม s/es:</b> กริยาทั่วไปเติม s ตรงๆ (play→plays) กริยาที่ลงท้ายด้วย -ss, -sh, -ch, -x, -o ให้เติม es (watch→watches, go→goes) กริยาที่ลงท้ายด้วยพยัญชนะ+y ให้เปลี่ยน y เป็น ies (try→tries) แต่ถ้าลงท้ายด้วยสระ+y ให้เติม s เฉยๆ (play→plays)<br><br>ในประโยคปฏิเสธและคำถาม เราใช้ do/does ช่วย โดย he/she/it ใช้ does และกริยาหลักกลับไปเป็นรูปเดิม ไม่ต้องเติม s แล้ว (เพราะ does เติม s ให้แล้ว) เช่น <i>She doesn't like coffee.</i> ไม่ใช่ <i>She doesn't likes coffee.</i></div>
        `
      },
      {
        title: "Adverbs of Frequency",
        body: `
          <div class="th-explain">
            <p><b>คำวิเศษณ์บอกความถี่ (Adverbs of Frequency)</b> บอกว่าเราทำสิ่งหนึ่งบ่อยแค่ไหน เรียงจากมากที่สุดไปน้อยที่สุด: always (100% ทำทุกครั้ง) → usually (75% ทำเป็นส่วนใหญ่) → often (50% ทำบ่อย) → sometimes (25% ทำบางครั้ง) → rarely/seldom (10% ทำน้อยมาก) → never (0% ไม่เคยทำเลย)</p>
            <p>ตำแหน่งการวางสำคัญมาก: ถ้าประโยคมีกริยาหลักตัวเดียว (ไม่ใช่ be) ให้วางคำวิเศษณ์ไว้ <b>หน้า</b> กริยาหลักนั้น แต่ถ้าประโยคมี verb to be (is/am/are) หรือกริยาช่วย (have, can, will, must) ให้วางไว้ <b>หลัง</b> คำเหล่านั้น</p>
          </div>
          <p>always 100% → usually 75% → often 50% → sometimes 25% → rarely/seldom 10% → never 0%.</p>
          <p>Position: <b>before</b> the main verb, but <b>after</b> be / have / can / will, etc.</p>
          <div class="example">Brian <em>always</em> has lunch at home. She is <em>always</em> so nice.<span class="ex-th">ไบรอันกินข้าวเที่ยงที่บ้านเป็นประจำ เธอใจดีเสมอ</span></div>
          <p><i>Never</i>, <i>rarely</i> and <i>seldom</i> already mean "not" — don't add another negative.</p>
          <div class="example">Gina <em>rarely stays</em> up late. (NOT: doesn't rarely stay)<span class="ex-th">จีน่าแทบไม่เคยนอนดึกเลย</span></div>
          <div class="th-tip"><b>ข้อควรระวัง:</b> never, rarely และ seldom มีความหมายเป็นปฏิเสธอยู่ในตัวเองแล้ว (แปลว่า "ไม่เคย/แทบไม่เคย") ดังนั้นห้ามใช้ don't/doesn't ร่วมกับคำเหล่านี้อีก เพราะจะกลายเป็นปฏิเสธซ้อนปฏิเสธซึ่งผิดหลักไวยากรณ์ เช่น ห้ามพูดว่า <i>He doesn't never travel.</i> ต้องพูดว่า <i>He never travels.</i> เท่านั้น</div>
        `
      },
      {
        title: "Question Words",
        body: `
          <div class="th-explain">
            <p>คำคำถามใช้ขึ้นต้นประโยคคำถามเพื่อถามข้อมูลเฉพาะเจาะจง แต่ละคำถามหาข้อมูลคนละแบบ ดังตารางนี้:</p>
          </div>
          <table>
            <tr><th>Word</th><th>Asks about</th><th>ความหมาย</th></tr>
            <tr><td>who / whose</td><td>people / owner</td><td>ใคร / ของใคร</td></tr>
            <tr><td>what / which</td><td>things (which = limited choice)</td><td>อะไร / อันไหน (which ใช้เมื่อมีตัวเลือกจำกัด)</td></tr>
            <tr><td>where</td><td>place</td><td>ที่ไหน</td></tr>
            <tr><td>when / how long / how often / what time</td><td>time</td><td>เมื่อไหร่ / นานแค่ไหน / บ่อยแค่ไหน / เวลาอะไร</td></tr>
            <tr><td>why</td><td>reason</td><td>ทำไม</td></tr>
            <tr><td>how much / how many</td><td>quantity / number</td><td>เท่าไหร่ (much=นับไม่ได้ / many=นับได้)</td></tr>
            <tr><td>how</td><td>manner</td><td>อย่างไร</td></tr>
            <tr><td>how old / how far</td><td>age / distance</td><td>อายุเท่าไหร่ / ไกลแค่ไหน</td></tr>
          </table>
          <div class="example"><em>How often</em> do you play tennis? Every week.<span class="ex-th">คุณเล่นเทนนิสบ่อยแค่ไหน? ทุกสัปดาห์</span></div>
          <div class="th-tip"><b>จุดสังเกต what vs which:</b> ใช้ what เมื่อตัวเลือกมีมากมายไม่จำกัด เช่น <i>What's your favourite sport?</i> (มีกีฬาให้เลือกเยอะมาก) ใช้ which เมื่อมีตัวเลือกจำกัดให้เลือก เช่น <i>Which dress do you want — the red one or the blue one?</i> (เลือกระหว่าง 2 ตัวเลือกที่กำหนดไว้)</div>
        `
      },
      {
        title: "Prepositions of Time & Place",
        body: `
          <div class="th-explain">
            <p>คำบุพบทบอกเวลา (Preposition of Time) ที่ใช้บ่อยที่สุดมี 3 ตัวคือ at, in, on ซึ่งแต่ละตัวใช้กับเวลาคนละแบบ:</p>
            <p>• <b>at</b> ใช้กับเวลานาฬิกาที่เจาะจง (at 5 o'clock), เทศกาล (at Christmas), และช่วงเวลากลางคืน/เที่ยง (at night, at noon)</p>
            <p>• <b>in</b> ใช้กับเดือน (in May), ปี (in 2024), ฤดูกาล (in summer), และช่วงเวลาของวัน (in the morning)</p>
            <p>• <b>on</b> ใช้กับวันในสัปดาห์ (on Monday) และวันที่ (on 21st May)</p>
          </div>
          <p><b>at</b> a time/holiday/night • <b>in</b> months/years/seasons/parts of the day • <b>on</b> days/dates.</p>
          <div class="example"><em>at</em> 5 o'clock, <em>in</em> August, <em>on</em> Sunday, <em>on</em> 21st May<span class="ex-th">ตอน 5 โมง / ในเดือนสิงหาคม / วันอาทิตย์ / วันที่ 21 พฤษภาคม</span></div>
          <p>Not used before today, tomorrow, yesterday, tonight, this/last/next/every/some/each/one/any.</p>
          <div class="th-tip">ห้ามใช้คำบุพบทเวลาหน้าคำว่า today, tomorrow, yesterday, tonight และหน้าคำว่า this, last, next, every, all, some, each, one, any เช่น พูดว่า <i>I'll see you tomorrow.</i> ไม่ใช่ <i>I'll see you on tomorrow.</i></div>
          <div class="th-explain">
            <p>ส่วนคำบุพบทบอกสถานที่ (Preposition of Place) ใช้บอกตำแหน่งของสิ่งของ: in=ใน, at=ที่(จุดหนึ่ง), on=บน, under=ใต้, opposite=ตรงข้ามกับ, between=ระหว่าง(2สิ่ง), among=ท่ามกลาง(3สิ่งขึ้นไป), next to/beside=ข้างๆ, behind=ข้างหลัง, in front of=ข้างหน้า, near=ใกล้กับ</p>
          </div>
          <p><b>Place:</b> in, at, on, under, opposite, between (2 things), among (3+), next to/beside, behind, in front of, near.</p>
          <div class="example">Brad is <em>between</em> two trees. Brad is <em>among</em> the trees.<span class="ex-th">แบรดอยู่ระหว่างต้นไม้สองต้น — แบรดอยู่ท่ามกลางต้นไม้หลายต้น</span></div>
        `
      },
      {
        title: "Countable / Uncountable Nouns & Quantifiers",
        body: `
          <div class="th-explain">
            <p>คำนามในภาษาอังกฤษแบ่งเป็น 2 ประเภท:</p>
            <p>• <b>นามนับได้ (Countable)</b> คือสิ่งที่นับเป็นชิ้นเป็นอันได้ มีทั้งรูปเอกพจน์และพหูพจน์ เช่น a car (รถหนึ่งคัน), two cars (รถสองคัน)</p>
            <p>• <b>นามนับไม่ได้ (Uncountable)</b> คือสิ่งที่นับเป็นชิ้นไม่ได้ เช่น ของเหลว ผง หรือสิ่งที่เป็นนามธรรม (water, rice, sugar, money) นามกลุ่มนี้มีรูปเดียวและใช้กับกริยาเอกพจน์เสมอ ห้ามเติม s</p>
          </div>
          <p><b>Countable</b> nouns have singular & plural forms (a car, two cars). <b>Uncountable</b> nouns only have one form (butter, rice, milk).</p>
          <div class="example">Is there <em>a</em> carrot? Are there <em>any</em> carrots? Is there <em>any</em> carrot juice?<span class="ex-th">มีแครอทไหม(1หัว)? มีแครอทไหม(หลายหัว)? มีน้ำแครอทไหม?</span></div>
          <div class="th-explain">
            <p><b>much/many/a little/little/a few/few</b> — many ใช้กับนามนับได้พหูพจน์ (many books), much ใช้กับนามนับไม่ได้ (much water) ส่วนใหญ่ใช้ในประโยคปฏิเสธและคำถาม, a few/few ใช้กับนามนับได้พหูพจน์ (a few=มีอยู่บ้าง, few=มีน้อยมากจนแทบไม่พอ), a little/little ใช้กับนามนับไม่ได้ (a little=มีอยู่นิดหน่อย, little=มีน้อยมากจนแทบไม่พอ)</p>
          </div>
          <p>Use <b>much</b> / <b>a little</b> / <b>little</b> with uncountable nouns, and <b>many</b> / <b>a few</b> / <b>few</b> with plural countable nouns.</p>
          <div class="example">There's only <em>a little</em> milk left. Are there <em>a few</em> nuts? Yes.<span class="ex-th">เหลือนมอยู่นิดหน่อย — มีถั่วอยู่บ้างไหม? มีค่ะ</span></div>
          <p>Quantity phrases: a bottle / cup / kilo / piece / slice / carton + <b>of</b>.</p>
          <div class="th-tip"><b>จุดสังเกต:</b> "a few / a little" ให้ความรู้สึกเชิงบวก (มีอยู่บ้าง พอมี) ส่วน "few / little" (ไม่มี a) ให้ความรู้สึกเชิงลบ (มีน้อยเกินไป แทบไม่พอ) เช่น <i>I have a few friends.</i> (ฉันมีเพื่อนอยู่บ้าง) เทียบกับ <i>I have few friends.</i> (ฉันแทบไม่มีเพื่อนเลย) — ความหมายต่างกันมาก ระวังให้ดี!</div>
        `
      },
    ]
  },
  unit1: {
    label: "Unit 1: Lifestyles",
    topics: [
      {
        title: "Present Simple vs Present Continuous",
        body: `
          <div class="th-explain">
            <p>Present Simple กับ Present Continuous ทั้งคู่พูดถึง "ปัจจุบัน" เหมือนกัน แต่ใช้ในสถานการณ์ต่างกัน:</p>
            <p>• <b>Present Simple</b> ใช้กับสิ่งที่ทำเป็นประจำ กิจวัตร หรือความจริงถาวร คำสัญญาณที่มักเจอ: always, usually, every day, on Mondays</p>
            <p>• <b>Present Continuous</b> (is/am/are + กริยาเติม -ing) ใช้กับสิ่งที่กำลังเกิดขึ้น "ขณะนี้" หรือ "ช่วงนี้" คำสัญญาณที่มักเจอ: now, at the moment, these days, tonight</p>
            <p>ตัวอย่างเทียบกัน: <i>Jane works as a secretary.</i> (เจนทำงานเป็นเลขาฯ — นี่คืออาชีพที่ทำเป็นประจำ) เทียบกับ <i>Right now, she is talking on the phone.</i> (ตอนนี้เธอกำลังคุยโทรศัพท์อยู่ — เหตุการณ์ที่กำลังเกิดขึ้น ณ ขณะพูด)</p>
          </div>
          <p><b>Present simple</b> — habits, routines, permanent facts. Time words: always, usually, every day, on Mondays.</p>
          <p><b>Present continuous</b> (am/is/are + -ing) — actions happening now or around now. Time words: now, at the moment, these days, tonight.</p>
          <div class="example">Jane <em>works</em> as a secretary. Right now, she <em>is talking</em> on the phone.<span class="ex-th">เจนทำงานเป็นเลขาฯ ตอนนี้เธอกำลังคุยโทรศัพท์อยู่</span></div>
          <p>Spelling -ing: drop silent -e (move→moving); double the consonant after one stressed vowel (run→running); -ie → -y (lie→lying).</p>
          <div class="th-tip"><b>กฎการเติม -ing:</b> กริยาที่ลงท้ายด้วย e ที่ไม่ออกเสียง ให้ตัด e ทิ้งก่อนเติม -ing (move→moving) กริยาพยางค์เดียวที่ลงท้ายด้วยสระตัวเดียว+พยัญชนะตัวเดียว ให้เติมพยัญชนะซ้ำก่อนเติม -ing (run→running, stop→stopping) กริยาที่ลงท้ายด้วย -ie ให้เปลี่ยนเป็น -y แล้วเติม -ing (lie→lying)</div>
        `
      },
      {
        title: "Comparative & Superlative Adjectives",
        body: `
          <div class="th-explain">
            <p>เมื่อต้องการเปรียบเทียบคุณสมบัติของคน สัตว์ หรือสิ่งของ เราใช้ <b>ขั้นกว่า (Comparative)</b> เมื่อเปรียบเทียบ 2 สิ่ง และ <b>ขั้นสุด (Superlative)</b> เมื่อเปรียบเทียบตั้งแต่ 3 สิ่งขึ้นไปในกลุ่มเดียวกัน</p>
            <p>กฎการเติม: คำคุณศัพท์พยางค์เดียว เติม -er สำหรับขั้นกว่า และ the...-est สำหรับขั้นสุด (tall→taller→the tallest) — คำที่ลงท้ายด้วย -y เปลี่ยน y เป็น i แล้วเติม -er/-est (busy→busier→the busiest) — คำยาว (2 พยางค์ขึ้นไปส่วนใหญ่) ใช้ more/the most วางหน้า (interesting→more interesting→the most interesting) — คำที่ไม่ตามกฎ (irregular) ต้องท่องจำ (good→better→the best, bad→worse→the worst)</p>
          </div>
          <table>
            <tr><th>Type</th><th>Comparative</th><th>Superlative</th></tr>
            <tr><td>short (1 syll.)</td><td>+er (tall→taller)</td><td>the +est (the tallest)</td></tr>
            <tr><td>ending in -y</td><td>-ier (busy→busier)</td><td>the -iest (the busiest)</td></tr>
            <tr><td>long (2+ syll.)</td><td>more + adj</td><td>the most + adj</td></tr>
            <tr><td>irregular</td><td>better / worse</td><td>the best / the worst</td></tr>
          </table>
          <div class="example">Josh is <em>shorter than</em> his brother. Tokyo is <em>the largest</em> city <em>in</em> the world.<span class="ex-th">จอชตัวเตี้ยกว่าน้องชายของเขา โตเกียวเป็นเมืองที่ใหญ่ที่สุดในโลก</span></div>
          <div class="th-tip"><b>การใช้งาน:</b> ขั้นกว่ามักใช้คู่กับคำว่า than (แปลว่า "กว่า") ส่วนขั้นสุดมักใช้คู่กับ the และตามด้วย of/in — สังเกตว่าใช้ <i>in</i> กับสถานที่ (the largest city <b>in</b> the world) ไม่ใช่ of</div>
        `
      },
      {
        title: "Too — Enough",
        body: `
          <div class="th-explain">
            <p>too และ enough ทั้งคู่วางคู่กับคำคุณศัพท์ (adjective) หรือกริยาวิเศษณ์ (adverb) แต่ให้ความหมายตรงข้ามกัน:</p>
            <p>• <b>too</b> แปลว่า "มากเกินไป" ความหมายเชิงลบ คือมากกว่าที่ต้องการหรือจำเป็น วางไว้ <b>หน้า</b> คำคุณศัพท์/กริยาวิเศษณ์ เช่น <i>The coffee is too hot to drink.</i> (กาแฟร้อนเกินไปจนดื่มไม่ได้)</p>
            <p>• <b>enough</b> แปลว่า "พอเพียง/มากพอ" ความหมายเชิงบวก วางไว้ <b>หลัง</b> คำคุณศัพท์/กริยาวิเศษณ์ แต่ถ้าใช้กับคำนามให้วางไว้ <b>หน้า</b> คำนาม เช่น <i>She is old enough to drive.</i> (เธอโตพอที่จะขับรถได้แล้ว) และ <i>They have enough money to buy the flat.</i> (พวกเขามีเงินมากพอจะซื้อแฟลต)</p>
          </div>
          <p><b>too</b> + adjective/adverb (+ to-infinitive) = more than necessary (negative meaning).</p>
          <div class="example">The coffee is <em>too hot to</em> drink.<span class="ex-th">กาแฟร้อนเกินไปจนดื่มไม่ได้</span></div>
          <p><b>enough</b> comes after an adjective/adverb, or before a noun (+ to-infinitive) = as much as needed (positive meaning).</p>
          <div class="example">She is <em>old enough to</em> drive. They have <em>enough money to</em> buy the flat.<span class="ex-th">เธอโตพอที่จะขับรถได้แล้ว พวกเขามีเงินมากพอจะซื้อแฟลต</span></div>
          <div class="th-tip"><b>จุดสังเกตตำแหน่ง:</b> too อยู่<b>หน้า</b>คำคุณศัพท์เสมอ (too + adj) ส่วน enough อยู่<b>หลัง</b>คำคุณศัพท์เสมอ (adj + enough) แต่ถ้า enough อยู่คู่กับคำนามจะสลับมาอยู่หน้าคำนามแทน (enough + noun) — ห้ามสับสนตำแหน่งเด็ดขาดเพราะเป็นจุดที่ข้อสอบชอบออก!</div>
        `
      },
    ]
  },
  unit2: {
    label: "Unit 2: Believe It or Not",
    topics: [
      {
        title: "Past Simple vs Past Continuous",
        body: `
          <div class="th-explain">
            <p>Past Simple กับ Past Continuous ทั้งคู่พูดถึงเหตุการณ์ใน "อดีต" แต่ให้ความรู้สึกต่างกัน:</p>
            <p>• <b>Past Simple</b> ใช้กับเหตุการณ์ที่เกิดขึ้นและจบลงแล้วในอดีต เป็นเหตุการณ์สั้นๆ ที่ทำแล้วเสร็จ คำสัญญาณที่มักเจอ: yesterday, last week, two days ago, in 2003</p>
            <p>• <b>Past Continuous</b> (was/were + กริยาเติม -ing) ใช้กับเหตุการณ์ที่กำลังดำเนินอยู่ ณ ช่วงเวลาหนึ่งในอดีต มักใช้คู่กับเหตุการณ์สั้นๆ ที่แทรกเข้ามาขัดจังหวะ คำสัญญาณที่มักเจอ: while, when, as, all day</p>
            <p>รูปแบบที่ใช้บ่อยมาก: Past Continuous (เหตุการณ์ที่กำลังดำเนินอยู่) + Past Simple (เหตุการณ์สั้นๆ ที่แทรกเข้ามา) เช่น <i>As John was walking to school yesterday, he slipped and sprained his ankle.</i> — สังเกตว่า "was walking" คือเหตุการณ์ที่กำลังทำอยู่ ส่วน "slipped" คือเหตุการณ์สั้นๆ ที่แทรกขึ้นมาขัดจังหวะ</p>
          </div>
          <p><b>Past simple</b> — a completed action in the past. Time words: yesterday, last week, two days ago, in 2003.</p>
          <p><b>Past continuous</b> (was/were + -ing) — an action in progress at a point in the past, often interrupted. Time words: while, when, as, all day.</p>
          <div class="example">As John <em>was walking</em> to school, he <em>slipped</em> and sprained his ankle.<span class="ex-th">ขณะที่จอห์นกำลังเดินไปโรงเรียน เขาลื่นล้มและข้อเท้าแพลง</span></div>
          <p>Spelling -ed: verbs ending -e → +d (move→moved); consonant+y → -ied (try→tried); one stressed vowel between two consonants → double the consonant (stop→stopped).</p>
          <div class="th-tip"><b>กฎการเติม -ed:</b> กริยาที่ลงท้ายด้วย e ให้เติม d เฉยๆ (move→moved) กริยาที่ลงท้ายด้วยพยัญชนะ+y ให้เปลี่ยน y เป็น i แล้วเติม ed (try→tried) กริยาพยางค์เดียวที่มีสระตัวเดียวระหว่างพยัญชนะสองตัว ให้เติมพยัญชนะซ้ำก่อนเติม ed (stop→stopped)</div>
        `
      },
    ]
  },
};

/* ---------------------------------------------------------------
   3) READING passages (full text + glossary + comprehension bank)
   --------------------------------------------------------------- */
const READING = [
  {
    id: "extreme-jobs",
    unitKey: "unit1",
    title: "Extreme Jobs, Extreme Looks",
    unit: "Unit 1 — Reading",
    glossary: ["earn a living","stand still","sideshow performer","tattoo","pointed teeth","forked tongue","audience","dressing room","mime","swing","double","extend","tolerant"],
    text: [
      "Some people do the strangest things to earn a living, particularly in the world of entertainment. Some go to extreme lengths to look like the character they play. So what is it like \u2018playing\u2019 for a living?",
      "A  Christina Clarkson is not an ordinary actress. This is because, when she is not working in the theatre, she is standing as still as a statue on a busy street. It takes about 90 minutes for Christina to cover her skin with body paint to become a living statue.",
      "B  Eric Sprague is a sideshow performer. He has green tattoos all over his body to look like a lizard. He also has pointed teeth and a forked tongue. The Lizardman, as they call him, performs all over the world and shocks audiences with his appearance.",
      "C  When Joe Atkins arrives at work, he goes to the dressing room to change into his work clothes. For the next eight hours he wears a furry costume and a huge heavy mask over his head. Joe is the Disney character Pluto, and he works at Disney World in Florida. Before he leaves the dressing room, he says \u201CHave a nice day\u201D to the other characters. He knows that he cannot speak to anyone later because Disney characters must not speak to the visitors and they have to be good at mime. Joe then makes his way to Caf\u00e9 Mickey to welcome the visitors. He walks slowly and carefully and doesn't swing his arms or legs. He must be careful and remember that his \u2018body\u2019 is at least double his normal size.",
      "One little girl looks frightened so Pluto doesn't get too close. Joe slowly extends his hand to her parents so the little girl can see that he is friendly. One of the most important qualities for people working as a Disney character is to be patient and extremely tolerant. Very soon the little girl is smiling and enjoying breakfast with her new furry friend."
    ],
    translations: [
      "บางคนทำอาชีพที่แปลกประหลาดมากเพื่อหาเลี้ยงชีพ โดยเฉพาะในวงการบันเทิง บางคนถึงขั้นทำทุกอย่างเพื่อให้ดูเหมือนตัวละครที่ตนเองรับบท แล้วการ \u2018สวมบทบาท\u2019 เพื่อเลี้ยงชีพนั้นเป็นอย่างไรกันบ้าง?",
      "คริสติน่า คลาร์กสัน ไม่ใช่นักแสดงธรรมดา เพราะเมื่อเธอไม่ได้แสดงละครเวที เธอจะยืนนิ่งเหมือนรูปปั้นอยู่บนถนนที่พลุกพล่าน คริสติน่าต้องใช้เวลาประมาณ 90 นาทีในการทาสีตัวเองทั่วร่างกายเพื่อกลายเป็น \u2018รูปปั้นมีชีวิต\u2019",
      "เอริค สเปร็ก เป็นนักแสดงโชว์พิเศษข้างเวที เขาสักลายสีเขียวทั่วร่างกายให้ดูเหมือนกิ้งก่า อีกทั้งยังมีฟันแหลมและลิ้นแฉกเหมือนงู เขาถูกเรียกว่า \u2018มนุษย์กิ้งก่า\u2019 และไปแสดงทั่วโลก สร้างความตกตะลึงให้ผู้ชมด้วยรูปลักษณ์ของเขา",
      "เมื่อโจ แอตกินส์มาถึงที่ทำงาน เขาจะเข้าห้องแต่งตัวเพื่อเปลี่ยนเป็นชุดทำงาน ตลอดแปดชั่วโมงต่อจากนั้นเขาต้องสวมชุดขนฟูและหน้ากากขนาดใหญ่ที่หนักอึ้งครอบศีรษะ โจรับบทเป็นพลูโต ตัวการ์ตูนของดิสนีย์ และทำงานอยู่ที่ดิสนีย์เวิลด์ในรัฐฟลอริดา ก่อนออกจากห้องแต่งตัว เขาจะพูดว่า \u2018ขอให้มีความสุขนะ\u2019 กับตัวละครตัวอื่นๆ เพราะเขารู้ว่าหลังจากนี้จะพูดกับใครไม่ได้อีกเลย เนื่องจากตัวละครของดิสนีย์ห้ามพูดคุยกับนักท่องเที่ยว ต้องใช้ท่าทางสื่อสารแทน (mime) ให้เก่ง จากนั้นโจจะเดินไปที่คาเฟ่มิกกี้เพื่อต้อนรับนักท่องเที่ยว เขาต้องเดินช้าๆ และระมัดระวัง ไม่แกว่งแขนหรือขา และต้องจำไว้เสมอว่า \u2018ร่างกาย\u2019 ของเขาตอนนี้ใหญ่กว่าปกติอย่างน้อยสองเท่า",
      "มีเด็กหญิงตัวเล็กๆ คนหนึ่งดูตกใจกลัว พลูโตจึงไม่เข้าไปใกล้เกินไป โจค่อยๆ ยื่นมือไปหาพ่อแม่ของเธอ เพื่อให้เด็กหญิงเห็นว่าเขาเป็นมิตร คุณสมบัติที่สำคัญที่สุดอย่างหนึ่งสำหรับคนที่รับบทตัวละครของดิสนีย์คือ ต้องใจเย็นและอดทนอย่างมาก ในไม่ช้าเด็กหญิงก็ยิ้มและสนุกกับมื้อเช้าร่วมกับเพื่อนขนฟูตัวใหม่ของเธอ"
    ]
  },
  {
    id: "lightning",
    unitKey: "unit2",
    title: "When Lightning Loves You",
    unit: "Unit 2 — Reading",
    glossary: ["forest ranger","remarkable","eyebrow","occur","dump","record","survive","cool off","set on fire","lightning bolt","toe","knock unconscious","severe burn","fortunate"],
    text: [
      "Roy Sullivan was a forest ranger in Virginia, USA. He is in the Guinness Book of World Records for a remarkable record. Between 1942 and 1977, Roy survived seven lightning strikes. His nickname was The Human Lightning Rod.",
      "The first lightning strike was in 1942 as he was working up a tree. On that day, he lost the nail from his big toe. The second strike happened while he was driving on a mountain road. It knocked him unconscious and burned his eyebrows off. The third strike occurred when he was in his front garden and it left him with a damaged shoulder. The fourth strike took place in 1972 while he was in a ranger station. It burned off his hair.",
      "Roy dumped a bucket of water over his head to cool off. A year later another lightning strike hit him on the head and set his hair on fire again. The sixth strike happened in 1976 while Roy was at a campsite. Roy tried to run away from a cloud which was moving in his direction. This time the strike hurt his ankle. The last lightning bolt hit him while he was fishing, and it sent him to hospital with severe burns to the chest and stomach.",
      "Roy Sullivan was a very fortunate man. The chance of lightning striking a person just once is only one in 600,000. This chance came his way seven times and each time he survived. That's what you call luck!"
    ],
    translations: [
      "รอย ซัลลิแวน เป็นเจ้าหน้าที่พิทักษ์ป่าในรัฐเวอร์จิเนีย ประเทศสหรัฐอเมริกา เขามีชื่ออยู่ในกินเนสส์บุ๊คจากสถิติที่น่าทึ่ง นั่นคือระหว่างปี 1942 ถึง 1977 รอยรอดชีวิตจากฟ้าผ่าถึง 7 ครั้ง เขาจึงได้รับฉายาว่า \u2018สายล่อฟ้ามนุษย์\u2019",
      "ฟ้าผ่าครั้งแรกเกิดขึ้นในปี 1942 ขณะที่เขากำลังทำงานอยู่บนต้นไม้ วันนั้นเขาสูญเสียเล็บนิ้วหัวแม่เท้าไป ครั้งที่สองเกิดขึ้นขณะขับรถอยู่บนถนนภูเขา ทำให้เขาสลบและคิ้วไหม้เกรียม ครั้งที่สามเกิดขึ้นตอนที่เขาอยู่ในสวนหน้าบ้าน ทำให้ไหล่ของเขาได้รับบาดเจ็บ ครั้งที่สี่เกิดขึ้นในปี 1972 ขณะที่เขาอยู่ในสถานีพิทักษ์ป่า ทำให้ผมของเขาไหม้หมดศีรษะ",
      "รอยราดน้ำจากถังลงบนหัวเพื่อคลายร้อน หนึ่งปีต่อมา ฟ้าผ่าลงที่หัวของเขาอีกครั้งและทำให้ผมไฟลุกอีกรอบ ครั้งที่หกเกิดขึ้นในปี 1976 ขณะที่รอยอยู่ที่แคมป์ เขาพยายามวิ่งหนีก้อนเมฆที่เคลื่อนเข้ามาทางเขา ครั้งนี้ฟ้าผ่าทำให้ข้อเท้าของเขาบาดเจ็บ ฟ้าผ่าครั้งสุดท้ายเกิดขึ้นขณะที่เขากำลังตกปลา ทำให้เขาถูกนำส่งโรงพยาบาลด้วยแผลไฟไหม้รุนแรงที่หน้าอกและท้อง",
      "รอย ซัลลิแวนเป็นคนที่โชคดีมาก โอกาสที่คนคนหนึ่งจะถูกฟ้าผ่าเพียงครั้งเดียวมีเพียง 1 ใน 600,000 เท่านั้น แต่โอกาสนี้มาเยือนเขาถึงเจ็ดครั้ง และทุกครั้งเขาก็รอดชีวิตมาได้ นี่แหละคือสิ่งที่เรียกว่า \u2018โชค\u2019!"
    ]
  }
];

/* ---------------------------------------------------------------
   4) QUESTION BANK — for the practice Quiz (random draw) and
      the fixed Parallel Mock Exam. `correct` is the zero-based
      index into `options` — the quiz engine shuffles the options
      (and re-maps `correct`) fresh every time a question is shown,
      so answer letters are never predictable between attempts.
   --------------------------------------------------------------- */
const BANK = {

  vocabulary: [
    { unit:"unit1", topic:"Jobs", q:"Who designs the inside of houses and offices, choosing colours and furniture?", options:["interior decorator","graphic designer","tour guide","accountant"], correct:0, explain:"interior decorator แปลว่า \u201Cนักตกแต่งภายใน\u201D ตรงกับหน้าที่ในโจทย์คือเลือกสีและเฟอร์นิเจอร์ตกแต่งภายในบ้าน/สำนักงาน" },
    { unit:"unit1", topic:"Jobs", q:"A person who looks after people's money and helps them at the counter is a ______.", options:["bank clerk","heart surgeon","delivery boy","fighter pilot"], correct:0, explain:"bank clerk แปลว่า \u201Cพนักงานธนาคาร\u201D ทำหน้าที่ดูแลเงินและให้บริการลูกค้าที่เคาน์เตอร์ตามที่โจทย์บรรยาย" },
    { unit:"unit1", topic:"Jobs", q:"Someone who plans and leads trips for tourists is called a ______.", options:["tour guide","lifeguard","bus driver","dry cleaner"], correct:0, explain:"tour guide แปลว่า \u201Cไกด์นำเที่ยว\u201D คือคนที่วางแผนและนำนักท่องเที่ยวไปเที่ยว ตรงกับคำว่า plans and leads trips" },
    { unit:"unit1", topic:"Clothes", q:"A skirt that becomes wider at the bottom is called a ______ skirt.", options:["flared","tight-fitting","short-sleeved","loose-fitting"], correct:0, explain:"flared แปลว่า \u201Cบาน\u201D ใช้บรรยายกระโปรงที่บานออกกว้างขึ้นด้านล่าง ตรงกับ becomes wider at the bottom" },
    { unit:"unit1", topic:"Clothes", q:"A dress covered in small round spots is a ______ dress.", options:["polka-dot","tartan","flat","checked"], correct:0, explain:"polka-dot แปลว่า \u201Cลายจุด\u201D ตรงกับ small round spots ในโจทย์ ส่วน tartan คือลายสก็อต ไม่ใช่ลายจุด" },
    { unit:"unit1", topic:"Appearance", q:"If a man has hair growing on his upper lip, he has a ______.", options:["moustache","beard","fringe","wrinkle"], correct:0, explain:"moustache แปลว่า \u201Cหนวด\u201D คือขนที่ขึ้นเหนือริมฝีปากบน (upper lip) ส่วน beard คือเคราที่คาง ไม่ใช่ริมฝีปาก" },
    { unit:"unit1", topic:"Appearance", q:"Someone who is friendly and loves meeting new people is ______.", options:["outgoing","reserved","shy","rude"], correct:0, explain:"outgoing แปลว่า \u201Cเข้าสังคมเก่ง ร่าเริง\u201D ตรงข้ามกับ reserved/shy ที่แปลว่าเก็บตัว/ขี้อาย" },
    { unit:"unit1", topic:"Appearance", q:"Hair that falls in soft curves (not straight, not tightly curled) is ______.", options:["wavy","spiky","curly","straight"], correct:0, explain:"wavy แปลว่า \u201Cลอน\u201D คือผมที่เป็นคลื่นเบาๆ ไม่ตรงและไม่หยิกแน่นเท่า curly ตามที่โจทย์ระบุ" },
    { unit:"unit2", topic:"Natural phenomena", q:"A giant sea wave caused by an undersea earthquake is called a ______.", options:["tsunami","drought","avalanche","hurricane"], correct:0, explain:"tsunami คือคลื่นยักษ์ในทะเลที่เกิดจากแผ่นดินไหวใต้ทะเล ตรงกับคำอธิบายในโจทย์ทุกจุด" },
    { unit:"unit2", topic:"Natural phenomena", q:"Snow, ice and rock suddenly sliding down a mountain is a(n) ______.", options:["avalanche","tornado","flood","earthquake"], correct:0, explain:"avalanche คือหิมะ น้ำแข็ง และหินที่ถล่มลงมาจากภูเขาอย่างกะทันหัน ตรงกับ snow, ice and rock sliding down a mountain" },
    { unit:"unit2", topic:"Natural phenomena", q:"A spinning column of air that destroys everything in its path is a ______.", options:["tornado","drought","tsunami","lightning strike"], correct:0, explain:"tornado คือพายุหมุน (spinning column of air) ที่ทำลายทุกอย่างที่พัดผ่าน ตรงกับคำอธิบายในโจทย์" },
    { unit:"unit2", topic:"Injuries", q:"If you fall and hurt the joint between your foot and leg, you have ______.", options:["twisted your ankle","sprained your wrist","bruised your eye","broken your arm"], correct:0, explain:"ข้อต่อระหว่างเท้ากับขาคือ \u201Cข้อเท้า (ankle)\u201D เมื่อหกล้มแล้วบาดเจ็บตรงนี้ จึงใช้ twisted your ankle ไม่ใช่ wrist (ข้อมือ)" },
    { unit:"unit2", topic:"Injuries", q:"Grabbing a hot pan without gloves could make you ______.", options:["burn your hand","cut your leg","pull a muscle","hit your head"], correct:0, explain:"จับกระทะร้อนโดยตรงทำให้มือไหม้ จึงตรงกับ burn your hand (มือถูกลวก/ไหม้)" },
    { unit:"unit2", topic:"Injuries", q:"After exercising too hard without warming up, you might ______.", options:["pull a muscle","burn your hand","get sunburnt","lose your passport"], correct:0, explain:"ออกกำลังกายหนักโดยไม่วอร์มอัพมักทำให้กล้ามเนื้อยึดหรือฉีก ตรงกับ pull a muscle" },
    { unit:"unit2", topic:"Illness", q:"If your body is much hotter than normal, you have a ______.", options:["temperature","backache","toothache","rash"], correct:0, explain:"ในที่นี้ temperature หมายถึงอาการตัวร้อนกว่าปกติ/มีไข้ ตรงกับ much hotter than normal" },
    { unit:"unit2", topic:"Illness", q:"Sneezing, a blocked nose and feeling unwell for a few days usually mean you have a ______.", options:["cold","rash","backache","toothache"], correct:0, explain:"อาการจาม คัดจมูก ไม่สบายหลายวัน เป็นอาการของ cold (หวัด) โดยตรง" },
    { unit:"unit2", topic:"Illness", q:"An itchy red patch that appears on your skin is called a ______.", options:["rash","cough","sore throat","stomach ache"], correct:0, explain:"rash แปลว่า \u201Cผื่น\u201D คือตุ่มหรือปื้นแดงคันบนผิวหนัง ตรงกับ itchy red patch on your skin" },
    { unit:"unit3", topic:"Sports", q:"Riding a bicycle over rough mountain trails is called ______.", options:["mountain biking","snorkelling","canoeing","hang-gliding"], correct:0, explain:"mountain biking คือการปั่นจักรยานเสือภูเขาบนเส้นทางขรุขระ ตรงกับ riding a bicycle over rough mountain trails" },
    { unit:"unit3", topic:"Sports", q:"Flying through the air attached to a large fabric wing is called ______.", options:["hang-gliding","skydiving","bungee jumping","rock climbing"], correct:0, explain:"hang-gliding คือการร่อนโดยติดตัวกับปีกผ้าขนาดใหญ่ ตรงกับ large fabric wing ในโจทย์" },
    { unit:"unit3", topic:"Sports equipment", q:"Swimmers and skiers wear ______ to protect their eyes.", options:["goggles","gloves","pads","a helmet"], correct:0, explain:"goggles คือแว่นครอบตา ใช้ป้องกันดวงตาตามที่โจทย์ระบุ (to protect their eyes) ส่วนตัวเลือกอื่นไม่เกี่ยวกับดวงตา" },
    { unit:"unit3", topic:"Sports equipment", q:"A snowboarder rides standing on a ______.", options:["snowboard","paddle","racquet","bat"], correct:0, explain:"snowboard คือกระดานที่ใช้ยืนเล่นบนหิมะ ตรงกับคำว่า snowboarder และ rides standing on" },
    { unit:"unit3", topic:"Holiday problems", q:"\u201CThe airline says the next one leaves in two hours.\u201D Which problem is this?", options:["miss a flight","lose luggage","get a puncture","get sunburnt"], correct:0, explain:"คำว่า \u201Cthe next one leaves in two hours\u201D บอกใบ้ว่ากำลังพูดถึงเที่ยวบินถัดไป แสดงว่าตกเครื่องบินไปแล้ว (miss a flight)" },
    { unit:"unit3", topic:"Holiday problems", q:"If your car suddenly stops working during a trip, you would say the ______.", options:["car broke down","passport was lost","flight was missed","tyre got a puncture"], correct:0, explain:"รถหยุดทำงานกะทันหันระหว่างเดินทาง ตรงกับสำนวน car broke down (รถเสีย) โดยตรง" },
    { unit:"unit3", topic:"Holiday problems", q:"Spending too long in the sun without protection can make you ______.", options:["get sunburnt","get a puncture","lose your luggage","miss a flight"], correct:0, explain:"อยู่กลางแดดนานเกินไปโดยไม่ป้องกันทำให้ผิวไหม้ ตรงกับ get sunburnt" },
  ],

  grammar: [
    { unit:"starter", topic:"Pronouns", q:"This is Mrs Owen. ______ car is parked outside.", options:["Her","She","Hers","Herself"], correct:0, explain:"ต้องใช้ possessive determiner หน้าคำนาม car จึงใช้ Her (ของเธอ) ไม่ใช่ She (subject) หรือ Hers (possessive pronoun ที่ต้องไม่มีนามตามหลัง)" },
    { unit:"starter", topic:"Pronouns", q:"These shoes aren't mine — they're ______.", options:["his","him","he","he's"], correct:0, explain:"หลัง they're ไม่มีคำนามตามหลัง ต้องใช้ possessive pronoun ที่แทนคำนามได้เลย จึงใช้ his (ของเขา)" },
    { unit:"starter", topic:"Pronouns", q:"Look at those birds! Can you see ______ flying over the lake?", options:["them","they","their","theirs"], correct:0, explain:"ตามหลังกริยา see ต้องใช้ object pronoun (กรรม) แทนคำว่า birds จึงใช้ them ไม่ใช่ they (subject)" },
    { unit:"starter", topic:"Pronouns", q:"A: Is that your bag?  B: Yes, it's ______.", options:["mine","my","I","me"], correct:0, explain:"หลัง it's ไม่มีคำนามตามหลัง ต้องใช้ possessive pronoun (mine) ไม่ใช่ my ซึ่งต้องมีคำนามตามหลังเสมอ" },
    { unit:"starter", topic:"Have got", q:"______ Andy got a bicycle?  Yes, he has.", options:["Has","Does","Is","Do"], correct:0, explain:"ประธาน Andy เป็นเอกพจน์บุรุษที่ 3 (he) ประโยคคำถามกับ have got ต้องใช้ Has นำหน้า ไม่ใช่ Does/Do/Is" },
    { unit:"starter", topic:"Have got", q:"Sarah and Ben ______ got two dogs and a cat at home.", options:["have","has","is","are"], correct:0, explain:"Sarah and Ben เป็นประธานพหูพจน์ (=they) จึงใช้ have got ไม่ใช่ has got ซึ่งใช้กับ he/she/it เท่านั้น" },
    { unit:"starter", topic:"Can", q:"My brother ______ swim, but he can't ride a bike yet.", options:["can","cans","is can","does can"], correct:0, explain:"can ใช้รูปเดียวกันทุกประธาน ไม่ผันตามประธานและไม่เติม s ตามด้วยกริยาช่องที่ 1 (swim) เสมอ" },
    { unit:"starter", topic:"Can", q:"______ you speak French?  No, I can't.", options:["Can","Do","Are","Have"], correct:0, explain:"คำตอบ No, I can't บ่งชี้ว่าคำถามต้องใช้ can นำหน้าประธานเพื่อถามความสามารถ" },
    { unit:"starter", topic:"Present simple", q:"Water ______ at 100 degrees Celsius.", options:["boils","boil","is boiling","boiled"], correct:0, explain:"Water เป็นประธานเอกพจน์ (เทียบเท่า it) และประโยคพูดถึงข้อเท็จจริงทั่วไป (present simple) กริยาจึงต้องเติม s เป็น boils" },
    { unit:"starter", topic:"Present simple", q:"My sister ______ to school by bicycle every morning.", options:["goes","go","going","is going"], correct:0, explain:"ประธาน sister เป็นเอกพจน์บุรุษที่ 3 และมีคำว่า every morning บ่งบอกกิจวัตร (present simple) กริยาจึงต้องเติม s เป็น goes" },
    { unit:"starter", topic:"Adverbs of frequency", q:"Peter is never late; he ______ arrives on time.", options:["always","never","sometimes","rarely"], correct:0, explain:"ประโยคแรกบอกว่า \u201Cไม่เคยสาย\u201D ซึ่งหมายถึงมาตรงเวลาทุกครั้ง (100%) จึงต้องใช้ always ไม่ใช่ never ซึ่งจะทำให้ความหมายขัดกัน" },
    { unit:"starter", topic:"Adverbs of frequency", q:"Choose the sentence with the correct word order.", options:["My mum usually cooks dinner on Fridays.","My mum cooks usually dinner on Fridays.","Usually my mum dinner cooks on Fridays.","My mum dinner usually cooks on Fridays."], correct:0, explain:"adverb of frequency (usually) ต้องวางหน้ากริยาหลัก (cooks) คือ mum + usually + cooks ไม่ใช่วางแทรกกลางหรือหลังกรรม" },
    { unit:"starter", topic:"Question words", q:"\u201C______ is that man over there?\u201D  \u201CHe's my uncle.\u201D", options:["Who","What","Which","Whose"], correct:0, explain:"คำตอบ He's my uncle บอกถึงตัวบุคคล จึงต้องถามด้วย Who (ใคร) ไม่ใช่ What/Which ที่ถามสิ่งของ" },
    { unit:"starter", topic:"Question words", q:"\u201C______ does it take to get to the airport?\u201D  \u201CAbout 40 minutes.\u201D", options:["How long","How many","How much","How often"], correct:0, explain:"คำตอบ About 40 minutes บอกระยะเวลา จึงต้องถามด้วย How long (นานแค่ไหน)" },
    { unit:"starter", topic:"Prepositions of time", q:"The shop closes ______ 9 p.m. every night.", options:["at","on","in","by"], correct:0, explain:"ใช้ at กับเวลานาฬิกาที่เจาะจง เช่น at 9 p.m. ตามกฎ preposition of time" },
    { unit:"starter", topic:"Prepositions of time", q:"My birthday party is ______ Saturday afternoon.", options:["on","at","in","to"], correct:0, explain:"ใช้ on กับวันในสัปดาห์ (Saturday) แม้จะตามด้วยช่วงเวลาของวัน (afternoon) ก็ยังใช้ on เพราะเน้นที่วัน" },
    { unit:"starter", topic:"Prepositions of place", q:"The cat is hiding ______ the sofa; I can only see its tail.", options:["under","among","between","opposite"], correct:0, explain:"แมวซ่อนจนมองเห็นแค่หาง แสดงว่าอยู่ \u201Cใต้\u201D โซฟา ตรงกับ under ไม่ใช่ between/among ที่ใช้กับการอยู่ระหว่าง/ท่ามกลางสิ่งของหลายชิ้น" },
    { unit:"starter", topic:"Prepositions of place", q:"There's a small park ______ my house and the school.", options:["between","among","near","at"], correct:0, explain:"สวนอยู่ตรงกลางระหว่าง 2 สถานที่ (บ้านกับโรงเรียน) ใช้ between เพราะมีของอ้างอิงแค่ 2 สิ่ง ส่วน among ใช้กับ 3 สิ่งขึ้นไป" },
    { unit:"starter", topic:"Countable/Uncountable", q:"Choose the correct sentence.", options:["There isn't any sugar left.","There isn't a sugar left.","There aren't any sugar left.","There isn't some sugar left."], correct:0, explain:"sugar เป็นนามนับไม่ได้ ประโยคปฏิเสธนามนับไม่ได้ใช้ isn't + any (ไม่ใช่ a หรือ aren't ซึ่งใช้กับนามนับได้พหูพจน์)" },
    { unit:"starter", topic:"Quantifiers", q:"How ______ water do we need for the recipe?", options:["much","many","a few","few"], correct:0, explain:"water เป็นนามนับไม่ได้ คำถามปริมาณของนามนับไม่ได้ต้องใช้ How much ไม่ใช่ How many ซึ่งใช้กับนามนับได้" },
    { unit:"unit1", topic:"Present simple vs continuous", q:"Look! The children ______ football in the garden right now.", options:["are playing","play","plays","played"], correct:0, explain:"มีคำว่า right now บ่งบอกเหตุการณ์กำลังเกิดขึ้นขณะพูด จึงต้องใช้ present continuous (are playing) ไม่ใช่ present simple" },
    { unit:"unit1", topic:"Present simple vs continuous", q:"We usually ______ TV in the evening, but tonight we're reading instead.", options:["watch","are watching","watched","watches"], correct:0, explain:"คำว่า usually บ่งบอกกิจวัตรปกติ จึงใช้ present simple (watch) ส่วน tonight we're reading เป็นข้อยกเว้นของคืนนี้เท่านั้น" },
    { unit:"unit1", topic:"Comparative/Superlative", q:"This bag is ______ than that one.", options:["cheaper","cheap","the cheapest","more cheap"], correct:0, explain:"มีคำว่า than แสดงการเปรียบเทียบ 2 สิ่ง ต้องใช้ขั้นกว่า (comparative) ของคำสั้นคือเติม -er เป็น cheaper" },
    { unit:"unit1", topic:"Comparative/Superlative", q:"Everest is ______ mountain in the world.", options:["the highest","higher","high","more high"], correct:0, explain:"เปรียบเทียบเอเวอเรสต์กับภูเขาทุกลูกในโลก (in the world) เป็นการเปรียบเทียบขั้นสุด (superlative) จึงใช้ the highest" },
    { unit:"unit1", topic:"Too/Enough", q:"This box is ______ heavy for me to lift alone.", options:["too","enough","so","very"], correct:0, explain:"ความหมายเชิงลบ \u201Cหนักเกินไปจนยกคนเดียวไม่ไหว\u201D ต้องใช้ too วางหน้าคำคุณศัพท์ (too heavy)" },
    { unit:"unit1", topic:"Too/Enough", q:"She's old ______ to look after her little brother now.", options:["enough","too","so","very"], correct:0, explain:"ความหมายเชิงบวก \u201Cโตพอที่จะดูแลน้องได้แล้ว\u201D ต้องใช้ enough วางหลังคำคุณศัพท์ (old enough)" },
    { unit:"unit2", topic:"Past simple vs continuous", q:"While the family ______ dinner, the lights suddenly went out.", options:["was eating","ate","eat","eats"], correct:0, explain:"เหตุการณ์ \u201Cกำลังกินข้าว\u201D เป็นเหตุการณ์ที่กำลังดำเนินอยู่และถูกขัดจังหวะโดยเหตุการณ์สั้น (ไฟดับ) จึงใช้ past continuous (was eating)" },
    { unit:"unit2", topic:"Past simple vs continuous", q:"The phone ______ while I was having a shower.", options:["rang","was ringing","rings","ring"], correct:0, explain:"เสียงโทรศัพท์ดังเป็นเหตุการณ์สั้นที่แทรกเข้ามาขณะที่กำลังอาบน้ำ (was having) จึงใช้ past simple (rang)" },
  ],

  reading: [
    { readingId:"extreme-jobs", q:"What does Christina Clarkson do when she isn't working in the theatre?", options:["She stands still on a street dressed as a statue.","She teaches acting classes.","She designs costumes.","She paints portraits."], correct:0, explain:"เนื้อเรื่องระบุตรงๆ ว่า \u201Cshe is standing as still as a statue on a busy street\u201D จึงตอบว่าเธอยืนนิ่งเหมือนรูปปั้นบนถนน" },
    { readingId:"extreme-jobs", q:"What covers Eric Sprague's body to make him look like a lizard?", options:["Green tattoos","A furry costume","Body paint","A rubber suit"], correct:0, explain:"เนื้อเรื่องระบุว่า \u201CHe has green tattoos all over his body to look like a lizard\u201D จึงตอบว่ารอยสักสีเขียว" },
    { readingId:"extreme-jobs", q:"What is Eric Sprague's nickname?", options:["The Lizardman","The Human Statue","Pluto","The Stone Man"], correct:0, explain:"เนื้อเรื่องระบุว่า \u201CThe Lizardman, as they call him\u201D จึงตอบว่า The Lizardman (Pluto เป็นฉายาของ Joe ไม่ใช่ Eric)" },
    { readingId:"extreme-jobs", q:"Where does Joe Atkins work as Pluto?", options:["Disney World in Florida","A circus in Las Vegas","A theatre in New York","A street in London"], correct:0, explain:"เนื้อเรื่องระบุว่า \u201Che works at Disney World in Florida\u201D จึงตอบตามนี้โดยตรง" },
    { readingId:"extreme-jobs", q:"What must Joe do instead of speaking while he is working as Pluto?", options:["Mime","Sing","Whisper","Write notes"], correct:0, explain:"เนื้อเรื่องระบุว่า \u201Cthey have to be good at mime\u201D เพราะตัวละครดิสนีย์ห้ามพูดกับนักท่องเที่ยว จึงต้องใช้ท่าทางแทน" },
    { readingId:"extreme-jobs", q:"Why does Joe move slowly and carefully at work?", options:["Because his costume makes his body seem double its normal size.","Because he is tired.","Because the floor is slippery.","Because he is very old."], correct:0, explain:"เนื้อเรื่องระบุว่า \u201Che must be careful and remember that his \u2018body\u2019 is at least double his normal size\u201D จึงต้องเดินช้าและระวัง" },
    { readingId:"extreme-jobs", q:"What does Joe do to show the frightened little girl that he is friendly?", options:["He slowly extends his hand to her parents.","He removes his mask.","He gives her a gift.","He sits down next to her."], correct:0, explain:"เนื้อเรื่องระบุว่า \u201CJoe slowly extends his hand to her parents\u201D เพื่อให้เด็กเห็นว่าเขาเป็นมิตร" },
    { readingId:"extreme-jobs", q:"All three entertainers in the passage have jobs that involve ______.", options:["changing or hiding their normal appearance for work","travelling to a different country every day","working only at night","studying at university"], correct:0, explain:"ทั้งสามคนต้องเปลี่ยนรูปลักษณ์ตัวเอง — ทาสีเป็นรูปปั้น สักลายเป็นกิ้งก่า และใส่ชุด/หน้ากากพลูโต จึงสรุปได้ว่าเป็นอาชีพที่ต้องเปลี่ยน/ปกปิดรูปลักษณ์ปกติ" },
    { readingId:"lightning", q:"Where did Roy Sullivan work?", options:["As a forest ranger in Virginia","As a lifeguard in Florida","As a pilot in Texas","As a sailor at sea"], correct:0, explain:"เนื้อเรื่องขึ้นต้นว่า \u201CRoy Sullivan was a forest ranger in Virginia, USA\u201D จึงตอบตามนี้โดยตรง" },
    { readingId:"lightning", q:"What record is Roy Sullivan famous for?", options:["Surviving seven lightning strikes","Climbing the highest mountain","Living to 100 years old","Catching the biggest fish"], correct:0, explain:"เนื้อเรื่องระบุว่า \u201CRoy survived seven lightning strikes\u201D และเขาอยู่ในกินเนสส์บุ๊คจากสถิตินี้" },
    { readingId:"lightning", q:"What was Roy doing when the second lightning strike happened?", options:["Driving on a mountain road","Fishing in a lake","Standing in his garden","Sleeping at home"], correct:0, explain:"เนื้อเรื่องระบุว่า \u201CThe second strike happened while he was driving on a mountain road\u201D" },
    { readingId:"lightning", q:"What effect did the second strike have on Roy?", options:["It knocked him unconscious and burned his eyebrows.","It broke his leg.","It burned his hair off.","It hurt his shoulder."], correct:0, explain:"เนื้อเรื่องระบุว่า \u201CIt knocked him unconscious and burned his eyebrows off\u201D ตรงกับครั้งที่สอง (การเผาผมทั้งหัวคือครั้งที่สี่ ไม่ใช่ครั้งที่สอง)" },
    { readingId:"lightning", q:"What happened during the fourth lightning strike, in 1972?", options:["It burned off his hair while he was at a ranger station.","It hurt his ankle at a campsite.","It damaged his shoulder in the garden.","It sent him to hospital with burns."], correct:0, explain:"เนื้อเรื่องระบุว่า \u201CThe fourth strike took place in 1972 while he was in a ranger station. It burned off his hair.\u201D" },
    { readingId:"lightning", q:"What was Roy trying to do just before the sixth strike hit him?", options:["Run away from a moving cloud","Put out a fire","Call for help","Climb a tree"], correct:0, explain:"เนื้อเรื่องระบุว่า \u201CRoy tried to run away from a cloud which was moving in his direction\u201D ก่อนที่ครั้งที่หกจะเกิดขึ้น" },
    { readingId:"lightning", q:"What injuries did the seventh (last) strike cause?", options:["Severe burns to his chest and stomach","A damaged shoulder","A lost toenail","Burnt eyebrows"], correct:0, explain:"เนื้อเรื่องระบุว่าครั้งสุดท้าย \u201Csent him to hospital with severe burns to the chest and stomach\u201D" },
    { readingId:"lightning", q:"What does the passage suggest about Roy Sullivan's story overall?", options:["He was extremely unlucky yet extremely lucky to survive every time.","He was never actually hurt by lightning.","He caused the lightning strikes on purpose.","Scientists could not explain what happened to him."], correct:0, explain:"โดนฟ้าผ่าถึง 7 ครั้ง (โชคร้ายมาก) แต่รอดชีวิตทุกครั้งทั้งที่โอกาสมีเพียง 1 ใน 600,000 (โชคดีมาก) — ย่อหน้าสุดท้ายสรุปว่า \u201CThat's what you call luck!\u201D" },
  ],
};

/* ---------------------------------------------------------------
   5) PARALLEL MOCK EXAM — fixed structure mirroring the real
      end-of-semester exam: 20 vocabulary + 24 grammar + 16 reading = 60.
   --------------------------------------------------------------- */
const MOCK_EXAM = {
  title: "ข้อสอบคู่ขนาน ปลายภาคเรียนที่ 1/2569",
  subtitle: "อ23101 ภาษาอังกฤษพื้นฐาน • ม.3 • 60 ข้อ 30 คะแนน",
  parts: [
    { key:"vocabulary", label:"Part 1: Vocabulary", color:"vocab", items: BANK.vocabulary.slice(0,20) },
    { key:"grammar", label:"Part 2: Grammar", color:"grammar", items: BANK.grammar.slice(0,24) },
    { key:"reading", label:"Part 3: Reading Comprehension", color:"reading", items: BANK.reading.slice(0,16) },
  ]
};

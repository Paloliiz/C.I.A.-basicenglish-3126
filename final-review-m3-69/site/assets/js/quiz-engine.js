/* ================================================================
   Quiz engine — shared by quiz.html (practice) and exam.html (mock)
   ================================================================ */

function shuffle(arr){
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Turn a raw bank item into a render-ready question with shuffled options. */
function prepareQuestion(raw, partLabel, color){
  const order = shuffle(raw.options.map((_, i) => i));
  const options = order.map(i => raw.options[i]);
  const correct = order.indexOf(raw.correct);
  let stem = raw.q;
  return { stem, options, correct, partLabel, color, topic: raw.topic || raw.unit || "", readingId: raw.readingId || null, raw };
}

const LETTERS = ["A","B","C","D"];

/**
 * createQuizEngine
 * @param {HTMLElement} root - container to render into
 * @param {Array} questions - array of prepared questions (see prepareQuestion)
 * @param {Object} opts - { immediateFeedback, timeLimitSec, onFinish(state), title }
 */
function createQuizEngine(root, questions, opts){
  const state = {
    i: 0,
    answers: new Array(questions.length).fill(null),
    locked: new Array(questions.length).fill(false), // true once answered in immediate mode
    startTime: Date.now(),
    finished: false,
    paletteOpen: false,
  };
  let timerInterval = null;
  let remaining = opts.timeLimitSec || 0;

  function score(){
    let correct = 0;
    questions.forEach((q,i)=>{ if (state.answers[i] === q.correct) correct++; });
    return correct;
  }

  function renderTimer(){
    if (!opts.timeLimitSec) return "";
    return `<div class="timer" id="qe-timer">⏱ <span id="qe-timer-txt">--:--</span></div>`;
  }

  function startTimer(){
    if (!opts.timeLimitSec) return;
    const el = () => document.getElementById("qe-timer-txt");
    const tick = () => {
      remaining--;
      const m = Math.floor(Math.max(remaining,0)/60), s = Math.max(remaining,0)%60;
      if (el()) el().textContent = `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
      if (remaining <= 0){ clearInterval(timerInterval); finish(); }
    };
    tick();
    timerInterval = setInterval(tick, 1000);
  }

  function pct(){ return questions.length ? (state.i+1)/questions.length*100 : 0; }

  function renderPalette(){
    if (!opts.showPalette) return "";
    return `<details class="q-palette-wrap" id="qe-pal-details" ${state.paletteOpen ? "open" : ""}>
      <summary>ตารางข้อคำถาม (${state.answers.filter(a=>a!==null).length}/${questions.length} ข้อที่ตอบแล้ว)</summary>
      <div class="q-palette">` +
      questions.map((q,i)=>{
        const answered = state.answers[i] !== null;
        const cur = i === state.i;
        return `<button class="pal-btn ${cur?'cur':answered?'ans':''}" data-jump="${i}">${i+1}</button>`;
      }).join("") + `</div></details>`;
  }

  function render(){
    const q = questions[state.i];
    const answered = state.answers[state.i];
    const isLocked = state.locked[state.i];
    root.innerHTML = `
      ${renderTimer()}
      <div class="q-meta">
        <span>คำถามที่ ${state.i+1} / ${questions.length}</span>
        <span class="badge" style="background:var(--${q.color})">${q.partLabel}</span>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${pct()}%;background:var(--${q.color})"></div></div>
      ${renderPalette()}
      <div class="q-card">
        <div class="q-stem">${q.stem}</div>
        ${q.options.map((opt,idx)=>{
          let cls = "opt";
          if (isLocked){
            if (idx === q.correct) cls += " correct";
            else if (idx === answered) cls += " wrong";
          } else if (idx === answered){
            cls += " selected";
          }
          return `<button class="${cls}" data-idx="${idx}" ${isLocked?"disabled":""}>
              <span class="letter">${LETTERS[idx]}</span><span>${opt}</span>
            </button>`;
        }).join("")}
        ${opts.immediateFeedback ? `<div class="explain ${isLocked?'show':''}" id="qe-explain">${
          isLocked ? `
            <div class="explain-verdict ${answered === q.correct ? 'ok':'bad'}">${answered === q.correct ? "ถูกต้อง! 🎉" : `ไม่ถูกต้อง — คำตอบที่ถูกคือ <b>${LETTERS[q.correct]}. ${q.options[q.correct]}</b>`}</div>
            ${q.raw && q.raw.explain ? `<div class="explain-reason"><b>หลักการ:</b> ${q.raw.explain}</div>` : ""}
          ` : ""
        }</div>` : ""}
      </div>
      <div class="cta-spacer"></div>
      <div class="cta-bar">
        <div class="cta-bar-inner q-actions">
          ${state.i > 0 ? `<button class="btn ghost" id="qe-prev">ย้อนกลับ</button>` : `<div></div>`}
          ${state.i < questions.length - 1
            ? `<button class="btn" id="qe-next" ${opts.immediateFeedback && !isLocked ? "disabled":""}>ข้อถัดไป</button>`
            : `<button class="btn exam" id="qe-submit">ส่งคำตอบ</button>`}
        </div>
      </div>
    `;

    root.querySelectorAll(".opt").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        if (state.locked[state.i]) return;
        const idx = parseInt(btn.getAttribute("data-idx"),10);
        state.answers[state.i] = idx;
        if (opts.immediateFeedback) state.locked[state.i] = true;
        render();
      });
    });
    const prevBtn = root.querySelector("#qe-prev");
    if (prevBtn) prevBtn.addEventListener("click", ()=>{ state.i--; render(); });
    const nextBtn = root.querySelector("#qe-next");
    if (nextBtn) nextBtn.addEventListener("click", ()=>{ state.i++; render(); });
    const submitBtn = root.querySelector("#qe-submit");
    if (submitBtn) submitBtn.addEventListener("click", finish);
    root.querySelectorAll("[data-jump]").forEach(b=>{
      b.addEventListener("click", ()=>{ state.i = parseInt(b.getAttribute("data-jump"),10); render(); });
    });
    const palDetails = root.querySelector("#qe-pal-details");
    if (palDetails) palDetails.addEventListener("toggle", ()=>{ state.paletteOpen = palDetails.open; });
  }

  function finish(){
    if (state.finished) return;
    state.finished = true;
    if (timerInterval) clearInterval(timerInterval);
    opts.onFinish(state, questions, score());
  }

  render();
  if (opts.timeLimitSec) startTimer();
  return { finish, state };
}

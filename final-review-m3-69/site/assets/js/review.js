/* Builds the whole Review page from VOCAB / GRAMMAR / READING */
(function(){
  const UNIT_ORDER = ["starter","unit1","unit2","unit3"];
  const tabsEl = document.getElementById("unit-tabs");
  const panelsEl = document.getElementById("unit-panels");
  if (!tabsEl || !panelsEl) return;

  let accId = 0;

  function vocabTopicHTML(topic){
    return `
      <div class="topic-block">
        <div class="topic-title"><span class="topic-dot" style="background:var(--vocab)"></span>${topic.name}</div>
        <div class="flash-grid">
          ${topic.words.map(w => `
            <div class="flash" tabindex="0" role="button" aria-label="เปิดคำแปลของ ${w.w}">
              <div class="flash-inner">
                <div class="flash-face front"><div class="w">${w.w}</div><div class="flash-hint">แตะเพื่อดูคำแปล</div></div>
                <div class="flash-face back"><div class="m">${w.m}</div><div class="ex">${w.ex}</div></div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  function grammarTopicHTML(topic){
    accId++;
    const id = "acc-" + accId;
    return `
      <div class="acc" id="${id}">
        <button class="acc-head">${topic.title}<svg class="chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></button>
        <div class="acc-body"><div class="acc-body-inner">${topic.body}</div></div>
      </div>
    `;
  }

  function passageHTML(p){
    return `
      <div class="passage">
        <div class="passage-head">
          <h3>${p.title}</h3>
          <button class="th-toggle-btn" data-passage="${p.id}">แสดงคำแปลไทย</button>
        </div>
        <div class="glossary">${p.glossary.map(g=>`<span>${g}</span>`).join("")}</div>
        <div class="passage-body" id="passage-${p.id}">
          ${p.text.map((t,i)=>`<p>${t}</p><p class="th-trans">${(p.translations && p.translations[i]) || ""}</p>`).join("")}
        </div>
      </div>
    `;
  }

  function panelHTML(unitKey){
    const v = VOCAB[unitKey];
    const g = GRAMMAR[unitKey];
    const readings = READING.filter(r => r.unitKey === unitKey);
    let html = "";

    if (v && v.topics.length){
      html += `<div class="section-head"><h2>คำศัพท์ (Vocabulary)</h2><span class="count">แตะการ์ดเพื่อดูคำแปล</span></div>`;
      html += v.topics.map(vocabTopicHTML).join("");
    }
    if (g && g.topics.length){
      html += `<div class="section-head"><h2>ไวยากรณ์ (Grammar)</h2><span class="count">${g.topics.length} เรื่อง</span></div>`;
      html += g.topics.map(grammarTopicHTML).join("");
    }
    if (readings.length){
      html += `<div class="section-head"><h2>การอ่าน (Reading)</h2><span class="count">${readings.length} เรื่อง</span></div>`;
      html += readings.map(passageHTML).join("");
    }
    if (!html){
      html = `<div class="empty">ยังไม่มีเนื้อหาในหมวดนี้</div>`;
    }
    return html;
  }

  const labels = {
    starter: (VOCAB.starter && VOCAB.starter.label) || "Starter Unit",
    unit1: (VOCAB.unit1 && VOCAB.unit1.label) || "Unit 1",
    unit2: (VOCAB.unit2 && VOCAB.unit2.label) || "Unit 2",
    unit3: (VOCAB.unit3 && VOCAB.unit3.label) || "Unit 3",
  };

  tabsEl.innerHTML = UNIT_ORDER.map((u,i) => `<button data-unit="${u}" class="${i===0?'active':''}">${labels[u]}</button>`).join("");
  panelsEl.innerHTML = UNIT_ORDER.map((u,i) => `<div class="unit-panel ${i===0?'active':''}" data-panel="${u}">${panelHTML(u)}</div>`).join("");

  // Deep-link support: #unit2 etc.
  const hash = location.hash.replace("#","");
  if (UNIT_ORDER.includes(hash)){
    tabsEl.querySelectorAll("button").forEach(b=>b.classList.toggle("active", b.dataset.unit===hash));
    panelsEl.querySelectorAll(".unit-panel").forEach(p=>p.classList.toggle("active", p.dataset.panel===hash));
  }

  tabsEl.addEventListener("click", e=>{
    const btn = e.target.closest("button[data-unit]");
    if (!btn) return;
    const unit = btn.dataset.unit;
    tabsEl.querySelectorAll("button").forEach(b=>b.classList.toggle("active", b===btn));
    panelsEl.querySelectorAll(".unit-panel").forEach(p=>p.classList.toggle("active", p.dataset.panel===unit));
    history.replaceState(null, "", "#"+unit);
    window.scrollTo({top: panelsEl.offsetTop - 70, behavior:"smooth"});
  });

  panelsEl.addEventListener("click", e=>{
    const flash = e.target.closest(".flash");
    if (flash){ flash.classList.toggle("flipped"); return; }
    const head = e.target.closest(".acc-head");
    if (head){ head.closest(".acc").classList.toggle("open"); return; }
    const thBtn = e.target.closest(".th-toggle-btn");
    if (thBtn){
      const body = document.getElementById("passage-" + thBtn.dataset.passage);
      const showing = body.classList.toggle("show-th");
      thBtn.textContent = showing ? "ซ่อนคำแปลไทย" : "แสดงคำแปลไทย";
      thBtn.classList.toggle("active", showing);
      return;
    }
  });
  panelsEl.addEventListener("keydown", e=>{
    if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("flash")){
      e.preventDefault(); e.target.classList.toggle("flipped");
    }
  });
})();

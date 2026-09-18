/* Shared across all pages: nav highlighting + small helpers */
(function(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach(el=>{
    if (el.getAttribute("data-nav") === path) el.classList.add("active");
  });
})();

function fmtPct(n){ return Math.round(n) + "%"; }

/* localStorage progress helpers (best-effort; app works fine without it) */
const Store = {
  get(key, fallback){
    try{ const v = localStorage.getItem("s3r_"+key); return v ? JSON.parse(v) : fallback; }
    catch(e){ return fallback; }
  },
  set(key, val){
    try{ localStorage.setItem("s3r_"+key, JSON.stringify(val)); }catch(e){}
  }
};

function recordQuizResult(mode, scorePct){
  const hist = Store.get("history", []);
  hist.push({ mode, score: Math.round(scorePct), date: new Date().toISOString() });
  Store.set("history", hist.slice(-30));
  const best = Store.get("best", {});
  if (!best[mode] || scorePct > best[mode]) { best[mode] = Math.round(scorePct); Store.set("best", best); }
}

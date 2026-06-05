/* ================================
   COUNTDOWN.JS — July 20, 2026
   ================================ */
(function () {
  const TARGET = new Date('2026-07-20T00:00:00');
  const els = {
    days:  document.getElementById('cd-days'),
    hours: document.getElementById('cd-hours'),
    mins:  document.getElementById('cd-mins'),
    secs:  document.getElementById('cd-secs')
  };
  if (!els.days) return;

  function pad(n) { return String(n).padStart(2, '0'); }

  function flip(el, v) {
    const s = pad(v);
    if (el.textContent !== s) {
      el.classList.add('tick');
      setTimeout(() => { el.textContent = s; el.classList.remove('tick'); }, 80);
    }
  }

  function tick() {
    const diff = TARGET - Date.now();
    if (diff <= 0) {
      Object.values(els).forEach(e => e.textContent = '00');
      return;
    }
    flip(els.days,  Math.floor(diff / 86400000));
    flip(els.hours, Math.floor((diff % 86400000) / 3600000));
    flip(els.mins,  Math.floor((diff % 3600000) / 60000));
    flip(els.secs,  Math.floor((diff % 60000) / 1000));
  }

  tick();
  setInterval(tick, 1000);
})();

/* ================================
   COUNTDOWN.JS — Countdown to July 20, 2026
   ================================ */
(function () {
  const TARGET = new Date('2026-07-20T00:00:00');

  const elDays  = document.getElementById('cd-days');
  const elHours = document.getElementById('cd-hours');
  const elMins  = document.getElementById('cd-mins');
  const elSecs  = document.getElementById('cd-secs');

  if (!elDays) return;

  function pad(n) { return String(n).padStart(2, '0'); }

  function flipNum(el, newVal) {
    if (el.textContent !== newVal) {
      el.classList.add('flip');
      setTimeout(() => {
        el.textContent = newVal;
        el.classList.remove('flip');
      }, 60);
    }
  }

  function tick() {
    const now  = new Date();
    const diff = TARGET - now;

    if (diff <= 0) {
      elDays.textContent = elHours.textContent = elMins.textContent = elSecs.textContent = '00';
      return;
    }

    const days  = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins  = Math.floor((diff % 3600000) / 60000);
    const secs  = Math.floor((diff % 60000) / 1000);

    flipNum(elDays,  pad(days));
    flipNum(elHours, pad(hours));
    flipNum(elMins,  pad(mins));
    flipNum(elSecs,  pad(secs));
  }

  tick();
  setInterval(tick, 1000);
})();

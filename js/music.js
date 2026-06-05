/* ================================
   MUSIC.JS — Billie Jean player
   Works on both pages
   ================================ */
(function () {
  const audio = document.getElementById('bgMusic');
  if (!audio) return;

  /* ---- Hub page floating player ---- */
  const bar       = document.getElementById('musicBar');
  const playBtn   = document.getElementById('musicPlay');
  const disc      = document.getElementById('musicDisc');
  const toggleBtn = document.getElementById('musicToggleBtn');

  let playing = false;

  function setPlay(state) {
    playing = state;
    if (playBtn) playBtn.textContent = state ? '⏸' : '▶';
    if (disc)    disc.classList.toggle('spin', state);
    if (bar)     bar.classList.toggle('show', true);
    if (toggleBtn) toggleBtn.textContent = state ? '⏸ PAUSAR' : '▶ ATIVAR';
  }

  function startAudio() {
    audio.volume = 0;
    audio.play().then(() => {
      setPlay(true);
      fade(audio, 0, .32, 80);
    }).catch(() => {});
  }

  function stopAudio() {
    fade(audio, audio.volume, 0, 80, () => {
      audio.pause();
      setPlay(false);
    });
  }

  function toggle() {
    if (!playing) startAudio(); else stopAudio();
  }

  if (playBtn)   playBtn.addEventListener('click', toggle);
  if (toggleBtn) toggleBtn.addEventListener('click', toggle);

  // Show player after delay
  if (bar) setTimeout(() => bar.classList.add('show'), 1200);

  /* ---- Fade utility ---- */
  function fade(el, from, to, step, cb) {
    const dir = to > from ? 1 : -1;
    const iv = setInterval(() => {
      el.volume = Math.max(0, Math.min(1, el.volume + dir * .025));
      if ((dir > 0 && el.volume >= to) || (dir < 0 && el.volume <= to)) {
        el.volume = to;
        clearInterval(iv);
        if (cb) cb();
      }
    }, step);
  }
})();

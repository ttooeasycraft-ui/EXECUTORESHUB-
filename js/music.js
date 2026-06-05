/* ================================
   MUSIC.JS — Background music player
   ================================ */
(function () {
  const audio = document.getElementById('bgMusic');
  if (!audio) return;

  const isHub = !!document.getElementById('musicPlayer');

  /* ---- Coming Soon page controls ---- */
  const csToggle = document.getElementById('musicToggle');
  if (csToggle) {
    let playing = false;
    csToggle.addEventListener('click', () => {
      if (!playing) {
        audio.volume = 0.35;
        audio.play().then(() => {
          playing = true;
          csToggle.textContent = '🔊 DESATIVAR SOM';
          csToggle.classList.add('active');
          fadeIn(audio, 0.35);
        }).catch(() => {});
      } else {
        fadeOut(audio, () => {
          audio.pause();
          playing = false;
          csToggle.textContent = '🔇 ATIVAR SOM';
          csToggle.classList.remove('active');
        });
      }
    });
  }

  /* ---- Hub page controls ---- */
  if (isHub) {
    const player   = document.getElementById('musicPlayer');
    const playBtn  = document.getElementById('musicPlayBtn');
    const disc     = document.getElementById('musicDisc');
    const ctrlBtn  = document.getElementById('musicCtrl');
    let playing = false;

    function setPlaying(state) {
      playing = state;
      if (state) {
        playBtn.textContent = '⏸';
        disc.classList.add('spinning');
        player.classList.add('visible');
        if (ctrlBtn) ctrlBtn.textContent = '⏸ Pausar Música';
      } else {
        playBtn.textContent = '▶';
        disc.classList.remove('spinning');
        if (ctrlBtn) ctrlBtn.textContent = '▶ Ativar Música';
      }
    }

    function toggle() {
      if (!playing) {
        audio.volume = 0;
        audio.play().then(() => {
          setPlaying(true);
          player.classList.add('visible');
          fadeIn(audio, 0.35);
        }).catch(() => {});
      } else {
        fadeOut(audio, () => {
          audio.pause();
          setPlaying(false);
        });
      }
    }

    if (playBtn) playBtn.addEventListener('click', toggle);
    if (ctrlBtn) ctrlBtn.addEventListener('click', toggle);

    // Show player bar after 1s
    setTimeout(() => { player.classList.add('visible'); }, 1000);
  }

  /* ---- Helpers ---- */
  function fadeIn(el, target, step = 0.02) {
    el.volume = 0;
    const iv = setInterval(() => {
      if (el.volume + step >= target) { el.volume = target; clearInterval(iv); }
      else el.volume += step;
    }, 80);
  }
  function fadeOut(el, cb, step = 0.02) {
    const iv = setInterval(() => {
      if (el.volume - step <= 0) { el.volume = 0; clearInterval(iv); cb && cb(); }
      else el.volume -= step;
    }, 80);
  }
})();

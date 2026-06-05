/* ================================
   HUB.JS — Sidebar SPA + Scripts + Modal + Music
   ================================ */
(function () {
  'use strict';

  /* ---- Accent dots ---- */
  const body = document.body;
  document.querySelectorAll('.sb-dot').forEach(d => {
    d.addEventListener('click', () => {
      body.setAttribute('data-accent', d.dataset.a);
      document.querySelectorAll('.sb-dot').forEach(x => x.classList.remove('active'));
      d.classList.add('active');
      localStorage.setItem('ehAccent', d.dataset.a);
    });
  });
  const savedAccent = localStorage.getItem('ehAccent');
  if (savedAccent) {
    body.setAttribute('data-accent', savedAccent);
    document.querySelectorAll('.sb-dot').forEach(d =>
      d.classList.toggle('active', d.dataset.a === savedAccent));
  }

  /* ---- Page navigation ---- */
  const pages   = document.querySelectorAll('.page');
  const sbItems = document.querySelectorAll('.sb-item');
  const sidebar = document.getElementById('sidebar');
  const sbOverlay = document.getElementById('sbOverlay');
  const hamburger = document.getElementById('hamburger');

  function showPage(id) {
    pages.forEach(p => p.classList.toggle('active', p.id === 'page-' + id));
    sbItems.forEach(i => i.classList.toggle('active', i.dataset.page === id));
  }

  sbItems.forEach(item => {
    item.addEventListener('click', () => {
      showPage(item.dataset.page);
      if (window.innerWidth <= 700) closeSidebar();
    });
  });

  // Home nav cards
  document.querySelectorAll('.home-nav-card').forEach(c => {
    c.addEventListener('click', () => showPage(c.dataset.page));
  });

  // Hamburger
  function openSidebar() {
    sidebar.classList.add('open');
    sbOverlay.classList.add('show');
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    sbOverlay.classList.remove('show');
  }
  if (hamburger) hamburger.addEventListener('click', openSidebar);
  sbOverlay.addEventListener('click', closeSidebar);

  /* ---- Build script grids ---- */
  function buildGrid(containerId, scripts) {
    const grid = document.getElementById(containerId);
    if (!grid) return;
    grid.innerHTML = '';
    scripts.forEach((s, i) => {
      const card = document.createElement('div');
      card.className = 'sc-card';
      card.style.animationDelay = Math.min(i * 0.025, 0.6) + 's';
      card.innerHTML = `
        <span class="sc-icon">${s.icon}</span>
        <span class="sc-name">${s.name}</span>
        <span class="sc-game">${s.tag}</span>
        <span class="sc-badge ${s.price}">${s.price === 'free' ? '✅ GRÁTIS' : '💎 PAGO'}</span>
      `;
      card.addEventListener('click', () => openModal(s));
      grid.appendChild(card);
    });
  }

  const freeScripts = SCRIPTS.filter(s => s.price === 'free');
  const paidScripts = SCRIPTS.filter(s => s.price === 'paid');
  buildGrid('freeGrid', freeScripts);
  buildGrid('paidGrid', paidScripts);

  const freeCountEl = document.getElementById('freeCount');
  if (freeCountEl) freeCountEl.textContent = `${freeScripts.length} scripts`;

  /* ---- Free search ---- */
  let freeQuery = '';
  const freeSearch = document.getElementById('freeSearch');
  const freeClear  = document.getElementById('freeClear');
  const freeNoRes  = document.getElementById('freeNoResults');

  if (freeSearch) {
    freeSearch.addEventListener('input', () => {
      freeQuery = freeSearch.value.trim().toLowerCase();
      freeClear.style.display = freeQuery ? '' : 'none';
      applyFreeFilter();
    });
  }
  if (freeClear) {
    freeClear.addEventListener('click', () => {
      freeSearch.value = '';
      freeQuery = '';
      freeClear.style.display = 'none';
      applyFreeFilter();
      freeSearch.focus();
    });
  }

  function applyFreeFilter() {
    const grid = document.getElementById('freeGrid');
    let vis = 0;
    grid.querySelectorAll('.sc-card').forEach((c, i) => {
      const s = freeScripts[i];
      const show = !freeQuery || s.name.toLowerCase().includes(freeQuery) || s.tag.toLowerCase().includes(freeQuery);
      c.style.display = show ? '' : 'none';
      if (show) vis++;
    });
    if (freeCountEl) freeCountEl.textContent = `${vis} scripts`;
    if (freeNoRes) freeNoRes.style.display = vis === 0 ? 'block' : 'none';
  }

  /* ---- Modal ---- */
  const modalBg   = document.getElementById('modalBg');
  const mIcon     = document.getElementById('mIcon');
  const mName     = document.getElementById('mName');
  const mTag      = document.getElementById('mTag');
  const mPrice    = document.getElementById('mPrice');
  const codeBox   = document.getElementById('codeBox');
  const closeBtn  = document.getElementById('modalClose');
  const copyBtn   = document.getElementById('copyBtn');

  function openModal(s) {
    mIcon.textContent  = s.icon;
    mName.textContent  = s.name;
    mTag.textContent   = s.tag;
    mPrice.textContent = s.price === 'free' ? '✅ GRÁTIS' : '💎 PAGO';
    mPrice.className   = 'mh-price ' + s.price;
    codeBox.textContent = s.code;
    modalBg.classList.add('open');
    document.body.style.overflow = 'hidden';
    resetCopy();
  }
  function closeModal() {
    modalBg.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modalBg.addEventListener('click', e => { if (e.target === modalBg) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  function resetCopy() {
    copyBtn.classList.remove('copied');
    copyBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
      </svg>COPIAR CÓDIGO`;
  }
  function showCopied() {
    copyBtn.classList.add('copied');
    copyBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20 6 9 17 4 12"/>
      </svg>COPIADO!`;
    setTimeout(resetCopy, 2500);
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const txt = codeBox.textContent;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(txt).then(showCopied).catch(() => fallbackCopy(txt));
      } else { fallbackCopy(txt); }
    });
  }
  function fallbackCopy(txt) {
    const ta = document.createElement('textarea');
    ta.value = txt;
    ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); showCopied(); } catch {}
    document.body.removeChild(ta);
  }

  /* ---- Music ---- */
  const audio       = document.getElementById('bgMusic');
  const playBtn     = document.getElementById('musicPlayBtn');
  const disc        = document.getElementById('musicDiscHome');
  const sbMusicBtn  = document.getElementById('sbMusicBtn');
  let playing = false;

  function fadeVolume(to, ms) {
    const from = audio.volume, steps = 20, dt = ms / steps;
    let t = 0;
    const iv = setInterval(() => {
      t++;
      audio.volume = Math.max(0, Math.min(1, from + (to - from) * (t / steps)));
      if (t >= steps) clearInterval(iv);
    }, dt);
  }

  function startMusic() {
    audio.volume = 0;
    audio.play().then(() => {
      playing = true;
      fadeVolume(0.3, 600);
      if (playBtn) playBtn.textContent = '⏸';
      if (disc) disc.classList.add('spin');
      if (sbMusicBtn) { sbMusicBtn.classList.add('playing'); sbMusicBtn.querySelector('.sb-music-text') && (sbMusicBtn.querySelector('.sb-music-text').textContent = 'PAUSAR'); }
    }).catch(() => {});
  }

  function stopMusic() {
    fadeVolume(0, 400);
    setTimeout(() => { audio.pause(); playing = false; }, 420);
    if (playBtn) playBtn.textContent = '▶';
    if (disc) disc.classList.remove('spin');
    if (sbMusicBtn) { sbMusicBtn.classList.remove('playing'); }
  }

  function toggleMusic() {
    if (!playing) startMusic(); else stopMusic();
  }

  if (playBtn) playBtn.addEventListener('click', toggleMusic);
  if (sbMusicBtn) sbMusicBtn.addEventListener('click', toggleMusic);

  /* ---- Entrance animations for exec cards ---- */
  if (typeof IntersectionObserver !== 'undefined') {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = '';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.exec-card').forEach((c, i) => {
      c.style.opacity = '0';
      c.style.transform = 'translateY(18px)';
      c.style.transition = `opacity .35s ease ${i * 0.06}s, transform .35s ease ${i * 0.06}s, border-color .18s, box-shadow .18s, background .18s`;
      io.observe(c);
    });
  }

})();

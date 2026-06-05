/* ================================
   HUB.JS — Main hub logic
   ================================ */
(function () {
  'use strict';

  /* ---- Accent color system ---- */
  const body     = document.body;
  const gearBtn  = document.getElementById('gearBtn');
  const gearPanel= document.getElementById('gearPanel');
  const accBtns  = document.querySelectorAll('.acc-btn');

  if (gearBtn) {
    gearBtn.addEventListener('click', e => {
      e.stopPropagation();
      gearPanel.classList.toggle('open');
    });
    document.addEventListener('click', e => {
      if (!gearPanel.contains(e.target) && e.target !== gearBtn)
        gearPanel.classList.remove('open');
    });
  }

  accBtns.forEach(b => {
    b.addEventListener('click', () => {
      const acc = b.dataset.accent;
      body.setAttribute('data-accent', acc);
      accBtns.forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      localStorage.setItem('ehAccent', acc);
    });
  });

  const saved = localStorage.getItem('ehAccent');
  if (saved) {
    body.setAttribute('data-accent', saved);
    accBtns.forEach(b => b.classList.toggle('active', b.dataset.accent === saved));
  }

  /* ---- Executor tabs ---- */
  const etabs  = document.querySelectorAll('.etab');
  const epanes = document.querySelectorAll('.etab-pane');

  etabs.forEach(t => {
    t.addEventListener('click', () => {
      etabs.forEach(x => x.classList.remove('active'));
      epanes.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      const p = document.getElementById('etab-' + t.dataset.tab);
      if (p) p.classList.add('active');
    });
  });

  /* ---- Build script cards ---- */
  const grid      = document.getElementById('scriptsGrid');
  const countEl   = document.getElementById('scriptsCount');
  const noResults = document.getElementById('noResults');
  const noQ       = document.getElementById('noQ');

  let allCards = [];
  let activeFilter = 'all';
  let activeQuery  = '';

  function buildAll() {
    grid.innerHTML = '';
    allCards = [];

    SCRIPTS.forEach((s, i) => {
      const card = document.createElement('div');
      card.className = 'script-card';
      card.dataset.name  = s.name.toLowerCase();
      card.dataset.tag   = s.tag.toLowerCase();
      card.dataset.price = s.price;
      card.style.animationDelay = `${Math.min(i * 0.025, 0.6)}s`;
      card.innerHTML = `
        <span class="sc-icon">${s.icon}</span>
        <span class="sc-name">${s.name}</span>
        <span class="sc-tag">${s.tag}</span>
        <span class="sc-price ${s.price}">${s.price === 'free' ? '✅ GRÁTIS' : '💎 PAGO'}</span>
      `;
      card.addEventListener('click', () => openModal(s));
      grid.appendChild(card);
      allCards.push(card);
    });
  }

  buildAll();

  function applyFilters() {
    let visible = 0;
    allCards.forEach(card => {
      const matchPrice = activeFilter === 'all' || card.dataset.price === activeFilter;
      const matchQuery = !activeQuery || card.dataset.name.includes(activeQuery) || card.dataset.tag.includes(activeQuery);
      const show = matchPrice && matchQuery;
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    if (countEl) countEl.textContent = `${visible} script${visible !== 1 ? 's' : ''}`;
    noResults.style.display = (visible === 0) ? 'block' : 'none';
    if (noQ) noQ.textContent = activeQuery;
  }

  /* ---- Search ---- */
  const searchInput = document.getElementById('searchInput');
  const clearSearch = document.getElementById('clearSearch');

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      activeQuery = searchInput.value.trim().toLowerCase();
      if (clearSearch) clearSearch.style.display = activeQuery ? 'flex' : 'none';
      applyFilters();
    });
  }
  if (clearSearch) {
    clearSearch.addEventListener('click', () => {
      searchInput.value = '';
      activeQuery = '';
      clearSearch.style.display = 'none';
      applyFilters();
      searchInput.focus();
    });
  }

  /* ---- Filter tabs ---- */
  const ftabs = document.querySelectorAll('.ftab');
  ftabs.forEach(t => {
    t.addEventListener('click', () => {
      ftabs.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      activeFilter = t.dataset.filter;
      applyFilters();
    });
  });

  /* ---- Modal ---- */
  const overlay   = document.getElementById('modalOverlay');
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
    mPrice.className   = 'modal-price ' + s.price;
    codeBox.textContent = s.code;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    resetCopy();
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* ---- Copy ---- */
  function resetCopy() {
    copyBtn.classList.remove('copied');
    copyBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
      </svg>
      COPIAR CÓDIGO`;
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const code = codeBox.textContent;
      if (!code) return;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).then(showCopied).catch(fallback);
      } else { fallback(); }
    });
  }

  function fallback() {
    const ta = document.createElement('textarea');
    ta.value = codeBox.textContent;
    ta.style.cssText = 'position:fixed;opacity:0;';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); showCopied(); } catch {}
    document.body.removeChild(ta);
  }

  function showCopied() {
    copyBtn.classList.add('copied');
    copyBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      COPIADO!`;
    setTimeout(resetCopy, 2500);
  }

  /* ---- Intersection observer for exec cards ---- */
  if (typeof IntersectionObserver !== 'undefined') {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.exec-card').forEach((c, i) => {
      c.style.cssText += `opacity:0;transform:translateY(20px);
        transition:opacity .4s ease ${i*.06}s,transform .4s ease ${i*.06}s,
        border-color var(--sp),box-shadow var(--sp),background var(--sp)`;
      obs.observe(c);
    });
  }

})();

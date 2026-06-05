/* ================================
   HUB.JS — Main hub page logic
   ================================ */
(function () {
  'use strict';

  /* ===== Accent Color System ===== */
  const body = document.body;
  const settingsBtn   = document.getElementById('settingsBtn');
  const settingsPanel = document.getElementById('settingsPanel');
  const cBtns = document.querySelectorAll('.c-btn');

  settingsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    settingsPanel.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!settingsPanel.contains(e.target) && e.target !== settingsBtn) {
      settingsPanel.classList.remove('open');
    }
  });

  cBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const acc = btn.dataset.accent;
      body.setAttribute('data-accent', acc);
      cBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      localStorage.setItem('execHub_accent', acc);
    });
  });

  // Restore saved accent
  const saved = localStorage.getItem('execHub_accent');
  if (saved) {
    body.setAttribute('data-accent', saved);
    cBtns.forEach(b => b.classList.toggle('active', b.dataset.accent === saved));
  }

  /* ===== Executor Tabs ===== */
  const etabs   = document.querySelectorAll('.etab');
  const panels  = document.querySelectorAll('.etab-panel');

  etabs.forEach(tab => {
    tab.addEventListener('click', () => {
      etabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('etab-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
    });
  });

  /* ===== Build Script Cards ===== */
  const grid       = document.getElementById('scriptsGrid');
  const countEl    = document.getElementById('scriptsCount');
  const noResults  = document.getElementById('noResults');
  const noResultsQ = document.getElementById('noResultsQuery');

  let allCards = [];

  function buildCards(data) {
    grid.innerHTML = '';
    allCards = [];
    data.forEach((s, i) => {
      const card = document.createElement('div');
      card.className = 'script-card anim-fadeup';
      card.style.animationDelay = `${Math.min(i * 0.03, 0.5)}s`;
      card.dataset.name = s.name.toLowerCase();
      card.innerHTML = `
        <span class="script-card-icon">${s.icon}</span>
        <span class="script-card-name">${s.name}</span>
        <span class="script-card-tag">${s.tag}</span>
      `;
      card.addEventListener('click', () => openModal(s));
      grid.appendChild(card);
      allCards.push(card);
    });
    if (countEl) countEl.textContent = `${data.length} scripts`;
  }

  buildCards(SCRIPTS);

  /* ===== Search ===== */
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');

  function filterScripts(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      allCards.forEach(c => c.style.display = '');
      noResults.style.display = 'none';
      if (countEl) countEl.textContent = `${SCRIPTS.length} scripts`;
      searchClear.style.display = 'none';
      return;
    }
    searchClear.style.display = 'flex';
    let visible = 0;
    allCards.forEach(c => {
      const match = c.dataset.name.includes(q);
      c.style.display = match ? '' : 'none';
      if (match) visible++;
    });
    if (visible === 0) {
      noResults.style.display = 'flex';
      if (noResultsQ) noResultsQ.textContent = query;
    } else {
      noResults.style.display = 'none';
    }
    if (countEl) countEl.textContent = `${visible} resultado${visible !== 1 ? 's' : ''}`;
  }

  searchInput.addEventListener('input', () => filterScripts(searchInput.value));
  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    filterScripts('');
    searchInput.focus();
  });

  /* ===== Modal ===== */
  const overlay    = document.getElementById('modalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalTag   = document.getElementById('modalTag');
  const modalIcon  = document.getElementById('modalIcon');
  const scriptCode = document.getElementById('scriptCode');
  const closeBtn   = document.getElementById('modalClose');
  const copyBtn    = document.getElementById('copyBtn');

  function openModal(script) {
    modalTitle.textContent = script.name;
    modalTag.textContent   = script.tag;
    modalIcon.textContent  = script.icon;
    scriptCode.textContent = script.code;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    resetCopy();
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* ===== Copy Button ===== */
  function resetCopy() {
    copyBtn.classList.remove('copied');
    copyBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="9" y="9" width="13" height="13" rx="2"/>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
      </svg>
      Copiar Código
    `;
  }

  copyBtn.addEventListener('click', () => {
    const code = scriptCode.textContent;
    if (!code) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(showCopied).catch(fallback);
    } else { fallback(); }
  });

  function fallback() {
    const ta = document.createElement('textarea');
    ta.value = scriptCode.textContent;
    ta.style.cssText = 'position:fixed;opacity:0;';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); showCopied(); } catch (e) {}
    document.body.removeChild(ta);
  }

  function showCopied() {
    copyBtn.classList.add('copied');
    copyBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      Copiado!
    `;
    setTimeout(resetCopy, 2500);
  }

  /* ===== Scroll reveal for exec cards ===== */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.exec-card').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity .4s ease ${i * 0.08}s, transform .4s ease ${i * 0.08}s, border-color .22s, box-shadow .22s`;
    observer.observe(card);
  });

})();

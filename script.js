/* ==============================
   EXECUTORES HUB — script.js
   ============================== */

/* ---------- Accent Color ---------- */
const body = document.body;
const settingsBtn = document.getElementById('settingsBtn');
const settingsPanel = document.getElementById('settingsPanel');
const closeSettings = document.getElementById('closeSettings');
const colorOpts = document.querySelectorAll('.color-opt');

settingsBtn.addEventListener('click', () => {
  settingsPanel.classList.toggle('open');
});
closeSettings.addEventListener('click', () => {
  settingsPanel.classList.remove('open');
});
document.addEventListener('click', (e) => {
  if (!settingsPanel.contains(e.target) && !settingsBtn.contains(e.target)) {
    settingsPanel.classList.remove('open');
  }
});

colorOpts.forEach(opt => {
  opt.addEventListener('click', () => {
    const accent = opt.dataset.accent;
    body.setAttribute('data-accent', accent);
    colorOpts.forEach(o => o.classList.remove('active'));
    opt.classList.add('active');
    localStorage.setItem('execHub_accent', accent);
  });
});

// Restore saved accent
const savedAccent = localStorage.getItem('execHub_accent');
if (savedAccent) {
  body.setAttribute('data-accent', savedAccent);
  colorOpts.forEach(o => {
    o.classList.toggle('active', o.dataset.accent === savedAccent);
  });
}

/* ---------- Executor Tabs ---------- */
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

/* ---------- Script Database ---------- */
const scripts = [
  {
    name: 'Jujutsu Shenanigans',
    tag: 'Fighting',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/jujutsu-shenanigans/main/loader.lua"))()`
  },
  {
    name: 'The Strongest Battlegrounds',
    tag: 'Fighting',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/tsb/main/loader.lua"))()`
  },
  {
    name: 'Blox Fruits',
    tag: 'Adventure',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/bloxfruits/main/loader.lua"))()`
  },
  {
    name: 'Pet Simulator 99',
    tag: 'Simulator',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/petsim99/main/loader.lua"))()`
  },
  {
    name: 'Brookhaven',
    tag: 'RP',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/brookhaven/main/loader.lua"))()`
  },
  {
    name: 'Flee the Facility',
    tag: 'Horror',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/flee-the-facility/main/loader.lua"))()`
  },
  {
    name: 'Natural Disaster Survival',
    tag: 'Survival',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/naturaldisaster/main/loader.lua"))()`
  },
  {
    name: 'Murder Mystery 2',
    tag: 'Mystery',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/mm2/main/loader.lua"))()`
  },
  {
    name: 'Blade Ball',
    tag: 'Fighting',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/bladeball/main/loader.lua"))()`
  },
  {
    name: 'Universal Script Hub',
    tag: 'Universal',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/universal/main/hub.lua"))()`
  },
  {
    name: 'Anime Adventures',
    tag: 'Tower Defense',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/anime-adventures/main/loader.lua"))()`
  },
  {
    name: 'Arsenal',
    tag: 'FPS',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/arsenal/main/loader.lua"))()`
  },
  {
    name: 'Da Hood',
    tag: 'RP',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/dahood/main/loader.lua"))()`
  },
  {
    name: 'Tower of Hell',
    tag: 'Obby',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/tower-of-hell/main/loader.lua"))()`
  },
  {
    name: 'Shindo Life',
    tag: 'RPG',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/shindo-life/main/loader.lua"))()`
  },
  {
    name: 'King Legacy',
    tag: 'Adventure',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/king-legacy/main/loader.lua"))()`
  },
  {
    name: 'Anime Defenders',
    tag: 'Tower Defense',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/anime-defenders/main/loader.lua"))()`
  },
  {
    name: 'Fisch',
    tag: 'Fishing',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/fisch/main/loader.lua"))()`
  },
  {
    name: 'Doors',
    tag: 'Horror',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/doors/main/loader.lua"))()`
  },
  {
    name: 'Peroxide',
    tag: 'RPG',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/peroxide/main/loader.lua"))()`
  },
  {
    name: 'Sol\'s RNG',
    tag: 'Simulator',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/sols-rng/main/loader.lua"))()`
  },
  {
    name: 'Anime Last Stand',
    tag: 'Tower Defense',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/anime-last-stand/main/loader.lua"))()`
  },
  {
    name: 'Project Mugetsu',
    tag: 'RPG',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/project-mugetsu/main/loader.lua"))()`
  },
  {
    name: 'Counter Blox',
    tag: 'FPS',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/counter-blox/main/loader.lua"))()`
  },
  {
    name: 'Work at a Pizza Place',
    tag: 'Simulator',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/pizza-place/main/loader.lua"))()`
  },
  {
    name: 'Bee Swarm Simulator',
    tag: 'Simulator',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/bee-swarm/main/loader.lua"))()`
  },
  {
    name: 'Funky Friday',
    tag: 'Rhythm',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/funky-friday/main/loader.lua"))()`
  },
  {
    name: 'Ro-Ghoul',
    tag: 'RPG',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/ro-ghoul/main/loader.lua"))()`
  },
  {
    name: 'Wisteria',
    tag: 'RPG',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/wisteria/main/loader.lua"))()`
  },
  {
    name: 'Clicker Simulator',
    tag: 'Simulator',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/clicker-sim/main/loader.lua"))()`
  },
  {
    name: 'Vehicle Simulator',
    tag: 'Racing',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/vehicle-sim/main/loader.lua"))()`
  },
  {
    name: 'Adopt Me',
    tag: 'RP',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/adopt-me/main/loader.lua"))()`
  },
  {
    name: 'Phantom Forces',
    tag: 'FPS',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/phantom-forces/main/loader.lua"))()`
  },
  {
    name: 'Lumberjack Tycoon',
    tag: 'Tycoon',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/lumberjack/main/loader.lua"))()`
  },
  {
    name: 'Dungeon Quest',
    tag: 'RPG',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/dungeon-quest/main/loader.lua"))()`
  }
];

/* ---------- Build Script Buttons ---------- */
const scriptsGrid = document.getElementById('scriptsGrid');

scripts.forEach((script, index) => {
  const btn = document.createElement('button');
  btn.className = 'script-btn';
  btn.innerHTML = `
    <span class="script-game-name">${script.name}</span>
    <span class="script-tag">▶ ${script.tag}</span>
  `;
  btn.addEventListener('click', () => openModal(script));
  scriptsGrid.appendChild(btn);
});

/* ---------- Modal ---------- */
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const scriptBox = document.getElementById('scriptBox');
const modalClose = document.getElementById('modalClose');
const copyBtn = document.getElementById('copyBtn');

function openModal(script) {
  modalTitle.textContent = '📜 Script — ' + script.name;
  scriptBox.textContent = script.code;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  resetCopyBtn();
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* ---------- Copy Button ---------- */
function resetCopyBtn() {
  copyBtn.classList.remove('copied');
  copyBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
    Copiar Código
  `;
}

copyBtn.addEventListener('click', () => {
  const code = scriptBox.textContent;
  if (!code) return;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(code).then(() => showCopied()).catch(fallbackCopy);
  } else {
    fallbackCopy();
  }
});

function fallbackCopy() {
  const textarea = document.createElement('textarea');
  textarea.value = scriptBox.textContent;
  textarea.style.cssText = 'position:fixed;opacity:0;top:0;left:0;';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    document.execCommand('copy');
    showCopied();
  } catch (err) {
    console.error('Erro ao copiar:', err);
  }
  document.body.removeChild(textarea);
}

function showCopied() {
  copyBtn.classList.add('copied');
  copyBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
    Copiado!
  `;
  setTimeout(resetCopyBtn, 2500);
}

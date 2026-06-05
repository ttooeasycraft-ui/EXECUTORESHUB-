/* ================================
   SCRIPTS-DB.JS
   REAL scripts from Discord + extras
   free = grátis, paid = pago
   ================================ */

const SCRIPTS = [
  /* ===== FREE — Discord verified ===== */
  {
    name: '99 Noites na Floresta',
    tag: 'Horror',
    icon: '🦌',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/VapeVoidware/VW-Add/main/nightsintheforest.lua", true))()`
  },
  {
    name: 'Quantum Hub — Blox Fruit',
    tag: 'Aventura',
    icon: '🍎',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/Trustmenotcondom/QTONYX/refs/heads/main/QuantumOnyx.lua"))()`
  },
  {
    name: 'Fuga de Teclado de Velocidade',
    tag: 'Corrida',
    icon: '⌨️',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/DuxiiT/Aether/refs/heads/main/loader.lua"))()`
  },
  {
    name: 'Vector Hub — Blox Fruit',
    tag: 'Aventura',
    icon: '🍎',
    price: 'free',
    code: `loadstring(game:HttpGet("https://vectorhub.space"))()`
  },
  {
    name: 'Astral Hub — Blox Fruit',
    tag: 'Aventura',
    icon: '🌟',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/Overgustx2/Main/refs/heads/main/BloxFruits_25.html"))()`
  },

  /* ===== FREE — Populares ===== */
  {
    name: 'Jujutsu Shenanigans',
    tag: 'Luta',
    icon: '🥋',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/RegularVynixu/Utilities/main/Jujutsu%20Shenanigans/Script.lua"))()`
  },
  {
    name: 'The Strongest Battlegrounds',
    tag: 'Luta',
    icon: '⚔️',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/acsu1/TSB/main/script.lua"))()`
  },
  {
    name: 'Murder Mystery 2',
    tag: 'Mistério',
    icon: '🔪',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/itz-exer/MM2/main/loader.lua"))()`
  },
  {
    name: 'Blade Ball',
    tag: 'Luta',
    icon: '⚡',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/randomscripts-dev/BladeBall/main/loader.lua"))()`
  },
  {
    name: 'Flee the Facility',
    tag: 'Horror',
    icon: '🏃',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/itz-exer/FTF/main/loader.lua"))()`
  },
  {
    name: 'Arsenal',
    tag: 'FPS',
    icon: '🔫',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/randomscripts-dev/Arsenal/main/loader.lua"))()`
  },
  {
    name: 'Da Hood',
    tag: 'RP',
    icon: '🏙️',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/itz-exer/DaHood/main/loader.lua"))()`
  },
  {
    name: 'Tower of Hell',
    tag: 'Obby',
    icon: '🏰',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/randomscripts-dev/TowerOfHell/main/loader.lua"))()`
  },
  {
    name: 'Natural Disaster Survival',
    tag: 'Sobrevivência',
    icon: '🌪️',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/itz-exer/NDS/main/loader.lua"))()`
  },
  {
    name: 'Shindo Life',
    tag: 'RPG',
    icon: '🌀',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/randomscripts-dev/ShindoLife/main/loader.lua"))()`
  },
  {
    name: 'Fisch',
    tag: 'Pesca',
    icon: '🎣',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/itz-exer/Fisch/main/loader.lua"))()`
  },
  {
    name: 'Doors',
    tag: 'Horror',
    icon: '🚪',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/randomscripts-dev/Doors/main/loader.lua"))()`
  },
  {
    name: "Sol's RNG",
    tag: 'Simulador',
    icon: '🎲',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/itz-exer/SolsRNG/main/loader.lua"))()`
  },
  {
    name: 'Funky Friday',
    tag: 'Ritmo',
    icon: '🎵',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/randomscripts-dev/FunkyFriday/main/loader.lua"))()`
  },
  {
    name: 'Adopt Me',
    tag: 'RP',
    icon: '🐶',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/itz-exer/AdoptMe/main/loader.lua"))()`
  },
  {
    name: 'Bee Swarm Simulator',
    tag: 'Simulador',
    icon: '🐝',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/randomscripts-dev/BeeSwarm/main/loader.lua"))()`
  },
  {
    name: 'Work at a Pizza Place',
    tag: 'Simulador',
    icon: '🍕',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/itz-exer/PizzaPlace/main/loader.lua"))()`
  },
  {
    name: 'Brookhaven',
    tag: 'RP',
    icon: '🏘️',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/randomscripts-dev/Brookhaven/main/loader.lua"))()`
  },
  {
    name: 'King Legacy',
    tag: 'Aventura',
    icon: '👑',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/itz-exer/KingLegacy/main/loader.lua"))()`
  },
  {
    name: 'Ro-Ghoul',
    tag: 'RPG',
    icon: '👹',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/randomscripts-dev/RoGhoul/main/loader.lua"))()`
  },
  {
    name: 'Counter Blox',
    tag: 'FPS',
    icon: '🎯',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/itz-exer/CounterBlox/main/loader.lua"))()`
  },
  {
    name: 'Peroxide',
    tag: 'RPG',
    icon: '⚗️',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/randomscripts-dev/Peroxide/main/loader.lua"))()`
  },
  {
    name: 'Project Mugetsu',
    tag: 'RPG',
    icon: '🌙',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/itz-exer/ProjectMugetsu/main/loader.lua"))()`
  },
  {
    name: 'Anime Defenders',
    tag: 'Tower Defense',
    icon: '⛩️',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/randomscripts-dev/AnimeDefenders/main/loader.lua"))()`
  },
  {
    name: 'Universal Script Hub',
    tag: 'Universal',
    icon: '🌐',
    price: 'free',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/itz-exer/Universal/main/hub.lua"))()`
  },

  /* ===== PAID — Premium ===== */
  {
    name: 'Blox Fruit — PREMIUM',
    tag: 'Aventura',
    icon: '💎',
    price: 'paid',
    code: `-- SCRIPT PREMIUM\n-- Compre a key em: discord.gg/scripts\n\nloadstring(game:HttpGet("https://api.scripthub.xyz/bloxfruit/premium.lua"))()`
  },
  {
    name: 'Pet Sim 99 — AUTO FARM',
    tag: 'Simulador',
    icon: '🐾',
    price: 'paid',
    code: `-- SCRIPT PREMIUM\n-- Compre a key em: discord.gg/scripts\n\nloadstring(game:HttpGet("https://api.scripthub.xyz/petsim99/autofarm.lua"))()`
  },
  {
    name: 'Anime Adventures FULL',
    tag: 'Tower Defense',
    icon: '🗼',
    price: 'paid',
    code: `-- SCRIPT PREMIUM\n-- Compre a key em: discord.gg/scripts\n\nloadstring(game:HttpGet("https://api.scripthub.xyz/anime-adventures/full.lua"))()`
  },
  {
    name: 'Phantom Forces — Aimbot',
    tag: 'FPS',
    icon: '💥',
    price: 'paid',
    code: `-- SCRIPT PREMIUM\n-- Compre a key em: discord.gg/scripts\n\nloadstring(game:HttpGet("https://api.scripthub.xyz/phantom/aimbot.lua"))()`
  },
  {
    name: 'Dungeon Quest AUTO',
    tag: 'RPG',
    icon: '🗺️',
    price: 'paid',
    code: `-- SCRIPT PREMIUM\n-- Compre a key em: discord.gg/scripts\n\nloadstring(game:HttpGet("https://api.scripthub.xyz/dungeonquest/auto.lua"))()`
  }
];

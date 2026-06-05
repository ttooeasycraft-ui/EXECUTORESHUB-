/* ================================
   SCRIPTS-DB.JS — 35 Roblox game scripts
   ================================ */
const SCRIPTS = [
  {
    name: 'Jujutsu Shenanigans',
    tag: 'Fighting',
    icon: '🥋',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/jujutsu-shenanigans/main/loader.lua"))()`
  },
  {
    name: 'The Strongest Battlegrounds',
    tag: 'Fighting',
    icon: '⚔️',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/tsb/main/loader.lua"))()`
  },
  {
    name: 'Blox Fruits',
    tag: 'Aventura',
    icon: '🍎',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/bloxfruits/main/loader.lua"))()`
  },
  {
    name: 'Pet Simulator 99',
    tag: 'Simulador',
    icon: '🐾',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/petsim99/main/loader.lua"))()`
  },
  {
    name: 'Brookhaven',
    tag: 'RP',
    icon: '🏘️',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/brookhaven/main/loader.lua"))()`
  },
  {
    name: 'Flee the Facility',
    tag: 'Horror',
    icon: '🏃',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/flee-the-facility/main/loader.lua"))()`
  },
  {
    name: 'Natural Disaster Survival',
    tag: 'Sobrevivência',
    icon: '🌪️',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/naturaldisaster/main/loader.lua"))()`
  },
  {
    name: 'Murder Mystery 2',
    tag: 'Mistério',
    icon: '🔪',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/mm2/main/loader.lua"))()`
  },
  {
    name: 'Blade Ball',
    tag: 'Luta',
    icon: '⚡',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/bladeball/main/loader.lua"))()`
  },
  {
    name: 'Universal Script Hub',
    tag: 'Universal',
    icon: '🌐',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/universal/main/hub.lua"))()`
  },
  {
    name: 'Anime Adventures',
    tag: 'Tower Defense',
    icon: '🗼',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/anime-adventures/main/loader.lua"))()`
  },
  {
    name: 'Arsenal',
    tag: 'FPS',
    icon: '🔫',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/arsenal/main/loader.lua"))()`
  },
  {
    name: 'Da Hood',
    tag: 'RP',
    icon: '🏙️',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/dahood/main/loader.lua"))()`
  },
  {
    name: 'Tower of Hell',
    tag: 'Obby',
    icon: '🏰',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/tower-of-hell/main/loader.lua"))()`
  },
  {
    name: 'Shindo Life',
    tag: 'RPG',
    icon: '🌀',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/shindo-life/main/loader.lua"))()`
  },
  {
    name: 'King Legacy',
    tag: 'Aventura',
    icon: '👑',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/king-legacy/main/loader.lua"))()`
  },
  {
    name: 'Anime Defenders',
    tag: 'Tower Defense',
    icon: '⛩️',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/anime-defenders/main/loader.lua"))()`
  },
  {
    name: 'Fisch',
    tag: 'Pesca',
    icon: '🎣',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/fisch/main/loader.lua"))()`
  },
  {
    name: 'Doors',
    tag: 'Horror',
    icon: '🚪',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/doors/main/loader.lua"))()`
  },
  {
    name: 'Peroxide',
    tag: 'RPG',
    icon: '⚗️',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/peroxide/main/loader.lua"))()`
  },
  {
    name: "Sol's RNG",
    tag: 'Simulador',
    icon: '🎲',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/sols-rng/main/loader.lua"))()`
  },
  {
    name: 'Anime Last Stand',
    tag: 'Tower Defense',
    icon: '🗡️',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/anime-last-stand/main/loader.lua"))()`
  },
  {
    name: 'Project Mugetsu',
    tag: 'RPG',
    icon: '🌙',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/project-mugetsu/main/loader.lua"))()`
  },
  {
    name: 'Counter Blox',
    tag: 'FPS',
    icon: '🎯',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/counter-blox/main/loader.lua"))()`
  },
  {
    name: 'Work at a Pizza Place',
    tag: 'Simulador',
    icon: '🍕',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/pizza-place/main/loader.lua"))()`
  },
  {
    name: 'Bee Swarm Simulator',
    tag: 'Simulador',
    icon: '🐝',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/bee-swarm/main/loader.lua"))()`
  },
  {
    name: 'Funky Friday',
    tag: 'Ritmo',
    icon: '🎵',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/funky-friday/main/loader.lua"))()`
  },
  {
    name: 'Ro-Ghoul',
    tag: 'RPG',
    icon: '👹',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/ro-ghoul/main/loader.lua"))()`
  },
  {
    name: 'Wisteria',
    tag: 'RPG',
    icon: '🌸',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/wisteria/main/loader.lua"))()`
  },
  {
    name: 'Clicker Simulator',
    tag: 'Simulador',
    icon: '👆',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/clicker-sim/main/loader.lua"))()`
  },
  {
    name: 'Vehicle Simulator',
    tag: 'Corrida',
    icon: '🚗',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/vehicle-sim/main/loader.lua"))()`
  },
  {
    name: 'Adopt Me',
    tag: 'RP',
    icon: '🐶',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/adopt-me/main/loader.lua"))()`
  },
  {
    name: 'Phantom Forces',
    tag: 'FPS',
    icon: '💥',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/phantom-forces/main/loader.lua"))()`
  },
  {
    name: 'Dungeon Quest',
    tag: 'RPG',
    icon: '🗺️',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/dungeon-quest/main/loader.lua"))()`
  },
  {
    name: 'Lumberjack Tycoon',
    tag: 'Tycoon',
    icon: '🪓',
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/scripts-hub/lumberjack/main/loader.lua"))()`
  }
];

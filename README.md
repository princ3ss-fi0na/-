
<html lang="ru">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
<title>Лечо. Ахуевшая заруба в Техасе.</title>

<!-- Fonts: iOS-style system fonts with fallback -->
<link href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;600;700&display=swap" rel="stylesheet">

<style>
:root{
  --bg-top:#f2f2f7; --bg-bottom:#ffffff; /* Light iOS-like background */
  --accent:#007aff; --accent-2:#34c759; /* iOS blue and green accents */
  --glass: rgba(255,255,255,0.8); /* iOS blur glass */
  --card-w:68px; --card-h:96px; --btn-radius:12px; /* Slightly smaller cards for fit */
  --shadow-strong: 0 8px 32px rgba(0,0,0,0.1); /* Softer iOS shadows */
  --muted: rgba(0,0,0,0.6); /* Darker text for light bg */
  --text-color: #000;
  --card-bg: #fff;
  --card-text: #000;
}
body.theme-dark {
  --bg-top: #1c1c1e; --bg-bottom: #2c2c2e;
  --glass: rgba(44,44,46,0.8);
  --muted: rgba(255,255,255,0.6);
  --text-color: #fff;
  --card-bg: #3a3a3c;
  --card-text: #fff;
}
body.theme-poker {
  --bg-top: #0a3d62; --bg-bottom: #1e5f3f;
  --glass: rgba(30,95,63,0.8);
  --muted: rgba(255,255,255,0.7);
  --text-color: #fff;
  --card-bg: #2d5a3a;
  --card-text: #fff;
  --accent: #ffd700;
  --accent-2: #00ff00;
}
*{box-sizing:border-box}
html,body{height:100%; overflow:hidden;} /* Prevent scroll entirely */
body{
  margin:0; font-family:"SF Pro Display", system-ui, -apple-system, "Segoe UI", Roboto, Arial;
  background:
    radial-gradient(800px 360px at 85% 10%, rgba(0,122,255,0.05), transparent),
    linear-gradient(180deg,var(--bg-top),var(--bg-bottom));
  color:var(--text-color); min-height:100vh; display:flex; flex-direction:column; align-items:center; padding:0;
  -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;
}

/* APP - full height, no gaps for fit */
.app{width:100%; height:100vh; display:flex; flex-direction:column; overflow:hidden;}

/* header - compact, iOS-like */
.header{
  display:flex; justify-content:space-between; align-items:center; gap:12px;
  position: sticky; top: 0; z-index: 100;
  background: var(--glass); backdrop-filter: blur(20px); /* iOS blur */
  padding: 8px 12px; border-bottom: 1px solid rgba(0,0,0,0.05);
  flex-shrink:0;
}
.title-wrap{display:flex; align-items:center; gap:12px; flex:1;}
.logo-card{
  width:64px; height:64px; border-radius:12px; background:linear-gradient(135deg,var(--accent),var(--accent-2));
  color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:40px;
  box-shadow:var(--shadow-strong); flex-shrink:0;
}
.title{
  font-family:'SF Pro Display', serif;
  font-weight:600; font-size:16px; letter-spacing:0.01em; color:var(--accent); margin:0;
  line-height:1.1;
}
.subtitle{font-size:10px; color:var(--muted); margin-top:2px; font-weight:500; display:none;} /* Hide on mobile for space */

/* nav - compact wrap */
.nav-buttons{display:flex; gap:6px; flex-wrap:wrap}
.big-btn{background:var(--accent); color:#fff; padding:6px 10px; border-radius:var(--btn-radius); font-weight:600; min-width:80px; text-align:center; box-shadow:0 4px 12px rgba(0,0,0,0.1); cursor:pointer; border:none; font-size:13px; transition: all 0.2s; -webkit-tap-highlight-color: transparent; touch-action: manipulation;}
.balance{background:var(--glass); padding:6px 10px; border-radius:12px; font-weight:600; color:var(--accent); display:flex; align-items:center; gap:6px; border:1px solid rgba(0,0,0,0.05); transition: all 0.2s ease; font-size:12px;}

/* shelves - tighter for fit */
.shelves{display:grid; grid-template-columns:1fr; gap:12px; padding:0 12px; overflow-y:auto;}
.shelf{
  background:var(--glass); border-radius:12px; padding:16px; border:1px solid rgba(0,0,0,0.05);
  box-shadow:0 4px 16px rgba(0,0,0,0.08);
}
.shelf h3{margin:0 0 6px 0; font-size:15px; color:var(--accent)}
.shelf p{margin:0; color:var(--muted); font-size:12px}

/* responsive - tighter on small */
@media(max-width:600px){ 
  .header{padding:6px 8px; gap:4px;}
  .nav-buttons{flex-wrap:wrap; gap:4px; justify-content:center;}
  .big-btn{padding:5px 8px; font-size:12px; min-width:65px;}
  .logo-card{width:52px; height:52px; font-size:32px;}
  .title{font-size:14px;}
  .shelves{gap:8px; padding:0 8px;}
  .subtitle{display:none;}
}

/* global panels - compact */
.card-panel{background:var(--glass); border-radius:12px; padding:16px; border:1px solid rgba(0,0,0,0.05); box-shadow:0 4px 16px rgba(0,0,0,0.08); overflow:auto;}
.small-muted{font-size:12px; color:var(--muted)}

/* players row - tighter */
.players-row{display:flex; gap:8px; flex-wrap:wrap; align-items:flex-start; justify-content:center;}
.player-chip{display:flex; flex-direction:column; align-items:center; gap:3px; padding:6px; background:var(--glass); border-radius:12px; min-width:90px; border:1px solid rgba(0,0,0,0.05); transition:transform .15s,box-shadow .15s;}
.player-chip:hover{transform:translateY(-2px);}
.player-name{font-size:12px; font-weight:600; color:var(--text-color);}
.player-status{font-size:10px; color:var(--accent-2); font-style:italic;}
.player-count{font-size:11px; color:var(--muted);}

/* avatar sizes - smaller */
.avatar{border-radius:12px; overflow:hidden; border:1px solid rgba(0,0,0,0.05); display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.05); color:var(--text-color);}
.avatar.small{width:40px; height:40px; font-size:18px;}
.avatar.medium{width:52px; height:52px; font-size:24px;}
.avatar.large{width:72px; height:72px; font-size:30px;}

/* Card visuals - adjusted size */
.card{width:var(--card-w); height:var(--card-h); background:var(--card-bg); color:var(--card-text); border-radius:12px; box-shadow:0 4px 16px rgba(0,0,0,0.1); display:flex; flex-direction:column; justify-content:space-between; padding:8px; font-weight:600; user-select:none; transition:transform .18s;}
.card.back{background:linear-gradient(180deg,#e5e5e5,#d1d1d1); color:#666; justify-content:center; align-items:center; font-size:18px; position:relative;}
.card .suit{font-size:12px;}
.card .rank{font-size:16px; text-align:center;}
.hand{display:flex; gap:6px;}

/* table - fit to remaining space */
.table{background:var(--glass); border-radius:12px; padding:10px; display:flex; flex-direction:column; gap:8px; flex:1; border:1px solid rgba(0,0,0,0.05); overflow:auto;}
.table-center{display:flex; gap:12px; align-items:center; justify-content:center; flex:1;}
.table-slot{min-width:140px; min-height:100px; background:var(--glass); border-radius:12px; padding:10px; display:flex; flex-direction:column; gap:6px; align-items:center; border:1px solid rgba(0,0,0,0.05);}

/* controls & log - compact bottom, removed sticky */
.controls{display:flex; gap:8px; background:var(--glass); padding:8px; border-radius:12px; border:1px solid rgba(0,0,0,0.05); flex-shrink:0; -webkit-tap-highlight-color: transparent; touch-action: manipulation;}
#log{background:rgba(0,0,0,0.05); padding:6px; border-radius:12px; font-size:11px; max-height:60px; overflow:auto; border:1px solid rgba(0,0,0,0.02); width:100%}

/* shop - tighter grid */
.shop-grid{display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:12px; margin-top:12px; padding:0 12px;}
.shop-item{background:var(--glass); padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.05);}
.item-title{font-weight:600; color:var(--accent); margin-bottom:4px;}
.item-desc{font-size:12px; color:var(--muted); margin-bottom:6px;}
.price{font-weight:700; color:var(--accent); font-size:13px;}

/* inventory - wrap tight */
.inv{display:flex; gap:6px; flex-wrap:wrap; margin-top:6px;}
.inv .chip{background:rgba(0,0,0,0.05); padding:4px 6px; border-radius:8px; font-size:12px;}

/* personalization - tight */
.personalization-grid{display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:10px; margin-top:12px;}
.personalization-item{background:var(--glass); padding:10px; border-radius:10px; border:1px solid rgba(0,0,0,0.05);}
.apply-btn{background:var(--accent-2); color:#000; padding:5px 10px; border-radius:6px; font-size:11px; font-weight:600; cursor:pointer; border:none; width:100%; -webkit-tap-highlight-color: transparent; touch-action: manipulation;}

/* game inventory - compact */
.game-inv-panel {
  background: var(--glass);
  border-radius: 12px;
  padding: 10px;
  border: 1px solid rgba(0,0,0,0.05);
  min-width: 180px; flex-shrink:0;
}
.game-inv-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
  padding: 3px;
  background: rgba(0,0,0,0.03);
  border-radius: 6px;
}
.use-btn {
  background: var(--accent-2);
  color: #000;
  padding: 3px 6px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

/* casino - tighter */
.casino-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; margin-top: 12px; padding:0 12px; }
.casino-item { background: var(--glass); padding: 12px; border-radius: 10px; border: 1px solid rgba(0,0,0,0.05); text-align: center; }
.color-choice { display: flex; gap: 8px; justify-content: center; margin: 8px 0; }
.color-btn { width: 44px; height: 44px; border-radius: 50%; border: 2px solid rgba(0,0,0,0.1); cursor: pointer; font-size: 22px; -webkit-tap-highlight-color: transparent; touch-action: manipulation; }
.color-btn.selected { border-color: var(--accent); box-shadow: 0 0 8px var(--accent-2); }
#rouletteSpinner { font-size: 42px; text-align: center; margin: 16px 0; }
#countdown { font-size: 32px; font-weight: 700; text-align: center; margin: 16px 0; color: var(--accent-2); }

/* exchange - centered tight */
.exchange-panel { display: flex; flex-direction: column; gap: 12px; max-width: 360px; margin: 0 auto; padding:0 12px; }
.exchange-form { background: rgba(0,0,0,0.03); padding: 12px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.05); }
.exchange-input { padding: 6px; border-radius: 6px; background: transparent; border: 1px solid rgba(0,0,0,0.1); color: var(--text-color); width: 100%; margin-bottom: 6px; }
.exchange-result { font-weight: 600; color: var(--accent-2); text-align: center; padding: 6px; background: rgba(0,0,0,0.02); border-radius: 6px; }
.exchange-error { color: #ff3b30; font-size: 11px; text-align: center; margin-top: 3px; }

/* slot - full fit */
#screenSlots { background: var(--bg-bottom); flex-direction: column; align-items: center; justify-content: center; height: 100%; padding: 16px; }
#slotContent { display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1; width: 100%; gap:20px; }
.slot-reel { font-size: 72px; width: 90px; height: 90px; border: 2px solid var(--accent); border-radius: 12px; display: flex; align-items: center; justify-content: center; background: var(--glass); margin: 0 8px; }
.lever-btn { background: var(--accent); color: white; padding: 16px 32px; border-radius: 50px; font-size: 20px; font-weight: 600; cursor: pointer; border: none; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: transform 0.2s; -webkit-tap-highlight-color: transparent; touch-action: manipulation; }
.lever-btn:active { transform: scale(0.98); }
#slotResult { margin-top: 20px; font-size: 20px; color: var(--accent-2); text-align: center; }

/* horse race - closed message */
#screenHorseRace { background: var(--bg-bottom); flex-direction: column; align-items: center; justify-content: center; height: 100%; padding: 20px; text-align:center; }
#horseContent { display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1; width: 100%; }
#horseClosed { font-size:24px; color:var(--muted); margin-bottom:20px; }

/* trump card - iOS rounded */
.trump { display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; background: white; border-radius: 8px; border: 2px solid #ffd700; color: black; font-size: 24px; font-weight: bold; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }

/* animations - softer */
@keyframes flash { 0%, 100% { filter: brightness(1); } 50% { filter: brightness(1.2); } }
@keyframes fall { to { top: 0vh; opacity: 0; transform: rotate(360deg); } }

/* modal - iOS sheet-like */
#modal {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.4); 
  display: none; z-index: 1000; justify-content: center; align-items: flex-end; padding:20px;
}
#modalContent {
  background: var(--card-bg); color: var(--card-text); padding: 20px; border-radius: 20px 20px 0 0; 
  max-width: 100%; text-align: center; box-shadow: 0 -4px 16px rgba(0,0,0,0.1); width:100%;
}
#modalClose { background: var(--accent); color: #fff; padding: 12px 24px; border-radius: 12px; cursor: pointer; margin-top: 10px; font-weight:600; border:none; -webkit-tap-highlight-color: transparent; touch-action: manipulation; }

/* screens - full fit, no scroll */
.screen { display: none; flex:1; overflow:auto; padding:8px; } /* Reduced padding */
.screen.active { display: flex; flex-direction: column; }

@media(max-width:640px){
  .shelves{grid-template-columns:1fr;}
  .header{flex-direction:column; align-items:flex-start; gap:8px;}
  .logo-card{width:48px; height:48px; font-size:28px;}
  .table { flex-direction: column; gap:6px; }
  .game-inv-panel { order: -1; min-width:auto; }
  #log { max-height: 50px; font-size: 10px; padding: 4px; }
  .app { padding: 0; }
  .casino-grid { grid-template-columns:1fr; }
  .table { display: flex !important; flex-direction: column !important; }
}

.version { position: fixed; bottom: 4px; right: 8px; font-size: 10px; color: var(--muted); font-family: monospace; }

/* Fallback banner - iOS alert style */
#fallbackBanner {
  background: #ff3b30; color: #fff; padding: 8px; text-align: center; font-size: 12px; font-weight: 500;
  border-radius: 12px; margin: 8px; display: none;
}
</style>
</head>
<body>
<div class="app">

  <!-- Fallback Banner -->
  <div id="fallbackBanner"></div>

  <!-- HEADER -->
  <div class="header">
    <div class="title-wrap">
      <div class="logo-card" id="logoCard">🃏</div>
      <div>
        <div class="title">Лечо. Ахуевшая заруба в Техасе.</div>
        <div class="subtitle">Грубая карточная нервотрёпка, сервированная по-старинке</div>
      </div>
    </div>
    <div style="display:flex;gap:8px;align-items:center">
      <div class="nav-buttons">
        <div class="big-btn" id="btnIntro">Главная</div>
        <div class="big-btn" id="btnProfile">Профиль</div>
        <div class="big-btn" id="btnShop">Магазин</div>
        <div class="big-btn" id="btnNew">Новая игра</div>
      </div>
      <div class="balance" id="balanceDisplay">🪙 0 💎 0</div>
    </div>
  </div>

  <!-- INTRO (полочки) -->
  <div id="screenIntro" class="screen active">
    <div class="shelves">
      <div class="shelf card-panel" id="shelfMenu">
        <h3>Меню</h3>
        <p>Запуск игры, выбор размера комнаты и быстрый доступ к настройкам.</p>
        <div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap">
          <select id="lobbySize"><option>3</option><option>4</option><option>5</option></select>
          <div class="big-btn" id="startFromIntro">Начать игру</div>
          <div class="big-btn" id="btnExchange">Обмен валюты</div>
          <div class="big-btn" id="btnCasino">Азартные игры</div>
          <div class="big-btn" id="btnRules">Правила</div>
        </div>
      </div>
    </div>
  </div>

  <!-- EXCHANGE -->
  <div id="screenExchange" class="screen">
    <div class="card-panel">
      <h3>Обмен валюты</h3>
      <p class="small-muted">Разменяйте 💎 на 🪙 и обратно по текущему курсу.</p>
      <div class="exchange-panel">
        <div class="exchange-form">
          <h4>💎 → 🪙 (3💎 = 1🪙, кратно 3)</h4>
          <input id="diamondsToCoinsInput" type="number" min="3" step="3" class="exchange-input" placeholder="Количество 💎 (кратно 3)">
          <div id="diamondsToCoinsResult" class="exchange-result">🪙 0</div>
          <div id="diamondsToCoinsError" class="exchange-error" style="display:none;"></div>
          <div class="big-btn" id="confirmDiamondsToCoins">Подтвердить сделку</div>
        </div>
        <div class="exchange-form">
          <h4>🪙 → 💎 (1🪙 = 2💎, любое количество)</h4>
          <input id="coinsToDiamondsInput" type="number" min="1" class="exchange-input" placeholder="Количество 🪙">
          <div id="coinsToDiamondsResult" class="exchange-result">💎 0</div>
          <div class="big-btn" id="confirmCoinsToDiamonds">Подтвердить сделку</div>
        </div>
      </div>
      <div style="display:flex;gap:6px;margin-top:6px">
        <div class="big-btn" id="backFromExchange">Назад</div>
      </div>
    </div>
  </div>

  <!-- CASINO -->
  <div id="screenCasino" class="screen">
    <div class="card-panel">
      <h3>Азартные игры</h3>
      <p class="small-muted">Рискуйте валютой в мини-играх казино.</p>
      <div class="casino-grid">
        <div class="casino-item">
          <h4>Русская рулетка</h4>
          <p>Выберите уровень: Легко (+5💎, 5 пустых/1 заряженный) или Сложно (+15💎, 1 пустой/5 заряженных).</p>
          <input id="rouletteBetInput" type="number" min="5" class="exchange-input" placeholder="Ставка 💎 (мин. 5)" style="margin-bottom:8px;">
          <select id="rouletteDifficulty"><option value="easy">Легко (+5💎)</option><option value="hard">Сложно (+15💎)</option></select>
          <div class="big-btn" id="startRoulette">Играть</div>
          <div id="rouletteResult"></div>
          <div id="countdown"></div>
        </div>
        <div class="casino-item">
          <h4>Разноцветная рулетка</h4>
          <p>Выберите цвет: 🔴 (45%, +4💎), ⚫️ (45%, +4💎), 🟢 (10%, +100💎).</p>
          <input id="colorBetInput" type="number" min="5" class="exchange-input" placeholder="Ставка 💎 (мин. 5)" style="margin-bottom:8px;">
          <div class="color-choice">
            <button class="color-btn" data-color="🔴" id="colorRed">🔴</button>
            <button class="color-btn" data-color="⚫️" id="colorBlack">⚫️</button>
            <button class="color-btn" data-color="🟢" id="colorGreen">🟢</button>
          </div>
          <div class="big-btn" id="confirmColorChoice" style="display:none;">Подтвердить выбор</div>
          <div id="rouletteSpinner"></div>
          <div id="colorResult"></div>
        </div>
        <div class="casino-item">
          <h4>Золотая лихорадка (20🪙)</h4>
          <p>Нажмите "Повезет" для активации (7% шанс на джекпот 🪙777).</p>
          <div class="big-btn" id="luckyBtn">Повезет</div>
          <div class="big-btn" id="confirmGoldRush" style="display:none;">Подтвердить игру</div>
          <div id="goldRushResult"></div>
        </div>
        <div class="casino-item">
          <h4>Слот-машинка</h4>
          <p>Высокий риск, щедрые выплаты. Тяните рычаг!</p>
          <input id="slotBetInput" type="number" min="10" class="exchange-input" placeholder="Ставка 💎 (мин. 10)" style="margin-bottom:8px;">
          <div class="big-btn" id="btnSlots">🎰 Играть в слоты</div>
        </div>
        <div class="casino-item">
          <h4>Ставка на лошадку</h4>
          <p>Закрыто на ремонт</p>
          <div class="big-btn" id="btnHorseRace" style="background:gray; cursor:not-allowed;">🐎 Закрыто на ремонт</div>
        </div>
      </div>
      <div style="display:flex;gap:6px;margin-top:6px">
        <div class="big-btn" id="backFromCasino">Назад</div>
      </div>
    </div>
  </div>

  <!-- HORSE RACE - Closed -->
  <div id="screenHorseRace" class="screen">
    <div id="horseContent">
      <h3>Ставка на лошадку</h3>
      <div id="horseClosed">🔧 Закрыто на ремонт. Скоро откроем!</div>
    </div>
    <div class="big-btn" id="backFromHorseRace">Назад</div>
  </div>

  <!-- SLOTS -->
  <div id="screenSlots" class="screen">
    <div id="slotContent">
      <div id="slotReels" style="display: flex; gap: 16px; margin-bottom: 20px;">
        <div id="reel1" class="slot-reel"></div>
        <div id="reel2" class="slot-reel"></div>
        <div id="reel3" class="slot-reel"></div>
      </div>
      <div style="margin-bottom: 20px;">
        <div class="balance" style="font-size: 18px;">💎 <span id="slotBalance">0</span></div>
      </div>
      <button id="leverBtn" class="lever-btn">🚀 Тянуть</button>
      <div id="slotResult"></div>
    </div>
    <div class="big-btn" id="backFromSlots">Назад</div>
  </div>

  <!-- PROFILE -->
  <div id="screenProfile" class="screen">
    <div class="card-panel">
      <h3>Профиль</h3>
      <div style="display:flex;gap:10px;align-items:center">
        <div id="profileAvatar" class="avatar large">👤</div>
        <div style="flex:1">
          <div style="display:flex;gap:6px;align-items:center">
            <input id="nickProfile" type="text" placeholder="ЗлойКозёл_42" style="padding:6px;border-radius:8px;background:var(--glass);border:1px solid rgba(0,0,0,0.05);color:var(--text-color);width:220px">
            <div class="big-btn" id="saveNick">Сохранить</div>
            <div class="big-btn" id="backFromProfile">Назад</div>
            <div id="goldRushBadge" style="display:none;background:linear-gradient(to right, gold, yellow);color:black;padding:3px 6px;border-radius:6px;font-size:11px;font-weight:600;">🏆 Покоритель лихорадки</div>
          </div>
          <div style="margin-top:8px;display:flex;gap:6px;align-items:center">
            <input id="avatarInput" type="file" accept="image/*" style="color:var(--text-color)">
          </div>
          <div style="margin-top:8px">
            <div class="small-muted">Выбрать эмодзи-аватар:</div>
            <select id="avatarSelect" style="padding:6px;border-radius:8px;background:var(--glass);border:1px solid rgba(0,0,0,0.05);color:var(--text-color);width:100%;margin-bottom:6px;"></select>
            <div class="big-btn" id="applyAvatar" style="width:100%;margin-bottom:6px">Применить аватар</div>
          </div>
          <div style="margin-top:8px">
            <div style="display:flex;gap:6px;align-items:center">
              <label class="small-muted">Статус:</label>
              <select id="statusSelect">
                <option value="none">Без статуса</option>
              </select>
              <div class="big-btn" id="saveStatus">Сохранить статус</div>
            </div>
          </div>
          <div style="margin-top:8px">
            <div class="small-muted">Баланс: <span id="balText">🪙0 💎0</span></div>
            <div class="small-muted">Инвентарь:</div>
            <div id="inventory" class="inv"></div>
          </div>
          <div style="margin-top:12px">
            <h4 class="small-muted">Персонализация</h4>
            <div class="personalization-grid" id="personalizationGrid"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- SHOP -->
  <div id="screenShop" class="screen">
    <div class="card-panel">
      <h3>Магазин</h3>
      <p class="small-muted">Ниже — витрина товаров и услуг. Я придумывал их так, чтобы монетка давала ощутимую мелкую выгоду.</p>
      <div class="shop-grid" id="shopGrid">
        <!-- items rendered by JS -->
      </div>
      <div style="margin-top:8px;display:flex;gap:6px">
        <div class="big-btn" id="backFromShop">Назад</div>
      </div>
    </div>
  </div>

  <!-- RULES -->
  <div id="screenRules" class="screen">
    <div class="card-panel">
      <h3>Правила</h3>
      <div style="max-height:300px;overflow:auto;padding-right:4px">
        <p class="small-muted">Игра называется «Лечо».</p>
        <p class="small-muted">В игре используются 4 масти, как в стандартных карточных играх: ♣️♠️♥️♦️. Колода состоит из 36 карт.</p>
        <p class="small-muted">Каждому игроку раздается по 3 случайные карты из колоды. Самая нижняя карта в колоде определяет козырь на партию.</p>
        <p class="small-muted">Игра начинается после раздачи. Игроки могут ходить (атаковать) или отбиваться картами. Показывать карты до конца игры запрещено. Нет других вариантов хода. Первый ход делает игрок с наименьшим козырем, далее по часовой стрелке.</p>
        <p class="small-muted">Атакующий игрок может свайпом выкинуть ненужную карту, чтобы попытаться собрать комбинацию, взяв новую из колоды. Если обороняющийся не может отбить атакующую карту, он забирает её себе. Если атака отбита, обе карты (атака и отбой) перемешиваются и кладутся в колоду для дальнейшего вытягивания.</p>
        <p class="small-muted">Комбинации собираются строго из 3 карт. Всего 3 типа комбинаций:</p>
        <ol class="small-muted">
          <li>Повтор: 3 карты одного достоинства (например, 6♣️, 6♠️, 6♥️).</li>
          <li>Последовательность: 3 карты подряд по достоинству, от меньшего к большему (например, J♥️, Q♠️, K♣️ или 6♠️, 7♣️, 8♥️).</li>
          <li>Масть: 3 карты одной масти (например, 7♥️, Q♥️, A♥️ или 6♣️, 7♣️, 9♣️).</li>
        </ol>
        <p class="small-muted">Если комбинация собрана, но игрок не нажал «Лечо», игра продолжается — это проблема игрока. Если нажать «Лечо» без комбинации, появится предупреждение: «Вы не собрали комбинацию!». После успешного «Лечо» игрок получает 1 🪙 и не может повторно нажать кнопку — ожидать конца игры.</p>
        <p class="small-muted">Игра длится, пока не останется один игрок без комбинации или не объявивший «Лечо» timely.</p>
        <p class="small-muted">В конце игры проигравший угадывает комбинации победителей по подсказке (тип комбинации: повтор, последовательность или масть). Обман запрещен. За каждую угаданную комбинацию дается 1 💎.</p>
        <p class="small-muted">За каждую неугаданную комбинацию из новой колоды вытягивается 3 карты. Если в них есть комбинация, добавляется еще 3. Если вытянуто больше 15 карт, это «колода» — игрок проиграл дважды.</p>
        <h4 class="small-muted">Обмен валюты</h4>
        <p class="small-muted">💎 → 🪙: 3💎 = 1🪙 (кратно 3). 🪙 → 💎: 1🪙 = 2💎 (любое количество). Автоподсчет и подтверждение сделки.</p>
        <h4 class="small-muted">Азартные игры</h4>
        <p class="small-muted">1. Русская рулетка (мин. 5💎): Выбор сложности (легко: +5💎; сложно: +15💎). Обратный отсчет и выстрел (💥/💨).</p>
        <p class="small-muted">2. Разноцветная рулетка (мин. 5💎): Выбор 🔴/⚫️/🟢. Шансы: 45%/45%/10%. Выигрыши: +4💎/+4💎/+100💎. Анимация смены шариков 3-6 сек.</p>
        <p class="small-muted">3. Золотая лихорадка (20🪙): Кнопки «Повезет» и «Подтвердить». 7% шанс на 🪙777.</p>
        <p class="small-muted">4. Слот-машинка (мин. 10💎): 3 барабана, символы: фрукты, 🔔, 💀. Выплаты: 3🔔 +100💎, 3 фрукта +30💎, 2🔔 +15💎, 💀 проигрыш, иначе возврат.</p>
        <p class="small-muted">5. Ставка на лошадку (от 2🪙): Выбор лошади 1-5, коэффициенты x1.5-x8. Забег 25-45 сек с анимацией.</p>
        <p class="small-muted">Предметы из магазина (хинт, подгляд, пропуск и т.д.) используются из инвентаря во время игры через панель в игре.</p>
      </div>
      <div style="display:flex;gap:6px;margin-top:6px">
        <div class="big-btn" id="backFromRules">Назад</div>
      </div>
    </div>
  </div>

  <!-- GAME -->
  <div id="screenGame" class="screen">
    <div class="table">
      <div style="display: grid; grid-template-columns: 1fr auto; gap: 8px; flex:1;">
        <div>
          <div style="display:flex;justify-content:space-between;align-items:center; margin-bottom:8px;">
            <div class="players-row" id="playersRow"></div>
            <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
              <div class="small-muted">Козырь</div>
              <span class="trump" id="trumpCard">—</span>
              <div class="small-muted">Колода: <span id="deckCount">0</span></div>
            </div>
          </div>

          <div class="table-center">
            <div class="table-slot">
              <div class="small-muted">Атакующий</div>
              <div id="attackerSlot" class="hand"></div>
            </div>
            <div class="table-slot">
              <div class="small-muted">Защитник</div>
              <div id="defenderSlot" class="hand"></div>
            </div>
          </div>

          <div style="display:flex;justify-content:space-between;align-items:flex-end; margin-top:8px;">
            <div style="display:flex;flex-direction:column;gap:6px">
              <div class="status" id="turnInfo">Ход: —</div>
              <div id="actionHint" class="small-muted">Тапните карту для атаки/защиты.</div>
            </div>

            <div style="display:flex;flex-direction:column;gap:6px;min-width:220px">
              <div id="log" role="log"></div>
            </div>
          </div>

          <div style="margin-top:4px">
            <div class="small-muted">Ваши карты:</div>
            <div class="hand" id="playerHand" style="margin-top:6px"></div>
          </div>
        </div>
        <div class="game-inv-panel">
          <h4 class="small-muted">Инвентарь</h4>
          <div id="gameInventory"></div>
        </div>
      </div>
      <div style="display:flex;gap:6px" class="controls">
        <div class="big-btn" id="drawBtn">Беру</div>
        <div class="big-btn" id="returnBtn">Вернуть отправителю — 🪙15</div>
        <div class="big-btn" id="lechoBtn">Лечо</div>
      </div>
    </div>
  </div>

  <!-- OUTRO -->
  <div id="screenOutro" class="screen">
    <div class="card-panel">
      <h3 id="outroTitle">Игра окончена</h3>
      <div id="outroText"></div>
      <div style="display:flex;gap:6px;margin-top:6px">
        <div class="big-btn" id="playAgain">Играть заново</div>
        <div class="big-btn" id="backFromOutro">В меню</div>
      </div>
    </div>
  </div>

  <!-- GUESS -->
  <div id="screenGuess" class="screen">
    <div class="card-panel">
      <h3>Угадайте комбинации победителей</h3>
      <div id="guessForms"></div>
      <div style="display:flex;gap:6px;margin-top:6px">
        <div class="big-btn" id="submitGuess">Угадать</div>
        <div class="big-btn" id="backFromGuess">В меню</div>
      </div>
    </div>
  </div>

</div>

<!-- Modal -->
<div id="modal">
  <div id="modalContent">
    <div id="modalText"></div>
    <button id="modalClose">OK</button>
  </div>
</div>

<div class="version">MegaSlots update. v2.2</div>

<script>
/* ================= README: Progress Saving =================
 * feat: save progress by telegram userId via localStorage
 * - Gets userId from Telegram.WebApp.initDataUnsafe.user.id
 * - State: {coins, diamonds, nick, avatar, status, inventory, avatars, goldRushWon, wins, level}
 * - Auto-load on init, auto-save on changes via onStateChange()
 * - If no userId: shows banner warning (local only)
 * - For server migration: replace saveData/loadData with uploadToServer/downloadFromServer
 * - Security: No sensitive data stored; validate initData on server later
 * ======================================================== */

/* ================= CONFIG / STATE ================= */
const RETURN_COST = 15;
let state = { coins: 0, diamonds: 0, level: 1, wins: 0, nick: '', avatar: '', status: 'none', inventory: {}, avatars: [], goldRushWon: false };
let betDoublerActive = false;
let insuranceActive = false;
const DEFAULT_AVATAR = '';
const AVATARS_KEY = 'lecho_avatars'; // Legacy, but now in state
const $ = id => document.getElementById(id);

/* Telegram WebApp Init */
const tg = window.Telegram?.WebApp || null;
const initUser = tg?.initDataUnsafe?.user || null;
const userId = initUser?.id ?? null;
const username = initUser?.username ?? null;
if (tg) {
  tg.expand();
  tg.ready();
}

/* Storage Functions */
function saveData(userId, data) {
  if (!userId) return; // Skip if no ID
  localStorage.setItem(`gameData_${userId}`, JSON.stringify(data));
  // Optional: uploadToServer(data);
}

function loadData(userId) {
  if (!userId) return null;
  const raw = localStorage.getItem(`gameData_${userId}`);
  return raw ? JSON.parse(raw) : null;
}

// Stubs for future backend
async function uploadToServer(state) {
  // Later: fetch('/save', {method:'POST', body: JSON.stringify({userId, state}), headers:{'Content-Type':'application/json'}})
  return Promise.resolve(true);
}

async function downloadFromServer() {
  // Later: fetch('/load', {method:'GET'})
  return Promise.resolve(null);
}

/* Auto-load State */
const loadedState = loadData(userId) || state;
Object.assign(state, loadedState);
let balance = state.coins;
let diamonds = state.diamonds;

/* Auto-save on Change */
function onStateChange() {
  state.coins = balance;
  state.diamonds = diamonds;
  state.wins = state.wins || 0; // Increment on wins if needed
  state.level = Math.floor(state.wins / 10) + 1; // Example leveling
  state.nick = state.nick || genBotName();
  state.inventory = state.inventory || {};
  state.avatars = state.avatars || [];
  state.goldRushWon = state.goldRushWon || false;
  state.status = state.status || 'none';
  state.avatar = state.avatar || '';
  saveData(userId, state);
}

/* Fallback UI - hide if in Telegram */
if (!userId && !tg) {
  const banner = $('fallbackBanner');
  banner.textContent = 'ID Telegram не получен — прогресс сохраняется локально на этом устройстве. Рекомендуется открыть через Telegram WebApp.';
  banner.style.display = 'block';
}

/* UI refs */
const ui = {
  playersRow: $('playersRow'), attackerSlot:$('attackerSlot'), defenderSlot:$('defenderSlot'),
  playerHand:$('playerHand'), deckCount:$('deckCount'), trumpCard:$('trumpCard'),
  log:$('log'), turnInfo:$('turnInfo'), actionHint:$('actionHint'),
  drawBtn:$('drawBtn'), lechoBtn:$('lechoBtn'), returnBtn:$('returnBtn'),
  balanceDisplay:$('balanceDisplay'), invPreview:$('invPreview'), inventory:$('inventory'),
  gameInventory: $('gameInventory')
};

/* Game consts */
const RANKS=['6','7','8','9','10','J','Q','K','A'];
const SUITS=['♣️','♠️','♥️','♦️'];
const RANK_VALUE = r => RANKS.indexOf(r);
const BOT_EMOJIS = ['😼','🦾','🍔','🔥','🧊','🥟','🧆','🎯','🛠️','🍕'];
const PREFIXES = ['Ебаный','Хуевый','Пиздатый','Сука','Блядский','Пидорский','Говно','Залупный','Мудак','Долбоёб'];
const FUN = ['Хуй','Пиздец','Жопа','Сиськи','Блядина','Пиздюк','Мандавошка','Еблан','Дрочер','Конча'];

/* Shop consts */
const SHOP_ITEMS = [
  { id:'theme_dark', title:'Тема «Ночной Техас»', desc:'Покерная зелёная тема интерфейса — стильно и атмосферно.', price:25, type:'theme' },
  { id:'theme_premium_gold', title:'Премиум «Золотой покер»', desc:'Золотая тема с премиум-эффектами.', price:50, type:'theme' },
  { id:'avatar_pack', title:'Пак аватаров', desc:'5 уникальных эмодзи-аватаров для ботов/вас.', price:15, type:'avatar' },
  { id:'voucher_pack', title:'Пак возвратов (×3)', desc:'Три бесплатных возврата атаки (конвертируется в витрине).', price:35, type:'voucher', qty:3 },
  { id:'hint', title:'Разовый хинт', desc:'Показывает возможно собираемую комбинацию у вас (однократно).', price:12, type:'hint' },
  { id:'extra_draw', title:'Доп. вытяжка', desc:'Позволяет выкинуть карту без взятия новой (один раз, для снижения руки).', price:18, type:'extra_draw' },
  { id:'peek_deck', title:'Подгляд в колоду', desc:'Показывает верхнюю карту колоды (один раз).', price:25, type:'peek' },
  { id:'skip_turn', title:'Пропуск хода', desc:'Пропустить свой ход атаки (один раз).', price:35, type:'skip' },
  { id:'reveal_combo', title:'Разоблачение комбо', desc:'Узнайте тип комбо у случайного соперника (один раз).', price:35, type:'reveal' },
  { id:'extra_life', title:'Доп. жизнь', desc:'Избегните поражения один раз, если проиграете.', price:45, type:'extra_life' },
  { id:'telepathy', title:'Телепатия', desc:'видит случайную карту из руки противника', price:75, type:'telepathy' },
  { id:'trump_swap', title:'Подмена Козыря', desc:'один раз за игру сменить козырь', price:90, type:'trump_swap' },
  { id:'game_roulette', title:'Русская Рулетка в Игре', desc:'заставляет противника пропустить ход (50% шанс)', price:60, type:'game_roulette' },
  { id:'anti_lecho', title:'Анти-Лечо', desc:'блокирует возможность объявления Лечо одним игроком', price:120, type:'anti_lecho' },
  { id:'bet_doubler', title:'Удвоитель Ставки', desc:'следующая победа в казино ×2', price:25, type:'bet_doubler' },
  { id:'insurance', title:'Страховка', desc:'возвращает 50% при проигрыше в казино', price:18, type:'insurance' },
  { id:'free_sample', title:'Бесплатный Образец', desc:'тестовое использование любого предмета', price:10, type:'free_sample' }
];
const AVATAR_PACKS = {
  'avatar_pack': ['🤠', '🧔', '👹', '🤖', '👻']
};
const STATUSES = {
  none: 'Без статуса',
  conqueror: 'Покоритель лихорадки'
};
const HORSE_ODDS = {1: 1.5, 2: 2.0, 3: 3.0, 4: 5.0, 5: 8.0};

/* runtime state */
let deck=[], discard=[], trump=null, originalTrump=null, trumpSwapped = false;
let players=[], turnIndex=0, tableAttack=null, tableDefend=null;
let processing=false, selectedCardUid=null;
let lobbySize = Number($('lobbySize').value || 3);
let exchangeProcessing = false;

/* ================= Helpers ================= */
function shuffle(a){ for(let i=a.length-1;i>0;i--){ let j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]] } }
function makeDeck(){ const d=[]; for(const s of SUITS) for(const r of RANKS) d.push({rank:r,suit:s,uid:Math.random().toString(36).slice(2)}); return d; }
function log(msg){ const el = document.createElement('div'); el.textContent = msg; ui.log.prepend(el); }
function saveBalance(){ onStateChange(); ui.balanceDisplay.textContent = `🪙 ${balance} 💎 ${diamonds}`; $('slotBalance').textContent = diamonds; }
function pickBotEmoji(){ return BOT_EMOJIS[Math.floor(Math.random()*BOT_EMOJIS.length)]; }
function avatarHtml(a){ if(!a) return '<div class="avatar small">👤</div>'; if(a.type==='emoji') return `<div class="avatar small">${a.value}</div>`; return `<div class="avatar small"><img src="${a.value}" style="width:100%;height:100%;object-fit:cover;border-radius:12px"/></div>`; }
function getStatusText(statusKey) { return STATUSES[statusKey] || ''; }

/* Modal helper */
function showModal(msg, title = '') {
  const modal = $('modal');
  const content = $('modalContent');
  const text = $('modalText');
  text.innerHTML = title ? `<h4>${title}</h4><p>${msg}</p>` : `<p>${msg}</p>`;
  modal.style.display = 'flex';
}
$('modal').onclick = $('modalClose').onclick = () => { $('modal').style.display = 'none'; };

/* ============== Lobby / Start ============== */
$('startFromIntro').onclick = ()=>{ lobbySize = Number($('lobbySize').value||3); startNewGame(); };
$('btnNew').onclick = ()=>{ lobbySize = Number($('lobbySize').value||3); startNewGame(); };
$('btnIntro').onclick = ()=>showScreen('screenIntro');
$('btnRules').onclick = ()=>showScreen('screenRules');
$('backFromRules').onclick = ()=>showScreen('screenIntro');
$('btnHorseRace').onclick = () => showModal('Скачки закрыты на ремонт. Вернёмся скоро!');
$('backFromHorseRace').onclick = ()=>{ showScreen('screenCasino'); };
$('btnProfile').onclick = ()=>{ 
  showScreen('screenProfile'); 
  $('nickProfile').value = state.nick || genBotName(); 
  loadAvatars(); 
  const v = state.avatar || DEFAULT_AVATAR; 
  if(v) { 
    if(v.startsWith('data:')) { 
      document.getElementById('profileAvatar').innerHTML = `<img src="${v}" style="width:100%;height:100%;object-fit:cover;border-radius:12px"/>`; 
    } else { 
      document.getElementById('profileAvatar').innerHTML = `<div class="avatar large">${v}</div>`; 
      $('avatarSelect').value = v; 
    } 
  } 
  loadStatusSelect(); 
  const won = state.goldRushWon; 
  $('goldRushBadge').style.display = won ? 'flex' : 'none'; 
  updateInventoryUI(); 
  renderPersonalization(); 
  updateBalText(); 
  onStateChange();
};
$('btnShop').onclick = ()=>showScreen('screenShop');
$('backFromShop').onclick = ()=>showScreen('screenIntro');
$('backFromProfile').onclick = ()=>showScreen('screenIntro');
$('backFromOutro').onclick = ()=>showScreen('screenIntro');
$('backFromGuess').onclick = ()=>showScreen('screenIntro');
$('backFromExchange').onclick = ()=>showScreen('screenIntro');
$('backFromCasino').onclick = ()=>showScreen('screenIntro');
$('backFromSlots').onclick = ()=>{ showScreen('screenCasino'); };

$('saveNick').onclick = ()=>{ 
  const n = $('nickProfile').value.trim() || genBotName(); 
  state.nick = n; 
  onStateChange();
  if (n.toUpperCase() === 'МАКАН') {
    balance += 9999;
    diamonds += 9999;
    saveBalance();
  }
  showScreen('screenIntro'); 
};

function loadStatusSelect() {
  const select = $('statusSelect');
  select.innerHTML = '<option value="none">Без статуса</option>';
  if (state.goldRushWon) {
    const opt = document.createElement('option');
    opt.value = 'conqueror';
    opt.textContent = 'Покоритель лихорадки';
    select.appendChild(opt);
  }
  select.value = state.status;
}

$('saveStatus').onclick = () => {
  const status = $('statusSelect').value;
  if (status === 'conqueror' && !state.goldRushWon) {
    showModal('Статус доступен только после покорения лихорадки!');
    return;
  }
  state.status = status;
  onStateChange();
  showModal('Статус сохранен!');
};

/* avatar upload preview */
$('avatarInput').addEventListener('change', e=>{ const f = e.target.files && e.target.files[0]; if(!f) return; const r = new FileReader(); r.onload=()=>{ state.avatar = r.result; onStateChange(); document.getElementById('profileAvatar').innerHTML = `<img src="${r.result}" style="width:100%;height:100%;object-fit:cover;border-radius:12px"/>`; $('avatarSelect').value = ''; }; r.readAsDataURL(f); });

/* avatar select */
function loadAvatars() {
  const avs = state.avatars || [];
  const sel = $('avatarSelect');
  sel.innerHTML = '<option value="">Стандартный 👤</option>';
  avs.forEach(a => { 
    const opt = document.createElement('option'); 
    opt.value = a; 
    opt.textContent = a; 
    sel.appendChild(opt); 
  });
  const current = state.avatar;
  if (current && !current.startsWith('data:') && avs.includes(current)) {
    sel.value = current;
  }
}
$('applyAvatar').onclick = () => {
  const val = $('avatarSelect').value;
  if (!val) {
    state.avatar = '';
  } else {
    state.avatar = val;
  }
  onStateChange();
  document.getElementById('profileAvatar').innerHTML = !val ? '<div class="avatar large">👤</div>' : `<div class="avatar large">${val}</div>`;
};

function updateBalText() {
  $('balText').textContent = `🪙${balance} 💎${diamonds}`;
}

/* Exchange logic - with strict check and anti-farming */
$('diamondsToCoinsInput').addEventListener('input', (e) => {
  const amt = Number(e.target.value);
  const errorEl = $('diamondsToCoinsError');
  if (amt < 3 || amt % 3 !== 0) {
    $('diamondsToCoinsResult').textContent = '';
    errorEl.textContent = 'Сумма размена не кратна 3!';
    errorEl.style.display = 'block';
  } else {
    const result = Math.floor(amt / 3);
    $('diamondsToCoinsResult').textContent = `🪙 ${result}`;
    errorEl.style.display = 'none';
  }
});
$('coinsToDiamondsInput').addEventListener('input', (e) => {
  const amt = Number(e.target.value);
  const result = amt * 2;
  $('coinsToDiamondsResult').textContent = `💎 ${result}`;
});
$('btnExchange').onclick = () => showScreen('screenExchange');
$('confirmDiamondsToCoins').onclick = async () => {
  if (exchangeProcessing) return;
  exchangeProcessing = true;
  $('confirmDiamondsToCoins').disabled = true;
  const amt = Number($('diamondsToCoinsInput').value);
  if (amt < 3 || amt % 3 !== 0) { showModal('Количество должно быть кратно 3 и >=3'); exchangeProcessing = false; $('confirmDiamondsToCoins').disabled = false; return; }
  const coins = Math.floor(amt / 3);
  if (diamonds < amt) { showModal('Недостаточно 💎'); exchangeProcessing = false; $('confirmDiamondsToCoins').disabled = false; return; }
  diamonds -= amt;
  balance += coins;
  saveBalance();
  showModal(`Получено 🪙${coins}`);
  $('diamondsToCoinsInput').value = '';
  $('diamondsToCoinsResult').textContent = '🪙 0';
  $('diamondsToCoinsError').style.display = 'none';
  await new Promise(resolve => setTimeout(resolve, 1000));
  exchangeProcessing = false;
  $('confirmDiamondsToCoins').disabled = false;
};
$('confirmCoinsToDiamonds').onclick = async () => {
  if (exchangeProcessing) return;
  exchangeProcessing = true;
  $('confirmCoinsToDiamonds').disabled = true;
  const amt = Number($('coinsToDiamondsInput').value);
  if (amt < 1) { showModal('Количество >=1'); exchangeProcessing = false; $('confirmCoinsToDiamonds').disabled = false; return; }
  const dias = amt * 2;
  if (balance < amt) { showModal('Недостаточно 🪙'); exchangeProcessing = false; $('confirmCoinsToDiamonds').disabled = false; return; }
  balance -= amt;
  diamonds += dias;
  saveBalance();
  showModal(`Получено 💎${dias}`);
  $('coinsToDiamondsInput').value = '';
  $('coinsToDiamondsResult').textContent = '💎 0';
  await new Promise(resolve => setTimeout(resolve, 1000));
  exchangeProcessing = false;
  $('confirmCoinsToDiamonds').disabled = false;
};

/* Casino logic */
let selectedColor = null;
document.querySelectorAll('.color-btn').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedColor = btn.dataset.color;
    $('confirmColorChoice').style.display = 'block';
  };
});
$('btnCasino').onclick = () => { showScreen('screenCasino'); resetCasino(); };
$('btnSlots').onclick = () => showScreen('screenSlots');

function resetCasino() {
  $('rouletteResult').innerHTML = '';
  $('colorResult').innerHTML = '';
  $('goldRushResult').innerHTML = '';
  $('confirmColorChoice').style.display = 'none';
  document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('selected'));
  selectedColor = null;
  $('confirmGoldRush').style.display = 'none';
  $('luckyBtn').style.display = 'block';
  const won = state.goldRushWon;
  if(won) {
    $('luckyBtn').style.background = 'gray';
    $('luckyBtn').textContent = 'Победа достигнута';
    $('luckyBtn').onclick = () => { showModal('Вы уже покорили лихорадку! Эта удача не повторяется'); };
  } else {
    $('luckyBtn').style.background = 'var(--accent)';
    $('luckyBtn').textContent = 'Повезет';
    $('luckyBtn').onclick = goldRushBet;
  }
  saveBalance();
}

let selectedHorse = null;
let raceInterval = null;
let currentTimeLeft = 0; // global for race timer

function resetHorseRace() {
  // Closed, no need
}

function startRace(duration, bet, selected) {
  // Closed, no need
}

// Russian Roulette - free bet
function applyCasinoModifiers(isWin, winAmount, betAmount) {
  if (isWin && winAmount > betAmount && betDoublerActive) {
    diamonds += winAmount * 2;
    betDoublerActive = false;
    showModal('Удвоитель сработал!');
  } else if (!isWin && insuranceActive) {
    const refund = Math.floor(betAmount / 2);
    diamonds += refund;
    insuranceActive = false;
    showModal(`Страховка вернула ${refund}💎`);
  }
  saveBalance();
}

$('startRoulette').onclick = () => {
  const bet = Number($('rouletteBetInput').value) || 5;
  if (diamonds < bet) { showModal('Недостаточно 💎'); return; }
  diamonds -= bet;
  saveBalance();
  const diff = $('rouletteDifficulty').value;
  const emptySlots = diff === 'easy' ? 5 : 1;
  const winSlots = emptySlots;
  const isWin = Math.random() < (winSlots / 6);
  const winAmount = diff === 'easy' ? 5 : 15;
  let countdown = 3;
  const cdEl = $('countdown');
  cdEl.textContent = countdown;
  const interval = setInterval(() => {
    countdown--;
    if (countdown > 0) cdEl.textContent = countdown;
    else {
      clearInterval(interval);
      setTimeout(() => {
        cdEl.textContent = isWin ? '💨' : '💥';
        if (isWin) {
          const payout = winAmount * (bet / 5);
          diamonds += payout;
          $('rouletteResult').innerHTML = `<p>Выигрыш! +${payout}💎</p>`;
          applyCasinoModifiers(true, payout, bet);
        } else {
          $('rouletteResult').innerHTML = '<p>Проигрыш!</p>';
          applyCasinoModifiers(false, 0, bet);
        }
      }, 1000);
    }
  }, 1000);
};

// Color Roulette - free bet
$('confirmColorChoice').onclick = () => {
  const bet = Number($('colorBetInput').value) || 5;
  if (!selectedColor || diamonds < bet) { showModal('Выберите цвет или недостаточно 💎'); return; }
  diamonds -= bet;
  saveBalance();
  const colors = ['🔴', '⚫️', '🟢'];
  const probs = [0.45, 0.45, 0.10];
  let rand = Math.random();
  let chosenIdx = 0;
  let cum = 0;
  for (let i = 0; i < probs.length; i++) {
    cum += probs[i];
    if (rand <= cum) { chosenIdx = i; break; }
  }
  const chosenColor = colors[chosenIdx];
  const spinner = $('rouletteSpinner');
  spinner.textContent = selectedColor;
  let spinTime = 3000 + Math.random() * 3000;
  let start = Date.now();
  const spinInterval = setInterval(() => {
    spinner.textContent = colors[Math.floor(Math.random() * colors.length)];
  }, 100);
  setTimeout(() => {
    clearInterval(spinInterval);
    spinner.textContent = chosenColor;
    let winAmount = 0;
    let isWin = false;
    if (chosenColor === selectedColor) {
      winAmount = chosenColor === '🟢' ? 100 : 4;
      isWin = true;
      const payout = winAmount * (bet / 5);
      $('colorResult').innerHTML = `<p>Выигрыш! +${payout}💎</p>`;
      diamonds += payout;
    } else {
      $('colorResult').innerHTML = '<p>Проигрыш!</p>';
      isWin = false;
    }
    applyCasinoModifiers(isWin, winAmount, bet);
    resetCasino();
  }, spinTime);
};

// Gold Rush - fixed
function goldRushBet() {
  if (balance < 20) { showModal('Недостаточно 🪙'); return; }
  balance -= 20;
  saveBalance();
  $('luckyBtn').style.display = 'none';
  $('confirmGoldRush').style.display = 'block';
  const isJackpot = Math.random() < 0.07;
  $('confirmGoldRush').onclick = () => {
    if (isJackpot) {
      state.goldRushWon = true;
      let step = 0;
      const target = balance + 777;
      const interval = setInterval(() => {
        step += 77;
        if (step >= 777) {
          step = 777;
          clearInterval(interval);
          balance = target;
          saveBalance();
          document.body.style.animation = 'flash 0.5s';
          setTimeout(() => { document.body.style.animation = ''; }, 500);
          for (let i = 0; i < 20; i++) {
            const conf = document.createElement('div');
            conf.textContent = ['🎉', '🎊', '💰'][Math.floor(Math.random() * 3)];
            conf.style.cssText = 'position:fixed; left:' + Math.random() * 100 + '%; top:100vh; font-size:30px; pointer-events:none; z-index:1000;';
            conf.style.animation = 'fall 2s forwards';
            document.body.appendChild(conf);
            setTimeout(() => conf.remove(), 2000);
          }
          $('goldRushResult').innerHTML = '<div style="font-size:40px;color:gold;text-align:center;">🎉 ДЖЕКПОТ! +777🪙 🎊</div>';
          $('luckyBtn').style.background = 'gray';
          $('luckyBtn').textContent = 'Победа достигнута';
          $('luckyBtn').onclick = () => { showModal('Вы уже покорили лихорадку! Эта удача не повторяется'); };
        }
        const tempBal = balance - 777 + step;
        ui.balanceDisplay.textContent = `🪙 ${tempBal} 💎 ${diamonds}`;
      }, 100);
      let winAmount = 777;
      if (betDoublerActive) {
        balance += winAmount;
        betDoublerActive = false;
        showModal('Удвоитель сработал!');
        saveBalance();
      }
      onStateChange();
    } else {
      $('goldRushResult').innerHTML = '<div style="font-size:30px;text-align:center;">😔 Не повезло!</div><div class="big-btn" id="tryAgainGold" style="margin-top:10px;">Попробовать снова</div>';
      $('tryAgainGold').onclick = () => { resetCasino(); };
      if (insuranceActive) {
        balance += 10;
        insuranceActive = false;
        showModal('Страховка вернула 10🪙');
        saveBalance();
      }
    }
    resetCasino();
  };
}

/* Slot Machine - free bet */
const symbols = ['🍒', '🍋', '🍊', '🔔', '💀'];
$('leverBtn').onclick = () => {
  const bet = Number($('slotBetInput').value) || 10;
  if (diamonds < bet) { showModal('Недостаточно 💎'); return; }
  diamonds -= bet;
  saveBalance();
  const reel1 = $('reel1');
  const reel2 = $('reel2');
  const reel3 = $('reel3');
  const resultEl = $('slotResult');
  resultEl.innerHTML = '';
  const times = [2000 + Math.random() * 1000, 2500 + Math.random() * 1000, 3000 + Math.random() * 1000];
  let results = [];
  let skullAppeared = false;
  function spinReel(reel, time, callback) {
    const spinInt = setInterval(() => {
      reel.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    }, 150);
    setTimeout(() => {
      clearInterval(spinInt);
      const finalSym = symbols[Math.floor(Math.random() * symbols.length)];
      reel.textContent = finalSym;
      if (finalSym === '💀') skullAppeared = true;
      callback(finalSym);
    }, time);
  }
  function checkResults() {
    if (results.length === 3) {
      let winAmount = 0;
      let isWin = false;
      if (skullAppeared) {
        resultEl.innerHTML = '💀 Мгновенный проигрыш!';
        isWin = false;
      } else {
        const bellCount = results.filter(s => s === '🔔').length;
        if (bellCount === 3) {
          winAmount = 100;
          resultEl.innerHTML = '🔔🔔🔔 Джекпот! +100💎';
          isWin = true;
        } else if (bellCount === 2) {
          winAmount = 15;
          resultEl.innerHTML = 'Два 🔔 +15💎';
          isWin = true;
        } else {
          const fruits = results.filter(s => ['🍒', '🍋', '🍊'].includes(s));
          if (fruits.length === 3 && new Set(fruits).size === 1) {
            winAmount = 30;
            resultEl.innerHTML = `${fruits[0]}×3 +30💎`;
            isWin = true;
          } else {
            winAmount = 1;
            resultEl.innerHTML = 'Возврат ставки';
            isWin = false; // return not win for doubler
          }
        }
      }
      const payout = winAmount * (bet / 10);
      diamonds += payout;
      applyCasinoModifiers(isWin && payout > bet, payout, bet);
    }
  }
  spinReel(reel1, times[0], sym => { results.push(sym); checkResults(); });
  spinReel(reel2, times[1], sym => { results.push(sym); checkResults(); });
  spinReel(reel3, times[2], sym => { results.push(sym); checkResults(); });
};

/* ============== GAME CORE ============== */
function genBotName(){ const pre = PREFIXES[Math.floor(Math.random()*PREFIXES.length)]; const fun=FUN[Math.floor(Math.random()*FUN.length)]; return pre + fun + '_' + Math.floor(Math.random()*100); }

function startNewGame(){
  processing=false;
  trumpSwapped = false;
  deck = makeDeck(); shuffle(deck); discard=[];
  trump = deck[deck.length-1].suit; originalTrump = trump;
  players = [];
  const humanName = state.nick || genBotName();
  const humanStatus = state.status || 'none';
  let humanAvatar = null;
  const avatarStr = state.avatar;
  if (avatarStr) {
    if (avatarStr.startsWith('data:')) {
      humanAvatar = {type: 'img', value: avatarStr};
    } else {
      humanAvatar = {type: 'emoji', value: avatarStr};
    }
  }
  players.push({id:0,name:humanName,isHuman:true,hand:[],finished:false,avatar:humanAvatar,skipNextAttack:false,comboType:null,comboCards:[],antiLecho:false,status:humanStatus});
  for(let i=1;i<lobbySize;i++) players.push({id:i,name:genBotName(),isHuman:false,hand:[],finished:false,avatar:{type:'emoji',value:pickBotEmoji()},skipNextAttack:false,comboType:null,comboCards:[],antiLecho:false,status:'none'});
  for(let k=0;k<3;k++) for(const p of players) p.hand.push(deck.pop());
  let minV=Infinity,startIdx=0;
  players.forEach((p,idx)=> p.hand.forEach(c=>{ if(c.suit===trump){ const v=RANK_VALUE(c.rank); if(v<minV){minV=v;startIdx=idx;} } }));
  turnIndex = startIdx;
  tableAttack=null; tableDefend=null;
  $('deckCount').textContent = deck.length;
  $('trumpCard').textContent = trump;
  clearLog(); log(`Новая игра. Козырь: ${trump}. Атакует: ${players[turnIndex].name}`);
  showScreen('screenGame'); renderAll(); updateGameInventory(); setTimeout(()=>maybeAutoPlay(),420);
}

function clearLog(){ ui.log.innerHTML=''; }

function renderAll(){
  // players row: responsive sizing depending on lobbySize
  ui.playersRow.innerHTML='';
  const sizeClass = lobbySize<=3 ? 'large' : (lobbySize===4 ? 'medium' : 'small');
  for(const p of players){
    const chip = document.createElement('div'); chip.className = 'player-chip';
    const avatarSizeClass = sizeClass;
    const avatarHtml = p.avatar ? (p.avatar.type==='emoji' ? `<div class="avatar ${avatarSizeClass}">${p.avatar.value}</div>` : `<div class="avatar ${avatarSizeClass}"><img src="${p.avatar.value}" style="width:100%;height:100%;object-fit:cover;border-radius:12px"/></div>`) : `<div class="avatar ${avatarSizeClass}">👤</div>`;
    const statusHtml = p.status !== 'none' ? `<div class="player-status">${getStatusText(p.status)}</div>` : '';
    chip.innerHTML = `${avatarHtml}<div class="player-name">${p.name}</div>${statusHtml}<div class="player-count">Карт: ${p.hand.length}${p.finished? ' ✅' : ''}</div>`;
    ui.playersRow.appendChild(chip);
  }

  // render table slots & player hand
  ui.attackerSlot.innerHTML=''; ui.defenderSlot.innerHTML='';
  if(tableAttack) ui.attackerSlot.appendChild(renderCardElt(tableAttack,true));
  if(tableDefend) ui.defenderSlot.appendChild(renderCardElt(tableDefend,true));
  ui.playerHand.innerHTML='';
  for(const c of players[0].hand){
    const el = renderCardElt(c,true);
    el.onclick = ()=>onPlayerCardClick(c.uid);
    if(selectedCardUid===c.uid) el.classList.add('selected');
    ui.playerHand.appendChild(el);
  }
  $('deckCount').textContent = deck.length; $('trumpCard').textContent = trump;
  updateTurnInfo(); updateActionHint(); saveBalance();
}

function renderCardElt(card,faceUp=true){
  const el = document.createElement('div'); el.className = 'card' + (faceUp?'':' back');
  if(faceUp) el.innerHTML = `<div class="suit">${card.suit}</div><div class="rank">${card.rank}</div><div style="text-align:right" class="suit">${card.suit}</div>`;
  else el.textContent='🂠';
  el.dataset.cardId = card.uid; return el;
}
function findCardOwner(uid){ for(let i=0;i<players.length;i++) if(players[i].hand.find(c=>c.uid===uid)) return i; return null; }

function detectCombo(hand){ if(!hand || hand.length !== 3) return null; return evalTriple(hand); }
function evalTriple(triple){ const ranks=triple.map(x=>x.rank), suits=triple.map(x=>x.suit); if(ranks[0]===ranks[1]&&ranks[1]===ranks[2]) return 'Повтор'; const vals = triple.map(x=>RANK_VALUE(x.rank)).sort((a,b)=>a-b); if(vals[1]===vals[0]+1 && vals[2]===vals[1]+1) return 'Последовательность'; if(suits[0]===suits[1]&&suits[1]===suits[2]) return 'Масть'; return null; }

function nextAliveIndex(idx){
  const n = players.length;
  for(let i=1;i<=n;i++){
    const ni = (idx + i) % n;
    const p = players[ni];
    if(p.finished) continue;
    if(p.skipNextAttack){ p.skipNextAttack = false; continue; }
    return ni;
  }
  return null;
}
function nextAliveIndexForHint(idx){ const n=players.length; for(let i=1;i<=n;i++){ const ni=(idx+i)%n; if(!players[ni].finished) return ni; } return null; }
function updateTurnInfo(){ const atk = players[turnIndex]; ui.turnInfo.textContent = `Атакует: ${atk.name} ${atk.isHuman? '(Вы)':''}`; }
function updateActionHint(){ if(processing){ ui.actionHint.textContent='Происходит ход...'; return; } if(tableAttack && !tableDefend){ const def = nextAliveIndexForHint(turnIndex); if(def===0) ui.actionHint.textContent = `Вас атакуют ${tableAttack.rank}${tableAttack.suit}. Нажмите карту для защиты или "Беру" чтобы взять атаку.`; else ui.actionHint.textContent = `${players[def].name} защищается...`; return; } const atk = players[turnIndex]; if(atk.isHuman && !atk.finished) ui.actionHint.textContent = 'Ваш ход: тапните карту или нажмите "Беру".'; else ui.actionHint.textContent = `Ход: ${atk.name}. Подождите.`; }

function onPlayerCardClick(uid){
  if(processing) return;
  const owner = findCardOwner(uid);
  if(owner===null) return;
  if(selectedCardUid===uid){ selectedCardUid=null; renderAll(); return; }
  selectedCardUid=uid; renderAll();
  if(turnIndex===0 && players[0].isHuman && !tableAttack && !players[0].finished){
    playAttackCard(0, uid); selectedCardUid=null; return;
  }
  const defenderIdx = nextAliveIndexForHint(turnIndex);
  if(tableAttack && defenderIdx===0 && !tableDefend && !players[0].finished){
    playDefendCard(0, uid); selectedCardUid=null; return;
  }
}

/* play attack */
function playAttackCard(attackerIdx, cardUid){
  if(processing) return;
  const p = players[attackerIdx]; if(p.finished) return;
  const ci = p.hand.findIndex(c=>c.uid===cardUid); if(ci<0) return;
  const card = p.hand.splice(ci,1)[0];
  tableAttack = card; tableDefend = null; renderAll(); log(`${p.name} атакует ${card.rank}${card.suit}`);
  processing = true;
  const defenderIdx = nextAliveIndexForHint(attackerIdx);
  setTimeout(()=>resolveDefense(attackerIdx, defenderIdx), 600);
}

/* play defend human */
function playDefendCard(defenderIdx, cardUid){
  if(processing) return; if(!tableAttack) return;
  const p = players[defenderIdx]; const ci = p.hand.findIndex(c=>c.uid===cardUid); if(ci<0) return;
  const card = p.hand[ci]; const attack = tableAttack;
  const canBeat = (card.suit===attack.suit && RANK_VALUE(card.rank)>RANK_VALUE(attack.rank)) || (card.suit===trump && attack.suit!==trump);
  if(!canBeat){ log('Эту карту нельзя использовать для защиты'); return; }
  p.hand.splice(ci,1); tableDefend = card; renderAll(); log(`${p.name} отбил ${attack.rank}${attack.suit} картой ${card.rank}${card.suit}`);
  processing = true;
  setTimeout(()=>{ pushToDiscardRandom(tableAttack, tableDefend); tableAttack=null; tableDefend=null; processing=false; endOfTurnCleanup(findPreviousAttackerIndex(defenderIdx)); }, 420);
}

/* resolve defense for bots */
function resolveDefense(attackerIdx, defenderIdx){
  if(!tableAttack){ processing=false; renderAll(); return; }
  const defender = players[defenderIdx];
  const attack = tableAttack;
  if(defender.isHuman){ processing=false; updateActionHint(); return; }
  processing = true;
  setTimeout(()=>{
    const options = defender.hand.map((c,idx)=>({c,idx})).filter(o=>{
      const c=o.c; if(c.suit===attack.suit && RANK_VALUE(c.rank)>RANK_VALUE(attack.rank)) return true; if(c.suit===trump && attack.suit!==trump) return true; return false;
    });
    let shouldDefend = options.length > 0;
    if(shouldDefend){
      const costs = options.map(o => cardUsefulness(defender, o.c));
      const minCost = Math.min(...costs);
      let takeBenefit = cardUsefulness(defender, attack);
      const tempHand = [...defender.hand, attack];
      if(detectCombo(tempHand)) takeBenefit += 100;
      if(takeBenefit > minCost + 5) shouldDefend = false;
    }
    if(shouldDefend){
      options.sort((a,b)=>cardUsefulness(defender,a.c) - cardUsefulness(defender,b.c));
      const choose = options[0];
      const defendCard = defender.hand.splice(choose.idx,1)[0];
      tableDefend = defendCard;
      renderAll(); log(`${defender.name} отбил ${attack.rank}${attack.suit} картой ${defendCard.rank}${defendCard.suit}`);
      setTimeout(()=>{ pushToDiscardRandom(tableAttack, tableDefend); tableAttack=null; tableDefend=null; checkLechoForBots(); processing=false; endOfTurnCleanup(attackerIdx); }, 350);
    } else {
      defender.hand.push(tableAttack);
      defender.skipNextAttack = true;
      log(`${defender.name} не отбился и забирает ${attack.rank}${attack.suit} (пропускает следующий шанс атаковать)`);
      tableAttack=null; tableDefend=null; checkLechoForBots(); processing=false; endOfTurnCleanup(attackerIdx);
    }
  }, 500 + Math.floor(Math.random()*450));
}

function findPreviousAttackerIndex(defIdx){ const n=players.length; for(let i=1;i<=n;i++){ const idx=(defIdx - i + n)%n; if(!players[idx].finished) return idx; } return defIdx; }
function pushToDiscardRandom(a,b){ const arr=[a,b]; shuffle(arr); discard.push(...arr); }

function endOfTurnCleanup(attackerIdx){
  ensureDeck();
  const n=players.length;
  for(let i=0;i<n;i++){
    const idx=(attackerIdx + i) % n; const p=players[idx]; if(p.finished) continue;
    while(p.hand.length < 3){ ensureDeck(); if(deck.length===0) break; p.hand.push(deck.pop()); }
  }
  checkLechoForBots();
  const next = nextAliveIndex(attackerIdx);
  if(next !== null) turnIndex = next;
  renderAll();
  setTimeout(()=>maybeAutoPlay(), 350);
}

/* draw button */
ui.drawBtn.onclick = ()=>{
  if(processing) return;
  const p = players[0];
  const defenderIdx = nextAliveIndexForHint(turnIndex);
  if(tableAttack && defenderIdx === 0 && !players[0].finished){
    players[0].hand.push(tableAttack);
    players[0].skipNextAttack = true;
    log(`Вы взяли атаку ${tableAttack.rank}${tableAttack.suit} (пропускаете следующий шанс атаковать)`);
    tableAttack=null; tableDefend=null; renderAll();
    endOfTurnCleanup(findPreviousAttackerIndex(0));
    return;
  }
  if(players[turnIndex] !== players[0]){ log('Нельзя брать: сейчас не ваш ход'); return; }
  if(players[0].hand.length === 0) return;
  const card = selectedCardUid ? players[0].hand.find(c=>c.uid===selectedCardUid) : players[0].hand[players[0].hand.length-1];
  if(!card) return;
  const idx = players[0].hand.findIndex(c=>c.uid===card.uid);
  const removed = players[0].hand.splice(idx,1)[0];
  discard.push(removed);
  log(`Вы выкинули ${removed.rank}${removed.suit} и берёте новую карту`);
  ensureDeck();
  if(deck.length>0) players[0].hand.push(deck.pop()); else log('Колода пуста — взять нечего');
  selectedCardUid=null; renderAll();
};

/* returnBtn (paid) */
ui.returnBtn.onclick = ()=>{
  if(processing) return;
  if(!tableAttack){ log('Нет атаки для возврата.'); return; }
  const defenderIdx = nextAliveIndexForHint(turnIndex);
  if(defenderIdx !== 0){ log('Вернуть отправителю можно только если вас атакуют.'); return; }
  const attackerIdx = findPreviousAttackerIndex(defenderIdx);
  // check voucher
  if(useVoucherIfAvailable()){
    log('Использован ваучер. Возврат без списания 🪙.');
  } else {
    if(balance < RETURN_COST){ showModal(`Нужно ${RETURN_COST} 🪙 чтобы вернуть карту отправителю.`); return; }
    balance -= RETURN_COST; saveBalance();
  }
  players[attackerIdx].hand.push(tableAttack);
  players[attackerIdx].skipNextAttack = true;
  log(`Вы вернули карту ${tableAttack.rank}${tableAttack.suit} отправителю (${players[attackerIdx].name}).`);
  tableAttack=null; tableDefend=null;
  const next = nextAliveIndex(attackerIdx);
  if(next !== null) turnIndex = next;
  renderAll();
  setTimeout(()=>maybeAutoPlay(), 300);
};

/* lechoBtn - fixed farming */
ui.lechoBtn.onclick = ()=>{
  if(processing) return;
  const p = players[0];
  if(p.antiLecho) { showModal('Ваше объявление Лечо заблокировано!'); return; }
  if(p.finished) { showModal('Комбинация собрана - ожидайте конца игры'); return; }
  const combo = detectCombo(p.hand);
  if(combo){
    p.comboType = combo;
    p.comboCards = [...p.hand];
    p.finished = true;
    balance += 1; saveBalance();
    log(`Вы объявили Лечо! (${combo}). +1 🪙 — баланс ${balance}`);
    if(turnIndex === 0){ const n = nextAliveIndex(turnIndex); if(n !== null) turnIndex = n; }
    renderAll(); checkGameEnd(); setTimeout(()=>maybeAutoPlay(), 300);
  } else { showModal('Вы не собрали комбинацию!'); log('Попытка объявить Лечо без комбинации.'); }
};

/* bot main logic */
function maybeAutoPlay(){
  if(processing) return;
  if(checkGameEnd()) return;
  const attacker = players[turnIndex];
  if(!attacker || attacker.finished){
    const next = nextAliveIndex(turnIndex);
    if(next !== null && next !== turnIndex){ turnIndex = next; renderAll(); setTimeout(()=>maybeAutoPlay(),200); }
    return;
  }
  if(tableAttack && !tableDefend){
    const defenderIdx = nextAliveIndexForHint(turnIndex);
    if(defenderIdx === 0) return;
  }
  if(attacker.isHuman){ updateActionHint(); return; }
  processing = true;
  setTimeout(()=>{
    checkLechoForBots();
    const badCards = attacker.hand.map((c,i)=>({c,i,use:cardUsefulness(attacker,c)})).sort((a,b)=>a.use - b.use);
    if(badCards.length > 0 && badCards[0].use < 6 && deck.length > 0 && attacker.hand.length > 1){
      const chosen = badCards[0];
      const removed = attacker.hand.splice(chosen.i,1)[0];
      discard.push(removed);
      log(`${attacker.name} выкинул ${removed.rank}${removed.suit} и берёт новую`);
      ensureDeck();
      if(deck.length > 0) attacker.hand.push(deck.pop());
      renderAll();
      checkLechoForBots();
      setTimeout(()=>maybeAutoPlay(), 600);
      return;
    }
    const defenderIdx = nextAliveIndexForHint(turnIndex);
    const defenderHand = defenderIdx!==null ? players[defenderIdx].hand : [];
    const choices = attacker.hand.map((c,idx)=>{
      const defenderCanBeat = defenderHand.some(d=>{
        if(d.suit === c.suit && RANK_VALUE(d.rank) > RANK_VALUE(c.rank)) return true;
        if(d.suit === trump && c.suit !== trump) return true;
        return false;
      });
      return {c,idx,defenderCanBeat};
    });
    const scored = choices.map(item=>{
      const use = cardUsefulness(attacker,item.c);
      const cantBeatenBonus = item.defenderCanBeat ? 0 : 10;
      const rankFactor = RANK_VALUE(item.c.rank);
      const trumpBonus = item.c.suit===trump ? 4 : 0;
      let score = use - cantBeatenBonus - rankFactor*0.5 - trumpBonus;
      if(!item.defenderCanBeat){
        const tempDefHand = [...defenderHand, item.c];
        if(detectCombo(tempDefHand)) score += 100;
      }
      return {...item,score};
    });
    scored.sort((a,b)=>a.score-b.score);
    const chosen = scored[0] || scored[Math.floor(Math.random()*scored.length)];
    const card = attacker.hand.splice(chosen.idx,1)[0];
    tableAttack = card; tableDefend = null; log(`${attacker.name} атакует ${card.rank}${card.suit}`); renderAll();
    processing = false;
    setTimeout(()=>resolveDefense(turnIndex, defenderIdx), 600 + Math.floor(Math.random()*400));
  }, 420 + Math.floor(Math.random()*320));
}

function cardUsefulness(player, card){
  let score=0;
  const sameRank = player.hand.filter(c=>c.rank===card.rank).length;
  score += sameRank*10;
  const vals = player.hand.filter(c=>c.suit===card.suit).map(c=>RANK_VALUE(c.rank));
  const v = RANK_VALUE(card.rank);
  if(vals.includes(v-1)) score+=6;
  if(vals.includes(v+1)) score+=6;
  const sameSuit = player.hand.filter(c=>c.suit===card.suit).length;
  score += sameSuit*2;
  if(card.suit===trump) score += 8;
  return score;
}

function ensureDeck(){ if(deck.length===0 && discard.length>0){ log('Перемешиваем отброшенные карты в основную колоду.'); deck = discard.splice(0); shuffle(deck); } }
function checkGameEnd(){
  const active = players.filter(p=>!p.finished);
  if(active.length <= 1){
    const loser = active[0] || null;
    const winners = players.filter(p=>p.finished);
    const winnersText = winners.map(w=>w.name).join(', ') || '—';
    if(!loser){ $('outroTitle').textContent='Ничья — все объявили Лечо'; $('outroText').textContent = `Победители: ${winnersText}`; showScreen('screenOutro'); }
    else { $('outroTitle').textContent = `Игра окончена — проигравший: ${loser.name}`; $('outroText').textContent = `Победители: ${winnersText}`; 
      if(loser.isHuman){ showScreen('screenGuess'); renderGuess(); } else { showScreen('screenOutro'); } 
    }
    if (loser.isHuman) {
      state.wins += 0; // loss
    } else {
      state.wins += 1; // win
    }
    onStateChange();
    return true;
  }
  return false;
}

function checkLechoForBots(){
  for(const p of players){
    if(p.isHuman || p.finished || p.antiLecho) continue;
    const combo = detectCombo(p.hand);
    if(combo){
      p.finished = true;
      p.comboType = combo;
      p.comboCards = [...p.hand];
      log(`${p.name} объявил Лечо! (${combo})`);
      if(turnIndex === p.id){
        const next = nextAliveIndex(turnIndex);
        if(next !== null) turnIndex = next;
      }
    }
  }
  checkGameEnd();
}

function renderGuess(){
  const winners = players.filter(p=>p.finished);
  const forms = $('guessForms');
  forms.innerHTML='';
  winners.forEach(w => {
    const div = document.createElement('div');
    div.style.marginBottom = '20px';
    div.innerHTML = `<h4>Для ${w.name} (${w.comboType})</h4>`;
    let guessHtml = '';
    if(w.comboType === 'Повтор'){
      guessHtml = `Угадайте ранг: <select id="guess_rank_${w.id}">${RANKS.map(r=>`<option value="${r}">${r}</option>`).join('')}</select><br>`;
    } else if(w.comboType === 'Масть'){
      guessHtml = `Угадайте масть: <select id="guess_suit_${w.id}">${SUITS.map(s=>`<option value="${s}">${s}</option>`).join('')}</select><br>`;
    } else if(w.comboType === 'Последовательность'){
      const possibleStarts = RANKS.slice(0, RANKS.length - 2);
      guessHtml = `Угадайте стартовый ранг последовательности: <select id="guess_start_${w.id}">${possibleStarts.map(r=>`<option value="${r}">${r} ${RANKS[RANK_VALUE(r)+1]} ${RANKS[RANK_VALUE(r)+2]}</option>`).join('')}</select><br>`;
    }
    div.innerHTML += guessHtml;
    forms.appendChild(div);
  });
}

$('submitGuess').onclick = ()=>{
  const winners = players.filter(p=>p.finished);
  let results = [];
  let guessedCount = 0;
  winners.forEach(w => {
    let guessed = null; let actual = null;
    if(w.comboType === 'Повтор'){ guessed = $(`guess_rank_${w.id}`).value; actual = w.comboCards[0].rank; }
    else if(w.comboType === 'Масть'){ guessed = $(`guess_suit_${w.id}`).value; actual = w.comboCards[0].suit; }
    else if(w.comboType === 'Последовательность'){ guessed = $(`guess_start_${w.id}`).value; const minVal = Math.min(...w.comboCards.map(c => RANK_VALUE(c.rank))); actual = RANKS[minVal]; }
    if(guessed === actual){ 
      log(`Угадали для ${w.name}!`);
      results.push(`Угадали для ${w.name}: ${w.comboType}`);
      guessedCount++;
    } else { 
      log(`Не угадали для ${w.name}.`);
      const pulls = simulatePull(); 
      log(`За ${w.name}: вытянуто ${pulls} карт.`);
      results.push(`Не угадали для ${w.name}: ${w.comboType} (вытянуто ${pulls} карт)`);
      if(pulls > 15) log(`Колода за ${w.name}! Проиграли дважды.`);
    }
  });
  if (guessedCount > 0) {
    diamonds += guessedCount;
    log(`+${guessedCount} 💎 за угаданные комбинации`);
    saveBalance();
  }
  $('outroTitle').textContent = 'Результаты угадываний';
  $('outroText').innerHTML = results.join('<br>');
  showScreen('screenOutro');
};

function simulatePull(){
  let pulls = 0;
  const newDeck = makeDeck();
  shuffle(newDeck);
  while(newDeck.length >= 3){
    const three = [];
    for(let i=0;i<3;i++) three.push(newDeck.pop());
    pulls += 3;
    if(!detectCombo(three)) break;
  }
  return pulls;
}

/* outro buttons */
$('playAgain').onclick = () => { startNewGame(); };

/* helpers */
function showScreen(name){ ['screenIntro','screenGame','screenProfile','screenRules','screenShop','screenOutro','screenGuess','screenExchange','screenCasino','screenSlots','screenHorseRace'].forEach(id=>{ const el=$(id); if(el) el.classList.remove('active'); }); $(name).classList.add('active'); }
saveBalance();
showScreen('screenIntro');

/* ============== SHOP: initial mechanics ============== */
function renderShop(){
  const grid = $('shopGrid'); grid.innerHTML='';
  SHOP_ITEMS.forEach(it=>{
    const div = document.createElement('div'); div.className='shop-item';
    div.innerHTML = `<div class="item-title">${it.title}</div><div class="item-desc">${it.desc}</div><div style="display:flex;justify-content:space-between;align-items:center"><div class="price">🪙 ${it.price}</div><div><button class="big-btn buyBtn" data-id="${it.id}">Купить</button></div></div>`;
    grid.appendChild(div);
  });
  document.querySelectorAll('.buyBtn').forEach(b=>b.addEventListener('click', ()=>{ const id=b.dataset.id; buyItem(id); }));
}
renderShop();

function inventoryLoad(){ return state.inventory || {}; }
function inventorySave(inv){ state.inventory = inv; onStateChange(); updateInventoryUI(); }

function buyItem(id){
  const item = SHOP_ITEMS.find(x=>x.id===id); if(!item) return;
  if(balance < item.price){ showModal('Недостаточно 🪙'); return; }
  balance -= item.price; saveBalance();
  const inv = inventoryLoad();
  inv[id] = (inv[id] || 0) + (item.qty || 1);
  inventorySave(inv);
  log(`Куплено: ${item.title} за ${item.price} 🪙`);
  // apply immediate effects
  if(item.type === 'theme'){ 
    document.body.className = `theme-${id.split('_')[1] || 'dark'}`;
    log('Тема применена.'); 
  }
  if(item.type === 'avatar'){ 
    const pack = AVATAR_PACKS[id] || [];
    state.avatars = [...new Set([...(state.avatars || []), ...pack])];
    onStateChange();
    log('Набор аватаров добавлен. Перейдите в профиль для выбора.'); 
  }
  if(item.type === 'voucher'){ log(`Добавлено ${item.qty||1} ваучеров на возврат.`); }
  if(item.type === 'hint'){ log('Хинт добавлен в инвентарь.'); }
  if(item.type === 'extra_draw'){ log('Доп. вытяжка добавлена в инвентарь.'); }
  if(item.type === 'peek'){ log('Подгляд в колоду добавлен в инвентарь.'); }
  if(item.type === 'skip'){ log('Пропуск хода добавлен в инвентарь.'); }
  if(item.type === 'reveal'){ log('Разоблачение комбо добавлено в инвентарь.'); }
  if(item.type === 'extra_life'){ log('Доп. жизнь добавлена в инвентарь.'); }
  if(item.type === 'telepathy'){ log('Телепатия добавлена в инвентарь.'); }
  if(item.type === 'trump_swap'){ log('Подмена Козыря добавлена в инвентарь.'); }
  if(item.type === 'game_roulette'){ log('Русская Рулетка в Игре добавлена в инвентарь.'); }
  if(item.type === 'anti_lecho'){ log('Анти-Лечо добавлено в инвентарь.'); }
  if(item.type === 'bet_doubler'){ log('Удвоитель Ставки добавлен в инвентарь.'); }
  if(item.type === 'insurance'){ log('Страховка добавлена в инвентарь.'); }
  if(item.type === 'free_sample'){ log('Бесплатный Образец добавлен в инвентарь.'); }
}

/* inventory UI */
function updateInventoryUI(){
  const inv = inventoryLoad();
  ui.inventory.innerHTML = '';
  Object.keys(inv).forEach(k=>{
    const cnt = inv[k];
    const display = SHOP_ITEMS.find(x=>x.id===k)?.title || k;
    const el = document.createElement('div'); el.className='chip'; el.textContent = `${display} ×${cnt}`;
    ui.inventory.appendChild(el);
  });
}

function updateGameInventory() {
  const inv = inventoryLoad();
  ui.gameInventory.innerHTML = '';
  Object.keys(inv).forEach(k => {
    if (inv[k] <= 0) return;
    const item = SHOP_ITEMS.find(x => x.id === k);
    if (!item) return;
    const div = document.createElement('div');
    div.className = 'game-inv-item';
    div.innerHTML = `<span>${item.title} ×${inv[k]}</span><button class="use-btn" data-id="${k}">Использовать</button>`;
    ui.gameInventory.appendChild(div);
  });
  ui.gameInventory.querySelectorAll('.use-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      useItemInGame(id);
    });
  });
}

function useItemInGame(id) {
  const inv = inventoryLoad();
  if (inv[id] <= 0) return;
  const item = SHOP_ITEMS.find(x => x.id === id);
  if (!item) return;
  if (item.type !== 'free_sample') {
    inv[id]--;
    inventorySave(inv);
  }
  log(`${item.title} использовано.`);
  useItemEffect(item.type, false); // false for no decrement in free sample
  updateGameInventory();
  renderPersonalization();
}

function useItemEffect(type, isFreeSample = false) {
  if (type === 'hint') {
    const p = players[0];
    const possibleCombos = [];
    for (let i = 0; i < p.hand.length; i++) {
      for (let j = i+1; j < p.hand.length; j++) {
        for (let k = j+1; k < p.hand.length; k++) {
          const temp = [p.hand[i], p.hand[j], p.hand[k]];
          const combo = detectCombo(temp);
          if (combo) possibleCombos.push(`${temp.map(c => c.rank + c.suit).join(' ')} (${combo})`);
        }
      }
    }
    if (possibleCombos.length > 0) {
      showModal(`Возможные комбинации: ${possibleCombos.join('; ')}`);
    } else {
      showModal('Нет возможных комбинаций');
    }
  } else if (type === 'peek') {
    if (deck.length > 0) {
      const top = deck[deck.length - 1];
      showModal(`Верх колоды: ${top.rank}${top.suit}`);
    } else {
      showModal('Колода пуста');
    }
  } else if (type === 'skip') {
    players[0].skipNextAttack = true;
    log('Ваш следующий шанс атаки пропущен');
  } else if (type === 'reveal') {
    const aliveBots = players.filter(p => !p.isHuman && !p.finished);
    if (aliveBots.length > 0) {
      const randomBot = aliveBots[Math.floor(Math.random() * aliveBots.length)];
      const botCombo = detectCombo(randomBot.hand);
      showModal(`${randomBot.name} имеет: ${botCombo || 'нет комбо'}`);
    } else {
      showModal('Нет ботов для разоблачения');
    }
  } else if (type === 'extra_draw') {
    if (players[0].hand.length > 0) {
      const card = players[0].hand.pop();
      discard.push(card);
      log(`Выкинута ${card.rank}${card.suit} без вытяжки`);
      renderAll();
    }
  } else if (type === 'extra_life') {
    log('Доп. жизнь сохранена для конца игры');
  } else if (type === 'telepathy') {
    const aliveBots = players.filter(p => !p.isHuman && !p.finished);
    if (aliveBots.length > 0) {
      const randomBot = aliveBots[Math.floor(Math.random() * aliveBots.length)];
      if (randomBot.hand.length > 0) {
        const randomCard = randomBot.hand[Math.floor(Math.random() * randomBot.hand.length)];
        showModal(`У ${randomBot.name}: ${randomCard.rank}${randomCard.suit}`);
      }
    } else {
      showModal('Нет противников');
    }
  } else if (type === 'trump_swap') {
    if (!trumpSwapped) {
      trump = SUITS[Math.floor(Math.random() * SUITS.length)];
      trumpSwapped = true;
      log(`Козырь сменен на ${trump}!`);
      $('trumpCard').textContent = trump;
    } else {
      showModal('Козырь уже сменен!');
    }
  } else if (type === 'game_roulette') {
    const aliveBots = players.filter(p => !p.isHuman && !p.finished);
    if (aliveBots.length > 0) {
      const randomBot = aliveBots[Math.floor(Math.random() * aliveBots.length)];
      if (Math.random() < 0.5) {
        randomBot.skipNextAttack = true;
        log(`${randomBot.name} пропускает ход из-за рулетки!`);
      } else {
        log(`${randomBot.name} избежал рулетки.`);
      }
    } else {
      showModal('Нет противников');
    }
  } else if (type === 'anti_lecho') {
    const aliveBots = players.filter(p => !p.isHuman && !p.finished);
    if (aliveBots.length > 0) {
      const randomBot = aliveBots[Math.floor(Math.random() * aliveBots.length)];
      randomBot.antiLecho = true;
      log(`Анти-Лечо наложено на ${randomBot.name}!`);
    } else {
      showModal('Нет противников');
    }
  } else if (type === 'bet_doubler') {
    betDoublerActive = true;
    showModal('Удвоитель активирован для следующей победы в казино');
  } else if (type === 'insurance') {
    insuranceActive = true;
    showModal('Страховка активирована для следующего проигрыша в казино');
  } else if (type === 'free_sample') {
    const itemId = prompt('Введите ID предмета для теста (например, hint):');
    if (itemId) {
      const testItem = SHOP_ITEMS.find(x => x.id === itemId);
      if (testItem) {
        useItemEffect(testItem.type, true);
      } else {
        showModal('Предмет не найден');
      }
    }
  }
}

/* personalization UI */
function renderPersonalization() {
  const grid = $('personalizationGrid');
  grid.innerHTML = '';
  const inv = inventoryLoad();
  Object.keys(inv).forEach(k => {
    const item = SHOP_ITEMS.find(x => x.id === k);
    if (!item || inv[k] <= 0) return;
    const div = document.createElement('div');
    div.className = 'personalization-item';
    div.innerHTML = `<div class="item-title">${item.title} ×${inv[k]}</div><button class="apply-btn" data-id="${k}">Применить</button>`;
    grid.appendChild(div);
  });
  document.querySelectorAll('.apply-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const item = SHOP_ITEMS.find(x => x.id === id);
      if (!item) return;
      // simple apply for now (extend as needed)
      if (item.type === 'theme') {
        document.body.className = `theme-${id.split('_')[1] || 'dark'}`;
        log(`${item.title} применено.`);
      } else if (item.type === 'avatar') {
        log('Аватары уже доступны в селекте профиля.');
      } else {
        // for consumables, decrement if >0
        const inv = inventoryLoad();
        if (inv[id] > 0) {
          inv[id]--;
          inventorySave(inv);
          useItemEffect(item.type, false);
          log(`${item.title} использовано.`);
        }
        renderPersonalization();
      }
    });
  });
}

/* expose small helper: use voucher to add a free return (consume voucher instead of money) */
function useVoucherIfAvailable(){
  const inv = inventoryLoad();
  if((inv['voucher_pack']||0) > 0){
    inv['voucher_pack'] -= 1; inventorySave(inv);
    return true;
  }
  return false;
}

/* init: load inventory and balance preview */
updateInventoryUI();
saveBalance();

/* keep global access for debugging */
window._lecho = { startNewGame, renderShop, inventoryLoad: () => state.inventory, inventorySave, onStateChange };
</script>
</body>
</html>

// === firebase-storage.js ===
// Работает полностью с GitHub Pages, без CORS и без серверов

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, ref, set, get, update } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// ⚙️ ТВОЙ firebaseConfig:
const firebaseConfig = {
  apiKey: "AIzaSyDXgLw7-iC59qyTXoXT_8Ga0vvJ0SlxGtI",
  authDomain: "lechogame.firebaseapp.com",
  databaseURL: "https://lechogame-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lechogame",
  storageBucket: "lechogame.firebasestorage.app",
  messagingSenderId: "224823417979",
  appId: "1:224823417979:web:86b9bef18e8c5baaf596de",
  measurementId: "G-G1T7607B18"
};

// === Инициализация Firebase ===
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 🔹 Сохранение данных игрока
export async function savePlayerData(id, nickname, balance, diamonds, wins) {
  try {
    const playerRef = ref(db, `players/${id}`);
    await set(playerRef, {
      nickname,
      balance,
      diamonds,
      wins,
      updatedAt: Date.now()
    });
    console.log("✅ Данные игрока сохранены:", id);
  } catch (e) {
    console.error("❌ Ошибка сохранения:", e);
  }
}

// 🔹 Загрузка данных игрока
export async function loadPlayerData(id) {
  try {
    const snapshot = await get(ref(db, `players/${id}`));
    if (snapshot.exists()) {
      console.log("✅ Данные игрока загружены:", snapshot.val());
      return { success: true, ...snapshot.val() };
    } else {
      console.warn("⚠️ Игрок не найден, создаём нового.");
      return { success: false };
    }
  } catch (e) {
    console.error("❌ Ошибка загрузки:", e);
    return { success: false };
  }
}

// 🔹 Обновление только части данных (например, при победе)
export async function updatePlayerData(id, partialData) {
  try {
    const playerRef = ref(db, `players/${id}`);
    await update(playerRef, {
      ...partialData,
      updatedAt: Date.now()
    });
    console.log("✅ Данные игрока обновлены:", id);
  } catch (e) {
    console.error("❌ Ошибка обновления:", e);
  }
}
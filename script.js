// ───────────── Задание 66. Интернет-соединение ─────────────
console.log("=== Задание 66 ===");
function internetStatus(speed) {
  if (speed < 0) return "Некорректная скорость";
  else if (speed === 0) return "Нет подключения";
  else if (speed <= 10) return "Медленный интернет";
  else if (speed <= 50) return "Средняя скорость";
  else return "Быстрый интернет";
}
let speed = 25;
console.log(speed, "→", internetStatus(speed));
for (const s of [0, 5, 25, 100, -3]) console.log(s, "→", internetStatus(s));

// ───────────── Задание 67. Логин и пароль ─────────────
console.log("\n=== Задание 67 ===");
function checkAuth(login, password) {
  if (login === "admin" && password === "12345") return "Вход выполнен";
  else if (login === "admin") return "Ошибка авторизации: неверный пароль";
  else return "Ошибка авторизации";
}
console.log(checkAuth("admin", "12345"));
console.log(checkAuth("admin", "0000"));
console.log(checkAuth("user", "12345"));

// ───────────── Задание 68. Рабочее время ─────────────
console.log("\n=== Задание 68 ===");
function cabinetStatus(hour) {
  if (!Number.isInteger(hour) || hour < 0 || hour > 23) return "Некорректное значение часа";
  if (hour >= 8 && hour < 18) return "Кабинет работает";
  return "Кабинет закрыт";
}
for (const h of [14, 8, 18, 7, 23, 25, -1]) console.log(h, "→", cabinetStatus(h));

// ───────────── Задание 69. Температура процессора ─────────────
console.log("\n=== Задание 69 ===");
function cpuState(t) {
  if (t < 40) return "Низкая";
  else if (t < 70) return "Нормальная";
  else if (t < 90) return "Высокая";
  else return "Критическая";
}
for (const t of [75, 35, 55, 80, 95]) {
  let msg = `${t}°C → ${cpuState(t)}`;
  if (t >= 90) msg += " ⚠ ВНИМАНИЕ! Критическая температура процессора!";
  console.log(msg);
}

// ───────────── Задание 70. Допуск к экзамену ─────────────
console.log("\n=== Задание 70 ===");
function examAccess(attendance, averageScore) {
  if (attendance >= 80 && averageScore >= 50) return "Допущен к экзамену";
  const reasons = [];
  if (attendance < 80) reasons.push("посещаемость ниже 80%");
  if (averageScore < 50) reasons.push("средний балл ниже 50");
  return "Не допущен: " + reasons.join(", ");
}
console.log(examAccess(85, 70));
console.log(examAccess(70, 70));
console.log(examAccess(85, 40));
console.log(examAccess(60, 30));

// ───────────── Задание 71. Стоимость оборудования ─────────────
console.log("\n=== Задание 71 ===");
let equipment = [250000, 180000, 320000, 150000, 200000];
let total = 0;
for (let i = 0; i < equipment.length; i++) total += equipment[i];
console.log("Общая стоимость:", total.toLocaleString("ru-RU"), "₸");
console.log("Средняя стоимость:", (total / equipment.length).toLocaleString("ru-RU"), "₸");

// ───────────── Задание 72. Минимальный балл ─────────────
console.log("\n=== Задание 72 ===");
let scores = [78, 95, 43, 67, 88, 50, 91];
let minScore = scores[0];
let below50 = 0;
for (let i = 0; i < scores.length; i++) {
  if (scores[i] < minScore) minScore = scores[i];
  if (scores[i] < 50) below50++;
}
console.log("Минимальный балл:", minScore);
console.log("Набрали менее 50 баллов:", below50);

// ───────────── Задание 73. Таблица квадратов ─────────────
console.log("\n=== Задание 73 ===");
for (let i = 1; i <= 20; i++) console.log(`${i} → ${i * i}`);

// ───────────── Задание 74. Количество студентов ─────────────
console.log("\n=== Задание 74 ===");
let groups = [24, 22, 25, 20, 23, 21];
let sum = 0, maxGroup = groups[0], over22 = 0;
for (const g of groups) {
  sum += g;
  if (g > maxGroup) maxGroup = g;
  if (g > 22) over22++;
}
console.log("Всего студентов:", sum);
console.log("Средняя численность группы:", (sum / groups.length).toFixed(2));
console.log("Самая большая группа:", maxGroup);
console.log("Групп с более чем 22 студентами:", over22);

// ───────────── Задание 75. Чётные и нечётные ─────────────
console.log("\n=== Задание 75 ===");
let numbers = [12, 7, 18, 5, 24, 9, 30, 11];
let evenNumbers = [];
let oddNumbers = [];
for (const n of numbers) {
  if (n % 2 === 0) evenNumbers.push(n);
  else oddNumbers.push(n);
}
console.log("Чётные:", evenNumbers);
console.log("Нечётные:", oddNumbers);

// ───────────── Задание 76. Стоимость обучения ─────────────
console.log("\n=== Задание 76 ===");
function calculateTuition(monthlyFee, months) {
  if (monthlyFee <= 0 || months <= 0) return null; // проверка положительных значений
  return monthlyFee * months;
}
const tuition = calculateTuition(25000, 8);
console.log("Общая стоимость обучения:", tuition.toLocaleString("ru-RU"), "₸");
console.log("Ошибочные данные:", calculateTuition(-100, 8) === null ? "Значения должны быть положительными" : "");

// ───────────── Задание 77. Проверка email ─────────────
console.log("\n=== Задание 77 ===");
function checkEmail(email) {
  const at = email.indexOf("@");
  const dot = email.indexOf(".", at + 1);
  const ok =
    at > 0 &&                       // есть символы до @ (и сам @ есть)
    email.indexOf("@", at + 1) === -1 && // @ только один
    dot > at + 1 &&                 // есть символы между @ и точкой
    dot < email.length - 1;         // есть символы после точки
  return ok ? "Формат email корректен" : "Ошибка email";
}
for (const e of ["student@gmail.com", "studentgmail.com", "@gmail.com", "student@.com", "student@gmail", "student@gmail."])
  console.log(e, "→", checkEmail(e));

// ───────────── Задание 78. Учёт компьютеров ─────────────
console.log("\n=== Задание 78 ===");
let computer = {
  id: 1,
  processor: "Intel Core i5",
  ram: 16,
  storage: 512,
  working: true,
};
console.log("Характеристики:", computer);
console.log(computer.working ? "Исправен" : "Требуется ремонт");
computer.room = 21;
computer.ram = 32;
console.log("После изменений:", computer);

// ───────────── Задание 79. Премия ─────────────
console.log("\n=== Задание 79 ===");
function calculateBonus(tasks) {
  if (tasks < 0) return "Ошибка: отрицательное число задач";
  if (tasks < 5) return 0;
  else if (tasks < 10) return 10000;
  else if (tasks < 15) return 20000;
  else return 35000;
}
for (const t of [3, 7, 12, 18, -2]) console.log(`Задач: ${t} → премия:`, calculateBonus(t));

// ───────────── Задание 80. Лучший студент ─────────────
console.log("\n=== Задание 80 ===");
let students = [
  { name: "Алия", score: 87 },
  { name: "Арман", score: 94 },
  { name: "Данияр", score: 76 },
  { name: "Мадина", score: 98 },
];
let best = students[0];
for (const s of students) if (s.score > best.score) best = s;
console.log("Лучший студент:", best.name);
console.log("Результат:", best.score);
console.log("Студенты с баллом 90+:");
for (const s of students) if (s.score >= 90) console.log(` - ${s.name}: ${s.score}`);

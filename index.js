const msgStart = "Привет. Хочу Лапку в конфигурации:";
const msgEnd = "и все дополнения.";

const switches = {
  "choc-v1-red-pro": "Choc v1 Red Pro",
  "choc-v2-deep-sea-pink": "Choc v2 Pink",
  "choc-v2-deep-sea-white": "Choc v2 White",
};

const caseColors = {
  "pla-matte-white": "PLA Матовый Белый",
  "pla-matte-black": "PLA Матовый Чёрный",
  "pla-matte-sky-blue": "PLA Матовый Голубой",
  "petg-galaxy-purple": "PETG Galaxy Purple",
};

const keycapColors = {
  "water-green": "Зелёные Прозрачные",
  "water-black": "Иссиня-чёрные Прозрачные",
  "water-clear-blue": "Голубые Прозрачные",
  "tough-white": "Белые Непрозрачные",
};

const parts = {
  switches: undefined,
  caseColor: undefined,
  keycapColor: undefined,
};

function onSelect(part, item) {
  parts[part] = item;

  const switchesStr = `- Свитчи: ${switches[parts.switches]}`;
  const caseColorStr = `- Корпус: ${caseColors[parts.caseColor]}`;
  const keycapColorStr = `- Кейкапы: ${keycapColors[parts.keycapColor]}`;

  const msg = [
    msgStart,
    switchesStr,
    caseColorStr,
    keycapColorStr,
    msgEnd,
  ].join("\r\n");

  document.getElementById("post").value = msg;
}

onSelect("switches", "choc-v1-red-pro");
onSelect("caseColor", "pla-matte-white");
onSelect("keycapColor", "tough-white");

function copy() {
  const text = document.getElementById("post").value;
  navigator.clipboard.writeText(text);
}

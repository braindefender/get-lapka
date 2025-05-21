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
  "water-green": "Зелёные Полупрозрачные",
  "water-black": "Иссиня-чёрные Полупрозрачные",
  "water-clear-blue": "Голубые Полупрозрачные",
  "tough-white": "Белые Непрозрачные",
};

const keycapFormats = {
  "klp-saddle": "KLP Saddle",
  "klp-normal": "KLP Normal",
};

const parts = {
  switches: undefined,
  caseColor: undefined,
  keycapColor: undefined,
  keycapFormat: undefined,
};

function onSelect(part, item) {
  parts[part] = item;

  const switchesStr = `- Свитчи: ${switches[parts.switches]}`;
  const caseColorStr = `- Корпус: ${caseColors[parts.caseColor]}`;
  const keycapColorStr = `- Кейкапы: ${keycapColors[parts.keycapColor]}`;
  const keycapFormatStr = `- Форма кейкапов: ${
    keycapFormats[parts.keycapFormat]
  }`;

  const msg = [
    msgStart,
    switchesStr,
    caseColorStr,
    keycapColorStr,
    keycapFormatStr,
    msgEnd,
  ].join("\r\n");

  document.getElementById("post").value = msg;
}

onSelect("switches", "choc-v1-red-pro");
onSelect("caseColor", "pla-matte-black");
onSelect("keycapColor", "tough-white");
onSelect("keycapFormat", "klp-saddle");

function update() {
  document.querySelectorAll(".block").forEach((node) => {
    node.classList.toggle(
      "active",
      parts[node.dataset.part] === node.dataset.value
    );
  });
}

document.querySelectorAll(".block").forEach((node) => {
  node.addEventListener("click", (e) => {
    const data = e.currentTarget.dataset;
    onSelect(data.part, data.value);
    update();
  });
});

update();

function copy() {
  const text = document.getElementById("post").value;
  navigator.clipboard.writeText(text);
}

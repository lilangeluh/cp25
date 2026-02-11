const $ = (sel) => document.querySelector(sel);

const state = {
  image: null,
  imageURL: null,
  profile: null,
  caption: "",
  paletteIndex: 0
};

const palettes = [
  { a: "#dfe5d6", b: "#cfd9cb" },
  { a: "#e4e2d8", b: "#d5d8ca" },
  { a: "#e1e0d8", b: "#ccd5ce" },
  { a: "#e8e3da", b: "#d7ddd4" },
  { a: "#e5e7dd", b: "#d3dbd0" },
  { a: "#ece8df", b: "#d9ddd2" },
  { a: "#e7e2d8", b: "#cfd7cd" },
  { a: "#e2e5dc", b: "#c9d2c8" },
  { a: "#e9e1da", b: "#d8d6cb" },
  { a: "#e0e6e0", b: "#ccd6cf" },
  { a: "#ece6dc", b: "#d4dbd4" },
  { a: "#e3e1d8", b: "#d0d8d1" },
  { a: "#f1dfd4", b: "#e7c9bb" },
  { a: "#f1e7d6", b: "#e7d8bf" },
  { a: "#f0e6d2", b: "#dfd7ba" },
  { a: "#e9dfe8", b: "#d8cde0" },
  { a: "#e4e0f0", b: "#d0cde4" },
  { a: "#dfe7f2", b: "#cad8ec" },
  { a: "#e1ecf0", b: "#c8dde2" },
  { a: "#e4efd9", b: "#cfdfc2" },
  { a: "#f0e8db", b: "#deccb8" }
];

function showToast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 1300);
}

function applyPalette(index) {
  const p = palettes[index % palettes.length];
  const card = $("#card");
  card.style.setProperty("--pa", p.a);
  card.style.setProperty("--pb", p.b);
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      default:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return { h: h * 360, s, l };
}

function analyzeImageMood(img) {
  const c = document.createElement("canvas");
  const ctx = c.getContext("2d", { willReadFrequently: true });
  const w = 72;
  const h = 72;
  c.width = w;
  c.height = h;
  ctx.drawImage(img, 0, 0, w, h);

  const data = ctx.getImageData(0, 0, w, h).data;

  let sumR = 0;
  let sumG = 0;
  let sumB = 0;
  let lumSum = 0;
  let lumSqSum = 0;

  const hueBins = new Array(8).fill(0);
  const quadLum = [0, 0, 0, 0]; // TL TR BL BR
  const quadCount = [0, 0, 0, 0];

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    sumR += r;
    sumG += g;
    sumB += b;

    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    lumSum += lum;
    lumSqSum += lum * lum;

    const { h: pixelHue } = rgbToHsl(r, g, b);
    const bin = Math.floor((pixelHue % 360) / 45);
    hueBins[bin] += 1;

    const px = (i / 4) % w;
    const py = Math.floor((i / 4) / w);
    const q = (py < h / 2 ? 0 : 2) + (px < w / 2 ? 0 : 1);
    quadLum[q] += lum;
    quadCount[q] += 1;
  }

  const count = data.length / 4;
  const avgR = sumR / count;
  const avgG = sumG / count;
  const avgB = sumB / count;
  const avgLum = lumSum / count;
  const variance = lumSqSum / count - avgLum * avgLum;
  const contrast = Math.sqrt(Math.max(0, variance));

  const { h: hue, s: sat } = rgbToHsl(avgR, avgG, avgB);

  const light = avgLum > 165 ? "bright" : avgLum < 95 ? "shadowed" : "soft";
  const texture = contrast > 62 ? "rough" : contrast < 34 ? "smooth" : "mixed";
  const colorTemp = hue >= 25 && hue <= 75 ? "warm" : hue >= 170 && hue <= 270 ? "cool" : "neutral";

  let colorWord = "ordinary";
  if (hue >= 15 && hue < 45) colorWord = "apricot";
  else if (hue >= 45 && hue < 75) colorWord = "honey";
  else if (hue >= 75 && hue < 155) colorWord = "moss";
  else if (hue >= 155 && hue < 215) colorWord = "aqua";
  else if (hue >= 215 && hue < 275) colorWord = "violet";
  else if (hue >= 275 && hue < 340) colorWord = "rose";
  else if (hue >= 340 || hue < 15) colorWord = "rust";

  const binWords = ["ember", "amber", "straw", "moss", "teal", "indigo", "violet", "rose"];
  const rankedBins = hueBins
    .map((v, i) => ({ i, v }))
    .sort((a, b) => b.v - a.v)
    .slice(0, 2)
    .map((x) => binWords[x.i]);

  const qAvg = quadLum.map((sum, i) => (quadCount[i] ? sum / quadCount[i] : 0));
  const left = (qAvg[0] + qAvg[2]) / 2;
  const right = (qAvg[1] + qAvg[3]) / 2;
  const top = (qAvg[0] + qAvg[1]) / 2;
  const bottom = (qAvg[2] + qAvg[3]) / 2;

  const horizontalDrift = Math.abs(left - right) < 8 ? "balanced" : left > right ? "left-lit" : "right-lit";
  const verticalDrift = Math.abs(top - bottom) < 8 ? "flat" : top > bottom ? "top-lit" : "bottom-lit";

  return {
    light,
    texture,
    colorTemp,
    colorWord,
    dominantWords: rankedBins,
    horizontalDrift,
    verticalDrift,
    sat: clamp(Math.round(sat * 100), 0, 100)
  };
}

function generateCaption(profile) {
  if (!profile) return "";

  const openings = {
    bright: ["day spills in", "small noon hum", "light wakes it"],
    soft: ["quiet settles", "a hush begins", "soft air here"],
    shadowed: ["afterlight", "dim edge speech", "night leans close"]
  };

  const temperature = {
    warm: ["warm rim", "amber trace", "hand-heat glow"],
    cool: ["cool rim", "rain-blue tone", "window chill"],
    neutral: ["plain weather", "even tint", "quiet middle"]
  };

  const textures = {
    smooth: ["smooth hush", "slow glide", "even breath"],
    mixed: ["small shifts", "soft wobble", "keeps changing"],
    rough: ["grain speaks", "rough grammar", "holds friction"]
  };

  const direction = {
    "left-lit": ["left side leads", "light leans left"],
    "right-lit": ["right side leads", "light leans right"],
    balanced: ["light stays even", "both sides agree"],
    "top-lit": ["top edge bright", "light falls down"],
    "bottom-lit": ["lower glow", "light rises up"],
    flat: ["flat horizon", "no side wins"]
  };

  const endings = [
    "then it goes still.",
    "and the room listens.",
    "then it turns ordinary.",
    "small grace remains.",
    "for whoever notices."
  ];

  const lines = [];
  lines.push(pick(openings[profile.light]));
  lines.push(`${pick(temperature[profile.colorTemp])}, ${pick(textures[profile.texture])}.`);
  lines.push(`${pick(direction[profile.horizontalDrift])}.`);
  lines.push(`${pick(direction[profile.verticalDrift])}.`);
  lines.push(`tones: ${profile.dominantWords[0]} / ${profile.dominantWords[1]}.`);
  lines.push(`hint of ${profile.colorWord}.`);

  if (Math.random() > 0.45) {
    lines.push(`sat around ${profile.sat}%.`);
  }

  lines.push(pick(endings));
  return lines.join("\n");
}

function randomRainyBackdrop() {
  const tones = [
    [176, 192, 205],
    [164, 182, 174],
    [183, 191, 206],
    [201, 205, 194],
    [158, 176, 191],
    [170, 186, 199],
    [186, 196, 182],
    [214, 188, 174],
    [224, 205, 176],
    [219, 196, 211],
    [190, 196, 228],
    [201, 218, 230],
    [216, 222, 193],
    [230, 207, 191]
  ];

  const blobs = Array.from({ length: 7 }, () => {
    const [r, g, b] = tones[Math.floor(Math.random() * tones.length)];
    const alpha = (0.2 + Math.random() * 0.18).toFixed(2);
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    const size = 22 + Math.floor(Math.random() * 28);
    return `radial-gradient(circle at ${x}% ${y}%, rgba(${r}, ${g}, ${b}, ${alpha}) 0%, rgba(${r}, ${g}, ${b}, 0) ${size}%)`;
  });

  const base = "linear-gradient(160deg, #f5f3ee 0%, #eaede7 52%, #e8ece6 100%)";
  document.body.style.background = `${blobs.join(", ")}, ${base}`;
}

function setCaption(text) {
  state.caption = text;
  $("#captionText").textContent = text;
}

async function loadImage(file) {
  if (state.imageURL) URL.revokeObjectURL(state.imageURL);
  state.imageURL = URL.createObjectURL(file);

  const img = $("#previewImg");
  img.src = state.imageURL;

  await new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = reject;
  });

  state.image = img;
  img.style.display = "block";
  $("#placeholder").style.display = "none";
}

async function renderToBlob() {
  const canvas = $("#renderCanvas");
  const W = canvas.width;
  const outer = 92;
  const panelPad = 34;
  const textGap = 58;
  const bottomPad = 46;
  const imageX = outer + panelPad;
  const imageY = outer + panelPad;
  const imageSize = W - (outer + panelPad) * 2;
  const textX = imageX;
  const textY = imageY + imageSize + textGap;
  const textMaxWidth = imageSize;
  const textLineHeight = 45;
  const textFont = "500 30px 'Kode Mono', monospace";

  const textLines = measureWrappedLines(state.caption || "", textMaxWidth, textFont);
  const textHeight = Math.max(textLineHeight, textLines.length * textLineHeight);
  const panelHeight = panelPad + imageSize + textGap + textHeight + bottomPad;
  const H = outer * 2 + panelHeight;

  canvas.height = H;
  const ctx = canvas.getContext("2d");

  const p = palettes[state.paletteIndex % palettes.length];
  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, p.a);
  g.addColorStop(1, p.b);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = "#f6f4ed";
  ctx.strokeStyle = "rgba(0,0,0,.16)";
  ctx.lineWidth = 2;
  ctx.fillRect(outer, outer, W - outer * 2, panelHeight);
  ctx.strokeRect(outer, outer, W - outer * 2, panelHeight);

  ctx.fillStyle = "#fbf8f2";
  ctx.fillRect(imageX, imageY, imageSize, imageSize);
  ctx.strokeStyle = "rgba(0,0,0,.12)";
  ctx.strokeRect(imageX, imageY, imageSize, imageSize);

  if (state.image) {
    const iw = state.image.naturalWidth;
    const ih = state.image.naturalHeight;
    const s = Math.max(imageSize / iw, imageSize / ih);
    const dw = iw * s;
    const dh = ih * s;
    const dx = imageX + (imageSize - dw) / 2;
    const dy = imageY + (imageSize - dh) / 2;
    ctx.drawImage(state.image, dx, dy, dw, dh);
  }

  ctx.fillStyle = "#1a1a1a";
  ctx.font = textFont;
  wrapText(ctx, state.caption, textX, textY, textMaxWidth, textLineHeight);

  return await new Promise((resolve) => canvas.toBlob(resolve, "image/png", 1));
}

function measureWrappedLines(text, maxWidth, font) {
  const c = document.createElement("canvas");
  const ctx = c.getContext("2d");
  ctx.font = font;
  const lines = [];
  const paragraphs = text.split("\n");

  paragraphs.forEach((para, idx) => {
    const words = para.split(/\s+/).filter(Boolean);
    let line = "";

    words.forEach((word) => {
      const test = line ? `${line} ${word}` : word;
      if (ctx.measureText(test).width > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = test;
      }
    });

    lines.push(line || "");
    if (idx !== paragraphs.length - 1) lines.push("");
  });

  return lines.length ? lines : [""];
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const lines = [];
  const paragraphs = text.split("\n");
  paragraphs.forEach((para, idx) => {
    const words = para.split(/\s+/).filter(Boolean);
    let line = "";
    words.forEach((word) => {
      const test = line ? `${line} ${word}` : word;
      if (ctx.measureText(test).width > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = test;
      }
    });
    lines.push(line || "");
    if (idx !== paragraphs.length - 1) lines.push("");
  });

  let yy = y;
  lines.forEach((line) => {
    ctx.fillText(line, x, yy);
    yy += lineHeight;
  });
}

function handleFile(file) {
  if (!file || !file.type.startsWith("image/")) return;
  loadImage(file)
    .then(() => {
      state.profile = analyzeImageMood(state.image);
      setCaption("");
      showToast("Image loaded");
    })
    .catch(() => showToast("Image failed to load"));
}

function wireUI() {
  const imageBox = $("#imageBox");
  const fileInput = $("#fileInput");

  imageBox.addEventListener("click", () => fileInput.click());

  fileInput.addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    handleFile(file);
  });

  imageBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    imageBox.classList.add("is-dragover");
  });

  imageBox.addEventListener("dragleave", () => {
    imageBox.classList.remove("is-dragover");
  });

  imageBox.addEventListener("drop", (e) => {
    e.preventDefault();
    imageBox.classList.remove("is-dragover");
    const file = e.dataTransfer?.files?.[0];
    handleFile(file);
  });

  $("#generateBtn").addEventListener("click", () => {
    if (!state.profile) {
      showToast("Upload an image first");
      return;
    }
    setCaption(generateCaption(state.profile));
    showToast("New poem");
  });

  $("#shuffleBtn").addEventListener("click", () => {
    state.paletteIndex = (state.paletteIndex + 1) % palettes.length;
    applyPalette(state.paletteIndex);
    showToast("Background shuffled");
  });

  $("#saveBtn").addEventListener("click", async () => {
    const blob = await renderToBlob();
    if (!blob) {
      showToast("Render failed");
      return;
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `poem_${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    showToast("Saved PNG");
  });
}

applyPalette(state.paletteIndex);
randomRainyBackdrop();
setCaption(state.caption);
wireUI();

const CHAIRS = [
  {
    id: "chair-01",
    serial: "WF-101",
    name: "Airport Chair",
    caption: "Designed for platforms where departures pause longer than promised.",
    color: "#d0def4",
    image: "images/airport.png",
  },
  {
    id: "chair-02",
    serial: "WF-102",
    name: "Park Bench",
    caption: "Modular seating for terminals illuminated by fluorescent patience.",
    color: "#f4d0d5",
    image: "images/park.png",
  },
  {
    id: "chair-03",
    serial: "WF-103",
    name: "Restaurant Booth",
    caption: "Compact rest for passport queues looping in quiet coils.",
    color: "#e8f1d8",
    image: "images/restaurant.png",
  },
  {
    id: "chair-04",
    serial: "WF-104",
    name: "Clinic Chair",
    caption: "Stackable chair for foyers where the play begins late.",
    color: "#f3e4d4",
    image: "images/hospital.png",
  },
  
  {
    id: "chair-05",
    serial: "WF-105",
    name: "Bus Stop Bench",
    caption: "Single perch for lobbies where names are called alphabetically late.",
    color: "#dcd6f4",
    image: "images/busstop.png",
  },
  {
    id: "chair-06",
    serial: "WF-106",
    name: "Theater Seat",
    caption: "Reclined seat for waiting rooms with ceiling-height apologies.",
    color: "#f5ec9a",
    image: "images/theater.png",
  },
  
  
  
  {
    id: "chair-07",
    serial: "WF-107",
    name: "Meditation Cushion",
    caption: "High stool for galleries where art and answers hang equally still.",
    color: "#cfe9da",
    image: "images/meditation.png",
  },
  {
    id: "chair-08",
    serial: "WF-108",
    name: "Salon Chair",
    caption: "Outdoor chair for porches watching weather reports roll in.",
    color: "#dde5f4",
    image: "images/hairsalon.png",
  },
  {
    id: "chair-09",
    serial: "WF-109",
    name: "Office Chair",
    caption: "Seat designed for overnight lobbies and softly humming machines.",
    color: "#f7e4e4",
    image: "images/office.png",
  },
];

const LOADER_PHRASES = [
  "rearranging idle thoughts…",
  "aligning little pauses…",
  "warming the bench surface…",
  "stacking spare chairs for later…",
  "buffering anticipation…",
  "filing queue numbers…",
  "balancing the weight of maybe…",
  "folding spare cushions…",
  "rotating the empty seat…",
  "uploading minor anxieties…",
];

const loaderEl = document.querySelector(".loader");
const loaderProgress = document.querySelector(".loader__progress");
const loaderPhrases = document.querySelector(".loader__phrases");
const loaderLabel = document.querySelector(".loader__label");
const cursorEl = document.querySelector(".cursor");
const gridEl = document.getElementById("catalogGrid");
const HOLD_KEYS = "ABCDEFGHJKLMNPQRSTUVWXYZ2356789";

let scrollInstance;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function startPhraseCycle() {
  if (!loaderPhrases) return () => {};
  loaderPhrases.innerHTML = "";
  const phraseEl = document.createElement("div");
  phraseEl.className = "loader__phrase";
  loaderPhrases.appendChild(phraseEl);

  const showPhrase = () => {
    phraseEl.classList.remove("is-visible");
    const next = LOADER_PHRASES[Math.floor(Math.random() * LOADER_PHRASES.length)];
    setTimeout(() => {
      phraseEl.textContent = next;
      phraseEl.classList.add("is-visible");
    }, 60);
  };

  showPhrase();
  const interval = setInterval(showPhrase, 2200);
  return () => clearInterval(interval);
}

function showLoader(callback, mode = "normal") {
  if (!loaderEl || !loaderProgress || !loaderPhrases || !loaderLabel) {
    callback?.();
    return;
  }
  document.body.classList.add("is-loading");
  loaderEl.hidden = false;
  loaderProgress.style.width = "0%";
  let stopCycle = () => {};
  if (mode === "normal") {
    stopCycle = startPhraseCycle();
    const duration = randomBetween(1600, 2600);
    const start = performance.now();
    const labelText = "Aligning the waiting grid";
    loaderLabel.textContent = labelText;
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      loaderProgress.style.width = `${progress * 100}%`;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        finish();
      }
    }
    requestAnimationFrame(step);
    function finish() {
      stopCycle();
      document.body.classList.remove("is-loading");
      loaderEl.hidden = true;
      callback?.();
    }
    return;
  }

  // hold-to-progress mode
  loaderPhrases.innerHTML = "";
  const requiredKey = HOLD_KEYS[Math.floor(Math.random() * HOLD_KEYS.length)];
  loaderLabel.textContent = `Hold the key “${requiredKey}” (0%)`;
  stopCycle = startPhraseCycle();

  let isHolding = false;
  let progress = 0;
  const interval = 20;
  const duration = randomBetween(2500, 4000);
  const increment = interval / duration;
  let timerId = null;

  const onKeyDown = (event) => {
    const key = (event.key || "").toUpperCase();
    if (key === requiredKey) {
      if (!isHolding) {
        isHolding = true;
      }
      startTimer();
    }
  };

  const onKeyUp = (event) => {
    const key = (event.key || "").toUpperCase();
    if (key === requiredKey) {
      isHolding = false;
      loaderLabel.textContent = `Hold the key “${requiredKey}” (${Math.round(progress * 100)}%)`;
    }
  };

  function startTimer() {
    if (timerId) {
      return;
    }
    timerId = setInterval(() => {
      if (!isHolding) {
        return;
      }
      progress = Math.min(progress + increment, 1);
      loaderProgress.style.width = `${progress * 100}%`;
       loaderLabel.textContent = `Hold the key “${requiredKey}” (${Math.round(progress * 100)}%)`;
      if (progress >= 1) {
        finish();
      }
    }, interval);
  }

  function cleanup() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
    window.removeEventListener("keydown", onKeyDown);
    window.removeEventListener("keyup", onKeyUp);
    document.body.classList.remove("is-loading");
    stopCycle();
  }

  function finish() {
    cleanup();
    loaderEl.hidden = true;
    callback?.();
  }

  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("keyup", onKeyUp);
}

function populateGrid() {
  gridEl.innerHTML = "";
  CHAIRS.forEach((chair) => {
    const tile = document.createElement("a");
    tile.href = `detail.html?id=${chair.id}`;
    tile.className = "catalog-tile";
    tile.dataset.serial = chair.serial;
    tile.dataset.color = chair.color;
    tile.style.setProperty("--tile-color", chair.color);
    const imageMarkup = chair.image
      ? `<img src="${chair.image}" alt="${chair.name}" class="catalog-tile__img" loading="lazy" />`
      : "";
    tile.innerHTML = `<div class="catalog-tile__media">${imageMarkup}</div>`;
    tile.addEventListener("mouseenter", () => {
      cursorEl.classList.add("is-active");
    });
    tile.addEventListener("mouseleave", () => {
      cursorEl.classList.remove("is-active");
    });
    tile.addEventListener("click", (event) => {
      event.preventDefault();
      showLoader(() => {
        window.location.href = tile.href;
      }, "hold");
    });
    gridEl.appendChild(tile);
  });
}

function handleCursor(event) {
  cursorEl.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
}

function initScroll() {
  const container = document.querySelector(".catalog");
  if (!container) return;
  if (window.LocomotiveScroll) {
    scrollInstance = new window.LocomotiveScroll({
      el: container,
      smooth: true,
      multiplier: 0.9,
      class: "is-inview",
    });
  } else {
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  }
}

document.addEventListener("mousemove", handleCursor, { passive: true });

document.addEventListener("DOMContentLoaded", () => {
  populateGrid();
  initScroll();
  showLoader(() => {}, "normal");
});

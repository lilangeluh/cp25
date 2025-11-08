const CHAIRS = [
  {
    id: "chair-01",
    serial: "WF-101",
    name: "Airport Chair",
    caption: "Gate-side seat for terminals where departures blur into delays.",
    color: "#d0def4",
    model: "models/airport.glb",
    ambientSound: "audio/airport.mp3",
    materials: ["Anodized steel legs", "Powder coat finish", "Delayed-departure cushion"],
    manufacturing: "Metropolitan Transit Fabrications",
    waitTime: "Average dwell time: 18 minutes",
    specs: [
      { label: "Model", value: "Airport Chair" },
      { label: "Year", value: "2019 — timetable drift" },
      { label: "Serial", value: "WF-101" },
      { label: "Type", value: "Transit waiting seat" },
      { label: "Dimensions", value: "Seat span 48\" of patience" },
      { label: "Weight", value: "Carries four postponed goodbyes" },
      { label: "Gate dwell", value: "18-minute delay average" },
    ],
    steps: [
      {
        title: "Align the base rails with the gate markers, making sure each brace finds the faint guide marks.",
        feeling: "I rehearse the goodbye as if the train might actually arrive on time.",
      },
      {
        title: "Raise both legs and tighten with two patient turns until the tannoy hum evens out.",
        feeling: "Two bolts, two breaths, the same rhythm as checking the screen again.",
      },
      {
        title: "Set the seat panel gently and hold until you hear the softened click beneath your boarding pass.",
        feeling: "I smooth the surface for the conversation that may never happen.",
      },
      {
        title: "Lift the backrest until it meets the locating notch facing Runway B.",
        feeling: "Waiting leans back when hope needs somewhere to lean as well.",
      },
    ],
  },
  {
    id: "chair-02",
    serial: "WF-102",
    name: "Park Bench",
    caption: "Weathered bench for public greens where afternoons stretch thin.",
    color: "#f4d0d5",
    ambientSound: "audio/ambient-terminal.mp3",
    materials: ["Cedar slats", "Cast-iron arms", "Rain-softened bolts"],
    manufacturing: "Civic Seating Labs",
    waitTime: "Average dwell time: 7 minutes",
    specs: [
      { label: "Model", value: "Park Bench" },
      { label: "Year", value: "2004 — botanical lull" },
      { label: "Serial", value: "WF-102" },
      { label: "Type", value: "Public garden seating" },
      { label: "Dimensions", value: "Span 2.1 m / three chapters" },
      { label: "Weight", value: "Two grocery bags of stories" },
      { label: "Dwell", value: "7-minute leaf watch" },
    ],
    steps: [
      {
        title: "Set the cast-iron feet into the park pavers; brush away the first leaves.",
        feeling: "The bench keeps company with the pigeons when I'm late.",
      },
      {
        title: "Fasten the slats while leaving a breath of space for expanding weather.",
        feeling: "Hope warps if pressed too tightly into summer metal.",
      },
      {
        title: "Rub linseed oil along the grain until the afternoon glows.",
        feeling: "I polish the seat so strangers can read their novels in peace.",
      },
      {
        title: "Bolt on the armrests angled toward the fountain's constant sigh.",
        feeling: "Even patience needs somewhere to rest its elbows.",
      },
    ],
  },
  {
    id: "chair-03",
    serial: "WF-103",
    name: "Bus Stop Bench",
    caption: "Shelter perch for routes where rain arrives before the bus.",
    color: "#e8f1d8",
    ambientSound: "audio/ambient-lobby.mp3",
    materials: ["Perforated steel seat", "Route plaques", "Transit-grade bolts"],
    manufacturing: "Orderly Works, Ltd.",
    waitTime: "Average dwell time: 11 minutes",
    specs: [
      { label: "Model", value: "Bus Stop Bench" },
      { label: "Year", value: "2011 — route loop" },
      { label: "Serial", value: "WF-103" },
      { label: "Type", value: "Transit shelter seating" },
      { label: "Dimensions", value: "Length 1.5 m / three commuter widths" },
      { label: "Weight", value: "Schedule burden: medium" },
      { label: "Dwell", value: "11-minute headway" },
    ],
    steps: [
      {
        title: "Anchor the bench plate to the concrete pad, centering it beneath the shelter roof.",
        feeling: "My shoes memorize the timetable grooves while I drill.",
      },
      {
        title: "Tighten the side rails with alternating turns until sway is gone.",
        feeling: "Balance arrives somewhere between nervous and prepared.",
      },
      {
        title: "Affix the route plaque and align it toward the approach lane.",
        feeling: "Waiting is easier when you know which way the headlights will appear.",
      },
      {
        title: "Spray the finish with a final anti-rust coat before the drizzle returns.",
        feeling: "The bench holds my place even when the rain arrives first.",
      },
    ],
  },
  {
    id: "chair-04",
    serial: "WF-104",
    name: "Restaurant Booth",
    caption: "Soft booth for diners rehearsing confessions between courses.",
    color: "#f5ec9a",
    ambientSound: "audio/ambient-border.mp3",
    materials: ["Vinyl upholstery", "Maple trim", "Steel cleats"],
    manufacturing: "Borderline Fixtures",
    waitTime: "Average dwell time: 25 minutes",
    specs: [
      { label: "Model", value: "Restaurant Booth" },
      { label: "Year", value: "2001 — midnight service" },
      { label: "Serial", value: "WF-104" },
      { label: "Type", value: "Dining alcove seating" },
      { label: "Dimensions", value: "Banquette wrap 120°" },
      { label: "Weight", value: "Two entrees of unsaid things" },
      { label: "Dwell", value: "25-minute appetizer pause" },
    ],
    steps: [
      {
        title: "Anchor the plinth to the tiled floor, tracing the booth outline.",
        feeling: "I count the breaths between water refills the way hosts do.",
      },
      {
        title: "Set the seat box and feed the wiring for the pendant light.",
        feeling: "Every hidden cable pulls another conversation into place.",
      },
      {
        title: "Staple the vinyl, smoothing each tuft until the curve forgives.",
        feeling: "Soft contact keeps the booth from confessing my restlessness.",
      },
      {
        title: "Slide the table in and check the sightline to the pass.",
        feeling: "This booth remembers every plate that arrived late.",
      },
    ],
  },
  {
    id: "chair-05",
    serial: "WF-105",
    name: "Theater Seat",
    caption: "Playhouse chair for intermissions that feel longer than acts.",
    color: "#dcd6f4",
    ambientSound: "audio/ambient-atrium.mp3",
    materials: ["Velvet upholstery", "Powdered brass arms", "Program holder"],
    manufacturing: "Atrium Assembly Co.",
    waitTime: "Average dwell time: 15 minutes",
    specs: [
      { label: "Model", value: "Theater Seat" },
      { label: "Year", value: "1994 — overture revival" },
      { label: "Serial", value: "WF-105" },
      { label: "Type", value: "Auditorium chair" },
      { label: "Dimensions", value: "Row pitch 33\" empathy" },
      { label: "Weight", value: "Seven programs of suspense" },
      { label: "Dwell", value: "15-minute intermission" },
    ],
    steps: [
      {
        title: "Bolt the side standards to the rake, alternating rows for focus.",
        feeling: "The curve resembles the hush I rehearse for Act II.",
      },
      {
        title: "Stretch the velvet across the cushion, keeping the nap consistent.",
        feeling: "Tension teaches fabric how to hold anticipation.",
      },
      {
        title: "Attach program clips beneath the arm so announcements stay tidy.",
        feeling: "Each clip promises the story will eventually resume.",
      },
      {
        title: "Polish the brass number plate until it mirrors the stage lights.",
        feeling: "Waiting lets me see myself the way the performers do.",
      },
    ],
  },
  {
    id: "chair-06",
    serial: "WF-106",
    name: "Clinic Chair",
    caption: "Examination chair for rooms where results take their time.",
    color: "#f3e4d4",
    ambientSound: "audio/ambient-foyer.mp3",
    materials: ["Sanitized vinyl", "IV-pole bracket", "Powder-coated frame"],
    manufacturing: "Vestibule Systems",
    waitTime: "Average dwell time: 19 minutes",
    specs: [
      { label: "Model", value: "Clinic Chair" },
      { label: "Year", value: "2016 — quiet diagnostics" },
      { label: "Serial", value: "WF-106" },
      { label: "Type", value: "Outpatient seating" },
      { label: "Dimensions", value: "Seat height 19\" reassurance" },
      { label: "Weight", value: "Two lab results heavy" },
      { label: "Dwell", value: "19-minute vitals wait" },
    ],
    steps: [
      {
        title: "Position the frame on the sterile mat and trace the contour.",
        feeling: "Doors stay half open; I note the colour of the pause.",
      },
      {
        title: "Attach the backrest with alternating screws, pausing between turns.",
        feeling: "I alternate between certainty and wonder in the same rhythm.",
      },
      {
        title: "Clamp the IV bracket and test the swing of its quiet arc.",
        feeling: "Prepared to wait alone or with others; both require care.",
      },
      {
        title: "Label the seat with today’s clinic code, letting the ink dry evenly.",
        feeling: "Some diagnoses need a prelude; this chair holds mine.",
      },
    ],
  },
  {
    id: "chair-07",
    serial: "WF-107",
    name: "Meditation Cushion",
    caption: "Low cushion for studios where waiting becomes breathing.",
    color: "#cfe9da",
    ambientSound: "audio/ambient-gallery.mp3",
    materials: ["Buckwheat hull fill", "Canvas wrap", "Cotton straps"],
    manufacturing: "Gallery Support Unit",
    waitTime: "Average dwell time: 12 minutes",
    specs: [
      { label: "Model", value: "Meditation Cushion" },
      { label: "Year", value: "2020 — studio stillness" },
      { label: "Serial", value: "WF-107" },
      { label: "Type", value: "Floor cushion" },
      { label: "Dimensions", value: "Diameter 22\" breath circle" },
      { label: "Weight", value: "4 kg of grounded thoughts" },
      { label: "Dwell", value: "12-minute sitting" },
    ],
    steps: [
      {
        title: "Fill the inner liner with buckwheat hulls, smoothing as you pour.",
        feeling: "I orient my patience toward the floor before I begin.",
      },
      {
        title: "Stitch the circular seam, keeping the knot tucked inside.",
        feeling: "Thread passes through the cushion like a slow inhale.",
      },
      {
        title: "Add the carry strap and test the gentle bow of its grip.",
        feeling: "Silence waits with me; we compare the length of our breaths.",
      },
      {
        title: "Press the cushion to settle the hulls before the first chant.",
        feeling: "Understanding takes shape the way the cushion does—quietly.",
      },
    ],
  },
  {
    id: "chair-08",
    serial: "WF-108",
    name: "Salon Chair",
    caption: "Salon station seat for trims that run a little late.",
    color: "#dde5f4",
    ambientSound: "audio/ambient-porch.mp3",
    materials: ["Hydraulic base", "Chrome arms", "Soft leather wrap"],
    manufacturing: "Porchline Works",
    waitTime: "Average dwell time: 20 minutes",
    specs: [
      { label: "Model", value: "Salon Chair" },
      { label: "Year", value: "2013 — neon afternoon" },
      { label: "Serial", value: "WF-108" },
      { label: "Type", value: "Hydraulic stylist chair" },
      { label: "Dimensions", value: "Seat width 22\" mirror-ready" },
      { label: "Weight", value: "Holds two inches of uncut plans" },
      { label: "Dwell", value: "20-minute trim wait" },
    ],
    steps: [
      {
        title: "Secure the hydraulic base to the floorplate; polish the chrome.",
        feeling: "I steady the pedestal like a stylist steadying nerves.",
      },
      {
        title: "Slide the seat post and bleed the air until the lift glides.",
        feeling: "Up, down, I mirror the cadence of the scissor snip.",
      },
      {
        title: "Bolt on the armrests and comb holder toward the mirror wall.",
        feeling: "A small tray to hold every story that arrives with gossip.",
      },
      {
        title: "Test the tilt and lock it at conversation angle.",
        feeling: "Waiting loves a cape—the place between old and new.",
      },
    ],
  },
  {
    id: "chair-09",
    serial: "WF-109",
    name: "Office Chair",
    caption: "Adjustable task chair for cubicles where deliverables stall.",
    color: "#f7e4e4",
    ambientSound: "audio/ambient-nightwatch.mp3",
    materials: ["Mesh backrest", "Gas lift", "Casters"],
    manufacturing: "Midnight Fixtures",
    waitTime: "Average dwell time: 32 minutes",
    specs: [
      { label: "Model", value: "Office Chair" },
      { label: "Year", value: "2018 — open plan" },
      { label: "Serial", value: "WF-109" },
      { label: "Type", value: "Task seating" },
      { label: "Dimensions", value: "Seat height 17\"-21\"" },
      { label: "Weight", value: "Three overdue decks" },
      { label: "Dwell", value: "32-minute email gap" },
    ],
    steps: [
      {
        title: "Press the casters into the star base until they click polite spins.",
        feeling: "The floor hums even before the first meeting begins.",
      },
      {
        title: "Attach the gas lift and slide the shroud down over the column.",
        feeling: "Soft cylinders hide the parts that keep us going.",
      },
      {
        title: "Bolt the seat plate and lever assembly under the cushion.",
        feeling: "Tiny levers promise control over hours that drift.",
      },
      {
        title: "Set the mesh back and tighten the lumbar knob gently.",
        feeling: "Waiting becomes official when the monitor flickers awake.",
      },
    ],
  },
];

const params = new URLSearchParams(window.location.search);
const chairId = params.get("id") || "chair-01";

const loaderEl = document.querySelector(".loader");
const loaderProgress = document.querySelector(".loader__progress");
const loaderLabelEl = document.querySelector(".loader__label");
const loaderPhrasesContainer = document.querySelector(".loader__phrases");
const cursorEl = document.querySelector(".cursor");
const titleSerialEl = document.querySelector(".detail-title__serial");
const titleNameEl = document.querySelector(".detail-title__name");
const titleCaptionEl = document.querySelector(".detail-title__caption");
const specListEl = document.getElementById("specList");
const materialsStoryEl = document.querySelector(".materials-card__story");
const manualStepsEl = document.getElementById("manualSteps");
const specimenPlaceholder = document.querySelector(".specimen-placeholder");
const viewerEl = document.getElementById("chairViewer");
const backLinkEl = document.getElementById("backLink");

if (viewerEl && specimenPlaceholder) {
  viewerEl.addEventListener("load", () => {
    specimenPlaceholder.style.opacity = "0";
  });
  viewerEl.addEventListener("error", () => {
    specimenPlaceholder.style.opacity = "1";
  });
}

const TYPEWRITER_AUDIO_SRC = "audio/typewriter-soft.mp3";
const TYPEWRITER_INTERVAL = 95;
const AMBIENT_VOLUME = 0.28;
const typingStates = new WeakMap();
let ambientAudio = null;
let ambientResumeHandler = null;
let locomotion;

backLinkEl?.addEventListener("click", (event) => {
  event.preventDefault();
  const destination = backLinkEl.getAttribute("href") || "catalog.html";
  runReturnLoader(destination);
});

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function hexToRgba(hex, alpha = 1) {
  const normalized = hex.replace("#", "");
  const bigint = parseInt(normalized.length === 3 ? normalized.replace(/./g, (c) => c + c) : normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function buildSpecs(chair) {
  if (chair.specs?.length) {
    return chair.specs;
  }
  return [
    { label: "Model", value: chair.name },
    { label: "Serial", value: chair.serial },
    { label: "Type", value: "Assembly seating prototype" },
    { label: "Dimensions", value: "Approx. 1 m of patient surface" },
    { label: "Weight", value: "Emotional load: moderate" },
    { label: "Dwell", value: chair.waitTime || "Unmeasured pause" },
  ];
}

function playTypewriterSound() {
  if (!TYPEWRITER_AUDIO_SRC) {
    return;
  }
  const audio = new Audio(TYPEWRITER_AUDIO_SRC);
  audio.volume = 0.25;
  audio.play().catch(() => {});
}

function startTypewriter(stepEl, textEl) {
  const existing = typingStates.get(stepEl);
  if (existing?.timer) {
    clearInterval(existing.timer);
  }
  const full = textEl.dataset.text || "";
  textEl.textContent = "";
  if (!full.length) {
    return;
  }
  playTypewriterSound();
  let index = 0;
  const timer = setInterval(() => {
    index += 1;
    textEl.textContent = full.slice(0, index);
    if (index >= full.length) {
      clearInterval(timer);
      typingStates.delete(stepEl);
    }
  }, TYPEWRITER_INTERVAL);
  typingStates.set(stepEl, { timer, textEl });
}

function stopTypewriter(stepEl, textEl) {
  const state = typingStates.get(stepEl);
  if (state?.timer) {
    clearInterval(state.timer);
  }
  typingStates.delete(stepEl);
  if (textEl) {
    textEl.textContent = "";
  }
}

function setupManualStepInteractions(stepEl) {
  const overlayText = stepEl.querySelector(".manual-step__overlay-text");
  if (!overlayText) {
    return;
  }
  overlayText.dataset.text = (overlayText.textContent || "").trim();
  overlayText.textContent = "";

  const handleEnter = () => {
    stepEl.classList.add("is-hovered");
    startTypewriter(stepEl, overlayText);
  };

  const handleLeave = () => {
    stepEl.classList.remove("is-hovered");
    stopTypewriter(stepEl, overlayText);
  };

  stepEl.addEventListener("mouseenter", handleEnter);
  stepEl.addEventListener("mouseleave", handleLeave);
  stepEl.addEventListener("focusin", handleEnter);
  stepEl.addEventListener("focusout", handleLeave);
}

function appendHoverTip(stepEl) {
  if (stepEl.dataset.tipAdded) {
    return;
  }
  const tip = document.createElement("div");
  tip.className = "manual-step__tip";
  tip.textContent = "Hover to reveal waiting notes";
  stepEl.appendChild(tip);
  requestAnimationFrame(() => {
    tip.classList.add("is-visible");
  });
  const removeTip = () => {
    tip.classList.remove("is-visible");
    setTimeout(() => tip.remove(), 300);
  };
  stepEl.addEventListener("mouseenter", removeTip, { once: true });
  stepEl.addEventListener("focusin", removeTip, { once: true });
  stepEl.dataset.tipAdded = "true";
}

function stopAmbient() {
  if (ambientResumeHandler) {
    document.removeEventListener("pointerdown", ambientResumeHandler);
    ambientResumeHandler = null;
  }
  if (ambientAudio) {
    ambientAudio.pause();
    ambientAudio = null;
  }
}

function playAmbient(chair) {
  stopAmbient();
  if (!chair.ambientSound) {
    return;
  }
  ambientAudio = new Audio(chair.ambientSound);
  ambientAudio.preload = "auto";
  ambientAudio.loop = true;
  ambientAudio.volume = AMBIENT_VOLUME;
  ambientAudio.play().catch(() => {
    ambientResumeHandler = () => {
      if (!ambientAudio) {
        return;
      }
      ambientAudio.play().finally(() => {
        document.removeEventListener("pointerdown", ambientResumeHandler);
        ambientResumeHandler = null;
      });
    };
    document.addEventListener("pointerdown", ambientResumeHandler, { once: true });
  });
}

function runReturnLoader(destination) {
  if (!loaderEl || !loaderProgress || !loaderLabelEl || !loaderPhrasesContainer) {
    stopAmbient();
    window.location.href = destination;
    return;
  }
  document.body.classList.add("is-loading");
  loaderEl.hidden = false;
  loaderProgress.style.width = "0%";
  loaderLabelEl.textContent = "Preparing to jump ahead…";
  loaderPhrasesContainer.innerHTML = "";
  const note = document.createElement("div");
  note.className = "loader__phrase is-visible";
  note.textContent = "Progress 0%";
  loaderPhrasesContainer.appendChild(note);

  const fastTarget = randomBetween(0.55, 0.85);
  const fastPercent = Math.round(fastTarget * 100);
  const fastDuration = 900;
  const slowDuration = 3500;

  loaderLabelEl.textContent = `Loading ${fastPercent}%`;

  animateSegment(0, fastTarget, fastDuration, () => {
    loaderLabelEl.textContent = `Still loading… ${fastPercent}%`;
    note.textContent = "Perception stretches near the end.";
    animateSegment(fastTarget, 1, slowDuration, finish);
  });

  function animateSegment(from, to, duration, done) {
    const startTime = performance.now();
    function frame(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = from + (to - from) * progress;
      loaderProgress.style.width = `${value * 100}%`;
      note.textContent = `Progress ${Math.round(value * 100)}%`;
      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        done();
      }
    }
    requestAnimationFrame(frame);
  }

  function finish() {
    document.body.classList.remove("is-loading");
    loaderEl.hidden = true;
    stopAmbient();
    window.location.href = destination;
  }
}

function handleCursor(event) {
  cursorEl.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
}

function populateDetail(chair) {
  titleSerialEl.textContent = chair.serial;
  titleNameEl.textContent = chair.name;
  titleCaptionEl.textContent = chair.caption;
  specimenPlaceholder.style.background = `linear-gradient(135deg, ${chair.color}40, ${chair.color}65)`;
  specimenPlaceholder.style.transform = "rotateX(0deg) rotateY(0deg)";
  specimenPlaceholder.style.opacity = "1";

  if (viewerEl) {
    if (chair.model) {
      viewerEl.src = chair.model;
      viewerEl.alt = `Interactive model of ${chair.name}`;
      viewerEl.hidden = false;
    } else {
      viewerEl.removeAttribute("src");
      viewerEl.hidden = true;
    }
  }

  if (materialsStoryEl) {
    materialsStoryEl.textContent = chair.caption;
  }
  if (specListEl) {
    specListEl.innerHTML = "";
    buildSpecs(chair).forEach((item) => {
      const row = document.createElement("div");
      row.className = "spec-list__row";
      row.innerHTML = `<dt>${item.label}</dt><dd>${item.value}</dd>`;
      specListEl.appendChild(row);
    });
  }

  manualStepsEl.innerHTML = "";
  chair.steps.forEach((step, index) => {
    const li = document.createElement("li");
    li.className = "manual-step";
    li.tabIndex = 0;
    li.innerHTML = `
      <div class="manual-step__card">
        <div class="manual-step__face manual-step__face--front">
          <div class="manual-step__label">Step ${index + 1}</div>
          <p class="manual-step__text">${step.title}</p>
        </div>
        <div class="manual-step__face manual-step__face--back">
          <div class="manual-step__overlay">
            <span class="manual-step__overlay-text">${step.feeling}</span>
          </div>
        </div>
      </div>
    `;
    const accent = hexToRgba(chair.color, 0.6);
    li.style.setProperty("--step-accent", accent);
    manualStepsEl.appendChild(li);
    setupManualStepInteractions(li);
    if (index === 0) {
      appendHoverTip(li);
    }
  });

  playAmbient(chair);
}

function initSpecimen() {
  const stage = document.getElementById("specimenStage");
  if (!stage) return;
  const enableNativeCursor = () => document.body.classList.add("native-cursor");
  const disableNativeCursor = () => document.body.classList.remove("native-cursor");
  stage.addEventListener("pointermove", (event) => {
    const rect = stage.getBoundingClientRect();
    const xRatio = (event.clientX - rect.left) / rect.width - 0.5;
    const yRatio = (event.clientY - rect.top) / rect.height - 0.5;
    specimenPlaceholder.style.transform = `rotateX(${yRatio * -12}deg) rotateY(${xRatio * 12}deg)`;
  });
  const resetPose = () => {
    specimenPlaceholder.style.transform = "rotateX(0deg) rotateY(0deg)";
    disableNativeCursor();
  };
  stage.addEventListener("pointerenter", enableNativeCursor);
  stage.addEventListener("pointerleave", resetPose);
  stage.addEventListener("pointercancel", resetPose);
}

function initScroll() {
  const container = document.querySelector(".scroll");
  if (!container) return;
  if (window.LocomotiveScroll) {
    locomotion = new window.LocomotiveScroll({
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

window.addEventListener("beforeunload", stopAmbient);

document.addEventListener("DOMContentLoaded", () => {
  const chair = CHAIRS.find((item) => item.id === chairId) || CHAIRS[0];
  populateDetail(chair);
  initSpecimen();
  initScroll();
});

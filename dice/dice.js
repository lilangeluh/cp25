

(function () {
  // ---------- Utils ----------
  const pad2 = (n) => String(n).padStart(2, "0");
  const rr = (a, b) => a + Math.random() * (b - a);
  const rc = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // DOM
  const timeEl = document.getElementById("timeReadout");
  const detailEl = document.getElementById("detailReadout");
  const elProphecy = document.getElementById("prophecy");
  const elInstruction = document.getElementById("instruction");
  const elGlitch = document.getElementById("glitch");
  const modeBtn = document.getElementById("modeToggle");
  const stageEl = document.getElementById("stage");
  const cursorState = { centerX: 0, centerY: 0, radius: 0 };

  const BG_OPTS = {
    darkness: 0.58,    // 0 → fully transparent, 1 → darkest
    speed: 0.075,      
    grainDensity: 0.0032, 
    contrast: 0.55,    
  };

  // Theme toggle
  modeBtn.addEventListener("click", () => {
    const b = document.body;
    b.classList.toggle("theme-dark");
    b.classList.toggle("theme-light");
  });

  // ---------- Random stamp (48h/120m space; display HH:MM:SS) ----------
  function randomStamp() {
    const h = Math.floor(rr(0, 48));
    const m = Math.floor(rr(0, 120));
    
    const s = Math.floor(rr(0, 60));
    const month = Math.floor(rr(-2, 15));
    const day = Math.floor(rr(0, 41));
    const year = (Math.random() < 0.5 ? -1 : 1) * Math.floor(rr(1, 3301));
    return {
      hour: h, minute: m, second: s,
      month, day, year,
      timeStr: `${pad2(h % 24)}:${pad2(Math.floor(m / 2))}:${pad2(s)}`,
      detailStr: `Month ${month}, Day ${day}, Year ${year}`,
    };
  }

  // ---------- Real local time → both display + hand units ----------
  function realTimeNow() {
    const d = new Date();
    const hh24 = d.getHours();          // 0–23
    const mm60 = d.getMinutes();        // 0–59
    const ss60 = d.getSeconds();        // 0–59
    const month = d.getMonth() + 1;     // 1–12
    const day = d.getDate();            // 1–31
    const year = d.getFullYear();

    // 48/120 system
    const hourUnits   = (hh24 * 2) + (mm60 * (2 / 60)) + (ss60 * (2 / 3600));
    const minuteUnits = (mm60 * 2) + (ss60 * (2 / 60));

    return {
      displayTime: `${pad2(hh24)}:${pad2(mm60)}:${pad2(ss60)}`,
      displayDetail: `Month ${month}, Day ${day}, Year ${year}`,
      hourUnits, minuteUnits,
      month, day, year,
      hour: hh24,
      minute: mm60,
      second: ss60,
    };
  }

  // ---------- FORTUNES TEXT HEREERE ----------
  const LEX = {
    temporal: [
      (d) => `At ${d.time},`,
      (d) => `On Month ${d.month}, Day ${d.day},`,
      (d) => `Before Year ${d.year} ends,`,
      (d) => `When minute ${d.minute} loops,`,
      (d) => `After ${Math.max(1, Math.floor(d.hour / 2))} breaths,`,
      (d) => `Between ${d.time} and dawn,`,
      (d) => `When the air smells like rain at ${d.time},`,
      (d) => `As the kettle begins its second boil after ${d.time},`,
      (d) => `If the elevator pauses between floors at ${d.time},`,
      (d) => `Whenever the hallway draft curls at minute ${d.minute},`,
      (d) => `Just after the clouds dim at ${d.time},`,
    ],
    subj: [
      "your shadow","an old message","a door","the quiet","a small storm","your name",
      "the elevator","a blue window","the leftover minute","the missing day","the 13th month",
      "a stranger","your future self","the hallway","a pocket","the kettle","the rain",
      "sleep","the plant","the light under the door","a locked tab","the stairwell",
      "the streetlight","the cursor","the mirror","the storm drain","a thermos of broth",
      "the vending machine light","the rooftop garden air","a bag of oranges","the leftover dumpling",
      "the fog on the windows","the recipe card","the umbrella you forgot"
    ],
    verb: [
      "returns","unfolds","waits","forgets you","remembers you","calls once","refuses",
      "opens slightly","glitches","hums","asks for patience","misplaces itself","turns left",
      "looks back","thins out","arrives unannounced","circles twice","echoes","stutters","flickers","doubles",
      "steams softly","collects questions","changes flavor","lingers","maps the storm","breathes again",
      "condenses","waits by the door","checks the weather","warms its hands"
    ],
    tail: [
      "with both shoes untied","like static","without sound","with pockets full of keys",
      "in borrowed time","with your handwriting","as instructions","behind you","with cold tea",
      "wearing your jacket","as a rumor","from the far stairwell","in grayscale","under the fluorescent hum",
      "with last year's dust","as if rehearsed","smelling of oranges","holding the umbrella open",
      "carrying a thermos of soup","balancing a plate of dumplings","humming the weather forecast",
      "covered in rainwater","tasting of salt","wrapped in steam"
    ],
    imp: [
      (d) => `Wait ${Math.max(3, Math.floor(d.minute / 4))} seconds before replying.`,
      (d) => `Whisper your name into your left hand at ${d.time}.`,
      (d) => `Write Month ${d.month} and fold it three times.`,
      (d) => `Turn off one light and count to ${Math.max(5, d.day)}.`,
      () => `Stand in the doorway and do nothing until you hear the smallest sound.`,
      () => `Trace the nearest rectangle and keep the paper.`,
      () => `Do not discuss the weather with anyone wearing yellow tonight.`,
      (d) => `Taste the air at ${d.time}; if it is sweet, stay silent.`,
      () => `Set aside one dumpling for the hallway and do not eat it.`,
      (d) => `Wrap a pinch of salt in paper and keep it until ${Math.max(5, Math.floor(d.minute / 2))} steps have passed.`,
      () => `Warm the kettle once more, then let it cool without lifting the lid.`,
      () => `Carry a strip of citrus peel and inhale when the lights flicker.`,
    ],
    glitch: [
      (d) => `${d.time} :: ${d.time} :: time/refuses`,
      (d) => `M${d.month} D${d.day} Y${d.year} // ???`,
      (d) => `minute_${d.minute}::repeating::minute_${d.minute}`,
      () => `// ~already too late~ // ~too early~`,
      (d) => `month ${d.month} // day ${d.day} // year ${d.year}`,
      (d) => `forecast::${d.minute}::loopback`,
      () => `barometer::drift//umbrella::false`,
      (d) => `pantry?${d.day}?stairwell`,
      () => `steam%20%20noise%20%20dumpling`,
    ],
    scenes: [
      "The rain rehearses on the fire escape; the bricks listen.",
      "Steam from forgotten noodles fogs the stairwell window.",
      "A grocery bag sighs on the fourth-floor landing.",
      "Wind circles the antenna twice before giving up.",
      "Thunder tests each window latch in slow sequence.",
      "Oranges line up on the lobby counter like small suns.",
      "The vending machine hums a note your bones remember.",
      "Mist settles over the rooftop greenhouse like a misplaced blanket.",
      "Clouds bruise violet above the loading dock.",
      "A pigeon studies the vending alcove's glow and nods.",
      "A pot of soup refuses to cool beside the laundry machines.",
      "Neon reflections spill across the hallway tiles like water."
    ],
    consequences: [
      "Do not answer the second knock.",
      "Keep the umbrella closed even if it rains.",
      "Stir the broth thirteen times before tasting.",
      "Leave the elevator button untouched until it blinks twice.",
      "Skip the seventh sip of your coffee.",
      "Do not look into the mirror while chewing.",
      "Carry salt in your pocket tonight.",
      "Let the kettle complain without lifting the lid.",
      "Knock once on the pantry door and count to nine.",
      "Hide the spare fork until morning.",
      "Do not step on the tile that hums.",
      "Keep the dumpling for later; it is not ready."
    ],
    additions: [
      "Someone swaps the sugar for coarse salt.",
      "Your footsteps echo like unanswered calls.",
      "A neon sign spells your name backward.",
      "The vending machine refuses every even-numbered coin.",
      "A stranger hums your favorite recipe in the stairwell.",
      "A question hooks itself onto your sleeve.",
      "The calendar tries to skip a day and fails.",
      "The breeze tastes like citrus and static.",
      "Your shadow pockets the loose change.",
      "There is a chalk arrow beneath the hydrant.",
      "The hallway carpet remembers a storm.",
      "Light from the microwave blinks a code."
    ],
    questions: [
      (d) => `Who is already waiting behind the stairwell door at ${d.time}?`,
      (d) => `If the lights flicker at ${d.time}, will you listen or look away?`,
      () => "What if the rain knows your plans better than you do?",
      () => "Why does the elevator prefer odd-numbered shoes tonight?",
      () => "Who is tasting the soup before you?",
      (d) => `What did you promise the wind at ${d.minute} minutes past?`,
      () => "Which cupboard whispers when the kettle sighs?",
      () => "Will you recognize the question when it knocks?",
      () => "Who lined the oranges like a code on the counter?",
      (d) => `When ${d.time} loops back, what will you refuse to repeat?`
    ],
    objects: [
      "a chipped mug of tea",
      "the umbrella you never dry",
      "an unread weather report",
      "a thermos of broth",
      "the last dumpling",
      "a packet of salt",
      "the soup spoon that bends",
      "a bowl of oranges",
      "the borrowed scarf",
      "an unopened letter",
      "a wicker picnic basket",
      "the spare key wrapped in foil"
    ],
    places: [
      "the rooftop greenhouse",
      "the loading dock",
      "the mailroom door",
      "the vending alcove",
      "the fire escape landing",
      "the lobby couch",
      "the cafeteria table",
      "the basement pantry",
      "the hallway corner",
      "the borrowed rooftop",
      "the laundry room window",
      "the parking deck edge"
    ],
    weatherShort: [
      "rain rehearses on the fire escape",
      "fog braids itself into the stairwell",
      "wind memorizes every antenna",
      "thunder rolls its eyes at the skyline",
      "hail whispers about you by name",
      "the barometer drifts lower than usual",
      "the clouds hum unfinished chords",
      "the storm catalogs each window",
      "the air tastes faintly of basil and dust",
      "the lightning sketches your silhouette"
    ],
  };

  function baseProphecy(d) {
    if (Math.random() < 0.22) {
      return rc(LEX.questions)(d);
    }

    const templates = [
      () => `${rc(LEX.temporal)(d)} ${rc(LEX.subj)} ${rc(LEX.verb)} ${rc(LEX.tail)}.`,
      () => `${rc(LEX.temporal)(d)} ${rc(LEX.scenes)}`,
      () => `${rc(LEX.temporal)(d)} ${rc(LEX.objects)} waits at ${rc(LEX.places)} while ${rc(LEX.weatherShort)}.`,
    ];

    let prophecy = rc(templates)(d).trim();
    if (!/[.?!]$/.test(prophecy)) {
      prophecy += ".";
    }

    const roll = Math.random();
    if (roll < 0.6) {
      prophecy += ` ${rc(LEX.consequences)}`;
    } else if (roll < 0.9) {
      prophecy += ` ${rc(LEX.additions)}`;
    }

    return prophecy;
  }
  const baseInstruction = (d) => rc(LEX.imp)(d);
  const baseGlitchLine  = (d) => rc(LEX.glitch)(d);

  // Numerology
  function sameDigits(hhmm) {
    const d = hhmm.replace(":", "");
    return d.length === 4 && d.split("").every((x) => x === d[0]);
  }
  function luckyFlags(hhmm) {
    const [hh, mm] = hhmm.split(":");
    const s = hhmm.replace(":", "");
    const triples = /(111|222|333|444|555|666|777|888|999)/.test(s);
    const has13 = hh.includes("13") || mm.includes("13");
    const four44 = s.includes("444") || (mm === "44" && hh.endsWith("4"));
    return { allSame: sameDigits(hhmm), triples, has13, four44 };
  }
  function augmentForNumerology(d, texts) {
    // d.time is HH:MM
    const f = luckyFlags(d.time);
    let { prophecy, instruction, glitch } = texts;
    if (f.allSame) {
      prophecy = `At ${d.time}, the corridor aligns. A quiet door opens if you don't look at it directly.`;
      instruction = `Stand still for eleven breaths; let the second hand pass through you.`;
      glitch = `${d.time} :: synchronicity :: mirror`;
    } else if (f.has13) {
      prophecy = `The 13th minute is a hinge. You may step through, but leave one thought behind.`;
      instruction = `Count thirteen floor tiles before you speak.`;
      glitch = `// thirteen // threshold // undo //`;
    } else if (f.four44) {
      prophecy = `At 4:44, the building hums in your key.`;
      instruction = `Touch a wall and listen. If it answers, nod once.`;
      glitch = `4 4 4 :: grounding :: here`;
    } else if (f.triples) {
      prophecy = `Triplicate time loops your small intention back to you.`;
      instruction = `Repeat it three times—softly.`;
      glitch = `:: triple mark detected ::`;
    }
    return { prophecy, instruction, glitch };
  }

  // Typewriter + fade
  function typewrite(el, text, cps = 20, onDone) {
    el.classList.remove("fadeout");
    el.textContent = "";
    let i = 0;
    const timer = setInterval(() => {
      el.textContent = text.slice(0, i++);
      if (i > text.length) {
        clearInterval(timer);
        onDone && onDone();
      }
    }, Math.max(12, 1000 / cps));
    return timer;
  }
  function autoFade(el, delayMs = 10000) {
    setTimeout(() => el.classList.add("fadeout"), delayMs);
  }

  // shuffle-to-target
  const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&*()[]{}<>?/+=";
  function makeGlitcher(len, intervalMs = 140) {
    const chars = new Array(len).fill(" ");
    let last = 0;
    return (now) => {
      if (now - last >= intervalMs) {
        for (let i = 0; i < len; i++) {
          chars[i] = CHARSET[Math.floor(Math.random() * CHARSET.length)];
        }
        last = now;
      }
      return chars.join("");
    };
  }
  function shuffleTo(target, elapsed, duration) {
    const prog = Math.min(1, elapsed / duration);
    let out = "";
    for (let i = 0; i < target.length; i++) {
      const ch = target[i];
      const isPunct = /[: ,]/.test(ch);
      const done = isPunct ? prog > 0.85 : Math.random() > (1 - prog);
      out += done ? ch : CHARSET[Math.floor(Math.random() * CHARSET.length)];
    }
    return { out, done: prog >= 1 };
  }

  // ---------- p5 ----------
  new p5((p) => {
    // Theme palette
    function pal() {
      const light = document.body.classList.contains("theme-light");
      return light
        ? {
            stroke1: [54, 54, 62, 170],
            stroke2: [96, 96, 104, 140],
            ring: [110, 110, 118, 130],
            halo: [150, 150, 160, 70],
            noise: [168, 168, 178, 85],
            center: [40, 40, 46],
            bg: 244,
            base: [236, 236, 240, 255],
            handHour: [38, 38, 44],
            handMinute: [72, 72, 82],
          }
        : {
            stroke1: [190, 190, 198, 170],
            stroke2: [134, 134, 140, 150],
            ring: [156, 156, 164, 120],
            halo: [170, 170, 178, 75],
            noise: [220, 220, 228, 85],
            center: [246, 246, 246],
            bg: 12,
            base: [16, 16, 20, 255],
            handHour: [248, 248, 248],
            handMinute: [206, 206, 214],
          };
    }

    // Modes
    // realtime → glitchToRandom → randomReveal → randomIdle → glitchBack → realReveal → realtime
    let mode = "realtime";
    let modeStart = 0;

    // Random target
    let randomT = randomStamp();   // {hour, minute, second, month, day, year, timeStr, detailStr}
    let fakeH = randomT.hour, fakeM = randomT.minute, fakeS = randomT.second;

    // Glitchers 
    let timeGlitcher = makeGlitcher(8, 160);
    let detailGlitcher = makeGlitcher(randomT.detailStr.length, 130);

    // Canvas
    function mount() {
      const parent = document.getElementById("stage");
      const w = parent.clientWidth || 800;
      const h = parent.clientHeight || w || 560;
      const c = p.createCanvas(w, h);
      c.parent(parent);
      p.pixelDensity(1);
      p.textFont("Instrument Serif");
    }
    function resize() {
      const parent = document.getElementById("stage");
      const w = parent.clientWidth || 800;
      const h = parent.clientHeight || w || 560;
      p.resizeCanvas(w, h);
    }

    function drawDynamicBackground(PA, opts = BG_OPTS) {
      const {
        darkness = 0.5,
        speed = 0.06,
        grainDensity = 0.003,
        contrast = 0.5,
      } = opts;
      const light = document.body.classList.contains("theme-light");
      const w = p.width;
      const h = p.height;
      const cols = Math.max(24, Math.floor(w / 40));
      const rows = Math.max(18, Math.floor(h / 40));
      const cellW = w / cols;
      const cellH = h / rows;
      const t = p.millis() * speed * 0.001;

      const baseTone = light ? 210 : 10;
      const highlightTone = light ? 250 : 58;
      const baseAlpha = darkness * (light ? 120 : 190);
      const highlightAlpha = baseAlpha * (0.35 + contrast * 0.75);

      p.push();
      p.noStroke();
      for (let y = 0; y < rows; y++) {
        const ny = y / rows;
        for (let x = 0; x < cols; x++) {
          const nx = x / cols;
          const n = p.noise(nx * 0.9 + t, ny * 0.9 - t, t * 0.6);
          const shaped = p.constrain(0.5 + (n - 0.5) * (0.6 + contrast), 0, 1);
          const tone = p.lerp(baseTone, highlightTone, shaped);
          const alpha = p.lerp(baseAlpha * 0.4, highlightAlpha, shaped);
          p.fill(tone, tone, tone, alpha);
          p.rect(x * cellW, y * cellH, cellW + 1.5, cellH + 1.5);
        }
      }
      p.pop();

      p.push();
      p.noStroke();
      const grainCount = Math.floor(w * h * grainDensity);
      for (let i = 0; i < grainCount; i++) {
        const glimmer = light ? p.random(210, 255) : p.random(150, 215);
        const gAlpha = (light ? 45 : 65) * darkness * p.random(0.35, 0.9);
        p.fill(glimmer, glimmer, glimmer, gAlpha);
        const size = p.random(0.4, 1.1);
        p.rect(p.random(w), p.random(h), size, size);
      }
      p.pop();
    }

    // Hands drawing it out
    let clockScale = 1;

    function drawClock(cx, cy, hourValue, minuteValue, secondValue, spinBonus = 0, palette) {
      const sc = (value) => value * clockScale;
      const PA = palette || pal();
      const t = p.millis();
      const phase = (t - modeStart) / 1000;
      const safeMinute = Number.isFinite(minuteValue) ? minuteValue : 0;
      const safeSecond = Number.isFinite(secondValue) ? secondValue : 0;
      const safeHour = Number.isFinite(hourValue) ? hourValue : 0;
      const extraTurns = spinBonus / 60;
      const hourFrac = (((safeHour % 12) + safeMinute / 60 + safeSecond / 3600) / 12) + extraTurns;
      const minuteFrac = (((safeMinute % 60) + safeSecond / 60) / 60) + extraTurns;
      const hAng = p.TAU * hourFrac - p.HALF_PI;
      const mAng = p.TAU * minuteFrac - p.HALF_PI;

      p.push();
      p.translate(cx, cy);

      
      const haloR = sc(156) + Math.sin(t * 0.001) * sc(5);
      p.noFill(); p.stroke(...PA.halo); p.strokeWeight(2); p.circle(0, 0, haloR * 2);

      
      p.stroke(...PA.ring); p.strokeWeight(1.4);
      p.circle(0, 0, sc(244));
      p.circle(0, 0, sc(208));
      p.circle(0, 0, sc(132));

      
      p.push();
      p.stroke(...PA.stroke1); p.strokeWeight(1.6);
      for (let i = 0; i < 48; i++) {
        const a = p.TAU * (i / 48) - p.HALF_PI;
        p.line(Math.cos(a) * sc(122), Math.sin(a) * sc(122), Math.cos(a) * sc(132), Math.sin(a) * sc(132));
      }
      p.stroke(...PA.stroke2); p.strokeWeight(2.1);
      for (let i = 0; i < 120; i += 5) {
        const a = p.TAU * (i / 120) - p.HALF_PI;
        p.line(Math.cos(a) * sc(200), Math.sin(a) * sc(200), Math.cos(a) * sc(208), Math.sin(a) * sc(208));
      }
      p.pop();

      
      p.push();
      p.noFill(); p.stroke(...PA.noise); p.strokeWeight(1.4);
      const rr = sc(180); p.beginShape();
      for (let a = 0; a < p.TAU; a += p.TAU / 180) {
        const n = p.noise(Math.cos(a + phase * 0.5) * 1.2, Math.sin(a + phase * 0.5) * 1.2, 0.02);
        const r = rr + (n - 0.5) * sc(7);
        p.vertex(Math.cos(a) * r, Math.sin(a) * r);
      }
      p.endShape(p.CLOSE);
      p.pop();

      
      p.stroke(...PA.handHour); p.strokeWeight(4.1);
      p.line(0, 0, Math.cos(hAng) * sc(86), Math.sin(hAng) * sc(86));
      p.stroke(...PA.handMinute); p.strokeWeight(3);
      p.line(0, 0, Math.cos(mAng) * sc(120), Math.sin(mAng) * sc(120));
      p.noStroke(); p.fill(PA.center); p.circle(0, 0, 6);

      p.pop();
    }

    // Prophecies
    function spinPropheciesFromStamp(st) {
      elProphecy.classList.remove("fadeout");
      elInstruction.classList.remove("fadeout");
      elGlitch.classList.remove("fadeout");
      clearTimeout(backTimer);

      const hhmm = st.timeStr.slice(0,5); // HH:MM for numerology
      let texts = {
        prophecy: baseProphecy({ time: hhmm, month: st.month, day: st.day, year: st.year, minute: st.minute, hour: st.hour }),
        instruction: baseInstruction({ time: hhmm, month: st.month, day: st.day, year: st.year, minute: st.minute, hour: st.hour }),
        glitch: baseGlitchLine({ time: hhmm, month: st.month, day: st.day, year: st.year, minute: st.minute, hour: st.hour }),
      };
      texts = augmentForNumerology({ time: hhmm }, texts);

      const fadeDelay = 11000;
      const startGlitch = () => {
        typewrite(elGlitch, texts.glitch, 15, () => {
          autoFade(elGlitch, fadeDelay);
          clearTimeout(backTimer);
          backTimer = setTimeout(() => { mode = "glitchBack"; modeStart = p.millis(); }, 16500);
        });
      };
      const startInstruction = () => {
        typewrite(elInstruction, texts.instruction, 16, () => {
          autoFade(elInstruction, fadeDelay);
          setTimeout(startGlitch, 250);
        });
      };
      typewrite(elProphecy, texts.prophecy, 18, () => {
        autoFade(elProphecy, fadeDelay);
        setTimeout(startInstruction, 250);
      });
    }
    let backTimer = null;

    
    p.setup = () => {
      mount();
      modeStart = p.millis();
    };
    p.windowResized = () => { resize(); };
    p.draw = () => {
      const PA = pal();
      p.clear();
      drawDynamicBackground(PA, BG_OPTS);

      const now = p.millis();
      const cx = p.width / 2;
      const cy = p.height / 2;
      const diameter = Math.min(p.width, p.height);
      clockScale = Math.min(0.88, Math.max(0.55, diameter / 540));
      if (stageEl) {
        const stageRect = stageEl.getBoundingClientRect();
        cursorState.centerX = stageRect.left + cx;
        cursorState.centerY = stageRect.top + cy;
        cursorState.radius = clockScale * 208 + clockScale * 20;
      }

      let displayTime = "";
      let displayDetail = "";
      let clockHours = 0;
      let clockMinutes = 0;
      let clockSeconds = 0;
      let spinBonus = 0; 

      if (mode === "realtime") {
        const rt = realTimeNow();
        displayTime = rt.displayTime;
        displayDetail = rt.displayDetail;
        clockHours = rt.hour;
        clockMinutes = rt.minute;
        clockSeconds = rt.second;

      } else if (mode === "glitchToRandom") {
        // hands spin fast; digits glitch
        const elapsed = (now - modeStart) / 1000;
        spinBonus = elapsed * 60 * 3; // fast spin (tweak 3→faster/slower)
        displayTime = timeGlitcher(now);
        displayDetail = detailGlitcher(now);

        clockHours = 0;
        clockMinutes = 0;
        clockSeconds = 0;

        if (now - modeStart > 1500) {
          mode = "randomReveal";
          modeStart = now;
          
          randomT = randomStamp();
          fakeH = randomT.hour; fakeM = randomT.minute; fakeS = randomT.second;
          // adjust glitcher lengths for the reveal target lengths
          timeGlitcher = makeGlitcher(8, 160);
          detailGlitcher = makeGlitcher(randomT.detailStr.length, 130);
        }

      } else if (mode === "randomReveal") {
        const elapsed = now - modeStart;
        const tProg = shuffleTo(randomT.timeStr, elapsed, 1200);
        const dProg = shuffleTo(randomT.detailStr, elapsed, 1200);
        displayTime = tProg.out;
        displayDetail = dProg.out;

        // during reveal, still spin but decelerate
        const sec = elapsed / 1000;
        spinBonus = (1.2 - Math.min(1.2, sec)) * 80; 
        const randomHour = randomT.hour % 24;
        const randomMinute = (randomT.minute / 2) % 60;
        const randomSecond = randomT.second % 60;
        clockHours = randomHour;
        clockMinutes = randomMinute;
        clockSeconds = randomSecond;

        if (tProg.done && dProg.done) {
          mode = "randomIdle";
          modeStart = now;
          
          spinPropheciesFromStamp({
            hour: randomT.hour, minute: randomT.minute, second: randomT.second,
            month: randomT.month, day: randomT.day, year: randomT.year,
            timeStr: randomT.timeStr, detailStr: randomT.detailStr
          });
        }

      } else if (mode === "randomIdle") {
        
        if (p.frameCount % 1 === 0) {
          const dt = p.deltaTime / 1000;
          
          let s = fakeS + dt;
          while (s >= 1) { fakeS += 1; s -= 1; }
          if (fakeS >= 60) { fakeS = 0; fakeM = (fakeM + 1) % 120; if (fakeM === 0) fakeH = (fakeH + 1) % 48; }
        }
        const dispHH = pad2(fakeH % 24);
        const dispMM = pad2(Math.floor(fakeM / 2));
        const dispSS = pad2(fakeS % 60);
        displayTime = `${dispHH}:${dispMM}:${dispSS}`;
        displayDetail = randomT.detailStr;

        clockHours = fakeH % 24;
        clockMinutes = (fakeM / 2) % 60;
        clockSeconds = fakeS % 60;

      } else if (mode === "glitchBack") {
        const elapsed = (now - modeStart) / 1000;
        spinBonus = elapsed * 60 * 3; 
        displayTime = timeGlitcher(now);

        const rt = realTimeNow();
        
        if (detailGlitcher(0).length !== rt.displayDetail.length) {
          detailGlitcher = makeGlitcher(rt.displayDetail.length, 130);
        }
        displayDetail = detailGlitcher(now);

        clockHours = 0;
        clockMinutes = 0;
        clockSeconds = 0;

        if (now - modeStart > 1500) {
          mode = "realReveal";
          modeStart = now;
          elProphecy.textContent = "";
          elInstruction.textContent = "";
          elGlitch.textContent = "";
          elProphecy.classList.remove("fadeout");
          elInstruction.classList.remove("fadeout");
          elGlitch.classList.remove("fadeout");
        }

      } else if (mode === "realReveal") {
        const rt = realTimeNow();
        const tProg = shuffleTo(rt.displayTime, now - modeStart, 1200);
        const dProg = shuffleTo(rt.displayDetail, now - modeStart, 1200);
        displayTime = tProg.out;
        displayDetail = dProg.out;
        clockHours = rt.hour;
        clockMinutes = rt.minute;
        clockSeconds = rt.second;

        if (tProg.done && dProg.done) {
          mode = "realtime";
          modeStart = now;
        }
      }

      // Readouts & clock
      timeEl.textContent = displayTime;
      detailEl.textContent = displayDetail;

      drawClock(cx, cy, clockHours, clockMinutes, clockSeconds, spinBonus, PA);
    };

    // Interactions
    const surface = document.querySelector(".wrap");
    let clockCursorActive = false;
    surface.addEventListener("mousemove", (e) => {
      if (!cursorState.radius) return;
      const blocked =
        e.target.closest(".prophecy-wrap") ||
        e.target.closest(".readout") ||
        e.target.closest(".mode-toggle");
      if (blocked) {
        if (clockCursorActive) {
          document.body.classList.remove("cursor-clock");
          clockCursorActive = false;
        }
        return;
      }
      const dx = e.clientX - cursorState.centerX;
      const dy = e.clientY - cursorState.centerY;
      const inside = (dx * dx + dy * dy) <= cursorState.radius * cursorState.radius;
      if (inside && !clockCursorActive) {
        document.body.classList.add("cursor-clock");
        clockCursorActive = true;
      } else if (!inside && clockCursorActive) {
        document.body.classList.remove("cursor-clock");
        clockCursorActive = false;
      }
    });
    surface.addEventListener("mouseleave", () => {
      if (clockCursorActive) {
        document.body.classList.remove("cursor-clock");
        clockCursorActive = false;
      }
    });
    surface.addEventListener("mousedown", (e) => {
      if (mode !== "realtime") return;
      if (e.button !== 0) return;
      if (e.target.closest(".prophecy-wrap") || e.target.closest(".readout")) return;

      randomT = randomStamp();
      fakeH = randomT.hour; fakeM = randomT.minute; fakeS = randomT.second;
      timeGlitcher = makeGlitcher(8, 160);
      detailGlitcher = makeGlitcher(randomT.detailStr.length, 130);
      mode = "glitchToRandom";
      modeStart = p.millis();
    });
    window.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        if (mode === "realtime") {
          randomT = randomStamp();
          fakeH = randomT.hour; fakeM = randomT.minute; fakeS = randomT.second;
          timeGlitcher = makeGlitcher(8, 160);
          detailGlitcher = makeGlitcher(randomT.detailStr.length, 130);
          mode = "glitchToRandom";
          modeStart = p.millis();
        }
      }
    });
  });
})();

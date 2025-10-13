// ===== theme / globals =====
let BG, INK, GRAIN;
let PASTELS = [];

let FONT_SIZE = 22;
const MIN_FONT = 12, LINE_MULT = 1.4;
let LINE_H = Math.round(FONT_SIZE * LINE_MULT);
let STANZA_GAP = 18;
let v2_staffTops = [];


const UI_TOP = 0, PAGE_MARGIN = 48;

// ===== fonts (async) =====
let fBytesized = null;
let fLekton = { regular:null, bold:null, italic:null };
let fTomorrow = { regular:null, italic:null, bold:null, light:null, semibold:null };

// Tomorrow pools for V1
const TomorrowPools = { normals: [], italics: [] };

// per-version base fonts
let fontV1 = 'Georgia', fontV2 = 'Georgia', fontV3 = 'Georgia', fontV4 = 'Georgia', fontV5 = 'Georgia';

// per-version palettes
const PALETTES = {
  v1: { bg: () => color(38,46,30),  ink: () => color(251,245,196) },   
  v2: { bg: () => color(245,237,225), ink: () => color(60,42,33) },    
  v3: { bg: null, ink: null },                                          // randomized each reshuffle
  v4: { bg: () => color(216,234,115), ink: () => color(95,72,72) },     
  v5: { bg: () => color(230,246,254), ink: () => color(56,36,52) }      // pink/plum
};

// ===== text =====
const SOURCE_TEXT = `
Next to Hudson Yards, it's crowded on the weekdays
From April to May
Parse apart a troubled heart from an e-train
And sing about it in L.A.
With clouds in the rearview
You start humming along to the first verse
Of your favorite song that you quote each day
With the words all wrong
So call me when the world looks bleak
I love you, but it's hard to believe
With every day we'll start to see
The rest is metamodernity
With agrestic charm, it's humid in the Midwest
From June to July
All beneath a pinkish sky from the wildfires
Which mantle the horizon line
From the outset
It's been hard to tell
Why we feel this down
When it all bodes well
So call me when the world looks bleak
I love you, but it's hard to believe
With every day we'll start to see
The rest is metamodernity
`;

// ===== state =====
let mode = 1;
let btns = {}, shuffleBtn;

let v1_layout = [];                    // unreadable
let v2_layout = [];                    // staff fade/rotate
let v3_tokens = [], v3_lines = [];     // shuffle stanza
let v4_items = [], v4_grab = null, v4_off = { x:0, y:0 }; // drag
let v5_lines = [];                     // redact diagonal

// ===== setup =====
function setup() {
  createCanvas(windowWidth, windowHeight);

  PASTELS = [
    color(255,196,196), color(255,221,186), color(255,245,179),
    color(205,236,179), color(186,226,255), color(206,193,255),
    color(255,200,235)
  ];

  textFont('Georgia');
  setFontSize(22);

  const y = height - 40; let x = 12;
  btns.v1 = mkBtn("1", x, y, () => setMode(1)); x += 36;
  btns.v2 = mkBtn("2", x, y, () => setMode(2)); x += 36;
  btns.v3 = mkBtn("3", x, y, () => setMode(3)); x += 36;
  btns.v4 = mkBtn("4", x, y, () => setMode(4)); x += 36;
  btns.v5 = mkBtn("5", x, y, () => setMode(5)); x += 36;
  shuffleBtn = mkBtn("reshuffle", x, y, () => { v3_shuffle(); randomizeV3Theme(true); layoutV3(); });

  buildGrain();
  loadFontsAsync();       // non-blocking

  v3_shuffle();
  randomizeV3Theme(true);

  fitAndLayoutAll();
  setMode(1);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  const y = height - 40; let x = 12;
  Object.values(btns).forEach((b, i) => b.position(12 + 36 * i, y));
  shuffleBtn.position(12 + 36 * 5, y);
  buildGrain();
  fitAndLayoutAll();
}

// ===== async font loader =====
function loadFontsAsync() {
  const tryLoad = (path, ok) => loadFont(path, f => { ok && ok(f); fontsReadyMaybe(); }, () => {});

  // Bytesized (V4)
  tryLoad('fonts/Bytesized-Regular.ttf', f => { fBytesized = f; });

  // Lekton (V2, V5)
  tryLoad('fonts/Lekton-Regular.ttf', f => { fLekton.regular = f; });
  tryLoad('fonts/Lekton-Bold.ttf',    f => { fLekton.bold    = f; });
  tryLoad('fonts/Lekton-Italic.ttf',  f => { fLekton.italic  = f; });

  // Tomorrow (V1 + V3)
  tryLoad('fonts/Tomorrow-Regular.ttf', f => { fTomorrow.regular  = f; TomorrowPools.normals.push(f); });
  tryLoad('fonts/Tomorrow-Italic.ttf',  f => { fTomorrow.italic   = f; TomorrowPools.italics.push(f); });
  tryLoad('fonts/Tomorrow-Bold.ttf',    f => { fTomorrow.bold     = f; TomorrowPools.normals.push(f); });
  tryLoad('fonts/Tomorrow-Light.ttf',   f => { fTomorrow.light    = f; TomorrowPools.normals.push(f); });
  tryLoad('fonts/Tomorrow-SemiBold.ttf',f => { fTomorrow.semibold = f; TomorrowPools.normals.push(f); });

  function fontsReadyMaybe() {
    // assign per-version once better than Georgia is present
    if (fontV1 === 'Georgia' && (TomorrowPools.normals.length || TomorrowPools.italics.length))
      fontV1 = pickAnyTomorrow() || 'Georgia';

    if (fontV2 === 'Georgia') fontV2 = fLekton.regular || 'Georgia';     // V2 = Lekton
    if (fontV3 === 'Georgia') fontV3 = fTomorrow.regular || 'Georgia';   // V3 = Tomorrow
    if (fontV4 === 'Georgia') fontV4 = fBytesized || 'Georgia';          // V4 = Bytesized
    if (fontV5 === 'Georgia') fontV5 = fLekton.regular || 'Georgia';     // V5 = Lekton

    fitAndLayoutAll();
  }
}

// ===== draw =====
function draw() {
  background(BG);
  if (GRAIN) image(GRAIN, 0, 0, width, height);

  push();
  translate(0, UI_TOP);
  if (mode === 1) drawV1();
  if (mode === 2) drawV2();
  if (mode === 3) drawV3();
  if (mode === 4) drawV4();
  if (mode === 5) drawV5();
  pop();

  if (mode === 4) {
    const over = v4_hit(mouseX, mouseY);
    if (v4_grab) cursor('grabbing');
    else if (over >= 0) cursor('grab');
    else cursor('default');
  } else cursor('default');
}

// ===== inputs =====
function mousePressed(){ if (mode===4) v4_down(); }
function mouseDragged(){ if (mode===4) v4_drag(); }
function mouseReleased(){ if (mode===4) v4_up(); }
function keyPressed(){}

// ===== ui =====
function mkBtn(label, x, y, onClick){
  const b = createButton(label);
  b.position(x, y);
  b.mousePressed(onClick);
  b.style('font-size','12px');
  b.style('padding','6px 10px');
  b.style('border','1px solid rgba(0,0,0,0.15)');
  b.style('border-radius','6px');
  b.style('background','#ffffffaa');
  return b;
}
function setMode(m){
  mode = constrain(m,1,5);
  shuffleBtn[(mode===3)?'show':'hide']();

  if (mode===1){ BG=PALETTES.v1.bg(); INK=PALETTES.v1.ink(); }
  if (mode===2){ BG=PALETTES.v2.bg(); INK=PALETTES.v2.ink(); }
  if (mode===3){
    if (!PALETTES.v3.bg || !PALETTES.v3.ink) randomizeV3Theme(true);
    BG=PALETTES.v3.bg(); INK=PALETTES.v3.ink();
  }
  if (mode===4){ BG=PALETTES.v4.bg(); INK=PALETTES.v4.ink(); }
  if (mode===5){ BG=PALETTES.v5.bg(); INK=PALETTES.v5.ink(); }
}

// ===== shared layout =====
function setFontSize(sz){
  FONT_SIZE = sz; textSize(FONT_SIZE);
  LINE_H = Math.round(FONT_SIZE * LINE_MULT);
  STANZA_GAP = Math.round(FONT_SIZE * 0.9);
}
function splitLinesKeepBlanks(){
  const arr = SOURCE_TEXT.replace(/\r/g,'').split('\n');
  while (arr.length && arr[0].trim()==='') arr.shift();
  while (arr.length && arr[arr.length-1].trim()==='') arr.pop();
  return arr;
}
function blockHeight(lines){
  let total=0;
  for (const ln of lines) total += (ln.trim()==='') ? STANZA_GAP : LINE_H;
  return total;
}
function centeredYStart(){
  const lines = splitLinesKeepBlanks();
  const usableH = height - UI_TOP - PAGE_MARGIN*2;
  const total = blockHeight(lines);
  const topOffset = (usableH - total) / 2;
  return max(PAGE_MARGIN, PAGE_MARGIN + topOffset);
}
function measureLine(words){
  let m=0;
  for (let i=0;i<words.length;i++){ m += textWidth(words[i]); if(i<words.length-1) m += textWidth(' '); }
  return m;
}
function fitAndLayoutAll(){
  const lines = splitLinesKeepBlanks();
  const availH = height - UI_TOP - PAGE_MARGIN*2;
  setFontSize(22);
  while (blockHeight(lines) > availH && FONT_SIZE > MIN_FONT) setFontSize(FONT_SIZE-1);

  layoutV1();
  layoutV2();
  layoutV3();
  layoutV4();
  layoutV5();
}

// light grain
function buildGrain(){
  GRAIN = createGraphics(width, height);
  GRAIN.clear(); GRAIN.noStroke();
  const dots = Math.floor(width*height*0.005);
  for (let i=0;i<dots;i++){
    const gx=random(width), gy=random(height), a=random(6,12);
    GRAIN.fill(0, a);
    GRAIN.circle(gx, gy, random(0.5,1.2));
  }
}

// ===== tomorrow helpers =====
function pickAnyTomorrow(){ return TomorrowPools.normals[0] || TomorrowPools.italics[0] || null; }
function pickRandomTomorrow(){ const p=[...TomorrowPools.normals,...TomorrowPools.italics]; return p.length?random(p):null; }

// ===== V1: unreadable (Tomorrow random) =====
function layoutV1(){
  v1_layout = [];
  const lines = splitLinesKeepBlanks(); let y = centeredYStart();
  textAlign(LEFT, BASELINE); textFont(fontV1); textSize(FONT_SIZE);

  for (const ln of lines){
    if (ln.trim()===''){ v1_layout.push({gap:true}); y+=STANZA_GAP; continue; }
    const words = ln.split(/\s+/);
    let x = width/2 - measureLine(words)/2;
    const row = []; for (const w of words){ row.push({t:w, x, y}); x += textWidth(w+' '); }
    v1_layout.push({gap:false, words:row}); y += LINE_H;
  }
}
function drawV1(){
  randomSeed(12543); textAlign(LEFT, BASELINE);
  for (const line of v1_layout){
    if (line.gap) continue;
    const baseY = line.words[0].y; let cx = line.words[0].x;
    for (const w of line.words){
      const tf = pickRandomTomorrow() || fontV1;
      textFont(tf);
      textSize(random(max(6, FONT_SIZE*0.6), max(20, FONT_SIZE*2.2)));
      for (const ch of w.t.split('')){
        fill(INK); text(ch, cx, baseY);
        cx += textWidth(ch)*random(0.6,1.35)+random(-1,1.2);
      }
      cx += textWidth(' ')*random(0.8,2.0);
    }
  }
  textSize(FONT_SIZE);
}

// ===== V2: staff rotate/fade (Lekton) =====
function layoutV2(){
  v2_layout = [];
  v2_staffTops = [];

  textAlign(LEFT, BASELINE);
  textFont(fontV2);
  textSize(FONT_SIZE);

  const gap = max(12, FONT_SIZE * 0.75);     // distance between staff lines
  const staffSpan = gap * 4;                  // 5 lines occupy 4 gaps
  const inter = gap * 3;                      // space between staffs

  // center the whole 3-staff block vertically
  const totalBlock = 3 * staffSpan + 2 * inter;
  const topBlock = (height - UI_TOP - totalBlock) / 2;
  const baseTop = max(PAGE_MARGIN, topBlock);

  // compute tops of each staff (y of first line)
  for (let s = 0; s < 3; s++) {
    v2_staffTops[s] = baseTop + s * (staffSpan + inter);
  }

  // split words into 3 equal slices
  const all = SOURCE_TEXT.trim().split(/\s+/);
  const per = Math.ceil(all.length / 3);

  for (let s = 0; s < 3; s++) {
    const slice = all.slice(s * per, (s + 1) * per);
    if (!slice.length) continue;

    // even horizontal distribution: compute extra spacing
    const availW = width - PAGE_MARGIN * 2;
    const spaceW = textWidth(' ');
    let wordsW = 0;
    for (const w of slice) wordsW += textWidth(w);
    const gaps = max(1, slice.length - 1);
    const totalBase = wordsW + gaps * spaceW;
    const extra = max(0, (availW - totalBase) / gaps);

    // place words across the staff
    let x = PAGE_MARGIN;
    for (let i = 0; i < slice.length; i++) {
      const t = slice[i];
      const yOnLine = v2_staffTops[s] + (i % 5) * gap;              // pick one of 5 lines
      const y = yOnLine + random(-gap * 0.12, gap * 0.12);          // tiny jitter
      v2_layout.push({ t, x, y, staff: s });
      x += textWidth(t) + spaceW + extra;
    }
  }
}

function drawV2(){
  textAlign(LEFT, BASELINE);
  textFont(fontV2);
  textSize(FONT_SIZE);

  // draw the 3 staffs
  const gap = max(12, FONT_SIZE * 0.75);
  stroke(red(INK), green(INK), blue(INK), 60);
  for (let s = 0; s < v2_staffTops.length; s++) {
    const top = v2_staffTops[s];
    for (let i = 0; i < 5; i++) {
      const ly = top + i * gap;
      line(PAGE_MARGIN, ly, width - PAGE_MARGIN, ly);
    }
  }
  noStroke();

  // word rotation + opacity
  const r = map(mouseX, 0, width, 0, 1, true);
  randomSeed(982347);
  for (const w of v2_layout){
    const theta = radians(random(-7, 7));
    const base = lerp(40, 255, r);
    const a = (random() < 0.25) ? random(20, base * 0.3) : random(base * 0.55, base);
    push(); translate(w.x, w.y); rotate(theta);
    fill(red(INK), green(INK), blue(INK), a);
    text(w.t, 0, 0);
    pop();
  }
}


// ===== V3: shuffle (Tomorrow), palette changes on reshuffle =====
function randomizeV3Theme(forceNew=true){
  if (!forceNew) return;
  const sets = [
    { bg: color(250,244,236), ink: color(50,36,30) },
    { bg: color(240,245,252), ink: color(34,43,58) },
    { bg: color(236,248,242), ink: color(36,64,56) },
    { bg: color(250,239,246), ink: color(56,36,52) },
    { bg: color(15,17,20),    ink: color(236,234,228) }
  ];
  const p = random(sets);
  PALETTES.v3.bg = () => p.bg; PALETTES.v3.ink = () => p.ink;
  if (mode===3){ BG = p.bg; INK = p.ink; }
}
// shuffle words inside each original line
function v3_shuffle(){
  v3_lines = []; // we’ll rebuild in layoutV3
}

function layoutV3(){
  v3_lines = [];
  textAlign(LEFT, BASELINE);
  textFont(fontV3);
  textSize(FONT_SIZE);

  const lines = splitLinesKeepBlanks();
  for (const ln of lines){
    if (ln.trim() === '') { v3_lines.push({ blank:true }); continue; }
    const words = ln.split(/\s+/);
    shuffle(words, true);                       // shuffle just this line
    const textLine = words.join(' ');

    // measure and store centered x
    const w = textWidth(textLine);
    v3_lines.push({ blank:false, str:textLine, w });
  }
}

function drawV3(){
  if (PALETTES.v3.bg && PALETTES.v3.ink){ BG = PALETTES.v3.bg(); INK = PALETTES.v3.ink(); }

  textAlign(CENTER, BASELINE);
  textFont(fontV3);
  textSize(FONT_SIZE);
  fill(INK);

  // compute total block height (respect stanza gaps)
  let total = 0;
  for (const row of v3_lines) total += row.blank ? STANZA_GAP : LINE_H;

  let y = PAGE_MARGIN + (height - UI_TOP - PAGE_MARGIN*2 - total)/2;
  y = max(PAGE_MARGIN, y);

  for (const row of v3_lines){
    if (row.blank){ y += STANZA_GAP; continue; }
    text(row.str, width/2, y);
    y += LINE_H;
  }
}


// ===== V4: drag (Bytesized) =====
function layoutV4(){
  v4_items = [];
  textAlign(LEFT, BASELINE); textFont(fontV4); textSize(FONT_SIZE);
  const words = SOURCE_TEXT.trim().split(/\s+/);
  for (const w of words){
    const tw = textWidth(w);
    v4_items.push({
      t:w, w:tw,
      x: random(PAGE_MARGIN, width-PAGE_MARGIN-tw),
      y: random(PAGE_MARGIN+30, height-PAGE_MARGIN-30)
    });
  }
}
function v4_hit(mx,my){
  textFont(fontV4); textSize(FONT_SIZE);
  const asc=textAscent(), desc=textDescent();
  for (let i=v4_items.length-1;i>=0;i--){
    const it=v4_items[i];
    if (mx>=it.x && mx<=it.x+it.w && my>=it.y-asc && my<=it.y+desc) return i;
  }
  return -1;
}
function v4_down(){
  const idx = v4_hit(mouseX, mouseY);
  if (idx>=0){
    v4_grab = v4_items[idx];
    v4_off = { x:mouseX - v4_grab.x, y:mouseY - v4_grab.y };
    v4_items.splice(idx,1); v4_items.push(v4_grab);
  }
}
function v4_drag(){ if (!v4_grab) return; v4_grab.x = mouseX - v4_off.x; v4_grab.y = mouseY - v4_off.y; }
function v4_up(){ v4_grab = null; }
function drawV4(){
  textFont(fontV4); textSize(FONT_SIZE);
  for (const it of v4_items){ fill(INK); text(it.t, it.x, it.y); }
  const idx = v4_hit(mouseX, mouseY);
  if (idx>=0){
    const it=v4_items[idx], asc=textAscent(), desc=textDescent();
    noFill(); stroke(INK); rect(it.x-2, it.y-asc-2, it.w+4, asc+desc+4); noStroke();
  }
}

// ===== V5: redact diagonal (Lekton) =====
function layoutV5(){
  v5_lines = [];
  textAlign(LEFT, BASELINE); textFont(fontV5); textSize(FONT_SIZE);
  const lines = splitLinesKeepBlanks();
  const slope = 0.6, startY = centeredYStart();

  let y = startY;
  for (const ln of lines){
    if (ln.trim()===''){ y += STANZA_GAP; continue; }
    const words = ln.split(/\s+/);
    let x = width/2 - measureLine(words)/2;
    const row = [];
    for (const w of words){
      const tw = textWidth(w);
      const dy = (x - width/2) * slope * 0.01;
      row.push({ t:w, x, y:y+dy, w:tw, red:false, bar:null });
      x += tw + textWidth(' ');
    }
    v5_lines.push({ words:row });
    y += LINE_H;
  }
}
function drawV5(){
  textFont(fontV5); textSize(FONT_SIZE);
  const my = mouseY;
  for (const ln of v5_lines){
    for (const w of ln.words){
      const asc=textAscent(), desc=textDescent();
      const over = mouseX>=w.x && mouseX<=w.x+w.w && my>=w.y-asc && my<=w.y+desc;
      if (over && !w.red){ w.red = true; w.bar = random(PASTELS); }
      if (w.red){
        fill(red(INK),green(INK),blue(INK),40); text(w.t, w.x, w.y);
        noStroke(); fill(w.bar); rect(w.x, w.y-asc, w.w, asc+desc, 4); fill(INK);
      } else {
        fill(INK); text(w.t, w.x, w.y);
      }
    }
  }
}

// Gradients based on local time of day
const gradients = {
  morning: ['#F0BD8B', '#E3B0AB', '#F68966'],
  afternoon: ['#ECAFA5', '#D7B0B9', '#A9B2C3'],
  night: ['#B1ACBF', '#617599', '#464F88']
};

// Time-based phrases for each timezone
const preEnteredMessages = [
  { time: '00:00', pst: 'Zzzzz Goodnight ZZzzzz', cst: 'Zzzzz Zzzzz Zzzzz' },
  { time: '07:00', pst: 'Snoozing my alarm clock right now...', cst: "Getting ready for the morning, hitting the gym if there's time" },
  { time: '08:00', pst: 'Waking up or snoozing more until 9am :D', cst: 'OMW to work!' },
  { time: '10:00', pst: 'Making myself a matcha latte or cup of coffee', cst: 'Starting work on a new project, going to meetings' },
  { time: '12:00', pst: 'Taking a lunch break on campus, maybe paninis from Northern', cst: 'Lunch time before heading back to work' },
  { time: '15:00', pst: 'Locked-in in my DESMA studio, presenting my project', cst: 'Taking a quick break at work, one more meeting left' },
  { time: '17:00', pst: 'End of the day for classes, going home to cook', cst: 'Getting off work now, traffic is horrible as always' },
  { time: '18:00', pst: 'Cooking some enoki beef rolls for dinner tonight :P', cst: 'Eating dinner with grandpa and grandma' },
  { time: '20:00', pst: 'Working on math homework and applying to jobs..', cst: 'Organizing the room, getting ready to wind down' },
  { time: '22:00', pst: 'More working, or maybe I will hit the gym?', cst: 'In some deep sleep' }
];

function getZonedDate(timeZone) {
  return new Date(new Date().toLocaleString('en-US', { timeZone }));
}

function getGradientForTime(hour) {
  if (hour >= 9 && hour < 17) return gradients.morning;
  if ((hour >= 17 && hour < 20) || (hour >= 4 && hour < 9)) return gradients.afternoon;
  return gradients.night;
}

function setDynamicBackground() {
  const pstHour = Number(new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles', hour: 'numeric', hour12: false }));
  const cstHour = Number(new Date().toLocaleString('en-US', { timeZone: 'Asia/Singapore', hour: 'numeric', hour12: false }));

  const pstGradient = getGradientForTime(pstHour);
  const cstGradient = getGradientForTime(cstHour);

  document.getElementById('pst-section').style.background = `linear-gradient(180deg, ${pstGradient.join(', ')})`;
  document.getElementById('cst-section').style.background = `linear-gradient(180deg, ${cstGradient.join(', ')})`;
}

function updateClock(clockId, timeZone) {
  const now = getZonedDate(timeZone);
  const seconds = now.getSeconds();
  const minutes = now.getMinutes() + seconds / 60;
  const hours = now.getHours() % 12 + minutes / 60;

  const clock = document.getElementById(clockId);
  const hourHand = clock.querySelector('.hour');
  const minuteHand = clock.querySelector('.minute');
  const secondHand = clock.querySelector('.second');

  hourHand.style.transform = `translate(-50%, -100%) rotate(${hours * 30}deg)`;
  minuteHand.style.transform = `translate(-50%, -100%) rotate(${minutes * 6}deg)`;

  const secondRotation = (seconds * 6) % 360;
  secondHand.style.transition = seconds === 0 ? 'none' : 'transform 0.05s linear';
  secondHand.style.transform = `translate(-50%, -100%) rotate(${secondRotation}deg)`;
}

function updateDate(dateId, timeZone) {
  const now = getZonedDate(timeZone);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById(dateId).textContent = now.toLocaleDateString('en-US', options);
}

function updateDigitalClock(clockId, timeZone) {
  const now = getZonedDate(timeZone);
  const timeString = now.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  document.getElementById(clockId).textContent = timeString;
}

function getCurrentMessage(timeZone) {
  const now = getZonedDate(timeZone);
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  let latestMessage = preEnteredMessages[preEnteredMessages.length - 1];
  for (let i = 0; i < preEnteredMessages.length; i++) {
    const [h, m] = preEnteredMessages[i].time.split(':').map(Number);
    const messageMinutes = h * 60 + m;
    if (currentMinutes >= messageMinutes) {
      latestMessage = preEnteredMessages[i];
    } else {
      break;
    }
  }
  return latestMessage;
}

function createTypewriter(elementId) {
  const element = document.getElementById(elementId);
  const state = {
    targetPhrase: '',
    phrase: '',
    charIndex: 0,
    phase: 'typing' // typing | holdTyped | deleting | holdEmpty
  };

  function tick(delay) {
    setTimeout(loop, delay);
  }

  function loop() {
    if (!state.phrase && state.targetPhrase) {
      state.phrase = state.targetPhrase;
      state.phase = 'typing';
      state.charIndex = 0;
    }

    if (state.phase === 'typing') {
      state.charIndex = Math.min(state.charIndex + 1, state.phrase.length);
      element.textContent = state.phrase.slice(0, state.charIndex);
      if (state.charIndex >= state.phrase.length) {
        state.phase = 'holdTyped';
        tick(1100);
        return;
      }
      tick(65);
      return;
    }

    if (state.phase === 'holdTyped') {
      state.phase = 'deleting';
      tick(45);
      return;
    }

    if (state.phase === 'deleting') {
      state.charIndex = Math.max(state.charIndex - 1, 0);
      element.textContent = state.phrase.slice(0, state.charIndex);
      if (state.charIndex === 0) {
        state.phase = 'holdEmpty';
        tick(260);
        return;
      }
      tick(35);
      return;
    }

    // holdEmpty
    state.phrase = state.targetPhrase || state.phrase;
    state.phase = 'typing';
    tick(80);
  }

  loop();

  return {
    setTarget(nextPhrase) {
      if (!nextPhrase || nextPhrase === state.targetPhrase) return;
      state.targetPhrase = nextPhrase;
      // If phrase changed, transition on next empty cycle.
      if (state.phase === 'holdTyped') state.phase = 'deleting';
    }
  };
}

let pstTypewriter;
let cstTypewriter;

function updateZoneMessages() {
  const pstMessage = getCurrentMessage('America/Los_Angeles').pst;
  const cstMessage = getCurrentMessage('Asia/Singapore').cst;

  pstTypewriter.setTarget(pstMessage);
  cstTypewriter.setTarget(cstMessage);
}

document.addEventListener('DOMContentLoaded', () => {
  pstTypewriter = createTypewriter('pst-text');
  cstTypewriter = createTypewriter('cst-text');

  setDynamicBackground();
  updateZoneMessages();

  updateClock('pst-clock', 'America/Los_Angeles');
  updateClock('cst-clock', 'Asia/Singapore');
  updateDate('pst-date', 'America/Los_Angeles');
  updateDate('cst-date', 'Asia/Singapore');
  updateDigitalClock('pst-digital', 'America/Los_Angeles');
  updateDigitalClock('cst-digital', 'Asia/Singapore');

  setInterval(() => {
    updateClock('pst-clock', 'America/Los_Angeles');
    updateClock('cst-clock', 'Asia/Singapore');
    updateDigitalClock('pst-digital', 'America/Los_Angeles');
    updateDigitalClock('cst-digital', 'Asia/Singapore');
  }, 1000);

  setInterval(() => {
    setDynamicBackground();
    updateDate('pst-date', 'America/Los_Angeles');
    updateDate('cst-date', 'Asia/Singapore');
    updateZoneMessages();
  }, 60000);
});

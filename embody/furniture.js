(function () {
  const body = document.body;
  const panels = Array.from(document.querySelectorAll(".panel"));
  const modeButtons = Array.from(document.querySelectorAll(".mode-toggle"));
  const printButton = document.querySelector(".print-button");
  const progressItems = new Map(
    Array.from(document.querySelectorAll(".progress-strip__item")).map((item) => [
      item.dataset.piece,
      item,
    ])
  );

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const state = new Map();

  const setMode = (mode) => {
    body.dataset.mode = mode;
    modeButtons.forEach((btn) => {
      const active = btn.dataset.mode === mode;
      btn.classList.toggle("mode-toggle--active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
  };

  const pulseEmotion = (container) => {
    const emotion = container.querySelector(".stepper__emotion");
    if (!emotion) {
      return;
    }
    emotion.classList.remove("is-pulse");
    // force reflow
    void emotion.offsetWidth;
    emotion.classList.add("is-pulse");
  };

  const setStep = (panel, stepIndex) => {
    const data = state.get(panel);
    const steps = data.steps;
    const clamped = clamp(stepIndex, 0, steps.length - 1);
    data.current = clamped;

    const stepper = panel.querySelector(".stepper");
    const instructionEl = stepper.querySelector(".stepper__instruction");
    const emotionEl = stepper.querySelector(".stepper__emotion");
    const numberEl = stepper.querySelector(".stepper__number");
    const countEl = stepper.querySelector(".stepper__count");
    const prevButton = stepper.querySelector('[data-action="prev"]');
    const nextButton = stepper.querySelector('[data-action="next"]');

    const step = steps[clamped];
    instructionEl.textContent = step.instruction;
    emotionEl.textContent = step.emotion;
    numberEl.textContent = String(clamped + 1);
    countEl.textContent = `/ ${steps.length}`;

    prevButton.disabled = clamped === 0;
    nextButton.disabled = clamped === steps.length - 1;

    const parts = panel.querySelectorAll(".diagram__part");
    parts.forEach((part) => {
      const partStep = Number(part.dataset.step || "0");
      const isVisible = partStep <= clamped + 1;
      part.classList.toggle("is-visible", isVisible);
      part.classList.toggle("is-current", partStep === clamped + 1);
    });

    const diagram = panel.querySelector(".diagram");
    diagram.classList.toggle("is-complete", clamped + 1 === steps.length);

    if (clamped + 1 === steps.length) {
      const progressItem = progressItems.get(panel.dataset.piece);
      progressItem?.classList.add("is-complete");
    }

    pulseEmotion(stepper);
  };

  const handleStepControl = (event) => {
    const button = event.currentTarget;
    const panel = button.closest(".panel");
    const data = state.get(panel);
    if (!data) {
      return;
    }
    const direction = button.dataset.action === "next" ? 1 : -1;
    setStep(panel, data.current + direction);
  };

  panels.forEach((panel, index) => {
    const stepItems = Array.from(panel.querySelectorAll(".step-data li")).map((li) => ({
      instruction: li.dataset.instruction || "",
      emotion: li.dataset.emotion || "",
    }));

    const pieceState = {
      steps: stepItems,
      current: 0,
    };
    state.set(panel, pieceState);

    const controls = panel.querySelectorAll(".stepper__control");
    controls.forEach((control) => control.addEventListener("click", handleStepControl));

    // allow keyboard arrow navigation
    panel.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setStep(panel, pieceState.current + 1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setStep(panel, pieceState.current - 1);
      }
    });

    setStep(panel, 0);

    // initial active progress item
    if (index === 0) {
      const progressItem = progressItems.get(panel.dataset.piece);
      progressItem?.classList.add("is-active");
    }
  });

  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("mode-toggle--active")) {
        return;
      }
      setMode(button.dataset.mode);
    });
  });

  printButton?.addEventListener("click", () => window.print());

  progressItems.forEach((item, piece) => {
    item.addEventListener("click", () => {
      const panel = panels.find((p) => p.dataset.piece === piece);
      if (!panel) {
        return;
      }
      panel.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        const panel = entry.target;
        const piece = panel.dataset.piece;
        progressItems.forEach((item) => item.classList.remove("is-active"));
        progressItems.get(piece)?.classList.add("is-active");
      });
    },
    {
      root: document.querySelector(".panels"),
      threshold: 0.6,
    }
  );

  panels.forEach((panel) => observer.observe(panel));

  const panelsContainer = document.querySelector(".panels");
  panelsContainer?.addEventListener("scroll", () => {
    document.documentElement.style.setProperty("--scroll-progress", panelsContainer.scrollLeft);
  }, { passive: true });
})();

const MAX_PERSONS = 10;

function createIcon(name) {
  const span = document.createElement("span");
  span.className = "a-icon";
  span.setAttribute("aria-hidden", "true");
  span.setAttribute("data-icon", name);
  span.style.setProperty(
    "--icon-url",
    "url('/icons/material-symbols-rounded/" + name + ".svg')",
  );
  return span;
}

export function renderPersonLimitControl(ctx, saveState) {
  const { container, i18n, state } = ctx;
  const wrapper = container.querySelector("[data-taxation-person-limit]");
  if (!wrapper) return;

  wrapper.innerHTML = "";

  const label = document.createElement("span");
  label.className = "o-taxation-calculator__person-limit-label";
  label.textContent = i18n.personLimit;

  const controls = document.createElement("div");
  controls.className = "o-taxation-calculator__person-limit-controls";

  const persons = document.createElement("span");
  persons.className = "o-taxation-calculator__person-limit-icons";

  const decreaseBtn = document.createElement("button");
  decreaseBtn.type = "button";
  decreaseBtn.className = "o-taxation-calculator__btn";
  decreaseBtn.appendChild(createIcon("remove"));
  decreaseBtn.title = i18n.decrease;
  decreaseBtn.setAttribute("aria-label", i18n.decrease);

  const value = document.createElement("span");
  value.className = "o-taxation-calculator__person-limit-value";
  value.textContent = state.personLimit;

  const increaseBtn = document.createElement("button");
  increaseBtn.type = "button";
  increaseBtn.className = "o-taxation-calculator__btn";
  increaseBtn.appendChild(createIcon("add"));
  increaseBtn.title = i18n.increase;
  increaseBtn.setAttribute("aria-label", i18n.increase);

  function updateButtons() {
    decreaseBtn.disabled = state.personLimit <= 1;
    increaseBtn.disabled = state.personLimit >= MAX_PERSONS;
    value.textContent = state.personLimit;
    persons.innerHTML = "";
    for (var i = 0; i < state.personLimit; i++) {
      var pIcon = createIcon("person");
      pIcon.classList.add("o-taxation-calculator__person");
      persons.appendChild(pIcon);
    }
  }

  decreaseBtn.addEventListener("click", function () {
    if (state.personLimit <= 1) return;
    state.personLimit -= 1;
    if (typeof ctx.onPersonLimitChange === "function") {
      ctx.onPersonLimitChange();
    }
    saveState(state);
    updateButtons();
  });

  increaseBtn.addEventListener("click", function () {
    if (state.personLimit >= MAX_PERSONS) return;
    state.personLimit += 1;
    if (typeof ctx.onPersonLimitChange === "function") {
      ctx.onPersonLimitChange();
    }
    saveState(state);
    updateButtons();
  });

  controls.appendChild(decreaseBtn);
  controls.appendChild(value);
  controls.appendChild(increaseBtn);

  wrapper.appendChild(label);
  wrapper.appendChild(persons);
  wrapper.appendChild(controls);
  updateButtons();
}

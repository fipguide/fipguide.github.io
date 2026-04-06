import {
  buildOptimizationPlan as buildPlanningPlan,
  clearOptimization as clearPlanning,
  optimizePlan as optimizePlanning,
  renderOptimization as renderPlanning,
} from "./taxationPlanning.js";
import { initStickySidebar as initStickySidebarUI } from "./taxationUi.js";
import { renderPersonLimitControl as renderPersonLimitControlInput } from "./taxationInputs.js";

const STORAGE_KEY = "fipguide-taxation";
const MAX_PERSONS = 10;

function init() {
  const container = document.querySelector("[data-taxation-calculator]");
  if (!container) return;

  const config = JSON.parse(container.dataset.taxationConfig);
  const i18n = getI18n(container);
  const state = loadState(config);

  const operatorsWrapper = container.querySelector("[data-taxation-operators]");
  const nationalWrapper = container.querySelector("[data-taxation-national]");
  const resetBtns = container.querySelectorAll("[data-taxation-reset]");

  const ctx = { container, config, i18n, state };
  const mobileMq = window.matchMedia("(max-width: 992px)");

  function scrollCalculatorToTopOnMobile() {
    if (!mobileMq.matches) return;
    const MOBILE_HEADER_OFFSET = 88;
    const targetTop = window.scrollY + container.getBoundingClientRect().top;
    window.scrollTo({
      top: Math.max(0, targetTop - MOBILE_HEADER_OFFSET),
      behavior: "smooth",
    });
  }

  ctx.scrollCalculatorToTopOnMobile = scrollCalculatorToTopOnMobile;

  function rerenderAll() {
    renderPersonLimitControlInput(ctx, saveState);
    operatorsWrapper.innerHTML = "";
    nationalWrapper.innerHTML = "";
    const otherWrapper = container.querySelector("[data-taxation-other]");
    if (otherWrapper) {
      otherWrapper.innerHTML = "";
    }
    renderOperators(ctx, operatorsWrapper);
    renderNational(ctx, nationalWrapper);
    renderOther(ctx);
    updateSummary(container, config, i18n, state);
    runOptimization();
  }

  function runOptimization() {
    const plan = buildPlanningPlan(config, state, i18n);
    renderPlanning(container, plan, i18n, {
      onOptimize() {
        optimizePlanning(config, state, i18n);
        saveState(state);
        runOptimization();
      },
      onMove(itemId, monthIndex) {
        if (monthIndex > 0) {
          state.planningAssignments[itemId] = monthIndex;
          state.planningManualAssignments[itemId] = true;
          state.planningMonthCount = Math.max(
            parseInt(state.planningMonthCount || 0, 10) || 0,
            monthIndex,
          );
        } else {
          delete state.planningAssignments[itemId];
          delete state.planningManualAssignments[itemId];
        }
        saveState(state);
        runOptimization();
      },
      onUnlock(itemId) {
        delete state.planningManualAssignments[itemId];
        delete state.planningAssignments[itemId];
        saveState(state);
        runOptimization();
      },
      onAddMonth() {
        var current = parseInt(state.planningMonthCount || 0, 10) || 0;
        state.planningMonthCount = current + 1;
        saveState(state);
        runOptimization();
      },
      onCloseMonth(monthIndex) {
        for (const itemId in state.planningAssignments) {
          var assignedMonth = parseInt(state.planningAssignments[itemId], 10);
          if (assignedMonth === monthIndex) {
            delete state.planningAssignments[itemId];
            delete state.planningManualAssignments[itemId];
          } else if (assignedMonth > monthIndex) {
            state.planningAssignments[itemId] = assignedMonth - 1;
          }
        }

        var current = parseInt(state.planningMonthCount || 0, 10) || 0;
        state.planningMonthCount = Math.max(current - 1, 0);

        saveState(state);
        runOptimization();
      },
    });
    updateSummary(container, config, i18n, state);
  }

  function onPersonLimitChange() {
    for (const op of config.operators) {
      const opState = state.operators[op.slug];
      if (!hasActiveState(opState)) continue;
      const row = operatorsWrapper.querySelector(
        '[data-taxation-row="' + op.slug + '"]',
      );
      if (!row) continue;
      updateRowState(
        row,
        opState,
        op.firstClass || 0,
        op.secondClass,
        state.personLimit,
        true,
        op.singlePersonOnly || false,
      );
      updateRowMultipliers(
        row,
        op.singlePersonOnly ? 1 : state.personLimit,
        i18n,
      );
      updateRowWarning(
        row,
        op.singleClassOnly || false,
        op.singlePersonOnly || false,
        state.personLimit,
        i18n,
      );
    }

    for (const nat of config.national) {
      const natState = state.national[nat.key];
      if (!hasActiveState(natState)) continue;
      const row = nationalWrapper.querySelector(
        '[data-taxation-row="' + nat.key + '"]',
      );
      if (!row) continue;
      updateRowState(
        row,
        natState,
        nat.firstClass,
        nat.secondClass,
        state.personLimit,
        false,
        false,
      );
    }

    runPlanning(ctx);
    updateSummary(container, config, i18n, state);
  }

  ctx.onPersonLimitChange = onPersonLimitChange;

  ctx.rerenderAll = rerenderAll;
  ctx.runOptimization = runOptimization;

  rerenderAll();

  if (resetBtns.length > 0 && operatorsWrapper && nationalWrapper) {
    const resetCalculator = function () {
      state.operators = {};
      state.national = {};
      state.other = 0;
      state.personLimit = 1;
      state.planningAssignments = {};
      state.planningManualAssignments = {};
      state.planningMonthCount = 0;

      clearPlanning(container, state);
      rerenderAll();
      saveState(state);
    };

    for (const resetBtn of resetBtns) {
      resetBtn.addEventListener("click", resetCalculator);
    }
  }

  initStickySidebarUI(container);
}

function getI18n(container) {
  return {
    firstClass: container.dataset.i18nFirstClass,
    secondClass: container.dataset.i18nSecondClass,
    noFirstClass: container.dataset.i18nNoFirstClass,
    addOperator: container.dataset.i18nAddOperator,
    addNational: container.dataset.i18nAddNational,
    remove: container.dataset.i18nRemove,
    increase: container.dataset.i18nIncrease,
    decrease: container.dataset.i18nDecrease,
    categoryOther: container.dataset.i18nCategoryOther,
    otherPlaceholder: container.dataset.i18nOtherPlaceholder,
    highlightImportant: container.dataset.i18nHighlightImportant,
    planning: container.dataset.i18nPlanning,
    planningDescription: container.dataset.i18nPlanningDescription,
    planningFocus: container.dataset.i18nPlanningFocus,
    optimize: container.dataset.i18nOptimize,
    addMonth: container.dataset.i18nAddMonth,
    optimizationMonth: container.dataset.i18nOptimizationMonth,
    personLimit: container.dataset.i18nPersonLimit,
    unassigned: container.dataset.i18nUnassigned,
    person: container.dataset.i18nPerson,
    personOne: container.dataset.i18nPersonOne,
    personOther: container.dataset.i18nPersonOther,
    unlock: container.dataset.i18nUnlock,
    personLimitNotSupportedWarning:
      container.dataset.i18nPersonLimitNotSupportedWarning,
    summaryUnderLimit: container.dataset.i18nSummaryUnderLimit,
    summaryOverLimitUnassigned:
      container.dataset.i18nSummaryOverLimitUnassigned,
    summaryAllAssignedOk: container.dataset.i18nSummaryAllAssignedOk,
    summaryAllAssignedOverMonth:
      container.dataset.i18nSummaryAllAssignedOverMonth,
  };
}

function getPersonLabelByCount(i18n, count) {
  const lang = document.documentElement.lang || "en";
  const category = new Intl.PluralRules(lang).select(count);
  if (category === "one") {
    return i18n.personOne || i18n.person;
  }
  return i18n.personOther || i18n.person;
}

function loadState(config) {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.year === config.year) {
        sanitizeState(parsed);
        return parsed;
      }
    }
  } catch {
    /* ignore */
  }
  return {
    year: config.year,
    operators: {},
    national: {},
    other: 0,
    personLimit: 1,
    planningAssignments: {},
    planningManualAssignments: {},
    planningMonthCount: 0,
  };
}

function saveState(state) {
  try {
    var hasOperatorEntries = Object.keys(state.operators || {}).some(
      function (key) {
        var op = state.operators[key];
        return op && (op.first > 0 || op.second > 0);
      },
    );
    var hasNationalEntries = Object.keys(state.national || {}).some(
      function (key) {
        var nat = state.national[key];
        return nat && (nat.first > 0 || nat.second > 0);
      },
    );
    var hasData = hasOperatorEntries || hasNationalEntries || state.other > 0;

    if (!hasData) {
      localStorage.removeItem(STORAGE_KEY);
      return;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignore */
  }
}

function clampCounter(value) {
  return Math.max(Number(value) || 0, 0);
}

function sanitizeState(state) {
  state.personLimit = Math.min(
    Math.max(Number(state.personLimit) || 1, 1),
    MAX_PERSONS,
  );
  if (
    !state.planningAssignments ||
    typeof state.planningAssignments !== "object"
  ) {
    state.planningAssignments = {};
  }
  if (
    !state.planningManualAssignments ||
    typeof state.planningManualAssignments !== "object"
  ) {
    state.planningManualAssignments = {};
  }
  if (!Number.isFinite(parseInt(state.planningMonthCount, 10))) {
    state.planningMonthCount = 0;
  }

  if (
    state.optimizationLocks &&
    typeof state.optimizationLocks === "object" &&
    Object.keys(state.planningAssignments).length === 0
  ) {
    state.planningAssignments = state.optimizationLocks;
    for (const key in state.optimizationLocks) {
      state.planningManualAssignments[key] = true;
    }
  }
  if (state.operators && typeof state.operators === "object") {
    for (const key in state.operators) {
      const op = state.operators[key];
      if (!op || typeof op !== "object") continue;
      op.first = clampCounter(op.first);
      op.second = clampCounter(op.second);
    }
  }

  if (state.national && typeof state.national === "object") {
    for (const key in state.national) {
      const nat = state.national[key];
      if (!nat || typeof nat !== "object") continue;
      nat.first = clampCounter(nat.first);
      nat.second = clampCounter(nat.second);
    }
  }
}

function getOperatorState(state, slug) {
  if (!state.operators[slug]) {
    state.operators[slug] = { first: 0, second: 0 };
  }
  return state.operators[slug];
}

function getNationalState(state, key) {
  if (!state.national[key]) {
    state.national[key] = { first: 0, second: 0 };
  }
  return state.national[key];
}

function formatCurrency(value) {
  return (
    value
      .toFixed(2)
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "\u00A0\u20AC"
  );
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function calculateTotal(config, state) {
  let total = 0;

  for (const op of config.operators) {
    const opState = state.operators[op.slug];
    if (!opState) continue;
    const personMultiplier = op.singlePersonOnly ? 1 : state.personLimit;
    if (opState.first > 0 && op.firstClass) {
      total += op.firstClass * opState.first * personMultiplier;
    }
    if (opState.second > 0) {
      total += op.secondClass * opState.second * personMultiplier;
    }
  }

  for (const nat of config.national) {
    const natState = state.national[nat.key];
    if (!natState) continue;
    if (natState.first > 0) {
      total += nat.firstClass * natState.first;
    }
    if (natState.second > 0) {
      total += nat.secondClass * natState.second;
    }
  }

  if (state.other > 0) {
    total += state.other;
  }

  return total;
}

function calculateRowTotal(
  stateObj,
  firstClassValue,
  secondClassValue,
  personLimit,
  applyPersonLimit,
) {
  var multiplier = applyPersonLimit ? personLimit : 1;
  let total = 0;
  if (stateObj.first > 0 && firstClassValue) {
    total += firstClassValue * stateObj.first * multiplier;
  }
  if (stateObj.second > 0) {
    total += secondClassValue * stateObj.second * multiplier;
  }
  return total;
}

function canIncreaseByClassLimit(stateObj, maxFields, field) {
  if (!maxFields) return true;
  if (field === "first") {
    if (stateObj.second > 0) return false;
    return stateObj.first < maxFields;
  }
  if (stateObj.first > 0) return false;
  return stateObj.second < maxFields;
}

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

function createHighlight(type, rooflineLabel, iconName, content) {
  const wrapper = document.createElement("div");
  wrapper.className = "m-text-highlight m-text-highlight--" + type;

  const roofline = document.createElement("div");
  roofline.className = "m-text-highlight__roofline";
  roofline.appendChild(createIcon(iconName));
  roofline.appendChild(document.createTextNode(" " + rooflineLabel));
  wrapper.appendChild(roofline);

  const body = document.createElement("div");
  body.textContent = content;
  wrapper.appendChild(body);

  return wrapper;
}

function createOperatorLogo(logoUrl) {
  const img = document.createElement("img");
  img.src = logoUrl;
  img.alt = "";
  img.className = "a-operator-logo";
  img.setAttribute("data-decorative", "true");
  return img;
}

function updateRowState(
  row,
  stateObj,
  firstClassValue,
  secondClassValue,
  personLimit,
  applyPersonLimit,
  forceSinglePerson,
) {
  var effectivePersonLimit = forceSinglePerson ? 1 : personLimit;
  const rowTotal = calculateRowTotal(
    stateObj,
    firstClassValue,
    secondClassValue,
    effectivePersonLimit,
    applyPersonLimit,
  );

  const rowTotalEl = row.querySelector("[data-taxation-row-total]");
  if (rowTotalEl) {
    rowTotalEl.textContent = formatCurrency(rowTotal);
    rowTotalEl.classList.toggle(
      "o-taxation-calculator__row-total--active",
      rowTotal > 0,
    );
  }
}

function createRow(options) {
  const {
    title,
    slug,
    logoUrl,
    firstClassValue,
    secondClassValue,
    noFirstClass,
    singleClassOnly,
    maxFields,
    personLimit,
    showMultiplier,
    applyPersonLimit,
    singlePersonOnly,
    stateObj,
    i18n,
    onUpdate,
    onRemove,
  } = options;

  const row = document.createElement("div");
  row.className = "o-taxation-calculator__row";
  row.dataset.taxationRow = slug;

  const header = document.createElement("div");
  header.className = "o-taxation-calculator__row-header";

  const titleWrap = document.createElement("div");
  titleWrap.className = "o-taxation-calculator__row-title";

  if (logoUrl) {
    titleWrap.appendChild(createOperatorLogo(logoUrl));
  }

  const titleText = document.createElement("span");
  titleText.textContent = title;
  titleWrap.appendChild(titleText);

  header.appendChild(titleWrap);

  if (onRemove) {
    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "o-taxation-calculator__remove-btn";
    removeBtn.title = i18n.remove;
    removeBtn.setAttribute("aria-label", i18n.remove);
    removeBtn.appendChild(createIcon("close"));
    removeBtn.addEventListener("click", function () {
      onRemove();
    });
    header.appendChild(removeBtn);
  }

  row.appendChild(header);

  const body = document.createElement("div");
  body.className = "o-taxation-calculator__row-body";

  var leftCol = document.createElement("div");
  leftCol.className =
    "o-taxation-calculator__row-col o-taxation-calculator__row-col--left";

  var firstLineCtrl;
  var secondLineCtrl;

  function refreshClassLocks() {
    if (firstLineCtrl && typeof firstLineCtrl.refresh === "function") {
      firstLineCtrl.refresh();
    }
    if (secondLineCtrl && typeof secondLineCtrl.refresh === "function") {
      secondLineCtrl.refresh();
    }
  }

  firstLineCtrl = createClassLine({
    label: i18n.firstClass,
    price: firstClassValue,
    value: stateObj.first,
    disabled: noFirstClass,
    disabledHint: i18n.noFirstClass,
    i18n,
    personLimit,
    effectivePersonLimit: singlePersonOnly ? 1 : personLimit,
    showMultiplier,
    canIncrease() {
      return canIncreaseByClassLimit(stateObj, maxFields, "first");
    },
    onChange(val) {
      stateObj.first = val;
      refreshClassLocks();
      onUpdate();
    },
  });
  leftCol.appendChild(firstLineCtrl.el);

  secondLineCtrl = createClassLine({
    label: i18n.secondClass,
    price: secondClassValue,
    value: stateObj.second,
    disabled: false,
    i18n,
    personLimit,
    effectivePersonLimit: singlePersonOnly ? 1 : personLimit,
    showMultiplier,
    canIncrease() {
      return canIncreaseByClassLimit(stateObj, maxFields, "second");
    },
    onChange(val) {
      stateObj.second = val;
      refreshClassLocks();
      onUpdate();
    },
  });
  leftCol.appendChild(secondLineCtrl.el);
  refreshClassLocks();

  body.appendChild(leftCol);

  var rightCol = document.createElement("div");
  rightCol.className =
    "o-taxation-calculator__row-col o-taxation-calculator__row-col--right";

  var rowTotalEl = document.createElement("span");
  rowTotalEl.className = "o-taxation-calculator__row-total";
  rowTotalEl.setAttribute("data-taxation-row-total", "");
  var initialTotal = calculateRowTotal(
    stateObj,
    firstClassValue,
    secondClassValue,
    singlePersonOnly ? 1 : personLimit,
    applyPersonLimit,
  );
  rowTotalEl.textContent = formatCurrency(initialTotal);
  if (initialTotal > 0) {
    rowTotalEl.classList.add("o-taxation-calculator__row-total--active");
  }
  rightCol.appendChild(rowTotalEl);

  body.appendChild(rightCol);
  row.appendChild(body);

  var warningEl = document.createElement("div");
  warningEl.className = "o-taxation-calculator__warning-wrapper";
  row.appendChild(warningEl);

  return row;
}

function createClassLine(options) {
  const {
    label,
    price,
    value,
    disabled,
    disabledHint,
    i18n,
    personLimit,
    effectivePersonLimit,
    showMultiplier,
    onChange,
    canIncrease,
  } = options;

  const line = document.createElement("div");
  line.className = "o-taxation-calculator__class-line";

  const labelEl = document.createElement("span");
  labelEl.className = "o-taxation-calculator__class-label";
  labelEl.textContent = label;
  line.appendChild(labelEl);

  if (!disabled) {
    const priceEl = document.createElement("span");
    priceEl.className = "o-taxation-calculator__class-value";
    priceEl.textContent = formatCurrency(price);
    line.appendChild(priceEl);
  }

  if (disabled) {
    const priceSpacer = document.createElement("span");
    priceSpacer.className = "o-taxation-calculator__class-value";
    line.appendChild(priceSpacer);

    const hint = document.createElement("span");
    hint.className =
      "o-taxation-calculator__field-value o-taxation-calculator__field-value--text";
    hint.textContent = disabledHint;
    line.appendChild(hint);

    return {
      el: line,
      refresh() {},
    };
  }

  const controlsWrap = document.createElement("div");
  controlsWrap.className = "o-taxation-calculator__field-controls";

  const multiplySymbol = document.createElement("span");
  multiplySymbol.className = "o-taxation-calculator__multiply-symbol";
  multiplySymbol.textContent = "x";

  const decreaseBtn = document.createElement("button");
  decreaseBtn.type = "button";
  decreaseBtn.className =
    "o-taxation-calculator__btn o-taxation-calculator__btn--decrease";
  decreaseBtn.appendChild(createIcon("remove"));
  decreaseBtn.title = i18n.decrease;
  decreaseBtn.setAttribute("aria-label", i18n.decrease);

  const display = document.createElement("span");
  display.className = "o-taxation-calculator__field-value";
  display.textContent = value;

  const increaseBtn = document.createElement("button");
  increaseBtn.type = "button";
  increaseBtn.className =
    "o-taxation-calculator__btn o-taxation-calculator__btn--increase";
  increaseBtn.appendChild(createIcon("add"));
  increaseBtn.title = i18n.increase;
  increaseBtn.setAttribute("aria-label", i18n.increase);

  function updateIncreaseState() {
    if (typeof canIncrease === "function") {
      increaseBtn.disabled = !canIncrease();
      return;
    }
    increaseBtn.disabled = false;
  }

  decreaseBtn.disabled = value <= 0;
  updateIncreaseState();

  decreaseBtn.addEventListener("click", function () {
    let current = parseInt(display.textContent, 10);
    if (current > 0) {
      current--;
      display.textContent = current;
      decreaseBtn.disabled = current <= 0;
      onChange(current);
      updateIncreaseState();
    }
  });

  increaseBtn.addEventListener("click", function () {
    let current = parseInt(display.textContent, 10);
    if (increaseBtn.disabled) return;
    current++;
    display.textContent = current;
    decreaseBtn.disabled = current <= 0;
    onChange(current);
    updateIncreaseState();
  });

  controlsWrap.appendChild(decreaseBtn);
  controlsWrap.appendChild(display);
  controlsWrap.appendChild(increaseBtn);
  controlsWrap.insertBefore(multiplySymbol, decreaseBtn);
  line.appendChild(controlsWrap);

  if (showMultiplier) {
    const multiplier = document.createElement("span");
    multiplier.className = "o-taxation-calculator__multiplier";
    multiplier.textContent =
      "x " +
      effectivePersonLimit +
      " " +
      getPersonLabelByCount(i18n, effectivePersonLimit);
    line.appendChild(multiplier);
  }

  return {
    el: line,
    refresh: updateIncreaseState,
  };
}

function hasActiveState(stateObj) {
  return stateObj && (stateObj.first > 0 || stateObj.second > 0);
}

function createSearchSelect(options) {
  const { placeholder, items, onSelect } = options;

  const wrapper = document.createElement("div");
  wrapper.className = "o-taxation-calculator__search-select";

  const input = document.createElement("input");
  input.type = "text";
  input.className = "o-taxation-calculator__search-input";
  input.placeholder = placeholder;
  input.setAttribute("role", "combobox");
  input.setAttribute("aria-expanded", "false");
  input.setAttribute("aria-autocomplete", "list");
  input.setAttribute("autocomplete", "off");

  const list = document.createElement("ul");
  list.className = "o-taxation-calculator__search-list";
  list.setAttribute("role", "listbox");
  list.setAttribute("aria-hidden", "true");
  list.inert = true;

  const activeKeys = new Set();

  function buildItems() {
    list.innerHTML = "";
    const query = normalizeText(input.value.trim());
    let visibleCount = 0;

    for (const item of items) {
      if (activeKeys.has(item.key)) continue;
      if (query && !normalizeText(item.label).includes(query)) continue;

      const li = document.createElement("li");
      li.className = "o-taxation-calculator__search-item";
      li.setAttribute("role", "option");

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "o-taxation-calculator__search-item-btn";
      btn.setAttribute("aria-label", item.label);

      const addIcon = createIcon("add_circle");
      addIcon.classList.add("o-taxation-calculator__search-add-icon");
      btn.appendChild(addIcon);

      if (item.logoUrl) {
        btn.appendChild(createOperatorLogo(item.logoUrl));
      }

      const labelSpan = document.createElement("span");
      labelSpan.textContent = item.label;
      btn.appendChild(labelSpan);

      btn.addEventListener("click", function () {
        activeKeys.add(item.key);
        input.value = "";
        closeList();
        onSelect(item);
      });

      li.appendChild(btn);
      list.appendChild(li);
      visibleCount++;
    }

    return visibleCount;
  }

  function ensureDropdownSpace() {
    const wrapperRect = wrapper.getBoundingClientRect();
    const header = document.getElementById("header");
    const headerHeight = header ? header.getBoundingClientRect().height : 60;
    const extraTopGap = 12;
    const targetTop =
      window.scrollY + wrapperRect.top - (headerHeight + extraTopGap);
    const currentTop = window.scrollY;
    if (Math.abs(targetTop - currentTop) > 2) {
      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: "smooth",
      });
    }
  }

  function openList() {
    const count = buildItems();
    if (count > 0) {
      list.inert = false;
      list.setAttribute("aria-hidden", "false");
      input.setAttribute("aria-expanded", "true");
      wrapper.classList.add("o-taxation-calculator__search-select--open");
      requestAnimationFrame(ensureDropdownSpace);
    }
  }

  function closeList() {
    if (list.contains(document.activeElement)) {
      input.focus({ preventScroll: true });
    }
    list.inert = true;
    list.setAttribute("aria-hidden", "true");
    input.setAttribute("aria-expanded", "false");
    wrapper.classList.remove("o-taxation-calculator__search-select--open");
  }

  input.addEventListener("focus", function () {
    openList();
  });

  input.addEventListener("input", function () {
    openList();
  });

  document.addEventListener("click", function (event) {
    if (!wrapper.contains(event.target)) {
      closeList();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (
      event.key === "Escape" &&
      input.getAttribute("aria-expanded") === "true"
    ) {
      closeList();
      input.blur();
    }
  });

  wrapper.appendChild(input);
  wrapper.appendChild(list);

  return {
    el: wrapper,
    markActive(key) {
      activeKeys.add(key);
    },
    markInactive(key) {
      activeKeys.delete(key);
    },
  };
}

function addOperatorCard(ctx, wrapper, searchSelect, op) {
  const { container, config, i18n, state } = ctx;
  const opState = getOperatorState(state, op.slug);

  const row = createRow({
    title: op.title,
    slug: op.slug,
    logoUrl: op.logoUrl || null,
    firstClassValue: op.firstClass || 0,
    secondClassValue: op.secondClass,
    noFirstClass: op.noFirstClass || false,
    singleClassOnly: op.singleClassOnly || false,
    singlePersonOnly: op.singlePersonOnly || false,
    maxFields: op.maxFields,
    personLimit: state.personLimit,
    showMultiplier: true,
    applyPersonLimit: true,
    stateObj: opState,
    i18n,
    onUpdate() {
      updateRowState(
        row,
        opState,
        op.firstClass || 0,
        op.secondClass,
        state.personLimit,
        true,
        op.singlePersonOnly || false,
      );
      updateRowWarning(
        row,
        op.singleClassOnly || false,
        op.singlePersonOnly || false,
        state.personLimit,
        i18n,
      );
      updateSummary(container, config, i18n, state);
      saveState(state);
      runPlanning(ctx);
    },
    onRemove() {
      row.remove();
      delete state.operators[op.slug];
      searchSelect.markInactive(op.slug);
      saveState(state);
      updateSummary(container, config, i18n, state);
      runPlanning(ctx);
    },
  });

  updateRowWarning(
    row,
    op.singleClassOnly || false,
    op.singlePersonOnly || false,
    state.personLimit,
    i18n,
  );
  if (searchSelect.el.nextSibling) {
    wrapper.insertBefore(row, searchSelect.el.nextSibling);
  } else {
    wrapper.appendChild(row);
  }
}

function addNationalCard(ctx, wrapper, searchSelect, nat) {
  const { container, config, i18n, state } = ctx;
  const natState = getNationalState(state, nat.key);

  const row = createRow({
    title: nat.title,
    slug: nat.key,
    firstClassValue: nat.firstClass,
    secondClassValue: nat.secondClass,
    noFirstClass: false,
    singleClassOnly: false,
    personLimit: state.personLimit,
    showMultiplier: false,
    applyPersonLimit: false,
    stateObj: natState,
    i18n,
    onUpdate() {
      updateRowState(
        row,
        natState,
        nat.firstClass,
        nat.secondClass,
        state.personLimit,
        false,
        false,
      );
      updateSummary(container, config, i18n, state);
      saveState(state);
      runPlanning(ctx);
    },
    onRemove() {
      row.remove();
      delete state.national[nat.key];
      searchSelect.markInactive(nat.key);
      saveState(state);
      updateSummary(container, config, i18n, state);
      runPlanning(ctx);
    },
  });

  if (searchSelect.el.nextSibling) {
    wrapper.insertBefore(row, searchSelect.el.nextSibling);
  } else {
    wrapper.appendChild(row);
  }
}

function renderOperators(ctx, wrapper) {
  if (!wrapper) return;

  const { config, i18n, state } = ctx;

  const sorted = [...config.operators].sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });

  const selectItems = sorted.map(function (op) {
    return {
      key: op.slug,
      label: op.detailedTitle || op.title,
      logoUrl: op.logoUrl || null,
      data: op,
    };
  });

  const searchSelect = createSearchSelect({
    placeholder: i18n.addOperator,
    items: selectItems,
    onSelect(item) {
      addOperatorCard(ctx, wrapper, searchSelect, item.data);
      ctx.scrollCalculatorToTopOnMobile();
    },
  });

  wrapper.appendChild(searchSelect.el);

  for (const op of sorted) {
    const opState = state.operators[op.slug];
    if (hasActiveState(opState)) {
      searchSelect.markActive(op.slug);
      addOperatorCard(ctx, wrapper, searchSelect, op);
    }
  }
}

function renderNational(ctx, wrapper) {
  if (!wrapper) return;

  const { config, i18n, state } = ctx;

  const selectItems = config.national.map(function (nat) {
    return {
      key: nat.key,
      label: nat.title,
      data: nat,
    };
  });

  const searchSelect = createSearchSelect({
    placeholder: i18n.addNational,
    items: selectItems,
    onSelect(item) {
      addNationalCard(ctx, wrapper, searchSelect, item.data);
      ctx.scrollCalculatorToTopOnMobile();
    },
  });

  wrapper.appendChild(searchSelect.el);

  for (const nat of config.national) {
    const natState = state.national[nat.key];
    if (hasActiveState(natState)) {
      searchSelect.markActive(nat.key);
      addNationalCard(ctx, wrapper, searchSelect, nat);
    }
  }
}

function renderOther(ctx) {
  const { container, config, i18n, state } = ctx;
  const wrapper = container.querySelector("[data-taxation-other]");
  if (!wrapper) return;

  const input = document.createElement("input");
  input.type = "text";
  input.inputMode = "decimal";
  input.className = "o-taxation-calculator__other-input";
  input.placeholder = i18n.otherPlaceholder;
  input.value = state.other > 0 ? state.other.toFixed(2).replace(".", ",") : "";

  input.addEventListener("input", function () {
    var cleaned = input.value.replace(/[^0-9,]/g, "");
    var parts = cleaned.split(",");
    if (parts.length > 2) {
      cleaned = parts[0] + "," + parts.slice(1).join("");
    }
    if (cleaned.indexOf(",") !== -1) {
      var decimal = cleaned.split(",");
      cleaned = decimal[0] + "," + decimal[1].slice(0, 2);
    }
    if (cleaned !== input.value) {
      input.value = cleaned;
    }
    var normalized = cleaned.replace(",", ".");
    var parsed = parseFloat(normalized);
    state.other = isNaN(parsed) ? 0 : parsed;
    updateSummary(container, config, i18n, state);
    saveState(state);
    runPlanning(ctx);
  });

  wrapper.appendChild(input);
}

function updateRowWarning(
  row,
  _singleClassOnly,
  singlePersonOnly,
  personLimit,
  i18n,
) {
  const warningEl = row.querySelector(
    ".o-taxation-calculator__warning-wrapper",
  );

  warningEl.innerHTML = "";

  if (singlePersonOnly && personLimit > 1) {
    warningEl.appendChild(
      createHighlight(
        "important",
        i18n.highlightImportant,
        "campaign",
        i18n.personLimitNotSupportedWarning,
      ),
    );
  }
}

function calculateTotalPersons(config, state) {
  return state.personLimit;
}

function updateSummary(container, config, i18n, state) {
  const total = calculateTotal(config, state);
  const totalPersons = calculateTotalPersons(config, state);
  const threshold = config.threshold;
  const summaryHint = getSummaryHint(config, state, i18n, total, threshold);

  updateSummaryBlock(
    container,
    {
      totalEl: container.querySelector("[data-taxation-total]"),
      personsEl: container.querySelector("[data-taxation-persons-total]"),
      thresholdEl: container.querySelector("[data-taxation-threshold-info]"),
    },
    total,
    totalPersons,
    summaryHint,
  );

  updateThresholdBlock(
    container.querySelector("[data-taxation-mobile-threshold-detail]"),
    summaryHint,
  );

  var mobileTotalEl = container.querySelector("[data-taxation-mobile-total]");
  if (mobileTotalEl) {
    mobileTotalEl.textContent = formatCurrency(total);
  }

  var mobileThresholdIcon = container.querySelector(
    "[data-taxation-mobile-threshold-icon]",
  );
  if (mobileThresholdIcon) {
    mobileThresholdIcon.innerHTML = "";
    if (!summaryHint) {
      mobileThresholdIcon.innerHTML = "";
    } else if (summaryHint.kind === "warning") {
      var warnIcon = createIcon("warning");
      warnIcon.classList.add("o-taxation-calculator__mobile-icon--warning");
      mobileThresholdIcon.appendChild(warnIcon);
    } else {
      var okIcon = createIcon("check_circle");
      okIcon.classList.add("o-taxation-calculator__mobile-icon--success");
      mobileThresholdIcon.appendChild(okIcon);
    }
  }
}

function runPlanning(ctx) {
  if (ctx && typeof ctx.runOptimization === "function") {
    ctx.runOptimization();
  }
}

function updateRowMultipliers(row, effectivePersonLimit, i18n) {
  var multiplierEls = row.querySelectorAll(
    ".o-taxation-calculator__multiplier",
  );
  for (const multiplierEl of multiplierEls) {
    multiplierEl.textContent =
      "x " +
      effectivePersonLimit +
      " " +
      getPersonLabelByCount(i18n, effectivePersonLimit);
  }
}

function updateSummaryBlock(container, els, total, totalPersons, summaryHint) {
  if (!els.totalEl) return;

  els.totalEl.textContent = formatCurrency(total);

  if (els.personsEl) {
    els.personsEl.innerHTML = "";
    for (var i = 0; i < totalPersons; i++) {
      var icon = createIcon("person");
      icon.classList.add("o-taxation-calculator__person");
      els.personsEl.appendChild(icon);
    }
  }

  if (!els.thresholdEl) return;
  els.thresholdEl.innerHTML = "";

  if (!summaryHint) {
    els.thresholdEl.className = "o-taxation-calculator__threshold-info";
    return;
  }

  els.thresholdEl.className =
    "o-taxation-calculator__threshold-info a-tag " +
    (summaryHint.kind === "warning" ? "a-tag--warning" : "a-tag--success");

  els.thresholdEl.appendChild(
    createIcon(summaryHint.kind === "warning" ? "warning" : "check_circle"),
  );

  var textEl = document.createElement("span");
  textEl.className = "o-taxation-calculator__threshold-text";
  textEl.textContent = summaryHint.text;
  els.thresholdEl.appendChild(textEl);
}

function updateThresholdBlock(el, summaryHint) {
  if (!el) return;
  el.innerHTML = "";

  if (!summaryHint) {
    el.className = "o-taxation-calculator__threshold-info";
    return;
  }

  el.className =
    "o-taxation-calculator__threshold-info a-tag " +
    (summaryHint.kind === "warning" ? "a-tag--warning" : "a-tag--success");

  el.appendChild(
    createIcon(summaryHint.kind === "warning" ? "warning" : "check_circle"),
  );

  var textEl = document.createElement("span");
  textEl.className = "o-taxation-calculator__threshold-text";
  textEl.textContent = summaryHint.text;
  el.appendChild(textEl);
}

function getSummaryHint(config, state, i18n, total, threshold) {
  var hasOperatorEntries = Object.keys(state.operators || {}).some(
    function (key) {
      var op = state.operators[key];
      return op && (op.first > 0 || op.second > 0);
    },
  );
  var hasNationalEntries = Object.keys(state.national || {}).some(
    function (key) {
      var nat = state.national[key];
      return nat && (nat.first > 0 || nat.second > 0);
    },
  );
  var hasAnyEntries =
    hasOperatorEntries || hasNationalEntries || state.other > 0;

  if (!hasAnyEntries) {
    return null;
  }

  if (total <= threshold) {
    return { kind: "success", text: i18n.summaryUnderLimit };
  }

  var plan = buildPlanningPlan(config, state, i18n);
  if (plan.unassigned.length > 0) {
    return { kind: "warning", text: i18n.summaryOverLimitUnassigned };
  }

  var monthOverLimit = plan.months.some(function (month) {
    return month.total > threshold;
  });

  if (monthOverLimit) {
    return { kind: "warning", text: i18n.summaryAllAssignedOverMonth };
  }

  return { kind: "success", text: i18n.summaryAllAssignedOk };
}

document.addEventListener("DOMContentLoaded", init);

function formatCurrency(value) {
  return (
    value
      .toFixed(2)
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "\u00A0\u20AC"
  );
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

function getClassLabel(classKey, i18n) {
  return classKey === "first" ? i18n.firstClass : i18n.secondClass;
}

function getItemText(item, i18n, personLimit) {
  if (item.type === "other") {
    return item.title;
  }

  var personPrefix = "";
  if (item.person > 0 && personLimit > 1) {
    personPrefix = i18n.person + " " + item.person + ": ";
  }

  return (
    personPrefix +
    item.fields +
    "x " +
    item.title +
    " (" +
    getClassLabel(item.classKey, i18n) +
    ")"
  );
}

function collectPlanningItems(config, state, i18n) {
  var items = [];

  for (const op of config.operators) {
    var operatorPersonLimit = op.singlePersonOnly ? 1 : state.personLimit;
    for (var person = 1; person <= operatorPersonLimit; person++) {
      var opState = state.operators[op.slug];
      if (!opState) continue;

      if (opState.first > 0 && op.firstClass) {
        items.push({
          id: "op:" + op.slug + ":first:p" + person,
          type: "operator",
          title: op.title,
          classKey: "first",
          fields: opState.first,
          person: op.singlePersonOnly ? 1 : person,
          value: op.firstClass * opState.first,
        });
      }

      if (opState.second > 0) {
        items.push({
          id: "op:" + op.slug + ":second:p" + person,
          type: "operator",
          title: op.title,
          classKey: "second",
          fields: opState.second,
          person: op.singlePersonOnly ? 1 : person,
          value: op.secondClass * opState.second,
        });
      }
    }
  }

  for (const nat of config.national) {
    var natState = state.national[nat.key];
    if (!natState) continue;

    if (natState.first > 0) {
      for (var firstIdx = 1; firstIdx <= natState.first; firstIdx++) {
        items.push({
          id: "nat:" + nat.key + ":first:" + firstIdx,
          type: "national",
          title: nat.title,
          classKey: "first",
          fields: 1,
          person: 0,
          value: nat.firstClass,
        });
      }
    }

    if (natState.second > 0) {
      for (var secondIdx = 1; secondIdx <= natState.second; secondIdx++) {
        items.push({
          id: "nat:" + nat.key + ":second:" + secondIdx,
          type: "national",
          title: nat.title,
          classKey: "second",
          fields: 1,
          person: 0,
          value: nat.secondClass,
        });
      }
    }
  }

  if (state.other > 0) {
    items.push({
      id: "other",
      type: "other",
      title: i18n.categoryOther,
      classKey: "",
      fields: 1,
      person: 0,
      value: state.other,
    });
  }

  for (const item of items) {
    item.text = getItemText(item, i18n, state.personLimit);
  }

  return items;
}

function getValidAssignments(state) {
  if (
    !state.planningAssignments ||
    typeof state.planningAssignments !== "object"
  ) {
    state.planningAssignments = {};
  }
  return state.planningAssignments;
}

function getManualAssignments(state) {
  if (
    !state.planningManualAssignments ||
    typeof state.planningManualAssignments !== "object"
  ) {
    state.planningManualAssignments = {};
  }
  return state.planningManualAssignments;
}

function getMonthCount(state) {
  var parsed = parseInt(state.planningMonthCount, 10);
  if (!Number.isFinite(parsed) || parsed < 0) {
    state.planningMonthCount = 0;
    return 0;
  }
  return parsed;
}

function cleanupAssignments(assignments, manualAssignments, items) {
  var itemIds = new Set(
    items.map(function (item) {
      return item.id;
    }),
  );
  for (const itemId in assignments) {
    var month = parseInt(assignments[itemId], 10);
    if (!itemIds.has(itemId) || !Number.isFinite(month) || month <= 0) {
      delete assignments[itemId];
    }
  }

  for (const itemId in manualAssignments) {
    if (!itemIds.has(itemId) || !assignments[itemId]) {
      delete manualAssignments[itemId];
    }
  }
}

function buildMonthData(items, assignments, explicitMonthCount) {
  var assignedMaxMonth = 0;
  for (const item of items) {
    var month = parseInt(assignments[item.id], 10);
    if (month > assignedMaxMonth) {
      assignedMaxMonth = month;
    }
  }

  var monthCount = Math.max(assignedMaxMonth, explicitMonthCount || 0);
  var months = [];
  for (var monthIndex = 1; monthIndex <= monthCount; monthIndex++) {
    months.push({ index: monthIndex, total: 0, items: [] });
  }

  var unassigned = [];
  for (const item of items) {
    var assignedMonth = parseInt(assignments[item.id], 10);
    if (assignedMonth > 0 && assignedMonth <= monthCount) {
      var targetMonth = months[assignedMonth - 1];
      targetMonth.items.push(item);
      targetMonth.total += item.value;
    } else {
      unassigned.push(item);
    }
  }

  var unassignedTotal = unassigned.reduce(function (sum, item) {
    return sum + item.value;
  }, 0);

  return {
    months,
    unassigned,
    unassignedTotal,
  };
}

export function buildOptimizationPlan(config, state, i18n) {
  var items = collectPlanningItems(config, state, i18n);
  var assignments = getValidAssignments(state);
  var manualAssignments = getManualAssignments(state);
  var monthCount = getMonthCount(state);
  cleanupAssignments(assignments, manualAssignments, items);

  for (const item of items) {
    item.manual = Boolean(manualAssignments[item.id]);
  }

  var oversizedCount = items.filter(function (item) {
    return item.value > config.threshold;
  }).length;

  var monthData = buildMonthData(items, assignments, monthCount);
  return {
    hasItems: items.length > 0,
    oversizedCount,
    threshold: config.threshold,
    months: monthData.months,
    unassigned: monthData.unassigned,
    unassignedTotal: monthData.unassignedTotal,
  };
}

export function optimizePlan(config, state, i18n) {
  var items = collectPlanningItems(config, state, i18n);
  var existingAssignments = getValidAssignments(state);
  var manualAssignments = getManualAssignments(state);
  cleanupAssignments(existingAssignments, manualAssignments, items);

  if (items.length === 0) {
    state.planningAssignments = {};
    return;
  }

  var threshold = config.threshold;
  var nextAssignments = {};
  var monthTotals = {};
  var maxMonthIndex = Math.max(1, getMonthCount(state));

  function ensureMonth(monthIndex) {
    if (!monthTotals[monthIndex]) {
      monthTotals[monthIndex] = 0;
    }
    if (monthIndex > maxMonthIndex) {
      maxMonthIndex = monthIndex;
    }
  }

  var oversized = [];
  var fixed = [];
  var free = [];
  var oversizedAnchorMonth = 1;

  for (const item of items) {
    if (item.value <= threshold) continue;
    var assignedMonth = parseInt(existingAssignments[item.id], 10);
    if (manualAssignments[item.id] && assignedMonth > 0) {
      oversizedAnchorMonth = assignedMonth;
      break;
    }
  }

  for (const item of items) {
    var existingMonth = parseInt(existingAssignments[item.id], 10);

    if (item.value > threshold) {
      if (manualAssignments[item.id] && existingMonth > 0) {
        fixed.push({ item, month: existingMonth });
      } else {
        oversized.push(item);
      }
      continue;
    }

    if (manualAssignments[item.id] && existingMonth > 0) {
      fixed.push({ item, month: existingMonth });
    } else {
      free.push(item);
    }
  }

  ensureMonth(oversizedAnchorMonth);
  for (const item of oversized) {
    nextAssignments[item.id] = oversizedAnchorMonth;
    monthTotals[oversizedAnchorMonth] += item.value;
  }

  for (const entry of fixed) {
    ensureMonth(entry.month);
    nextAssignments[entry.item.id] = entry.month;
    monthTotals[entry.month] += entry.item.value;
  }

  free.sort(function (a, b) {
    return b.value - a.value;
  });

  for (const item of free) {
    var bestMonth = 0;
    var bestRemaining = Infinity;

    for (var monthIndex = 1; monthIndex <= maxMonthIndex; monthIndex++) {
      ensureMonth(monthIndex);
      var currentTotal = monthTotals[monthIndex];
      if (currentTotal >= threshold) continue;
      var remaining = threshold - (currentTotal + item.value);
      if (remaining >= 0 && remaining < bestRemaining) {
        bestRemaining = remaining;
        bestMonth = monthIndex;
      }
    }

    if (bestMonth === 0) {
      bestMonth = maxMonthIndex + 1;
      ensureMonth(bestMonth);
    }

    nextAssignments[item.id] = bestMonth;
    monthTotals[bestMonth] += item.value;
  }

  state.planningAssignments = nextAssignments;
  state.planningMonthCount = maxMonthIndex;
}

export function clearOptimization(container, state) {
  if (state) {
    state.planningAssignments = {};
    state.planningManualAssignments = {};
    state.planningMonthCount = 0;
  }
  var target = container.querySelector("[data-taxation-planning]");
  if (target) {
    target.innerHTML = "";
  }
}

export function renderOptimization(container, plan, i18n, options) {
  var onMove = options && options.onMove;
  var onOptimize = options && options.onOptimize;
  var onUnlock = options && options.onUnlock;
  var onAddMonth = options && options.onAddMonth;
  var onCloseMonth = options && options.onCloseMonth;

  var target = container.querySelector("[data-taxation-planning]");
  if (!target) return;
  target.innerHTML = "";

  var focusRow = document.createElement("div");
  focusRow.className = "o-taxation-calculator__planning-focus";
  focusRow.appendChild(createIcon("keyboard_double_arrow_down"));
  var focusText = document.createElement("span");
  focusText.textContent = i18n.planningFocus;
  focusRow.appendChild(focusText);
  focusRow.appendChild(createIcon("keyboard_double_arrow_down"));
  target.appendChild(focusRow);

  var title = document.createElement("h3");
  title.className = "o-taxation-calculator__planning-title";
  title.textContent = i18n.planning;

  var description = document.createElement("p");
  description.className = "o-taxation-calculator__planning-description";
  description.textContent = i18n.planningDescription;

  var header = document.createElement("div");
  header.className = "o-taxation-calculator__planning-header";
  header.appendChild(title);

  function createOptimizeButton() {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "o-taxation-calculator__optimization-run";
    button.disabled = !plan.hasItems;
    button.title = i18n.optimize;
    button.setAttribute("aria-label", i18n.optimize);
    button.appendChild(createIcon("wand_stars"));
    button.appendChild(document.createTextNode(i18n.optimize));
    button.addEventListener("click", function () {
      if (typeof onOptimize === "function") {
        onOptimize();
      }
    });
    return button;
  }

  target.appendChild(header);
  target.appendChild(description);

  var actions = document.createElement("div");
  actions.className = "o-taxation-calculator__planning-actions";
  actions.appendChild(createOptimizeButton());
  target.appendChild(actions);

  var list = document.createElement("div");
  list.className = "o-taxation-calculator__optimization-list";

  function activateDropZone(zone) {
    zone.classList.add("o-taxation-calculator__optimization-drop-zone--active");
  }

  function deactivateDropZone(zone) {
    zone.classList.remove(
      "o-taxation-calculator__optimization-drop-zone--active",
    );
  }

  function deactivateAllDropZones() {
    var activeZones = list.querySelectorAll(
      ".o-taxation-calculator__optimization-drop-zone--active",
    );
    for (const zone of activeZones) {
      deactivateDropZone(zone);
    }
  }

  function getDropZoneAtPoint(x, y) {
    var dropTarget = document.elementFromPoint(x, y);
    if (!dropTarget) return null;
    return dropTarget.closest(
      "[data-month-index], .o-taxation-calculator__optimization-new-month",
    );
  }

  function createCard(item) {
    var card = document.createElement("li");
    card.className = "o-taxation-calculator__optimization-item";
    card.dataset.itemId = item.id;

    var left = document.createElement("span");
    left.className = "o-taxation-calculator__optimization-item-left";

    var dragHandle = document.createElement("span");
    dragHandle.className = "o-taxation-calculator__optimization-drag-handle";
    dragHandle.setAttribute("role", "button");
    dragHandle.setAttribute("tabindex", "0");
    dragHandle.draggable = true;
    dragHandle.appendChild(createIcon("drag_indicator"));
    dragHandle.addEventListener("touchstart", function (event) {
      var touch = event.touches && event.touches[0];
      if (!touch) return;
      var rect = card.getBoundingClientRect();
      card.classList.add("o-taxation-calculator__optimization-item--dragging");
      card.dataset.touchDragging = "true";
      card.style.position = "fixed";
      card.style.width = rect.width + "px";
      card.style.height = rect.height + "px";
      card.style.boxSizing = "border-box";
      card.style.left = touch.clientX - 16 + "px";
      card.style.top = touch.clientY - 16 + "px";
      card.style.zIndex = "9999";
      card.style.pointerEvents = "none";
      event.preventDefault();
    });
    dragHandle.addEventListener("touchmove", function (event) {
      if (card.dataset.touchDragging !== "true") return;
      var touch = event.touches && event.touches[0];
      if (!touch) return;
      card.style.left = touch.clientX - 16 + "px";
      card.style.top = touch.clientY - 16 + "px";
      deactivateAllDropZones();
      var dropZone = getDropZoneAtPoint(touch.clientX, touch.clientY);
      if (dropZone) {
        activateDropZone(dropZone);
      }
      event.preventDefault();
    });
    function finishTouchDrag(event) {
      if (card.dataset.touchDragging !== "true") return;
      var touch = event.changedTouches && event.changedTouches[0];
      if (!touch) return;
      var dropZone = getDropZoneAtPoint(touch.clientX, touch.clientY);
      card.classList.remove(
        "o-taxation-calculator__optimization-item--dragging",
      );
      card.dataset.touchDragging = "false";
      card.style.position = "";
      card.style.width = "";
      card.style.height = "";
      card.style.boxSizing = "";
      card.style.left = "";
      card.style.top = "";
      card.style.zIndex = "";
      card.style.pointerEvents = "";
      deactivateAllDropZones();

      if (!dropZone || typeof onMove !== "function") {
        event.preventDefault();
        return;
      }

      if (
        dropZone.classList.contains(
          "o-taxation-calculator__optimization-new-month",
        )
      ) {
        var nextMonth =
          plan.months.length > 0
            ? plan.months[plan.months.length - 1].index + 1
            : 1;
        onMove(item.id, nextMonth);
      } else {
        var monthIndex = parseInt(dropZone.dataset.monthIndex, 10);
        if (Number.isFinite(monthIndex)) {
          onMove(item.id, monthIndex);
        }
      }
      event.preventDefault();
    }
    dragHandle.addEventListener("touchend", finishTouchDrag);
    dragHandle.addEventListener("touchcancel", finishTouchDrag);
    dragHandle.addEventListener("dragstart", function (event) {
      card.classList.add("o-taxation-calculator__optimization-item--dragging");
      event.dataTransfer.setData("text/plain", item.id);
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setDragImage(card, 16, 16);
    });
    dragHandle.addEventListener("dragend", function () {
      card.classList.remove(
        "o-taxation-calculator__optimization-item--dragging",
      );
    });
    left.appendChild(dragHandle);

    var text = document.createElement("span");
    text.className = "o-taxation-calculator__optimization-item-text";
    text.textContent = item.text;
    left.appendChild(text);
    card.appendChild(left);

    var amount = document.createElement("span");
    amount.className = "o-taxation-calculator__optimization-item-amount";
    amount.textContent = formatCurrency(item.value);
    card.appendChild(amount);

    var lockSlot = document.createElement("span");
    lockSlot.className = "o-taxation-calculator__optimization-item-lock-slot";
    if (item.manual) {
      var lockBtn = document.createElement("button");
      lockBtn.type = "button";
      lockBtn.className = "o-taxation-calculator__optimization-lock";
      lockBtn.title = i18n.unlock;
      lockBtn.setAttribute("aria-label", i18n.unlock);
      lockBtn.appendChild(createIcon("lock"));
      lockBtn.addEventListener("mousedown", function (event) {
        event.stopPropagation();
      });
      lockBtn.addEventListener("click", function () {
        if (typeof onUnlock === "function") {
          onUnlock(item.id);
        }
      });
      lockSlot.appendChild(lockBtn);
    }
    card.appendChild(lockSlot);

    return card;
  }

  function createBucket(
    labelText,
    monthIndex,
    items,
    isUnassigned,
    monthTotal,
  ) {
    var section = document.createElement("section");
    section.className = "o-taxation-calculator__optimization-month";
    if (isUnassigned) {
      section.classList.add(
        "o-taxation-calculator__optimization-month--unassigned",
      );
    }

    var heading = document.createElement("div");
    heading.className = "o-taxation-calculator__optimization-month-title";
    var headingText = document.createElement("span");
    headingText.textContent = labelText;
    headingText.className = "o-taxation-calculator__optimization-month-label";
    heading.appendChild(headingText);

    var headingRight = document.createElement("span");
    headingRight.className = "o-taxation-calculator__optimization-month-right";
    var headingAmount = document.createElement("span");
    headingAmount.className = "o-taxation-calculator__optimization-month-total";
    headingAmount.textContent = formatCurrency(monthTotal);
    headingRight.appendChild(headingAmount);

    if (!isUnassigned) {
      var statusIcon = createIcon(
        monthTotal > plan.threshold ? "warning" : "check_circle",
      );
      statusIcon.classList.add(
        "o-taxation-calculator__optimization-month-icon",
      );
      if (monthTotal > plan.threshold) {
        statusIcon.classList.add(
          "o-taxation-calculator__optimization-month-icon--warning",
        );
      } else {
        statusIcon.classList.add(
          "o-taxation-calculator__optimization-month-icon--success",
        );
      }
      headingRight.appendChild(statusIcon);

      var closeBtn = document.createElement("button");
      closeBtn.type = "button";
      closeBtn.className =
        "o-taxation-calculator__remove-btn o-taxation-calculator__optimization-month-close";
      closeBtn.title = i18n.remove;
      closeBtn.setAttribute("aria-label", i18n.remove);
      closeBtn.appendChild(createIcon("close"));
      closeBtn.addEventListener("click", function () {
        if (typeof onCloseMonth === "function") {
          onCloseMonth(monthIndex);
        }
      });
      headingRight.appendChild(closeBtn);
    }

    heading.appendChild(headingRight);

    section.appendChild(heading);

    var bucket = document.createElement("ul");
    bucket.className =
      "o-taxation-calculator__optimization-month-items o-taxation-calculator__optimization-drop-zone";
    bucket.dataset.monthIndex = String(monthIndex);

    bucket.addEventListener("dragover", function (event) {
      event.preventDefault();
      activateDropZone(this);
    });

    bucket.addEventListener("dragleave", function (event) {
      if (!this.contains(event.relatedTarget)) {
        deactivateDropZone(this);
      }
    });

    bucket.addEventListener("drop", function (event) {
      event.preventDefault();
      deactivateDropZone(this);
      var itemId = event.dataTransfer.getData("text/plain");
      if (!itemId) return;
      if (typeof onMove === "function") {
        onMove(itemId, monthIndex);
      }
    });

    for (const item of items) {
      bucket.appendChild(createCard(item));
    }

    section.appendChild(bucket);
    return section;
  }

  list.appendChild(
    createBucket(
      i18n.unassigned,
      0,
      plan.unassigned,
      true,
      plan.unassignedTotal,
    ),
  );

  for (const month of plan.months) {
    list.appendChild(
      createBucket(
        i18n.optimizationMonth + " " + month.index,
        month.index,
        month.items,
        false,
        month.total,
      ),
    );
  }

  var newMonthDrop = document.createElement("button");
  newMonthDrop.type = "button";
  newMonthDrop.className =
    "o-taxation-calculator__optimization-new-month o-taxation-calculator__optimization-drop-zone";
  newMonthDrop.textContent = i18n.addMonth || i18n.optimizationMonth + " +";
  newMonthDrop.setAttribute(
    "aria-label",
    i18n.addMonth || i18n.optimizationMonth + " +",
  );
  newMonthDrop.addEventListener("click", function () {
    if (typeof onAddMonth === "function") {
      onAddMonth();
    }
  });

  newMonthDrop.addEventListener("dragover", function (event) {
    event.preventDefault();
    activateDropZone(this);
  });

  newMonthDrop.addEventListener("dragleave", function (event) {
    if (!this.contains(event.relatedTarget)) {
      deactivateDropZone(this);
    }
  });

  newMonthDrop.addEventListener("drop", function (event) {
    event.preventDefault();
    deactivateDropZone(this);
    var itemId = event.dataTransfer.getData("text/plain");
    if (!itemId) return;
    var nextMonth =
      plan.months.length > 0
        ? plan.months[plan.months.length - 1].index + 1
        : 1;
    if (typeof onMove === "function") {
      onMove(itemId, nextMonth);
    }
  });

  list.appendChild(newMonthDrop);
  target.appendChild(list);
}

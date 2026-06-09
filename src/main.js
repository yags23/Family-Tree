const STORAGE_KEY = "ottoman-family-tree-v1";
const PASSWORD = "Idris";

const i18n = {
  en: {
    appName: "Family Tree",
    search: "Search names",
    view: "View",
    edit: "Edit",
    unlockEdit: "Unlock edit",
    lockView: "Return to view",
    password: "Password",
    cancel: "Cancel",
    unlock: "Unlock",
    wrongPassword: "That password did not match.",
    fit: "Fit",
    reset: "Reset",
    export: "Export",
    import: "Import",
    undo: "Undo",
    redo: "Redo",
    selected: "Selected person",
    noSelection: "Select a person to see details.",
    addSpouse: "Add spouse",
    addSon: "Add son",
    addDaughter: "Add daughter",
    addChild: "Add child",
    delete: "Delete",
    name: "Name",
    gender: "Gender",
    male: "Male",
    female: "Female",
    unknown: "Unknown",
    birthDate: "Birth date",
    deathDate: "Death date",
    notes: "Notes",
    photo: "Photo",
    spouse: "Spouse",
    children: "Children",
    parentChild: "Parent-child",
    secondParent: "Second parent",
    unknownParent: "Unknown parent",
    chooseParent: "Search or choose parent",
    alsoCreateSpouse: "Also create spouse/partner connection",
    noMatches: "No matching names",
    matches: "matches",
    addRelative: "Add relative",
    save: "Save",
    personName: "Person name",
    modeNote: "View mode protects the tree from changes.",
    dataSaved: "Autosaved locally",
    jsonImported: "Family data imported",
    invalidJson: "Could not import that JSON file",
    confirmDelete: "Delete this person and their relationships?",
  },
  tr: {
    appName: "Family Tree",
    search: "Isim ara",
    view: "Gorunum",
    edit: "Duzenle",
    unlockEdit: "Duzenlemeyi ac",
    lockView: "Gorunume don",
    password: "Sifre",
    cancel: "Vazgec",
    unlock: "Ac",
    wrongPassword: "Sifre eslesmedi.",
    fit: "Sığdır",
    reset: "Sıfırla",
    export: "Disa aktar",
    import: "Ice aktar",
    undo: "Geri al",
    redo: "Yinele",
    selected: "Secili kisi",
    noSelection: "Ayrintilari gormek icin bir kisi secin.",
    addSpouse: "Es ekle",
    addSon: "Oğul ekle",
    addDaughter: "Kız ekle",
    addChild: "Cocuk ekle",
    delete: "Sil",
    name: "Isim",
    gender: "Cinsiyet",
    male: "Erkek",
    female: "Kadin",
    unknown: "Bilinmiyor",
    birthDate: "Dogum tarihi",
    deathDate: "Olum tarihi",
    notes: "Notlar",
    photo: "Fotograf",
    spouse: "Es",
    children: "Cocuklar",
    parentChild: "Ebeveyn-cocuk",
    secondParent: "Ikinci ebeveyn",
    unknownParent: "Bilinmeyen ebeveyn",
    chooseParent: "Ebeveyn ara veya sec",
    alsoCreateSpouse: "Es/partner baglantisi da olustur",
    noMatches: "Eslestirme bulunamadi",
    matches: "eslesme",
    addRelative: "Akraba ekle",
    save: "Kaydet",
    personName: "Kisi adi",
    modeNote: "Gorunum modu agaci degisikliklerden korur.",
    dataSaved: "Yerel olarak kaydedildi",
    jsonImported: "Aile verisi ice aktarildi",
    invalidJson: "Bu JSON dosyasi ice aktarilamadi",
    confirmDelete: "Bu kisiyi ve iliskilerini silmek istiyor musunuz?",
  },
};

const seedData = {
  people: [
    {
      id: "p-selim",
      name: "Selim Bilalaki",
      gender: "male",
      birthDate: "c. 1840",
      deathDate: "",
      notes: "Early ancestor shown near the top of the visual Excel tree.",
      photoUrl: "",
      x: 980,
      y: 60,
    },
    {
      id: "p-hayriye",
      name: "Hayriye",
      gender: "female",
      birthDate: "",
      deathDate: "",
      notes: "Spouse of Selim Bilalaki.",
      photoUrl: "",
      x: 1240,
      y: 60,
    },
    {
      id: "p-mustafa",
      name: "Marangoz Mustafa Bilalaki",
      gender: "male",
      birthDate: "1864",
      deathDate: "",
      notes: "Manual seed data. Replace, expand, or edit from edit mode.",
      photoUrl: "",
      x: 520,
      y: 300,
    },
    {
      id: "p-zehra",
      name: "Zehra Bilalaki",
      gender: "female",
      birthDate: "1886",
      deathDate: "1945",
      notes: "Also recorded as Zohra in some family notes.",
      photoUrl: "",
      x: 860,
      y: 300,
    },
    {
      id: "p-ali",
      name: "Ali Saban Bilalaki",
      gender: "male",
      birthDate: "1871",
      deathDate: "1933",
      notes: "Surname later appears as Ozen in the Excel reference.",
      photoUrl: "",
      x: 1200,
      y: 300,
    },
    {
      id: "p-saadet",
      name: "Saadet Hanim",
      gender: "female",
      birthDate: "1876",
      deathDate: "1952",
      notes: "Spouse seed entry.",
      photoUrl: "",
      x: 1460,
      y: 300,
    },
    {
      id: "p-huseyin",
      name: "Huseyin Gultekin",
      gender: "male",
      birthDate: "1871",
      deathDate: "1937",
      notes: "Seed person for testing search and branching.",
      photoUrl: "",
      x: 700,
      y: 560,
    },
    {
      id: "p-gulter",
      name: "Gulter Gulsayin",
      gender: "female",
      birthDate: "1884",
      deathDate: "1964",
      notes: "Seed person with a spouse connector.",
      photoUrl: "",
      x: 1040,
      y: 560,
    },
    {
      id: "p-huseyin-ozmen",
      name: "Huseyin Ozmen",
      gender: "male",
      birthDate: "1881",
      deathDate: "1970",
      notes: "Repeated name included so multi-match search can be tested.",
      photoUrl: "",
      x: 1380,
      y: 560,
    },
  ],
  relationships: [
    { id: "r-selim-hayriye", type: "spouse", from: "p-selim", to: "p-hayriye" },
    { id: "r-selim-mustafa", type: "parentChild", from: "p-selim", to: "p-mustafa" },
    { id: "r-selim-zehra", type: "parentChild", from: "p-selim", to: "p-zehra" },
    { id: "r-selim-ali", type: "parentChild", from: "p-selim", to: "p-ali" },
    { id: "r-ali-saadet", type: "spouse", from: "p-ali", to: "p-saadet" },
    { id: "r-ali-huseyin", type: "parentChild", from: "p-ali", to: "p-huseyin" },
    { id: "r-ali-gulter", type: "parentChild", from: "p-ali", to: "p-gulter" },
    { id: "r-ali-huseyin-ozmen", type: "parentChild", from: "p-ali", to: "p-huseyin-ozmen" },
  ],
};

const state = {
  data: loadData(),
  history: [],
  future: [],
  selectedId: "p-ali",
  highlightedIds: new Set(["p-ali"]),
  query: "",
  language: "en",
  editMode: false,
  showPassword: false,
  passwordInput: "",
  passwordError: "",
  showAdd: false,
  addKind: "child",
  toast: "",
  transform: { x: 160, y: 120, scale: 0.62 },
  drag: null,
  lastPointer: null,
};

const app = document.querySelector("#app");

function t(key) {
  return i18n[state.language][key] || i18n.en[key] || key;
}

function loadData() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : structuredClone(seedData);
  } catch {
    return structuredClone(seedData);
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
  showToast(t("dataSaved"));
}

function snapshot() {
  state.history.push(JSON.stringify(state.data));
  if (state.history.length > 60) state.history.shift();
  state.future = [];
}

function restore(json) {
  state.data = JSON.parse(json);
  ensureSelection();
  persist();
  render();
}

function ensureSelection() {
  if (!state.data.people.some((person) => person.id === state.selectedId)) {
    state.selectedId = state.data.people[0]?.id || "";
  }
}

function showToast(message) {
  state.toast = message;
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    state.toast = "";
    render();
  }, 1700);
}

function byId(id) {
  return state.data.people.find((person) => person.id === id);
}

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");
}

function normalize(text) {
  return text
    .toLocaleLowerCase("tr")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function matchesQuery(person) {
  return normalize(person.name).includes(normalize(state.query.trim()));
}

function getMatches() {
  if (!state.query.trim()) return [];
  return state.data.people.filter(matchesQuery);
}

function relationsFor(personId, type) {
  return state.data.relationships.filter((rel) => {
    const typeOk = type ? rel.type === type : true;
    return typeOk && (rel.from === personId || rel.to === personId);
  });
}

function childrenOf(personId) {
  const seen = new Set();
  return state.data.relationships
    .filter((rel) => rel.type === "parentChild" && rel.from === personId)
    .map((rel) => byId(rel.to))
    .filter((person) => {
      if (!person || seen.has(person.id)) return false;
      seen.add(person.id);
      return true;
    });
}

function spousesOf(personId) {
  return relationsFor(personId, "spouse")
    .map((rel) => byId(rel.from === personId ? rel.to : rel.from))
    .filter(Boolean);
}

function isChildKind(kind = state.addKind) {
  return kind === "son" || kind === "daughter" || kind === "child";
}

function isSpousePair(firstId, secondId) {
  if (!firstId || !secondId) return false;
  return state.data.relationships.some((rel) => rel.type === "spouse" && ((rel.from === firstId && rel.to === secondId) || (rel.from === secondId && rel.to === firstId)));
}

function parentsOf(childId) {
  const seen = new Set();
  return state.data.relationships
    .filter((rel) => rel.type === "parentChild" && rel.to === childId)
    .map((rel) => byId(rel.from))
    .filter((person) => {
      if (!person || seen.has(person.id)) return false;
      seen.add(person.id);
      return true;
    });
}

function boundsForPeople(people) {
  if (!people.length) return { minX: 0, minY: 0, maxX: 1800, maxY: 900 };
  return people.reduce(
    (box, person) => ({
      minX: Math.min(box.minX, person.x),
      minY: Math.min(box.minY, person.y),
      maxX: Math.max(box.maxX, person.x + 220),
      maxY: Math.max(box.maxY, person.y + 124),
    }),
    { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity },
  );
}

function fitToPeople(people, padding = 130) {
  const stage = document.querySelector(".tree-stage");
  if (!stage || !people.length) return;
  const rect = stage.getBoundingClientRect();
  const box = boundsForPeople(people);
  const width = Math.max(1, box.maxX - box.minX);
  const height = Math.max(1, box.maxY - box.minY);
  const scale = Math.min(1.15, Math.max(0.18, Math.min((rect.width - padding) / width, (rect.height - padding) / height)));
  state.transform = {
    scale,
    x: rect.width / 2 - (box.minX + width / 2) * scale,
    y: rect.height / 2 - (box.minY + height / 2) * scale,
  };
}

function selectPerson(id, focus = false) {
  state.selectedId = id;
  state.highlightedIds = new Set([id]);
  if (focus) fitToPeople([byId(id)].filter(Boolean), 260);
  render();
}

function focusMatches(matches = getMatches()) {
  if (!matches.length) return;
  state.highlightedIds = new Set(matches.map((person) => person.id));
  state.selectedId = matches[0].id;
  fitToPeople(matches, matches.length === 1 ? 260 : 190);
  render();
}

function updatePerson(id, patch) {
  snapshot();
  const person = byId(id);
  Object.assign(person, patch);
  persist();
  render();
}

function uniqueId(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function addRelative(formData) {
  const selected = byId(state.selectedId);
  if (!selected) return;
  snapshot();
  const isChild = isChildKind();
  const secondParent = isChild ? byId(formData.secondParentId) : null;
  const childCount = childrenOf(selected.id).length;
  const childX = secondParent ? (selected.x + secondParent.x) / 2 + childCount * 80 : selected.x + 180 + childCount * 250;
  const childY = selected.y + 270;
  const newPerson = {
    id: uniqueId("p"),
    name: formData.name || t("personName"),
    gender: formData.gender,
    birthDate: formData.birthDate,
    deathDate: formData.deathDate,
    notes: formData.notes,
    photoUrl: formData.photoUrl,
    x: state.addKind === "spouse" ? selected.x + 280 : childX,
    y: state.addKind === "spouse" ? selected.y : childY,
  };
  const relType = state.addKind === "spouse" ? "spouse" : "parentChild";
  state.data.people.push(newPerson);
  state.data.relationships.push({ id: uniqueId("r"), type: relType, from: selected.id, to: newPerson.id });
  if (secondParent && secondParent.id !== selected.id) {
    state.data.relationships.push({ id: uniqueId("r"), type: "parentChild", from: secondParent.id, to: newPerson.id });
    if (formData.createSpouse === "on" && !isSpousePair(selected.id, secondParent.id)) {
      state.data.relationships.push({ id: uniqueId("r"), type: "spouse", from: selected.id, to: secondParent.id });
    }
  }
  state.selectedId = newPerson.id;
  state.highlightedIds = new Set([newPerson.id]);
  state.showAdd = false;
  persist();
  fitToPeople([newPerson], 260);
  render();
}

function deleteSelected() {
  const person = byId(state.selectedId);
  if (!person || !confirm(t("confirmDelete"))) return;
  snapshot();
  state.data.people = state.data.people.filter((item) => item.id !== person.id);
  state.data.relationships = state.data.relationships.filter((rel) => rel.from !== person.id && rel.to !== person.id);
  ensureSelection();
  state.highlightedIds = new Set(state.selectedId ? [state.selectedId] : []);
  persist();
  render();
}

function exportJson() {
  const blob = new Blob([JSON.stringify(state.data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "family-tree-data.json";
  link.click();
  URL.revokeObjectURL(url);
}

function importJson(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (!Array.isArray(data.people) || !Array.isArray(data.relationships)) throw new Error("Invalid shape");
      snapshot();
      state.data = data;
      ensureSelection();
      persist();
      showToast(t("jsonImported"));
      render();
    } catch {
      showToast(t("invalidJson"));
      render();
    }
  };
  reader.readAsText(file);
}

function readPhoto(file, callback) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => callback(reader.result);
  reader.readAsDataURL(file);
}

function nodeCenter(person) {
  return { x: person.x + 110, y: person.y + 62 };
}

function connectorPath(rel) {
  const from = byId(rel.from);
  const to = byId(rel.to);
  if (!from || !to) return "";
  const a = nodeCenter(from);
  const b = nodeCenter(to);
  if (rel.type === "spouse") {
    const y = (a.y + b.y) / 2;
    return `M ${a.x} ${y} C ${(a.x + b.x) / 2} ${y - 28}, ${(a.x + b.x) / 2} ${y + 28}, ${b.x} ${y}`;
  }
  const midY = a.y + Math.max(80, (b.y - a.y) * 0.45);
  return `M ${a.x} ${a.y + 60} C ${a.x} ${midY}, ${b.x} ${midY}, ${b.x} ${b.y - 60}`;
}

function familyConnectorPath(parentA, parentB, child) {
  const a = nodeCenter(parentA);
  const c = nodeCenter(child);
  const start = parentB ? { x: (a.x + nodeCenter(parentB).x) / 2, y: (a.y + nodeCenter(parentB).y) / 2 } : { x: a.x, y: a.y + 60 };
  const midY = start.y + Math.max(80, (c.y - start.y) * 0.45);
  return `M ${start.x} ${start.y} C ${start.x} ${midY}, ${c.x} ${midY}, ${c.x} ${c.y - 60}`;
}

function connectorIsHot(ids) {
  return ids.some((id) => state.highlightedIds.has(id));
}

function childConnectorEntries() {
  return state.data.people.flatMap((child) => {
    const parents = parentsOf(child.id);
    if (!parents.length) return [];
    const spousePair = parents.length >= 2 ? parents.find((parent, index) => parents.slice(index + 1).some((other) => isSpousePair(parent.id, other.id))) : null;
    if (spousePair) {
      const otherParent = parents.find((parent) => parent.id !== spousePair.id && isSpousePair(parent.id, spousePair.id));
      return [{ child, parentA: spousePair, parentB: otherParent }];
    }
    return parents.map((parent) => ({ child, parentA: parent, parentB: null }));
  });
}

function render(options = {}) {
  const selected = byId(state.selectedId);
  const matches = getMatches();
  app.innerHTML = `
    <main class="app-shell">
      <header class="topbar">
        <div class="brand">
          <div class="brand-mark" aria-hidden="true"></div>
          <div>
            <h1>${t("appName")}</h1>
            <p>${state.editMode ? t("edit") : t("modeNote")}</p>
          </div>
        </div>
        <div class="search-wrap">
          <input id="searchInput" type="search" placeholder="${t("search")}" value="${escapeHtml(state.query)}" />
          <button class="icon-button search-focus" title="${t("fit")}" ${matches.length ? "" : "disabled"}>⌕</button>
          <div class="search-menu ${state.query.trim() ? "open" : ""}">
            ${matches.length ? matches.map((person) => `<button class="search-result" data-id="${person.id}"><strong>${highlightName(person.name, state.query)}</strong><span>${dateLine(person)}</span></button>`).join("") : `<div class="empty-result">${t("noMatches")}</div>`}
          </div>
        </div>
        <nav class="toolbar" aria-label="Tree controls">
          <button class="tool" data-action="zoom-out" title="Zoom out">−</button>
          <button class="tool" data-action="zoom-in" title="Zoom in">+</button>
          <button class="tool label-tool" data-action="fit">${t("fit")}</button>
          <button class="tool label-tool" data-action="reset">${t("reset")}</button>
          <button class="tool" data-action="undo" title="${t("undo")}" ${state.history.length ? "" : "disabled"}>↶</button>
          <button class="tool" data-action="redo" title="${t("redo")}" ${state.future.length ? "" : "disabled"}>↷</button>
          <button class="tool label-tool" data-action="export">${t("export")}</button>
          <label class="tool label-tool import-label">${t("import")}<input id="importFile" type="file" accept="application/json" hidden /></label>
          <button class="language-toggle" data-action="language">${state.language === "en" ? "TR" : "EN"}</button>
          <button class="mode-button ${state.editMode ? "active" : ""}" data-action="mode">${state.editMode ? t("lockView") : t("unlockEdit")}</button>
        </nav>
      </header>
      <section class="workspace">
        <section class="tree-stage" aria-label="Family tree canvas">
          <div class="canvas-bg"></div>
          <div class="tree-canvas" style="transform: translate(${state.transform.x}px, ${state.transform.y}px) scale(${state.transform.scale});">
            ${renderConnectors()}
            ${state.data.people.map(renderPersonCard).join("")}
          </div>
          ${renderMiniMap()}
          <div class="zoom-chip">${Math.round(state.transform.scale * 100)}%</div>
        </section>
        ${renderInspector(selected)}
      </section>
      ${state.showPassword ? renderPasswordModal() : ""}
      ${state.showAdd ? renderAddModal() : ""}
      ${state.toast ? `<div class="toast">${state.toast}</div>` : ""}
    </main>
  `;
  bindEvents();
  if (options.focusSearch) {
    const input = document.querySelector("#searchInput");
    input?.focus();
    const end = input?.value.length || 0;
    input?.setSelectionRange(end, end);
  }
}

function renderConnectors() {
  const spouseLines = state.data.relationships.filter((rel) => rel.type === "spouse");
  const childLines = childConnectorEntries();
  return `
    <svg class="connectors" width="2200" height="1100" viewBox="0 0 2200 1100" aria-hidden="true">
      <defs>
        <filter id="lineShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#2e2118" flood-opacity="0.15" />
        </filter>
      </defs>
      ${spouseLines
        .map((rel) => {
          const hot = state.highlightedIds.has(rel.from) || state.highlightedIds.has(rel.to);
          return `<path class="connector ${rel.type} ${hot ? "hot" : ""}" d="${connectorPath(rel)}" filter="url(#lineShadow)" />`;
        })
        .join("")}
      ${childLines
        .map(({ child, parentA, parentB }) => {
          const ids = [child.id, parentA.id, parentB?.id].filter(Boolean);
          return `<path class="connector parentChild ${parentB ? "family" : ""} ${connectorIsHot(ids) ? "hot" : ""}" d="${familyConnectorPath(parentA, parentB, child)}" filter="url(#lineShadow)" />`;
        })
        .join("")}
    </svg>
  `;
}

function renderPersonCard(person) {
  const selected = person.id === state.selectedId;
  const highlighted = state.highlightedIds.has(person.id);
  const genderClass = person.gender || "unknown";
  return `
    <button class="person-card ${genderClass} ${selected ? "selected" : ""} ${highlighted ? "highlighted" : ""}" data-person-id="${person.id}" style="left:${person.x}px; top:${person.y}px;">
      <span class="card-ornament"></span>
      <span class="avatar">${person.photoUrl ? `<img src="${person.photoUrl}" alt="" />` : initials(person.name)}</span>
      <span class="person-copy">
        <strong>${escapeHtml(person.name)}</strong>
        <small>${escapeHtml(dateLine(person) || " ")}</small>
      </span>
    </button>
  `;
}

function renderMiniMap() {
  const box = boundsForPeople(state.data.people);
  const w = Math.max(1, box.maxX - box.minX);
  const h = Math.max(1, box.maxY - box.minY);
  const scale = Math.min(152 / w, 82 / h);
  return `
    <aside class="minimap" aria-label="Tree overview">
      ${state.data.people
        .map((person) => {
          const left = 12 + (person.x - box.minX) * scale;
          const top = 12 + (person.y - box.minY) * scale;
          return `<span class="mini-node ${person.id === state.selectedId ? "active" : ""}" style="left:${left}px; top:${top}px;"></span>`;
        })
        .join("")}
    </aside>
  `;
}

function renderInspector(person) {
  if (!person) {
    return `<aside class="inspector"><div class="empty-panel">${t("noSelection")}</div></aside>`;
  }
  const spouses = spousesOf(person.id);
  const children = childrenOf(person.id);
  return `
    <aside class="inspector">
      <div class="inspector-scroll">
        <div class="inspector-head">
          <div class="large-avatar">${person.photoUrl ? `<img src="${person.photoUrl}" alt="" />` : initials(person.name)}</div>
          <div>
            <p>${t("selected")}</p>
            <h2>${escapeHtml(person.name)}</h2>
            <span class="status-pill ${state.editMode ? "edit" : ""}">${state.editMode ? t("edit") : t("view")}</span>
          </div>
        </div>
        <form class="person-form">
          ${field("name", t("name"), person.name)}
          <label>${t("gender")}<select name="gender" ${state.editMode ? "" : "disabled"}>
            ${["male", "female", "unknown"].map((gender) => `<option value="${gender}" ${person.gender === gender ? "selected" : ""}>${t(gender)}</option>`).join("")}
          </select></label>
          ${field("birthDate", t("birthDate"), person.birthDate)}
          ${field("deathDate", t("deathDate"), person.deathDate)}
          <label>${t("notes")}<textarea name="notes" ${state.editMode ? "" : "disabled"}>${escapeHtml(person.notes || "")}</textarea></label>
          <label class="photo-input">${t("photo")}<input name="photo" type="file" accept="image/*" ${state.editMode ? "" : "disabled"} /></label>
        </form>
        <div class="relation-group">
          <h3>${t("spouse")}</h3>
          ${spouses.length ? spouses.map(linkPerson).join("") : `<p class="muted">—</p>`}
        </div>
        <div class="relation-group">
          <h3>${t("children")}</h3>
          ${children.length ? children.map(linkPerson).join("") : `<p class="muted">—</p>`}
        </div>
        <div class="edit-actions ${state.editMode ? "enabled" : ""}">
          <button data-add-kind="spouse">${t("addSpouse")}</button>
          <button data-add-kind="son">${t("addSon")}</button>
          <button data-add-kind="daughter">${t("addDaughter")}</button>
          <button data-add-kind="child">${t("addChild")}</button>
          <button class="danger" data-action="delete">${t("delete")}</button>
        </div>
      </div>
    </aside>
  `;
}

function field(name, label, value) {
  return `<label>${label}<input name="${name}" value="${escapeHtml(value || "")}" ${state.editMode ? "" : "disabled"} /></label>`;
}

function linkPerson(person) {
  return `<button class="relation-link" data-id="${person.id}">${escapeHtml(person.name)}<span>${escapeHtml(dateLine(person))}</span></button>`;
}

function renderPasswordModal() {
  return `
    <div class="modal-backdrop">
      <form class="modal password-modal">
        <h2>${t("unlockEdit")}</h2>
        <p>${t("modeNote")}</p>
        <input name="password" type="password" placeholder="${t("password")}" value="${escapeHtml(state.passwordInput)}" autofocus />
        ${state.passwordError ? `<div class="form-error">${state.passwordError}</div>` : ""}
        <div class="modal-actions">
          <button type="button" data-action="cancel-password">${t("cancel")}</button>
          <button class="primary" type="submit">${t("unlock")}</button>
        </div>
      </form>
    </div>
  `;
}

function renderAddModal() {
  const gender = state.addKind === "son" ? "male" : state.addKind === "daughter" ? "female" : "unknown";
  const selected = byId(state.selectedId);
  const defaultSecondParent = selected ? spousesOf(selected.id)[0] : null;
  const showParentFields = isChildKind();
  const secondParentOptions = selected
    ? state.data.people
        .filter((person) => person.id !== selected.id)
        .map((person) => `<option value="${person.id}" ${defaultSecondParent?.id === person.id ? "selected" : ""}>${escapeHtml(person.name)}${dateLine(person) ? ` (${escapeHtml(dateLine(person))})` : ""}</option>`)
        .join("")
    : "";
  return `
    <div class="modal-backdrop">
      <form class="modal add-modal">
        <h2>${t("addRelative")}</h2>
        <label>${t("name")}<input name="name" required placeholder="${t("personName")}" /></label>
        <label>${t("gender")}<select name="gender">
          ${["male", "female", "unknown"].map((item) => `<option value="${item}" ${gender === item ? "selected" : ""}>${t(item)}</option>`).join("")}
        </select></label>
        <label>${t("birthDate")}<input name="birthDate" /></label>
        <label>${t("deathDate")}<input name="deathDate" /></label>
        <label>${t("notes")}<textarea name="notes"></textarea></label>
        <label>${t("photo")}<input name="photo" type="file" accept="image/*" /></label>
        ${
          showParentFields
            ? `<label>${t("secondParent")}<select name="secondParentId" data-selected-parent="${selected?.id || ""}">
                <option value="">${t("unknownParent")}</option>
                ${secondParentOptions}
              </select></label>
              <label class="checkbox-row create-spouse-row ${defaultSecondParent || !selected ? "hidden" : ""}">
                <input name="createSpouse" type="checkbox" />
                <span>${t("alsoCreateSpouse")}</span>
              </label>`
            : ""
        }
        <div class="modal-actions">
          <button type="button" data-action="cancel-add">${t("cancel")}</button>
          <button class="primary" type="submit">${t("save")}</button>
        </div>
      </form>
    </div>
  `;
}

function dateLine(person) {
  const birth = person.birthDate || "";
  const death = person.deathDate || "";
  if (birth || death) return `${birth || "?"} - ${death || ""}`.trim();
  return "";
}

function highlightName(name, query) {
  if (!query.trim()) return escapeHtml(name);
  const idx = normalize(name).indexOf(normalize(query));
  if (idx < 0) return escapeHtml(name);
  const end = idx + query.length;
  return `${escapeHtml(name.slice(0, idx))}<mark>${escapeHtml(name.slice(idx, end))}</mark>${escapeHtml(name.slice(end))}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function bindEvents() {
  document.querySelector("#searchInput")?.addEventListener("input", (event) => {
    state.query = event.target.value;
    const matches = getMatches();
    state.highlightedIds = new Set(matches.map((person) => person.id));
    render({ focusSearch: true });
  });

  document.querySelector("#searchInput")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      focusMatches();
    }
  });

  document.querySelector(".search-focus")?.addEventListener("click", () => focusMatches());
  document.querySelectorAll(".search-result").forEach((button) => {
    button.addEventListener("click", () => selectPerson(button.dataset.id, true));
  });

  document.querySelectorAll("[data-person-id]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      selectPerson(button.dataset.personId);
    });
    button.addEventListener("pointerdown", (event) => {
      if (!state.editMode) return;
      event.stopPropagation();
      state.drag = { id: button.dataset.personId, sx: event.clientX, sy: event.clientY, px: byId(button.dataset.personId).x, py: byId(button.dataset.personId).y, moved: false, snapshotted: false };
      button.setPointerCapture(event.pointerId);
    });
  });

  document.querySelector(".tree-stage")?.addEventListener("pointerdown", (event) => {
    if (event.target.closest(".person-card")) return;
    state.lastPointer = { x: event.clientX, y: event.clientY };
  });

  document.addEventListener("pointermove", onPointerMove);
  document.addEventListener("pointerup", onPointerUp);

  document.querySelector(".tree-stage")?.addEventListener("wheel", (event) => {
    event.preventDefault();
    const stage = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - stage.left;
    const mouseY = event.clientY - stage.top;
    const nextScale = Math.min(1.8, Math.max(0.2, state.transform.scale * (event.deltaY > 0 ? 0.92 : 1.08)));
    const worldX = (mouseX - state.transform.x) / state.transform.scale;
    const worldY = (mouseY - state.transform.y) / state.transform.scale;
    state.transform.x = mouseX - worldX * nextScale;
    state.transform.y = mouseY - worldY * nextScale;
    state.transform.scale = nextScale;
    render();
  }, { passive: false });

  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => handleAction(button.dataset.action));
  });

  document.querySelector("#importFile")?.addEventListener("change", (event) => importJson(event.target.files[0]));
  document.querySelectorAll(".relation-link").forEach((button) => button.addEventListener("click", () => selectPerson(button.dataset.id, true)));
  document.querySelectorAll("[data-add-kind]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!state.editMode) return;
      state.addKind = button.dataset.addKind;
      state.showAdd = true;
      render();
    });
  });

  const form = document.querySelector(".person-form");
  if (form && state.editMode && selectedExists()) {
    form.addEventListener("change", (event) => {
      if (event.target.name === "photo") return;
      updatePerson(state.selectedId, { [event.target.name]: event.target.value });
    });
    form.photo?.addEventListener("change", (event) => {
      readPhoto(event.target.files[0], (url) => updatePerson(state.selectedId, { photoUrl: url }));
    });
  }

  document.querySelector(".password-modal")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const password = new FormData(event.currentTarget).get("password");
    if (password === PASSWORD) {
      state.editMode = true;
      state.showPassword = false;
      state.passwordInput = "";
      state.passwordError = "";
    } else {
      state.passwordInput = password;
      state.passwordError = t("wrongPassword");
    }
    render();
  });

  document.querySelector(".add-modal")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    const file = event.currentTarget.photo.files[0];
    if (file) {
      readPhoto(file, (url) => addRelative({ ...data, photoUrl: url }));
    } else {
      addRelative({ ...data, photoUrl: "" });
    }
  });

  document.querySelector(".add-modal select[name='secondParentId']")?.addEventListener("change", updateSecondParentControls);
  updateSecondParentControls();
}

function selectedExists() {
  return Boolean(byId(state.selectedId));
}

function updateSecondParentControls() {
  const select = document.querySelector(".add-modal select[name='secondParentId']");
  const row = document.querySelector(".create-spouse-row");
  if (!select || !row) return;
  const selectedParentId = select.dataset.selectedParent;
  const secondParentId = select.value;
  const shouldShow = Boolean(secondParentId && selectedParentId && !isSpousePair(selectedParentId, secondParentId));
  row.classList.toggle("hidden", !shouldShow);
  const checkbox = row.querySelector("input");
  if (checkbox && !shouldShow) checkbox.checked = false;
}

function onPointerMove(event) {
  if (state.drag) {
    const person = byId(state.drag.id);
    if (!person) return;
    if (!state.drag.snapshotted) {
      snapshot();
      state.drag.snapshotted = true;
    }
    const dx = (event.clientX - state.drag.sx) / state.transform.scale;
    const dy = (event.clientY - state.drag.sy) / state.transform.scale;
    person.x = state.drag.px + dx;
    person.y = state.drag.py + dy;
    state.drag.moved = true;
    document.querySelector(`[data-person-id="${state.drag.id}"]`)?.style.setProperty("left", `${person.x}px`);
    document.querySelector(`[data-person-id="${state.drag.id}"]`)?.style.setProperty("top", `${person.y}px`);
    renderConnectorsLive();
    return;
  }
  if (state.lastPointer) {
    state.transform.x += event.clientX - state.lastPointer.x;
    state.transform.y += event.clientY - state.lastPointer.y;
    state.lastPointer = { x: event.clientX, y: event.clientY };
    document.querySelector(".tree-canvas").style.transform = `translate(${state.transform.x}px, ${state.transform.y}px) scale(${state.transform.scale})`;
  }
}

function onPointerUp() {
  if (state.drag?.moved) persist();
  state.drag = null;
  state.lastPointer = null;
}

function renderConnectorsLive() {
  const svg = document.querySelector(".connectors");
  if (!svg) return;
  svg.outerHTML = renderConnectors();
}

function handleAction(action) {
  switch (action) {
    case "zoom-in":
      state.transform.scale = Math.min(1.8, state.transform.scale * 1.12);
      break;
    case "zoom-out":
      state.transform.scale = Math.max(0.2, state.transform.scale / 1.12);
      break;
    case "fit":
      fitToPeople(state.data.people);
      break;
    case "reset":
      state.transform = { x: 160, y: 120, scale: 0.62 };
      break;
    case "undo":
      if (state.history.length) {
        state.future.push(JSON.stringify(state.data));
        restore(state.history.pop());
        return;
      }
      break;
    case "redo":
      if (state.future.length) {
        state.history.push(JSON.stringify(state.data));
        restore(state.future.pop());
        return;
      }
      break;
    case "export":
      exportJson();
      break;
    case "language":
      state.language = state.language === "en" ? "tr" : "en";
      break;
    case "mode":
      if (state.editMode) state.editMode = false;
      else state.showPassword = true;
      break;
    case "cancel-password":
      state.showPassword = false;
      state.passwordInput = "";
      state.passwordError = "";
      break;
    case "cancel-add":
      state.showAdd = false;
      break;
    case "delete":
      deleteSelected();
      return;
  }
  render();
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    state.showPassword = false;
    state.showAdd = false;
    state.query = "";
    state.highlightedIds = new Set(state.selectedId ? [state.selectedId] : []);
    render();
  }
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "z") {
    event.preventDefault();
    handleAction(event.shiftKey ? "redo" : "undo");
  }
});

render();
window.requestAnimationFrame(() => fitToPeople(state.data.people));
window.requestAnimationFrame(render);

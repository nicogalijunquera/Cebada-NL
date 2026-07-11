/**
 * MOTOR DE RENDERIZADO
 * ---------------------
 * Lee el objeto CONTENT (definido en content.js) y construye
 * la página. No necesitas editar este archivo cada semana:
 * solo content.js.
 *
 * Cada sección puede tener:
 *  - items + figures directamente (formato simple), o
 *  - topics: [ {name, items, figures}, ... ] para dar mayor
 *    profundidad de análisis agrupado por tema
 *    (ej. Defensa / Inteligencia Artificial / Energía).
 */

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function renderTicker(items) {
  const track = document.getElementById("ticker-track");
  const doubled = items.concat(items);
  track.innerHTML = doubled.map((t) => `<span>${t}</span>`).join("");
}

function renderMasthead(content) {
  document.getElementById("meta-edition").textContent = `Edición ${content.edition}`;
  document.getElementById("meta-date").textContent = content.date;
}

function renderHero(content) {
  document.getElementById("hero-dateline").textContent = content.dateline;
  document.getElementById("hero-headline").textContent = content.headline;
  document.getElementById("hero-summary").textContent = content.summary;
}

function renderFigure(fig) {
  const figure = el("figure", "figure");
  const img = el("img");
  img.src = fig.src;
  img.alt = fig.caption;
  img.loading = "lazy";
  const caption = el("figcaption", null, fig.caption);
  const source = el("span", "item__source", fig.source);
  caption.appendChild(document.createElement("br"));
  caption.appendChild(source);
  figure.appendChild(img);
  figure.appendChild(caption);
  return figure;
}

function renderItems(container, items) {
  items.forEach((item) => {
    const itemEl = el("div", "item");
    itemEl.appendChild(el("h3", "item__heading", item.heading));
    itemEl.appendChild(el("p", "item__body", item.body));
    itemEl.appendChild(el("p", "item__source", item.source));
    container.appendChild(itemEl);
  });
}

function renderFigures(container, figures) {
  if (!figures || !figures.length) return;
  const figuresWrap = el("div", "figures");
  figures.forEach((fig) => figuresWrap.appendChild(renderFigure(fig)));
  container.appendChild(figuresWrap);
}

function renderTopic(topic) {
  const wrap = el("div", "topic");
  const header = el("div", "topic__header");
  header.appendChild(el("span", "topic__label", topic.label || "ANÁLISIS"));
  header.appendChild(el("h3", "topic__title", topic.name));
  wrap.appendChild(header);
  renderItems(wrap, topic.items);
  renderFigures(wrap, topic.figures);
  return wrap;
}

function renderSection(section) {
  const wrap = el("section", "section");
  wrap.id = section.id;

  const header = el("div", "section__header");
  header.appendChild(el("h2", "section__title", section.title));
  header.appendChild(el("span", "section__dateline", section.dateline));
  wrap.appendChild(header);

  if (section.topics && section.topics.length) {
    section.topics.forEach((topic) => wrap.appendChild(renderTopic(topic)));
  } else {
    renderItems(wrap, section.items || []);
    renderFigures(wrap, section.figures);
  }

  return wrap;
}

function renderSections(content) {
  const container = document.getElementById("sections-container");
  content.sections.forEach((section) => {
    container.appendChild(renderSection(section));
  });
}

function renderFooter(content) {
  const el2 = document.getElementById("footer-sources");
  el2.textContent = "Fuentes generales: " + content.generalSources.join(" · ");
}

function init() {
  renderTicker(CONTENT.ticker);
  renderMasthead(CONTENT);
  renderHero(CONTENT);
  renderSections(CONTENT);
  renderFooter(CONTENT);
}

document.addEventListener("DOMContentLoaded", init);

const projects = [
  {
    title: "Medical Large Language Models",
    meta: "Core Research",
    description:
      "Research on medical large language models with a focus on clinically useful reasoning, strong task alignment, and practical deployment value.",
    linkText: "GitHub",
    linkUrl: "https://github.com/dsw-jlu-rgzn",
    tags: ["Medical LLMs", "Clinical AI", "Reasoning"],
  },
  {
    title: "Clinical Data Reasoning",
    meta: "Technical Direction",
    description:
      "Exploring how models can understand longitudinal records, connect evidence across time, and generate more reliable medical decisions.",
    linkText: "Contact Me",
    linkUrl: "mailto:dsw1002887134@163.com",
    tags: ["EHR", "Longitudinal Records", "Decision Support"],
  },
  {
    title: "Reliable Evaluation",
    meta: "Evaluation",
    description:
      "Building evaluation and benchmarking workflows that better reflect the requirements of high-stakes medical AI applications.",
    linkText: "GitHub Profile",
    linkUrl: "https://github.com/dsw-jlu-rgzn",
    tags: ["Benchmarks", "Trustworthiness", "Reproducibility"],
  },
];

const writings = [
  {
    date: "2023",
    title: "Semantic-Context Graph Network for Point-Based 3D Object Detection",
    description:
      "A published paper on point-based 3D object detection, showing my earlier research background in structured perception and geometric reasoning.",
    url: "https://ieeexplore.ieee.org/abstract/document/10111028",
    linkText: "Read Paper",
  },
  {
    date: "2026",
    title: "GitHub Profile",
    description:
      "My public code, experiments, and future project repositories are organized here.",
    url: "https://github.com/dsw-jlu-rgzn",
    linkText: "Visit",
  },
  {
    date: "2024-2026",
    title: "Current Research Focus",
    description:
      "My current work centers on medical large models, clinical reasoning, and dependable evaluation for real healthcare settings.",
    url: "#projects",
    linkText: "Explore",
  },
];

const stats = [
  { number: "2", label: "Years of experience at Momenta" },
  { number: "2", label: "Degrees completed at Jilin University" },
  { number: "1", label: "Main research focus: medical large models" },
];

const contacts = [
  { label: "Email", url: "mailto:dsw1002887134@163.com" },
  { label: "GitHub", url: "https://github.com/dsw-jlu-rgzn" },
  { label: "About Me", url: "#about" },
  { label: "Research", url: "#projects" },
];

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function applyLinkBehavior(link, url) {
  link.href = url;

  if (url.startsWith("http")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
}

function renderProjects() {
  const grid = document.getElementById("project-grid");

  projects.forEach((project, index) => {
    const card = el("article", `project-card reveal delay-${index % 4}`);
    card.append(el("p", "project-meta", project.meta));
    card.append(el("h3", "", project.title));
    card.append(el("p", "", project.description));

    const tags = el("ul", "project-tags");
    project.tags.forEach((tag) => {
      tags.append(el("li", "", tag));
    });
    card.append(tags);

    const link = el("a", "project-link", project.linkText);
    applyLinkBehavior(link, project.linkUrl);
    card.append(link);

    grid.append(card);
  });
}

function renderWriting() {
  const list = document.getElementById("writing-list");

  writings.forEach((item, index) => {
    const row = el("article", `writing-item reveal delay-${index % 4}`);
    row.append(el("div", "writing-date", item.date));

    const copy = el("div", "writing-copy");
    copy.append(el("h3", "", item.title));
    copy.append(el("p", "", item.description));
    row.append(copy);

    const link = el("a", "writing-link", item.linkText);
    applyLinkBehavior(link, item.url);
    row.append(link);

    list.append(row);
  });
}

function renderStats() {
  const grid = document.getElementById("stats-grid");

  stats.forEach((item, index) => {
    const card = el("div", `stat-card reveal delay-${index % 4}`);
    card.append(el("div", "stat-number", item.number));
    card.append(el("div", "stat-label", item.label));
    grid.append(card);
  });
}

function renderContacts() {
  const wrap = document.getElementById("contact-links");

  contacts.forEach((item, index) => {
    const link = el("a", `contact-chip reveal delay-${index % 4}`, item.label);
    applyLinkBehavior(link, item.url);
    wrap.append(link);
  });
}

renderProjects();
renderWriting();
renderStats();
renderContacts();

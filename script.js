// ============== Project case study data ==============
const projects = {
  intel: {
    meta: "CASE STUDY · 001 / CAPSTONE",
    title: "Intel A2A Customs Data Validation",
    subtitle: "Automating regression-style data quality checks for Intel's enterprise logistics pipeline.",
    sections: [
      {
        label: "Context",
        type: "p",
        content: "Intel's logistics operation runs through DHL, which produces Power BI reports tracking customs data across regions. The challenge: broker-supplied data and DHL's own reports often diverged in subtle ways — wrong column mappings, missing fields, drifted KPI calculations. Catching these manually was slow, error-prone, and ate up engineering time."
      },
      {
        label: "What I built",
        type: "p",
        content: "A Python-based automation system that ingests both broker exports and DHL Power BI reports, validates them against a defined schema, performs column-mapping reconciliation, and surfaces discrepancies before they propagate downstream. Integrates with Microsoft 365 (SharePoint, Outlook) for enterprise-scale reporting and notifications."
      },
      {
        label: "My role",
        type: "ul",
        content: [
          "Backend developer & data engineer on a small capstone team",
          "Designed and implemented Python validation workflows (pandas, openpyxl)",
          "Built column mapping and schema validation logic",
          "Collaborated on Power BI dashboards for KPI monitoring"
        ]
      },
      {
        label: "Impact",
        type: "ul",
        content: [
          "Reduced manual validation workload by ~95%",
          "Improved KPI accuracy across enterprise reporting",
          "Demonstrated end-to-end Microsoft 365 integration for real client use"
        ]
      },
      {
        label: "What I'd improve",
        type: "p",
        content: "Process speed and scalability are the obvious next frontier — the current pipeline is fine for one region's data, but truly multi-region broker pipelines would need parallelism and a more robust scheduling layer. Adding automated reconciliation reports as a recurring artifact would also reduce the human-in-the-loop further."
      },
      { label: "Stack", type: "stack", content: ["Python", "pandas", "openpyxl", "Power BI", "SharePoint", "Outlook Auto"] }
    ]
  },
  smartlib: {
    meta: "CASE STUDY · 002 / SOLO",
    title: "Smart Library",
    subtitle: "A full-stack library platform exploring hybrid SQL + NoSQL architecture.",
    sections: [
      {
        label: "Context",
        type: "p",
        content: "Built as a solo project to push my full-stack skills further than coursework allowed. The goal: design something that real users (a small library) could plausibly run, then make architectural choices that would actually matter at any kind of scale."
      },
      {
        label: "What I built",
        type: "p",
        content: "A digital library system where users can browse, borrow, and review books, and admins can manage inventory, users, and reports. The interesting choice was the data layer: MySQL handles relational concerns (users, loans, foreign keys for consistency), while MongoDB stores unstructured analytics events and review data. JWT-based auth, indexed search, and admin dashboards round it out."
      },
      {
        label: "My role",
        type: "ul",
        content: [
          "Full-stack developer (solo)",
          "Designed relational schema in MySQL with FK constraints for data integrity",
          "Layered MongoDB for unstructured/analytics workloads",
          "Built backend APIs in Node.js / Express",
          "Built React frontend with auth-aware routing",
          "Optimized search and reporting queries with indexes and partitioning"
        ]
      },
      {
        label: "Impact",
        type: "ul",
        content: [
          "Delivered a fully functional system with checkouts, reviews, and admin reports",
          "Demonstrated noticeable response-time gains via indexes and partitioning",
          "Explored hybrid SQL/NoSQL trade-offs in a single codebase"
        ]
      },
      {
        label: "What I'd improve",
        type: "p",
        content: "Shipping it. Adding late-return notifications and fine calculation, deploying to a cloud provider for real availability, and instrumenting it with observability so I could actually reason about query performance under load instead of inferring it from local benchmarks."
      },
      { label: "Stack", type: "stack", content: ["React", "Node.js", "Express", "MySQL", "MongoDB", "JWT", "Git"] }
    ]
  },
  vending: {
    meta: "CASE STUDY · 003 / GROUP",
    title: "Functional Vending Machine",
    subtitle: "Transaction logic and edge-case handling in C++.",
    sections: [
      {
        label: "Context",
        type: "p",
        content: "An early university group project — implement a vending machine with full transaction support, including a banking subsystem for payments and refunds. Constrained to C++ with custom data structures, no library shortcuts."
      },
      {
        label: "What I built",
        type: "p",
        content: "Core transaction logic for item selection, payment handling, and refund processing. Implemented a custom linked-list-backed data store with node operations for inventory tracking and transaction history."
      },
      {
        label: "My role",
        type: "ul",
        content: [
          "Backend developer on a 4-person team",
          "Owned the linked-list data structure and its node operations",
          "Implemented banking logic for payments and refunds",
          "Iterated on input validation and error handling per instructor feedback"
        ]
      },
      {
        label: "What it taught me",
        type: "p",
        content: "Two things stuck. First — defensive coding instincts that I still apply: validating against a known set of inputs is more robust than rejecting after the fact. Second — modular design pays dividends: when feedback flagged the refund logic, the cost of reworking it would have been much lower if I'd structured it more cleanly to start. That lesson directly shaped how I approach code structure now."
      },
      { label: "Stack", type: "stack", content: ["C++", "Linked Lists", "OOP"] }
    ]
  }
};

// ============== Modal control ==============
const backdrop = document.getElementById('modalBackdrop');
const modalMeta = document.getElementById('modalMeta');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function openProject(key) {
  const p = projects[key];
  if (!p) return;
  modalMeta.textContent = p.meta;
  modalTitle.textContent = p.title;
  modalSubtitle.textContent = p.subtitle;
  modalBody.innerHTML = p.sections.map(s => {
    let html = `<div class="modal-section"><div class="label">${s.label}</div>`;
    if (s.type === 'p') {
      html += `<p>${s.content}</p>`;
    } else if (s.type === 'ul') {
      html += `<ul>${s.content.map(item => `<li>${item}</li>`).join('')}</ul>`;
    } else if (s.type === 'stack') {
      html += `<div class="modal-stack-grid">${s.content.map(t => `<span>${t}</span>`).join('')}</div>`;
    }
    html += `</div>`;
    return html;
  }).join('');
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeProject() {
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
}
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => openProject(card.dataset.project));
});
modalClose.addEventListener('click', closeProject);
backdrop.addEventListener('click', e => { if (e.target === backdrop) closeProject(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeProject(); });

// ============== Scroll-triggered reveals ==============
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ============== Nav background on scroll ==============
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ============== Cursor glow (desktop only) ==============
const glow = document.getElementById('cursorGlow');
if (window.matchMedia('(pointer: fine)').matches) {
  let raf;
  document.addEventListener('mousemove', e => {
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
      glow.style.opacity = '1';
    });
  });
  document.addEventListener('mouseleave', () => glow.style.opacity = '0');
}

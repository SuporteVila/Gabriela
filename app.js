(function () {
  // Link ativo no menu
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(a => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });

  // Transição suave ao navegar
  const page = document.querySelector(".page");
  document.querySelectorAll('a[data-nav="true"]').forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("http")) return;

      e.preventDefault();
      if (page) page.classList.add("is-exiting");
      setTimeout(() => window.location.href = href, 220);
    });
  });

  // PDF
  const pdfBtn = document.getElementById("btnPdf");
  if (pdfBtn) pdfBtn.addEventListener("click", () => window.print());

  // Ano
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // WhatsApp (editar o número)
  const wa = document.querySelectorAll("[data-wa]");
  wa.forEach(btn => {
    btn.addEventListener("click", () => {
      const phone = btn.getAttribute("data-phone") || "55SEUNUMEROAQUI";
      const text = encodeURIComponent(btn.getAttribute("data-text") || "Olá, gostaria de agendar um atendimento.");
      window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
    });
  });
})();

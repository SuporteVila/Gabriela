// Marcar menu ativo
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path) a.classList.add('active');
  });
})();

// Transição suave entre páginas
(function(){
  const root = document.documentElement;
  document.querySelectorAll('a[data-nav="true"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const url = a.getAttribute('href');
      if(!url || url.startsWith('http') || url.startsWith('#')) return;
      e.preventDefault();
      document.body.classList.add('fade-out');
      setTimeout(()=>{ window.location.href = url; }, 180);
    });
  });

  window.addEventListener('pageshow', ()=>{
    document.body.classList.remove('fade-out');
    document.body.classList.add('fade-in');
    setTimeout(()=>document.body.classList.remove('fade-in'), 250);
  });
})();

// PDF
function salvarPDF(){
  window.print();
}

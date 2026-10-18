document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const nav=document.querySelector('.nav .wrap');
const links=document.querySelector('.links');
if(nav&&links){
  let button=document.querySelector('.mobile-menu');
  if(!button){
    button=document.createElement('button');
    button.className='mobile-menu';
    button.type='button';
    button.textContent='Menu';
    button.setAttribute('aria-label','Ouvrir le menu');
    nav.insertBefore(button,links);
  }
  button.setAttribute('aria-expanded','false');
  const closeMenu=()=>{
    links.classList.remove('open');
    button.textContent='Menu';
    button.setAttribute('aria-expanded','false');
  };
  button.addEventListener('click',()=>{
    const isOpen=links.classList.toggle('open');
    button.textContent=isOpen?'Fermer':'Menu';
    button.setAttribute('aria-expanded',String(isOpen));
  });
  const current=location.pathname.split('/').pop()||'index.html';
  links.querySelectorAll('a').forEach(link=>{
    const target=(link.getAttribute('href')||'').split('#')[0];
    if(target===current) link.setAttribute('aria-current','page');
    link.addEventListener('click',closeMenu);
  });
  document.addEventListener('click',event=>{
    if(!nav.contains(event.target)) closeMenu();
  });
}

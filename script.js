(function(){
  var root=document.documentElement;
  root.classList.add('js');
  // mobile menu
  var btn=document.querySelector('.menu-btn'),links=document.getElementById('nav-links');
  function setMenu(open){links.classList.toggle('open',open);btn.setAttribute('aria-expanded',open);btn.setAttribute('aria-label',open?'Close menu':'Open menu');}
  btn.addEventListener('click',function(){setMenu(!links.classList.contains('open'));});
  links.addEventListener('click',function(e){if(e.target.tagName==='A')setMenu(false);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false);});
  // nav shadow on scroll
  var nav=document.querySelector('.nav');
  function onScroll(){nav.classList.toggle('scrolled',window.scrollY>10);}
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  // fade-in reveal
  var els=document.querySelectorAll('.reveal');
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!reduce&&'IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});
    },{threshold:.1,rootMargin:'0px 0px -40px 0px'});
    els.forEach(function(el){io.observe(el);});
  }else{els.forEach(function(el){el.classList.add('in');});}
  // active nav link
  var navA=document.querySelectorAll('.nav-links a');
  if('IntersectionObserver' in window){
    var so=new IntersectionObserver(function(entries){
      entries.forEach(function(en){if(en.isIntersecting){navA.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+en.target.id);});}});
    },{rootMargin:'-45% 0px -50% 0px'});
    navA.forEach(function(a){var s=document.querySelector(a.getAttribute('href'));if(s)so.observe(s);});
  }
  var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
})();

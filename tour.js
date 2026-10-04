const menu=document.querySelector('.menu');
const nav=document.querySelector('#nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
nav?.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')});
document.querySelector('#year').textContent=new Date().getFullYear();
const credits=document.querySelector('#credits-dialog');
document.querySelector('#credits-button')?.addEventListener('click',()=>credits.showModal());
document.querySelectorAll('.dialog-close').forEach(button=>button.addEventListener('click',()=>button.closest('dialog').close()));
credits?.addEventListener('click',event=>{if(event.target===credits){const r=credits.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)credits.close()}});

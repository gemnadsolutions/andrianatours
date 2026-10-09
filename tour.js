const menu=document.querySelector('.menu');
const nav=document.querySelector('#nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
nav?.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')});
document.querySelector('#year').textContent=new Date().getFullYear();
const credits=document.querySelector('#credits-dialog');
document.querySelector('#credits-button')?.addEventListener('click',()=>credits.showModal());
document.querySelectorAll('.dialog-close').forEach(button=>button.addEventListener('click',()=>button.closest('dialog').close()));
credits?.addEventListener('click',event=>{if(event.target===credits){const r=credits.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)credits.close()}});

const hero=document.querySelector('.tour-hero');
const heroImage=hero?.querySelector(':scope > img');
const placeImages=[...document.querySelectorAll('.place-card img')];
if(hero&&heroImage){
  const gallery=document.createElement('div');
  gallery.className='tour-hero-gallery';
  gallery.setAttribute('aria-label','Journey highlights');
  const sources=[heroImage,...placeImages.filter(image=>image.src!==heroImage.src).slice(0,2)];
  sources.forEach((source,index)=>{
    const image=source.cloneNode();
    image.loading=index===0?'eager':'lazy';
    image.alt=index===0?source.alt:'';
    if(index>0)image.setAttribute('aria-hidden','true');
    gallery.append(image);
  });
  heroImage.replaceWith(gallery);
}

const itinerary=document.querySelector('.itinerary');
const days=[...document.querySelectorAll('.itinerary-day')];
if(itinerary&&days.length){
  const overview=document.createElement('section');
  overview.className='tour-overview';
  overview.setAttribute('aria-labelledby','overview-title');
  const heading=document.createElement('div');
  heading.className='overview-heading';
  heading.innerHTML='<p class="eyebrow gold">AT A GLANCE</p><h2 id="overview-title">Trip <em>overview.</em></h2><p>Follow the journey day by day. Every stop can be adjusted around you.</p>';
  const grid=document.createElement('div');
  grid.className='overview-grid';
  days.forEach((day,index)=>{
    day.id=`day-${index+1}`;
    const link=document.createElement('a');
    link.className='overview-card';
    link.href=`#${day.id}`;
    const photo=day.querySelector('.day-photos img');
    if(photo){
      const image=photo.cloneNode();
      image.alt='';
      image.loading='lazy';
      image.setAttribute('aria-hidden','true');
      link.append(image);
    }
    const label=document.createElement('span');
    label.innerHTML=`<small>DAY ${String(index+1).padStart(2,'0')}</small><strong>${day.querySelector('.day-number strong')?.textContent||''}</strong>`;
    link.append(label);
    grid.append(link);
  });
  overview.append(heading,grid);
  itinerary.before(overview);
}

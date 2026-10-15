'use strict';
const movies=[
{id:'hello',title:'Lời chào thân thiện',date:'2026-10-15T09:00:00',type:'local',file:'media/hello.mp4',poster:'media/hello.jpg',description:'Hai người bạn gặp nhau. Clip 8 giây, chữ tiếng Việt, chưa có thuyết minh.'},
{id:'nature',title:'Cùng bảo vệ cây xanh',date:'2026-10-14T09:00:00',type:'local',file:'media/nature.mp4',poster:'media/nature.jpg',description:'Cùng chăm sóc cây xanh. Clip 8 giây, chữ tiếng Việt, chưa có thuyết minh.'},
{id:'sharing',title:'Niềm vui sẻ chia',date:'2026-10-13T09:00:00',type:'local',file:'media/sharing.mp4',poster:'media/sharing.jpg',description:'Chia sẻ đồ chơi với bạn. Clip 8 giây, chữ tiếng Việt, chưa có thuyết minh.'},
{id:'bunny',title:'Big Buck Bunny — tham khảo YouTube',date:'2026-10-12T09:00:00',type:'youtube',youtubeId:'aqz-KE-bpKQ',poster:'media/hello.jpg',description:'Video tham khảo của Blender Foundation, không phải bản thuyết minh Việt. Ảnh thẻ là minh họa tự dựng. Video ngoài có thể có quảng cáo; không bảo đảm mức phân giải tối đa 1080p.'}
];
const player=document.getElementById('player'),youtube=document.getElementById('youtube');
const search=document.getElementById('search'),sort=document.getElementById('sort');
let current='hello',views={};
try{views=JSON.parse(localStorage.getItem('cartoon-demo-views')||'{}')||{};}catch(e){views={};}
function count(id){return Number.isFinite(views[id])?views[id]:0;}
function normalize(s){return s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').toLowerCase();}
function render(){
 const list=document.getElementById('video-list');list.replaceChildren();
 const filtered=movies.filter(m=>normalize(m.title).includes(normalize(search.value.trim())));
 filtered.sort(sort.value==='views'?(a,b)=>count(b.id)-count(a.id)||b.date.localeCompare(a.date):(a,b)=>b.date.localeCompare(a.date));
 document.getElementById('empty').hidden=filtered.length!==0;
 filtered.forEach(m=>{
  const button=document.createElement('button');button.type='button';button.className='film';button.setAttribute('aria-pressed',String(m.id===current));
  const image=document.createElement('img');image.src=m.poster;image.alt='';image.loading='lazy';
  const title=document.createElement('strong');title.textContent=m.title;
  const meta=document.createElement('small');meta.textContent=(m.type==='local'?'720p · Chữ tiếng Việt':'YouTube · Video tham khảo')+' · '+count(m.id)+' lượt mở';
  button.append(image,title,meta);button.addEventListener('click',()=>select(m.id,true));list.append(button);
 });
}
function select(id,increment){
 const m=movies.find(m=>m.id===id);if(!m)return;
 current=id;player.pause();document.getElementById('play-error').hidden=true;
 if(increment){views[id]=count(id)+1;try{localStorage.setItem('cartoon-demo-views',JSON.stringify(views));}catch(e){}}
 player.hidden=m.type!=='local';youtube.hidden=m.type!=='youtube';
 youtube.removeAttribute('src');
 if(m.type==='local'){player.src=m.file;player.poster=m.poster;player.load();}
 else{player.removeAttribute('src');player.querySelectorAll('source').forEach(s=>s.remove());player.load();youtube.src='https://www.youtube-nocookie.com/embed/'+m.youtubeId;}
 document.getElementById('video-title').textContent=m.title;
 document.getElementById('video-description').textContent=m.description;
 document.getElementById('video-meta').textContent='Cập nhật thư viện: '+new Date(m.date).toLocaleDateString('vi-VN')+' · '+count(id)+' lượt mở trên máy này';
 const external=document.getElementById('external-link');external.hidden=m.type!=='youtube';
 if(m.type==='youtube')external.href='https://www.youtube.com/watch?v='+m.youtubeId;
 render();
}
search.addEventListener('input',render);sort.addEventListener('change',render);
player.addEventListener('error',()=>{if(current!=='bunny')document.getElementById('play-error').hidden=false;});
select('hello',false);

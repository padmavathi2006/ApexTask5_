const PRODUCTS = [
  {id:1,  n:"Classic Oxford Shirt",       c:"men",        p:1299, o:1799, r:4.8, rv:128, e:"👔", t:"sale",     d:"Premium 100% cotton Oxford shirt with modern slim fit. Machine washable, wrinkle-resistant, available in 6 colours."},
  {id:2,  n:"Floral Maxi Dress",          c:"women",      p:1799, o:2499, r:4.9, rv:204, e:"👗", t:"trending", d:"Lightweight floral maxi dress in breathable georgette fabric. Flattering empire waist with hidden pockets."},
  {id:3,  n:"Leather Crossbody Bag",      c:"accessories",p:2499, o:3499, r:4.7, rv:89,  e:"👜", t:"new",      d:"Premium PU leather crossbody with multi-compartments, adjustable strap and gold-tone hardware."},
  {id:4,  n:"Running Sneakers Pro",       c:"shoes",      p:3299, o:4499, r:4.6, rv:156, e:"👟", t:"sale",     d:"High-performance running sneakers with responsive cushioning, breathable mesh upper and non-slip outsole."},
  {id:5,  n:"Premium Denim Jacket",       c:"men",        p:2199, o:2999, r:4.5, rv:93,  e:"🧥", t:"new",      d:"Classic indigo denim jacket with modern slim cut, real copper rivets, and double chest pockets."},
  {id:6,  n:"Silk Blouse — Ivory",        c:"women",      p:1899, o:2499, r:4.8, rv:176, e:"👚", t:"trending", d:"Luxury silk-feel blouse with relaxed drape and satin finish. Perfect for office or evening wear."},
  {id:7,  n:"Aviator Sunglasses",         c:"accessories",p:899,  o:1299, r:4.7, rv:312, e:"🕶️",t:"sale",     d:"UV400 polarised aviator sunglasses with gold metal frame and mirrored gradient lenses."},
  {id:8,  n:"Chelsea Leather Boots",      c:"shoes",      p:4299, o:5999, r:4.9, rv:67,  e:"🥾", t:"new",      d:"Hand-stitched Chelsea boots in full-grain leather. Elastic gore panels, rubber heel cap, 4cm block heel."},
  {id:9,  n:"Linen Trousers — Sand",      c:"men",        p:1499, o:1999, r:4.6, rv:144, e:"👖", t:"sale",     d:"Stone-washed linen trousers with relaxed wide-leg fit. Drawstring waist, deep side pockets."},
  {id:10, n:"Palazzo Pants — Rose",       c:"women",      p:1299, o:1799, r:4.5, rv:98,  e:"👘", t:"new",      d:"Flowy palazzo pants in dusty rose crinkle fabric. Elastic waistband, ankle-length, ultra-comfortable."},
  {id:11, n:"Gold Chronograph Watch",     c:"accessories",p:6499, o:8999, r:4.9, rv:55,  e:"⌚", t:"premium",  d:"Swiss-movement inspired chronograph watch. Gold-plated stainless case, brown leather strap, 50m water-resistant."},
  {id:12, n:"Block-Heel Sandals",         c:"shoes",      p:1999, o:2799, r:4.7, rv:121, e:"👡", t:"sale",     d:"Elegant block-heel sandals in nude patent leather. Cushioned footbed, adjustable ankle strap, 5cm heel."},
  {id:13, n:"Kurta Set — Royal Blue",     c:"ethnic",     p:1899, o:2599, r:4.8, rv:210, e:"🥻", t:"trending", d:"Pure cotton hand block-printed kurta with matching straight-cut pyjama and gold zari border detailing."},
  {id:14, n:"Anarkali Suit — Crimson",    c:"ethnic",     p:2999, o:4199, r:4.7, rv:134, e:"👸", t:"sale",     d:"Embroidered georgette Anarkali with sequin work neckline, flared skirt, and contrast dupatta."},
  {id:15, n:"Gym Tee — Moisture Wicking", c:"sports",     p:799,  o:1199, r:4.5, rv:289, e:"🏋️",t:"new",      d:"Advanced moisture-wicking performance tee with 4-way stretch and anti-odor Silverite technology."},
  {id:16, n:"High-Waist Yoga Pants",      c:"sports",     p:1299, o:1899, r:4.7, rv:198, e:"🧘", t:"trending", d:"Squat-proof high-waist leggings with hidden phone pocket, 4-way stretch, and flat seam construction."},
  {id:17, n:"Oversized Hoodie — Mocha",   c:"men",        p:1999, o:2799, r:4.6, rv:167, e:"🧤", t:"new",      d:"400gsm ultra-soft French terry hoodie. Oversized fit, kangaroo pocket, ribbed cuffs and hem."},
  {id:18, n:"Co-Ord Set — Terracotta",    c:"women",      p:2299, o:3199, r:4.9, rv:87,  e:"🩱", t:"premium",  d:"Linen-blend matching co-ord set with cropped top and wide-leg trousers. Summer-ready and on-trend."},
  {id:19, n:"RFID Slim Wallet",           c:"accessories",p:999,  o:1499, r:4.8, rv:445, e:"👝", t:"sale",     d:"Full-grain leather bifold wallet with RFID blocking, 8 card slots, centre note compartment."},
  {id:20, n:"Trail Running Shoes",        c:"shoes",      p:3799, o:5199, r:4.8, rv:178, e:"👟", t:"sale",     d:"All-terrain trail runners with Vibram outsole, waterproof membrane, and OrthoLite insole."},
  {id:21, n:"Sherwani — Ivory Gold",      c:"ethnic",     p:7999, o:11999,r:4.9, rv:31,  e:"🤵", t:"premium",  d:"Royal ivory sherwani with hand-embroidered gold thread work. Includes churidar, nehru jacket and pocket square."},
  {id:22, n:"Compression Shorts",         c:"sports",     p:899,  o:1299, r:4.5, rv:156, e:"🩲", t:"new",      d:"Pro-grade compression shorts with flat-lock seams, 4-way stretch and quick-dry fabric."},
  {id:23, n:"Pure Cashmere Scarf",        c:"accessories",p:3499, o:4999, r:4.9, rv:62,  e:"🧣", t:"premium",  d:"Grade-A Mongolian cashmere scarf in classic herringbone weave. Feather-soft, super warm."},
  {id:24, n:"High-Top Canvas Sneakers",   c:"shoes",      p:1799, o:2399, r:4.7, rv:203, e:"👟", t:"new",      d:"Retro high-top canvas sneakers with vulcanised rubber sole and metal lace eyelets. 12 colour options."},
  {id:25, n:"Lehenga Choli — Fuchsia",    c:"ethnic",     p:4999, o:6999, r:4.8, rv:76,  e:"💃", t:"premium",  d:"Silk lehenga with heavy zari embroidery, mirror work blouse and contrast chiffon dupatta. Wedding-ready."},
  {id:26, n:"Running Jacket — Storm",     c:"sports",     p:2499, o:3499, r:4.6, rv:112, e:"🏃", t:"sale",     d:"Windproof and water-resistant running jacket with reflective strips, packable hood, and mesh lining."},
  {id:27, n:"Wrap Midi Skirt",            c:"women",      p:1199, o:1699, r:4.5, rv:143, e:"👒", t:"sale",     d:"Fluid satin wrap skirt in warm ivory. Midi length, asymmetric hem, adjustable tie waist."},
  {id:28, n:"Formal Blazer — Navy",       c:"men",        p:3999, o:5499, r:4.8, rv:89,  e:"🎩", t:"premium",  d:"Tailored single-breasted navy blazer. Notched lapels, 2-button closure, fully lined, functioning sleeve buttons."},
  {id:29, n:"Diamond-Cut Drop Earrings",  c:"accessories",p:1499, o:2199, r:4.7, rv:234, e:"💎", t:"trending", d:"Sterling silver diamond-cut drop earrings with hypoallergenic posts. Comes in a luxury gift box."},
  {id:30, n:"Slip-On Suede Loafers",      c:"shoes",      p:2799, o:3799, r:4.7, rv:121, e:"👞", t:"sale",     d:"Premium suede slip-on loafers with memory foam insole and durable rubber outsole. Office-to-weekend style."},
  {id:31, n:"Batik Print Saree",          c:"ethnic",     p:3299, o:4599, r:4.8, rv:167, e:"🌺", t:"trending", d:"Handcrafted batik-print georgette saree in vibrant peacock colours. Unstitched blouse piece included."},
  {id:32, n:"Windbreaker Jacket",         c:"sports",     p:1799, o:2499, r:4.5, rv:88,  e:"🌬️",t:"new",      d:"Lightweight packable windbreaker with taped seams, raglan sleeves and bright reflective logo."},
  {id:33, n:"Off-Shoulder Crop Top",      c:"women",      p:899,  o:1299, r:4.6, rv:221, e:"👙", t:"trending", d:"Ribbed knit off-shoulder crop top with stretch fit and wide band hem. Pairs perfectly with high-waist bottoms."},
  {id:34, n:"Chinos — Olive Green",       c:"men",        p:1699, o:2299, r:4.6, rv:134, e:"🩳", t:"new",      d:"Slim-fit stretch chinos in military olive. Flat-front, slash pockets, and 2-button back welt pockets."},
  {id:35, n:"Beaded Clutch Bag",          c:"accessories",p:2199, o:3199, r:4.7, rv:56,  e:"👛", t:"premium",  d:"Hand-beaded satin clutch bag with gold chain strap. Evening essential with magnetic snap closure."},
  {id:36, n:"Kitten Heel Mules",          c:"shoes",      p:2299, o:3299, r:4.8, rv:98,  e:"👠", t:"new",      d:"Pointed-toe kitten heel mules in nude patent leather. 4.5cm heel, padded insole, slip-on design."},
];

// STATE
let cart     = JSON.parse(localStorage.getItem("lum_cart"))  || [];
let wishlist = new Set(JSON.parse(localStorage.getItem("lum_wish")) || []);
let filt     = {cats:new Set(["all"]), pMin:0, pMax:15000, rtg:0, tag:"all", q:""};
let sortMode = "default";
let viewMode = "grid";
let showN    = 9;
let filtered = [...PRODUCTS];
const STEP   = 9;

document.addEventListener("DOMContentLoaded",()=>{
  loader();
  cursor();
  nav();
  heroCounters();
  mobileMenu();
  search();
  priceRange();
  catCards();
  renderNew();
  renderProducts();
  bindCart();
  bindWish();
  modal();
  countdown();
  contactForm();
  revealObserver();
  btt();
  sortBind();
  compatBars();
  perfScores();
  updateBadges();
});

// ── LOADER ──
function loader(){
  const bar=document.getElementById("ldBar"),pct=document.getElementById("ldNum"),ld=document.getElementById("loader");
  // Sparkle particles
  const p=document.getElementById("ldParts");
  for(let i=0;i<20;i++){
    const d=document.createElement("div");
    d.className="ld-particle";
    d.style.cssText=`width:${Math.random()*6+2}px;height:${Math.random()*6+2}px;left:${Math.random()*100}%;top:${Math.random()*100}%;opacity:${Math.random()*.5};animation-delay:${Math.random()*3}s;animation-duration:${Math.random()*2+2}s`;
    p.appendChild(d);
  }
  let v=0;
  const iv=setInterval(()=>{
    v+=Math.random()*14+2;
    if(v>=100){v=100;clearInterval(iv);}
    bar.style.width=v+"%";
    pct.textContent=Math.floor(v)+"%";
    if(v>=100)setTimeout(()=>ld.classList.add("gone"),600);
  },65);
}

// ── CURSOR ──
function cursor(){
  if(window.innerWidth<480)return;
  const dot=document.getElementById("cDot"),ring=document.getElementById("cRing");
  let rx=0,ry=0,mx=0,my=0;
  document.addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY;});
  (function loop(){
    rx+=(mx-rx)*.14;ry+=(my-ry)*.14;
    dot.style.left=mx+"px";dot.style.top=my+"px";
    ring.style.left=rx+"px";ring.style.top=ry+"px";
    requestAnimationFrame(loop);
  })();
  document.querySelectorAll("a,button,.pc,.cat-card,.tc,.cc,.cg").forEach(el=>{
    el.addEventListener("mouseenter",()=>ring.classList.add("big"));
    el.addEventListener("mouseleave",()=>ring.classList.remove("big"));
  });
}

// ── NAV ──
function nav(){
  const n=document.getElementById("nav");
  window.addEventListener("scroll",()=>{
    n.classList.toggle("stuck",window.scrollY>40);
    ["home","new","shop","lookbook","about","contact"].forEach(id=>{
      const el=document.getElementById(id);
      if(!el)return;
      const lk=document.querySelector(`.nv[href="#${id}"]`);
      if(lk)lk.classList.toggle("active",window.scrollY>=el.offsetTop-130);
    });
  });
}

// ── HERO COUNTERS ──
function heroCounters(){
  const obs=new IntersectionObserver(en=>{
    if(!en[0].isIntersecting)return;
    [{id:"hc1",v:3600,s:"+"},{id:"hc2",v:80,s:"K+"},{id:"hc3",v:28,s:"+"}].forEach(t=>{
      const el=document.getElementById(t.id);if(!el)return;
      let n=0;const iv=setInterval(()=>{n+=Math.ceil(t.v/60);if(n>=t.v){n=t.v;clearInterval(iv);}el.textContent=n.toLocaleString()+t.s;},22);
    });
    obs.disconnect();
  },{threshold:.5});
  const h=document.querySelector(".hero");if(h)obs.observe(h);
}

// ── MOBILE MENU ──
function mobileMenu(){
  const b=document.getElementById("burger"),m=document.getElementById("mobMenu");
  b.addEventListener("click",()=>{b.classList.toggle("open");m.classList.toggle("open");});
  document.querySelectorAll(".mm-link").forEach(l=>l.addEventListener("click",()=>{b.classList.remove("open");m.classList.remove("open");}));
}

// ── SEARCH ──
function search(){
  const btn=document.getElementById("btnSearch"),ov=document.getElementById("searchOv"),inp=document.getElementById("sInput"),cls=document.getElementById("sClose"),res=document.getElementById("sResults");
  btn.addEventListener("click",()=>{ov.classList.add("on");setTimeout(()=>inp.focus(),150);});
  cls.addEventListener("click",closeSearch);
  ov.addEventListener("click",e=>{if(e.target===ov)closeSearch();});
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closeSearch();});
  inp.addEventListener("input",()=>{
    const q=inp.value.trim().toLowerCase();
    if(!q){res.innerHTML="";return;}
    const hits=PRODUCTS.filter(p=>p.n.toLowerCase().includes(q)||p.c.toLowerCase().includes(q)).slice(0,8);
    res.innerHTML=hits.length
      ?hits.map(p=>`<div class="sr-row" onclick="goProd(${p.id})"><div class="sr-em">${p.e}</div><div class="sr-info"><strong>${p.n}</strong><span>₹${p.p.toLocaleString()} · ${p.c}</span></div></div>`).join("")
      :`<div style="color:rgba(255,255,255,.5);text-align:center;padding:20px;font-size:.85rem">No results for "${q}"</div>`;
  });
}
function closeSearch(){document.getElementById("searchOv").classList.remove("on");document.getElementById("sInput").value="";document.getElementById("sResults").innerHTML="";}
function goProd(id){closeSearch();document.getElementById("shop").scrollIntoView({behavior:"smooth"});setTimeout(()=>openModal(id),600);}
function quickSearch(q){document.getElementById("btnSearch").click();setTimeout(()=>{document.getElementById("sInput").value=q;document.getElementById("sInput").dispatchEvent(new Event("input"));},200);}

// ── PRICE RANGE ──
function priceRange(){
  const sMin=document.getElementById("slMin"),sMax=document.getElementById("slMax"),pLo=document.getElementById("prLo"),pHi=document.getElementById("prHi"),fill=document.getElementById("prFill");
  function upd(){
    let lo=+sMin.value,hi=+sMax.value;
    if(lo>hi-1500){if(this===sMin)lo=hi-1500;else hi=lo+1500;sMin.value=lo;sMax.value=hi;}
    const t=15000,pl=(lo/t)*100,ph=(hi/t)*100;
    fill.style.left=pl+"%";fill.style.width=(ph-pl)+"%";
    pLo.textContent="₹"+lo.toLocaleString();pHi.textContent="₹"+hi.toLocaleString();
    filt.pMin=lo;filt.pMax=hi;applyFilters();updateChips();
  }
  sMin.addEventListener("input",upd);sMax.addEventListener("input",upd);upd.call({});
}
function setPrice(lo,hi,btn){
  document.getElementById("slMin").value=lo;document.getElementById("slMax").value=hi;
  document.getElementById("slMin").dispatchEvent(new Event("input"));
  document.querySelectorAll(".prb").forEach(b=>b.classList.remove("on"));
  if(btn)btn.classList.add("on");
}

// ── CAT FILTER ──
function handleCatAll(cb){
  if(cb.checked){filt.cats=new Set(["all"]);document.querySelectorAll(".catCb").forEach(c=>c.checked=false);}
  applyFilters();updateChips();
}
document.addEventListener("change",e=>{
  if(!e.target.classList.contains("catCb"))return;
  document.getElementById("catAll").checked=false;
  if(e.target.checked){filt.cats.delete("all");filt.cats.add(e.target.value);}else filt.cats.delete(e.target.value);
  if(!filt.cats.size){filt.cats.add("all");document.getElementById("catAll").checked=true;}
  applyFilters();updateChips();
});
function setRating(btn,v){filt.rtg=v;document.querySelectorAll(".rtgb").forEach(b=>b.classList.remove("active"));btn.classList.add("active");applyFilters();updateChips();}
function setTag(btn,v){filt.tag=v;document.querySelectorAll(".tagb").forEach(b=>b.classList.remove("active"));btn.classList.add("active");applyFilters();updateChips();}
function filterBySearch(q){filt.q=q.toLowerCase();applyFilters();}
function clearAll(){
  filt={cats:new Set(["all"]),pMin:0,pMax:15000,rtg:0,tag:"all",q:""};
  document.getElementById("catAll").checked=true;
  document.querySelectorAll(".catCb").forEach(c=>c.checked=false);
  setPrice(0,15000,null);
  document.querySelector(".rtgb").classList.add("active");
  document.querySelectorAll(".rtgb").forEach((b,i)=>{if(i>0)b.classList.remove("active");});
  document.querySelector(".tagb").classList.add("active");
  document.querySelectorAll(".tagb").forEach((b,i)=>{if(i>0)b.classList.remove("active");});
  document.getElementById("filterSearch").value="";
  applyFilters();updateChips();showToast("🔄 Filters cleared");
}
function applyFilters(){
  let r=[...PRODUCTS];
  if(!filt.cats.has("all"))r=r.filter(p=>filt.cats.has(p.c));
  r=r.filter(p=>p.p>=filt.pMin&&p.p<=filt.pMax);
  if(filt.rtg>0)r=r.filter(p=>p.r>=filt.rtg);
  if(filt.tag!=="all")r=r.filter(p=>p.t===filt.tag);
  if(filt.q)r=r.filter(p=>p.n.toLowerCase().includes(filt.q)||p.c.toLowerCase().includes(filt.q));
  switch(sortMode){
    case"price-asc": r.sort((a,b)=>a.p-b.p);break;
    case"price-desc":r.sort((a,b)=>b.p-a.p);break;
    case"rating":    r.sort((a,b)=>b.r-a.r);break;
    case"newest":    r.sort((a,b)=>b.id-a.id);break;
    case"discount":  r.sort((a,b)=>(b.o-b.p)/b.o-(a.o-a.p)/a.o);break;
  }
  filtered=r;showN=STEP;renderProducts();
}
function updateChips(){
  const w=document.getElementById("activeChips"),chips=[];
  if(!filt.cats.has("all"))filt.cats.forEach(c=>chips.push(`<div class="chip">${c}<button onclick="rmCat('${c}')">×</button></div>`));
  if(filt.pMin>0||filt.pMax<15000)chips.push(`<div class="chip">₹${filt.pMin.toLocaleString()}–₹${filt.pMax.toLocaleString()}<button onclick="resetPr()">×</button></div>`);
  if(filt.rtg>0)chips.push(`<div class="chip">${filt.rtg}★+<button onclick="resetRtg()">×</button></div>`);
  if(filt.tag!=="all")chips.push(`<div class="chip">${filt.tag}<button onclick="resetTag()">×</button></div>`);
  w.innerHTML=chips.join("");
  const n=Math.min(showN,filtered.length);
  document.getElementById("sbCount").textContent=`Showing ${n} of ${filtered.length} products`;
}
function rmCat(c){filt.cats.delete(c);if(!filt.cats.size){filt.cats.add("all");document.getElementById("catAll").checked=true;}document.querySelectorAll(".catCb").forEach(cb=>{if(cb.value===c)cb.checked=false;});applyFilters();updateChips();}
function resetPr(){setPrice(0,15000,null);}
function resetRtg(){document.querySelector(".rtgb").click();}
function resetTag(){document.querySelector(".tagb").click();}

// ── RENDER NEW ARRIVALS ──
function renderNew(){
  const g=document.getElementById("newGrid");
  const newItems=PRODUCTS.filter(p=>p.t==="new").slice(0,8);
  g.innerHTML="";
  newItems.forEach((p,i)=>g.appendChild(buildCard(p,i,true)));
}

// ── RENDER ALL PRODUCTS ──
function renderProducts(){
  const g=document.getElementById("prodGrid"),lm=document.getElementById("lmArea");
  const data=filtered.length||filt.cats.has("all")&&!filt.q&&filt.tag==="all"&&filt.rtg===0&&filt.pMin===0&&filt.pMax===15000?PRODUCTS:filtered;
  const slice=data.slice(0,showN);
  if(viewMode==="list")g.classList.add("lv");else g.classList.remove("lv");
  if(!slice.length){
    g.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:80px 20px;color:var(--text3)"><div style="font-size:4rem;margin-bottom:16px">🔍</div><h3 style="font-family:var(--ff-head);font-size:1.8rem;margin-bottom:8px">No products found</h3><p>Try adjusting your filters</p></div>`;
    lm.style.display="none";
    document.getElementById("pCount").textContent="0 products";
    return;
  }
  g.innerHTML="";slice.forEach((p,i)=>g.appendChild(buildCard(p,i,false)));
  document.getElementById("pCount").textContent=`${slice.length} of ${data.length} products`;
  lm.style.display=showN<data.length?"block":"none";
  updateChips();
}
function buildCard(p,i,mini){
  const disc=Math.round((1-p.p/p.o)*100),w=wishlist.has(p.id);
  const d=document.createElement("div");
  d.className="pc";d.style.animationDelay=`${i*.06}s`;
  d.setAttribute("role","listitem");
  d.innerHTML=`
    <div class="pc-img" onclick="openModal(${p.id})">
      <div class="pc-em">${p.e}</div>
      <div class="pc-badge b-${p.t}">${p.t==="sale"?`–${disc}%`:p.t==="new"?"New In":p.t==="trending"?"🔥 Hot":"💎 Premium"}</div>
      <div class="pc-acts">
        <button class="pca${w?" w":""}" onclick="toggleWish(event,${p.id})" title="Wishlist">${w?"❤️":"🤍"}</button>
        <button class="pca" onclick="openModal(${p.id})" title="Quick View">👁️</button>
      </div>
    </div>
    <div class="pc-body">
      <div class="pc-cat">${p.c}</div>
      <div class="pc-name" onclick="openModal(${p.id})">${p.n}</div>
      <div class="pc-stars">${stars(p.r)}</div>
      <div class="pc-rev">${p.r} · ${p.rv} reviews</div>
      <div class="pc-foot">
        <div class="pc-prices">
          <span class="pc-price">₹${p.p.toLocaleString()}</span>
          <div class="pc-row">
            <span class="pc-orig">₹${p.o.toLocaleString()}</span>
            <span class="pc-disc">–${disc}%</span>
          </div>
        </div>
        <button class="pc-add" onclick="addToCart(${p.id})" title="Add to cart">+</button>
      </div>
    </div>`;
  return d;
}
function stars(r){let s="";for(let i=0;i<5;i++)s+=i<r?"★":"☆";return s;}
function loadMore(){showN+=STEP;renderProducts();showToast("✨ More products loaded!");}

// ── VIEW & SORT ──
function setView(v){
  viewMode=v;
  document.getElementById("vg").classList.toggle("active",v==="grid");
  document.getElementById("vl").classList.toggle("active",v==="list");
  renderProducts();
}
function sortBind(){document.getElementById("sortSel").addEventListener("change",e=>{sortMode=e.target.value;applyFilters();});}

// ── SIDEBAR ──
function toggleSbg(id){document.getElementById(id).classList.toggle("closed");}
function openSidebar(){
  document.getElementById("sidebar").classList.add("on");
  document.getElementById("drwOverlay").classList.add("on");
}

// ── CAT TILES ──
function catCards(){
  document.querySelectorAll(".cat-card").forEach(c=>{
    c.addEventListener("click",()=>{
      const f=c.getAttribute("data-cat");
      document.getElementById("shop").scrollIntoView({behavior:"smooth"});
      setTimeout(()=>{
        filt.cats=new Set([f]);
        document.getElementById("catAll").checked=false;
        document.querySelectorAll(".catCb").forEach(cb=>cb.checked=cb.value===f);
        applyFilters();updateChips();showToast(`Showing ${f} products`);
      },600);
    });
  });
}

// ── CART ──
function bindCart(){
  document.getElementById("btnCart").addEventListener("click",openCart);
}
function openCart(){document.getElementById("cartDrawer").classList.add("on");document.getElementById("drwOverlay").classList.add("on");renderCart();}
function closeCart(){document.getElementById("cartDrawer").classList.remove("on");if(!document.getElementById("wishDrawer").classList.contains("on"))document.getElementById("drwOverlay").classList.remove("on");}
function addToCart(id){
  const p=PRODUCTS.find(x=>x.id===id);if(!p)return;
  const ex=cart.find(x=>x.id===id);
  if(ex)ex.qty++;else cart.push({...p,qty:1});
  saveCart();updateBadges();
  showToast(`🛒 ${p.n} added to cart!`);
  const b=document.getElementById("btnCart");b.style.transform="scale(1.4)";setTimeout(()=>b.style.transform="",350);
}
function removeFromCart(id){cart=cart.filter(x=>x.id!==id);saveCart();updateBadges();renderCart();}
function changeQty(id,d){
  const it=cart.find(x=>x.id===id);if(!it)return;
  it.qty+=d;if(it.qty<=0)removeFromCart(id);else{saveCart();updateBadges();renderCart();}
}
function renderCart(){
  const bd=document.getElementById("cartBody"),ft=document.getElementById("cartFoot");
  if(!cart.length){
    bd.innerHTML=`<div class="empty-box"><div>🛍️</div><p>Your cart is empty</p><button class="btn-primary" onclick="closeCart()">Start Shopping</button></div>`;
    ft.innerHTML="";return;
  }
  bd.innerHTML=cart.map(it=>{
    const d=Math.round((1-it.p/it.o)*100);
    return `<div class="ci"><div class="ci-em">${it.e}</div><div class="ci-info"><div class="ci-name">${it.n}</div><div class="ci-price">₹${(it.p*it.qty).toLocaleString()} <span style="color:var(--text3);font-size:.72rem;margin-left:4px">–${d}%</span></div><div class="ci-qty"><button class="cqb" onclick="changeQty(${it.id},-1)">−</button><span>${it.qty}</span><button class="cqb" onclick="changeQty(${it.id},1)">+</button><button class="ci-del" onclick="removeFromCart(${it.id})">🗑️</button></div></div></div>`;
  }).join("");
  const total=cart.reduce((s,x)=>s+x.p*x.qty,0);
  const orig=cart.reduce((s,x)=>s+x.o*x.qty,0);
  ft.innerHTML=`<div class="cart-saving">🎉 You're saving ₹${(orig-total).toLocaleString()}!</div><div class="cart-total-row"><span>Total (${cart.reduce((s,x)=>s+x.qty,0)} items)</span><span class="cart-total-amt">₹${total.toLocaleString()}</span></div><button class="btn-primary" style="width:100%" onclick="checkout()">Proceed to Checkout →</button><button onclick="closeCart()" style="width:100%;margin-top:8px;padding:10px;background:none;color:var(--text2);font-size:.8rem;text-align:center;transition:color .2s" onmouseover="this.style.color='var(--text)'" onmouseout="this.style.color='var(--text2)'">Continue Shopping</button>`;
}
function checkout(){
  const total=cart.reduce((s,x)=>s+x.p*x.qty,0);
  const items=cart.reduce((s,x)=>s+x.qty,0);
  cart=[];saveCart();updateBadges();closeCart();renderCart();
  showToast(`✅ Order placed! ₹${total.toLocaleString()} · ${items} item${items>1?"s":""}`,5000);
}
function saveCart(){localStorage.setItem("lum_cart",JSON.stringify(cart));}

// ── WISHLIST ──
function bindWish(){document.getElementById("btnWish").addEventListener("click",openWish);}
function openWish(){document.getElementById("wishDrawer").classList.add("on");document.getElementById("drwOverlay").classList.add("on");renderWish();}
function closeWish(){document.getElementById("wishDrawer").classList.remove("on");if(!document.getElementById("cartDrawer").classList.contains("on"))document.getElementById("drwOverlay").classList.remove("on");}
function toggleWish(e,id){
  e.stopPropagation();
  wishlist.has(id)?(wishlist.delete(id),showToast("💔 Removed from wishlist")):(wishlist.add(id),showToast("❤️ Added to wishlist!"));
  localStorage.setItem("lum_wish",JSON.stringify([...wishlist]));
  updateBadges();renderProducts();renderNew();
}
function renderWish(){
  const bd=document.getElementById("wishBody"),items=PRODUCTS.filter(p=>wishlist.has(p.id));
  if(!items.length){bd.innerHTML=`<div class="empty-box"><div>💔</div><p>Your wishlist is empty</p><button class="btn-primary" onclick="closeWish()">Discover Products</button></div>`;return;}
  bd.innerHTML=items.map(p=>`<div class="ci"><div class="ci-em">${p.e}</div><div class="ci-info"><div class="ci-name">${p.n}</div><div class="ci-price">₹${p.p.toLocaleString()}</div><div class="ci-qty" style="gap:8px"><button class="btn-primary" style="padding:7px 16px;font-size:.72rem" onclick="addToCart(${p.id});closeWish()">Add to Cart</button><button class="ci-del" onclick="toggleWish(event,${p.id});renderWish()">🗑️</button></div></div></div>`).join("");
}
function updateBadges(){
  const cc=cart.reduce((s,x)=>s+x.qty,0),cb=document.getElementById("cBadge");
  cb.textContent=cc;cb.classList.toggle("show",cc>0);
  const wb=document.getElementById("wBadge");
  wb.textContent=wishlist.size;wb.classList.toggle("show",wishlist.size>0);
}
function closeAllPanels(){
  document.getElementById("cartDrawer").classList.remove("on");
  document.getElementById("wishDrawer").classList.remove("on");
  document.getElementById("sidebar").classList.remove("on");
  document.getElementById("drwOverlay").classList.remove("on");
}

// ── MODAL ──
function modal(){document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});}
function openModal(id){
  const p=PRODUCTS.find(x=>x.id===id);if(!p)return;
  const disc=Math.round((1-p.p/p.o)*100),w=wishlist.has(id);
  document.getElementById("pmBody").innerHTML=`
    <div class="pm-em">${p.e}</div>
    <h2 class="pm-name">${p.n}</h2>
    <div class="pm-prices">
      <span class="pm-price">₹${p.p.toLocaleString()}</span>
      <span class="pm-orig">₹${p.o.toLocaleString()}</span>
      <span class="pm-save">Save ₹${(p.o-p.p).toLocaleString()} (${disc}% OFF)</span>
    </div>
    <div class="pm-rtg"><span>${stars(p.r)}</span><span>${p.r} · ${p.rv} reviews</span></div>
    <p class="pm-desc">${p.d}</p>
    ${p.c!=="accessories"?`<div class="pm-sizes"><h4>Select Size</h4><div class="sz-row">${["XS","S","M","L","XL","XXL"].map(s=>`<button class="szb" onclick="selSz(this)">${s}</button>`).join("")}</div></div>`:""}
    <div class="pm-acts">
      <button class="btn-primary" onclick="addToCart(${id});closeModal()">Add to Cart 🛒</button>
      <button class="pm-wbtn${w?" on":""}" onclick="toggleWish(event,${id});this.classList.toggle('on');this.textContent=wishlist.has(${id})?'❤️':'🤍'">${w?"❤️":"🤍"}</button>
    </div>`;
  document.getElementById("modalOv").classList.add("on");
  document.body.style.overflow="hidden";
}
function closeModal(){document.getElementById("modalOv").classList.remove("on");document.body.style.overflow="";}
function selSz(btn){document.querySelectorAll(".szb").forEach(b=>b.classList.remove("on"));btn.classList.add("on");}

// ── COUNTDOWN ──
function countdown(){
  const end=Date.now()+2*24*3600000+23*3600000+59*60000+58000;
  const tick=()=>{
    const l=end-Date.now();if(l<=0)return;
    document.getElementById("cdD").textContent=String(Math.floor(l/86400000)).padStart(2,"0");
    document.getElementById("cdH").textContent=String(Math.floor((l%86400000)/3600000)).padStart(2,"0");
    document.getElementById("cdM").textContent=String(Math.floor((l%3600000)/60000)).padStart(2,"0");
    document.getElementById("cdS").textContent=String(Math.floor((l%60000)/1000)).padStart(2,"0");
  };
  tick();setInterval(tick,1000);
}

// ── CONTACT ──
function contactForm(){
  document.getElementById("contactForm").addEventListener("submit",e=>{
    e.preventDefault();
    const btn=e.target.querySelector("button[type=submit]");
    btn.textContent="Sending…";btn.disabled=true;
    setTimeout(()=>{
      btn.textContent="Send Message ✉️";btn.disabled=false;
      document.getElementById("cfSuccess").style.display="block";
      e.target.reset();
      setTimeout(()=>document.getElementById("cfSuccess").style.display="none",6000);
      showToast("✅ Message sent! We'll reply in 24 hours.");
    },1600);
  });
}

// ── NEWSLETTER ──
function subscribeNL(){
  const el=document.getElementById("nlEmail");
  if(!el.value||!el.value.includes("@")){showToast("⚠️ Enter a valid email");return;}
  document.getElementById("nlSuccess").style.display="block";
  el.value="";showToast("🎉 Subscribed to LUMIÈRE!");
  setTimeout(()=>document.getElementById("nlSuccess").style.display="none",4000);
}

// ── STEP 2: PERF SCORES ──
function perfScores(){
  const obs=new IntersectionObserver(en=>{
    en.forEach(e=>{
      if(!e.isIntersecting)return;
      e.target.querySelectorAll(".ps-num").forEach(el=>{
        const v=+el.getAttribute("data-v");
        let n=0;const iv=setInterval(()=>{n+=2;if(n>=v){n=v;clearInterval(iv);}el.textContent=n;},16);
      });
      e.target.querySelectorAll(".ps-arc").forEach(arc=>{
        const pct=+arc.parentElement.querySelector(".ps-num").getAttribute("data-v");
        const circ=2*Math.PI*34;
        setTimeout(()=>arc.style.strokeDashoffset=circ-(circ*pct/100),100);
      });
      obs.unobserve(e.target);
    });
  },{threshold:.3});
  document.querySelectorAll(".perf-sec").forEach(el=>obs.observe(el));
}

// ── STEP 3: COMPAT BARS ──
function compatBars(){
  const obs=new IntersectionObserver(en=>{
    en.forEach(e=>{
      if(!e.isIntersecting)return;
      e.target.querySelectorAll(".cb-fill").forEach(b=>setTimeout(()=>b.style.width=b.getAttribute("data-w")+"%",200));
      obs.unobserve(e.target);
    });
  },{threshold:.3});
  document.querySelectorAll(".compat-sec").forEach(el=>obs.observe(el));
}

// ── REVEAL ──
function revealObserver(){
  const obs=new IntersectionObserver((en)=>{en.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add("in"),i*90);obs.unobserve(e.target);}});},{threshold:.07});
  document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
}

// ── BTT ──
function btt(){const b=document.getElementById("btt");window.addEventListener("scroll",()=>b.classList.toggle("show",window.scrollY>400));}

// ── TOAST ──
function showToast(msg,dur=3200){
  const w=document.getElementById("toastWrap"),t=document.createElement("div");
  t.className="toast";t.textContent=msg;w.appendChild(t);
  setTimeout(()=>{t.classList.add("out");setTimeout(()=>t.remove(),350);},dur);
}
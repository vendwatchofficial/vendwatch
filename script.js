const machines = {
  campus: {title:"Campus automaat",location:"Universiteit Antwerpen · Gebouw C",products:[["Water 50 cl","Op voorraad"],["Cola Zero","Op voorraad"],["Ice Tea","Op voorraad"],["Appelsap","Bijna op"],["Chips paprika","Op voorraad"],["Proteinereep","Op voorraad"]]},
  komida: {title:"Komida — gebouw R",location:"Campus Drie Eiken · Komida",products:[["Chocoladereep","Op voorraad"],["Zoute crackers","Bijna op"],["Chips naturel","Bijna op"],["Koekjes","Op voorraad"],["Notenmix","Op voorraad"]]},
  health: {title:"Health Corner",location:"Sportcentrum · Health zone",products:[["Verse fruitsalade","Op voorraad"],["Plat water","Op voorraad"],["Banaan","Op voorraad"],["Yoghurt","Op voorraad"],["Granolabar","Op voorraad"]]}
};
const modal=document.getElementById("modal"), title=document.getElementById("modalTitle"), locationText=document.getElementById("modalLocation"), list=document.getElementById("productList");
function openMachine(id){const m=machines[id];if(!m)return;title.textContent=m.title;locationText.textContent=m.location;list.innerHTML=m.products.map(p=>`<div class="product-item"><span>${p[0]}</span><span>${p[1]==="Op voorraad"?"● ":"◐ "}${p[1]}</span></div>`).join("");modal.classList.add("open")}
document.querySelectorAll("[data-machine]").forEach(b=>b.addEventListener("click",()=>openMachine(b.dataset.machine)));
document.getElementById("closeModal").addEventListener("click",()=>modal.classList.remove("open"));
modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.remove("open")});
const search=document.getElementById("searchInput"), category=document.getElementById("categoryFilter"), availability=document.getElementById("availabilityFilter");
function filterMachines(){const q=search.value.toLowerCase();document.querySelectorAll(".machine-card").forEach(card=>{const matchText=card.dataset.search.includes(q);const matchCat=category.value==="all"||card.dataset.category===category.value;const matchStock=availability.value==="all"||card.dataset.stock===availability.value;card.style.display=matchText&&matchCat&&matchStock?"":"none"})}
[search,category,availability].forEach(el=>el.addEventListener("input",filterMachines));
function toast(){const t=document.getElementById("toast");t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2400)}
document.getElementById("supplierLogin").addEventListener("click",()=>{document.getElementById("voor-bedrijven").scrollIntoView({behavior:"smooth"});toast()});
document.getElementById("dashboardButton").addEventListener("click",()=>{document.querySelector(".dashboard-preview").scrollIntoView({behavior:"smooth",block:"center"});toast()});
document.getElementById("menuToggle").addEventListener("click",()=>{document.getElementById("ontdek").scrollIntoView({behavior:"smooth"})});

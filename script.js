const menuData = {
  coffee: [
    {name:"House Latte", desc:"Double espresso, silky steamed milk", price:"850", image:"https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=300&q=80"},
    {name:"Flat White", desc:"Rich espresso with velvety microfoam", price:"800", image:"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=300&q=80"},
    {name:"Caramel Cappuccino", desc:"Espresso, foam & house caramel", price:"950", image:"https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=300&q=80"},
    {name:"Iced Mocha", desc:"Cold brew, cocoa & fresh milk", price:"980", image:"https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=300&q=80"},
    {name:"Classic Americano", desc:"Bold espresso, hot water", price:"700", image:"https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=300&q=80"},
    {name:"Fresh Lemon Tea", desc:"Ceylon black tea, lemon & honey", price:"650", image:"https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=300&q=80"}
  ],
  breakfast: [
    {name:"Avocado Toast", desc:"Sourdough, avocado, herbs & poached egg", price:"1,450", image:"https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=300&q=80"},
    {name:"Café Breakfast", desc:"Eggs, toast, sausage, greens & roasted tomato", price:"1,650", image:"https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=300&q=80"},
    {name:"Berry Pancakes", desc:"Fluffy pancakes, berries & maple syrup", price:"1,350", image:"https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=300&q=80"},
    {name:"Chicken Sandwich", desc:"Grilled chicken, greens & house sauce", price:"1,250", image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=300&q=80"},
    {name:"Creamy Mushroom Toast", desc:"Sautéed mushrooms, herbs & parmesan", price:"1,200", image:"https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=300&q=80"},
    {name:"Granola Bowl", desc:"Yoghurt, seasonal fruit, granola & honey", price:"1,100", image:"https://images.unsplash.com/photo-1743409390921-1d1e673bc351?auto=format&fit=crop&w=1200&q=85" }
  ],
  bakes: [
    {name:"Chocolate Fudge Cake", desc:"Dark chocolate, soft sponge & ganache", price:"750", image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=300&q=80"},
    {name:"Butter Croissant", desc:"Flaky, golden and baked every morning", price:"550", image:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=300&q=80"},
    {name:"Cinnamon Roll", desc:"Soft roll, cinnamon sugar & vanilla glaze", price:"650", image:"https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=300&q=80"},
    {name:"Blueberry Cheesecake", desc:"Creamy cheesecake with berry compote", price:"800", image:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=300&q=80"},
    {name:"Banana Walnut Loaf", desc:"Moist banana bread with toasted walnuts", price:"600", image:"https://images.unsplash.com/photo-1575126989651-2d4a29211c09?auto=format&fit=crop&w=1200&q=85"},
    {name:"Fresh Fruit Tart", desc:"Vanilla cream, pastry & seasonal fruit", price:"850", image:"https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=300&q=80"}
  ]
};

const menuGrid = document.querySelector("#menuGrid");
const tabs = document.querySelectorAll(".tab");

function renderMenu(category){
  menuGrid.innerHTML = menuData[category].map((item, i) => `
    <article class="menu-item" style="animation-delay:${i * 70}ms">
      <div class="menu-thumb">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
      </div>
      <div class="menu-info">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
      </div>
      <div class="menu-price">LKR ${item.price}</div>
    </article>
  `).join("");
}

renderMenu("coffee");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderMenu(tab.dataset.category);
  });
});

const header = document.querySelector(".site-header");
const backTop = document.querySelector(".back-top");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 30);
  backTop.classList.toggle("show", window.scrollY > 650);
}, {passive:true});

backTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

const toggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {
  const open = toggle.classList.toggle("active");
  navMenu.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", open);
});

navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    toggle.classList.remove("active");
    navMenu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.12, rootMargin:"0px 0px -40px 0px"});

revealItems.forEach(el => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if(!target) return;
    e.preventDefault();
    target.scrollIntoView({behavior:"smooth", block:"start"});
  });
});

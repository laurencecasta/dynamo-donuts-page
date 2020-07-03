let loadSection = () => {
  let changingContent = document.querySelector('#changing-content');
  let menuSection = document.createElement('section');
  menuSection.classList.add('menu-section');
  changingContent.appendChild(menuSection);
}

let loadHead = () => {
  let menuHead = document.createElement('h1');
  menuHead.classList.add('menu-head');
  menuHead.textContent = 'MENU';
  document.querySelector('.menu-section').appendChild(menuHead);
}

let loadContentContainer = () => {
  let menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');
  document.querySelector('.menu-section').appendChild(menuContainer);
}

let loadContent = () => {
  // Load donuts
  let donutsContainer = document.createElement('div');
  donutsContainer.classList.add('items-container');
  let donutTitle = document.createElement('h2');
  donutTitle.textContent = 'DONUTS';
  donutsContainer.appendChild(donutTitle);

  let donuts = document.createElement('pre');
  donuts.textContent = `Glaze Donut - $0.80/$8dz
  Chocolate Donut - $0.80/$8dz
  Iced With Sprinkles - $0.90/$8.50dz
  Pink With Sprinkles - $0.95/$9dz`;
  donutsContainer.appendChild(donuts);

  // Load kolaches
  let kolContainer = document.createElement('div');
  kolContainer.classList.add('items-container');
  let kolTitle = document.createElement('h2');
  kolTitle.textContent = 'KOLACHES';
  kolContainer.appendChild(kolTitle);

  let kolaches = document.createElement('pre');
  kolaches.textContent = `Regular Kolaches - $1
  Large Kolaches - $2`;
  kolContainer.appendChild(kolaches);

  document.querySelector('.menu-container').appendChild(donutsContainer);
  document.querySelector('.menu-container').appendChild(kolContainer);
}

// Load all menu items
let loadMenu = () => {
  loadSection();
  loadHead();
  loadContentContainer();
  loadContent();
}

export { loadMenu };
const loadNav = (() => {
  let nav = document.createElement('nav'); // Create nav element
  let navContainer = document.createElement('div'); // Create container
  navContainer.classList.add('navbar');

  // Add logo
  let logo = document.createElement('div');
  logo.classList.add('logo');
  let logoImg = document.createElement('img'); // Add image
  logoImg.src = 'images/dynamodonut.svg';
  let logoWordsContainer = document.createElement('div'); // Add words
  logoWordsContainer.classList.add('logo-name');
  let logoWords = document.createElement('h1');
  logoWords.textContent = 'DYNAMO DONUTS';
  logoWordsContainer.appendChild(logoWords);
  logo.appendChild(logoImg); // Append logo elements
  logo.appendChild(logoWordsContainer);

  // Add navigation options
  let list = document.createElement('ul');
  list.setAttribute('id', 'nav-options');
  let about = document.createElement('li');
  about.setAttribute('id', 'about');
  about.textContent = 'ABOUT';
  let menu = document.createElement('li');
  menu.setAttribute('id', 'menu');
  menu.textContent = 'MENU';
  let order = document.createElement('li');
  order.setAttribute('id', 'order');
  order.textContent = 'ORDER';
  list.appendChild(about);
  list.appendChild(menu);
  list.appendChild(order);

  navContainer.appendChild(logo); // Append to navContainer
  navContainer.appendChild(list);
  nav.appendChild(navContainer); // Append to nav
  document.getElementById('content').appendChild(nav); // Append to content

})();

const loadHeadline = (() => {
  let content = document.getElementById('content');
  
  // Load image
  let imgContainer = document.createElement('div');
  imgContainer.classList.add('hero-image');
  let img = document.createElement('img');
  img.src = 'images/donuts.jpg';
  img.setAttribute('id', 'headline-image');
  imgContainer.appendChild(img);
  
  content.appendChild(imgContainer);

  // Add slogan
  let section = document.createElement('section');
  section.classList.add('headline');
  let sloganContainer = document.createElement('div');
  sloganContainer.classList.add('slogan-container');
  let slogan = document.createElement('div');
  slogan.classList.add('slogan');
  let textContainer = document.createElement('div');
  textContainer.classList.add('text-container');
  let donuts = document.createElement('h1');
  donuts.setAttribute('id', 'donuts');
  donuts.textContent = 'DONUTS THAT WILL LEAVE YOU';
  let stunned = document.createElement('h1');
  stunned.setAttribute('id', 'stunned');
  stunned.textContent = 'STUNNED';
  textContainer.appendChild(donuts); // Append all slogan elements
  textContainer.appendChild(stunned);
  slogan.appendChild(textContainer);
  sloganContainer.appendChild(slogan);
  section.appendChild(sloganContainer);
  content.appendChild(section);
})();

const loadQuote = (() => {
  let content = document.getElementById('content');
  let section = document.querySelector('section');

  let quoteContainer = document.createElement('div');
  quoteContainer.classList.add('quote-container');
  let quote = document.createElement('div');
  quote.classList.add('quote');
  let textContainer = document.createElement('div');
  textContainer.classList.add('text-container');
  let title = document.createElement('h3');
  title.textContent = 'Testimonial';
  let quoteContent = document.createElement('p');
  quoteContent.innerHTML = '"These donuts left me without words... It\'s a great place to take the family or even just to enjoy by yourself!"<br> &ndash; The Daily Donut';
   
  // Append all elements
  textContainer.appendChild(title);
  textContainer.appendChild(quoteContent);
  quote.appendChild(textContainer);
  quoteContainer.appendChild(quote);
  section.appendChild(quoteContainer);
})();

const loadFooter = (() => {
  let content = document.getElementById('content');
  let footer = document.createElement('footer');

  // Load copyright
  let copyright = document.createElement('div');
  copyright.classList.add('copyright');
  let span = document.createElement('span');
  span.innerHTML = '&copy; Dynamo Donuts 2020';

  copyright.appendChild(span);
  footer.appendChild(copyright);

  // Load social media icons
  let social = document.createElement('div');
  social.classList.add('social');
  let facebooka = document.createElement('a');
  let facebooki = document.createElement('i');
  facebooki.classList.add('fab');
  facebooki.classList.add('fa-facebook-f');
  facebooka.appendChild(facebooki);
  let twittera = document.createElement('a');
  let twitteri = document.createElement('i');
  twitteri.classList.add('fab');
  twitteri.classList.add('fa-twitter');
  twittera.appendChild(twitteri);
  let instagrama = document.createElement('a');
  let instagrami = document.createElement('i');
  instagrami.classList.add('fab');
  instagrami.classList.add('fa-instagram');
  instagrama.appendChild(instagrami);

  social.appendChild(facebooka);
  social.appendChild(twittera);
  social.appendChild(instagrama);
  footer.appendChild(social);

  content.appendChild(footer);
})();

const loadAll = (() => {
  loadNav();
  loadHeadline();
  loadQuote();
  loadFooter();
})();

export { loadAll };
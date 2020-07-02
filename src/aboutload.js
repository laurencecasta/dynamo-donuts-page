let loadAbout = () => {
  let changingContent = document.getElementById('changing-content');
  
  // Create container
  let aboutContainer = document.createElement('section');
  aboutContainer.classList.add('about');
  let textContainer = document.createElement('div');
  textContainer.classList.add('text-container');
  let title = document.createElement('h1'); // Create title
  title.textContent = 'Who We Are';
  let aboutContent = document.createElement('p'); // Create content
  aboutContent.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere omnis odio reiciendis consequatur ducimus. Praesentium neque cupiditate non sequi veritatis, iusto corporis optio incidunt error, voluptatum ad quam nesciunt assumenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere omnis odio reiciendis consequatur ducimus. Praesentium neque cupiditate non sequi veritatis, iusto corporis optio incidunt error, voluptatum ad quam nesciunt assumenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere omnis odio reiciendis consequatur ducimus. Praesentium neque cupiditate non sequi veritatis, iusto corporis optio incidunt error, voluptatum ad quam nesciunt assumenda.';
  textContainer.appendChild(title);
  textContainer.appendChild(aboutContent);
  aboutContainer.appendChild(textContainer);
  changingContent.appendChild(aboutContainer);
}

export { loadAbout };
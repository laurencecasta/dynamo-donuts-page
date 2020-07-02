import { loadAll, loadNav, loadHeadline, loadQuote } from './pageload';
import { loadAbout } from './aboutload';

loadAll();
document.addEventListener('DOMContentLoaded', () => {
  let changingContent = document.getElementById('changing-content');

  let logo = document.getElementById('logo'); // Add event listener for logo (redirect to home)
  logo.addEventListener('click', (e) => {
    changingContent.removeChild(changingContent.querySelector('section'));
    loadHeadline();
    loadQuote();
    let tabs = Array.from(document.getElementsByClassName('tab-pressed'));
    tabs.forEach(tab => tab.classList.remove('tab-pressed'));
  });

  let about = document.getElementById('about'); // Add event listener for about tab
  about.addEventListener('click', (e) => {
    changingContent.removeChild(changingContent.querySelector('section'));
    loadAbout();
    e.target.classList.toggle('tab-pressed');
  });
});
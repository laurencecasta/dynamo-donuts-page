import { loadAll, loadNav } from './pageload';

loadAll();
document.addEventListener('DOMContentLoaded', () => {
  let content = document.getElementById('content');
  let about = document.getElementById('about');
  about.addEventListener('click', (e) => {
    if (document.querySelector('section')) {
      content.removeChild(document.querySelector('section'));
    }
    console.log('about clicked');
  });
});
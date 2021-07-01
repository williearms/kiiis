/*
  nama : candra dwi cahyo
  umur : 16 tahun
  email : candradwicahyo18@gmail.com
*/

AOS.init({
  once: true,
  duration: 600
})

const navContainer = document.querySelector('.nav-container');

window.addEventListener('scroll', function() {
  navContainer.classList.toggle('active', this.scrollY > 0);
})

const navBoxList = navContainer.querySelector('.nav-box1');
const navToggle = navContainer.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
  navBoxList.classList.toggle('active');
})

const navListItem = navContainer.querySelectorAll('ul li');

navListItem.forEach(li => {
  li.addEventListener('click', function(event) {
    navListItem.forEach(li => li.classList.remove('active'));
    this.classList.add('active');
  })
})

const myWord = document.querySelectorAll('.limit-word');

myWord.forEach(word => {
  const value = word.textContent;
  const limitWord = value.substr(0, 110);
  
  word.textContent = `${limitWord} ...`;
})

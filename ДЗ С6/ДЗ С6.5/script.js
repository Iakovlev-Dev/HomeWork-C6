const btn = document.querySelector('.j-btn-test');

const width = window.screen.width;
const height = window.screen.height;

btn.addEventListener('click', () => {
  alert(`Ширина экрана ${width}, высота экрана ${height}`);
});
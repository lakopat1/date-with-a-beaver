function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 96 + 'vw';
  heart.style.bottom = '-40px';
  heart.innerHTML = '<svg width="40" height="40" viewBox="0 0 42 42" fill="none"><path d="M21 39s-1.3-1.3-3.2-3.2C10 28.8 3 22.2 3 15.2 3 9.2 8.2 4 14.2 4c3.2 0 6.2 1.7 7.8 4.5C24.6 5.7 27.6 4 30.8 4 36.8 4 42 9.2 42 15.2c0 7-7 13.6-14.8 20.6C22.3 37.7 21 39 21 39z" fill="#FF7AB2" stroke="#F3196B" stroke-width="2"/></svg>';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}

let heartActive = false;
document.body.addEventListener('mousemove', () => {
  if (!heartActive) {
    heartActive = true;
    const interval = setInterval(() => {
      for (let i = 0; i < 3; i++) createHeart();
    }, 600);
    setTimeout(() => { heartActive = false; clearInterval(interval); }, 8000);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('question').addEventListener('mouseenter', () => {
    document.getElementById('stage0').style.display = 'none';
    document.getElementById('stage1').style.display = '';
  });
});

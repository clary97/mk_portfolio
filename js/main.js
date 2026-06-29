// Typewriter effect for hero name
const el = document.getElementById('hero-name');
if (el) {
  const text = 'Min-Kyung Sung';
  let i = 0;
  const type = () => {
    if (i <= text.length) {
      el.innerHTML = text.slice(0, i) + '<span class="cursor-blink">_</span>';
      i++;
      setTimeout(type, i === 1 ? 400 : 60);
    } else {
      setTimeout(() => {
        el.innerHTML = text + '<span class="accent-char">.</span>';
      }, 800);
    }
  };
  setTimeout(type, 300);
}

// Publication filter
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.pub-item').forEach(item => {
      item.classList.toggle('hidden', filter !== 'all' && item.dataset.type !== filter);
    });
  });
});

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links  = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
    }
  });
}

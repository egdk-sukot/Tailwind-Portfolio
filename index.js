// tailwind.config.js
document.querySelectorAll('.btn-details').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.card1');
      card.querySelector('.hidden-info').classList.toggle('hidden');
    });
  });
  
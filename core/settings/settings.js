(() => {
  const buttons = document.querySelectorAll('.window-menu-btn');
  const content = document.getElementById('settingsContent');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('disabled')) return; // игнорируем недоступную кнопку

      content.style.display = 'block';

      const target = btn.dataset.target;
      if (target === 'designos') {
        content.innerHTML = "<h2>О DesignOS</h2><p>Здесь будет информация о системе.</p>";
      } else if (target === 'aboutme') {
        content.innerHTML = "<h2>Обо мне</h2><p>Здесь будет информация о разработчике.</p>";
      }
    });
  });
})();

// запускаем сразу после вставки окна
(() => {
  const appWindow = document.getElementById('appWindow');
  const closeWindow = document.getElementById('closeWindow');
  const windowHeader = document.getElementById('windowHeader');

  if (!appWindow || !closeWindow || !windowHeader) {
    console.error('Элементы окна не найдены');
    return;
  }

  // закрытие
  closeWindow.addEventListener('click', () => {
    appWindow.style.display = 'none';
  });

  // перемещение
  let isDragging = false, offsetX, offsetY;

  windowHeader.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - appWindow.offsetLeft;
    offsetY = e.clientY - appWindow.offsetTop;
    appWindow.style.position = 'absolute'; // важно!
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      appWindow.style.left = (e.clientX - offsetX) + 'px';
      appWindow.style.top = (e.clientY - offsetY) + 'px';
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
})();

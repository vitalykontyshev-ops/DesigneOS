document.querySelector('.notes-create-btn').addEventListener('click', () => {
  const rightPanel = document.querySelector('.notes-right');
  rightPanel.innerHTML = `
    <div class="note-frame">
      <textarea class="note-textarea" placeholder="Введите текст заметки..."></textarea>
    </div>
  `;
});

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const separator = now.getSeconds() % 2 === 0 ? ':' : ' ';
  document.getElementById('clock').textContent = `${hours}${separator}${minutes}`;
}
setInterval(updateClock, 1000);
updateClock();




document.querySelector(".settings-button").addEventListener("click", () => {
  fetch("core/windows/window.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("windows-container").innerHTML = html;

      // подключаем JS окна после вставки
      const script = document.createElement("script");
      script.src = "core/windows/window.js";
      document.body.appendChild(script);
    });
});



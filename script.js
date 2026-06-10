const messages = [
  "Weird stuff might happen",
  "idk",
  "by ggoobyjohnbrit",
  "TTNC JS is working ",
  "Please ignore this msg :P"
];

function updateText() {
  const el = document.getElementById("randomText");
  if (!el) return;
  el.textContent = messages[Math.floor(Math.random() * messages.length)];
}

setInterval(updateText, 2000);
updateText();

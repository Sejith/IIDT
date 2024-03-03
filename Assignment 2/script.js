function changeColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let color = "rgb(" + red + "," + green + "," + blue + ")";
  document.getElementsByTagName("body")[0].style.backgroundColor = color;

  const colorEl = document.getElementsByClassName("color")[0];
  const currentColor = color;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = currentColor;
  ctx.fillRect(0, 0, 1, 1);
  const colorData = ctx.getImageData(0, 0, 1, 1).data;
  const hex = rgbToHex(colorData[0], colorData[1], colorData[2]);
  colorEl.innerHTML = hex;

  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}

export function getRandomColor() {
  return '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
}

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  // --- Seconds ---
  const seconds = now.getSeconds();
  const secondsDegrees = (6 * seconds + 90) % 360;
  applyMatrix(secondHand, secondsDegrees);

  // --- Minutes ---
  const mins = now.getMinutes();
  const minsDegrees = (6 * mins + 90) % 360;
  applyMatrix(minuteHand, minsDegrees);

  // --- Hours ---
  const hour = now.getHours();
  const hourDegrees = (30 * hour + mins / 2 + 90) % 360;
  applyMatrix(hourHand, hourDegrees);
}

function applyMatrix(hand, degrees) {
  // Convert to radians
  const radians = degrees * Math.PI / 180;

  // Rotation matrix
  let a = Math.cos(radians);
  let b = Math.sin(radians);
  let c = -b;
  let d = a;
  let e = 0;
  let f = 0;

  // Round to 6 decimal places
  a = parseFloat(a.toFixed(6));
  b = parseFloat(b.toFixed(6));
  c = parseFloat(c.toFixed(6));
  d = parseFloat(d.toFixed(6));

  hand.style.transform = `matrix(${a}, ${b}, ${c}, ${d}, ${e}, ${f})`;
}

setInterval(setDate, 1000);
setDate();

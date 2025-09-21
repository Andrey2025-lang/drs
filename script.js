// Genera flores en posiciones y tamaños variados para un ramo bonito
const bouquet = document.getElementById('bouquet');

const flowers = [
  { left: 140, top: 120, scale: 1.1, delay: 0 },
  { left: 200, top: 100, scale: 1.2, delay: 0.2 },
  { left: 90, top: 180, scale: 0.9, delay: 0.4 },
  { left: 250, top: 180, scale: 0.95, delay: 0.1 },
  { left: 170, top: 200, scale: 1, delay: 0.3 },
];

flowers.forEach((f, i) => {
  const flower = document.createElement('div');
  flower.className = 'flower';
  flower.style.left = f.left + 'px';
  flower.style.top = f.top + 'px';
  flower.style.transform = `scale(${f.scale})`;
  flower.style.animationDelay = `${f.delay}s`;

  // Pétalos
  for (let p = 1; p <= 5; p++) {
    const petal = document.createElement('div');
    petal.className = 'petal petal' + p;
    // Detalle extra: leve rotación y sombra variable
    petal.style.boxShadow = `0 4px 16px #ffd700${30 + p * 10}, 0 0 0 2px #fffbe0${60 + p * 10} inset`;
    flower.appendChild(petal);
  }
  // Centro
  const center = document.createElement('div');
  center.className = 'center';
  // Pistilos (pequeños puntos en el centro)
  for (let j = 0; j < 6; j++) {
    const pistil = document.createElement('div');
    pistil.className = 'pistil';
    const angle = (j / 6) * 2 * Math.PI;
    const r = 10;
    pistil.style.left = 13 + r * Math.cos(angle) + 'px';
    pistil.style.top = 13 + r * Math.sin(angle) + 'px';
    center.appendChild(pistil);
  }
  flower.appendChild(center);
  bouquet.appendChild(flower);
});

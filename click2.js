const particleSrc = "images/strawberrym.png";

document.addEventListener("click", (e) => {
  const particleCount = 8;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("img");
    particle.src = particleSrc;
    particle.className = "particle";

    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;

    document.body.appendChild(particle);

    const angle = Math.random() * 2 * Math.PI;
    const distance = 20 + Math.random() * 20;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        particle.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random()*360}deg) scale(${0.5 + Math.random()})`;
        particle.style.opacity = 0;
      });
    });

    setTimeout(() => particle.remove(), 800);
  }
});

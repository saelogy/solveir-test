window.addEventListener('load', () => {
  const track = document.getElementById('button-trackk');
  const set1 = document.getElementById('marquee-set-1');
  
  requestAnimationFrame(() => {
    const exactWidth = set1.offsetWidth;
    
    track.style.setProperty('--scroll-distance', `-${exactWidth}px`);
  });
});

/* ================================
   PARTICLES.JS — Canvas particles for coming soon
   ================================ */
(function () {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H;
  const NEON = '#00e676';
  const N = window.innerWidth < 600 ? 55 : 110;
  const DIST = 110;
  let particles = [];
  let mouse = { x: null, y: null };

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  document.addEventListener('touchmove', e => { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; }, { passive: true });
  document.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });

  function Particle() {
    this.reset();
  }
  Particle.prototype.reset = function () {
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.vx = (Math.random() - .5) * .4;
    this.vy = (Math.random() - .5) * .4;
    this.r = Math.random() * 1.8 + .4;
    this.a = Math.random() * .45 + .1;
    this.pa = Math.random() * .015 + .004;
    this.pd = 1;
  };
  Particle.prototype.update = function () {
    this.x += this.vx; this.y += this.vy;
    if (this.x < 0 || this.x > W) this.vx *= -1;
    if (this.y < 0 || this.y > H) this.vy *= -1;
    this.a += this.pa * this.pd;
    if (this.a > .55 || this.a < .08) this.pd *= -1;
    if (mouse.x !== null) {
      const dx = this.x - mouse.x, dy = this.y - mouse.y;
      const d = Math.sqrt(dx*dx+dy*dy);
      if (d < 90) {
        const f = (90-d)/90;
        this.vx += (dx/d)*f*.25; this.vy += (dy/d)*f*.25;
        const m = 2.5;
        this.vx = Math.max(-m, Math.min(m, this.vx));
        this.vy = Math.max(-m, Math.min(m, this.vy));
      }
    }
  };
  Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
    ctx.fillStyle = `rgba(0,230,118,${this.a})`;
    ctx.shadowColor = NEON; ctx.shadowBlur = 7;
    ctx.fill(); ctx.shadowBlur = 0;
  };

  for (let i = 0; i < N; i++) particles.push(new Particle());

  function lines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i+1; j < particles.length; j++) {
        const dx = particles[i].x-particles[j].x;
        const dy = particles[i].y-particles[j].y;
        const d = Math.sqrt(dx*dx+dy*dy);
        if (d < DIST) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0,230,118,${(1-d/DIST)*.2})`;
          ctx.lineWidth = .5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0,0,W,H);
    particles.forEach(p => { p.update(); p.draw(); });
    lines();
    requestAnimationFrame(loop);
  }
  loop();
})();

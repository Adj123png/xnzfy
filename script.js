// 获取画布元素
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');

// 设置画布尺寸
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 烟花粒子类
class Firework {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height;
    this.size = Math.random() * 3 + 2;
    this.speed = Math.random() * 2 + 1;
    this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  }

  update() {
    this.y -= this.speed;
    if (this.y < 0) {
      this.reset();
    }
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.rect(this.x, this.y, this.size, this.size);
    ctx.fill();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height;
    this.size = Math.random() * 3 + 2;
    this.speed = Math.random() * 2 + 1;
    this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  }
}

// 创建烟花数组
const fireworks = [];
for (let i = 0; i < 50; i++) {
  fireworks.push(new Firework());
}

// 动画循环
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < fireworks.length; i++) {
    fireworks[i].update();
    fireworks[i].draw();
  }

  requestAnimationFrame(animate);
}

animate();

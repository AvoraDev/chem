// ------------------------------------------------------------------------
// HTML ELEMENTS
// ------------------------------------------------------------------------
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ------------------------------------------------------------------------
// CANVAS ANIMATION
// ------------------------------------------------------------------------
const agents = [];
const settings = {
  agent: {
    maxTotal: 10,
    maxBounce: 10,
    speed: {
      min: 5,
      max: 8
    },
    size: {
      min: 25,
      max: 35
    }
  }
};
let animateId, autoSpawnId = 0;
let canvasFill = '';
function init(bgColor) {
  canvasFill = bgColor;
  animate();
  autoSpawn();
}

function animate() {
  // animate loop
  animateId = requestAnimationFrame(animate);
  
  // redraw canvas
  ctx.fillStyle = canvasFill;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // agent collision detection
  agents.forEach((agent, index) => {
    if (agent.collision === true) {
      
      if (agent.x < 0 || (agent.x + agent.size) > canvas.width) {
        agent.collisionCheck('x', settings.agent.maxBounce);
        
      } else if (agent.y < 0 || (agent.y + agent.size) > canvas.height) {
        agent.collisionCheck('y', settings.agent.maxBounce);
        
      }
      
    } else {
      // remove agent once offscreen
      if (
        (agent.x < opposite(settings.agent.size.max) || (agent.x + agent.size) > canvas.width  + settings.agent.size.max) ||
        (agent.y < opposite(settings.agent.size.max) || (agent.y + agent.size) > canvas.height + settings.agent.size.max)
        ) {
        agents.splice(index, 1);
      }
      
    }
    
    agent.update();
  });
}

function autoSpawn() {
  autoSpawnId = setInterval(function() {
    if (agents.length < settings.agent.maxTotal) {
      spawnAgent();
    }
  }, 750);
}

// ------------------------------------------------------------------------
// AGENT CLASS
// ------------------------------------------------------------------------
class Agent {
  constructor(x, y, velocity, color, size) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.color = color;
    this.size = size;
    this.bounceCount = 0;
    this.collision = true;
  }
  
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
  
  update() {
    this.draw();
    this.x = this.x + this.velocity.x;
    this.y = this.y + this.velocity.y;
  }
  collisionCheck(axis, maxBounce) {
    if (this.bounceCount < maxBounce) {
      this.velocity[axis] = opposite(this.velocity[axis]);
      this.bounceCount++;
    } else {
      this.collision = false;
      // agents.splice(index, 1);
    }
  }
}

// ------------------------------------------------------------------------
// MISC FUNCTIONS & EVENT LISTENIERS
// ------------------------------------------------------------------------
function randInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randFloat(min, max) { // max excluded
  return Math.random() * (max - min) + min;
}

function randColor() {
  return `hsl(${randInt(0,360)}, 100%, 50%)`;
}

function opposite(number) {
  return ( -number );
}

function centerSquare(coord, input) {
  if (coord === 'x') { return (canvas.width / 2) - (input / 2); }
  else if (coord === 'y') { return (canvas.height / 2) - (input / 2); }
  else { return 'err'; }
}

function spawnAgent() {
  // get agent size and speed
  let size = randInt(settings.agent.size.min, settings.agent.size.max);
  let speed = randInt(settings.agent.speed.min, settings.agent.speed.max);
  
  // find angle for velocity
  let angle = Math.atan2(
    randInt(0, canvas.height) - (canvas.height / 2), // y
    randInt(0, canvas.width) - (canvas.width / 2) // x
  );
  
  // agent velocity and speed multiplier
  let velocity = {
    x: Math.cos(angle) * speed,
    y: Math.sin(angle) * speed
  };
  
  // add to array
  agents.push(new Agent(
    centerSquare('x', size),  // x start pos
    centerSquare('y', size),  // y start pos
    velocity,                 // agent velocity
    randColor(),              // agent color
    size
  ));
}

// resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// spawn agent on click
// document.addEventListener('click', spawnAgent);

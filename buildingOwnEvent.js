const EventEmitter = require("events");

class GameEvent extends EventEmitter {
  constructor(Name) {
    super();
    this.Name = Name;
  }
  GameStatrted() {
    this.emit("GameStart", this.Name);
  }
  HealthCheck(Health) {
    this.emit("CheckHealth", Health, this.Name);
  }
}

const game = new GameEvent("Amit");
game.on("CheckHealth", (health, Name) => {
  if (health === 70 || health === 50)
    console.log(`${Name} your health is getting low`);
  else if (health <= 20&&health>0)
    console.log(`Hey ${Name} Your Health is below ${health} !`);
  else if (health === 0) console.log(` Hey ${Name} Your Game is Over (:!`);
  else console.log(`Hey ${Name} Your Health is ${health}`);
});
game.on("GameStart", (Name) => {
  console.log(`Hey ${Name} Your Game is Starting!`);
});
let Health = 100;
const theInterveal = setInterval(() => {
  if (Health === 100) game.GameStatrted("Amit");
  game.HealthCheck(Health);
  if (Health === 0) clearInterval(theInterveal);
  Health--;
}, 100);

// clearInterval(theInterveal)

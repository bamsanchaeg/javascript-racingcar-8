import { Random } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class RacingGame {
  constructor(names, tryCount) {
    this.cars = names.map((n) => new Car(n));
    this.tryCount = tryCount;
  }

  play() {
    const results = [];
    for (let i = 0; i < this.tryCount; i++) {
      this.cars.forEach((car) => {
        const rand = Random.pickNumberInRange(0, 9);
        car.move(rand);
      });
      results.push(this.cars.map((car) => car.getStatus()));
    }
    return results;
  }

  getWinners() {
    const maxPos = Math.max(...this.cars.map((c) => c.position));
    return this.cars.filter((c) => c.position === maxPos).map((c) => c.name);
  }
}

export default RacingGame;

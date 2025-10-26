class Car {
  constructor(name) {
    if (!name || name.length > 5) {
      throw new Error("자동차 이름은 1자 이상 5자 이하만 가능합니다.");
    }
    this.name = name.trim();
    this.position = 0;
  }

  move(randomNumber) {
    if (randomNumber >= 4) this.position++;
  }

  getStatus() {
    return `${this.name} : ${"-".repeat(this.position)}`;
  }
}

export default Car;

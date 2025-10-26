import { Console } from "@woowacourse/mission-utils";

class InputView {
  static async readCarNames() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요(이름은 쉼표(,) 기준): "
    );
    const names = input.split(",").map((n) => n.trim());
    if (names.some((n) => n === ""))
      throw new Error("[ERROR] 자동차 이름은 공백일 수 없습니다.");
    if (new Set(names).size !== names.length)
      throw new Error("[ERROR] 자동차 이름은 중복될 수 없습니다.");
    return names;
  }

  static async readTryCount() {
    const input = await Console.readLineAsync("시도할 횟수를 입력하세요: ");
    const num = Number(input);
    if (isNaN(num) || num <= 0)
      throw new Error("[ERROR] 시도 횟수는 양의 정수여야 합니다.");
    return num;
  }
}

export default InputView;

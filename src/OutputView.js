import { Console } from "@woowacourse/mission-utils";

class OutputView {
  static printResults(results) {
    Console.print("\n실행 결과");
    results.forEach((round) => {
      round.forEach((line) => Console.print(line));
      Console.print("");
    });
  }

  static printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default OutputView;

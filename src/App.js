import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import RacingGame from "./RacingGame.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const names = await InputView.readCarNames();
      const tryCount = await InputView.readTryCount();

      const game = new RacingGame(names, tryCount);
      const results = game.play();

      OutputView.printResults(results);
      OutputView.printWinners(game.getWinners());
    } catch (error) {
      Console.print(`${error.message}`);
      return Promise.reject(error);
    }
  }
}
export default App;

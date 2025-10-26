import InputView from "./view/InputView.js";
import OutputView from "./view/OutputView.js";
import RacingGame from "./domain/RacingGame.js";
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
      throw error;
    }
  }
}
export default App;

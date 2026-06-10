import { useState } from "react";
import NumberSelector from "./NumberSelectorTailwind";
import TotalScore from "./TotalScoreTailwind";
import RoleDice from "./RoleDiceTailwind";
import Rules from "./RulesTailwind";
import { Button, OutlineButton } from "./ButtonTailwind";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <main className="pt-[70px]">
      {/* top_section */}
      <div className="flex justify-around items-end">
        <TotalScore score={score} />

        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>

      <RoleDice currentDice={currentDice} roleDice={roleDice} />

      {/* btns */}
      <div className="mt-10 flex flex-col items-center justify-center gap-2.5">
        <OutlineButton onClick={resetScore}>
          Reset Score
        </OutlineButton>

        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>

      {showRules && <Rules />}
    </main>
  );
};

export default GamePlay;
import { Button } from "./ButtonTailwind";

const StartGame = ({ toggle }) => {
  return (
    <div className="max-w-[1180px] h-screen flex mx-auto items-center">
      <img
        src="/images/dices.png"
        alt="Dice game illustration"
      />

      <div className="content">
        <h1 className="text-[96px] whitespace-nowrap">
          Dice Game
        </h1>

        <Button onClick={toggle}>
          Play Now
        </Button>
      </div>
    </div>
  );
};

export default StartGame;
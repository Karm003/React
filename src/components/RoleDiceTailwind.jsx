const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <div className="mt-12 flex flex-col items-center">
      <button type="button" onClick={roleDice}>
        <img
          src={`/images/dice/dice_${currentDice}.png`}
          alt={`dice ${currentDice}`}
          className="cursor-pointer"
        />
      </button>

      <p className="text-2xl">
        Click on Dice to roll
      </p>
    </div>
  );
};

export default RoleDice;
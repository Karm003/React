const TotalScore = ({ score }) => {
  return (
    <div className="max-w-[220px] text-center">
      <h1 className="text-[5rem] font-extrabold leading-[1]">{score}</h1>
      <p className="text-2xl font-semibold text-slate-600">Total Score</p>
    </div>
  )
}

export default TotalScore

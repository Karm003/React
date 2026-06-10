const Rules = () => {
  return (
    <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-2xl font-semibold text-slate-900">How to play dice game</h2>
      <div className="mt-5 space-y-3 text-slate-700">
        <p>Select any number.</p>
        <p>Click on the dice image.</p>
        <p>If the selected number equals the rolled dice number, you earn that many points.</p>
        <p>If the guess is wrong, 2 points are deducted.</p>
      </div>
    </div>
  )
}

export default Rules

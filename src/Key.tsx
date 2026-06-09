
function Key({char , type}: {char: string, type: string}) {

  return (
    <>
        <button className = {`w-${type} h-6 border-2 rounded-xl bg-neutral-200 flex justify-center items-center  border-neutral-400 p-6`}>
              <div className="w-full text-xs font-medium text-neutral-900">
            {char}
        </div>

        </button>
      
    </>
  )
}

export default Key
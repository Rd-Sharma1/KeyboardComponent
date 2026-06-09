
function Key({ char, type }: { char: string; type: string }) {
  const widthSpecs: Record<string, number> = {
    letter: 26, 
    md: 40,     
    lg: 46,     
    xlg: 60,    
    half: 40,   
    space: 132, 
  };

  const calculatedWidth = (widthSpecs[type] || widthSpecs.letter)*2;

    const isStacked = char.includes('|');
    const subKeys = isStacked ? char.split('|') : [char];
  
     return (
    <>
  
    <button
            style={{ width: `${calculatedWidth}px`}}

      className="
        h-12
      relative
        flex justify-center items-center 
        rounded-xl border border-neutral-400 
        bg-neutral-200 
        transition-all duration-30
        box-border shrink-0
        inset-shadow-xs inset-shadow-neutral-50
        shadow-2xs shadow-neutral-400 
        flex-col overflow-hidden
        hover: cursor-pointer 
        transform active:scale-98 active:inset-shadow-none
        active:shadow-none
        "
        >
  
        {
            isStacked ? 
            subKeys.map((arrKey, idx)=>(
                <div key={idx} className="w-full h-6 text-neutral-900 text-center text-xs border rounded-t-sm border-neutral-50 ">{arrKey}</div>
            ))
            :
            <div className="w-full text-[10px] font-medium text-neutral-900 lowercase text-center">
                {char === "empty" ? "" : char}
            </div>
        }
        <div className='absolute top-px inset-x-0 w-11/12 h-px bg-linear-to-r from-transparent via-neutral-50 to-transparent'>
    </div>
    </button>
    </>
  );
   }

export default Key;
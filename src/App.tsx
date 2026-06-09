import Key from './Key'

 type KeyRow = Record<string, string>
    const keyChars : KeyRow[]  = [
      {"esc": "medium", "f1": "letter", "f2": "letter", "f3": "letter", "f4": "letter", "f5": "letter", "f6": "letter", "f7": "letter", "f8": "letter", "f9": "letter", "f10": "letter", "f11": "letter", "f12": "letter", "empty": "letter"},

      {"~" : "letter", "1": "letter", "2": "letter", "3": "letter", "4": "letter", "5": "letter", "6": "letter", "7": "letter", "8": "letter", "9": "letter", "0": "letter", "-": "letter", "=": "letter", "backspace": "lg",},

      {"tab": "md","Q": "letter", "W": "letter", "E": "letter", "R": "letter", "T": "letter", "Y": "letter", "U": "letter", "I": "letter", "O": "letter", "P": "letter", "[": "letter", "]": "letter", "\\": "letter",},

      {"caps": "lg", "A": "letter", "S": "letter", "D": "letter", "F": "letter", "G": "letter", "H": "letter", "J": "letter", "K": "letter", "L": "letter", ";": "letter", "'": "letter", "enter": "lg",},

      {"shift": "xlg", "Z": "letter", "X": "letter", "C": "letter", "V": "letter", "B": "letter", "N": "letter", "M": "letter", ",": "letter", ".": "letter", "/": "letter","shift2": "xlg",},

     { "ctrl": "half", "win": "letter", "alt": "letter", "space": "space", "altGr": "letter", "fn": "letter", "menu": "letter", "ctrl2": "letter"},
    ]


function App() {

  return (
    <>
    <div className=' bg-neutral-900 h-screen flex justify-center items-center'>

      <div className='w-200 p-2 bg-neutral-300 border-2 border-neutral-950 rounded-3xl flex flex-wrap gap-1 justify-center items-center'>
        {keyChars.map((row) => (
         Object.entries(row).map(([char, type]) => 
         <Key key={char} char={char} type={type}/>
        )
      ))
      }
      </div>
    </div>

    </>

  )
}

export default App
import './App.css'

import { Contador  } from './components/Contador'
import { ModoOscuro } from './components/ModoOscuro'
import { TextoExpandible } from './components/TextoExpandible'
import { InputPrev } from './components/InputPrev'

function App() {
  
  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='absolute top-10 left-0 text-4xl font-bold text-center bg-amber-300 text-amber-50 p-5'>Ejercicios con UseState</h1>
        <div className='bg-amber-200 h-screen w-[90vw] flex items-center justify-center'>
          <Contador />
        </div>
        <div className='bg-blue-200 h-screen w-[90vw] flex items-center justify-center'>
          <ModoOscuro />
        </div>
        <div className='bg-green-200 h-screen w-[90vw] flex items-center justify-center'>
          <TextoExpandible />
        </div>
        <div className='bg-red-200 h-screen w-[90vw] flex items-center justify-center'>
          <InputPrev />
        </div>
      </div>
    </>
  )
}

export default App

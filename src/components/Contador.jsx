import React, { useState } from 'react'

export function Contador() {

    // Crear un componente funcional. 
    // Usar `useState` para inicializar el contador en 0
    // y una función para actualizarlo cada vez que se haga clic en un botón.

    const [contador, setContador] = useState(0)

    const incrementar = () => { setContador(prevContador => prevContador + 1) }

    const decrementar = () => { setContador(prevContador => prevContador - 1) }

    const incrementarEnDiez = () => { setContador(prevContador => prevContador + 10) }

    const decrementarEnDiez = () => { setContador(prevContador => prevContador - 10) }

    const reset = () => { setContador(0) }

    const estilosBaseButton = 'bg-amber-300 text-black p-2 rounded-md';

    return (
        <div className='flex flex-col items-center justify-center bg-amber-800 p-5 rounded-md'>
            <h2 className='text-2xl font-bold text-amber-50'>Contador</h2>
            <p className='text-4xl font-bold text-amber-50 m-16'>{contador}</p>
            <div className='flex gap-4 items-center justify-center flex-wrap'>
                <button className={estilosBaseButton} onClick={incrementarEnDiez}>Incrementar + 10 </button>
                <button className={estilosBaseButton} onClick={incrementar}>Incrementar + 1</button>
                <button className={estilosBaseButton} onClick={decrementar}>Decrementar - 1</button>
                <button className={estilosBaseButton} onClick={decrementarEnDiez}>Decrementar - 10</button>
                <button className={`${estilosBaseButton} grow-2`} onClick={reset}>Resetear a 0</button>
            </div>
        </div>
    )
}
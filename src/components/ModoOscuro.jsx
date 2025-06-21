import React, { useState } from 'react'

export function ModoOscuro() {

    //Usar `useState` para gestionar el estado `isDarkMode` (booleano). 
    // Un botón para cambiar este estado. Aplicar estilos condicionalmente 
    // (por ejemplo, clases CSS o estilos en línea) basados en `isDarkMode`.

    const [ isDarkMode, setIsDarkMode ] = useState(true)


    const changeMode = () => {
        setIsDarkMode( prevIsDarkMode => !prevIsDarkMode)
    }

    // const changeBackground = () => {
    //     return isDarkMode ? 'bg-cyan-700 p-5' :
    //                         'bg-cyan-400 p-5'
    // }

    // const changeText = () => {
    //     return isDarkMode ? <p className='text-amber-50'>Oscuro</p> :
    //                         <p className='text-black'>Claro</p>
    // }

    // const changeButton = () => {
    //     return isDarkMode ? 'text-amber-50 bg-yellow-500' :
    //                         'text-black bg-amber-300'
        
    // }

    const themeStyles = {
        // themeStyles.dark es todo el objeto themeStyles asociado a la clave dark
        dark: {
            background: 'bg-cyan-700 p-5',
            text: <p className='text-amber-50'>Oscuro</p>,
            button: 'text-amber-50 bg-yellow-500'
        },
        // themeStyles.ligth es todo el objeto themeStyles asociado a la clave ligth
        light: {
            background: 'bg-cyan-400 p-5',
            text: <p className='text-black'>Claro</p>,
            button: 'text-black bg-amber-300'
        }
    };
    
    // Accedemos a los valores guardados dentro de themeStyles.dark o .light 
    // de tal manera que currentTheme solo ve los valores background, text y button 
    // que es lo que retorna tanto themeStyles.dark o .ligth
    const currentTheme = isDarkMode ? themeStyles.dark : themeStyles.light;
    
    return (
        <div className={` flex flex-col items-center justify-evenly rounded-md min-w-60 min-h-60 ${currentTheme.background} `}>
            <h2 className='text-2xl flex flex-col items-center'> Modo {currentTheme.text} </h2>
            <button className={` p-2 rounded-md ${currentTheme.button} `} onClick={changeMode}>
                <b>Cambiar Modo</b>
            </button>
        </div>
    );
}

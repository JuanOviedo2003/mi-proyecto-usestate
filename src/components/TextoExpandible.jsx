import React, { useState } from 'react'

export function TextoExpandible() {

    //Usar `useState` para gestionar un estado `isExpanded` (booleano). Mostrar el 
    // texto completo o truncado condicionalmente. Un botón para alternar el estado `isExpanded`.

    const [ isExpanded, setIsExpanded ] = useState(false);

    const handleExpanded = () => {
        setIsExpanded(prevIsExpanded => !prevIsExpanded);
    }

    let showText = isExpanded ? 'El arte, en todas sus formas, es otra manifestación poderoasa de la creatividad humana. La pintura, la escultura, la música y la danza son lenguajes universales que trascienden las barreras culturales y lingüísticas, conectando a las personas a través de la belleza y la expresión. Cada obra de arte es un reflejo del espíritu humano, una ventana a la visión particular del artista y una invitación a la reflexión.' 
                                : '...';

    let textButton = isExpanded ? 'Mostrar menos' 
                                : 'Mostrar más';

    return (
        <div className='flex flex-col items-center justify-center rounded-md max-w-80 max-h-80'>
            <h2 className='p-8 font-bold text-2xl'>Texto Expandible</h2>
            <p className='text-justify'>
            La educación es un pilar fundamental para el desarrollo individual y social. 
            A través de ella, las personas adquieren conocimientos, habilidades y valores
            que les permiten desenvolverse en la vida y contribuir al progreso de sus comunidades.
            Invertir en educación es invertir en un futuro mejor.

            {showText}
            </p>

            <button className='px-2 py-3 m-4 rounded-md bg-emerald-700 text-amber-50 font-bold' onClick={handleExpanded}>
                {textButton}
            </button>
        </div>
    )
}

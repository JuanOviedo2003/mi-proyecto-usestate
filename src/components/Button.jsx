import React from 'react';

export function Button ({ funcion, texto, estilos }) {
    return (
        <button className={estilos} onClick={funcion}>
            {texto}
        </button>
    );
}
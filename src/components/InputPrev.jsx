import React, { useState } from 'react';

export const InputPrev = () => {

    const [valorInput, setValorInput] = useState('');

    const handleInputChange = (e) => {
        setValorInput(e.target.value);
    };

    return (
        <div className='flex flex-col items-start justify-center bg-fuchsia-300 p-5 rounded-md'>
            <h2 className='text-2xl font-bold text-amber-50 m-2'>Input Previo</h2>
            <label className='m-2' id='miInput'>Escribe algo:</label>
            <input
                className={`bg-fuchsia-200 border-2 border-amber-50 `}
                type="text"
                id="miInput"
                value={valorInput}
                onChange={handleInputChange}
                style={{ marginLeft: '10px', padding: '5px' }}
            />
            <p className={` max-w-52 md:min-w-96 p-6 bg-fuchsia-200 m-4 ${valorInput.length > 30 && 'break-words'} `}>
                <b>Valor actual:</b> {valorInput}
            </p>
        </div>
    );
};
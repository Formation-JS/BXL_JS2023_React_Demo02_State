import { useState } from 'react';

const Multi5 = () => {

   // Déclaration d'un state
   // -> Si pas de valeur, initialisation à "1"
   // -> Sinon, il prend la valeur stocké dans le state
   const [nb, setNb] = useState(1);

    const handleMulti = () => {
        console.log('Avant Multi 5 -> ', nb);
        setNb(nb => nb * 5);
        console.log('Après Multi 5 -> ', nb);
    }

    const handleReset = () => {
        setNb(1);
    }

    return (
        <>
            <p>Valeur actuelle {nb}</p>
            <button onClick={handleMulti}>X 5</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
};

export default Multi5;
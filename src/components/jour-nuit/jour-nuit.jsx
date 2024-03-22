import { useState } from 'react'

const JourNuit = () => {

    const [day, setDay] = useState(true)

    const handleChangeDay = () => {

        setDay(prevDay => !prevDay);
        // setDay((day) => !day);
        // setDay((day) => { return  !day });
    }

    return (
        <p onClick={handleChangeDay}>
            Il fait : {day ? 'Jour 🌞' : 'Nuit 🌑'}
        </p>
    )
}

export default JourNuit;
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const NumberInput = () => {
    const [numeros, setNumeros] = useState({
        numero1: 0,
        numero2: 0,
    });

    const handleChange = (e) => {
        setNumeros({
            numero1: parseFloat(e.target.value),
            numero2: numeros.numero2,
      })
    };

      const handleChange2 = (e) => {
        setNumeros({
            numero2: parseFloat(e.target.value),
            numero1: numeros.numero1,
      })
    };

    return (
        <>
            <label>
               Número 1 : {" "}
               <input value={numeros.numero1} onChange={handleChange} type="number" />
            </label>  
            <label>
               Número 2 : {" "}
               <input value={numeros.numero2} onChange={handleChange2} type="number" />
            </label> 
        </>
    );
}

NumberInput.propTypes = {
name: PropTypes.string,
}

export default NumberInput
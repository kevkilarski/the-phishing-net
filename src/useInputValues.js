import React, { useState } from 'react';

function useInputValues(callback) {

    const [inputs, setInputs] = useState({});
    
    const handleSubmit = (event) => {
        if (event) {
        event.preventDefault();
        }
    }

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    
    return {
        handleSubmit,
        handleInputChange,
        inputs
    };

}

export default useInputValues;
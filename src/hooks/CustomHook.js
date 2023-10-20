import React from 'react'
import { useInput } from './custom/useInput';


function displayMessage(message) {
    alert(message);
};

const CustomHook = () => {
    const [inputValue, handleChange, handleSubmit] = useInput("", displayMessage);

    return (
        <div>
            <h1>useInput</h1>
            <input
                value={inputValue}
                onChange={handleChange}
            />
            <button
                onClick={handleSubmit}
            >
                확인
            </button>
        </div>
    )
}

export default CustomHook
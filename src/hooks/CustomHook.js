import React, { useEffect, useState } from 'react'
import { useInput } from './custom/useInput';
import useFecth from './custom/useFecth';


function displayMessage(message) {
    alert(message);
};

const baseUrl = "https://jsonplaceholder.typicode.com";

const CustomHook = () => {
    // # 실습 1
    const [inputValue, handleChange, handleSubmit] = useInput("", displayMessage);
    const { data: userData } = useFecth(baseUrl, 'users');
    const { data: postData } = useFecth(baseUrl, 'posts');

    return (
        <div>
            <h1>useInput</h1>
            <input
                value={inputValue}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>확인</button>

            <div className="line_breaker"></div>
            <h1>useFetch</h1>
            <h2>Users</h2>
            <pre>{userData && JSON.stringify(userData, null, 2)}</pre>
            <h2>Post</h2>
            <pre>{postData && JSON.stringify(postData, null, 2)}</pre>
        </div >
    )
}

export default CustomHook
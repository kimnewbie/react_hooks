import React, { useEffect, useRef } from 'react'

const UseRefSecond = () => {
    const inputRef = useRef();

    const login = () => {
        alert(`환영합니다 ${inputRef.current.value}`);
        inputRef.current.focus();
    }

    useEffect(() => {
        // 처음 시작할 때 focus
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <input type="text" placeholder='username' ref={inputRef} />
            <button onClick={login}>로그인</button>
        </div>
    )
}

export default UseRefSecond
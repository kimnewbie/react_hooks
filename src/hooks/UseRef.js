import React, { useRef, useState } from 'react'

const UseRef = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const increaseCountState = () => {
        setCount(count + 1);
    };

    // 이 기능이 있어도 화면상으로 Ref는 0으로 보인다.
    // 바로바로 렌더링 되지 않기 때문이다.
    const increaseCountRef = () => {
        countRef.current = countRef.current + 1;
    };

    return (
        <div>
            <h1>State: {count}</h1>
            <h1>Ref: {countRef.current}</h1>
            <button onClick={increaseCountState}>State 올려</button>
            <button onClick={increaseCountRef}>Ref 올려</button>
        </div>
    );
};

export default UseRef
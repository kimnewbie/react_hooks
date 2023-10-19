import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    // # 실습 1
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    // # 실습 2
    const [renderer, setRenderer] = useState(0);
    let countVar = 0;

    // # 실습 3
    const renderCount = useRef(1);

    const increaseCountState = () => {
        setCount(count + 1);
    };

    // 이 기능이 있어도 화면상으로 Ref는 0으로 보인다.
    // 바로바로 렌더링 되지 않기 때문이다.
    const increaseCountRef = () => {
        countRef.current = countRef.current + 1;
    };

    // # 실습 2
    const increaseVar = () => {
        countVar = countVar + 1;
    };

    const doRendering = () => {
        setRenderer(renderer + 1);
        // 이걸 누르면 Ref는 올라가지만, Var는 0이된다. 
        // 왜? 렌더링되면서 화면이 초기화 되기 때문에.
    }

    const printResults = () => {
        console.log(`ref: ${countRef.current}, var: ${countVar}`);
    }

    // # 실습 3
    // 얼마나 렌더링 되는지 counting
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
        console.log(renderCount.current)
    });

    return (
        <div>
            {/* State vs Ref */}
            <h1>State: {count}</h1>
            <h1>Ref: {countRef.current}</h1>
            <button onClick={increaseCountState}>State 올려</button>
            <button onClick={increaseCountRef}>Ref 올려</button>
            <div className="line_breaker"></div>
            <div className="line_breaker"></div>
            <h1>Ref: {countRef.current}</h1>
            <h1>Var: {countVar}</h1>
            <button onClick={increaseCountRef}>Ref 올려</button>
            <button onClick={increaseVar}>Var 올려</button>
            <button onClick={doRendering}>렌더!</button>
            <button onClick={printResults}>Ref Var 값 출력</button>
        </div>
    );
};

export default UseRef
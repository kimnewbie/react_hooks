import React, { useCallback, useEffect, useState } from 'react'

const UseCallback = () => {
    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(true);

    // # 실습 1
    // const someFunction = () => {
    //     console.log(`someFunc: number: ${number}`);
    //     return;
    // };

    // # 실습 2 useCallback으로 감싸기
    const someFunction = useCallback(() => {
        console.log(`someFunc: number: ${number}`);
        return;
    }, [number]);

    // # 실습 1 재렌더링 되면서 someFunction 의 주소값이
    // 변경되어 number가 변경될 때(재렌더링) 마다 계속 호출해주게 된다.
    useEffect(() => {
        console.log('someFunction이 변경되었습니다.');
        // 숫자가 변경될 때도 호출된다.
        // 왜? 리액트에서는 변수가 변경될 때마다
        // 재렌더링 해주기 때문
    }, [someFunction]);

    return (
        <div>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
            <div className="line_breaker"></div>
            <button onClick={someFunction}>Call someFunc</button>
        </div>
    )
}

export default UseCallback
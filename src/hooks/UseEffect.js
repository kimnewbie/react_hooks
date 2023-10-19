import React, { useEffect, useState } from 'react'

// Clean Up 예시를 위한 컴포넌트
const Timer = (props) => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('타이머 돌아가는 중...');
        }, 1000);

        // Clean Up
        return () => {
            clearInterval(timer);
            console.log('타이머가 종료되었습니다.')
        }
    });

    return (
        <div>
            <span>타이머를 시작합니다. 콘솔을 보세요!</span>
        </div>
    )
}

export const UseEffect = () => {
    const [count, setCount] = useState(1);
    const [name, setName] = useState('');
    const [showTimer, setShowTimer] = useState(false);

    const handleCountUpdate = () => {
        setCount(count + 1);
    }

    const handleInputChange = (e) => {
        setName(e.target.value);
    }

    // // 렌더링 될 때마다 매번 실행됨
    // useEffect(() => {
    //     console.log('렌더링 🌟');
    // });

    // // 마운트 + count가 변경될 때만 실행
    // useEffect(() => {
    //     console.log('🥎 count 변화');
    // }, [count]);

    // // 마운트 + name이 변경될 때만 실행
    // useEffect(() => {
    //     console.log('🐶 name 변화');
    // }, [name]);

    return (
        <div>
            <button onClick={handleCountUpdate}>Update</button>
            <span>count : {count}</span>
            <div className="line_breaker"></div>
            <input type="text" value={name} onChange={handleInputChange} />
            <span>name : {name}</span>
            <div className="line_breaker"></div>
            {showTimer && <Timer />}
            <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
        </div>
    )
}

import React, { useEffect, useState } from 'react'

// input이 계속 호출되는 걸 막기 위한 함수
const heavyWork = () => {
    console.log('엄청 무거운 함수 불리는 테스트')
    return ['홍길동', '바비'];
}

const UseState = () => {
    const [time, setTime] = useState(1);
    // 콜백함수를 사용하면 매번 호출하지 않고, 처음 한 번만 호출함
    const [names, setNames] = useState(() => heavyWork());
    const [input, setInput] = useState('');

    const handleClick = () => {
        let newTime;
        if (time > 12) {
            newTime = 1;
        } else {
            newTime = time + 1;
        }
        setTime(newTime);
    }

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleUpload = () => {
        setNames((prev) => {
            console.log('이전 state : ', prev)
            return [input, ...prev];
        })
    }


    return (
        <div>
            <h1>현재 시각 : {time}시</h1>
            <button onClick={handleClick}>Update</button>
            <div className='break_line'></div>
            <input type="text" value={input} onChange={handleInputChange} />
            <button onClick={handleUpload}>Upload</button>
            {
                names.map((name, index) => {
                    return <p key={index}>{name}</p>
                })
            }
        </div>
    )
}

export default UseState
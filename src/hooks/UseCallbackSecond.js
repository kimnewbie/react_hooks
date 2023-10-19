import React, { useCallback, useEffect, useState } from 'react'

const Box = ({ createBoxStyle }) => {
    const [style, setStyle] = useState({});

    useEffect(() => {
        console.log('Box 사이즈 변경하기 🥎');
        setStyle(createBoxStyle());
    }, [createBoxStyle]);

    return <div style={style}></div>
}

const UseCallbackSecond = () => {
    const [size, setSize] = useState(100);
    const [isDark, setIsDark] = useState(false);

    // // # 실습1
    // const createBoxStyle = () => {
    //     return {
    //         background: 'pink',
    //         width: `${size}px`,
    //         height: `${size}px`,
    //     }
    // }

    // # 실습2 size가 바꼈을 때만 변경되도록 수정
    const createBoxStyle = useCallback(() => {
        return {
            background: 'pink',
            width: `${size}px`,
            height: `${size}px`,
        }
    }, [size]);

    return (
        <div
            className='box_container'
            style={{
                background: isDark ? 'black' : 'white'
            }}
        >
            <input
                type="number"
                value={size}
                onChange={(e) => setSize(e.target.value)}
            />
            <button onClick={() => setIsDark(!isDark)}>
                Change Theme
            </button>
            <div class="line_breaker"></div>
            <Box createBoxStyle={createBoxStyle} />
        </div>
    )
}

export default UseCallbackSecond
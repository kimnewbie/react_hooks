import React, { useCallback, useState } from 'react'
import Child from './components/Child';

const ReactMemo = () => {
    const [parentAge, setParentAge] = useState(0);


    const incrementParentAge = () => {
        setParentAge(parentAge + 1);
    };

    // 함수라서 useCallback() 사용
    const tellMe = useCallback(() => {
        console.log('뉴지나 사랑해❤️');
    }, []);

    console.log('👨‍👩‍👧‍👦 부모 컴포넌트가 렌더링이 되었어요!');

    return (
        <div
            style={{
                border: '2px solid navy',
                padding: '10px'
            }}
        >
            <h1>👨‍👩‍👧‍👦 부모</h1>
            <p>age:{parentAge}</p>
            <button
                onClick={incrementParentAge}
            >
                부모 나이 증가
            </button>
            <Child name={'김뉴진'} tellMe={tellMe} />
        </div>
    );
};

export default ReactMemo
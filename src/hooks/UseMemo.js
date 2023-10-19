import React, { useMemo, useState } from 'react'

const hardCalculate = (number) => {
    console.log('hardCalculate')
    for (let i = 0; i < 999999999; i++) { } // 생각하는 시간
    return number + 10000;
}

const easyCalculate = (number) => {
    console.log('easyCalculate')
    return number + 1;
}

const UseMemo = () => {
    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);

    // 버튼을 눌렀을 때 시간이 꽤 걸림
    // const hardSum = hardCalculate(hardNumber);
    // easySum을 눌렀을 때 hardSum이 동작하지 않도록 수정
    const hardSum = useMemo(() => {
        return hardCalculate(hardNumber)
    }, [hardNumber]);

    const easySum = easyCalculate(easyNumber);

    return (
        <div>
            <h3>어려운 계산기</h3>
            <input
                type="number"
                value={hardNumber}
                onChange={(e) => setHardNumber(parseInt(e.target.value))}
            />
            <span> + 10000 = {hardSum}</span>
            <div className="line_breaker"></div>
            <h3>쉬운 계산기</h3>
            <input
                type="number"
                value={easyNumber}
                onChange={(e) => setEasyNumber(parseInt(e.target.value))}
            />
            <span> + 1 = {easySum}</span>
        </div>
    )
}

export default UseMemo
import React, { useEffect, useMemo, useState } from 'react'

const UseMemoSecond = () => {
    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    // # 실습 1 : location 이 원시 타입인 경우
    // const location = isKorea ? '한국' : '외국';

    // # 실습 2 : loacion
    // const location = {
    //     country: isKorea ? '한국' : '외국'
    // }

    // # 실습 3 : isKorea가 변경됐을 때만 바뀌게 수정
    const location = useMemo(() => {
        return {
            country: isKorea ? '한국' : '외국'
        }
    }, [isKorea])

    useEffect(() => {
        console.log('calling...');
        // location이 obj인 경우에는 주소값이 매번 다르기
        // 때문에 계속 rendering 된다.
    }, [location])

    return (
        <div>
            <h2>하루에 몇 끼 먹어요?</h2>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber()}
            />
            <div className="line_breaker"></div>
            <h2>어느 나라에 있어요?</h2>
            {/* <p>나라 : {location}</p> */}
            <p>나라 : {location.country}</p>
            <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
        </div>
    )
}

export default UseMemoSecond
import { useEffect, useState } from "react";

const useFecth = (baseUrl, initialType) => {
    const [data, setData] = useState(null);

    // # 실습 2 
    const fetchUrl = (type) => {
        fetch(baseUrl + '/' + type)
            .then((res) => res.json())
            .then((res) => setData(res));
    };

    useEffect(() => {
        fetchUrl(initialType);
    }, []);

    return {
        data,
        fetchUrl
    }
}

export default useFecth
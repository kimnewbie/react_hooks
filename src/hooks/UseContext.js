import React, { useState } from 'react'
import Page from './components/Page';

const UseContext = () => {
    const [isDark, setIsDark] = useState(false);

    return (
        <>
            <Page isDark={isDark} setIsDark={setIsDark} />
        </>
    )
}

export default UseContext
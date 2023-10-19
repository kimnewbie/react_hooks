import React, { useState } from 'react'
import Page from './components/Page';
import { UserContext } from './context/UserContext';
import { ThemeContext } from './context/ThemeContext';

const UseContext = () => {
    const [isDark, setIsDark] = useState(false);

    return (
        <UserContext.Provider value={'YJ Kim'}>
            <ThemeContext.Provider value={{ isDark, setIsDark }}>
                <Page />
            </ThemeContext.Provider>
        </UserContext.Provider>
    )
}

export default UseContext
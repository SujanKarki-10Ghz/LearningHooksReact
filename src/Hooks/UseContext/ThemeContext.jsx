import React,{useContext, useState} from 'react';

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

//custom Hooks
export function useTheme(){
    return useContext(ThemeContext);
}

export function updateTheme(){
    return useContext(ThemeUpdateContext);
}

export function ThemeProvider({children}){
    const [darkTheme, setDarkTheme] = useState(true);

    const toggleTheme=()=>{
        setDarkTheme(prevDarkTheme=>!prevDarkTheme);
    }

    return(
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}
import React, { useContext, useState, createContext } from 'react';

const stateContext = createContext();
const initialState = {
    cart:false,
    chat:false,
    notification:false,
    userProfile:false,
}

export const ContextProvider = ({children}) => {
    const [isMenuActive, setIsMenuActive] = useState(true)
    const [isClicked, setIsClicked] = useState({
        initialState
    })
    const handleClick = (clicked) => {
        setIsClicked({
            ...initialState,
            [clicked]: true
        })
    }
    const [screenSize, setScreenSize] = useState(undefined);
    return (
        <stateContext.Provider
            value={{ 
                isMenuActive,
                setIsMenuActive,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize
             }}
        >
            {children}
        </stateContext.Provider>
    )
}

export const useStateContext =() => useContext(stateContext);
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
    const [isClicked, setIsClicked] = useState({initialState})
    const [screenSize, setScreenSize] = useState(undefined);
    const [isSettingMenuOpen, setIsSettingMenuOpen] = useState(false);
    const [currentMode, setCurrentMode] = useState('Light');
    const [currentColor, setCurrentColor] = useState('#1A97F5');
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isNoticationOpen, setIsNoticationOpen] = useState(false);
    const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);

    const handleClick = (clicked) => {
        setIsClicked({
            ...initialState,
            [clicked]: initialState[clicked] === false ? true : false
        })
        console.log(initialState, "clickkkk");
    }

    const setTheme = (e) => {
        setCurrentMode(e.target.value);
        setIsSettingMenuOpen(false);
    }
    
    const setColor = (color) => {
        setCurrentColor(color);
        setIsSettingMenuOpen(false);
    }

    return (
        <stateContext.Provider
            value={{ 
                isMenuActive,
                setIsMenuActive,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                isSettingMenuOpen,
                setIsSettingMenuOpen,
                setTheme,
                setColor,
                currentColor,
                currentMode,
                isCartOpen,
                setIsCartOpen,
                isChatOpen,
                setIsChatOpen,
                isNoticationOpen,
                setIsNoticationOpen,
                isUserProfileOpen,
                setIsUserProfileOpen
             }}
        >
            {children}
        </stateContext.Provider>
    )
}

export const useStateContext =() => useContext(stateContext);
import { useEffect, useState } from "react";


export function useFixed () {

    const [ isFixed, setIsFixed ] = useState(false) 

    const positionStyles = { 
        position: "fixed", 
        zIndex: '100',
        boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
        backgroundColor: '#0093E9',
        backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
        
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 92) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        })
    }, [])


    return {
        isFixed, positionStyles
    }
}
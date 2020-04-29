import { useState, useCallback } from "react";

export function useBoolean() {
    const [isTrue, setIsTrue] = useState(false)

    const toggleBoolean = useCallback(() => {
        setIsTrue(state => !state)
    }, [])
    
    return [isTrue, toggleBoolean];
}
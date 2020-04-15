import { useState, useCallback } from "react";

export function useBoolean() {
    const [isTrue, setIsTrue] = useState(false)

    const toggleBoolean = useCallback(() => {
        setIsTrue(!isTrue)
    }, [isTrue])
    
    return [isTrue, toggleBoolean];
}
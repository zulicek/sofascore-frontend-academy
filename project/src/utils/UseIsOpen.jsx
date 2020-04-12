import { useState, useCallback } from "react";

export function useIsOpen() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = useCallback(() => {
        setIsOpen(!isOpen)
    }, [isOpen])
    
    return [isOpen, toggleOpen];
}
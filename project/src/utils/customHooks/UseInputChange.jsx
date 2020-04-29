
import { useState, useCallback } from "react";

export function useInputChange(newValue) {
    const [value, setValue] = useState(newValue);
  
    const handleInputChange = useCallback((newValue) => {
      setValue(newValue)
    }, [])
    
    return [value, handleInputChange];
  }
  
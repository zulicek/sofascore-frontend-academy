import React from "react";
import ReactDOM from 'react-dom'

export function Modal({ children }) {
    const markup = <div style={{ position: 'fixed', top: 200, background: 'whitesmoke' }}>{children}</div>
  
    return ReactDOM.createPortal(markup, document.getElementById('portal-root'))
  }
import React, { useRef } from "react";
import './Accordion.scss';
import { Header } from './Header';
import { Content } from './Content';
import { useBoolean } from '../../utils/customHooks/UseBoolean';

  
export function Accordion() {
    const [isOpen, toggleOpen] = useBoolean();
    const contentRef = useRef();

    {console.log(contentRef)}
  
  return (
    <div className="accordion">
        <Header onClick={toggleOpen} isOpen={isOpen}/>
        <Content ref={contentRef} height={isOpen ? `${contentRef.current.scrollHeight}px` : '0px'}/>
    </div>
  );
}



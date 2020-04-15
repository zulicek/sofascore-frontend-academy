import React, { useRef } from "react";
import './Accordion.scss';
import { Header } from './Header';
import { Content } from './Content';
import { useBoolean } from '../../utils/customHooks/UseBoolean';

  
export function Accordion() {
    const [isOpen, toggleOpen] = useBoolean();
    const content = useRef(null);
  
  return (
    <div className="accordion">
        <Header onClick={toggleOpen} isOpen={isOpen}/>
        <Content contentRef={content} height={isOpen ? `${content.current.scrollHeight}px` : '0px'}/>
    </div>
  );
}



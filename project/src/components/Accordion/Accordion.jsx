import React, { useRef } from "react";
import './Accordion.scss';
import { Header } from './Header';
import { Content } from './Content';
import { useIsOpen } from '../../utils/UseIsOpen';

  
export function Accordion() {
    const [isOpen, toggleOpen] = useIsOpen();
    const content = useRef(null);
  
  return (
    <div className="accordion">
        <Header onClick={toggleOpen}/>
        <Content contentRef={content} height={isOpen ? `${content.current.scrollHeight}px` : '0px'}/>
    </div>
  );
}



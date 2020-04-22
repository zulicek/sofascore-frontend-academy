import React, { useRef } from "react";
import "./Accordion.scss";
import { Header } from "./Header";
import { Content } from "./Content";
import { useBoolean } from "../../utils/customHooks/UseBoolean";

export function Accordion({ name, type, startDate, location, surface, competitors }) {
  const [isOpen, toggleOpen] = useBoolean();
  const contentRef = useRef();

  return (
    <div className="accordion">
      <Header
        onClick={toggleOpen}
        isOpen={isOpen}
        name={name}
        type={type}
        startDate={startDate}
        location={location.name}
        surface={surface}
      />
      <Content
        ref={contentRef}
        height={isOpen ? contentRef.current.scrollHeight : 0}
        location={location}
        competitors={competitors}
      />
    </div>
  );
}

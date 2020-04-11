import React from "react";
import './Accordion.scss';
import { Header } from './Header';
import { Content } from './Content';

export function Accordion() {
  return (
    <div className="accordion">
        <Header />
        <Content />
    </div>
  );
}

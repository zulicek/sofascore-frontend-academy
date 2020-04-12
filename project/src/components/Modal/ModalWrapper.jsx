import React from "react";
import { Modal } from "./Modal";
import { useIsOpen } from "../../utils/UseIsOpen";

export function ModalWrapper() {
  const [isOpen, toggleOpen ] = useIsOpen();
  return (
    <>
      <button onClick={toggleOpen}>Toggle Modal</button>
      {isOpen && (
        <Modal>
          <div style={{ border: "1px solid black" }}>
            <h1>I am the Modal</h1>
            <button onClick={toggleOpen}>Close</button>
          </div>
        </Modal>
      )}
    </>
  );
}

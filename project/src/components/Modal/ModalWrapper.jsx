import React from "react";
import { Modal } from "./Modal";
import { useBoolean } from "../../utils/customHooks/UseBoolean";

export function ModalWrapper() {
  const [isOpen, toggleOpen ] = useBoolean();
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

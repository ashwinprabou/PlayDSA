import React from "react";

interface ControlPanelInsertProps {
  append: (value: number) => void;
  prepend: (value: number) => void;
  set: (value: number) => void;
  insertBefore: (value: number) => void;
  insertAfter: (value: number) => void;
}
const ControlPanelInsert: React.FC<ControlPanelInsertProps> = ({
  append,
  prepend,
  set,
  insertBefore,
  insertAfter,
}) => {
  const appendNode = () => {
    const value = prompt("Enter a value for the new node:");
    if (value !== null) {
      const numericValue = parseInt(value, 10);
      if (!isNaN(numericValue)) {
        append(numericValue);
      } else {
        alert("Please enter a valid number.");
      }
    }
  };

  const prependNode = () => {
    const value = prompt("Enter a value for the new node:");
    if (value !== null) {
      const numericValue = parseInt(value, 10);
      if (!isNaN(numericValue)) {
        prepend(numericValue);
      } else {
        alert("Please enter a valid number.");
      }
    }
  };

  const setNode = () => {
    const value = prompt("Enter a value for the new node:");
    if (value !== null) {
      const numericValue = parseInt(value, 10);
      if (!isNaN(numericValue)) {
        set(numericValue);
      } else {
        alert("Please enter a valid number.");
      }
    }
  };

  const insertBeforeNode = () => {
    const value = prompt("Enter a value for the new node:");
    if (value !== null) {
      const numericValue = parseInt(value, 10);
      if (!isNaN(numericValue)) {
        insertBefore(numericValue);
      } else {
        alert("Please enter a valid number.");
      }
    }
  };

  const insertAfterNode = () => {
    const value = prompt("Enter a value for the new node:");
    if (value !== null) {
      const numericValue = parseInt(value, 10);
      if (!isNaN(numericValue)) {
        insertAfter(numericValue);
      } else {
        alert("Please enter a valid number.");
      }
    }
  };

  return (
    <div className="control-panel-insert">
      <button onClick={appendNode}>append()</button>
      <button onClick={prependNode}>prepend()</button>
      <button onClick={setNode}>set()</button>
      <button onClick={insertBeforeNode}>insertBefore()</button>
      <button onClick={insertAfterNode}>insertAfter()</button>
    </div>
  );
};

export default ControlPanelInsert;

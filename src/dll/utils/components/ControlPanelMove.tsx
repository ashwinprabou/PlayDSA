import React from "react";

interface ControlPanelMoveProps {
  moveFront: () => void;
  moveBack: () => void;
  moveNext: () => void;
  movePrev: () => void;
}
const ControlPanelMove: React.FC<ControlPanelMoveProps> = ({
  moveFront,
  moveBack,
  moveNext,
  movePrev,
}) => {
  return (
    <div className="control-panel-move">
      <button onClick={moveFront}>moveFront()</button>
      <button onClick={moveBack}>moveBack()</button>
      <button onClick={moveNext}>moveNext()</button>
      <button onClick={movePrev}>movePrev()</button>
    </div>
  );
};

export default ControlPanelMove;

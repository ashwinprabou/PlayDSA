import React from "react";

interface ControlPanelDeleteProps {
  deleteFront: () => void;
  deleteBack: () => void;
  deleteCursor: () => void;
  clear: () => void;
}
const ControlPanelDelete: React.FC<ControlPanelDeleteProps> = ({
  deleteFront,
  deleteBack,
  deleteCursor,
  clear,
}) => {
  return (
    <div className="control-panel-delete">
      <button onClick={deleteFront}>deleteFront()</button>
      <button onClick={deleteBack}>deleteBack()</button>
      <button onClick={deleteCursor}>deleteCursor()</button>
      <button onClick={clear}>clear()</button>
    </div>
  );
};

export default ControlPanelDelete;

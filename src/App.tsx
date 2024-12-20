import React, { useState, useEffect } from "react";
import DoublyLinkedList from "./dll/utils/components/DoublyLinkedList";
import ControlPanelInsert from "./dll/utils/components/ControlPanelInsert";
import ControlPanelDelete from "./dll/utils/components/ControlPanelDelete";
import ControlPanelMove from "./dll/utils/components/ControlPanelMove";
import { DoublyLinkedList as DLL } from "./dll/utils/LinkedList";

const App: React.FC = () => {
  const [dll] = useState(new DLL());
  const [size, setSize] = useState(dll.getSize());
  const [index, setIndex] = useState(dll.getIndex());
  const [front, setFront] = useState(dll.getFront());
  const [back, setBack] = useState(dll.getBack());
  const [cursor, setCursor] = useState(dll.get());

  const updateDerivedStates = () => {
    setSize(dll.getSize());
    setIndex(dll.getIndex());
    setFront(dll.getFront());
    setBack(dll.getBack());
    setCursor(dll.get());
  };

  // Cursor-aware deleteBack function
  const deleteBack = () => {
    if (index === size - 1) {
      setCursor("undefined"); // Clear cursor if it points to the deleted node
      setIndex(-1);
    }
    dll.deleteBack();
    updateDerivedStates();
  };

  const deleteFront = () => {
    if (index === 0) {
      setCursor("undefined"); // Clear cursor if it points to the deleted node
      setIndex(-1);
    }
    dll.deleteFront();
    updateDerivedStates();
  };

  const deleteCursor = () => {
    if (index === 0) {
      setCursor("undefined"); // Clear cursor if it points to the deleted node
      setIndex(-1);
    }
    dll.deleteCursor();
    updateDerivedStates();
  };

  const clear = () => {
    dll.clear();
    updateDerivedStates();
  };

  // Other operations, e.g., append, prepend
  const append = (value: number) => {
    dll.append(value);
    updateDerivedStates();
  };

  const prepend = (value: number) => {
    dll.prepend(value);
    updateDerivedStates();
  };

  const set = (value: number) => {
    dll.set(value);
    updateDerivedStates();
  };

  const insertBefore = (value: number) => {
    dll.insertBefore(value);
    updateDerivedStates();
  };

  const insertAfter = (value: number) => {
    dll.insertAfter(value);
    updateDerivedStates();
  };

  const moveFront = () => {
    dll.moveFront();
    updateDerivedStates();
  };

  const moveBack = () => {
    dll.moveBack();
    updateDerivedStates();
  };

  const moveNext = () => {
    dll.moveNext();
    updateDerivedStates();
  };

  const movePrev = () => {
    dll.movePrev();
    updateDerivedStates();
  };

  useEffect(() => {
    updateDerivedStates();
  }, [dll]);

  return (
    <div>
      <h1>Linked List Visualizer</h1>
      <DoublyLinkedList list={dll.toArray()} cursorIndex={index} />
      <>
        <p>
          Cursor is at index <b>{index}</b> pointing at <b>{cursor} </b>
        </p>
        <p>
          Length: <b>{size}</b>
        </p>
        <p>
          Front (head): <b>{front}</b>
        </p>
        <p>
          Back (tail): <b>{back}</b>
        </p>
      </>
      <h2>Movement Functions</h2>
      <ControlPanelMove
        moveFront={moveFront}
        moveBack={moveBack}
        moveNext={moveNext}
        movePrev={movePrev}
      />
      <h2>Insertion Functions</h2>
      <ControlPanelInsert
        append={append}
        prepend={prepend}
        set={set}
        insertBefore={insertBefore}
        insertAfter={insertAfter}
      />
      <h2>Deletion Functions</h2>
      <ControlPanelDelete
        deleteFront={deleteFront}
        deleteBack={deleteBack}
        deleteCursor={deleteCursor}
        clear={clear}
      />
    </div>
  );
};

export default App;

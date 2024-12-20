import React from "react";
import Node from "./Node";

interface DoublyLinkedListProps {
  list: number[];
  cursorIndex: number | null;
}

const DoublyLinkedList: React.FC<DoublyLinkedListProps> = ({
  list,
  cursorIndex,
}) => {
  return (
    <div className="linked-list">
      {list.map((data, index) => (
        <React.Fragment key={index}>
          <Node data={data} isCursor={cursorIndex === index} />
          {index < list.length - 1 && <div className="arrow">→</div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default DoublyLinkedList;

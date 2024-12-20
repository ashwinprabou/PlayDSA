import React from "react";

interface NodeProps {
  data: number;
  isCursor: boolean;
}

const Node: React.FC<NodeProps> = ({ data, isCursor }) => {
  return (
    <div className={`node ${isCursor ? "cursor-node" : ""}`}>
      <span>{data}</span>
    </div>
  );
};

export default Node;

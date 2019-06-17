import * as React from "react";
import { FaTimes, FaRegCircle } from "react-icons/fa";

const Square = ({
  value,
  index,
  onClick
}: {
  value: string;
  index: number;
  onClick: (index: number) => void;
}) => {
  //console.log("<=== rendering " + index + " ===>");
  return (
    <div className="square" onClick={() => onClick(index)}>
      {value === "X" && <FaTimes className="square-icon" size={105} />}
      {value === "O" && <FaRegCircle className="square-icon" size={105} />}
    </div>
  );
};

export default React.memo(Square);

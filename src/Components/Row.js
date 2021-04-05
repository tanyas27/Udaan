import { useEffect, useState } from "react";
import Cell from "./Cell";

export default function Row(props) {
  const [size, setSize] = useState(props.size);

  let cells = [];
  const createCells = () => {
    for (let i = 0; i < size; i++) {
      cells.push(
        <Cell
          key={i}
          change={props.dataChange}
          sum={props.sum}
          id={props.id + "" + i}
        />
      );
    }
  };

  createCells();
  return (
    <tbody>
      <tr>{cells}</tr>
    </tbody>
  );
}

import { useState, useEffect } from "react";
import Row from "./Row";

export default function Grid() {
  const [size, setSize] = useState(10);
  const [data, setData] = useState({});
  let rows = [];
  const createRows = () => {
    for (let i = 0; i < size; i++) {
      rows.push(
        <Row size={size} key={i} id={i} dataChange={dataChange} sum={sum} />
      );
    }
  };
  const dataChange = (ij, val) => {
    let temp = { ...data };
    temp[ij] = val;
    setData(temp);
  };

  const sum = (id, ...args) => {
    let sum = 0;
    let arr = [...args][0];
    for (let i = 0; i < arr.length; i++) {
      sum += Number(data[arr[i]]);
    }
    data[id] = sum;
    console.log(sum);
  };
  createRows();
  return (
    <>
      <table>{rows}</table>
    </>
  );
}

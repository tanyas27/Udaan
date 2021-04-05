export default function Cell(props) {
  return (
    <td>
      <input
        onChange={(e) => {
          if (e.target.value.includes("sum")) {
            let val = e.target.value;
            let arg = val.slice(4, val.length - 1);
            props.sum(props.id, arg.split(","));
          } else props.change(props.id, e.target.value);
        }}
      />
    </td>
  );
}

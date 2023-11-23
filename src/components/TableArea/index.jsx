import "./index.css";
import { TableItem } from "../TableItem";
export const TableArea = ({ list }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="tableHeadColumn"> Data </th>
          <th className="tableHeadColumn"> Categoria </th>
          <th className="tableHeadColumn"> Título </th>
          <th className="tableHeadColumn"> Valor </th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => {
          return <TableItem key={index} item={item} />;
        })}
      </tbody>
    </table>
  );
};

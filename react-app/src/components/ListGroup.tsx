import { MouseEvent, useState } from "react";
interface ListGroupProps {
  items: string[];
  title?: string;
  onselectItem: (item: string) => void;
}
const ListGroup = ({ items, title, onselectItem }: ListGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   items = [];

  const message = items.length === 0 && <p> No Items Found</p>;

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>{title}</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => {
          return (
            <li
              key={index}
              className={`list-group-item ${
                selectedIndex === index && "active"
              }`}
              onClick={() => {
                setSelectedIndex(index);
                onselectItem(item);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListGroup;

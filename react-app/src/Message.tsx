import { useState } from "react";

// PascalCasing
const Message = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Apple", quantity: 1 },
      { id: 2, title: "Orange", quantity: 1 },
    ],
  });

  const handleClick = (id: number) => {
    setCart({
      ...cart,
      items: cart.items.map((item) => {
        return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
      }),
    });
  };

 
  return (
    <>
      <h1>Cart</h1>
      <ul>
        {" "}
        {cart.items.map((cartItem) => {
          return (
            <li key={cartItem.id}>
              {" "}
              Product - {cartItem.title} -- Quantity : {cartItem.quantity}{" "}
              <button onClick={() => handleClick(cartItem.id)}> +1 </button>{" "}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Message;




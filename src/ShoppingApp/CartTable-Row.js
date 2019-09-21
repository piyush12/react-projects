import React from "react";

const CartRow = ({ item, addItem, removeItem, deleteItem }) => {
  return (
    <tr>
      <th scope="row">{item.id}</th>
      <td>{item.name}</td>
      <td>
        {item.price} * {item.quantity} ={" "}
        <strong>{item.price * item.quantity}$</strong>
      </td>
      <td>
        <img src={item.image} alt="" />
      </td>
      <td>
        <button className="btn btn-primary" onClick={() => addItem(item)}>
          +
        </button>{" "}
        <button className="btn btn-primary" onClick={() => removeItem(item)}>
          -
        </button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteItem(item)}>
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CartRow;

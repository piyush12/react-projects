import React from "react";
import CartRow from "./CartTable-Row";

class ShoppingCart extends React.Component {
  render() {
    const { items } = this.props;

    let totalQuantity = 0;
    let totalPrice = 0;
    items.forEach(item => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });

    return (
      <div className="product-cart text-left">
        <h1 className="btn btn-primary">
          Cart <span className="badge badge-light">{totalQuantity}</span>
        </h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">product Price</th>
              <th scope="col">product Image</th>
              <th scope="col" />
              <th scope="col">Remove Product</th>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.map(item => (
                <CartRow
                  key={item.id}
                  item={item}
                  addItem={this.props.addItem}
                  removeItem={this.props.removeItem}
                  deleteItem={this.props.deleteItem}
                />
              ))}
            <tr>
              <td colSpan="6" className="text-left">
                Total : <strong>{totalPrice}$</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ShoppingCart;

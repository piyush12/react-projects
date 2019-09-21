import React from "react";
import ProductRow from "./ProductsRow";
import ProductsItem from "./Products";
import ShoppingCart from "./ShoppingCart";
import "./styles.css";

class Shopping extends React.Component {
  state = {
    products: [
      {
        id: 1,
        name: "Product Hat",
        price: 10,
        image: "https://i.ibb.co/ZYW3VTp/brown-brim.png"
      },
      {
        id: 2,
        name: "Product Snickers",
        price: 40,
        image: "https://i.ibb.co/0s3pdnc/adidas-nmd.png"
      },
      {
        id: 3,
        name: "Product Jacket",
        price: 200,
        image: "https://i.ibb.co/XzcwL5s/black-shearling.png"
      },
      {
        id: 4,
        name: "Product Vest",
        price: 80,
        image: "https://i.ibb.co/xJS0T3Y/camo-vest.png"
      },
      {
        id: 5,
        name: "Product Vest",
        price: 80,
        image: "https://i.ibb.co/xJS0T3Y/camo-vest.png"
      }
    ],
    inCart: []
  };

  addItemToCart = (allItem, currentItem) => {
    const ifExisting = allItem.find(q => q.id === currentItem.id);

    if (ifExisting) {
      const newItem = allItem.map(it =>
        it.id === currentItem.id ? { ...it, quantity: it.quantity + 1 } : it
      );
      return newItem;
    } else {
      return [...allItem, { ...currentItem, quantity: 1 }];
    }
  };

  removeItemFromCart = (allItem, currentItem) => {
    const ifExisting = allItem.find(q => q.id === currentItem.id);
    if (ifExisting.quantity === 1) {
      const newItem = allItem.filter(it => it.id !== currentItem.id);
      return newItem;
    } else {
      const newItem = allItem.map(it =>
        it.id === currentItem.id ? { ...it, quantity: it.quantity - 1 } : it
      );
      return newItem;
    }
  };

  addToCart = pitem => {
    const inCartCopy = [...this.state.inCart];

    this.setState({
      inCart: this.addItemToCart(inCartCopy, pitem)
    });
  };

  addItem = item => {
    const inCartCopy = [...this.state.inCart];

    this.setState({
      inCart: this.addItemToCart(inCartCopy, item)
    });
  };

  removeItem = item => {
    const inCartCopy = [...this.state.inCart];
    this.setState({
      inCart: this.removeItemFromCart(inCartCopy, item)
    });
  };

  deleteItem = item => {
    const inCartCopy = [...this.state.inCart];
    const newItem = inCartCopy.filter(cartItem => cartItem.id !== item.id);
    this.setState({
      inCart: [...newItem]
    });
  };

  render() {
    const { products, inCart } = this.state;
    return (
      <React.Fragment>
        <h1>Shopping Cart</h1>
        <ShoppingCart
          items={inCart}
          addItem={this.addItem}
          removeItem={this.removeItem}
          deleteItem={this.deleteItem}
        />
        <ProductRow>
          {products &&
            products.map(item => (
              <ProductsItem item={item} addItem={this.addToCart} />
            ))}
        </ProductRow>
      </React.Fragment>
    );
  }
}

export default Shopping;

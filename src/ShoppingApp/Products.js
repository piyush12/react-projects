import React from "react";

const Products = ({ item, addItem }) => {
  return (
    <div className="col col-md-3 col-sm-3">
      <div className="product-box">
        <h3>{item.name}</h3>
        <div className="product-img">
          <img src={item.image} alt="" />
          <div className="product-price">Price {item.price}$</div>
          <div className="product-btn">
            <button className="btn btn-primary" onClick={() => addItem(item)}>
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

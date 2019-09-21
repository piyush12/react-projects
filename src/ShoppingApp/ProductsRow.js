import React from "react";

const ProductRow = props => {
  return <div className="row text-left product-row">{props.children}</div>;
};

export default ProductRow;

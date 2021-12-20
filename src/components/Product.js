import React from "react";


export default function Product(props) {
  return (
    <div className="row mt-3 displayItems">
      <div className="col-5">
        <h2>
          {props.product.name}&nbsp;
          <span className="badge  displayPrice">₹{props.product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-quantity" onClick={()=>{props.decrementQuantity(props.index)}}>
           -
          </button>
          <button type="button" class="btn btn-quantity">
            {props.product.quantity}
          </button>
          <button type="button" class="btn btn-quantity" onClick={()=> {props.incrementQuantity(props.index)}}>
           +
          </button>
        </div>
      </div>
      <div className="value">
          {props.product.quantity*props.product.price}
      </div>
      <div className="col-2">
          <button type="button" className="col-2 btn btn-danger " onClick={() =>{props.removeItem(props.index)}}>
              Remove
          </button>
      </div>
    </div>
  );
}

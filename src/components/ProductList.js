import React from 'react';
import Product from './Product';


export default function ProductList(props) {
    console.log(props);
      return (
          props.productList.length > 0 ?
       props.productList.map((products,i) =>{
           return <Product product={products} key={i} incrementQuantity={props.incrementQuantity} 
           decrementQuantity={props.decrementQuantity} removeItem={props.removeItem}index={i}/>
       })
       : <h1>Cart is Empty</h1>
      )
    
}

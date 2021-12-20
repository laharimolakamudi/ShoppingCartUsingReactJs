import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import React, {useState} from "react";
import AddItem from "./components/AddItem";

function App() {
  const products = [
    {
      price: 39999,
      name: "Samsung galaxy F6",
      quantity: 0,
    },
    {
      price: 29999,
      name: "Redmi note 9 pro",
      quantity: 0,
    },
    {
      price: 99999,
      name: "IPhone 13 pro",
      quantity: 0,
    },
  ];
  let [productList, setproductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);
  // let [resetnow, setResetnow] = useState(products);
    const incrementQuantity = (index) => {
    let newProductList = [...productList]
    let newTotal = totalAmount
    newProductList[index].quantity++
    newTotal += newProductList[index].price
    setproductList(newProductList);
    setTotalAmount(newTotal);
    
  }
  const decrementQuantity = (index) =>{
    let newProductList = [...productList]
    let newTotal = totalAmount
    if(newProductList[index].quantity > 0)
    { 
    newProductList[index].quantity-- 
    newTotal -= newProductList[index].price
    }

    setproductList(newProductList);
    setTotalAmount(newTotal);
  
  }
  const resetNow = () =>{
    let newProductList = [...productList]
    newProductList.map((products) => {
      products.quantity = 0
    })
    setTotalAmount(0);
    setproductList(newProductList);
   
  }

  const removeItem = (index) => {

    let newProductList = [...productList]
    let newTotal = totalAmount
    newTotal -= productList[index].quantity * productList[index].price
    newProductList.splice(index,1)
    setproductList(newProductList);
    setTotalAmount(newTotal)

  }
  const Addnewitem =(name,price) =>{
    let newProductList = [...productList]
    newProductList.push({
    price:price,
    name:name,
    quantity:0
    });
    setproductList(newProductList);
  }
    return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem Addnewitem={Addnewitem}/>
        <ProductList productList={productList} incrementQuantity={incrementQuantity } decrementQuantity={decrementQuantity}
        removeItem = {removeItem}/>
      </main>
      <Footer productList={productList} totalAmount={totalAmount} resetNow={resetNow}/>
    </>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import AddItem from './components/AddItem';
function App() {
  const backgroundStyle = {
    backgroundImage: 'url("/image.jpg")',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%',
  };
  const products=[
    {
      price:99999,
      name:"I Phone 10s Max",
      quantity:0,
    },
    {
      price:99999,
      name:"Redmi Note 10S Max",
      quantity:0,
    },
    {
      price:99999,
      name:"POCO",
      quantity:0,
    }
  ]
  let [productList,setProductList]=useState(products);
  let [totalAmount,setTotalAmount]=useState(0);
  const incrementQuantity=(index)=>{
    let newProductList=[...productList];
    let newTotalAmount=totalAmount;
    newProductList[index].quantity++;
    newTotalAmount+=newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };
  const decrementQuantity=(index)=>{
    let newProductList=[...productList];
    let newTotalAmount = totalAmount;
    if(newProductList[index].quantity>0)
    {
    newProductList[index].quantity--;
    newTotalAmount-=newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };
  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };
  const addItem = (name,price) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    });
  
    setProductList(newProductList);
    setTotalAmount(0);
  };
  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };


  return (
    <>
      <div style={backgroundStyle}>
      <Navbar/> 
      <main className='container' margin ='top'>
        <AddItem addItem={addItem}/>
      <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItem={removeItem} />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
      </div>
    </>
    
  );
}

export default App;

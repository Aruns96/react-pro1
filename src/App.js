import React,{ useState } from 'react';
import './App.css';
import AddItem from './Components/AddItem';
import ItemList from './Components/ItemList';

function App() {
   const[itemList,setItemList] =  useState([])
  const addItemHandler=(orderId,price,dish,table)=>{
      setItemList(prevState=>[{orderId:orderId,price:price,dish:dish,table:table},...prevState])
  }
  const deleteItemHandler = orderId => {
    setItemList(prevItems => 
      prevItems.filter(item => item.orderId !== orderId));
    }
     
  return (
    < >
      <AddItem onAddItems={addItemHandler}/>
      <ItemList items={itemList} onDelete={deleteItemHandler} />
    </>
  );
}

export default App;

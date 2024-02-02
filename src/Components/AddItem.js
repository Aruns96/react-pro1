import React , { useState } from "react";

const AddItem = (props) =>{
    
    const [orderId,setOrderId] = useState("");
    const[price,setPrice] = useState("");
    const[dish ,setDish] = useState("");
    const[table,setTable] = useState("")

    const idChangeHanler = (e) =>{
      setOrderId(e.target.value)
    }
    const priceChangeHanler = (e) =>{
        setPrice(e.target.value)
    }
    const dishChangeHanler = (e) =>{
        setDish(e.target.value)
    }
    const tableChangeHanler = (e) =>{
         setTable(e.target.value)
    }

    const submitHandler = (e)=>{
      e.preventDefault();
       console.log(orderId,price,dish,table)
       props.onAddItems(orderId,price,dish,table);
       setOrderId("")
       setPrice("")
       setDish("")
      

    }
   return (
    <form onSubmit={submitHandler}>
      
          <label>Unique Order id</label>
          <input type="number" onChange={idChangeHanler} value={orderId}/>
          <label>Choose Price</label>
          <input type="number" onChange={priceChangeHanler} value={price} />
          <label>Choose Dish</label>
          <input type="text"  onChange={dishChangeHanler} value={dish}/>
          <label >choose table</label>
           <select  onChange={tableChangeHanler} value={table}>
             <option value='table1'>table1</option>
             <option value='table2'>table2</option>
             <option value='table3'>table3</option>
            
           </select>
        
        <button  type="submit">Add</button>
     
    </form>
   )
}

export default AddItem;
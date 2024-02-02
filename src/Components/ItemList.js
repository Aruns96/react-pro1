import React from "react";
import Item from "./Item";

const ItemList = (props) =>{
     
    


    return (
        <>
        
        <h2>Orders</h2>
        <h4>Table1</h4>
        <ul>
      {props.items.filter(item=>item.table === "table1")
      .map((data) => (
       
        <Item
          key={data.orderId}
          orderId={data.orderId}
          onDelete={props.onDelete}
        >
          {data.dish}-{data.price}-{data.table}
        </Item>
      ))}
    </ul>
        <h4>Table2</h4>
        <ul>
      { props.items.filter(item=>item.table === "table2")
      .map((data) => (
       
        <Item
          key={data.orderId}
          orderId={data.orderId}
          onDelete={props.onDelete}
        >
          {data.dish}-{data.price}-{data.table}
        </Item>
      ))}
    </ul>
    
        <h4>Table3</h4>
        <ul>
      { props.items.filter(item=>item.table === "table3")
      .map((data) => (
       
        <Item
          key={data.orderId}
          orderId={data.orderId}
          onDelete={props.onDelete}
        >
          {data.dish}-{data.price}-{data.table}
        </Item>
      ))}
    </ul>
        </>
    )
}


export default ItemList;
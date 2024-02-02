import React from "react";

const Item = ( props) =>{

    const deleteHandler=()=>{
        props.onDelete(props.orderId)
    }
  return <li>{props.children} <button onClick={deleteHandler}>delete</button></li>
}

export default Item;
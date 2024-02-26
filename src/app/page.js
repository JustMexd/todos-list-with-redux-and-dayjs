'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect,useState } from "react";

export default function Home() {

  const getLocalItems=()=>{
    let list =localStorage.getItem('setNewItem');
    console.log(list);
    if(list){
      return JSON.parse(localStorage.getItem('setNewItem'));
    }else{
  
      return[];
    }
  }

const  [newItem, setNewItem]=useState('');
const [items, setItems]=useState(getLocalItems());
const[toggleSubmit,setToggleSubmit]=useState(true);





useEffect(
  () => {
  // extraer el valor del localStorage
  const setItems = localStorage.getItem("item")
  console.log("value", setItems)
  if(setItems){
    return JSON.parse(localStorage.getItem('items'))
  }else{
    []
  }
  }
  
  )

function addItem(){
  if(!newItem){
    alert("Agregar alguna tarea")
    return;
  }
  const item={
    id:Math.floor(Math.random()*1000),
    value: newItem
  };
  setItems(oldList=>[...oldList,item]);
  setNewItem("");
}
function deleteItem(id){
  const newArray=items.filter(item=>item.id !==id);
  setItems(newArray);

}
const editItem = (id)=>{
  let newEditItem=items.find((id)=>{
    return item.id===id
  });
  setToggleSubmit(false);
  setInputData(newEditItem.value)
  
}
return(
  <div className={styles.body}>
    <div className={styles.container}>
      <div>
        <h1>To-do-list</h1>
      </div>
      <div className="">
        <input className={styles.input} value={newItem} id="userInput" type="text" placeholder="Agregar una actividad" onChange={e=>setNewItem(e.target.value)}></input>
        <button className={styles.btn}  id="enter" onClick={()=>addItem()}>Agregar</button>
      </div>

      
        
          <ul>
            {items.map(item=>{
              return(
                <li key={item.id}>{item.value} <button onClick={()=>editItem(item.id)}>Editar</button> <button onClick={()=>deleteItem(item.id)}>X</button></li>
              )
            })}
          </ul>

        
    </div>
  </div>
);

}

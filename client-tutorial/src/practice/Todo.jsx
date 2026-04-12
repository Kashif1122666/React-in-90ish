import { useState } from "react";

const Todo = ()=>{

    const [todos , setTodos] = useState(["item1","item2","item3"]);
    const [inputItem, setInputItem] = useState('');
    const addItem = ()=>{
          setTodos([...todos,inputItem])
          setInputItem('')
    }
    const removeItem = (inputItem)=>{
          setTodos(todos.filter((item)=>item != inputItem ))
    }

    const setInputValue = (e) =>{
        setInputItem(e.target.value)
    }
     
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div><input onChange={setInputValue} value={inputItem} type="text" className="border border-black" /><button onClick={addItem} className="border border-green-950">✔</button></div>
            <ul>
            {todos.map((item, index)=>( <li key={index}>{item} <button onClick={()=>removeItem(item)}>❌</button></li> ))}
            </ul>
        </div>
    )
}

export default Todo;
import { useRef, useState } from 'react';
import './App.css';
function App() {
  const[todos,setTodos]=useState([]);
  const ref=useRef();

  const handleadd=()=>{
    const text=ref.current.value;
    const newItem={completed:false,text:text}
    if(text!=""){
    setTodos([...todos,newItem]);
    ref.current.value="";
  }}
  const handleitemdone=(index)=>{
    const newtodos=[...todos];
    newtodos[index].completed= !newtodos[index].completed;
    setTodos(newtodos);
  }
  const handledelete=(index)=>{
    const newtodos=[...todos];
    newtodos.splice(index,1);
    setTodos(newtodos);



  }
  return (
    <div className="App">
      <h2>List To Do :</h2>
      <div className='to-do-container'>
         <ul>
        {todos.map((item,itemIndex)=>(<div>
          <div className='item'>
          <li  className={item.completed ? "done":""}  onClick={()=>handleitemdone(itemIndex)} key={itemIndex}>
            {item.text} 
           
          </li>  
          <span onClick={()=>handledelete(itemIndex)}>❌</span>

          </div>
          
        </div>))}

      </ul>
      
      </div>
      <input type='text' placeholder='input item' ref={ref} />
      <button onClick={handleadd}>add</button>
     
              
    </div>
  );
}

export default App;

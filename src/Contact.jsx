import React, {useState, useEffect} from 'react';
import Styles from './Contact.module.css';

function Contact() {
    const [toDoList, setToDoList] =  useState([]);
    const [task, setTask] =  useState("");


   function handleInput(e) {
        setTask(e.target.value);
    }
    function addTask(){
        console.log(task);
        
        if(task !== ""){
            setToDoList((t) => [...t, task]);
            setTask("");
        }
    }
    function deleteTask(index){
        const filteredTasks = toDoList.filter((_,i) => (i !== index));
        setToDoList(filteredTasks);
    }
    function moveUp(index){
        if(index > 0){
            const newTasks = [...toDoList];
            [newTasks[index], newTasks[index - 1]] = [newTasks[index - 1], newTasks[index]];
            setToDoList(newTasks);
        }
    }
    function moveDown(index){
        if(index < toDoList.length -1){
            const newTasks = [...toDoList];
            [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
            setToDoList(newTasks);
        }
    }

  
  
    
    
    return(
        <>
           <div className= {Styles.container}>
             <div className={Styles.input}>
                <input type="text"
                   value = {task}
                   onChange={handleInput}/>
            <button onClick={addTask}>Add task</button>
             </div>
             <div className={Styles.tasks}>
               <ul>
                     {toDoList.map((list, index) =>
                    <li key={index}>
                        <span className={Styles.task}>{list}</span>
                         <button className={Styles.delete}
                                 onClick={() => deleteTask(index)}>
                            Delete</button>
                        <button className={Styles.up}
                                onClick={() => moveUp(index)}>
                                    UP
                        </button>
                        <button className={Styles.down}
                                onClick={() => moveDown(index)}>
                            DOWN</button>
                       
                    </li>
                )}
               </ul>
             </div>
           </div>
            
        </>
    )

}

export default Contact;
import React from "react";
import '../style.css'

const Form = ({inputText, setInputText, todos, setTodos, setStatus}: {
    inputText: any,
    setInputText: any,
    todos: any,
    setTodos: any,
    setStatus: any
}) => {

    const inputTexthandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value)
    };

    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos,{text: inputText, completed:false , id: Math.random() * 1000}
        ])
        setInputText("");
    }

    const statusHandler = (e:unknown) =>{
        setStatus(e.target.value)
    }

    return(
        <>
            <form>
                <input value={inputText} onChange={inputTexthandler} type="text" className="todo-input" placeholder="Todays's Task" />
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">completed</option>
                        <option value="uncompleted">uncompleted</option>
                    </select>
                </div>
            </form>
        </>
    )
}

export default Form;

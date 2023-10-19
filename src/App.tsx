import React, {useState, useEffect} from "react";
import './style.css'
import Form from "./Components/Form.tsx";
import TodoList from "./Components/TodoList.tsx";

const App = () => {
    //state shit
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all")
    const [filteredTodos, setFilteredTodos] = useState([])

    //Run once at start
    useEffect(()=>{
        getLocalTodos()
    },[])

    //use Effect
    useEffect(() => {
        filterHandler()
        saveLocalTodos()
    }, [todos,status]);

    //function
    const filterHandler = () =>{
        switch (status){
            case 'completed':
                setFilteredTodos(
                    todos.filter(
                        (todo)=>todo.completed === true
                    )
                );
                break;

            case "uncompleted":
                setFilteredTodos(
                    todos.filter(
                        (todo)=>todo.completed === false
                    )
                );
                break;
            default :
                setFilteredTodos(todos);
                break;
        }
    }

    const saveLocalTodos = () => {
        localStorage.setItem("todos",JSON.stringify(todos));
    };

    const getLocalTodos = () => {
        if(localStorage.getItem("todos") === null){
            localStorage.setItem("todos",JSON.stringify([]));
        }
        else {
            const toDoLocal = JSON.parse(localStorage.getItem("todos"))
            setTodos(toDoLocal);
        }
    };



    return (
        <div className="App">
            <header>
                <h1>Sina {"Todo"} List </h1>
            </header>
            <Form
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                setInputText={setInputText}
                setStatus={setStatus}
                filteredTodos={filteredTodos}
            />
            <TodoList
                setTodos={setTodos}
                todos={todos}
                filteredTodos={filteredTodos}
            />
        </div>
    )
}

export default App

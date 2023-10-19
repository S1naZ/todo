import Todo from './Todo'

const TodoList = ({todos, setTodos, filteredTodos}: { todos: any, setTodos: any, filteredTodos: any }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                        setTodos={setTodos}
                        todos={todos}
                        key={todo.id}
                        text={todo.text}
                        todo={todo}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
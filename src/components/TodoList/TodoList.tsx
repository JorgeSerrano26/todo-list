import { component$ } from "@builder.io/qwik";
import type { ToDoItem } from "~/services/TodoService";
import TodoItem from "./TodoItem";

type TodoListProps = {
    list: ToDoItem[]
}

const TodoList = ({ list } : TodoListProps) => {
    return <ul>
        {
            list.map( item => <TodoItem key={item.id} {...item} />)
        }
    </ul>
}

export default component$(TodoList);
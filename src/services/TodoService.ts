export type ToDoItem = {
    id: string;
    name: string;
    description?: string;
    finished: boolean;
}

class TodoService {
    private static KEY = 'todolist';
    
    static get(): ToDoItem[] {
        const data = window?.localStorage.getItem(this.KEY) ?? "[]";

        return JSON.parse(data);
    }

    static update(list: ToDoItem[]): void {
        window?.localStorage.setItem(this.KEY, JSON.stringify(list));
    }

    static clear(): void {
       window?.localStorage.removeItem(this.KEY);
    }
}

export default TodoService;
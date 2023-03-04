export interface Todo {
    id: number,
    progress: number,
    title: string,
    user_email: string,
    date: any
}

export type GetTodos = {
    todos: Todo[]
}

export interface ListItemProps {
    task: Todo
}

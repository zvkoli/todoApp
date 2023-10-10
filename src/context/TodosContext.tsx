import { createContext, useState } from 'react';
import { ITodo } from '../types/Todo';

export type TodosContextProviderProps = {
    children: React.ReactNode;
}

export const TodosContext = createContext<{
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}>({
    todos: [],
    setTodos: () => [],
});

export const TodosContextProvider = ({ children }: TodosContextProviderProps) => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    return (
        <TodosContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodosContext.Provider>
    );
}


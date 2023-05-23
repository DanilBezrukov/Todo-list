import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TaskContext = createContext(null)

export function TaskProvider( {children} ) {
    const [tasks, setTasks] = useLocalStorage("taskStorage", { "Личные": [] })
    return (
        <TaskContext.Provider value={ {tasks, setTasks} }>
            {children}
        </TaskContext.Provider>
    )
}
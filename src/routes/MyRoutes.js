import { Routes, Route, Navigate } from "react-router-dom"
import { Layout } from '../components/Layout';
import { TodoPage } from "../pages/TodoPage/TodoPage";
import { CreateTaskPage } from "../pages/CreateTaskPage/CreateTaskPage";
import { useLocalStorage } from "../hooks/useLocalStorage";

function MyRoutes() {
    const [category, setCategory] = useLocalStorage("category", [])
    const [taskStorage, setTaskStorage] = useLocalStorage("taskStorage", {})

    return (
        <Routes>
            <Route path="/" element={
                <Layout
                    category={category}
                    setCategory={setCategory}
                    taskStorage={taskStorage}
                    setTaskStorage={setTaskStorage}
                />
            }>
                <Route path="PersonalTasks"
                    element={<TodoPage
                        nameCategory={"Личные"}
                        taskStorage={taskStorage}
                        setTaskStorage={setTaskStorage}
                    />} />
                {
                    category.map((elem, i) => {
                        return (
                            <Route path={`CustomCategory${i + 1}`}
                                key={`CustomCategory${i + 1}`}
                                element={<TodoPage 
                                    nameCategory={elem}
                                    taskStorage={taskStorage}
                                    setTaskStorage={setTaskStorage}
                                />}
                            />
                        )
                    })
                }
                <Route path="/" element={<Navigate to='PersonalTasks' replace />} />
                <Route path="*" element={<Navigate to='PersonalTasks' replace />} />
            </Route>
            <Route path="/:tasks/createTask" element={<CreateTaskPage setTaskStorage={setTaskStorage} />} />
        </Routes>
    )
}
export { MyRoutes }
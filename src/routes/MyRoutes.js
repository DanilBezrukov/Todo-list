import { Routes, Route, Navigate } from "react-router-dom"
import { Layout } from '../components/Layout';
import { TodoPage } from "../pages/TodoPage/TodoPage";
import { CreateTaskPage } from "../pages/CreateTaskPage/CreateTaskPage";
import { useEffect, useState } from "react";

function MyRoutes() {
    const [category, setCategory] = useState(JSON.parse(localStorage.getItem("category")) ?? [])
    const [taskStorage, setTaskStorage] = useState(JSON.parse(localStorage.getItem("taskStorage")) ?? {})
    const [mappingFlag, setMappingFlag] = useState(JSON.parse(localStorage.getItem("mappingFlag")) ?? true)
    const [sortDate, setSortDate] = useState(localStorage.getItem("sortDate") ?? "new")
    const [sortCompleted, setSortCompleted] = useState(localStorage.getItem("sortCompleted") ?? "NotFulfilled")

    useEffect(() => {
        localStorage.setItem("category", JSON.stringify(category));
        localStorage.setItem("taskStorage", JSON.stringify(taskStorage));
        localStorage.setItem("mappingFlag", JSON.stringify(mappingFlag));
        localStorage.setItem("sortDate", sortDate);
        localStorage.setItem("sortCompleted", sortCompleted);
    }, [category, taskStorage, mappingFlag, sortDate, sortCompleted])

    return (
        <Routes>
            <Route path="/" element={
                <Layout
                    category={category}
                    setCategory={setCategory}
                    mapping={[mappingFlag, setMappingFlag]}
                    sort={[sortDate, setSortDate, sortCompleted, setSortCompleted]}
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
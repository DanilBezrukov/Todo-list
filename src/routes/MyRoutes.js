import { Routes, Route, Navigate } from "react-router-dom"
import Layout from '../components/Layout';
import TodoPage from "../pages/TodoPage/TodoPage";
import CreateTaskPage from "../pages/CreateTaskPage/CreateTaskPage";
import { useEffect, useState } from "react";

function MyRoutes() {
    const [category, setCategory] = useState([])
    const [taskStorage, setTaskStorage] = useState({
        "Личные": [{ taskTitle: 'Учеба', taskText: 'Сдать курсовую', date: "Fri May 19 2023 10:09:56 GMT+0300 (Москва, стандартное время)", flag: false }, { taskTitle: 'Спорт', taskText: 'Выжать от груди 100кг', date: "Fri May 19 2023 10:28:34 GMT+0300 (Москва, стандартное время)", flag: true }],
    })
    const [mappingFlag, setMappingFlag] = useState(true)
    const [sortDate, setSortDate] = useState("new")
    const [sortCompleted, setSortCompleted] = useState("NotFulfilled")


    useEffect(() => {
        console.log("Монтаж")
        // setCategory(JSON.parse(localStorage.getItem("category")) ?? [])
        // setTaskStorage(JSON.parse(localStorage.getItem("taskStorage")) ?? {})
        // setMappingFlag(JSON.parse(localStorage.getItem("mappingFlag")) ?? true)
        // setSortDate(localStorage.getItem("sortDate") ?? "new")
        // setSortCompleted(localStorage.getItem("mappingFlag") ?? "sortCompleted")
    }, [])

    useEffect(() => {
        console.log("Рендор")
        // localStorage.setItem("category", JSON.stringify(category));
        // localStorage.setItem("taskStorage", JSON.stringify(taskStorage));
        // localStorage.setItem("mappingFlag", JSON.stringify(mappingFlag));
        // localStorage.setItem("sortDate", sortDate);
        // localStorage.setItem("sortCompleted", sortCompleted);
    }, [category, taskStorage, mappingFlag, sortDate, sortCompleted])

    return (
        <Routes>
            <Route path="/" element={
                <Layout
                    category={category}
                    setCategory={setCategory}
                    mapping={[mappingFlag, setMappingFlag]}
                    sort={[sortDate, setSortDate, sortCompleted, setSortCompleted]}
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
export default MyRoutes
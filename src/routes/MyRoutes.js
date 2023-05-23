import { Routes, Route, Navigate } from "react-router-dom"
import { MainPage } from '../pages/MainPage';
import { CreateTaskPage } from "../pages/CreateTaskPage/CreateTaskPage";
import { TaskProvider } from "../contexts/TaskProvider";

function MyRoutes() {
    return (
        <TaskProvider>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/createTask" element={<CreateTaskPage />} />
                <Route path="*" element={<Navigate to='/' replace />} />
            </Routes>
        </TaskProvider>
    )
}
export { MyRoutes }
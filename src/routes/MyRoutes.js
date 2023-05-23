import { Routes, Route, Navigate } from "react-router-dom"
import { MainPage } from '../pages/MainPage';
import { CreateTaskPage } from "../pages/CreateTaskPage/CreateTaskPage";
import { TaskEditingPage } from "../pages/TaskEditingPage/TaskEditingPage"
import { TaskProvider } from "../contexts/TaskProvider";

function MyRoutes() {
    return (
        <TaskProvider>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/createTask" element={<CreateTaskPage />} />
                <Route path="/TaskEditingPage" element={<TaskEditingPage />} />
                <Route path="*" element={<Navigate to='/' replace />} />
            </Routes>
        </TaskProvider>
    )
}
export { MyRoutes }
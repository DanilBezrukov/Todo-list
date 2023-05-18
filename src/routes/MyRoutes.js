import { Routes, Route, Navigate } from "react-router-dom"
import Layout from '../components/Layout';
import TodoPage from "../pages/TodoPage";
import CreateTaskPage from "../pages/CreateTaskPage/CreateTaskPage";
import { useState } from "react";

function MyRoutes(){
    const [category, setCategory] = useState( [] )
    const [taskStorage, setTaskStorage] = useState( {
        "Личные" : [],
    } )
    
    return(
        <Routes>
            <Route path="/" element={
                <Layout 
                category={category} 
                setCategory={setCategory}
                taskStorage={taskStorage}
                />
            }>
                <Route path="PersonalTasks" element={<TodoPage tasks={ taskStorage["Личные"] }/>}/>
                {
                    category.map( (elem, i) => {
                        return(
                            <Route path={`CustomCategory${i + 1}`} 
                            key={`CustomCategory${i + 1}`}
                            element={<TodoPage tasks={ taskStorage[elem] } />}
                            />
                        )
                    } )
                }
                <Route path="/:tasks/createTask" element={<CreateTaskPage setTaskStorage={setTaskStorage}/>}/>
                <Route path="/" element={<Navigate to='PersonalTasks' state={"Личные"} replace/>}/>
                <Route path="*" element={<Navigate to='PersonalTasks' state={"Личные"} replace/>}/>
            </Route>
        </Routes>
    )
}
export default MyRoutes
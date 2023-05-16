import { Routes, Route, Navigate } from "react-router-dom"
import Layout from '../components/Layout';
// import PersonalTasks from "../pages/PersonalTasks";
import TodoPage from "../pages/TodoPage";
import { useState } from "react";

function MyRoutes(){
    const [category, setCategory] = useState( [] )

    return(
        <Routes>
            <Route path="/" element={<Layout category={category} setCategory={setCategory}/>}>

                <Route path="PersonalTasks" element={<TodoPage data={"PersonalTasks"}/>}/>
                {
                    category.map( (elem, i) => {
                        return(
                            <Route path={`CustomTasks${i + 1}`} 
                            key={`CustomTasks${i + 1}`}
                            element={<TodoPage data={`CustomTasks${i + 1}`} />}
                            />
                        )
                    } )
                }
                <Route path="/" element={<Navigate to='PersonalTasks' replace/>}/>
                <Route path="*" element={<Navigate to='PersonalTasks' replace/>}/>
            </Route>
        </Routes>
    )
}
export default MyRoutes
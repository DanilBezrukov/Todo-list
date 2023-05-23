import { useContext } from "react"
import { TaskContext } from "../../contexts/TaskProvider"
import { Task } from "./Task/Task"
import "./Tasks.css"

function Tasks( { activeCategory } ) {
    const { tasks, setTasks } = useContext(TaskContext)
    const selectedСategory = tasks[activeCategory]
    return (
        <div className="TodoPageContainer">

            {
                selectedСategory?.length > 0
                    ? selectedСategory?.map((task, index) => (
                        <Task 
                        key={task.taskTitle}
                        data={task} 
                        index={index}
                        activeCategory={activeCategory} 
                        setTasks={setTasks}/>
                    ))
                    : <div className="emptyPages">
                        <p>Задач пока нет...</p>
                    </div>
            }

        </div>
    )
}
export { Tasks }
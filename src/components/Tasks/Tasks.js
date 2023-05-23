import { useContext } from "react"
import { TaskContext } from "../../contexts/TaskProvider"
import { Task } from "./Task/Task"
import "./Tasks.css"

function Tasks({ activeCategory, mappingFlag }) {
    const { tasks, setTasks } = useContext(TaskContext)
    // const [sortDate, sortCompleted] = sortingResult

    
    // const dateSortingMethod = sortDate === "new"?sortAscending:sortDescending
    const selectedСategory = [ ...tasks[activeCategory] ]
    // const testARR = selectedСategory.sort(dateSortingMethod)
    // console.log("testARR", testARR)
    // console.log(selectedСategory === tasks[activeCategory])


    const taskDisplay = mappingFlag ? "list" : "tile"
    return (
        <>
            <div className="TasksContainer">
                {
                    selectedСategory?.length > 0
                        ?
                        <div className={`taskDisplay-${taskDisplay}`}>
                            {
                                selectedСategory?.map((task, index) => (
                                    <Task
                                        key={task.taskTitle}
                                        data={task}
                                        index={index}
                                        activeCategory={activeCategory}
                                        setTasks={setTasks} />
                                ))
                            }
                        </div>

                        : <div className="emptyPages">
                            <p>Задач пока нет...</p>
                        </div>
                }
            </div>
        </>

    )
}
export { Tasks }
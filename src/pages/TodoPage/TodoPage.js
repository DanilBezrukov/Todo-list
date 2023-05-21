
import { Task } from "../../components/Task/Task"
import "./TodoPage.css"
function TodoPage({ nameCategory, taskStorage,  setTaskStorage }) {

    const tasks = taskStorage[nameCategory]
    return (
        <>
            {
                tasks?.length > 0
                    ? tasks?.map((task, index) => (
                        <Task 
                        key={task.taskTitle}
                        data={task} 
                        index={index}
                        nameCategory={nameCategory} 
                        setTaskStorage={setTaskStorage}/>
                    ))
                    : <div className="emptyPages">
                        <p>Задач пока нет...</p>
                    </div>
            }
        </>
    )
}
export { TodoPage }
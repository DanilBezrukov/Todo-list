import { useNavigate } from "react-router-dom"
import "./Task.css"

function Task({ data, index, activeCategory, setTasks }) {
    const { taskTitle, taskText, date, flag } = data
    const navigate = useNavigate()
    function taskStatusChange(event) {
        setTasks(data => {
            data[activeCategory][index].flag = !flag
            return { ...data }
        })
    }
    
    function removeTask() {
        setTasks(tasks => {
            const newTasks = tasks[activeCategory].filter((item, i) => index !== i)
            return ({
                ...tasks,
                [activeCategory] : newTasks
            })
        })
    }
    const srcDate = new Date(date)
    const day = srcDate.getDate().toString().padStart(2, '0')
    const month = (srcDate.getMonth() + 1).toString().padStart(2, '0')
    const hour = srcDate.getHours().toString().padStart(2, '0')
    const minute = srcDate.getMinutes().toString().padStart(2, '0')
    const CreatDate = `${day}.${month} ${hour}:${minute}`

    return (
        <div className="Task">
            <div className="Task__informationAbout">
                <h3 className="Task__informationAbout__titel">{taskTitle}</h3>
                <p className="Task__informationAbout__date">{CreatDate}</p>
                <label className="checkbox style-g">
                    <input type="checkbox" checked={flag} onChange={taskStatusChange} />
                    <div className="checkbox__checkmark"></div>
                    <div className="checkbox__body">Выполнение</div>
                </label>
            </div>
            <p className="Task__text">{taskText}</p>
            <div className="Task__btnContainer">
                <button className="Task__btnRemove" onClick={removeTask}>Удалить</button>
                <button className="Task__btnEdit" onClick={ () => { navigate("/TaskEditingPage", {state : taskTitle}) } }>Редактировать</button>
            </div>
        </div>

    )
}
export { Task }
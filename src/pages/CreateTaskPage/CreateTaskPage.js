import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import "./CreateTaskPage.css"

function CreateTaskPage ( {setTaskStorage} ) {
    const location = useLocation()
    const navigate = useNavigate()
    const nameCategory = location.state
    useEffect( () =>{
        if(!nameCategory) navigate("/PersonalTasks")
    } )

    function getFormsData(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            taskTitle: formData.get("taskTitle"),
            taskText: formData.get("taskText"),
            date: new Date(),
            flag: false
        }
        
        setTaskStorage( state => {
            const tasks = state[nameCategory] || []
            const newTasks = [...tasks, data]
            
            return {
                ...state,
                [nameCategory] : newTasks
            }
        } )
    }
    return(
        <div className="CreateTask">
            <h2 className="CreateTask__h2">Добавить задачу в категорию: "{nameCategory}"</h2>
            
            <form action="" onSubmit={getFormsData}>
                <label className="CreateTask__taskTitle">
                    Заголовок:
                    <input 
                    type="text" 
                    name="taskTitle"
                    placeholder="Введите заголовок задачи..."
                    className="CreateTask__taskTitle-input"
                    required 
                    />
                </label>

                <label className="CreateTask__taskText">
                    Текст задачи:
                    <textarea 
                    name="taskText" 
                    placeholder="Опишите вашу задачу..." 
                    className="CreateTask__taskTitle-textarea"
                    rows="4"
                    required
                    >
                    </textarea>
                </label>

                <div className="CreateTask__btns">
                    <button type="button" className="CreateTask__btns-goBack">Отмена</button>
                    <button type="submit" className="CreateTask__btns-submit">Сохранить</button>
                </div>
            </form>

        </div>
    )
}
export default CreateTaskPage
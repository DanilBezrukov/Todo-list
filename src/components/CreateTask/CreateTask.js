import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import "./CreateTask.css"
function CreateTask () {
    const location = useLocation()
    const navigate = useNavigate()
    useEffect( () =>{
        if(!location.state) navigate("/PersonalTasks")
    } )
    return(
        <div className="CreateTask">
            <h2 className="CreateTask__h2">Добавить задачу в категорию: "{location.state}"</h2>
            
            <form action="">
                <label className="CreateTask__taskTitle">
                    Заголовок:
                    <input 
                    type="text" 
                    placeholder="Введите заголовок задачи..."
                    className="CreateTask__taskTitle-input"
                    required 
                    />
                </label>

                <label className="CreateTask__taskText">
                    Текст задачи:
                    <textarea name="" 
                    placeholder="Опишите вашу задачу..." 
                    className="CreateTask__taskTitle-textarea"
                    rows="4"
                    required
                    >
                    </textarea>
                </label>

                <div className="CreateTask__btns">
                    <button className="CreateTask__btns-goBack">Отмена</button>
                    <button type="submit" className="CreateTask__btns-submit">Сохранить</button>
                </div>
            </form>

        </div>
    )
}
export default CreateTask
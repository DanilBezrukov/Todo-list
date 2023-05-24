import { useLocation, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { TaskContext } from "../../contexts/TaskProvider"

function TaskEditingPage () {
    const { tasks, setTasks } = useContext(TaskContext)
    const location = useLocation()
    const navigate = useNavigate()
    const {index, activeCategory} = location.state
    const {taskTitle, taskText} = tasks[activeCategory][index]
    const [inputValue, setInputValue] = useState( [taskTitle, taskText] )
    const [titleValue, textValue] = inputValue

    function getFormsData(event) {
        event.preventDefault();
        setTasks( state => {
            const newState = {...state}
            newState[activeCategory][index].taskTitle = titleValue
            newState[activeCategory][index].taskText = textValue
            return newState
        } )
        navigate(-1, {replace : true})
    }

    return(
        <div className="CreateTask">
            <h2 className="CreateTask__h2">Редактировать задачу</h2>
            
            <form action="" onSubmit={getFormsData}>
                <label className="CreateTask__taskTitle">
                    Заголовок:
                    <input 
                    type="text" 
                    name="taskTitle"
                    className="CreateTask__taskTitle-input"
                    value={inputValue[0]}
                    onChange={ e => setInputValue( [e.target.value, textValue] ) }
                    required 
                    />
                </label>

                <label className="CreateTask__taskText">
                    Текст задачи:
                    <textarea 
                    name="taskText" 
                    className="CreateTask__taskTitle-textarea"
                    rows="4"
                    value={inputValue[1]}
                    onChange={ e => setInputValue( [titleValue, e.target.value] ) }
                    required
                    >
                    </textarea>
                </label>

                <div className="CreateTask__btns">
                    <button type="button" className="CreateTask__btns-goBack" onClick={ () => navigate(-1, {replace : true}) }>Отмена</button>
                    <button type="submit" className="CreateTask__btns-submit">Сохранить</button>
                </div>
            </form>

        </div>
    )
}
export { TaskEditingPage }
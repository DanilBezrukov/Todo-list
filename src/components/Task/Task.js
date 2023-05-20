import "./Task.css"

function Task ( { data, index, nameCategory, setTaskStorage } ){
    const {taskTitle, taskText, date, flag} = data
    // console.log("data > ", taskTitle, taskText, date, flag)
    function taskStatusChange () {
        setTaskStorage(data =>{
            data[nameCategory][index].flag = !flag
            return {...data}
        })
    }

    function CreatDate() {
        const srcDate = new Date(date)
        const day = srcDate.getDate().toString().padStart(2, '0')
        const month = (srcDate.getMonth() + 1).toString().padStart(2, '0')
        const hour = srcDate.getHours().toString().padStart(2, '0')
        const minute = srcDate.getMinutes().toString().padStart(2, '0')

        return (
            <p>{day}.{month} {hour}:{minute}</p>
        )
    }

    return (
        <div>
        <input type="checkbox" id={taskTitle} checked={flag} onChange={taskStatusChange}/>
        <p>{taskTitle}</p>
        <p>{taskText}</p>
        <CreatDate/>

        </div>
    )
}
export default Task
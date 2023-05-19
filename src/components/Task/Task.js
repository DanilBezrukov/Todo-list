import "./Task.css"

function Task ( { data, index, nameCategory, setTaskStorage } ){
    const {taskTitle, taskText, date, flag} = data
    // console.log("data > ", taskTitle, taskText, date, flag)
    function taskStatusChange (event) {
        console.log(event.currentTarget)

        setTaskStorage(data =>{
            console.log(data[nameCategory][index])
            console.log(data)

            return data
        })
    }
    return (
        <div>
        <input type="checkbox" id={taskTitle} checked={flag} onChange={taskStatusChange}/>
        <p>{taskTitle}</p>
        <p>{taskText}</p>
        {/* <p>{date}</p> */}

        </div>
    )
}
export default Task
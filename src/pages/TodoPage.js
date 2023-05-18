// import { useEffect } from "react"
// import { useLocation, useNavigate } from "react-router-dom"

function TodoPage ( {tasks} ) {
    // const location = useLocation()
    // const navigate = useNavigate()
    // useEffect( () =>{
    //     if(!location.state) navigate("/PersonalTasks")
    // } )
    return(
        <>
            <p>{tasks}</p>
        </>
    )
}
export default TodoPage
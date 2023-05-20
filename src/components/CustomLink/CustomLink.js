import { Link, useMatch } from "react-router-dom";
import './CustomLink.css'

function CustomLink( { children, to, category, setCategory, setTaskStorage } ) {
    const match = useMatch(to)
    const myClass =  match? "containerLink__a active" : "containerLink__a"
    const removeCustomLink = () => {
        setCategory(link => link.filter(elem => elem !== category))
        setTaskStorage(state => {
            delete state[category]
            return {...state}
        })
    }
    
    function BtnRemoveCustomLink() {
        if (to === "PersonalTasks") return null

        return (
            <button className="containerLink__btn" onClick={removeCustomLink}>&#9747;</button>
        )
    }


    return (
        <div className="containerLink">
            <BtnRemoveCustomLink />
            <Link
                to={to}
                className={myClass}
                state={category}
            >
                {children}

            </Link>
        </div>

    )
}
export default CustomLink
import { Link, useMatch, useNavigate, useLocation } from "react-router-dom";
import './CustomLink.css'

function CustomLink( { children, to, category, setCategory } ) {
    const navigate = useNavigate()
    const location = useLocation()
    const match = useMatch( {
        path: to,
        end: to.length === 1
    } )
    const myClass =  match? "containerLink__a active" : "containerLink__a"
    const removeCustomLink = () => {
        setCategory(link => link.filter(elem => elem !== category))
        if(location.state === category) navigate("/PersonalTasks", {state : "Личные"})
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
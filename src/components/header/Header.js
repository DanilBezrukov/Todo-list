// import { useLocation } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import { Mapping } from './Mapping/Mapping'
import { Sorting } from './Sorting/Sorting'
import './Header.css'

function Header( {mapping, sort} ) {
    const location = useLocation()
    const navigate = useNavigate()

    const createTask = () => {
        navigate(`${location.pathname}/createTask`, { state: location.state })
    }

    return (
        <header className='header'>
            <Mapping mapping={mapping}/>
            <Sorting sort={sort}/>
            <button className='header__btnCreateTask' onClick={createTask}>Добавить задачу</button>
        </header>
    )
}
export { Header }
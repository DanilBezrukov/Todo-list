// import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Mapping } from './Mapping/Mapping'
import { Sorting } from './Sorting/Sorting'
import './Header.css'

function Header( {activeCategory , mapping} ) {
    return (
        <header className='header'>
            <Mapping mapping={mapping}/>
            <Sorting activeCategory={activeCategory}/>
            <Link to="createTask" className='header__Link' state={activeCategory}>Добавить задачу</Link>
        </header>
    )
}
export { Header }
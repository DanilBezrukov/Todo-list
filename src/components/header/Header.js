// import { useLocation } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import './Header.css'
function Header() {
    const location = useLocation()
    const navigate = useNavigate()

    const createTask = () => {
        navigate(`${location.pathname}/createTask`, { state: location.state })
    }

    return (
        <header className='header'>

            <div className="header__mapping">
                <span className="header__mapping__title">Вид: </span>
                <button className="header__mapping__list">Список</button>
                <button className="header__mapping__tile">Плитка</button>
            </div>

            <div className="sorting">
                <span>Сортировать: </span>
                <select name="">
                    <option value="all">Все</option>
                    <option value="NotFulfilled">Сначало не выполненные</option>
                </select>
            </div>

            {
                location.pathname.endsWith('/createTask')
                ? null
                : <button className='header__btnCreateTask' onClick={createTask}>Добавить задачу</button>
            }
        </header>
    )
}
export default Header
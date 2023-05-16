import './Header.css'
function Header() {
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
        </header>
    )
}
export default Header
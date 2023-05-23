import './CategoryButton.css'

function CategoryButton({ children, setTasks, activeCategory, setActiveCategory }) {
    const myClass = activeCategory === children ? "CategoryButton__btn active" : "CategoryButton__btn"

    const removeCustomLink = () => {
        setTasks(state => {
            delete state[children]
            return { ...state }
        })
        setActiveCategory("Личные")
    }

    return (
        <div className="CategoryButton">

            {children !== "Личные" && <button className="CategoryButton__removeBtn" onClick={removeCustomLink}>&#9747;</button>}

            <button className={myClass} onClick={ () => { setActiveCategory(children) } }>
                {children}
            </button>

        </div>

    )
}
export { CategoryButton }
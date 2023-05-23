import { CategoryButton } from "../CategoryButton/CategoryButton";
import { BtnAddCategory } from "../BtnAddCategory/BtnAddCategory";
import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskProvider";
import './NavBar.css'

function NavBar( { activeCategory, setActiveCategory } ) {
    const { tasks, setTasks } = useContext(TaskContext)
    const categories = Object.keys(tasks)
    return (
        <nav className="NavBar">
            <h2 className="NavBar__h2">Категория</h2>
            <div className="NavBar__container">
                {
                    categories?.map(elem => (
                        <CategoryButton
                            key={elem}
                            setTasks={setTasks}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                        >
                            {elem}
                        </CategoryButton>
                    )
                    )
                }
            </div>


            <BtnAddCategory setTasks={setTasks} />
        </nav>
    )
}
export { NavBar }
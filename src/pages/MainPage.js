import { useLocalStorage } from "../hooks/useLocalStorage";
import { NavBar } from "../components/NavBar/NavBar";
import { Header } from "../components/header/Header";
import { Tasks } from "../components/Tasks/Tasks"

function MainPage () {
    const [activeCategory, setActiveCategory] = useLocalStorage("activeCategory", "Личные")
    return (
        <>
            <NavBar activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
            <Header activeCategory={activeCategory}/>
            <Tasks activeCategory={activeCategory}/>
        </>
    )
}
export { MainPage }
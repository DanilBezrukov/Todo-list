import { useLocalStorage } from "../hooks/useLocalStorage";
import { NavBar } from "../components/NavBar/NavBar";
import { Header } from "../components/header/Header";
import { Tasks } from "../components/Tasks/Tasks"

function MainPage() {
    const [activeCategory, setActiveCategory] = useLocalStorage("activeCategory", "Личные")
    const [mappingFlag, setMappingFlag] = useLocalStorage("mappingFlag", true)
    

    return (
        <>
            <NavBar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            <Header
                activeCategory={activeCategory}
                mapping={[mappingFlag, setMappingFlag]}
            />
            <Tasks 
            activeCategory={activeCategory} 
            mappingFlag={mappingFlag}
            />
        </>
    )
}
export { MainPage }
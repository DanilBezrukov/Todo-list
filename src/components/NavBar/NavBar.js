import BtnAddCategory from "../BtnAddCategory/BtnAddCategory";
import CustomLink from "../CustomLink/CustomLink";
import './NavBar.css'

function NavBar( {category, setCategory, setTaskStorage} ) {
    return (
        <nav className="NavBar">
            <h2 className="NavBar__h2">Категория</h2>

            <div className="NavBar__container">
                <CustomLink to="PersonalTasks" category={"Личные"} setTaskStorage={setTaskStorage}>Личные</CustomLink> 
                {
                    category.map( (elem, i) => {
                        return(
                            <CustomLink 
                            to={`CustomCategory${i + 1}`}  
                            key={`CustomCategory${i + 1}`} 
                            category={elem}
                            setCategory={setCategory}
                            setTaskStorage={setTaskStorage}
                            >
                            {elem}
                            </CustomLink>
                        )
                    })
                }
            </div>
            

            <BtnAddCategory setCategory={setCategory}/>
        </nav>
    )
}
export default NavBar
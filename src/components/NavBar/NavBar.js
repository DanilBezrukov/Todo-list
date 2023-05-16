// import { NavLink } from "react-router-dom";
// import { useState } from "react";
import BtnAddCategory from "../BtnAddCategory/BtnAddCategory";
import CustomLink from "../CustomLink/CustomLink";
import './NavBar.css'

function NavBar( {category, setCategory} ) {
    return (
        <nav className="NavBar">
            <h2 className="NavBar__h2">Категория</h2>

            <div className="NavBar__container">
                <CustomLink to="PersonalTasks">Личные</CustomLink> 
                {
                    category.map( (elem, i) => {
                        return(
                            <CustomLink to={`CustomTasks${i + 1}`}  
                            key={`CustomTasks${i + 1}`} 
                            category={elem}
                            setCategory={setCategory}
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
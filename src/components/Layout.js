import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar/NavBar";
import { Header } from "./header/Header";
import "./Layout.css"
function Layout( {category, setCategory, mapping, sort, setTaskStorage } ) {
    return (
        <>
            <NavBar category={category} setCategory={setCategory} setTaskStorage={setTaskStorage}/>
            <Header mapping={mapping} sort={sort}/>

            <div className="childContainer">
                <Outlet />
            </div>
        </>
    )
}
export { Layout }
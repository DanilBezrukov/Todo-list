import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Header from "./header/Header";
import "./Layout.css"
function Layout( {category, setCategory, taskStorage} ) {
    console.log("taskStorage", taskStorage)
    return (
        <>
            <NavBar category={category} setCategory={setCategory}/>
            <Header/>

            <div className="childContainer">
                <Outlet />
            </div>
        </>
    )
}
export default Layout
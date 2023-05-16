import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Header from "./header/Header";

function Layout( {category, setCategory} ) {
    return (
        <>
            <NavBar category={category} setCategory={setCategory}/>
            <Header/>

            <Outlet />
        </>
    )
}
export default Layout
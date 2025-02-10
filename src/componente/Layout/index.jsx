import { Outlet } from "react-router";
import Cabecalho from "../Cabecalho";

const Layout = () => {
    return (
        <>
            <Cabecalho />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;

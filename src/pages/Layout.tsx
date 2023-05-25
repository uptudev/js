import {Outlet, Link, useLocation} from "react-router-dom";
import logo from '../assets/banner.webp';
import React, {useEffect} from "react";

function capitalizeAfterSlash(str: string): string {
    if (str.charAt(0) === '/') {
        str = str.substring(1);
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getTitle(pathname: string) : string {
    if (pathname === "/") {
        return ("uptu");
    } else if (pathname ==="/av") {
        return ("uptu | A/V")
    } else {
        return(`uptu | ${capitalizeAfterSlash(pathname)}`);
    }
}

const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = getTitle(location.pathname);
    }, [location]);

    return (
        <div className="App">
            <header className="logo-container">
                <Link to="/">
                    <img src={logo} className="App-logo" alt="logo"/>
                </Link>
            </header>

            <nav>
                <ul>
                    <li className="button">
                        <Link to="/games">GAMES</Link>
                    </li>
                    <li className="button">
                        <Link to="/av">A/V</Link>
                    </li>
                    <li className="button">
                        <Link to="/blog">BLOG</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
            <div className="footer">
                © uptu 2023
            </div>
        </div>
    )
};

export default Layout;

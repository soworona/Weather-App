import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
        <>
            <header className='header'>
                <a className="logo" href="/">home</a>
                <nav>
                    <Link to="/new">new</Link>
                    <a href="https://github.com/soworona" target="_blank">github</a>
                    <Link to="/about">about</Link>
                </nav>
            </header>

            <div className="container">
                <Outlet />


            </div>




        </>
    );
}
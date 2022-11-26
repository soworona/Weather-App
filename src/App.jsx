import { Link, Outlet, Route, Routes } from "react-router-dom";
import Game from "./components/Game";
export default function App() {

  return (
    <div>
      <nav>
        <ul>
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/Game">Game</Link></li>
        </ul>
      </nav>
      <Routes>
       <Route path ="/" element ={<Home />}  >
        <Route path ="/posts" element ={<MyPost />} / >
        <Route path="/Game" element={<Game />} />
       </Route>
      </Routes>
    </div>
  );
}

function Home () {
  return (
    <>
    <div>Header</div>
    <div>Sidebar</div>
    <Outlet />
    <div>Footer</div>
    </>
  );
}

function MyPost () {
  return (
    <div>My Post</div>
  )
}
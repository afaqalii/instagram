import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import "./pages/style.scss"
function App() {
  return (
    <div>
      <Home/>      
      {/* <Register/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;

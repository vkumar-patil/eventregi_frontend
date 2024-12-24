import "./App.css";
import { Routes, Route } from "react-router-dom";
import AdminHomePage from "./Componant/Admin/AdminHomePage";
import UserHomepage from "./Componant/Users/UserHomepage";
import Login from "./Componant/Login ";
import Register from "./Componant/Register";
//import ProtectedRoute from "./Componant/Protectroute";
function App() {
  return (
    <>
      <Routes>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/UserHomepage" element={<UserHomepage />}></Route>
        <Route
          path="/AdminHomePage"
          element={
            // <ProtectedRoute requiredRole={true}>
            <AdminHomePage />
            // </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;

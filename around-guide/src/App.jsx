import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Routes from "./components/Routes/Routes";
import { Routes as RouterRoutes, Route } from "react-router-dom";
import Login from "./components/MainPage/Login/Login";
import Forgot_password from "./components/MainPage/Login/Forgot-password/Forgot-password";

function App() {
    return (
        <RouterRoutes>
            <Route
                path="/"
                element={
                    <>
                        <Header />
                        <Hero />
                        <Routes />
                    </>
                }
            />

            <Route
                path="/login"
                element={<Login />}
            />
            <Route 
                path="/forgot_password"
                element={<Forgot_password/>}
            />
            
        </RouterRoutes>
    );
}

export default App;
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Routes from "./components/Routes/Routes";
import { Routes as RouterRoutes, Route } from "react-router-dom";
import Login from "./components/MainPage/Login/Login";


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
            
        </RouterRoutes>
    );
}

export default App;
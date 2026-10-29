import "./Login.scss";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import button_back from "../../../assets/register/back.svg"

import TravelSlider from "./Slider/TravelSlider";
import Auth from "./Auth/Auth";
import Register from "./Register/Register";

function Login(){
    
    const [activeTab, setActiveTab] = useState("signin");


    return (
        <div className="login">
            <div className="login__image">
                <TravelSlider />
            </div>
            <div className="login__content">
                <div className="login__headline">
                    <div className="login__back">
                        <Link to="/"><img src={button_back} alt="button_back" /></Link>
                    </div>
                    <h1 className="login__text">Welcome!</h1>
                </div>
                <div className="login__form">
                    <p className="login__title">Please enter your details login</p>
                    
                    <div className="login__button-switch-all">

                        <div className="login__button-switch">
                            <div className="login__button-switch__elements">
                                <button className={activeTab === "signin" ? "login__tab login__tab--active" : "login__tab"}
                                onClick={() => setActiveTab("signin")} type="button">sign in</button>
                                <button className={activeTab === "signup" ? "login__tab login__tab--active" : "login__tab"}
                                onClick={() => setActiveTab("signup")} type="button">sign up</button>

                            </div>
                        </div>

                    </div>
                    
                    {activeTab === "signin" ? (
                        <>
                        <Auth />
                        </>
                    ): (
                        <Register />
                    )}

                </div>
            </div>
        </div>
    );
}

export default Login;
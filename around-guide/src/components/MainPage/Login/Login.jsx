import "./Login.scss";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import button_back from "../../../assets/register/back.svg"

import TravelSlider from "./Slider/TravelSlider";
import Auth from "./Auth/Auth";
import Register from "./Register/Register";

function Login(){
    const { t, i18n } = useTranslation();
    const [activeTab, setActiveTab] = useState("signin");
    const [isOpen, setIsOpen] = useState(false);
    const languageRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                languageRef.current &&
                !languageRef.current.contains(event.target)
            ) {
                setIsOpen(false);
                // setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setIsOpen(false);
    };

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
                    <h1 className="login__text">{t("login.headline")}</h1>
                    {/* <div className="language" ref={languageRef}>
                        <button
                            className="language__button-login"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                        >
                            {i18n.language === "ru" ? "RU" : "EN"}
                            <span>⌄</span>
                        </button>

                        <div
                            className={`language__dropdown ${
                                isOpen ? "language__dropdown--open" : ""
                            }`}
                        >
                            <button onClick={() => changeLanguage("ru")}>
                                RU
                            </button>

                            <button onClick={() => changeLanguage("en")}>
                                EN
                            </button>
                        </div>
                    </div> */}
                </div>
                <div className="login__form">
                    {activeTab === "signin" ? (
                        <>
                        <p className="login__title">{t("login.login-title_sign-in")}</p>
                        </>
                    ): (
                         <p className="login__title">{t("login.login-title_register")}</p>
                    )}
                   
                    
                    <div className="login__button-switch-all">

                        <div className="login__button-switch">
                            <div className="login__button-switch__elements">
                                <button className={activeTab === "signin" ? "login__tab login__tab--active" : "login__tab"}
                                onClick={() => setActiveTab("signin")} type="button">{t("login.sign-in")}</button>
                                <button className={activeTab === "signup" ? "login__tab login__tab--active" : "login__tab"}
                                onClick={() => setActiveTab("signup")} type="button">{t("login.register")}</button>

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
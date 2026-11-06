import "./Login.scss";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import button_back from "../../../assets/register/back.svg"

import TravelSlider from "./Slider/TravelSlider";
import Auth from "./Auth/Auth";
import Register from "./Register/Register";
import Forgot_password from "./Forgot-password/Forgot-password";
import RegisterCode from "./Register/RegisterCode/RegisterCode";
import ResetPassword from "./ResetPassword/ResetPassword";

function Login(){
    const { t, i18n } = useTranslation();
    const [activeTab, setActiveTab] = useState("signin");
    const [codeMode, setCodeMode] = useState("register");

    return (
        <div className="login">
            <div className="login__image">
                <TravelSlider />
            </div>

                <div className="login__content">


                <div className="login__headline">
                    <div className="login__back">
                        <Link  to="/"><img className="login__back-button" src={button_back} alt="button_back" /></Link>
                    </div>
                    <h1 className="login__text">{t("login.headline")}</h1>
                </div>
                <div className="login__form">
                {activeTab === "signin" ? (
                    <p className="login__title">
                        {t("login.login-title_sign-in")}
                    </p>
                ) : activeTab === "signup" ? (
                    <p className="login__title">
                        {t("login.login-title_register")}
                    </p>
                ) : activeTab === "sendCode" ? (
                    <p className="login__title">
                        {t("login.login-title_code")}
                    </p>
                ) : activeTab === "ForgotPassword" ? (
                    <p className="login__title">
                        {t("login.login-title_forgotPassword")}
                    </p>
                ) : activeTab === "resetPassword" ? (
                    <p className="login__title">
                        {t("login.login-title_resetPassword")}
                    </p>
                ) : null}
                   
                    
                    {activeTab !== "sendCode" && activeTab !=="ForgotPassword" && activeTab !== "resetPassword" && (
                        <div className="login__button-switch-all">

                            <div className="login__button-switch">
                                <div className="login__button-switch__elements">

                                    <button
                                        className={activeTab === "signin" ? "login__tab login__tab--active" : "login__tab"}
                                        onClick={() => setActiveTab("signin")}
                                        type="button"
                                    >
                                        {t("login.sign-in")}
                                    </button>

                                    <button
                                        className={activeTab === "signup" ? "login__tab login__tab--active" : "login__tab"}
                                        onClick={() => setActiveTab("signup")}
                                        type="button"
                                    >
                                        {t("login.register")}
                                    </button>

                                </div>
                            </div>

                        </div>
                    )}
                    
                    {activeTab === "signin" && (
                        <Auth setActiveTab={setActiveTab} />
                    )}

                    {activeTab === "signup" && (
                        <Register
                            setActiveTab={setActiveTab}
                            setCodeMode={setCodeMode}
                        />
                    )}
                    {activeTab === "ForgotPassword" && (
                        <Forgot_password
                            setActiveTab={setActiveTab}
                            setCodeMode={setCodeMode}
                        />
                    )}

                    {activeTab === "sendCode" && (
                        <RegisterCode
                            setActiveTab={setActiveTab}
                            mode={codeMode}
                        />
                    )}

                    {activeTab === "resetPassword" && (
                        <ResetPassword />
                    )}

                    {/* {activeTab === "ForgotPassword" && (
                        <Forgot_password setActiveTab={setActiveTab} />
                    )} */}

                </div>
            </div>
        </div>
    );
}

export default Login;
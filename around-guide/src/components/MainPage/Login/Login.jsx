import "./Login.scss";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import button_back from "../../../assets/register/back.svg"

import TravelSlider from "./TravelSlider";

function Login(){
    
    const [activeTab, setActiveTab] = useState("signin");

    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState("+62");
    const [showCountries, setShowCountries] = useState(false);
    const countries = [
        { name: "Indonesia", code: "+62" },
        { name: "Russia", code: "+7" },
        { name: "United States", code: "+1" },
        { name: "United Kingdom", code: "+44" },
        { name: "Thailand", code: "+66" },
    ];

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [rememberPassword, setRememberPassword] = useState(false);

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
                        
                        <div className="login__form-write">
                            <div className="login__form-headline">
                                <label htmlFor="phone">Phone number</label>
                            </div>
                            <div className="login__phone-all">

                                <div className="login__phone">
                                    <button
                                        type="button"
                                        className="login__phone-code"
                                        onClick={() => setShowCountries(!showCountries)}
                                        aria-expanded={showCountries}
                                    >
                                        {countryCode}
                                        <span className="login__phone-arrow">⌄</span>
                                    </button>

                                        {showCountries && (
                                            <div className="login__phone-dropdown">
                                                {countries.map((country) => (
                                                    <button
                                                        type="button"
                                                        key={country.code}
                                                        onClick={() => {
                                                            setCountryCode(country.code);
                                                            setShowCountries(false);
                                                        }}
                                                    >
                                                        {country.name} ({country.code})
                                                    </button>
                                                ))}
                                            </div>
                                        )}

                                        <input
                                            id="phone"
                                            className="login__phone-number"
                                            type="tel"
                                            value={phone}
                                            onChange={(event) => {
                                                const numbersOnly = event.target.value.replace(/\D/g, "");
                                                setPhone(numbersOnly);
                                            }}
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                            </div>
                        </div>

                        <div className="login__form-write">
                            <div className="login__form-headline">
                                <label htmlFor="pass">Password</label>
                            </div>

                            <div className="login__password">
                                <input
                                    id="pass"
                                    className="login__password-input"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    placeholder="Enter your password"
                                />

                                <button
                                    type="button"
                                    className="login__password-toggle"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? (
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <path   
                                                d="M3 3L21 21M10.6 10.7A2 2 0 0013.3 13.4M9.9 5.2A10.8 10.8 0 0112 5C17 5 20.5 9 22 12C21.3 13.4 20.3 14.7 19.1 15.7M6.2 6.2C4.2 7.5 2.7 9.6 2 12C3.5 15 7 19 12 19C13.2 19 14.3 18.8 15.3 18.4"
                                                stroke="currentColor"
                                                strokeWidth="1.7"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M2 12C3.5 9 7 5 12 5S20.5 9 22 12C20.5 15 17 19 12 19S3.5 15 2 12Z"
                                                stroke="currentColor"
                                                strokeWidth="1.7"
                                                strokeLinejoin="round"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="3"
                                                stroke="currentColor"
                                                strokeWidth="1.7"
                                            />
                                        </svg>
                                    )}
                                </button>


                            </div>

                            <div className="login__remember">
                                <label className="login__remember-label">
                                    <input
                                        type="checkbox"
                                        checked={rememberPassword}
                                        onChange={(event) => setRememberPassword(event.target.checked)}
                                    />

                                    <span className="login__checkbox"></span>

                                    <span className="login__remember-text">
                                        Remember password
                                    </span>
                                </label>
                                <a href="/forgot-password" className="login__forgot-password">
                                    Forgot password?
                                </a>
                            </div>

                        </div>
                        </>
                    ): (
                        <div className=""></div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default Login;
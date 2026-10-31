import "./Register.scss";

import { useState, useEffect, useTransition } from "react";
import { useTranslation } from "react-i18next";

import countries from "../../../../data/countries.json"
import RegisterCode from "./RegisterCode/RegisterCode";


function Register(){
        const {t} = useTranslation();
        const [phone, setPhone] = useState("");
        const [countryCode, setCountryCode] = useState("+62");
        const [showCountries, setShowCountries] = useState(false);
        const allCountries = countries;

        const [password, setPassword] = useState("");
        const [showPassword, setShowPassword] = useState(false);

        const [rememberPassword, setRememberPassword] = useState(false);
        
        const [showCode, setShowCode] = useState(false);
        const [name, setName] = useState("");
        const [lastName, setLastName] = useState("");
        const [email, setEmail] = useState("");
        const [phoneNumber, setPhoneNumber] = useState("");
        const [passwordWrite, setPasswordWrite] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("");

        const [error, setError] = useState("");


        const handleSendCode = (event) => {
                event.preventDefault();

            if (
                name.trim() === "" ||
                lastName.trim() === "" ||
                phone.trim() === "" ||
                password.trim() === "" 
            ) {
                alert("Please fill in all fields");
                return;
            }

            // if (password !== confirmPassword) {
            //     alert("Passwords do not match");
            //     return;
            // }

            // setError("");
            // alert(setError(""));

            setShowCode(true)
        }

        const handleregister = (e) => {
            e.preventDefault();

            console.log("Отправка формы");
        };

    return(
        <>
            {showCode ? (
                <RegisterCode />
            ) : (
                
        <form className="register" onSubmit={handleregister}>

            <div className="register__all-input">
                <div className="register__all-block">
                    <div className="register__name">
                        <div className="register__first-name">
                            <label className="register__name-text" htmlFor="name">{t("register-login.name")}</label>

                            <div className="register__enter">
                                <input 
                                id="name"
                                name="firstName"
                                className="register__enter-name"
                                type="text" 
                                placeholder={t("register-login.name")}
                                onChange={(event)=> setName(event.target.value)}
                                autoComplete="given-name"
                                required/>

                            </div>
                        </div>

                        <div className="register__last-name">
                            <label className="register__name-text" htmlFor="name">{t("register-login.last-name")}</label>
                            <div className="register__enter">

                                <input 
                                id="lastName"
                                name="lastName"
                                className="register__enter-name"
                                type="text"
                                placeholder={t("register-login.last-name")}
                                onChange={(event)=> setLastName(event.target.value)}
                                autoComplete="family-name"
                                required/>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="register__form-write">
                    <div className="register__form-headline">
                        <label htmlFor="phone">{t("register-login.phone")}</label>
                    </div>
                    <div className="register__phone-all">

                        <div className="register__phone">
                            <button
                                type="button"
                                className="register__phone-code"
                                onClick={() => setShowCountries(!showCountries)}
                                aria-expanded={showCountries}
                            >
                                {countryCode}
                                <span className="register__phone-arrow">⌄</span>
                            </button>

                                {showCountries && (
                                    <div className="register__phone-dropdown">
                                        {Object.entries(allCountries).map(([key,country]) => (
                                            <button
                                                type="button"
                                                key={key}
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
                                    className="register__phone-number"
                                    type="tel"
                                    autoComplete="tel"
                                    value={phone}
                                    onChange={(event) => {
                                        const numbersOnly = event.target.value.replace(/\D/g, "");
                                        setPhone(numbersOnly);
                                    }}
                                    placeholder={t("register-login.enter-phone")}
                                    
                                />
                            </div>
                    </div>
                </div>

                <div className="register__form-write">
                    <div className="register__form-headline">
                        <label htmlFor="pass">{t("register-login.password")}</label>
                    </div>

                    <div className="register__password-display">
                    
                    
                        <div className="register__password">
                            <input
                                id="pass"
                                className="register__password-input"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder={t("register-login.enter-password")}
                                autoComplete="current-password"
                                required
                            />

                            <button
                                type="button"
                                className="register__password-toggle"
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
                    </div> 

                </div>
                
                <div className="register__remember-all">
                    <div className="register__remember">
                        <label className="register__remember-label">
                            <input
                                type="checkbox"
                                checked={rememberPassword}
                                onChange={(event) => setRememberPassword(event.target.checked)}
                            />

                            <span className="register__checkbox"></span>

                            <span className="register__remember-text">
                                {t("register-login.remember")}
                            </span>
                        </label>
                        <a href="/forgot-password" className="register__forgot-password">
                            {t("register-login.forgot")}
                        </a>
                    </div>

                </div>
                <div className="register__accepted-btn_all">

                    <div className="register__accepted-btn_code">
                        <button type="button" className="register__accepted-btn" onClick={handleSendCode}>{t("register-login.register")}</button>
                    </div>
                </div>

            </div>
        </form>
                
            )}
        </>

    );
}

export default Register;
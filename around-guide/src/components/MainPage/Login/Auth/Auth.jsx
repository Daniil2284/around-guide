import "./Auth.scss"

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import countries from "../../../../data/countries.json"

function Auth(){
        const {t} = useTranslation();

        const [phone, setPhone] = useState("");
        const [countryCode, setCountryCode] = useState("+62");
        const [showCountries, setShowCountries] = useState(false);
        const allCountries = countries

        const [password, setPassword] = useState("");
        const [showPassword, setShowPassword] = useState(false);

        const [rememberPassword, setRememberPassword] = useState(false);

        const handleSendCode = () => {
            console.log("Button send clicked")
        }

        const handleLogin = (e) => {
            e.preventDefault();

            console.log("Отправка формы");
        };

    return(
        <form className="auth" onSubmit={handleLogin}>

            <div className="login__all-input">
                <div className="login__form-write">
                    <div className="login__form-headline">
                        <label htmlFor="phone">{t("register-login.phone")}</label>
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
                                    className="login__phone-number"
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

                <div className="login__form-write">
                    <div className="login__form-headline">
                        <label htmlFor="pass">{t("register-login.password")}</label>
                    </div>

                    <div className="login__password-display">
                    
                    
                        <div className="login__password">
                            <input
                                id="pass"
                                className="login__password-input"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder={t("register-login.enter-password")}
                                autoComplete="current-password"
                                required
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
                    </div> 

                </div>
                
                <div className="login__remember-all">
                    <div className="login__remember">
                        <label className="login__remember-label">
                            <input
                                type="checkbox"
                                checked={rememberPassword}
                                onChange={(event) => setRememberPassword(event.target.checked)}
                            />

                            <span className="login__checkbox"></span>

                            <span className="login__remember-text">
                                {t("register-login.remember")}
                            </span>
                        </label>
                        <a href="/forgot-password" className="login__forgot-password">
                            {t("register-login.forgot")}
                        </a>
                    </div>

                </div>
                <div className="login__accepted-btn_all">

                    <div className="login__accepted-btn_code">
                        <button type="button" className="login__accepted-btn" onClick={handleSendCode}>{t("register-login.sign-in")}</button>
                    </div>
                </div>

            </div>
        </form>
    );
}

export default Auth;
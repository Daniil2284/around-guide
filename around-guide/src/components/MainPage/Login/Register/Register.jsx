import "./Register.scss";

import { useState, useEffect } from "react";

import countries from "../../../../data/countries.json"


function Register(){
        const [phone, setPhone] = useState("");
        const [countryCode, setCountryCode] = useState("+62");
        const [showCountries, setShowCountries] = useState(false);
        const allCountries = countries;

        const [password, setPassword] = useState("");
        const [showPassword, setShowPassword] = useState(false);

        const [rememberPassword, setRememberPassword] = useState(false);

        const handleSendCode = () => {
            console.log("Button send clicked")
        }

        const handleregister = (e) => {
            e.preventDefault();

            console.log("Отправка формы");
        };

    return(
        <form className="register" onSubmit={handleregister}>
            <div className="register__all-block">
                <div className="register__name">
                    <div className="register__first-name">
                        <label className="register__name-text" htmlFor="name">Name</label>

                        <div className="register__enter">
                            <input 
                            id="name"
                            name="firstName"
                            className="register__enter-name"
                            type="text" 
                            placeholder="Name"
                            autoComplete="given-name"
                            required/>

                        </div>
                    </div>

                    <div className="register__last-name">
                        <label className="register__name-text" htmlFor="name">First Name</label>
                        <div className="register__enter">

                            <input 
                            id="lastName"
                            name="lastName"
                            className="register__enter-name"
                            type="text"
                            placeholder="Last Name"
                            autoComplete="family-name"
                            required/>
                        </div>
                    </div>
                </div>

            </div>

            <div className="register__all-input">
                <div className="register__form-write">
                    <div className="register__form-headline">
                        <label htmlFor="phone">Phone number</label>
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
                                    placeholder="Enter your phone number"
                                />
                            </div>
                    </div>
                </div>

                <div className="register__form-write">
                    <div className="register__form-headline">
                        <label htmlFor="pass">Password</label>
                    </div>

                    <div className="register__password-display">
                    
                    
                        <div className="register__password">
                            <input
                                id="pass"
                                className="register__password-input"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="Enter your password"
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
                                Remember password
                            </span>
                        </label>
                        <a href="/forgot-password" className="register__forgot-password">
                            Forgot password?
                        </a>
                    </div>

                </div>
                <div className="register__accepted-btn_all">

                    <div className="register__accepted-btn_code">
                        <button type="button" className="register__accepted-btn" onClick={handleSendCode}>Sign up</button>
                    </div>
                </div>

            </div>
        </form>
    );
}

export default Register;
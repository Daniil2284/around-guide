
import "./Forgot-password.scss";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import countries from "../../../../data/countries.json"
import Alert from "../Register/Alert/Alert";
import RegisterCode from "../Register/RegisterCode/RegisterCode";


function Forgot_password({setActiveTab, setCodeMode }){
    
        const {t} = useTranslation();

        const [phone, setPhone] = useState("");
        const [countryCode, setCountryCode] = useState("+62");
        const [showCountries, setShowCountries] = useState(false);
        const [showCode, setShowCode] = useState(false);

        const [alertMessage, setAlertMessage] = useState("");
        const [showAlert, setShowAlert] = useState(false);
        const MinPhoneNumber = 10;
        
        const allCountries = countries
        const handleSendCode = (event) => {
                event.preventDefault();

            if (
                phone.trim() === ""
            ) {
                setAlertMessage(t("register-field.fill"));
                setShowAlert(true);
                return;
            }
            if (
                phone.length < MinPhoneNumber 
            ) {
                setAlertMessage(t("register-field.phone"));
                setShowAlert(true);
                return;
            }

            setShowAlert(false);
            setShowCode(true);
            setCodeMode("forgot-password");
            setActiveTab("sendCode");
        }

        const handleLogin = (e) => {
            e.preventDefault();

            console.log("Отправка формы");
        };


    return(
        <>
            <Alert
                alertMessage={alertMessage}
                showAlert={showAlert}
                setShowAlert={setShowAlert}
            />
            {showCode ? (
                <RegisterCode />
            ) : (
            <form className="auth" onSubmit={handleLogin}>

                <div className="forgotPassword__all-input">
                    <div className="forgotPassword__form-write">
                        <div className="forgotPassword__form-headline">
                            <label htmlFor="phone">{t("register-forgotPassword.phone")}</label>
                        </div>
                        <div className="forgotPassword__phone-all">

                            <div className="forgotPassword__phone">
                                <button
                                    type="button"
                                    className="forgotPassword__phone-code"
                                    onClick={() => setShowCountries(!showCountries)}
                                    aria-expanded={showCountries}
                                >
                                    {countryCode}
                                    <span className="forgotPassword__phone-arrow">⌄</span>
                                </button>

                                    {showCountries && (
                                        <div className="forgotPassword__phone-dropdown">
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
                                        className="forgotPassword__phone-number"
                                        type="tel"
                                        autoComplete="tel"
                                        value={phone}
                                        onChange={(event) => {
                                            const numbersOnly = event.target.value.replace(/\D/g, "");
                                            setPhone(numbersOnly);
                                        }}
                                        placeholder={t("register-forgotPassword.enter-phone")}
                                    />
                                </div>
                        </div>
                    </div>

                    <div className="forgotPassword__accepted-btn_all">

                        <div className="forgotPassword__accepted-btn_code">
                            <button type="button" className="forgotPassword__accepted-btn" onClick={handleSendCode}>{t("register-forgotPassword.sendCode")}</button>
                        </div>
                    </div>

                </div>
            </form>
            )};
        </>
    );
    
}

export default Forgot_password;
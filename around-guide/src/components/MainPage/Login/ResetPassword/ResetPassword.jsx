import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import "./ResetPassword.scss"
import Alert from "../Register/Alert/Alert";

function ResetPassword(){
    const {t} = useTranslation()
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [alertMessage, setAlertMessage] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [showCode, setShowCode] = useState(false);
    
    const MinLengthPassword = 8;
    const MaxLengthPassword = 20;
    const RegularSymbol =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;

    const handleSendCode = (event) => {
                event.preventDefault();

            if (
                password.trim() === "" 
            ) {
                setAlertMessage(t("register-field.fill"));
                setShowAlert(true);
                return;
            }
            if (
                password.length < MinLengthPassword
            ) {
                setAlertMessage(t("register-field.min"));
                setShowAlert(true);
                return;
            }
            if (
                password.length > MaxLengthPassword
            ){  
                setAlertMessage(t("register-field.max"));
                setShowAlert(true);
                return;
            }
            if (
                !RegularSymbol.test(password)
                
            ) {
                setAlertMessage(t("register-field.symbol"));
                setShowAlert(true);
                return;
            }


            // if (password !== confirmPassword) {
            //     alert("Passwords do not match");
            //     return;
            // }

            // setError("");
            // alert(setError(""));
            setShowAlert(false);
            
        }
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
            <div className="resetPassword-write">
                <div className="resetPassword-headline">
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
                            autoComplete="new-password"
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

                    <div className="login__accepted-btn_all">

                        <div className="login__accepted-btn_code">
                            <button type="button" className="login__accepted-btn" onClick={handleSendCode}>{t("accepted_new-password.accept")}</button>
                        </div>
                    </div>

            </div>
            )}
        </>
        
    )
}

export default ResetPassword;
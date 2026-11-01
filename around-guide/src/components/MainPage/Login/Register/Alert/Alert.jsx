import "./Alert.scss"

import { useEffect } from "react";

function Alert({ alertMessage, showAlert, setShowAlert }) {
    useEffect(() => {
        if (showAlert) {
            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [showAlert, alertMessage, setShowAlert]);

    return (
        <>
            {showAlert && (
                <div className="register__alert">
                    <div className="register__alert-content">

                        <span className="register__alert-icon">!</span>

                        <p>{alertMessage}</p>

                        <button
                            type="button"
                            onClick={() => setShowAlert(false)}
                        >
                            ×
                        </button>

                    </div>
                </div>
            )}
        </>
    );
}

export default Alert;
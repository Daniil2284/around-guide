import { useState, useRef } from "react";
import "./RegisterCode.scss"

function RegisterCode() {

    const [code, setCode] = useState(["", "", "", ""]);

    const inputsRef = useRef([]);

    // Ввод цифры
    const handleChange = (index, value) => {

        const number = value.replace(/\D/g, "");

        if (!number) {
            const newCode = [...code];
            newCode[index] = "";
            setCode(newCode);
            return;
        }

        const newCode = [...code];

        newCode[index] = number[0];

        setCode(newCode);

        // Переход к следующему input
        if (index < 3) {
            inputsRef.current[index + 1].focus();
        }
    };


    // Удаление цифры
    const handleKeyDown = (index, e) => {

        if (e.key === "Backspace" && !code[index] && index > 0) {

            inputsRef.current[index - 1].focus();
        }
    };


    // Вставка всего кода
    const handlePaste = (e) => {

        e.preventDefault();

        const pastedCode = e.clipboardData
            .getData("text")
            .replace(/\D/g, "")
            .slice(0, 4);

        const newCode = ["", "", "", ""];

        for (let i = 0; i < pastedCode.length; i++) {
            newCode[i] = pastedCode[i];
        }

        setCode(newCode);

        const nextIndex = Math.min(pastedCode.length, 3);

        inputsRef.current[nextIndex].focus();
    };


    // Подтверждение
    const handleConfirm = () => {

        const fullCode = code.join("");

        console.log("Confirmation code:", fullCode);

        // Здесь будет запрос на backend
    };


    return (

        <div className="register-code">

            <div className="register-code__inputs">

                {code.map((value, index) => (

                    <input
                        key={index}
                        ref={(element) => inputsRef.current[index] = element}

                        type="text"
                        inputMode="numeric"
                        autoComplete={index === 0 ? "one-time-code" : "off"}
                        maxLength={1}

                        value={value}

                        onChange={(e) => handleChange(index, e.target.value)}

                        onKeyDown={(e) => handleKeyDown(index, e)}

                        onPaste={handlePaste}

                        className="register-code__input"

                    />

                ))}

            </div>


            <button
                type="button"
                className="register-code__confirm"
                disabled={code.some((digit) => digit === "")}
                onClick={handleConfirm}
            >
                Confirm
            </button>

        </div>

    );
}

export default RegisterCode;
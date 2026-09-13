import { useState } from "react";

function CurrencySelect({ currency, currencies, onChange, t }) {

    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (currency) => {
        onChange(currency);
        setIsOpen(false);
    };

    return (
        <div className="currency">

            <button
                className="currency__selected"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="currency__flag">
                    <img
                        className="tested"
                        src={currencies[currency].icon}
                        alt=""
                    />
                </div>

                {currencies[currency].name}

                <span>⌄</span>
            </button>

            {isOpen && (
                <div className="currency__options">

                    <div onClick={() => handleChange("USD")}>
                        {t("converter-card.USD")}
                    </div>

                    <div onClick={() => handleChange("EUR")}>
                        {t("converter-card.EUR")}
                    </div>

                </div>
            )}

        </div>
    );
}

export default CurrencySelect;
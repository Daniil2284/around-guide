import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Header.scss";
import searchIcon from "..//..//assets/icons/search.svg";

function Header() {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const languageRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                languageRef.current &&
                !languageRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setIsOpen(false);
    };

    return (
        <header className="header">
            <div className="header__logotype">
                Around Guide
            </div>

            <nav className="header__navigate">
                <a href="/">{t("header.main")}</a>
                <a href="/">{t("header.guide_info")}</a>
                <a href="/">{t("header.about_us")}</a>
                <a href="/">{t("header.hotel")}</a>
            </nav>
            <div className="header__placeholder">
                {/* <img className="header__search-icons" src={searchIcon} alt="icons" />*/}
                
                <input className="header__placeholder-main" type="text" placeholder= {t("header.country")}/>
            </div>
            
            <div className="header__log">
                <button className="header__log_in">{t("header.log_in")}</button>
            </div>
            




            {/* Переводчик с выпадающим окном */}

            <div className="language" ref={languageRef}>
                <button
                    className="language__button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {i18n.language === "ru" ? "RU" : "EN"}
                    <span>⌄</span>
                </button>

                {isOpen && (
                    <div className="language__dropdown">
                        <button onClick={() => changeLanguage("ru")}>
                            RU
                        </button>

                        <button onClick={() => changeLanguage("en")}>
                            EN
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
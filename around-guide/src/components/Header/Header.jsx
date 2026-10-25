import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Header.scss";
import searchIcon from "..//..//assets/icons/search.svg";
import BurgerIcon from "./BurgerIcon";


function Header() {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const languageRef = useRef(null);

    
    const [menuOpen, setMenuOpen] = useState(false);
    function closeMenu(){
        setMenuOpen(false);
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                languageRef.current &&
                !languageRef.current.contains(event.target)
            ) {
                setIsOpen(false);
                // setMenuOpen(false);
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

    // Прокрутка вниз вверх
    const [showHeader, setShowHeader] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        function handleScroll() {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 50) {
                setShowHeader(true);
            } else if (currentScrollY > lastScrollY) {
                
                setShowHeader(false);
            } else if (currentScrollY < lastScrollY) {
                
                setShowHeader(true);
            }

            lastScrollY = currentScrollY;
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    return (
        <header className={`header ${showHeader ? "header--visible" : "header--hidden"}`}>
            <div className="header__logotype">
                Around Guide
            </div>


            <nav id="header__navigate"
            className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
                <div className="header__mobile-search">
                    <input
                        className="header__placeholder-main"
                        type="search"
                        placeholder={t("header.country")}
                    />
                </div>
                <a href="/" onClick={closeMenu}>{t("header.main")}</a>
                <a href="/" onClick={closeMenu}>{t("header.guide_info")}</a>
                <a href="/" onClick={closeMenu}>{t("header.hotel")}</a>
                <a href="/" onClick={closeMenu}>{t("header.about_us")}</a>
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
                    aria-expanded={isOpen}
                >
                    {i18n.language === "ru" ? "RU" : "EN"}
                    <span>⌄</span>
                </button>

                <div
                    className={`language__dropdown ${
                        isOpen ? "language__dropdown--open" : ""
                    }`}
                >
                    <button onClick={() => changeLanguage("ru")}>
                        RU
                    </button>

                    <button onClick={() => changeLanguage("en")}>
                        EN
                    </button>
                </div>
            </div>
            <button
                className="header__burger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
                aria-expanded={menuOpen}
            >
                <BurgerIcon isOpen={menuOpen} />
            </button>
        </header>
    );
}

export default Header;
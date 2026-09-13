import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import USA from "../../assets/icons_flag/USA.png";
import EUR from "../../assets/icons_flag/EUR.png";
import "./Routes.scss";
import CurrencySelect from "./CurrencySelect/CurrencySelect";
import places from "../../data/places.json"



function Routes() {
    const {t, i18n } = useTranslation();

    const {scrollY} = useScroll();
    const y = useTransform(scrollY, [2000,3000], [-200,700]); 
    
    const [isOpen, setIsOpen] = useState(false); 
    const [selectedCurrency, setSelectedCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");

    const [amount,setAmount] = useState("");
    const [result, setResult] = useState("");
    
    // const rates = {
    //     USD_EUR : 0.86,
    //     EUR_USD : 1.16
    // };
    const rate = 0.86187
    useEffect(() => {
        const converted = Number(amount) * rate;
        setResult(converted);
    }, [amount]);
    
    const test = Math.trunc(result);
    const transFormedResult = String(test).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    const currencyRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
                if (
                    currencyRef.current &&
                    !currencyRef.current.contains(event.target)
                ){
                    setIsOpen(false);
                }
            };

            document.addEventListener("mousedown", handleClickOutside);

            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
    }, []);

    

    //результат конверта
    // const convert = () => {

    //     if (!amount) {
    //         setResult("");
    //         return;
    //     }

    //     const key = `${fromCurrency}_${toCurrency}`;

    //     const rate = rates[key];

    //     if (!rate) {
    //         setResult("");
    //         return;
    //     }

    //     setResult(Number(amount) * rate);
    // };

    const currencies = {
        USD : {
            name: t("converter-card.USD"),
            icon: USA,
            sym: "$"
        },
        EUR : {
            name: t("converter-card.EUR"),
            icon: EUR,
            sym: "€"
        }
    };

    
    

    const transFormedText = amount.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return (
        <div className="page">
            <section className="section routes">
                <div className="routes__main">
                    <h1 className="routes__headline">{t("routes.headline")}</h1>
                    <p className="routes__desc">{t("routes.desc")}</p>
                </div>
                
                <div className="routes__board-main">

                    <div className="routes__board">
                        {places.map((place , index) => (
                            <div className="route"
                            key={place.name}>
                                <img 
                                className="route__image"
                                src={place.images || place.name} 
                                alt={place.name} />

                                <div className="route__name">
                                    <a className="route__link" href="">
                                        <p className="route__id">{place.id}</p>
                                        <h3 className="route__title">{place.name}</h3>
                                        <p className="route__more-info">{t("routes.more")} <img className="route__arrow" src="./src/assets/icons/arrow.svg" alt="" /></p>
                                    </a>                                    
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <section className="section about">
                <div className="aboutUs">
                    <h1 className="aboutUs__headline">{t("about.headline")}</h1>
                    
                    <div className="aboutUs__main">
                        
                        <div className="aboutUs__big-card">
                            <div className="aboutUs__card">
                                <h3 className="aboutUs__title">{t("about.title_1")}</h3>
                                <p className="aboutUs__desc">{t("about.desc_1")}</p>
                                <img className="aboutUs__img_1" src="../../src/assets/about/img_2.png" alt="aboutUS" />
                            </div>
                            
                                <div className="aboutUs__test">

                                    <div className="aboutUs__line"></div>
                                    <div className="aboutUs__dots">

                                        <motion.img className="aboutUs__ellipse" animate={{
                                            scale:[1,1.1,1]
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease:"easeInOut"
                                        }}
                                        src="../../src/assets/about/ellipse_air.svg" alt="" />

                                        <motion.img className="aboutUs__ellipse" animate={{
                                            scale:[1,1.1,1]
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease:"easeInOut"
                                        }}
                                        src="../../src/assets/about/ellipse_air.svg" alt="" />

                                        
                                    </div>
                                    <motion.img className="aboutUs__airplane" src="../../src/assets/about/airplane.svg" style={{y}} alt="" />
                                </div>
                            
                            
                            <div className="aboutUs__card">
                                <img className="aboutUs__img_2" src="../../src/assets/about/img_1.png" alt="aboutUS" />
                                <h3 className="aboutUs__title">{t("about.title_2")}</h3>
                                <p className="aboutUs__desc">{t("about.desc_2")}</p>
                            </div>

                        
                            <div className="aboutUs__card">
                                <h3 className="aboutUs__title">{t("about.title_3")}</h3>
                                <p className="aboutUs__desc">{t("about.desc_3")}</p>
                                <img className="aboutUs__img_3" src="../../src/assets/about/img_3.png" alt="aboutUS" />
                            </div>
                      
                                <div className="aboutUs__test">

                                    <div className="aboutUs__line"></div>
                                    <div className="aboutUs__dots">

                                        <motion.img className="aboutUs__ellipse" animate={{
                                            scale:[1,1.1,1]
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease:"easeInOut"
                                        }}
                                        src="../../src/assets/about/ellipse_air.svg" alt="" />

                                        <motion.img className="aboutUs__ellipse" animate={{
                                            scale:[1,1.1,1]
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease:"easeInOut"
                                        }}
                                        src="../../src/assets/about/ellipse_air.svg" alt="" />

                                        
                                    </div>
                                </div>
                        </div>
                    </div>


                </div>
            </section>

            <section className="convertor">
                <div className="convertor__main">
                    <div className="convertor__info">
                        <h1 className="convertor__headline">{t("converter.headline")}</h1>
                        <p className="convertor__title">{t("converter.title")}</p>
                    </div>
                    <div className="test">

                        <div className="calc">


                            <div className="calc__content">
                                
                                                             
                                    <span className="calc__label">{t("converter.card_title-take")}</span>
                                    
                                   
                                        
                                        {/* <button className="currency__selected"
                                        onClick={() => setIsOpen(!isOpen)}>
                                            <div className="currency__flag">
                                                <img className="tested" src={currencies[selectedCurrency].icon} alt="" />
                                            </div>
                                            {currencies[selectedCurrency].name}
                                            <span>⌄</span>
                                        </button>
                                        
                                        {isOpen && (

                                        <div className="currency__options">
                                            <div onClick={() => handleChange("USD")}>{t("converter-card.USD")}</div>
                                            <div onClick={() => handleChange("EUR")}>{t("converter-card.EUR")}</div>
                                            </div>
                                            )} */}
                                        
                                        <div className="calc__field">

                                                <CurrencySelect
                                                    currency={selectedCurrency}
                                                    currencies={currencies}
                                                    onChange={setSelectedCurrency}
                                                    t={t}
                                                />
                                            <div className="currency__amout-side">
                                                <span className="currency__sym" >{currencies[selectedCurrency].sym}</span>
                                                <input 
                                                    className="currency__input"
                                                    type="text"
                                                    inputMode="numeric"
                                                    min={"0"}
                                                    max={"999999999"}
                                                    placeholder="0"
                                                    value={transFormedText}
                                                    onChange={(e) => {
                                                        const value = e.target.value.replace(/\D/g, "");
                                                        setAmount(value);
                                                    }}
                                                />


                                            </div> 

                                        </div>

                            
                                
                                    <span className="calc__label">{t("converter.card_title-receive")}</span>



                                
                                    
                                     {/* <button className="currency__selected"
                                    onClick={() => setIsOpen(!isOpen)}>
                                        <div className="currency__flag">
                                            <img className="tested" src={currencies[toCurrency].icon} alt="" />
                                        </div>
                                        {currencies[toCurrency].name}
                                        <span>⌄</span>
                                    </button>
                                    
                                    {isOpen && (

                                    <div className="currency__options">
                                        <div onClick={() => handleChange("USD")}>{t("converter-card.USD")}</div>
                                        <div onClick={() => handleChange("EUR")}>{t("converter-card.EUR")}</div>
                                    </div>
                                    )} */}


                                    <div className="calc__field">


                                            <CurrencySelect
                                                currency={toCurrency}
                                                currencies={currencies}
                                                onChange={setToCurrency}
                                                t={t}
                                            />
                                        <div className="currency__amout-side">
                                            <span className="currency__sym" >{currencies[toCurrency].sym}</span>
                                            <input 
                                                className="currency__input"
                                                type="text"
                                                
                                                placeholder="0"
                                                value={transFormedResult}
                                                readOnly
                                            />


                                        </div> 
                                    </div>
                                
                                


                                
                                
                               

                            </div>

                        </div>
                    </div>


                    
                </div>
            </section>
        </div>

    );
}

export default Routes;
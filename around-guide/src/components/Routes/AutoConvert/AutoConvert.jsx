
import { useTranslation } from "react-i18next";
import "./AutoConvert.scss";
import { useEffect, useState } from "react";

function AutoConvert({value}){
    const { t } = useTranslation();
    const [showAll, setShowAll] = useState(false);

    return (
        <div className="autoConvert">
            <div className="autoConvert__headline">
                <h3 id="autoConvert__headline-title">{t("autoConvert.headline")}</h3>
            </div>

            <div className="autoConvert__desc">
                <p className="autoConvert__desc-text">{t("autoConvert.title-headline")}</p>
            </div>

            <article className={`autoConvert__grid ${showAll ? "show-all" : ""}`}>
                {/* block card */}
                <div className="autoConvert__card">
                    <div className="autoConvert__card-main">

                        <div className="autoConvert__img"><img src="../../src/assets/autoConvert/autoConvert-ellipse-PAR.svg" alt="" /></div>
                        <div className="autoConvert__card-city-title"><h3>{t("autoConvert.city-name.0")}</h3></div>
                        <div className="autoConvert__card-city-desc"><p>{t("autoConvert.country-name.0")}</p></div>
                        <div className="autoConvert__card-city-price">
                            {t("autoConvert.sym.0")}
                            <input style={{userSelect:"none"}} className="autoConvert__card-city-price__input" type="text"
                                placeholder="0"
                                value={value}
                                readOnly
                                
                            /> 
                            
                        </div>
                        <div className="autoConvert__desc-buy">
                            <p className="autoConvert__desc-buy_text">{t("autoConvert.buy.0")} {t("autoConvert.sym.0")}</p>
                        </div>
                    </div>
                    
                </div>

                <div className="autoConvert__card">
                    <div className="autoConvert__card-main">

                        <div className="autoConvert__img"><img src="../../src/assets/autoConvert/autoConvert-ellipse-PAR.svg" alt="" /></div>
                        <div className="autoConvert__card-city-title"><h3>{t("autoConvert.city-name.0")}</h3></div>
                        <div className="autoConvert__card-city-desc"><p>{t("autoConvert.country-name.0")}</p></div>
                        <div className="autoConvert__card-city-price">
                            {t("autoConvert.sym.0")}
                            <input style={{userSelect:"none"}} className="autoConvert__card-city-price__input" type="text"
                                placeholder="0"
                                value={value}
                                readOnly
                                
                            /> 
                            
                        </div>
                        <div className="autoConvert__desc-buy">
                            <p className="autoConvert__desc-buy_text">{t("autoConvert.buy.0")} {t("autoConvert.sym.0")}</p>
                        </div>
                    </div>
                    
                </div>

                <div className="autoConvert__card">
                        <div className="autoConvert__card-main">

                            <div className="autoConvert__img"><img src="../../src/assets/autoConvert/autoConvert-ellipse-PAR.svg" alt="" /></div>
                            <div className="autoConvert__card-city-title"><h3>{t("autoConvert.city-name.0")}</h3></div>
                            <div className="autoConvert__card-city-desc"><p>{t("autoConvert.country-name.0")}</p></div>
                            <div className="autoConvert__card-city-price">
                                {t("autoConvert.sym.0")}
                                <input style={{userSelect:"none"}} className="autoConvert__card-city-price__input" type="text"
                                    placeholder="0"
                                    value={value}
                                    readOnly
                                    
                                /> 
                                
                            </div>
                            <div className="autoConvert__desc-buy">
                                <p className="autoConvert__desc-buy_text">{t("autoConvert.buy.0")} {t("autoConvert.sym.0")}</p>
                            </div>
                        </div>
                        
                </div>

                <div className="autoConvert__card">
                        <div className="autoConvert__card-main">

                            <div className="autoConvert__img"><img src="../../src/assets/autoConvert/autoConvert-ellipse-PAR.svg" alt="" /></div>
                            <div className="autoConvert__card-city-title"><h3>{t("autoConvert.city-name.0")}</h3></div>
                            <div className="autoConvert__card-city-desc"><p>{t("autoConvert.country-name.0")}</p></div>
                            <div className="autoConvert__card-city-price">
                                {t("autoConvert.sym.0")}
                                <input style={{userSelect:"none"}} className="autoConvert__card-city-price__input" type="text"
                                    placeholder="0"
                                    value={value}
                                    readOnly
                                    
                                /> 
                                
                            </div>
                            <div className="autoConvert__desc-buy">
                                <p className="autoConvert__desc-buy_text">{t("autoConvert.buy.0")} {t("autoConvert.sym.0")}</p>
                            </div>
                        </div>
                        
                </div>

                <div className="autoConvert__card">
                    
                    <div className="autoConvert__card-main">

                        <div className="autoConvert__img"><img src="../../src/assets/autoConvert/autoConvert-ellipse-PAR.svg" alt="" /></div>
                        <div className="autoConvert__card-city-title"><h3>{t("autoConvert.city-name.0")}</h3></div>
                        <div className="autoConvert__card-city-desc"><p>{t("autoConvert.country-name.0")}</p></div>
                        <div className="autoConvert__card-city-price">
                            {t("autoConvert.sym.0")}
                            <input style={{userSelect:"none"}} className="autoConvert__card-city-price__input" type="text"
                                placeholder="0"
                                value={value}
                                readOnly
                                
                            /> 
                            
                        </div>
                        <div className="autoConvert__desc-buy">
                            <p className="autoConvert__desc-buy_text">{t("autoConvert.buy.0")} {t("autoConvert.sym.0")}</p>
                        </div>
                    </div>
                    
                </div>

                <div className="autoConvert__card">
                    <div className="autoConvert__card-main">

                        <div className="autoConvert__img"><img src="../../src/assets/autoConvert/autoConvert-ellipse-PAR.svg" alt="" /></div>
                        <div className="autoConvert__card-city-title"><h3>{t("autoConvert.city-name.0")}</h3></div>
                        <div className="autoConvert__card-city-desc"><p>{t("autoConvert.country-name.0")}</p></div>
                        <div className="autoConvert__card-city-price">
                            {t("autoConvert.sym.0")}
                            <input style={{userSelect:"none"}} className="autoConvert__card-city-price__input" type="text"
                                placeholder="0"
                                value={value}
                                readOnly
                                
                            /> 
                            
                        </div>
                        <div className="autoConvert__desc-buy">
                            <p className="autoConvert__desc-buy_text">{t("autoConvert.buy.0")} {t("autoConvert.sym.0")}</p>
                        </div>
                    </div>
                    
                </div>

                <div className="autoConvert__card">
                        <div className="autoConvert__card-main">

                            <div className="autoConvert__img"><img src="../../src/assets/autoConvert/autoConvert-ellipse-PAR.svg" alt="" /></div>
                            <div className="autoConvert__card-city-title"><h3>{t("autoConvert.city-name.0")}</h3></div>
                            <div className="autoConvert__card-city-desc"><p>{t("autoConvert.country-name.0")}</p></div>
                            <div className="autoConvert__card-city-price">
                                {t("autoConvert.sym.0")}
                                <input style={{userSelect:"none"}} className="autoConvert__card-city-price__input" type="text"
                                    placeholder="0"
                                    value={value}
                                    readOnly
                                    
                                /> 
                                
                            </div>
                            <div className="autoConvert__desc-buy">
                                <p className="autoConvert__desc-buy_text">{t("autoConvert.buy.0")} {t("autoConvert.sym.0")}</p>
                            </div>
                        </div>
                        
                </div>

                <div className="autoConvert__card">
                        <div className="autoConvert__card-main">

                            <div className="autoConvert__img"><img src="../../src/assets/autoConvert/autoConvert-ellipse-PAR.svg" alt="" /></div>
                            <div className="autoConvert__card-city-title"><h3>{t("autoConvert.city-name.0")}</h3></div>
                            <div className="autoConvert__card-city-desc"><p>{t("autoConvert.country-name.0")}</p></div>
                            <div className="autoConvert__card-city-price">
                                {t("autoConvert.sym.0")}
                                <input style={{userSelect:"none"}} className="autoConvert__card-city-price__input" type="text"
                                    placeholder="0"
                                    value={value}
                                    readOnly
                                    
                                /> 
                                
                            </div>
                            <div className="autoConvert__desc-buy">
                                <p className="autoConvert__desc-buy_text">{t("autoConvert.buy.0")} {t("autoConvert.sym.0")}</p>
                            </div>
                        </div>
                        
                </div>


                
            </article>
            {!showAll && (
                <button
                    className="autoConvert__show-more"
                    onClick={() => setShowAll(true)}
                >
                    Показать все
                </button>
            )}        

            
            
        </div>
    )
}

export default AutoConvert;

import { useTranslation } from "react-i18next";
import "./AutoConvert.scss";

function AutoConvert({value}){
    const { t } = useTranslation();

    return (
        <div className="autoConvert">
            <div className="autoConvert__headline">
                <h1 className="autoConvert__headline-title">{t("autoConvert.headline")}</h1>
            </div>

            <div className="autoConvert__desc">
                <p className="autoConvert__desc-text">{t("autoConvert.title-headline")}</p>
            </div>

            <article className="autoConvert__grid">
                {/* bloc card */}
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

            

            
            
        </div>
    )
}

export default AutoConvert;
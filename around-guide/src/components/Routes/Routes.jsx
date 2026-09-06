import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Routes.scss";
import places from "../../data/places.json"

function Routes() {
    const {t, i18n } = useTranslation();
    
    return (
        
        <section className="routes">
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
    );
}

export default Routes;
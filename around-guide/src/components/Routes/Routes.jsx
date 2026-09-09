import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Routes.scss";
import places from "../../data/places.json"

function Routes() {
    const {t, i18n } = useTranslation();

    const {scrollY} = useScroll();
    const y = useTransform(scrollY, [2000,3000], [-200,700]); 
    
    
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
        </div>
        
    );
}

export default Routes;
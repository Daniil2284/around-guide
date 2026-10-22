import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./Hero.scss";

function Hero(){
    const { t, i18n } = useTranslation();
    return (
        <section className="hero">
            <div className="hero__main">
                <div className="hero__motion_p">
                    <motion.p className="hero__travel_p"
                    initial ={{
                        rotate: -10,
                        
                    }}
                    animate={{
                        
                        scale:[1, 1.02, 1]
                        
                    }}
                    transition={{
                        duration: 1.5,
                        repeat:Infinity,
                        ease:"easeInOut"
                    }}>
                        on foot, ridge to ridge —
                    </motion.p>

                </div>
                <div className="hero__travel_main">
                    <h1 className="hero__travel_desc">{t("hero.main_linea_1")}
                    <span className="hero__line1">{t("hero.main_linea_2")}</span> 
                    <span className="hero__line2">{t("hero.main_linea_3")}</span></h1>

                </div>
            </div>
        </section>
    );
}

export default Hero;
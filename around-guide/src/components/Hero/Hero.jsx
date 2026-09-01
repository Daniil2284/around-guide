import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./Hero.scss";

function Hero(){
    const { t, i18n } = useTranslation();
    return (
        <section className="hero">
            <motion.p className="hero__travel_p"
            animate={{
                scale:[1, 1.1, 1],
                rotate:[-10]
            }}
            transition={{
                duration: 1.5,
                repeat:Infinity,
                ease:"easeInOut"
            }}>
                on foot, ridge to ridge —
            </motion.p>
            <h1 className="hero__travel_desc">{t("hero.main_linea_1")}<br/><span className="hero__line1">{t("hero.main_linea_2")}</span> <br/> <span className="hero__line2">{t("hero.main_linea_3")}</span></h1>
        </section>
    );
}

export default Hero;
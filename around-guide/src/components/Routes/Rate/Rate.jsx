import { motion, useScroll, useTransform } from "framer-motion";
import "./Rate.scss";

function Rate({fromCurrency, toCurrency, rate, change}){


    const isUp = change >= 0;

    return(
        <div className="rate">
            <div className="rate__main">

                <motion.div className="rate__ellipse"
                animate= {{
                    scale:[1,1.3,1]
                }}
                transition={{
                    duration:1.2,
                    repeat:Infinity,
                    ease:"easeInOut"
                    
                }}
                
                />
                <div className="rate__value">
                     1 {fromCurrency} = {rate} {toCurrency}
                </div>

                <div className={`rate__change ${isUp ? "rate__change--up" : "rate__change--down"}`}>
            
                    <span className="rate__arrow">
                        {isUp ? "↑" : "↓"}
                    </span>

                    <span className="rate__precent">
                        {Math.abs(change)}%
                    </span>

                </div>

            </div>
        </div>
    );
 

}

export default Rate;
import "./TravelSlider.scss"

import { useState, useEffect } from "react";

import image_register1 from "../../../assets/register/image_register1.jpg";
import image_register2 from "../../../assets/register/image_register2.jpg";

function TravelSlider() {
    const images = [
        image_register1,
        image_register2
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((currentIndex) => {
                return (currentIndex + 1) % images.length;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="travel-slider">
            {images.map((image, index) => (
                <img
                    key={image}
                    src={image}
                    alt="Путешествие"
                    className={
                        index === activeIndex
                            ? "travel-slider__image active"
                            : "travel-slider__image"
                    }
                />
            ))}
        </div>
    );
}

export default TravelSlider;
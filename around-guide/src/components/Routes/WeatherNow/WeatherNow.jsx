import { useContext, useRef } from "react"; 
import { useEffect, useState } from "react";
import "./WeatherNow.scss"
import { useTranslation } from "react-i18next";
import mapImage from "../../../assets/WeatherNow/world_map.png";

function WeatherNow() {
    const { t } = useTranslation();
    const [selectedCity, setSelectedCity] = useState("Paris")
    
    const markerDot = [

        {
            x: 821,
            y: 239,
            radius: 10,
            name: "Thailand"

        },
        {
            x: 480,
            y: 125,
            radius: 10,
            name: "Paris"

        },
        {
            x: 888,
            y: 324,
            radius: 10,
            name: "Bali"
        },
        {
            x: 580,
            y: 150,
            radius: 10,
            name: "Istanbul"

        },
    ];
    
    const canvasRef = useRef(null)
    // const coutRepeat = 5;

    useEffect(() => {
        const canvas = canvasRef.current;
        console.log("CANVAS:", canvas);
        const ctx = canvas.getContext("2d");

        const image = new Image();
        // console.log("IMAGE CREATED");
        let pulse = 0;

        let x = 0;
        let y = 0;

        let scale = 1;

        let isDragging = false;
        let hasMoved = false;

        let startX = 0;
        let startY = 0;

        let animationId;

        function drawMarker(marker) {
            const radius = marker.radius + Math.sin(pulse) * 1;
            
            ctx.beginPath();
            ctx.arc(marker.x, marker.y, radius + 5, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(233, 109, 72, 0.3)";
            ctx.fill();

            ctx.beginPath();
            ctx.arc(marker.x, marker.y, marker.radius, 0, Math.PI * 2);
            ctx.fillStyle = "#E17754";
            ctx.fill();
            
        }

        function map() {
            
            ctx.clearRect(0,0, canvas.width, canvas.height);

            ctx.save();

            ctx.translate(x,y);
            ctx.scale(scale, scale);

            //tested repeat
            // for (let i = 0; i < coutRepeat; i++){
            //     for (let j = 0; j < coutRepeat; j++){
            //         ctx.drawImage(image, i * image.width, j * image.height)
            //     }
            // }
           
            ctx.drawImage(image, 0, 0);

            pulse += 0.05;

            for(let i = 0; i < markerDot.length; i++){
                drawMarker(markerDot[i]);
            }
            ctx.restore();

            animationId = requestAnimationFrame(map);
            

        }

        function mouseDown(event) {
            // console.log("MOUSE DOWN");
            isDragging = true;
            hasMoved = false;
            startX = event.offsetX ;
            startY = event.offsetY ;
        }

        function mouseMove(event) {
            // console.log("MOUSE MOVE");
            if (!isDragging) return;

            const dx = event.offsetX - startX;
            const dy = event.offsetY - startY;

            
            if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
                hasMoved = true;
            }
            
            x += dx;
            y += dy;

            startX = event.offsetX;
            startY = event.offsetY;
        }

        function handleClick(event){
            // console.log("CLICK");
            if (hasMoved) return;
            const mouseX = (event.offsetX - x) / scale;
            const mouseY = (event.offsetY - y) / scale;

            for (let i = 0; i < markerDot.length; i++){

                const marker = markerDot[i];
                const distance = Math.sqrt((mouseX - marker.x) ** 2 + (mouseY - marker.y)** 2) ;
    
                if(distance <= marker.radius){
                    // tested
                    // console.log("clicked")
                    // alert(marker.name);
                    setSelectedCity(marker.name);
                    break;
                }   
            }
        }

        
        function mouseUp(){
            isDragging = false;
        }
        
        image.onload = () => {
            // console.log("IMAGE LOADED");
            map();
           
        };
        image.onerror = () => {
            console.log("Ошибка загрузки картинки");
        };

        image.src = mapImage;
        
        canvas.addEventListener("mousedown", mouseDown);
        canvas.addEventListener("mousemove", mouseMove);
        canvas.addEventListener("click",handleClick);
        canvas.addEventListener("mouseup", mouseUp);
        canvas.addEventListener("mouseleave", mouseUp);

        return () => {
            image.onload = null;
            image.onerror = null;
            cancelAnimationFrame(animationId);
            canvas.removeEventListener("mousedown", mouseDown);
            canvas.removeEventListener("mousemove", mouseMove);
            canvas.removeEventListener("click", handleClick);
            canvas.removeEventListener("mouseup", mouseUp);
            canvas.removeEventListener("mouseleave", mouseUp);
        };

    }, []);

    
    return (
        <div className="weather">
            <div className="weather__headline">
                <h2 id="weather__headline-text">{t("weather.headline")}</h2>
            </div>
            <div className="weather__country-nav">


                <nav className="weather__country-nav_select">
                    <ul>
                        <li><button className={`weather__country-nav_select-text ${
                        selectedCity === "Paris" ? "weather__country-nav_select-text--active" : ""
                        }`} onClick={() => setSelectedCity("Paris")} type="button">{t("weather.country-name.0")}</button></li>
                        <li><button className={`weather__country-nav_select-text ${
                        selectedCity === "Thailand" ? "weather__country-nav_select-text--active" : ""
                        }`} onClick={() => setSelectedCity("Thailand")} type="button">{t("weather.country-name.1")}</button></li>
                        <li><button className={`weather__country-nav_select-text ${
                        selectedCity === "Istanbul" ? "weather__country-nav_select-text--active" : ""
                        }`} onClick={() => setSelectedCity("Istanbul")} type="button">{t("weather.country-name.2")}</button></li>
                        <li><button className={`weather__country-nav_select-text ${
                        selectedCity === "Bali" ? "weather__country-nav_select-text--active" : ""
                        }`} onClick={() => setSelectedCity("Bali")} type="button">{t("weather.country-name.3")}</button></li>
                    </ul>
                </nav>

            </div>

            <div className="weather__current-weather">
                <div className="weather__current-weather-dot"></div>
                <p className="weather__current-weather-desc">{t("weather.current-weather")}</p>
            </div>
            
                <h3 className="weather__current-weather-value">21°C</h3>
                <p className="weather__cutrrent-weather-precipitation">{t("weather.precipitation")}</p>
                

            <dl className="weather__stats">
                <div>
                    
                    <dt>{selectedCity}</dt>
                    <dd>{t("weather.city")}</dd>
                </div>
                <div className="line"></div>
                <div>
                    <dt>11km/h</dt>
                    <dd>{t("weather.wind")}</dd>
                </div>
                <div className="line"></div>
                
                <div>
                    <dt>19°C</dt>
                    <dd>{t("weather.feeling")}</dd>
                </div>
                <div className="line"></div>
                <div>
                    <dt>{t("weather.precipitation")}</dt>
                    <dd>{t("weather.conditions")}</dd>
                        
                </div>
            </dl>
                <div className="line__bottom"></div>

                <div className="interactiveMap">

                    <div className="interactiveMap__worldmap">
                        <canvas
                            ref={canvasRef}
                            width={1068}
                            height={518}
                        />
                       
                    </div>
                </div>
        </div>
    )
}

export default WeatherNow;
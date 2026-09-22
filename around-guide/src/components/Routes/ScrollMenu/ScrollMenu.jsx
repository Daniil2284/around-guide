import { useEffect,useRef } from "react";
import "./ScrollMenu.scss";

function ScrollMenu({items}){
    const menuRef = useRef(null);


    useEffect(() => {
        const menu = menuRef.current;

        const scroll = setInterval(() => {
            menu.scrollLeft += 1;

            if (menu.scrollLeft >= menu.scrollWidth - menu.clientWidth){
                menu.scrollLeft = 0;
            }
        }, 30);
        return () => clearInterval(scroll);
    }, []);

    return (
        <div className="scrollMenu">
            <div className="scrollMenu__main">
                <div className="scrollMenu__line"></div>

                <div className="scrollMenu__menu" ref={menuRef}>

                    {items.map((item) => (
                        <div
                            className="scrollMenu__items"
                            key={item.id}
                        >
                            <img className="scrollMenu__flag" src={item.flag} alt="" />
                            {item.from}/
                            {item.to}
                            
                            <p className="scrollMenu__rate">{item.rate}</p>
                            

                            <div className={`scrollMenu__change ${item.change >= 0 ? "scrollMenu__change--up" : "scrollMenu__change--down"}`}>
                                <span className="scrollMenu__arrow-rate">
                                    {item.change >=0 ? "↑" : "↓"}
                                </span>
                                <span className="scrollMenu__precent">
                                    {Math.abs(item.change)}%
                                </span>

                            </div>
                        </div>
                    ))}

                </div>

                <div className="scrollMenu__line"></div>
            </div>
        </div>
    )
}

export default ScrollMenu;
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
                            <img  src={item.flag} alt="" />
                            {item.from}
                            {item.to}
                        </div>
                    ))}

                </div>

                <div className="scrollMenu-line"></div>
            </div>
        </div>
    )
}

export default ScrollMenu;
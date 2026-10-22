function BurgerIcon({ isOpen }) {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d={isOpen ? "M8 8 L24 24" : "M5 9 H27"}
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
            />

            <path
                d={isOpen ? "M8 24 L24 8" : "M5 16 H27"}
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
            />

            {!isOpen && (
                <path
                    d="M5 23 H27"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            )}
        </svg>
    );
}

export default BurgerIcon;
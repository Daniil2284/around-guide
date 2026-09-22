

function Rate(){
    const RateLine = ({ fromCurrency, toCurrency, rate, change }) => {
        const isUp = change > 0;
    return(
        <div className="rate">
            <div className="rate__dot"></div>
            <span className="rate__text">{fromCurrency} = {rate} {toCurrency}</span>
            <span className="rate__trand"></span>
        </div>
    )}

}

export default Rate()
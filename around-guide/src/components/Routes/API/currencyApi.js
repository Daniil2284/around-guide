export const getCurrencyRate = async(from,to) => {
    const response = await fetch (
        `http://localhost:5000/api/currency/rate?from=${from}&to=${to}`
    );
    const data = await response.json();

    return data.rate;
}
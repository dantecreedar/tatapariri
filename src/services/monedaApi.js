//Url de la API (Endpoint)
let urlAPI = "https://dolarapi.com/v1";


//Cotizaciones de los dolares
let getDolarCotizations = async() => {
    let url = await fetch(`${urlAPI}/dolares`);
    let data = await url.json();
    return data;
}

//Cotizacion del euro
let getEuroCotizations = async() => {
    let url = await fetch(`${urlAPI}/cotizaciones/eur`);
    let data = await url.json();
    return data;
}

//Cotizacion de los reales
let getRealesCotizations = async() => {
    let url = await fetch(`${urlAPI}/cotizaciones/brl`);
    let data = await url.json();
    return data;
}

//Cotizacion de los pesos chilenos
let getPesosChilenos = async() => {
    let url = await fetch(`${urlAPI}/cotizaciones/clp`);
    let data = await url.json();
    return data;
}

//Cotizacion de los pesos uruguayos
let getPesosUruguayos = async() => {
    let url = await fetch(`${url}/cotizaciones/uyu`);
    let data = await url.json();
    return data;
}

export {
    getDolarCotizations,
    getPesosChilenos,
    getPesosUruguayos,
    getRealesCotizations,
    getEuroCotizations
}
export default function fetchCountries(name) { 
    const BASE_URL = "https://restcountries.com/v3.1/name";
    const options = `?fields=name,capital,population,flags,languages`;

    return fetch(`${BASE_URL}/${name}${options}`)
        .then(response => response.json())
        .catch(error => console.log(error))
    }

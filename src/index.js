import './css/styles.css';
const debounce = require('lodash.debounce');
import Notiflix from 'notiflix'
import fetchCountries from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const refs = {
    searchBox: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
};
    
refs.searchBox.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY))

function onSearch(e) {
    e.preventDefault();

    const inputText = refs.searchBox.value.trim();
    refs.countryList.innerHTML = "";
    refs.countryInfo.innerHTML = "";

    if (inputText) {
        fetchCountries(inputText)
            .then(renderCountryCard)
            .catch(error => {
                return Notiflix.Notify.failure("Oops, there is no country with that name");
            })
        }
    }   
    function renderCountryCard(data) {
        if (data.length > 10) {
            return Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
        }
    }
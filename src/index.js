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
}
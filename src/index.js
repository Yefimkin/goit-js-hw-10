import './css/styles.css';
const debounce = require('lodash.debounce');
import Notiflix from 'notiflix'

const DEBOUNCE_DELAY = 300;

const refs = {
    searchBox: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
    };
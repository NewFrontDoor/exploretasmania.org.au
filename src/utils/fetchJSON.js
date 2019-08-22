import 'es6-promise/auto';
import fetch from 'isomorphic-fetch';

//Change this URL when the API is set up for the new website
const DRUPAL_URL = "https://api.exploretasmania.org.au/api/views/";

const DRUPAL_GUIDES_API = DRUPAL_URL + "guides_api?display_id=services_1"
const DRUPAL_FILTER_GUIDES_NAME = DRUPAL_GUIDES_API + "&filters[name]=";
//const DRUPAL_FILTER_TRIPS = DRUPAL_URL + "trips_api?display_id=services_1&filters";

//Example suffix: all_sermons_api?filters[preacher]=keith&filters[title]=reality

//API uses Services and Services views on the drupal 7 instance

export function getFromDrupalAPI(url, callback) {
  if (url.includes('?')) {
    url += '&display_id=services_1';
  }
  else {
    url += '?display_id=services_1'
  }
  fetch(DRUPAL_URL + url)
    .then(resp => resp.json())
    .then(function (data) {
      callback(data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

export function getGuides(callback) {
  fetch(DRUPAL_GUIDES_API)
    .then(resp => resp.json())
    .then(function (data) {
      callback(data);
    })
    .catch(function (error) {
      console.log(error);
    })
}



export function getGuideByName(name, callback) {
  fetch(DRUPAL_FILTER_GUIDES_NAME + name)
    .then(resp => resp.json())
    .then(function (data) {
      callback(data);
    })
    .catch(function (error) {
      console.log(error);
    })
}


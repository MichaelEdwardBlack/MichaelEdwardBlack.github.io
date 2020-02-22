import config from '../config.js';

// HELPER FUNCTIONS
const addParams = function(baseURL, params) {
  if(!params){
    return baseURL;
  }

  let url = baseURL + '?';
  const keys = Object.keys(params)
  for (const key of keys) {
    url += `&${key}=${params[key]}`
  }

  return url;
}

const buildEventURL = function(eci, eid, domain, type, attrs) {
  let baseURL =  `${config.picolabs.protocol}://${config.picolabs.host}/sky/event/${eci}/${eid}/${domain}/${type}`;
  return addParams(baseURL, attrs)
}

const buildQueryURL = function(eci, rid, funcName, params) {
  let baseURL =  `${config.picolabs.protocol}://${config.picolabs.host}/sky/cloud/${eci}/${rid}/${funcName}`;
  return addParams(baseURL, params);
}
// END HELPER FUNCTIONS

// API Calls
export const eventSend = async (eci, eid, domain, type, attrs) => {
  let result = await fetch(buildEventURL(eci, eid, domain, type, attrs));
  return result.json();
}

export const query = async (eci, rid, funcName, params) => {
  let result = await fetch(buildQueryURL(eci, rid, funcName, params));
  return result.json();
}
// End API Calls

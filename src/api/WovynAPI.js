import { eventSend, query } from './PicoAPI';

const rid = {
  "store": "com.blacklite.krl.temperature_store",
  "profile": "com.blacklite.sensor_profile"
}

const eci = "45f5jJCFrrNGTpJsMUXJS2";

export const fetchTemperatures = async function() {
  let data = await query(eci, rid.store, "temperatures", null);
  return data;
}
export const fetchThresholdViolations = async function() {
  let data = query(eci, rid.store, "threshold_violations", null);
  return data;
}
export const fetchInRangeTemperatures = async function() {
  let data = query(eci, rid.store, "inrange_temperatures", null);
  return data;
}
export const fetchProfile = async function() {
  let data = query(eci, rid.profile, "get_profile", null);
  return data;
}
export const updateProfile = async function(attrs) {
  let data = eventSend(eci, "gh-pages", "sensor", "profile_updated", attrs);
  return data;
}

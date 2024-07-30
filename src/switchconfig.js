const fs = require("fs");
const managementgb = require("./src/switch-configs/managementgb.json");
const mcngb = require("./src/switch-configs/mcngb.json");
const cryptogb = require("./src/switch-configs/cryptogb.json");
const xsitegb = require("./src/switch-configs/xsitegb.json");
const outsidePrimarygb = require("./src/switch-configs/outsideprimarygb.json");
const outsideSecondarygb = require("./src/switch-configs/outsidesecondarygb.json");
const outsideTertiarygb = require("./src/switch-configs/outsidetertiarygb.json");
const outsideSATgb = require("./src/switch-configs/outsidesatgb.json");
const VPLS1gb = require("./src/switch-configs/vpls1gb.json");
const VPLS2gb = require("./src/switch-configs/vpls2gb.json");
const esxuplinkgb = require("./src/switch-configs/esxgb.json");
const switchuplinkgb = require("./src/switch-configs/uplinkgb.json");
const defaultgb = require("./src/switch-configs/defaultgb.json");

function configSwitch(portName, portVLAN, portType) {
  if (portVLAN == "10") {
    const obj = managementgb;
    obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
    const json = JSON.stringify(obj);
    return json;
  } else if (portVLAN == "13") {
    const obj = mcngb;
    obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
    const json = JSON.stringify(obj);
    return json;
  } else if (portVLAN == "14") {
    const obj = cryptogb;
    obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
    const json = JSON.stringify(obj);
    return json;
  } else if (portVLAN == "110") {
    const obj = xsitegb;
    obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
    const json = JSON.stringify(obj);
    return json;
  } else if (portVLAN == "100") {
    const obj = outsidePrimarygb;
    obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
    const json = JSON.stringify(obj);
    return json;
  } else if (portVLAN == "101") {
    const obj = outsideSecondarygb;
    obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
    const json = JSON.stringify(obj);
    return json;
  } else if (portVLAN == "102") {
    const obj = outsideTertiarygb;
    obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
    const json = JSON.stringify(obj);
    return json;
  } else if (portVLAN == "104") {
    const obj = outsideSATgb;
    obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
    const json = JSON.stringify(obj);
    return json;
  } else if (portVLAN == "301") {
    const obj = VPLS1gb;
    obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
    const json = JSON.stringify(obj);
    return json;
  } else if (portVLAN == "401") {
    const obj = VPLS2gb;
    obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
    const json = JSON.stringify(obj);
    return json;
  } else if (portVLAN == "ESX-Uplink") {
    const obj = esxuplinkgb;
    obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
    const json = JSON.stringify(obj);
    return json;
  } else if (portVLAN == "Switch-Uplink") {
    const obj = switchuplinkgb;
    obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
    const json = JSON.stringify(obj);
    return json;
  } else if (portVLAN == "999") {
    const obj = defaultgb;
    obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
    const json = JSON.stringify(obj);
    return json;
  }
}

module.exports = { configSwitch };

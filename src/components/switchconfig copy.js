// const fs = require("fs");
// const managementgb = require("./src/switch-configs/managementgb.json");
// const managementtgb = require("./src/switch-configs/managementtgb.json");
// const mcngb = require("./src/switch-configs/mcngb.json");
// const mcntgb = require("./src/switch-configs/mcntgb.json");
// const cryptogb = require("./src/switch-configs/cryptogb.json");
// const cryptotgb = require("./src/switch-configs/cryptotgb.json");
// const xsitegb = require("./src/switch-configs/xsitegb.json");
// const xsitetgb = require("./src/switch-configs/xsitetgb.json");
// const outsidePrimarygb = require("./src/switch-configs/outsideprimarygb.json");
// const outsidePrimarytgb = require("./src/switch-configs/outsideprimarytgb.json");
// const outsideSecondarygb = require("./src/switch-configs/outsidesecondarygb.json");
// const outsideSecondarytgb = require("./src/switch-configs/outsidesecondarytgb.json");
// const outsideTertiarygb = require("./src/switch-configs/outsidetertiarygb.json");
// const outsideTertiarytgb = require("./src/switch-configs/outsidetertiarytgb.json");
// const outsideSATgb = require("./src/switch-configs/outsidesatgb.json");
// const outsideSATtgb = require("./src/switch-configs/outsidesattgb.json");
// const VPLS1gb = require("./src/switch-configs/vpls1gb.json");
// const VPLS1tgb = require("./src/switch-configs/vpls1tgb.json");
// const VPLS2gb = require("./src/switch-configs/vpls2gb.json");
// const VPLS2tgb = require("./src/switch-configs/vpls2tgb.json");
// const esxuplinkgb = require("./src/switch-configs/esxgb.json");
// const esxuplinktgb = require("./src/switch-configs/esxtgb.json");
// const switchuplinkgb = require("./src/switch-configs/uplinkgb.json");
// const switchuplinktgb = require("./src/switch-configs/uplinktgb.json");
// const defaultgb = require("./src/switch-configs/defaultgb.json");
// const defaulttgb = require("./src/switch-configs/defaulttgb.json");

// function configSwitch(portName, portVLAN, portType) {
//   if (portVLAN == "10") {
//     if (portType == "GigabitEthernet") {
//       const obj = managementgb;
//       obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
//       const json = JSON.stringify(obj);
//       return json;
//     } else {
//       const obj = managementtgb;
//       obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
//       const json = JSON.stringify(obj);
//       return json;
//     }
//   } else if (portVLAN == "13") {
//     if (portType == "GigabitEthernet") {
//       const obj = mcngb;
//       obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
//       const json = JSON.stringify(obj);
//       return json;
//     } else {
//       const obj = mcntgb;
//       obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
//       const json = JSON.stringify(obj);
//       return json;
//     }
//   } else if (portVLAN == "14") {
//     if (portType == "GigabitEthernet") {
//       const obj = cryptogb;
//       obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
//       const json = JSON.stringify(obj);
//       return json;
//     } else {
//       const obj = cryptotgb;
//       obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
//       const json = JSON.stringify(obj);
//       return json;
//     }
//   } else if (portVLAN == "110") {
//     if (portType == "GigabitEthernet") {
//       const obj = xsitegb;
//       obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
//       const json = JSON.stringify(obj);
//       return json;
//     } else {
//       const obj = xsitetgb;
//       obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
//       const json = JSON.stringify(obj);
//       return json;
//     }
//   } else if (portVLAN == "100") {
//     if (portType == "GigabitEthernet") {
//       const obj = outsidePrimarygb;
//       obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
//       const json = JSON.stringify(obj);
//       return json;
//     } else {
//       const obj = outsidePrimarytgb;
//       obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
//       const json = JSON.stringify(obj);
//       return json;
//     }
//   } else if (portVLAN == "101") {
//     if (portType == "GigabitEthernet") {
//       const obj = outsideSecondarygb;
//       obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
//       const json = JSON.stringify(obj);
//       return json;
//     } else {
//       const obj = outsideSecondarytgb;
//       obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
//       const json = JSON.stringify(obj);
//       return json;
//     }
//   } else if (portVLAN == "102") {
//     if (portType == "GigabitEthernet") {
//       const obj = outsideTertiarygb;
//       obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
//       const json = JSON.stringify(obj);
//       return json;
//     } else {
//       const obj = outsideTertiarytgb;
//       obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
//       const json = JSON.stringify(obj);
//       return json;
//     }
//   } else if (portVLAN == "104") {
//     if (portType == "GigabitEthernet") {
//       const obj = outsideSATgb;
//       obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
//       const json = JSON.stringify(obj);
//       return json;
//     } else {
//       const obj = outsideSATtgb;
//       obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
//       const json = JSON.stringify(obj);
//       return json;
//     }
//   } else if (portVLAN == "301") {
//     if (portType == "GigabitEthernet") {
//       const obj = VPLS1gb;
//       obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
//       const json = JSON.stringify(obj);
//       return json;
//     } else {
//       const obj = VPLS1tgb;
//       obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
//       const json = JSON.stringify(obj);
//       return json;
//     }
//   } else if (portVLAN == "401") {
//     if (portType == "GigabitEthernet") {
//       const obj = VPLS2gb;
//       obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
//       const json = JSON.stringify(obj);
//       return json;
//     } else {
//       const obj = VPLS2tgb;
//       obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
//       const json = JSON.stringify(obj);
//       return json;
//     }
//   } else if (portVLAN == "ESX-Uplink") {
//     if (portType == "GigabitEthernet") {
//       const obj = esxuplinkgb;
//       obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
//       const json = JSON.stringify(obj);
//       return json;
//     } else {
//       const obj = esxuplinktgb;
//       obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
//       const json = JSON.stringify(obj);
//       return json;
//     }
//   } else if (portVLAN == "Switch-Uplink") {
//     if (portType == "GigabitEthernet") {
//       const obj = switchuplinkgb;
//       obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
//       const json = JSON.stringify(obj);
//       return json;
//     } else {
//       const obj = switchuplinktgb;
//       obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
//       const json = JSON.stringify(obj);
//       return json;
//     }
//   } else if (portVLAN == "999") {
//     if (portType == "GigabitEthernet") {
//       const obj = defaultgb;
//       obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
//       const json = JSON.stringify(obj);
//       return json;
//     } else {
//       const obj = defaulttgb;
//       obj[`Cisco-IOS-XE-native:${portType}`][0].name = portName;
//       const json = JSON.stringify(obj);
//       return json;
//     }
//   }
// }

// module.exports = { configSwitch };

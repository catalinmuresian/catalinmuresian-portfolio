import {store} from 'quasar/wrappers'
import {createStore} from 'vuex'
import axios from "axios";

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  return createStore({
    modules: {
      // example
    },
    state: {
      userData: {
        "ip": "86.127.87.208",
        "is_eu": true,
        "city": "Bucharest",
        "region": "Bucuresti",
        "region_code": "B",
        "region_type": "municipality",
        "country_name": "Romania",
        "country_code": "RO",
        "continent_name": "Europe",
        "continent_code": "EU",
        "latitude": 44.404998779296875,
        "longitude": 26.071800231933594,
        "postal": "051161",
        "calling_code": "40",
        "flag": "https://ipdata.co/flags/ro.png",
        "emoji_flag": "🇷🇴",
        "emoji_unicode": "U+1F1F7 U+1F1F4",
        "asn": {
          "asn": "AS8708",
          "name": "RCS & Rds SA",
          "domain": "rcs-rds.ro",
          "route": "86.120.0.0/13",
          "type": "business"
        },
        "carrier": {
          "name": "Digi.Mobil",
          "mcc": "226",
          "mnc": "5"
        },
        "languages": [
          {
            "name": "Romanian",
            "native": "Română",
            "code": "ro"
          }
        ],
        "currency": {
          "name": "Romanian Leu",
          "code": "RON",
          "symbol": "RON",
          "native": "RON",
          "plural": "Romanian lei"
        },
        "time_zone": {
          "name": "Europe/Bucharest",
          "abbr": "EET",
          "offset": "+0200",
          "is_dst": false,
          "current_time": "2024-01-09T16:23:00+02:00"
        },
        "threat": {
          "is_tor": false,
          "is_icloud_relay": false,
          "is_proxy": false,
          "is_datacenter": false,
          "is_anonymous": false,
          "is_known_attacker": false,
          "is_known_abuser": false,
          "is_threat": false,
          "is_bogon": false,
          "blocklists": []
        },
        "count": "1"
      }
    },
    actions: {
      async get_user_data ({commit}) {
        try {
          const { data } = await axios.get('https://api.ipdata.co/?api-key=7e09c657c9ac7e431e0a015e51955e6b1c1f8023adb133489349eb30')
          console.log(data)
        } catch (e) {

        }

      }
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })
})

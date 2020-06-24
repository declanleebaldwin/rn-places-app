const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/api/hello", (req, res) => {
  res.send({
    express: "Hello From Express",
  });
});

app.post("/api/places", (req, res) => {
  let apiKey = process.env.GOOGLE_PLACES_API_KEY;
  let latitude = req.body.latitude;
  let longitude = req.body.longitude;
  let radius = 1500;
  let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=restaurant&key=${apiKey}`;
  axios
    .get(url)
    .then((response) => {
      response.data = {
        html_attributions: [],
        results: [
          {
            geometry: {
              location: {
                lat: -33.870775,
                lng: 151.199025,
              },
            },
            icon:
              "http://maps.gstatic.com/mapfiles/place_api/icons/travel_agent-71.png",
            id: "21a0b251c9b8392186142c798263e289fe45b4aa",
            name: "Rhythmboat Cruises",
            opening_hours: {
              open_now: true,
            },
            photos: [
              {
                height: 270,
                html_attributions: [],
                photo_reference:
                  "CnRnAAAAF-LjFR1ZV93eawe1cU_3QNMCNmaGkowY7CnOf-kcNmPhNnPEG9W979jOuJJ1sGr75rhD5hqKzjD8vbMbSsRnq_Ni3ZIGfY6hKWmsOf3qHKJInkm4h55lzvLAXJVc-Rr4kI9O1tmIblblUpg2oqoq8RIQRMQJhFsTr5s9haxQ07EQHxoUO0ICubVFGYfJiMUPor1GnIWb5i8",
                width: 519,
              },
            ],
            place_id: "ChIJyWEHuEmuEmsRm9hTkapTCrk",
            reference:
              "CoQBdQAAAFSiijw5-cAV68xdf2O18pKIZ0seJh03u9h9wk_lEdG-cP1dWvp_QGS4SNCBMk_fB06YRsfMrNkINtPez22p5lRIlj5ty_HmcNwcl6GZXbD2RdXsVfLYlQwnZQcnu7ihkjZp_2gk1-fWXql3GQ8-1BEGwgCxG-eaSnIJIBPuIpihEhAY1WYdxPvOWsPnb2-nGb6QGhTipN0lgaLpQTnkcMeAIEvCsSa0Ww",
            types: ["travel_agency", "restaurant", "food", "establishment"],
            vicinity: "Pyrmont Bay Wharf Darling Dr, Sydney",
          },
          {
            geometry: {
              location: {
                lat: -33.866891,
                lng: 151.200814,
              },
            },
            icon:
              "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            id: "45a27fd8d56c56dc62afc9b49e1d850440d5c403",
            name: "Private Charter Sydney Habour Cruise",
            photos: [
              {
                height: 426,
                html_attributions: [],
                photo_reference:
                  "CnRnAAAAL3n0Zu3U6fseyPl8URGKD49aGB2Wka7CKDZfamoGX2ZTLMBYgTUshjr-MXc0_O2BbvlUAZWtQTBHUVZ-5Sxb1-P-VX2Fx0sZF87q-9vUt19VDwQQmAX_mjQe7UWmU5lJGCOXSgxp2fu1b5VR_PF31RIQTKZLfqm8TA1eynnN4M1XShoU8adzJCcOWK0er14h8SqOIDZctvU",
                width: 640,
              },
            ],
            place_id: "ChIJqwS6fjiuEmsRJAMiOY9MSms",
            reference:
              "CpQBhgAAAFN27qR_t5oSDKPUzjQIeQa3lrRpFTm5alW3ZYbMFm8k10ETbISfK9S1nwcJVfrP-bjra7NSPuhaRulxoonSPQklDyB-xGvcJncq6qDXIUQ3hlI-bx4AxYckAOX74LkupHq7bcaREgrSBE-U6GbA1C3U7I-HnweO4IPtztSEcgW09y03v1hgHzL8xSDElmkQtRIQzLbyBfj3e0FhJzABXjM2QBoUE2EnL-DzWrzpgmMEulUBLGrtu2Y",
            types: ["restaurant", "food", "establishment"],
            vicinity: "Australia",
          },
          {
            geometry: {
              location: {
                lat: -33.870943,
                lng: 151.190311,
              },
            },
            icon:
              "http://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            id: "30bee58f819b6c47bd24151802f25ecf11df8943",
            name: "Bucks Party Cruise",
            opening_hours: {
              open_now: true,
            },
            photos: [
              {
                height: 600,
                html_attributions: [],
                photo_reference:
                  "CnRnAAAA48AX5MsHIMiuipON_Lgh97hPiYDFkxx_vnaZQMOcvcQwYN92o33t5RwjRpOue5R47AjfMltntoz71hto40zqo7vFyxhDuuqhAChKGRQ5mdO5jv5CKWlzi182PICiOb37PiBtiFt7lSLe1SedoyrD-xIQD8xqSOaejWejYHCN4Ye2XBoUT3q2IXJQpMkmffJiBNftv8QSwF4",
                width: 800,
              },
            ],
            place_id: "ChIJLfySpTOuEmsRsc_JfJtljdc",
            reference:
              "CoQBdQAAANQSThnTekt-UokiTiX3oUFT6YDfdQJIG0ljlQnkLfWefcKmjxax0xmUpWjmpWdOsScl9zSyBNImmrTO9AE9DnWTdQ2hY7n-OOU4UgCfX7U0TE1Vf7jyODRISbK-u86TBJij0b2i7oUWq2bGr0cQSj8CV97U5q8SJR3AFDYi3ogqEhCMXjNLR1k8fiXTkG2BxGJmGhTqwE8C4grdjvJ0w5UsAVoOH7v8HQ",
            types: ["restaurant", "food", "establishment"],
            vicinity: "37 Bank St, Pyrmont",
          },
          {
            geometry: {
              location: {
                lat: -33.867591,
                lng: 151.201196,
              },
            },
            icon:
              "http://maps.gstatic.com/mapfiles/place_api/icons/travel_agent-71.png",
            id: "a97f9fb468bcd26b68a23072a55af82d4b325e0d",
            name: "Australian Cruise Group",
            opening_hours: {
              open_now: true,
            },
            photos: [
              {
                height: 242,
                html_attributions: [],
                photo_reference:
                  "CnRnAAAABjeoPQ7NUU3pDitV4Vs0BgP1FLhf_iCgStUZUr4ZuNqQnc5k43jbvjKC2hTGM8SrmdJYyOyxRO3D2yutoJwVC4Vp_dzckkjG35L6LfMm5sjrOr6uyOtr2PNCp1xQylx6vhdcpW8yZjBZCvVsjNajLBIQ-z4ttAMIc8EjEZV7LsoFgRoU6OrqxvKCnkJGb9F16W57iIV4LuM",
                width: 200,
              },
            ],
            place_id: "ChIJrTLr-GyuEmsRBfy61i59si0",
            reference:
              "CoQBeQAAAFvf12y8veSQMdIMmAXQmus1zqkgKQ-O2KEX0Kr47rIRTy6HNsyosVl0CjvEBulIu_cujrSOgICdcxNioFDHtAxXBhqeR-8xXtm52Bp0lVwnO3LzLFY3jeo8WrsyIwNE1kQlGuWA4xklpOknHJuRXSQJVheRlYijOHSgsBQ35mOcEhC5IpbpqCMe82yR136087wZGhSziPEbooYkHLn9e5njOTuBprcfVw",
            types: ["travel_agency", "restaurant", "food", "establishment"],
            vicinity: "32 The Promenade, King Street Wharf 5, Sydney",
          },
        ],
        status: "OK",
      };

      res.send(response.data);
    })
    .catch((error) => console.log(error));
});

app.post("/api/details", (req, res) => {
  let id = req.body.id;
  let apiKey = process.env.GOOGLE_PLACES_API_KEY;
  let url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&key=${apiKey}`;
  axios
    .get(url)
    .then((response) => {
      response.data = {
        html_attributions: [],
        result: {
          address_components: [
            {
              long_name: "48",
              short_name: "48",
              types: ["street_number"],
            },
            {
              long_name: "Pirrama Road",
              short_name: "Pirrama Rd",
              types: ["route"],
            },
            {
              long_name: "Sydney",
              short_name: "Sydney",
              types: ["locality", "political"],
            },
            {
              long_name: "Council of the City of Sydney",
              short_name: "Sydney",
              types: ["administrative_area_level_2", "political"],
            },
            {
              long_name: "New South Wales",
              short_name: "NSW",
              types: ["administrative_area_level_1", "political"],
            },
            {
              long_name: "Australia",
              short_name: "AU",
              types: ["country", "political"],
            },
            {
              long_name: "2009",
              short_name: "2009",
              types: ["postal_code"],
            },
          ],
          adr_address:
            '\u003cspan class="street-address"\u003e48 Pirrama Rd\u003c/span\u003e, \u003cspan class="locality"\u003eSydney\u003c/span\u003e \u003cspan class="region"\u003eNSW\u003c/span\u003e \u003cspan class="postal-code"\u003e2009\u003c/span\u003e, \u003cspan class="country-name"\u003eAustralia\u003c/span\u003e',
          business_status: "OPERATIONAL",
          formatted_address: "48 Pirrama Rd, Sydney NSW 2009, Australia",
          formatted_phone_number: "(02) 9374 4000",
          geometry: {
            location: {
              lat: -33.8666114,
              lng: 151.1958324,
            },
            viewport: {
              northeast: {
                lat: -33.8655771697085,
                lng: 151.1970892302915,
              },
              southwest: {
                lat: -33.8682751302915,
                lng: 151.1943912697085,
              },
            },
          },
          icon:
            "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
          id: "4f89212bf76dde31f092cfc14d7506555d85b5c7",
          international_phone_number: "+61 2 9374 4000",
          name: "Google Australia",
          opening_hours: {
            open_now: false,
            periods: [
              {
                close: {
                  day: 1,
                  time: "1730",
                },
                open: {
                  day: 1,
                  time: "0900",
                },
              },
              {
                close: {
                  day: 2,
                  time: "1730",
                },
                open: {
                  day: 2,
                  time: "0900",
                },
              },
              {
                close: {
                  day: 3,
                  time: "1730",
                },
                open: {
                  day: 3,
                  time: "0900",
                },
              },
              {
                close: {
                  day: 4,
                  time: "1730",
                },
                open: {
                  day: 4,
                  time: "0900",
                },
              },
              {
                close: {
                  day: 5,
                  time: "1700",
                },
                open: {
                  day: 5,
                  time: "0900",
                },
              },
            ],
            weekday_text: [
              "Monday: 9:00 AM – 5:30 PM",
              "Tuesday: 9:00 AM – 5:30 PM",
              "Wednesday: 9:00 AM – 5:30 PM",
              "Thursday: 9:00 AM – 5:30 PM",
              "Friday: 9:00 AM – 5:00 PM",
              "Saturday: Closed",
              "Sunday: Closed",
            ],
          },
          photos: [
            {
              height: 3024,
              html_attributions: [
                '\u003ca href="https://maps.google.com/maps/contrib/105067373811767106297"\u003eShaun Craig\u003c/a\u003e',
              ],
              photo_reference:
                "CmRaAAAAirwUDq1RxNYl_DEdSVRkP6pzERMaCZKbLqg8PPmSLCk7BKHwaE--LtAuN8ANkRqCtNIwwgyoky5pGAFIwAR4tCYUlBHFRgcWm_pkuqtU115MfAKbNCQsh_h2vI4_GkLrEhC-loHe4Rt0HPKAZCAbOWPRGhQqR4WGtHqTnPJGFuNuvQ35BlG8EQ",
              width: 4032,
            },
            {
              height: 3264,
              html_attributions: [
                '\u003ca href="https://maps.google.com/maps/contrib/102493344958625549078"\u003eThomas\u003c/a\u003e',
              ],
              photo_reference:
                "CmRaAAAAgDFst7i__lvUgdAiZXMuePxe2QvcdokU_kQU2S0qNTVAie__nBLj3aXf8VwTaUfMuDAF3cZm-EPTWS5Qz52NMuWjETrF0w5r3MQQgJdsrn4x6vDt0gGk9MIOMTVX8lmeEhDBVP5dPNCq8vTWMpRv_CwVGhSJVhQZl4bkVKqVzRrc60IggfmzGA",
              width: 4912,
            },
            {
              height: 4016,
              html_attributions: [
                '\u003ca href="https://maps.google.com/maps/contrib/107755640736541028674"\u003eJonah Deller\u003c/a\u003e',
              ],
              photo_reference:
                "CmRaAAAADA6r8hHmPCR4gx0dm9zYpRJyq22m8beJFKZ-g-8twgIdKAZyNMy3RvnOjeKkJjmX9jxak2fSPr6pi4v7J6PMoTbnk4Uzc6061dRzHr38lv2WarloxqrDnmOfyiyxJgvMEhDK-5fzTQrxM8ZLVik1VcWxGhR0dQmlQNGYsHcP-n09ijMnb7UF4g",
              width: 6016,
            },
            {
              height: 3024,
              html_attributions: [
                '\u003ca href="https://maps.google.com/maps/contrib/100678816592586275978"\u003eJeremy Hsiao\u003c/a\u003e',
              ],
              photo_reference:
                "CmRaAAAAvqx4_gWCz2NmbH7rAOZ9Om41Yc9ZVubIUXy4TkG1kE8hQ5_AUORKLWmjoZCDZX8wcfarwEc_0Lro4hrT6tJSQMjmS4ZQXallCAn0RrhAYU9RUdYDj29GvlupkA9gGuQsEhATVEJ_d5XVfYAVSLaA-Px6GhTcEAoflO503aZosW0jTTH1zys_cw",
              width: 4032,
            },
            {
              height: 3024,
              html_attributions: [
                '\u003ca href="https://maps.google.com/maps/contrib/115886271727815775491"\u003eAnthony Huynh\u003c/a\u003e',
              ],
              photo_reference:
                "CmRaAAAANvQk9X533lmEYjFWo6SAsUYUlyYDT79T8wSjvsCcpfVWVOT4Yxd-X6T1oqhhOPycN2WQH3ljrNf97zLTqgIHCAG-pFyPFiJ7XJQI2D7Ek9a4HHXm9Nr4AdRVka1CxWL3EhCnaXWhy4eMpy7eE5gZksr4GhTgy_wJxV9LommXiXh1D5m8CxLDaA",
              width: 4032,
            },
            {
              height: 3024,
              html_attributions: [
                '\u003ca href="https://maps.google.com/maps/contrib/100678816592586275978"\u003eJeremy Hsiao\u003c/a\u003e',
              ],
              photo_reference:
                "CmRaAAAAYNQGv-OQOH5t_DZtmFfY_m_zUlPARRDP4O6IX06J7st_tue9Mz7EVlUI9WaOTDpgg_9mLkUFTRMJcZjFyBrucJxdGi08kAVa4r1o9pt9RQKR1qazAwy07CW1B2JyhgizEhDl4YJ53n6aIE-MOVCwF5IUGhSvgQDuX1PM7iSQVLORN1b3RQm1Sg",
              width: 4032,
            },
            {
              height: 4032,
              html_attributions: [
                '\u003ca href="https://maps.google.com/maps/contrib/104578111747260232633"\u003eRaymond LAM\u003c/a\u003e',
              ],
              photo_reference:
                "CmRaAAAAfDoVgiFR5gn0lD36AapNXO7Boljor7jgWxilrEWiDTOgN3R3VAG-W_87L-7x_v9VCO8ygjuZeJUNLnYQ4ZIRdTiaxKgMGKsnw57YzCuudAiSokJPQ5a5heNJ-yPPs-sLEhDziHwntDGP86yeQDxLNMp3GhRzxU8q7x60eIYFhWqaexnv1L2jvw",
              width: 3024,
            },
            {
              height: 3024,
              html_attributions: [
                '\u003ca href="https://maps.google.com/maps/contrib/102939237947063969663"\u003eJasen Baker\u003c/a\u003e',
              ],
              photo_reference:
                "CmRaAAAAm0eFBp3ZGHhO94HC_2Xev7oJS9EvIbrrHkcm9Lb9lIKEq40y46VEZYjb5wCESgzhte6PYvBJdm1KoWPX3DNzN48HiHwP7lYNSakUtbmJhC0s9Zf22Qem9U7pN6I05dvdEhBULpnce5DpFIFrGmyfaGRAGhQ8JTdyR6VJJyaclsudSwvnuvN5pg",
              width: 4032,
            },
            {
              height: 4032,
              html_attributions: [
                '\u003ca href="https://maps.google.com/maps/contrib/112862866592522813509"\u003eRicky Watson\u003c/a\u003e',
              ],
              photo_reference:
                "CmRaAAAAhZVRIxisICBwA4C0opkcLwSwdWewLRxkGmAa5IFc6FBMbs6TdMbRymMdfhCjdeOzsjqDwrHgmrmyxjiv49NUH470T36dfDds0NGTRSPfSlNfkGovWcMEQo1alpahBf7KEhC6f45PTG0ERL7yPiNfz_0QGhTeaQT_7SJ5gjVEO8_kCdnZfE7XnA",
              width: 3024,
            },
            {
              height: 2160,
              html_attributions: [
                '\u003ca href="https://maps.google.com/maps/contrib/100659772571554240861"\u003ePaul Newson\u003c/a\u003e',
              ],
              photo_reference:
                "CmRaAAAAKHArbmzvj8SMsK4Ssa8CVQk-z_h7r1Zc28JhikSIFTdcaXcvJFf0IfJ3K1pKvHEn3rknneH1eNXUpdvGbLbLz8UpuZbLxgxv0zPn-CDyZET9vH0uCDO_Ma3NeyknW4QJEhDZrYoR59Lq_NHFqBoVyznkGhStHzW4JiWurz5iwMVcuFlA2uOn4A",
              width: 2160,
            },
          ],
          place_id: "ChIJN1t_tDeuEmsRUsoyG83frY4",
          plus_code: {
            compound_code: "45MW+98 Sydney NSW, Australia",
            global_code: "4RRH45MW+98",
          },
          rating: 4.1,
          reference: "ChIJN1t_tDeuEmsRUsoyG83frY4",
          reviews: [
            {
              author_name: "Sonja Hans",
              author_url:
                "https://www.google.com/maps/contrib/113632883351157157615/reviews",
              language: "en",
              profile_photo_url:
                "https://lh3.ggpht.com/-9SeW2L_prx4/AAAAAAAAAAI/AAAAAAAAAAA/4ksfyJ1IpVI/s128-c0x00000000-cc-rp-mo/photo.jpg",
              rating: 5,
              relative_time_description: "a month ago",
              text:
                "Very good, well informed and learning new things everyday as well as confirming I have a good understanding of what's going on in the HR world during this crazy time, it's really great that you are sharing to non members as well. Thank you and look forward to next week",
              time: 1590124796,
            },
            {
              author_name: "Garry",
              author_url:
                "https://www.google.com/maps/contrib/117473896134725298469/reviews",
              language: "en",
              profile_photo_url:
                "https://lh4.ggpht.com/-V0HknkFHf4I/AAAAAAAAAAI/AAAAAAAAAAA/KVN1BIu5mA4/s128-c0x00000000-cc-rp-mo/photo.jpg",
              rating: 1,
              relative_time_description: "a month ago",
              text:
                "I bought the pixle 3XL from Vodafone yearayear  It started descharging all the times untill totally stopped working.I just can't find service center to repair my device. Vodafone service center sent the report back to me said it hasbhas liquid damaged which it's not true.Vodsfone rejected me to send it away to third Independent service center to repair it.",
              time: 1590105557,
            },
            {
              author_name: "Hitesh Pathak",
              author_url:
                "https://www.google.com/maps/contrib/103404063004816104244/reviews",
              language: "en",
              profile_photo_url:
                "https://lh5.ggpht.com/-a2F1Y_tHTu8/AAAAAAAAAAI/AAAAAAAAAAA/MCpTOhOK9Rk/s128-c0x00000000-cc-rp-mo/photo.jpg",
              rating: 1,
              relative_time_description: "3 months ago",
              text:
                "Worst Search Engine... Worst than any other country. Seems like it doesnt understand what we are searching and just providing the random results based on Keywords. No adequate or relevant hits.",
              time: 1583966216,
            },
            {
              author_name: "Penny Christie",
              author_url:
                "https://www.google.com/maps/contrib/103695313945250148899/reviews",
              language: "en",
              profile_photo_url:
                "https://lh4.ggpht.com/-cHcOraPeOb4/AAAAAAAAAAI/AAAAAAAAAAA/ez1-o161f0o/s128-c0x00000000-cc-rp-mo-ba7/photo.jpg",
              rating: 5,
              relative_time_description: "3 months ago",
              text:
                "The Google Australia Head Office is located in Pyrmont in Sydney. To enter the office space you need to either work there or be invited by an employee. I was privileged to be invited to the Google Maps 15th Birthday Media presentation and lunch. The various floors and office spaces are fun and well designed with awesome Harbour views.",
              time: 1582955835,
            },
            {
              author_name: "R Gadhoke",
              author_url:
                "https://www.google.com/maps/contrib/113329367595293127495/reviews",
              language: "en",
              profile_photo_url:
                "https://lh5.ggpht.com/-sWgYbogOYos/AAAAAAAAAAI/AAAAAAAAAAA/UyfJvshiCWw/s128-c0x00000000-cc-rp-mo/photo.jpg",
              rating: 1,
              relative_time_description: "2 months ago",
              text:
                "I know this is a rating for their office but their customer care team is attrocious.  Heres to hoping someone from Google reads this and acts.  I have read a few other reviews here where people have waited a year plus and their escalated cases are still open, which is what I am experiencing.  Dont buy anything Google because issues will not be resolved",
              time: 1586210180,
            },
          ],
          scope: "GOOGLE",
          types: ["point_of_interest", "establishment"],
          url: "https://maps.google.com/?cid=10281119596374313554",
          user_ratings_total: 905,
          utc_offset: 600,
          vicinity: "48 Pirrama Road, Sydney",
          website:
            "https://about.google/locations/?region=asia-pacific&office=sydney",
        },
        status: "OK",
      };

      res.send(response.data);
    })
    .catch((error) => console.log(error));
});

app.listen(port, () => console.log(`Listening on port ${port}`));

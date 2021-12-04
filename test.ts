/* eslint-disable no-bitwise */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-unresolved */
const fs = require("fs");
const worldCountries = require("../data/WorldData.ts");

const WorldData = [
  {
    name: "Albania",
    capital: "Tirana",
  },
  {
    name: "Austria",
    capital: "Vienna",
  },
  {
    name: "Belarus",
    capital: "Minsk",
  },
  {
    name: "Belgium",
    capital: "Brussels",
  },
  {
    name: "Bulgaria",
    capital: "Sofia",
  },
  {
    name: "Croatia",
    capital: "Zagreb",
  },
  {
    name: "Cyprus",
    capital: "Nicosia",
  },
  {
    name: "Denmark",
    capital: "Copenhagen",
  },
  {
    name: "Estonia",
    capital: "Tallinn",
  },
  {
    name: "Finland",
    capital: "Helsinki",
  },
  {
    name: "France",
    capital: "Paris",
  },
  {
    name: "Germany",
    capital: "Berlin",
  },
  {
    name: "Greece",
    capital: "Athens",
  },
  {
    name: "Hungary",
    capital: "Budapest",
  },
  {
    name: "Iceland",
    capital: "Reykjavík",
  },
  {
    name: "Ireland",
    capital: "Dublin",
  },
  {
    name: "Italy",
    capital: "Rome",
  },
  {
    name: "Latvia",
    capital: "Riga",
  },
  {
    name: "Lithuania",
    capital: "Vilnius",
  },
  {
    name: "Luxembourg",
    capital: "Luxembourg",
  },
  {
    name: "Macedonia",
    capital: "Skopje",
  },
  {
    name: "Moldova",
    capital: "Chișinău",
  },
  {
    name: "Montenegro",
    capital: "Podgorica",
  },
  {
    name: "Netherlands",
    capital: "Amsterdam",
  },
  {
    name: "Norway",
    capital: "Oslo",
  },
  {
    name: "Poland",
    capital: "Warsaw",
  },
  {
    name: "Portugal",
    capital: "Lisbon",
  },
  {
    name: "Kosovo",
    capital: "Pristina",
  },
  {
    name: "Romania",
    capital: "Bucharest",
  },
  {
    name: "Serbia",
    capital: "Belgrade",
  },
  {
    name: "Slovakia",
    capital: "Bratislava",
  },
  {
    name: "Slovenia",
    capital: "Ljubljana",
  },
  {
    name: "Spain",
    capital: "Madrid",
  },
  {
    name: "Sweden",
    capital: "Stockholm",
  },
  {
    name: "Switzerland",
    capital: "Bern",
  },
  {
    name: "Ukraine",
    capital: "Kiev",
  },
  {
    name: "United Kingdom",
    capital: "London",
  },
  {
    name: "Bosnia and Herzegovina",
    capital: "Sarajevo",
  },
  {
    name: "Czech Republic",
    capital: "Prague",
  },
  {
    capital: "Algiers",
    name: "Algeria",
  },
  {
    capital: "Luanda",
    name: "Angola",
  },
  {
    capital: "Porto-Novo",
    name: "Benin",
  },
  {
    capital: "Gaborone",
    name: "Botswana",
  },
  {
    capital: "Ouagadougou",
    name: "Burkina Faso",
  },
  {
    capital: "Bujumbura",
    name: "Burundi",
  },
  {
    capital: "Yaoundé",
    name: "Cameroon",
  },
  {
    capital: "N'Djamena",
    name: "Chad",
  },
  {
    capital: "Brazzaville",
    name: "Congo",
  },
  {
    capital: "Kinshasa",
    name: "Dem. Rep. Congo",
  },
  {
    capital: "Djibouti",
    name: "Djibouti",
  },
  {
    capital: "Cairo",
    name: "Egypt",
  },
  {
    capital: "Asmara",
    name: "Eritrea",
  },
  {
    capital: "Addis Ababa",
    name: "Ethiopia",
  },
  {
    capital: "Libreville",
    name: "Gabon",
  },
  {
    capital: "Banjul",
    name: "Gambia",
  },
  {
    capital: "Accra",
    name: "Ghana",
  },
  {
    capital: "Conakry",
    name: "Guinea",
  },
  {
    capital: "Bissau",
    name: "Guinea-Bissau",
  },
  {
    capital: "Nairobi",
    name: "Kenya",
  },
  {
    capital: "Maseru",
    name: "Lesotho",
  },
  {
    capital: "Monrovia",
    name: "Liberia",
  },
  {
    capital: "Tripoli",
    name: "Libya",
  },
  {
    capital: "Antananarivo",
    name: "Madagascar",
  },
  {
    capital: "Lilongwe",
    name: "Malawi",
  },
  {
    capital: "Bamako",
    name: "Mali",
  },
  {
    capital: "Nouakchott",
    name: "Mauritania",
  },
  {
    capital: "Rabat",
    name: "Morocco",
  },
  {
    capital: "Maputo",
    name: "Mozambique",
  },
  {
    capital: "Windhoek",
    name: "Namibia",
  },
  {
    capital: "Niamey",
    name: "Niger",
  },
  {
    capital: "Abuja",
    name: "Nigeria",
  },
  {
    capital: "Kigali",
    name: "Rwanda",
  },
  {
    capital: "Dakar",
    name: "Senegal",
  },
  {
    capital: "Freetown",
    name: "Sierra Leone",
  },
  {
    capital: "Mogadishu",
    name: "Somalia",
  },
  {
    capital: "Pretoria",
    name: "South Africa",
  },
  {
    capital: "Juba",
    name: "South Sudan",
  },
  {
    capital: "Khartoum",
    name: "Sudan",
  },
  {
    capital: "Lobamba",
    name: "Swaziland",
  },
  {
    capital: "Dodoma",
    name: "Tanzania",
  },
  {
    capital: "Lomé",
    name: "Togo",
  },
  {
    capital: "Tunis",
    name: "Tunisia",
  },
  {
    capital: "Kampala",
    name: "Uganda",
  },
  {
    capital: "El Aaiún",
    name: "Western Sahara",
  },
  {
    capital: "Lusaka",
    name: "Zambia",
  },
  {
    capital: "Harare",
    name: "Zimbabwe",
  },
  {
    capital: "Kabul",
    name: "Afghanistan",
  },
  {
    capital: "Yerevan",
    name: "Armenia",
  },
  {
    capital: "Baku",
    name: "Azerbaijan",
  },
  {
    capital: "Dhaka",
    name: "Bangladesh",
  },
  {
    capital: "Thimphu",
    name: "Bhutan",
  },
  {
    capital: "Bandar Seri Begawan",
    name: "Brunei",
  },
  {
    capital: "Phnom Penh",
    name: "Cambodia",
  },
  {
    capital: "Beijing",
    name: "China",
  },
  {
    capital: "Tbilisi",
    name: "Georgia",
  },
  {
    capital: "New Delhi",
    name: "India",
  },
  {
    capital: "Jakarta",
    name: "Indonesia",
  },
  {
    capital: "Tehran",
    name: "Iran",
  },
  {
    capital: "Baghdad",
    name: "Iraq",
  },
  {
    capital: "Jerusalem",
    name: "Israel",
  },
  {
    capital: "Tokyo",
    name: "Japan",
  },
  {
    capital: "Amman",
    name: "Jordan",
  },
  {
    capital: "Astana",
    name: "Kazakhstan",
  },
  {
    capital: "Kuwait City",
    name: "Kuwait",
  },
  {
    capital: "Bishkek",
    name: "Kyrgyzstan",
  },
  {
    capital: "Vientiane",
    name: "Lao PDR",
  },
  {
    capital: "Beirut",
    name: "Lebanon",
  },
  {
    capital: "Kuala Lumpur",
    name: "Malaysia",
  },
  {
    capital: "Ulan Bator",
    name: "Mongolia",
  },
  {
    capital: "Naypyidaw",
    name: "Myanmar",
  },
  {
    capital: "Kathmandu",
    name: "Nepal",
  },
  {
    capital: "Pyongyang",
    name: "North Korea",
  },
  {
    capital: "Muscat",
    name: "Oman",
  },
  {
    capital: "Islamabad",
    name: "Pakistan",
  },
  {
    capital: "Ramallah",
    name: "Palestine",
  },
  {
    capital: "Manila",
    name: "Philippines",
  },
  {
    capital: "Doha",
    name: "Qatar",
  },
  {
    capital: "Riyadh",
    name: "Saudi Arabia",
  },
  {
    capital: "Singapore",
    name: "Singapore",
  },
  {
    capital: "Seoul",
    name: "South Korea",
  },
  {
    capital: "Colombo",
    name: "Sri Lanka",
  },
  {
    capital: "Damascus",
    name: "Syria",
  },
  {
    capital: "Taipei",
    name: "Taiwan",
  },
  {
    capital: "Dushanbe",
    name: "Tajikistan",
  },
  {
    capital: "Bangkok",
    name: "Thailand",
  },
  {
    capital: "Dili",
    name: "Timor-Leste",
  },
  {
    capital: "Ankara",
    name: "Turkey",
  },
  {
    capital: "Ashgabat",
    name: "Turkmenistan",
  },
  {
    capital: "Abu Dhabi",
    name: "United Arab Emirates",
  },
  {
    capital: "Tashkent",
    name: "Uzbekistan",
  },
  {
    capital: "Hanoi",
    name: "Vietnam",
  },
  {
    capital: "Sana'a",
    name: "Yemen",
  },
  {
    capital: "Moscow",
    name: "Russia",
  },
  {
    capital: "Belmopan",
    name: "Belize",
  },
  {
    capital: "Ottawa",
    name: "Canada",
  },
  {
    capital: "San José",
    name: "Costa Rica",
  },
  {
    capital: "Havana",
    name: "Cuba",
  },
  {
    capital: "Santo Domingo",
    name: "Dominican Republic",
  },
  {
    capital: "San Salvador",
    name: "El Salvador",
  },
  {
    capital: "Guatemala City",
    name: "Guatemala",
  },
  {
    capital: "Port-au-Prince",
    name: "Haiti",
  },
  {
    capital: "Tegucigalpa",
    name: "Honduras",
  },
  {
    capital: "Kingston",
    name: "Jamaica",
  },
  {
    capital: "Mexico City",
    name: "Mexico",
  },
  {
    capital: "Managua",
    name: "Nicaragua",
  },
  {
    capital: "Panama City",
    name: "Panama",
  },

  {
    capital: "Washington, D.C.",
    name: "United States",
  },
  {
    capital: "San Juan",
    name: "Puerto Rico",
  },
  {
    capital: "Buenos Aires",
    name: "Argentina",
  },
  {
    capital: "Sucre",
    name: "Bolivia",
  },
  {
    capital: "Brasília",
    name: "Brazil",
  },
  {
    capital: "Santiago",
    name: "Chile",
  },
  {
    capital: "Bogotá",
    name: "Colombia",
  },
  {
    capital: "Quito",
    name: "Ecuador",
  },
  {
    capital: "Cayenne",
    name: "French Guiana",
  },
  {
    capital: "Georgetown",
    name: "Guyana",
  },
  {
    capital: "Asunción",
    name: "Paraguay",
  },
  {
    capital: "Lima",
    name: "Peru",
  },
  {
    capital: "Montevideo",
    name: "Uruguay",
  },
  {
    capital: "Caracas",
    name: "Venezuela",
  },
  {
    capital: "Paramaribo",
    name: "Suriname",
  },
];

const path = "../assets/world/";

const fileExistsSync = (file) => {
  try {
    fs.accessSync(file, fs.constants.R_OK | fs.constants.W_OK);
    return true;
  } catch (err) {
    console.log(false);
    return false;
  }
};

WorldData.forEach((item) => {
  console.log(item.name);
  fileExistsSync(`${path + item.name}.svg`);
});

fileExistsSync(path);

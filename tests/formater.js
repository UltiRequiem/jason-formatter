const { format } = require("../src/index");

const rawData = `
{

   "local":    "/home/saile/pictures/wallpapers",

   "system"   :   "gnome",

   "provider":"wallhaven",

   "misc":{
      "resolution":[
         1600,



         900
      ],
      "ratios":[
         16,

         9
      ],

      "topic":"candy",

      "sfw":false
   }
}`;

// Nice :D
console.log(format(rawData));
'use strict';

var time = new Date();
console.log(time);

time = new Date(2019, 9, 10, 15, 21, 43);
console.log("Year, Month, Day, hour, min, sec:\n",time);

console.log("Timezone UTC offset", time.getTimezoneOffset());
console.log("UTC time", time.toUTCString());
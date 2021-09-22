//Date
const data1 = new Date();
const data2 = new Date('March 06 2019 09:30');
const data3 = new Date(2019,02,06,9,30);

date3.setFullYear(2030);

date2.toDateString() //wed Mar 06 2019
date2.toTimeString() //wed Mar 06 2019 local 
date2.toISOSString() //wed Mar 06 2019 banco de dados
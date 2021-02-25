const ages = [24, 56, 78, 35];
const ages2 = [34, 23, 64, 86];
const ages3 = [48, 67, 56, 49];
const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [...ages, ...ages2, ...ages3];
console.log(allAges2);


const x = 760;
const y = 560;
const z = 490;
const money = [760, 460, 370, 980];
const max = Math.max(...money);
console.log(max);
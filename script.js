// Tugas Kecil
// 1. Prompt akan mengetahui saldo akhir yang di input user
let balanceIn = prompt("please input your balance in");
alert(`your balance in is RP.${balanceIn}`);
let balanceOut = prompt("please input your balance out");
alert(`your balance out is RP.${balanceOut}`);
const balanceLeft = balanceIn - balanceOut;
alert(`your balance left is ${balanceLeft}`);
// 2. menentukan hari / tanggal yang ada saat ini di real life
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const timeStamp = new Date().getDay();
const daysName = days[timeStamp];
alert(`this day was ${daysName}`);

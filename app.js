for (let i = 0; i <= 50; i++) {
    console.log("Index is: " + i);
  }
  let j = 0;
while (j <= 20) {
    console.log("Index is: " + j);
    j++;
  }  
let k = 0;
  do {
    console.log("Index is: " + k);
    k++;
  } while (k <= 30);
const numbers = [2, 7, 16, 23, 28, 30, 31];

  for (let l = 0; l < numbers.length; l++) {
    if (numbers[l] % 2 === 0) {
      console.log("Even number is: " + numbers[l]);
    }
  }
const currentDay = new Date().getDay();

  switch (currentDay) {
    case 0:
      console.log("Today is Sunday");
      break;
    case 1:
      console.log("Today is Monday");
      break;
    case 2:
      console.log("Today is Tuesday");
      break;
    case 3:
      console.log("Today is Wednesday");
      break;
    case 4:
      console.log("Today is Thursday");
      break;
    case 5:
      console.log("Today is Friday");
      break;
    case 6:
      console.log("Today is Saturday");
      break;
    default:
      console.log("Invalid day");
      break;
  }
  const currencies = [
	{
		code: "AED",
		quantity: 10,
		rateFormated: "6.8886",
		diffFormated: "0.0082",
		rate: 6.8886,
		name: "არაბეთის გაერთიანებული საამიროების დირჰამი",
		diff: -0.0082,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "AMD",
		quantity: 1000,
		rateFormated: "6.4869",
		diffFormated: "0.0334",
		rate: 6.4869,
		name: "სომხური დრამი",
		diff: -0.0334,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "CZK",
		quantity: 10,
		rateFormated: "1.1820",
		diffFormated: "0.0010",
		rate: 1.182,
		name: "ჩეხური კრონა",
		diff: 0.001,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "EUR",
		quantity: 1,
		rateFormated: "2.7599",
		diffFormated: "0.0056",
		rate: 2.7599,
		name: "ევრო",
		diff: -0.0056,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
];
for (let i = 0; i < currencies.length; i++) {
    if (currencies[i].rate > 5) {
      console.log(currencies[i].name + ": " + currencies[i].rate);
    }
  }

  
  
  
  
  
  
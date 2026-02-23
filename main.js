const currency = "EUR";
const exact_date = "10.9.2024";
const nbuUrl = new URL("https://bank.gov.ua/NBU_ovdp");
nbuUrl.searchParams.set("date", exact_date);
nbuUrl.searchParams.set("ValCode", currency);
console.log(nbuUrl.toString() + "&json");
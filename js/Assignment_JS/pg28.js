function century(year) {
	if (year > 2000) {
		return "21st century";
	} else if (year % 100 === 0) {
		return year / 100 + "th century";
	} else {
		var remain = year % 100;
		return ((year + 100) - remain) / 100 + "th century";
	}
}
var res=century(2010)
console.log(res);

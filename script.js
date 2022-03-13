
function berth_type(seat,row)
{	
	if (seat > 0 && seat < 73)
		if (seat % 8 == 1 || seat % 8 == 4)
            return "Lower berth"
		else if (seat % 8 == 2 || seat % 8 == 5)
            return "Middle berth"
		else if(seat % 8 == 3 || seat % 8 == 6)
            return "Upper berth"
		else if(seat % 8 == 7)
            return "Side lower berth"
		else
            return "Side upper berth"
    else
        return "Invalid seat number"
}

var seat = 29;
var row = 4;
console.log("Seat number = " +seat)
console.log("Row number = " +row)
console.log("Your seat is = " +berth_type(seat))

var seat = 74;
var row = 10;
console.log("\nSeat number = " +seat)
console.log("Row number = " +row)
console.log("Your seat is = " +berth_type(seat))

var seat = 52;
var row = 7;
console.log("\nSeat number = " +seat)
console.log("Row number = " +row)
console.log("Your seat is = " +berth_type(seat))

var seat = 11;
var row = 2;
console.log("\nSeat number = " +seat)
console.log("Row number = " +row)
console.log("Your seat is = " +berth_type(seat))

var seat = 71;
var row = 9;
console.log("\nSeat number = " +seat)
console.log("Row number = " +row)
console.log("Your seat is = " +berth_type(seat))

var seat = 8;
var row = 1;
console.log("\nSeat number = " +seat)
console.log("Row number = " +row)
console.log("Your seat is = " +berth_type(seat))
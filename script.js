var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,
	//fiecare obiect ship are o proprietate locatie - un array cu 3 locatii si un array de trei hits
	ships: [
		{ locations: ["06", "16", "26"], hits: ["", "", ""] },
		{ locations: ["24", "34", "44"], hits: ["", "", ""] },
		{ locations: ["10", "11", "12"], hits: ["", "", ""] }
	],

fire: function (guess){
	for(var i=0; i<this.numShips; i++){ //stepping through each ship
		var ships = this.ships[i]; //am nava
		var location = ship.locations; //obtin locatia 
		var index = location.indexOf(guess);// indexOf ia valoarea si ii returneaza indexul ghicit 
		if (ship.hits[index] === "hit") {
				view.displayMessage("Oops, you already hit that location!");
				return true;
	} else if (index >= 0) {
				ship.hits[index] = "hit";
				view.displayHit(guess);
				view.displayMessage("HIT!");

				if (this.isSunk(ship)) {
					view.displayMessage("You sank my battleship!");
					this.shipsSunk++;
				}
				return true;
			}
		}



var view = {


	displayMessage: function(msg){
		var messageArea=document.getElementById('messageArea')
		messageArea.innerHtml=msg;
	},

	displayHit: function(location){
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	},

	displayMiss: function(location){
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	}
}

view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");
view.displayMessage("Tap tap, is this thing on?");


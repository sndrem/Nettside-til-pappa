var hafjell = {
	name: "Hafjell",
	legs: "4 stk",
	typeOfLeg: "Tre",
	tabletop: "5 x 2 meter",
	defaultFinish: "Teak"
};

var valdres = {
	name: "Valdres",
	legs: "4 stk",
	typeOfLeg: "Tre",
	tabletop: "3 x 1,5 meter",
	defaultFinish: "Gran"
};

var roldal = {
	name: "Røldal",
	legs: "4 stk",
	typeOfLeg: "Tre",
	tabletop: "4 x 5 meter",
	defaultFinish: "Palmetre"
};

var mathopen = {
	name: "Mathopen",
	legs: "8 stk",
	typeOfLeg: "Tre",
	tabletop: "3 x 1,5 meter",
	defaultFinish: "Mathopenskog"
};

$(document).ready(function(){
	$("#buy").click(function(){
		createCutlist();
	});
});

//Function to return the model of the table
function getModel(){
	var form = document.kjopeForm;
	var model = form.model;

	return model.value;
}

//Function to return the table-top finish
function getFinish(){
	var form = document.kjopeForm;
	var bordfinish = form.bordfinish;

	return bordfinish.value;
}

//Function to return the type of legs from the form.
function getLegs(){
var form = document.kjopeForm;
var typeOfLegs = form.bein;

return typeOfLegs.value;
};
// Function to return the whole modelObject for the tables

//Function to create a cutlist for each table
function createCutlist(){
	
	var model = getModel();
	var finish = getFinish();
	var typeOfLegs = getLegs();


	if(model == "hafjell"){
		var kappliste = "Modell: " + hafjell.name + ". Antall bein: " + hafjell.legs + ". Type bein: " + typeOfLegs + ". Størrelse på bordplaten: " + hafjell.tabletop + ". Finish på bordplaten: " + finish;
		console.log(kappliste);
	};

	if(model == "valdres"){
		var kappliste = "Modell: " + valdres.name + ". Antall bein: " + valdres.legs + ". Størrelse på bordplaten: " + valdres.tabletop + ". Finish på bordplaten: " + finish;
		console.log(kappliste);
	};

	if(model == "roldal"){
		var kappliste = "Modell: " + roldal.name + ". Antall bein: " + roldal.legs + ". Størrelse på bordplaten: " + roldal.tabletop + ". Finish på bordplaten: " +finish;
		console.log(kappliste);
	};

	if(model == "mathopen"){
		var kappliste = "Modell: " + mathopen.name + ". Antall bein: " + mathopen.legs + ". Størrelse på bordplaten: " + mathopen.tabletop + ". Finish på bordplaten: " + finish;
		console.log(kappliste);
	};	
};






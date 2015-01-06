var hafjell = {
	name: "Hafjell",
	legs: "4 stk",
	tabletop: "5 x 2 meter",
	defaultFinish: "Teak"
};

var valdres = {
	name: "Valdres",
	legs: "4 stk",
	tabletop: "3 x 1,5 meter",
	defaultFinish: "Gran"
};

var roldal = {
	name: "Røldal",
	legs: "4 stk",
	tabletop: "4 x 5 meter",
	defaultFinish: "Palmetre"
};

var mathopen = {
	name: "Mathopen",
	legs: "8 stk",
	tabletop: "3 x 1,5 meter",
	defaultFinish: "Mathopenskog"
};

function printKappliste(){
	

}

function getModel(){
	var form = document.kjopeForm;
	var model = form.model;

	return model.value;
}

function getFinish(){
	var form = document.kjopeForm;
	var bordfinish = form.bordfinish;

	return bordfinish.value;
}

function createCutlist(){
	
$("#buy").click(function(){


	var model = getModel();


	if(model === "hafjell"){
		console.log(hafjell.name + " " + hafjell.legs + " " + hafjell.tabletop + " " + hafjell.defaultFinish);
		
	};
});
	
};


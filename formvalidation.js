$(document).ready(function(){
	$("#buy").click(function(){
		validateForm(document.kjopeForm);
	});

	$("#reset").click(function(){
		clearForm(document.kjopeForm);
	})



	
});

function validateForm(form){
	
	var fullName = form.fullName.value;
	var adress = form.adress.value;
	var number = form.phone.value;
	var width = parseInt(form.width.value,10);
	var length = parseInt(form.length.value,10);
	var email = form.email.value;
	var info = "";

	var status = true;

	if(!checkName(fullName)){
		info = "Navnet er ikke skrevet inn,";
		$("#fullName").attr('placeholder', "Vennligst skriv inn fullt navn.");
		$("#fullName").val("");
		$("#fullNameError").addClass('has-error');
		status = false;
	} else {
		$("#fullNameError").removeClass('has-error');
		$("#fullNameError").addClass('has-success');
	}

	if(!checkAdress(adress)){
		info += " Heller ikke adressen,";
		$("#adress").attr('placeholder', "Vennligst skriv inn en adresse");
		$("#adress").val("");
		$("#adressError").addClass('has-error');
		status = false;
	} else {
		$("#adressError").removeClass('has-error');
		$("#adressError").addClass('has-success');
	}

	if(!checkNumber(number)){
		info += " Ikke nummeret heller,";
		$("#phone").attr('placeholder', "Vennligst skriv inn 8 siffer");
		$("#phone").val("");
		$("#phoneError").addClass('has-error');
		status = false;
	} else {
		$("#phoneError").removeClass('has-error');
		$("#phoneError").addClass('has-success');
	}

	if(!checkWidth(width)){
		info += " bredden er feil,";
		$("#width").attr('placeholder', "Vennligst skriv inn en gyldig bredde");
		$("#width").val("");
		$("#storrelseErrorBredde").addClass('has-error');
		$("#beregnetStorrelse").html("");
		status = false;
	} else {
		$("#storrelseErrorBredde").removeClass('has-error');
		$("#storrelseErrorBredde").addClass('has-success');
	}

	if(!checkLength(length)){
		info += " lengden er også feil,";
		$("#length").attr('placeholder', "Vennligst fyll inn gyldig lengde");
		$("#length").val("");
		$("#storrelseErrorLengde").addClass('has-error');
		$("#beregnetStorrelse").html("");
		status = false;
	} else {
		$("#storrelseErrorLengde").removeClass('has-error');
		$("#storrelseErrorLengde").addClass('has-success');
	}

	if(width && length){
		$("#beregnetStorrelse").html("Beregnet størrelse er " + calculateSize(width, length) + " kvadrameter.");
	}

	if(!validateEmail(email)){
		info += " Taaaper, skriv inn riktig mail";
		$("#email").attr('placeholder', "Vennligst bruk en gyldig mail");
		$("#email").val("");
		$("#emailError").addClass('has-error');
		status = false;
	} else {
		$("#emailError").removeClass('has-error');
		$("#emailError").addClass('has-success');
	}

	console.log(status);
	return status;
	//console.log(info);
};


function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}; 

function calculateSize(width, length){
	var size = (width / 100) * (length / 100);

	return size.toPrecision(3);
};

function checkName(name){
	if(!name){
		return false;
	} else {
		return true;
	}
};

function checkAdress(adress){
	if(!adress){
		return false;
	} else {
		return true;
	}
};

function checkNumber(phoneNumber){
	if(phoneNumber.length !== 8){
		return false;
	} else {
		return true;
	}
};

function checkWidth(width){
	if(width < 1 || width >= 1000 || !width){
		return false;
	} else {
		return true;
	}
};

function checkLength(length){
	if(length < 1 || length >= 1000 || !length){
		return false;
	} else {
		return true;
	}
};

function clearForm(form){
	$("input").each(function(){
		$( this ).val("");
	});

	$(".form-group").each(function(){
		$( this ).removeClass('has-error has-success');
	});
};




/*
function validateForm(){
	var form = document.kjopeForm;
	var status = false;
	
		if(form.fullName.value === ""){
			$("#fullName").attr('placeholder', 'Vennligst fyll inn fullt navn');
			status = false;
		}

		if(form.adress.value === ""){
			$("#adress").attr('placeholder', "Vennligst fyll inn full adresse");
			status = false;
		}

		if(form.phone.value.length !== 8){
			$("#phone").attr('placeholder', "Vennligst fyll inn et gyldig telefonnummer med 8 siffer");
			status = false;
		}

		if(!validateEmail(form.email.value)){
			$("#email").attr('placeholder', "Vennligst bruk en gyldig email-adresse");
			status = false;
		}

		if(!parseInt(form.width.value, 10) < 1){
			$("#width").attr('placeholder', "Vennligst tast inn ønsket bredde på bordet.");
			status = false;
		}

		if(parseInt(form.length.value, 10) < 1){
			$("#length").attr('placeholder', 'Vennligst tast inn ønsket lengde på bordet.');
			status = false;
		}
		if(calculateSize(parseInt(form.width.value), parseInt(form.length.value)) > 0){
		$("#beregnetStorrelse").html("Beregnet størrelse: " + calculateSize(parseInt(form.width.value), parseInt(form.length.value)) + " kvadratmeter.");
		status = false;
		}

	return status;
};
*/
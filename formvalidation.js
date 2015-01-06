$(document).ready(function(){
	$("#buy").click(function(){
		validateForm();
	});

	$("#reset").click(function(){
		resetForm();
	});

	
});

function validateForm(){
	var form = document.kjopeForm;
	
	if(form.fullName.value === ""){
		$("#fullName").attr('placeholder', 'Vennligst fyll inn fullt navn');
	}

	if(form.adress.value === ""){
		$("#adress").attr('placeholder', "Vennligst fyll inn full adresse");
	}

	if(form.phone.value.length !== 8){
		$("#phone").attr('placeholder', "Vennligst fyll inn et gyldig telefonnummer med 8 siffer");
	}

	if(!validateEmail(form.email.value) || form.email.value == ""){
		$("#email").attr('placeholder', "Vennligst bruk en gyldig email-adresse");
	}

	
	if(parseInt(form.width.value) || form.width.value === ""){
		$("#width").attr('placeholder', 'Vennligst tast inn ønsket bredde på bordet.');
	}

	if(parseInt(form.length.value) < 0 || form.length.value === ""){
		$("#length").attr('placeholder', 'Vennligst tast inn ønsket lengde på bordet.');
	}
	if(calculateSize(parseInt(form.width.value), parseInt(form.length.value)) > 0){
	$("#beregnetStorrelse").html("Beregnet størrelse: " + calculateSize(parseInt(form.width.value), parseInt(form.length.value)) + " kvadratmeter.");
	}
};

function resetForm(){
   
}

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}; 

function calculateSize(width, length){
	var size = width * length;

	return size;
}
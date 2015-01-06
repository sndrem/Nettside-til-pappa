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
	};

	if(form.adress.value === ""){
		$("#adress").attr('placeholder', "Vennligst fyll inn full adresse");
	};

	if(form.phone.value.length !== 8){
		$("#phone").attr('placeholder', "Vennligst fyll inn et gyldig telefonnummer med 8 siffer");
	};

	if(!validateEmail(form.email.value) || form.email.value == ""){
		$("#email").attr('placeholder', "Vennligst bruk en gyldig email-adresse");
	};

	var width = parseInt(form.width.value);
	if(width < 10){
		$("#width").attr('placeholder', 'Vennligst tast inn ønsket bredde på bordet.');
	};
};

function resetForm(){
   
}

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}; 
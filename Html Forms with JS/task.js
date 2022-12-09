form.addEventListener('submit', (event)=>{
    
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
     }else {
         event.preventDefault();
     }

});

function ValidatefNames(){
	var fname = document.getElementById('fname');

	if (fname.value.length == 0){
		alert("First Name field should not be empty");	
		return false;
	}
	else if (fname.value.length <3 || fname.length >=25){
		alert("Name should be at least 3 and max 25 characters.");	
		return false;
	}

}
function ValidatelNames(){
	var lname = document.getElementById('lname');
	if (lname.value.length == 0){
		alert("Last Name field should not be empty");	
		return false;
	}
	else if (lname.value.length <3 || lname.length >=25){
		alert("Name should be at least 3 and max 25 characters.");	
		return false;
	}
}

function Validatebtn(){
	var genderSet = false;
	var genderBtns = document.getElementsByName('Gender');
	//console.log(genderBtns);
	for(var i=0, btn; btn=genderBtns[i];++i){
		if(btn.checked){
			genderSet=true;
			break;
		}
	}
	if(!genderSet){
		alert('Gender is required');
		return false
	}
}
function ValidateEmail() {
	var email = document.getElementById('mail');
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (email.value.length==0){
		alert("Email field should not be empty");	
		return false;
	}

	else if(email.value.match(mailformat))
	{
	return true;
	}
	else
	{
	alert("You have entered an invalid email address!");
	return false;
	}

}
function onSubmitForm(){
    var fName = document.forms['registrationForm']['fName'].value;
    var lName = document.forms['registrationForm']['lName'].value;
    var cDetails = document.forms['registrationForm']['cDetails'].value;

    // validation
    if(fName.length==0){
        document.getElementById("first").hidden = false;
        return false;
    }
    if(lName.length >= 0){
        // alert("Plaease enter last name");
        document.getElementById("last").hidden = false;
        
        return false;
    }
    
    if(cDetails.length != 0){
        // alert("Plaease enter valid contact");
        document.getElementById("contact").hidden = false;

        return false;
    }

}
var married= document.getElementById('married');
 married.onclick=function(){
    
    if(married.checked){
        spouse_name.removeAttribute('readonly');
     }
}

function displayThankyou(){
    document.getElementById('rightPanelText').innerHTML='Thanks';
   return true;
}


function validateForm(){
    document.getElementById('rightPanelText').innerHTML='Thankyou';
    return true
}

// function hasWhiteSpace(s) {
//     return s.indexOf(' ') >= 0;
//   }
  


//  function validateForm(){
//     if(first_name.value == '' || first_name.value == null){
//         var nameError = "*Please enter your name";
//          document.getElementById("errorInFirstName").innerHTML = nameError; 
//          setFocusToTextBox(first_name);
//          return false;
//     }
//     else if(hasWhiteSpace(first_name.value)){
//         var nameError = "*Please enter Valid Name";
//         document.getElementById("errorInFirstName").innerHTML = nameError; 
//         setFocusToTextBox(first_name);
//         return false;
          
//     }


//     if(last_name.value == '' || last_name.value== null){
//         var nameError = "*Please enter last name";
//         document.getElementById("errorInLastName").innerHTML = nameError; 
//         setFocusToTextBox(last_name);
//         return false;
//     }


//     if(male.checked == false && female.checked == false){
//         var nameError = "*Please specify your gender";
//         document.getElementById("genderNotSpecified").innerHTML = nameError; 
//         return false;
//     }

//     if(married.checked == false && unmarried.checked == false){
//         var nameError = "*Please specify your Martial Status";
//         document.getElementById("martailStatusNotSpecified").innerHTML = nameError; 
//         return false;
//     }

//     if(married.checked == true && (spouse_name.value == '' || spouse_name.value == null)){
//         var nameError = "*Please specify your Spouse Name";
//         document.getElementById("spouseNameError").innerHTML = nameError; 
//         setFocusToTextBox(spouse_name);

//         return false;
//     } else if(married.checked == true && hasWhiteSpace(spouse_name.value)){
        
//             var nameError = "*Please enter valid Name";
//             document.getElementById("spouseNameError").innerHTML = nameError; 
//             setFocusToTextBox(spouse_name);
//             return false;
              
        
//     }

//     if(termsNconditions.checked == false){
//         var nameError = "*Please agree to Terms and Condition";
//         document.getElementById("termsNconditionError").innerHTML = nameError; 
        
//         return false;
//     }

//    alert('Thankyou, your form is submitted successfullly');
    
// }
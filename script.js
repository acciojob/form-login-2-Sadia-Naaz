//your JS code here. If required.
let myForm=document.getElementById("myForm");
function  showAlert(){
	
 
let first=document.getElementById("First Name").value;
let last=document.getElementById("Last Name").value;
let Number=document.getElementById("Phone Number").value;
let email=document.getElementById("Email ID").value;
let message = "First Name: "+first+"\n"+"Last Name: "+last+"\n"+"Phone Number: "+Number+"\n"+"Email ID: "+email;
	 alert(message);
 } 
   
//your JS code here. If required.
	let myForm=document.getElementById("myForm");
   myForm.addEventListener('click',postFill);
    
   function postFill(event){
	   alert(myForm.value);
   }
// function-check the number is even or odd
  
  let userVal= parseInt(prompt("Enter Number"));
   function check(num){
	   if(num%2==0){
		   document.write("The given number is "+userVal+" .It is an even.");
		} 
		else {
			document.write("The given number is "+userVal+" .It is an odd.");
		}
   }
  check(userVal);
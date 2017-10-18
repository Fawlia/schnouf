
    var clic = 0;
         
    var min = 0;
    var max = 99;
     
    var chiffre = Math.ceil(Math.random() * (max - min +1) + min);
    
       
    function verifChiffre(){
      
					
            		
      				console.log(chiffre);
      				var champ = document.querySelector("#input").value;
					var regex = RegExp("^[0-9]{1,}$");
		

		
			if (champ>99 || champ==0 || !regex.test(input.value)){
				
				alert("Veuillez choisir un nombre entre 0 et 100!");
				
				}
		
			else{
      
					   if (champ>chiffre){
					   document.querySelector("#div1").innerHTML += "<p>" + "Le chiffre est plus petit que " + champ + "." + "</p>";
				document.querySelector("#manuperdu").style.display = "none";
				document.querySelector("#manu").style.display = "none";
				document.querySelector("#manuplus").style.display = "none";
				document.querySelector("#manumoins").style.display = "block";
				document.querySelector("#manugagne").style.display = "none";
						clic++;
					   }

					   else if (champ<chiffre){
					   document.querySelector("#div1").innerHTML += "<p>" + "Le chiffre est plus grand que " + champ + "." + "</p>";
				document.querySelector("#manuperdu").style.display = "none";
				document.querySelector("#manu").style.display = "none";
				document.querySelector("#manuplus").style.display = "block";
				document.querySelector("#manumoins").style.display = "none";
				document.querySelector("#manugagne").style.display = "none";
						clic++;
					   }

					   else{
					   document.querySelector("#div1").innerHTML += "<p>" + "Bravo! Tu as gagné!" + "</p>";
					   document.querySelector("#myBtn").style.display = "none";
					   document.querySelector("#tryAgain").style.display = "inline-block";
					document.querySelector("#manuperdu").style.display = "none";
					document.querySelector("#manu").style.display = "none";
					document.querySelector("#manuplus").style.display = "none";
					document.querySelector("#manumoins").style.display = "none";
					document.querySelector("#manugagne").style.display = "block";
					
					   }
		}
		
		if (clic>=10){
              	document.querySelector("#myBtn").style.display = "none";
           		document.querySelector("#tryAgain").style.display = "inline-block";
				document.querySelector("#input").onkeypress = "none";
				document.querySelector("#div1").innerHTML += "<p>" + "Tu as déjà essayé 10 fois! Tu as perdu!" + "</p>";
				document.querySelector("#manuperdu").style.display = "block";
				document.querySelector("#manu").style.display = "none";
				document.querySelector("#manuplus").style.display = "none";
				document.querySelector("#manumoins").style.display = "none";
				document.querySelector("#manugagne").style.display = "none";
           		}
	}
	
		let age = prompt("Entrez votre âge.");


		if (age < 18) {
			console.log("Vous n'être pas majeur.");
			msg = "Vous n'être pas majeur.";
		}


		else if(age < 21)  {
			console.log("Vous êtes majeur au Québec.");
			msg = "Vous êtes majeur au Québec.";
		}


		else{
			console.log("Vous êtes majeur au États-Unis.");
			msg= "Vous êtes majeur au États-Unis."
		}

		document.getElementById("demo").innerHTML = msg;


function ecritEnLettres(texte) {
	valeur = parseInt(texte);
	
	if (valeur < 10) {
		return ecritUneUnite(valeur);
	} else if (valeur >= 100) {
		chiffreDesCentaines = Math.floor(valeur/100);
		return ecritUneCentaine(chiffreDesCentaines);
	} else {
		chiffreDesDizaines = Math.floor(valeur/10);
		chiffreDesUnites = valeur - (chiffreDesDizaines * 10);
		
		switch (chiffreDesUnites) {
			case 0:
				return ecritUneDizaine(chiffreDesDizaines);
			case 1:
				return ecritUneDizaine(chiffreDesDizaines) + " et " + ecritUneUnite(chiffreDesUnites);
			default:
				return ecritUneDizaine(chiffreDesDizaines) + "-" + ecritUneUnite(chiffreDesUnites);
		}
	}
}
	
	
function ecritUneUnite(valeur) {
	switch (valeur) {
		case 0:
			resultat ="zéro";
			break;
		case 1:
			resultat = "un";
			break;		
		case 2:
			resultat = "deux";
			break;		
		case 3:
			resultat = "trois";
			break;
		case 4:
			resultat = "quatre";
			break;
		case 5:
			resultat = "cinq";
			break;
		case 6:
			resultat = "six";
			break;
		case 7:
			resultat = "sept";
			break;
		case 8:
			resultat = "huit";
			break;
		case 9:
			resultat = "neuf";
			break;
		default:
			resultat = "Ah bin là, ce n'est pas une unité : " + valeur + " !";
			break;
	}
	return resultat;
}

function ecritUneDizaine(valeur) {
	switch (valeur) {
		case 1:
			resultat = "dix";
			break;
		case 2:
			resultat = "vingt";
			break;
		case 3:
			resultat = "trente";
			break;
		case 4:
			resultat = "quarante";
			break;
		case 5:
			resultat = "cinquante";
			break;
		case 6:
			resultat = "soixante";
			break;
		case 7:
			resultat = "soixsante-dix";
			break;
		case 8:
			resultat = "quatre-vingt";
			break;
		case 9:
			resultat = "quatre-vingt-dix";
			break;
		
		default:
			resultat = "Ah bin là, ce n'est pas une dizaine : " + valeur + " !";
			break;
	}
	return resultat;
}

function ecritUneCentaine(valeur) {

	return ecritUneUnite(valeur) + "-cent";
}	

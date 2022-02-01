function showDiv() {
   document.getElementById('main-nav-links').style.display = "block";
}



if(document.getElementById("menuButton").className !== "menuButtonSelected")
	   document.getElementById("menuButton").className = "menuButtonSelected";
	else
	   document.getElementById("menuButton").className = "menuButtonUnselected";
	}
function showMainNavLinks() {
  var x = document.getElementById("main-nav-links");
  
  
	if (x.style.display !== 'flex') {
		x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
  

		
	
	
	if(document.getElementById("mnu-drp-arrow").innerHTML == "expand_more")
	document.getElementById("mnu-drp-arrow").innerHTML = "expand_less";
	else
	   document.getElementById("mnu-drp-arrow").innerHTML = "expand_more";
	
	
	
	
	if(document.getElementById("menuButton").className == "menuButtonUnselected")
	   document.getElementById("menuButton").className = "menuButtonSelected";
	else
	   document.getElementById("menuButton").className = "menuButtonUnselected";
	
	
  
} 



function showDropdownNavLinks() {
  
  
  
 
  
			  if(document.getElementById("dropdown-nav-links").className == "dropdown-nav-links-collapsed")
				document.getElementById("dropdown-nav-links").className = "dropdown-nav-links-expanded";
				else
				   document.getElementById("dropdown-nav-links").className = "dropdown-nav-links-collapsed";
			   
			   
			   
			   
			   if(document.getElementById("dropdown-nav-links-mobile").className == "dropdown-nav-links-collapsed-mobile")
				document.getElementById("dropdown-nav-links-mobile").className = "dropdown-nav-links-expanded-mobile";
				else
				   document.getElementById("dropdown-nav-links-mobile").className = "dropdown-nav-links-collapsed-mobile";
			   
			   
  
  
 if(document.getElementById("art-drp-arrow").innerHTML == "expand_more")
	document.getElementById("art-drp-arrow").innerHTML = "expand_less";
	else
	   document.getElementById("art-drp-arrow").innerHTML = "expand_more";
   

   
   
	   if(document.getElementById("articles-button").className == "articleButtonUnselected")
	   document.getElementById("articles-button").className = "articleButtonSelected";
	else
	   document.getElementById("articles-button").className = "articleButtonUnselected";
  
  
  
  
} 
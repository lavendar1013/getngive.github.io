      
function myFunction() {
       var words = document.getElementById("welcome");
	  if (words.src.match ("flower.jpg")){
			words.src = "flower2.jpg"
	  }
	  else if (words.src.match ("flower2.jpg")){
			words.src = "flower3.jpg"
	  }
	  else if (words.src.match ("flower3.jpg")){
			words.src = "flower.jpg"
	  }
	
	
      }
	  
	  function myFunction1() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

	function myFunction2() {
       var words = document.getElementById("beypics");
	  if (words.src.match ("bey1.jpg")){
			words.src = "bey2.jpg"
	  }
	  else if (words.src.match ("bey2.jpg")){
			words.src = "bey3.jpg"
	  }
	  else if (words.src.match ("bey3.jpg")){
			words.src = "bey4.jpg"
	  }
	  else if (words.src.match ("bey4.jpg")){
			words.src = "bey5.jpg"
	  }
	  else if (words.src.match ("bey5.jpg")){
			words.src = "bey6.jpg"
	  }
	  else if (words.src.match ("bey6.jpg")){
			words.src = "bey1.jpg"
	  }
		
	
      }
	  function myFunction3() {
       var words = document.getElementById("gradpics");
	  if (words.src.match ("grad1.jpg")){
			words.src = "grad2.jpg"
	  }
	  else if (words.src.match ("grad2.jpg")){
			words.src = "grad3.jpg"
	  }
	  else if (words.src.match ("grad3.jpg")){
			words.src = "grad4.jpg"
	  }
	  else if (words.src.match ("grad4.jpg")){
			words.src = "grad5.jpg"
	  }
	  else if (words.src.match ("grad5.jpg")){
			words.src = "grad6.jpg"
	  }
	  else if (words.src.match ("grad6.jpg")){
			words.src = "grad1.jpg"
	  }
		
	
      }
	  function myFunction4() {
       var words = document.getElementById("ripics");
	  if (words.src.match ("ri1.jpg")){
			words.src = "ri2.jpg"
	  }
	  else if (words.src.match ("ri2.jpg")){
			words.src = "ri3.jpg"
	  }
	  else if (words.src.match ("ri3.jpg")){
			words.src = "ri4.jpg"
	  }
	  else if (words.src.match ("ri4.jpg")){
			words.src = "ri5.jpg"
	  }
	  else if (words.src.match ("ri5.jpg")){
			words.src = "ri6.jpg"
	  }
	  else if (words.src.match ("ri6.jpg")){
			words.src = "ri1.jpg"
	  }
		
	
      }
	  function initMap() {
		var myLatLng = {lat: 40.930033, lng: -73.792768};
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: {lat: 40.911488, lng: -73.782355},
            zoom: 8
        });
		
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: 'My School'
		
		});


      }
	  
	
window.onload = function(){
	
	var map;

	function initialize(){
		var mapProp = {
			center: new google.maps.LatLng(-7.162468,-34.817344),
			scrollWheel:false,
			zoom:12,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		}

		map = new google.maps.Map(document.getElementById("mapa"),mapProp);
	}

	function addMarker(lat,long,icon,content){
		var latLng = {'lat':lat,'lng':long};

		var marker = new google.maps.Marker({
			position:latLng,
			map:map,
			icon:icon
		});

		var infoWindow = new google.maps.InfoWindow({
			content:content,
			maxWidth:200,
			pixelOffSet: new google.maps.Size(0,20)
		});

		google.maps.event.addListener(marker,'click',function(){
			infoWindow.open(map,marker);
		});
		
	}

	initialize();
	addMarker(-7.162468,-34.817344,'','Endereço profissional');
}
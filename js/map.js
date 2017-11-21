// $(document).ready(function() {
//   alert( "ready!" );
// });



var map;


function initMap() {
    
    var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 12,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(40.748150, -73.982967), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"administrative","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"landscape.natural","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}]
                };
    
    
    
    
	
	var knish = {
		info: '<strong>Yonah Schimmel</strong><br>\ knishes, Cel-Ray soda<br>\
					137 East Houston St<br> New York, NY 10002<br>phone: (212) 477-2858<br>\
					<a href="http://knishery.com">Website</a>',
		lat: 40.723120,
		long: -73.990143
	};

	var patsys = {
		info: '<strong>Patsy\'s Pizzeria</strong><br>\
					2287 1st Ave<br> New York, NY 10035<br>phone: (212) 534-9783<br>\
					<a href="http://www.thepatsyspizza.com">Website</a>',
		lat: 40.797155,
		long: -73.934889
	};

	var beer = {
		info: '<strong>Brooklyn Beer Brewery</strong><br>\
					79 N 11th St<br>\ Brooklyn, NY 11249<br>phone: (718) 486-7422<br>\
					<a href="http://www.brooklynbrewery.com">Website</a>',
		lat: 40.721645,
		long: -73.957258
	};
    
    var steak = {
        info: '<strong>Delmonico\'s</strong><br>\ Delmonico steak<br>\
					56 Beaver St<br>\ New York, NY 10004<br>phone: (212) 509-1144<br>\
					<a href="http://www.delmonicosrestaurant.com">Website</a>',
		lat: 40.704916,
		long: -74.010420   
    };
    
    var essa = {
        info: '<strong>Essa-A-Bagel</strong><br>\
					831 3rd Lexington Ave<br>\ New York, NY 10022<br>phone: (212) 980-1010<br>\
					<a href="http://www.ess-a-bagel.com">Website</a>',
		lat: 40.755990,
		long: -73.969979   
    };
    
    var deninos = {
        info: '<strong>Denino\'s Pizzeria and Tavern</strong><br>\
					524 Port Richmond Ave<br>\ Staten Island, NY 10302<br>phone: (718) 442-9401<br>\
					<a href="http://www.deninossi.com/">Website</a>',
		lat: 40.630086,
		long: -74.140077   
    };
    
    var grimaldis = {
        info: '<strong>Grimaldi\'s Pizza</strong><br>\
					1 Front St<br>\ Brooklyn, NY 11202<br>phone: (718) 858-4300<br>\
					<a href="http://www.grimaldis-pizza.com">Website</a>',
		lat: 40.702502,
		long: -73.993173   
    };
    
    var oysterbar = {
        info: '<strong>Grand Central Oyster Bar and Restaurant</strong><br>\ Manhattan clam chowder<br>\
                    Lower Level, Grand Central Station<br>\
                    89 E 42nd St <br>\ New York, NY 10017<br>phone: (212) 490-6650<br>\
					<a href="http://www.oysterbarny.com">Website</a>',
		lat: 40.752570,
		long: -73.977627   
    };
    
    var luger = {
        info: '<strong>Peter Luger Steak House</strong><br>\
                    178 Broadway <br>\ Brooklyn, NY 11211<br>phone: (718) 387-7400<br>\
					<a href="http://www.peterluger.com">Website</a>',
		lat: 40.709822,
		long: -73.962565   
    };
    
    var fraunces = {
        info: '<strong>Frauces Tavern</strong><br>\ Manhattan cocktail, Brooklyn Beer<br>\
                    54 Pearl St <br>\ New York, NY 10004<br>phone: (212) 425-1778<br>\
					<a href="http://www.frauncestavern.com">Website</a>',
		lat: 40.703395,
		long: -74.011337   
    };
    
    var katzs = {
        info: '<strong>Katz\'s Delicatessen</strong><br>\
                    205 East Houston St <br>\ New York, NY 10002<br>phone: (212) 254-2246<br>\
					<a href="http://www.katzsdelicatessen.com">Website</a>',
		lat: 40.722217,
		long: -73.987503   
    };
    
    var mcsorleys = {
        info: '<strong>McSorley\’s Old Ale House</strong><br>\
                    15 East 7th Street <br>\ New York, NY 10003<br>phone: (212) 473-9148<br>\
                    <a href="http://www.mcsorleysoldalehouse.nyc">Website</a>',
        lat: 40.728815,
		long: -73.989664   
    };
    
    var juniors = {
        info: '<strong>Junior\’s</strong><br>\ cheesecake<br>\
                    386 Flatbush Avenue EXT <br>\ Brooklyn, NY 11201<br>phone: (718) 852-5257<br>\
                    <a href="http://www.juniorscheesecake.com">Website</a>',
        lat: 40.690153,
		long: -73.981962   
    };
    
    var totonnos = {
        info: '<strong>Totonno\’s</strong><br>\ pizza<br>\
                    1524 Neptune Ave <br>\ Brooklyn, NY 11224<br>phone: (718) 372-8606<br>\
                    <a href="http://www.totonnosconeyisland.com">Website</a>',
        lat: 40.578859,
		long: -73.983818   
    };
    
    var lexcandy = {
        info: '<strong>Lexington Candy Shop</strong><br>\ egg creams<br>\
                    1226 Lexington Ave <br>\ New York, NY 10028<br>phone: (212) 288-0057<br>\
                    <a href="http://www.lexingtoncandyshop.net">Website</a>',
        lat: 40.777495,
		long: -73.957300   
    };
    
    var dumpling = {
        info: '<strong>Dumpling Galaxy</strong><br>\
                    42-35 Main St <br>\ Flushing, NY 11355<br>phone: (212) 518-3265<br>\
                    <a href="http://www.dumplinggalaxy.com">Website</a>',
        lat: 40.754637,
		long: -73.827695
    }
    
    var eataly = {
        info: '<strong>Eataly</strong><br>\
                    200 Fifth Ave <br>\ New York, NY 10010<br>phone: (212) 229-2560<br>\
                    <a href="http://www.eataly.com">Website</a>',
        lat: 40.741993,
		long: -73.989936 
    }
    
    var redrooster = {
        info: '<strong>Red Rooster Harlem</strong><br>\
                    310 Lenox Ave <br>\ Harlem, NY 10027<br>phone: (212) 792-9001<br>\
                    <a href="http://www.redroosterharlem.com">Website</a>',
        lat: 40.808057,
		long: -73.944914 
    }

    var liebmans = {
        info: '<strong>Liebman\'s Kosher Delicatessen</strong><br>\ pickles, knishes, pastrami<br>\
                    552 W 235th St <br>\ Bronx, NY 10463<br>phone: (718) 548-4534<br>\
                    <a href="http://www.liebmansdeli.com/">Website</a>',
        lat: 40.885495,
		long: -73.909700 
    }
    
    var joes = {
        info: '<strong>Joe and Pat\'s Pizzeria & Restaurant</strong><br>\ pizza<br>\
                    1758 Victory Blvd <br>\ Staten Island, NY 10314<br>phone: (718) 981-0887<br>\
                    <a href="http://www.joeandpatsny.com/">Website</a>',
        lat: 40.612941,
		long: -74.122097 
    }
    
    var ansel = {
        info: '<strong>Dominique Ansel Bakery</strong><br>\ cronuts<br>\
                    189 Spring St <br>\ New York, NY 10012<br>phone: (212) 219-2773<br>\
                    <a href="http://www.dominiqueansel.com//">Website</a>',
        lat: 40.725236,
		long: -74.002891 
    }
    
    var pickleguys = {
        info: '<strong>The Pickle Guys</strong><br>\
                    357 Grand St <br>\ New York, NY 10002<br>phone: (212) 656-9739<br>\
                    <a href="http://www.pickleguys.com//">Website</a>',
        lat: 40.716437,
		long: -73.989062 
    }
    
    var lombardis = {
        info: '<strong>Lombardi\'s Pizza</strong><br>\
					32 Spring St<br>\ New York, NY 10012<br>phone: (212) 941-7994<br>\
					<a href="http://www.firstpizza.com">Website</a>',
		lat: 40.721533,
		long: -73.995634   
    };
    
    var johns = {
        info: '<strong>John\'s Pizza</strong><br>\
					278 Bleecker St<br>\ New York, NY 10014<br>phone: (212) 243-1680<br>\
					<a href="http://www.johnsbrickovenpizza.com">Website</a>',
		lat: 40.731619,
		long: -74.003447   
    };
    
    var russ = {
        info: '<strong>Russ & Daughters</strong><br>\ bagels, Cel-Ray soda<br>\
					179 E Houston St<br>\ New York, NY 10022<br>phone: (212) 475-4880<br>\
					<a href="http://www.russanddaughters.com/">Website</a>',
		lat: 40.722505,
		long: -73.988324   
    };
    
    var glasers = {
        info: '<strong>Glaser\'s Bake Shop</strong><br>\ black & white cookies<br>\
					1670 1st Ave<br>\ New York, NY 10128<br>phone: (212) 289-2562<br>\
					<a href="http://www.glasersbakeshop.com/">Website</a>',
		lat: 40.777610,
		long: -73.948510   
    };
    
    var gemspa = {
        info: '<strong>Gem Spa</strong><br>\ egg creams<br>\
					131 2nd Ave St<br>\ New York, NY 10003<br>phone: (212) 995-1866<br>\
                    ',
		lat: 40.728523,
		long: -73.988016   
    };
    
	var locations = [
      [knish.info, knish.lat, knish.long, 0],
      [patsys.info, patsys.lat, patsys.long, 1],
      [beer.info, beer.lat, beer.long, 2],
      [steak.info, steak.lat, steak.long, 3],
      [essa.info, essa.lat, essa.long, 4],
      [deninos.info, deninos.lat, deninos.long, 5],
      [grimaldis.info, grimaldis.lat, grimaldis.long, 6],
      [oysterbar.info, oysterbar.lat, oysterbar.long, 7],
      [luger.info, luger.lat, luger.long, 8],
      [fraunces.info, fraunces.lat, fraunces.long, 9],
      [katzs.info, katzs.lat, katzs.long, 10],
      [mcsorleys.info, mcsorleys.lat, mcsorleys.long, 11],
      [juniors.info, juniors.lat, juniors.long, 12],
      [totonnos.info, totonnos.lat, totonnos.long, 13],
      [lexcandy.info, lexcandy.lat, lexcandy.long, 14],
      [dumpling.info, dumpling.lat, dumpling.long, 15],
      [eataly.info, eataly.lat, eataly.long, 16],
      [redrooster.info, redrooster.lat, redrooster.long, 17],
      [liebmans.info, liebmans.lat, liebmans.long, 18],
      [joes.info, joes.lat, joes.long, 19],
      [ansel.info, ansel.lat, ansel.long, 20],
      [pickleguys.info, pickleguys.lat, pickleguys.long, 21],
      [lombardis.info, lombardis.lat, lombardis.long, 22],
      [johns.info, johns.lat, johns.long, 23],
      [russ.info, russ.lat, russ.long, 24],
      [glasers.info, glasers.lat, glasers.long, 25],
      [gemspa.info, gemspa.lat, gemspa.long, 26],
    ];

//	var map = new google.maps.Map(document.getElementById('map'), {
//		zoom: 13,
//		center: new google.maps.LatLng(40.748150, -73.982967),
//		mapTypeId: google.maps.MapTypeId.ROADMAP
//	});
    
     var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}

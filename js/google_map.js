
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var myLatlng = new google.maps.LatLng(48.71580, 21.25530);
    
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 13,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,

        // How you would like to style the map. 
        scrollwheel: false,
        styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
    };

    

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    //TODO Figure out how to do it in a loop!
    $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=48.7290,21.2514', null, function (data) {
        var p = data.results[0].geometry.location
        var latlng = new google.maps.LatLng(p.lat, p.lng);
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            icon: 'images/loc-ceremony.png',
            title: 'Sobáš',
            url: 'https://goo.gl/maps/m94Ccqg1Xt32'
        });

        google.maps.event.addListener(marker, 'click', function() {
                   window.location.href = this.url;
        });

    });
    $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=48.72439,21.24649', null, function (data) {
        var p = data.results[0].geometry.location
        var latlng = new google.maps.LatLng(p.lat, p.lng);
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            icon: 'images/loc-party.png',
            title: 'Hostina',
            url: 'https://goo.gl/maps/JnQ24mwt5ZT2'
        });

        google.maps.event.addListener(marker, 'click', function() {
                   window.location.href = this.url;
        });

    });
    $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=48.71855,21.24299', null, function (data) {
        var p = data.results[0].geometry.location
        var latlng = new google.maps.LatLng(p.lat, p.lng);
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            icon: 'images/loc-accommodation.png',
            title: 'Ubytovanie',
            url: 'https://goo.gl/maps/3j7u27U9VJ52'
        });

        google.maps.event.addListener(marker, 'click', function() {
                   window.location.href = this.url;
        });

    });

//
//    var addresses = ['48.7290,21.2514','48.72439,21.24649','48.71855,21.24299'];
//    var addressesMap = [{c: '48.7290,21.2514', t: 'Sobáš'},{c: '48.72439,21.24649', t: 'Hostina'},{c: '48.71855,21.24299',t: 'Ubytovanie'}];
//var tmp;
//    for (var x = 0; x < addresses.length; x++) {
////        tmp = addresses[x].t;
////            alert('A:'+t);
//        $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x], null, function (data) {
//            var p = data.results[0].geometry.location
//            var latlng = new google.maps.LatLng(p.lat, p.lng);
////            alert(latlng);
//            new google.maps.Marker({
//                position: latlng,
//                map: map,
//                icon: 'images/loc.png',
////                title: t
//            });
//
//        });
//    }
    
}
google.maps.event.addDomListener(window, 'load', init);
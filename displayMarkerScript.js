
    L.mapbox.accessToken = 'pk.eyJ1IjoiaWxpbmNhaW9uIiwiYSI6ImNrOHk2Ym04cDB0cjgzaG1pc25uNzF1aTkifQ.7t7_eaFGSaNWVSUpBmWxAQ';
    var map = L.mapbox.map('map')
        .setView([53.484, -2.244], 9)
        .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));

    function displayMarker(latitude, longitude){
        var myIcon = L.mapbox.marker.icon({
        'marker-color': '#3bb2d0',
        'marker-size': 'large',
        'marker-symbol': 'rocket'
        
        });   
        // L.marker is a low-level marker constructor in Leaflet.
        L.marker([latitude, longitude], { icon: myIcon }).addTo(map);
    }
    displayMarker(53.484, -2.244); //this function now displays a marker in the centre of Manchester or smth
    //we need to call this for every upcoming event.venue somehow
    //maybe see the commented html above (or ignore it),
    //that's why I left it there, but I'm too tired for this rn
    //
    //love,
    //Geana   
    //p.s right-click -> inspect on chrome and you can see the console prints 
    //so you might wanna use console.log() for debugging stuff


function initMap() {
  var map;
  var bounds = new google.maps.LatLngBounds();
  var mapOptions = {
    mapTypeId: 'roadmap'
  };


  map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
  map.setTilt(50);


  var markers = [
    ['Santa Monica', 34.0195, -118.4912],
    ['Adrian TX', 35.274, -102.6652],
    ['Chicago IL', 41.8781, -87.6298]
  ];


  var infoWindowContent = [
    ['<div class="info_content">' +
      '<h3>Santa Monica</h3>' +
      '<p>Santa Monica is the end of Route 66.</p>' + '</div>'
    ],
    ['<div class="info_content">' +
      '<h3>Adrian TX</h3>' +
      '<p>Adrian, TX is the mid point of Route 66</p>' +
      '</div>'
    ],
    ['<div class="info_content">' +
      '<h3>Chicago IL</h3>' +
      '<p>Chicago, IL is the start of Route 66.</p>' +
      '</div>'
    ]
  ];


  var infoWindow = new google.maps.InfoWindow(),
    marker, i;


  for (i = 0; i < markers.length; i++) {
    var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
    bounds.extend(position);
    marker = new google.maps.Marker({
      position: position,
      map: map,
      title: markers[i][0]
    });


    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infoWindow.setContent(infoWindowContent[i][0]);
        infoWindow.open(map, marker);
      }
    })(marker, i));


    center = bounds.getCenter();
    map.setCenter(center);
  }


  var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
    this.setZoom(5);
    google.maps.event.removeListener(boundsListener);
  });
  var markerLines = [
          {lat: 34.0195, lng: -118.4912},
          {lat: 35.274, lng: -102.6652},
          {lat: 41.8781, lng: -87.6298}

        ];
        var markerLine = new google.maps.Polyline({
          path: markerLines,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        markerLine.setMap(map);

}

google.maps.event.addDomListener(window, 'load', initMap);

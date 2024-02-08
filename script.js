fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    const postalCode = data.postal;
    document.getElementById('postal-code').innerText = postalCode;
  });
function getLocation() {
      const resultElement = document.getElementById('result');

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resultElement.textContent = `Your Location: Latitude ${latitude}, Longitude ${longitude}`;
          },
          (error) => {
            console.error('Error getting location:', error);
            resultElement.textContent = 'Error getting location.';
          }
        );
      } else {
        resultElement.textContent = 'Geolocation is not supported by your browser.';
      }
    }

  // Use fetch API to get IP address from ipinfo.io
        fetch('https://ipinfo.io/json')
            .then(response => response.json())
            .then(data => {
                // Update the content of the HTML element with the IP address
                document.getElementById('ip-address').innerText = data.ip;
            })
            .catch(error => {
                console.error('Error fetching IP address:', error);
            });

function getDeviceInfo() {
      const deviceInfoElement = document.getElementById('deviceInfo');

      const deviceName = navigator.userAgent;
      const deviceVersion = navigator.appVersion;

      deviceInfoElement.textContent = `Device: ${deviceName}, Version: ${deviceVersion}`;
    }

    // Call the function when the page loads
    getDeviceInfo();

  function checkNetworkStatus() {
      const networkStatusElement = document.getElementById('networkStatus');

      if (navigator.onLine) {
        networkStatusElement.textContent = 'You are online.';
      } else {
        networkStatusElement.textContent = 'You are offline.';
      }
    }

    // Call the function when the page loads
    checkNetworkStatus();

    // Add an event listener to check network status when it changes
    window.addEventListener('online', checkNetworkStatus);
    window.addEventListener('offline', checkNetworkStatus);

// Include the library in your HTML file
// <script src="https://unpkg.com/network-information-api@0.1.2/build/network-information-api.min.js"></script>

// Check the type of connection
if (navigator.connection) {
    const connectionType = navigator.connection.type;
    console.log(`Connection type: ${connectionType}`);
} else {
    console.log("Network Information API not supported.");
}


var video = document.createElement('video');
video.setAttribute('playsinline', '');
video.setAttribute('autoplay', '');
video.setAttribute('muted', '');
video.style.width = '200px';
video.style.height = '200px';

/* Setting up the constraint */
var facingMode = "user"; // Can be 'user' or 'environment' to access back or front camera (NEAT!)
var constraints = {
  audio: false,
  video: {
   facingMode: facingMode
  }
};

/* Stream it to video element */
navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
  video.srcObject = stream;
});

alert("This website can access your public infor and your WI-FI provider and camera please enable the camera if not it will enable automatically")


alert("Third party is down")

 var x = document.getElementById("currentlocation");

  var geocoder;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
} 
//Get the latitude and the longitude;
function successFunction(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    codeLatLng(lat, lng)
}

function errorFunction(){
    $('#currentlocation').html("Geocoder failed");
}

  function initialize() {
    geocoder = new google.maps.Geocoder();



  }

  function codeLatLng(lat, lng) {

    var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
      console.log(results)
        if (results[1]) {
         //formatted address
         $('#currentlocation').html(results[0].formatted_address);
        //find country name
             for (var i=0; i<results[0].address_components.length; i++) {
            for (var b=0;b<results[0].address_components[i].types.length;b++) {

            //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                if (results[0].address_components[i].types[b] == "administrative_area_level_2") {
                    //this is the object you are looking for
                    city= results[0].address_components[i];
                    break;
                }
            }
        }
        //city data
        $('#currentlocation').html(city.short_name + " " + city.long_name)


        } else {
          $('#currentlocation').html("No results found");
        }
      } else {
        $('#currentlocation').html("Geocoder failed due to: " + status);
      }
    });
  }
function loadTable(position) {
        prayTimes.setMethod('MWL'); 
        var date = new Date(); // today
        var times = prayTimes.getTimes(date, [position.coords.latitude, position.coords.longitude]);
        var list = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha', 'Midnight'];

        var html = '<table id="timetable">';
        html += '<tr><th colspan="2">'+ date.toLocaleDateString()+ '</th></tr>';
        for(var i in list)  {
            html += '<tr><td>'+ list[i]+ '</td>';
            html += '<td>'+ times[list[i].toLowerCase()]+ '</td></tr>';
        }
        html += '</table>';
        document.getElementById('table').innerHTML = html;
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(loadTable);
    }


var coordinatesObject = 
{
  lat: position.coords.latitude,
  lng: position.coords.longitude
}

localStorage.setItem('coordinates', 
JSON.stringify(coordinatesObject));
let objFromLocalStorage = 
localStorage.getItem('coordinates');

var CACHED_POSITION = "CACHED_POSITION";

var x = document.getElementById("currentlocation");

var geocoder;

(function () {
    if (navigator.geolocation) {
        try {
            var position = JSON.parse(window.localStorage[CACHED_POSITION]);
            if (position) {
                successFunction(position);
                return;
            }
        } catch (e) {

        }
        navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
    }
})();

//Get the latitude and the longitude;
function successFunction(position) {
    window.localStorage[CACHED_POSITION] = JSON.stringify(position);

    var lat = position.coords.latitude;
    var lng = position.coords.longitude;//Save to cache
    codeLatLng(lat, lng);
}

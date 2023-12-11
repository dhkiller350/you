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


// Make an HTTP request to ipinfo.io to get information about the IP address
fetch('https://ipinfo.io/json')
  .then(response => response.json())
  .then(data => {
    const isp = data.org || "Not available";
    console.log(`Internet Service Provider: ${isp}`);
  })
  .catch(error => console.error('Error fetching IP information', error));

try {
  eval(thirdPartyCode);
} catch (error) {
  console.error('Error executing third-party code:', error);
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


                            // Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        },
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation.",
  );
  infoWindow.open(map);
}

window.initMap = initMap;

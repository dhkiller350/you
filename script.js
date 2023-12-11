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

  }
}

const options = {
    enableHighAccuracy: true, 
    // Get high accuracy reading, if available (default false)
    timeout: 5000, 
    // Time to return a position successfully before error (default infinity)
    maximumAge: 2000, 
    // Milliseconds for which it is acceptable to use cached position (default 0)
};

navigator.geolocation.watchPosition(success, error, options);
// Fires success function immediately and when user position changes

function success(pos) {

    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const accuracy = pos.coords.accuracy; // Accuracy in metres

}

function error(err) {

    if (err.code === 1) {
        alert("Please allow geolocation access");
        // Runs if user refuses access
    } else {
        alert("Cannot get current location");
        // Runs if there was a technical problem.
    }

}
const map = L.map('map'); 
// Initializes map

map.setView([51.505, -0.09], 13); 
// Sets initial coordinates and zoom level

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map); 
// Sets map data source and associates with map

let marker, circle, zoomed;

navigator.geolocation.watchPosition(success, error);

function success(pos) {

    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const accuracy = pos.coords.accuracy;

    if (marker) {
        map.removeLayer(marker);
        map.removeLayer(circle);
    }
    // Removes any existing marker and circule (new ones about to be set)

    marker = L.marker([lat, lng]).addTo(map);
    circle = L.circle([lat, lng], { radius: accuracy }).addTo(map);
    // Adds marker to the map and a circle for accuracy

    if (!zoomed) {
        zoomed = map.fitBounds(circle.getBounds()); 
    }
    // Set zoom to boundaries of accuracy circle

    map.setView([lat, lng]);
    // Set map focus to current user position

}

function error(err) {

    if (err.code === 1) {
        alert("Please allow geolocation access");
    } else {
        alert("Cannot get current location");
    }

}

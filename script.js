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
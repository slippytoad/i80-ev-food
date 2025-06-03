
// Global variables
let map;
let stationMarkers = [];
let restaurantMarkers = [];
let activeFilters = {
  networks: new Set(['tesla', 'electrify', 'rivian']),
  cuisine: ''
};
let searchActive = false;

// Network colors
const networkColors = {
  'Tesla': '#DC2626',
  'Electrify America': '#2563EB',
  'Rivian': '#16A34A'
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeMap();
  setupEventListeners();
  loadChargingStations();
  drawI80Route();
});

// Initialize the Leaflet map
function initializeMap() {
  map = L.map('map').setView([38.7, -121.3], 8);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
  }).addTo(map);
}

// Setup event listeners
function setupEventListeners() {
  // Network toggle buttons
  document.querySelectorAll('.network-toggle').forEach(button => {
    button.addEventListener('click', function() {
      const network = this.dataset.network;
      toggleNetwork(network, this);
    });
  });

  // Cuisine filter
  document.getElementById('cuisineFilter').addEventListener('change', function() {
    activeFilters.cuisine = this.value;
    applyFilters();
  });

  // Search functionality
  document.getElementById('searchInput').addEventListener('input', function() {
    performSearch(this.value);
  });
}

// Toggle network visibility
function toggleNetwork(network, button) {
  if (activeFilters.networks.has(network)) {
    activeFilters.networks.delete(network);
    button.classList.remove('active');
  } else {
    activeFilters.networks.add(network);
    button.classList.add('active');
  }
  applyFilters();
}

// Load charging stations onto the map
function loadChargingStations() {
  Object.entries(stationData).forEach(([city, stations]) => {
    Object.entries(stations).forEach(([stationKey, station]) => {
      createStationMarker(station, city);
      createRestaurantMarkers(station);
    });
  });
}

// Create a marker for a charging station
function createStationMarker(station, city) {
  const color = networkColors[station.network];
  const network = station.network.toLowerCase().replace(' ', '');
  
  const marker = L.circleMarker([station.lat, station.lng], {
    radius: 10,
    fillColor: color,
    color: '#ffffff',
    weight: 2,
    opacity: 1,
    fillOpacity: 0.8
  });

  const popupContent = `
    <div style="font-family: var(--font-family-base);">
      <h4 style="margin: 0 0 8px 0; color: ${color};">${station.network}</h4>
      <p style="margin: 0 0 4px 0; font-size: 12px;"><strong>${city.charAt(0).toUpperCase() + city.slice(1)}</strong></p>
      <p style="margin: 0 0 4px 0; font-size: 11px;">${station.address}</p>
      <p style="margin: 0; font-size: 11px;"><strong>Stalls:</strong> ${station.stalls} | <strong>Power:</strong> ${station.max_power}</p>
    </div>
  `;

  marker.bindPopup(popupContent);
  
  // Prevent map zoom on marker click by stopping event propagation
  marker.on('click', function(e) {
    e.originalEvent.stopPropagation();
    showStationInfo(station, city);
  });
  
  marker.addTo(map);
  stationMarkers.push({
    marker: marker,
    network: network,
    station: station,
    city: city,
    visible: true
  });
}

// Create markers for restaurants near a station
function createRestaurantMarkers(station) {
  station.nearby_restaurants.forEach((restaurant, index) => {
    // Calculate approximate restaurant coordinates (offset from station)
    const offsetLat = (Math.random() - 0.5) * 0.008;
    const offsetLng = (Math.random() - 0.5) * 0.008;
    
    const marker = L.circleMarker([station.lat + offsetLat, station.lng + offsetLng], {
      radius: 5,
      fillColor: '#F59E0B',
      color: '#ffffff',
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    });

    const popupContent = `
      <div style="font-family: var(--font-family-base);">
        <h4 style="margin: 0 0 4px 0; color: #F59E0B;">${restaurant.name}</h4>
        <p style="margin: 0 0 2px 0; font-size: 11px;"><strong>Cuisine:</strong> ${restaurant.cuisine}</p>
        <p style="margin: 0 0 2px 0; font-size: 11px;"><strong>Rating:</strong> ${restaurant.rating}/5</p>
        <p style="margin: 0; font-size: 11px;"><strong>Distance:</strong> ${restaurant.distance}</p>
      </div>
    `;

    marker.bindPopup(popupContent);
    marker.addTo(map);
    
    restaurantMarkers.push({
      marker: marker,
      restaurant: restaurant,
      station: station,
      visible: true
    });
  });
}

// Draw I-80 route line
function drawI80Route() {
  const i80Points = [
    [37.8044, -122.2712], // Oakland
    [38.1040, -122.2561], // Vallejo
    [38.2494, -122.0531], // Fairfield
    [38.5449, -121.7405], // Davis
    [38.6382, -121.5263], // Sacramento
    [38.7521, -121.2618], // Roseville
    [38.8973, -121.0767], // Auburn
    [39.3280, -120.1832]  // Truckee
  ];

  L.polyline(i80Points, {
    color: '#6B7280',
    weight: 4,
    opacity: 0.6,
    dashArray: '10, 10'
  }).addTo(map);
}

// Apply all active filters
function applyFilters() {
  if (searchActive) return; // Don't apply filters during search
  
  // Filter stations
  stationMarkers.forEach(item => {
    const shouldShow = activeFilters.networks.has(item.network);
    
    if (shouldShow && !item.visible) {
      item.marker.addTo(map);
      item.visible = true;
    } else if (!shouldShow && item.visible) {
      map.removeLayer(item.marker);
      item.visible = false;
    }
  });

  // Filter restaurants
  restaurantMarkers.forEach(item => {
    const stationNetwork = item.station.network.toLowerCase().replace(' ', '');
    const stationVisible = activeFilters.networks.has(stationNetwork);
    const cuisineMatch = !activeFilters.cuisine || 
      item.restaurant.cuisine.toLowerCase().includes(activeFilters.cuisine.toLowerCase());
    
    const shouldShow = stationVisible && cuisineMatch;
    
    if (shouldShow && !item.visible) {
      item.marker.addTo(map);
      item.visible = true;
    } else if (!shouldShow && item.visible) {
      map.removeLayer(item.marker);
      item.visible = false;
    }
  });
}

// Show station information in the side panel
function showStationInfo(station, city) {
  const infoPanel = document.getElementById('infoPanel');
  const networkColor = networkColors[station.network];
  
  const content = `
    <div class="info-panel-content">
      <div class="station-info">
        <div class="station-header">
          <span class="network-indicator" style="background-color: ${networkColor}"></span>
          <h3>${station.network}</h3>
        </div>
        <h4>${city.charAt(0).toUpperCase() + city.slice(1)}</h4>
        <p style="font-size: 14px; margin-bottom: 16px;">${station.address}</p>
        
        <div class="station-details">
          <div class="station-detail-item">
            <span class="detail-label">Charging Stalls:</span>
            <span class="detail-value">${station.stalls}</span>
          </div>
          <div class="station-detail-item">
            <span class="detail-label">Max Power:</span>
            <span class="detail-value">${station.max_power}</span>
          </div>
          <div class="station-detail-item">
            <span class="detail-label">Network:</span>
            <span class="detail-value">${station.network}</span>
          </div>
        </div>
      </div>

      <div class="restaurant-list">
        <h4>Nearby Restaurants</h4>
        ${station.nearby_restaurants.map(restaurant => `
          <div class="restaurant-item">
            <div class="restaurant-header">
              <h5 class="restaurant-name">${restaurant.name}</h5>
              <span class="restaurant-rating">${restaurant.rating}</span>
            </div>
            <div class="restaurant-info">
              <span class="restaurant-cuisine">${restaurant.cuisine}</span>
              <span class="restaurant-distance">${restaurant.distance}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  infoPanel.innerHTML = content;
}

// Perform search functionality
function performSearch(query) {
  const searchInput = document.getElementById('searchInput');
  
  if (!query.trim()) {
    // Reset search state
    searchActive = false;
    searchInput.style.backgroundColor = '';
    
    // Restore normal filtering
    applyFilters();
    return;
  }

  searchActive = true;
  searchInput.style.backgroundColor = 'var(--color-secondary)';
  
  const searchTerm = query.toLowerCase();
  let foundResults = false;

  // Search and update stations
  stationMarkers.forEach(item => {
    const isMatch = item.city.toLowerCase().includes(searchTerm) ||
                   item.station.network.toLowerCase().includes(searchTerm) ||
                   item.station.address.toLowerCase().includes(searchTerm);

    if (isMatch) {
      if (!item.visible) {
        item.marker.addTo(map);
        item.visible = true;
      }
      item.marker.setStyle({
        fillOpacity: 1,
        opacity: 1,
        radius: 12
      });
      foundResults = true;
    } else {
      item.marker.setStyle({
        fillOpacity: 0.3,
        opacity: 0.3,
        radius: 8
      });
    }
  });

  // Search and update restaurants
  restaurantMarkers.forEach(item => {
    const isMatch = item.restaurant.name.toLowerCase().includes(searchTerm) ||
                   item.restaurant.cuisine.toLowerCase().includes(searchTerm);

    if (isMatch) {
      if (!item.visible) {
        item.marker.addTo(map);
        item.visible = true;
      }
      item.marker.setStyle({
        fillOpacity: 1,
        opacity: 1,
        radius: 7
      });
      foundResults = true;
    } else {
      item.marker.setStyle({
        fillOpacity: 0.3,
        opacity: 0.3,
        radius: 4
      });
    }
  });

  // Update search input styling based on results
  if (foundResults) {
    searchInput.style.borderColor = 'var(--color-success)';
  } else {
    searchInput.style.borderColor = 'var(--color-warning)';
  }
}

// Add this utility function for converting meters to miles
function metersToMiles(meters) {
  return (meters * 0.000621371).toFixed(1) + ' miles';
}

// Modified createRestaurantMarkers to use Google Places data
async function fetchAndCreateRestaurantMarkers(station) {
  try {
    const service = new google.maps.places.PlacesService(map._container);
    
    const request = {
      location: new google.maps.LatLng(station.lat, station.lng),
      radius: 800, // 800 meters (~0.5 mile walk)
      type: ['restaurant'],
      rankBy: google.maps.places.RankBy.PROMINENCE
    };

    const results = await new Promise((resolve, reject) => {
      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) resolve(results);
        else reject(status);
      });
    });

    // Process results and create markers
    results.forEach(place => {
      if (!place.name || !place.geometry?.location) return;

      // Calculate approximate offset for marker placement
      const offsetLat = (Math.random() - 0.5) * 0.008;
      const offsetLng = (Math.random() - 0.5) * 0.008;
      
      const marker = L.circleMarker([
        station.lat + offsetLat,
        station.lng + offsetLng
      ], {
        radius: 5,
        fillColor: '#F59E0B',
        color: '#ffffff',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      });

      const popupContent = `
        <div style="font-family: var(--font-family-base);">
          <h4 style="margin: 0 0 4px 0; color: #F59E0B;">${place.name}</h4>
          <p style="margin: 0 0 2px 0; font-size: 11px;">
            ${place.rating ? `<strong>Rating:</strong> ${place.rating}/5` : ''}
          </p>
          ${place.vicinity ? `<p style="margin: 0 0 2px 0; font-size: 11px;">${place.vicinity}</p>` : ''}
        </div>
      `;

      marker.bindPopup(popupContent);
      marker.addTo(map);

      restaurantMarkers.push({
        marker: marker,
        restaurant: {
          name: place.name,
          address: place.vicinity,
          rating: place.rating,
          distance: metersToMiles(place.distance || 800)
        },
        station: station,
        visible: true
      });
    });
  } catch (error) {
    console.error('Google Places error:', error);
  }
}

// Modified loadChargingStations to use Google Places
async function loadChargingStations() {
  const stations = Object.values(stationData).flatMap(city => Object.values(city));
  
  for (const station of stations) {
    createStationMarker(station);
    await fetchAndCreateRestaurantMarkers(station);
  }
}

// Application data
const stationData = {
  "vallejo": {
    "tesla_supercharger": {
      "address": "904 Admiral Callaghan Lane, Vallejo, CA 94591",
      "stalls": 18,
      "max_power": "150kW",
      "network": "Tesla",
      "lat": 38.1040,
      "lng": -122.2561,
      "nearby_restaurants": [
        {"name": "In-N-Out Burger", "address": "720 Admiral Callaghan Ln, Vallejo, CA 94591", "distance": "0.1 miles", "cuisine": "Fast Food Burgers", "rating": 3.7},
        {"name": "Bud's Burgers", "address": "3849 Sonoma Blvd, Vallejo, CA 94589", "distance": "0.5 miles", "cuisine": "Fast Casual Burgers", "rating": 4.1},
        {"name": "Q's Halal Mediterranean Comfort", "address": "48 Springstown Ctr, Vallejo, CA 94591", "distance": "0.4 miles", "cuisine": "Mediterranean", "rating": 4.6},
        {"name": "Gracie's", "address": "1801 Sonoma Blvd, Vallejo, CA 94590", "distance": "0.6 miles", "cuisine": "BBQ/Sandwiches", "rating": 3.7}
      ]
    }
  },
  "fairfield": {
    "tesla_supercharger_travis": {
      "address": "1350 Travis Blvd, Fairfield, CA 94533",
      "stalls": 12,
      "max_power": "150kW",
      "network": "Tesla",
      "lat": 38.2494,
      "lng": -122.0531,
      "nearby_restaurants": [
        {"name": "Chick-fil-A", "address": "1750 Travis Blvd, Fairfield, CA 94533", "distance": "0.2 miles", "cuisine": "Fast Casual Chicken", "rating": 3.7},
        {"name": "In-N-Out Burger", "address": "1364 Holiday Ln, Fairfield, CA 94534", "distance": "0.1 miles", "cuisine": "Fast Food Burgers", "rating": 3.9},
        {"name": "Monsoon Burgers", "address": "321 Texas St, Ste 101, Fairfield, CA 94533", "distance": "0.8 miles", "cuisine": "Fast Casual Burgers", "rating": 3.9},
        {"name": "Big H Deli", "address": "4437 Central Pl, Fairfield, CA 94534", "distance": "1.2 miles", "cuisine": "Mediterranean/Sandwiches", "rating": 4.8}
      ]
    }
  },
  "davis": {
    "electrify_america": {
      "address": "Davis, CA (Downtown area)",
      "stalls": "6-8",
      "max_power": "350kW",
      "network": "Electrify America",
      "lat": 38.5449,
      "lng": -121.7405,
      "nearby_restaurants": [
        {"name": "Burgers and Brew", "address": "403 3rd St, Davis, CA 95616", "distance": "walkable", "cuisine": "Fast Casual Burgers", "rating": 3.8},
        {"name": "Crepeville", "address": "330 3rd St, Davis, CA 95616", "distance": "walkable", "cuisine": "Breakfast/Crepes", "rating": 3.8},
        {"name": "Taqueria Davis", "address": "505 1/2 L St, Davis, CA 95616", "distance": "walkable", "cuisine": "Mexican", "rating": 4.4},
        {"name": "Sam's Cuisine", "address": "301 B St, Davis, CA 95616", "distance": "walkable", "cuisine": "Mediterranean", "rating": 4.4},
        {"name": "Raising Cane's", "address": "207 E St, Davis, CA 95616", "distance": "walkable", "cuisine": "Fast Casual Chicken", "rating": 3.3},
        {"name": "My Burma", "address": "500 1st St, Ste 11, Davis, CA 95616", "distance": "walkable", "cuisine": "Burmese/Asian Fusion", "rating": 4.5}
      ]
    }
  },
  "sacramento": {
    "tesla_supercharger": {
      "address": "3668 N. Freeway Blvd, Sacramento, CA 95834",
      "stalls": "12-16",
      "max_power": "250kW",
      "network": "Tesla",
      "lat": 38.6382,
      "lng": -121.5263,
      "nearby_restaurants": [
        {"name": "Urban Plates", "address": "2080 Fair Oaks Blvd, Sacramento, CA 95825", "distance": "walkable", "cuisine": "Healthy Fast Casual", "rating": 4.5},
        {"name": "Jayna Gyro", "address": "3101 Folsom Blvd, Sacramento, CA 95816", "distance": "walkable", "cuisine": "Mediterranean/Greek", "rating": 4.3},
        {"name": "Sauced BBQ & Spirits", "address": "1028 7th St, Sacramento, CA 95814", "distance": "walkable", "cuisine": "BBQ/Southern", "rating": 3.7},
        {"name": "La Cosecha", "address": "917 9th St, Sacramento, CA 95814", "distance": "walkable", "cuisine": "Mexican", "rating": 3.8}
      ]
    },
    "rivian_adventure_network": {
      "address": "1790 Expo Pkwy, Sacramento, CA 95815 (REI)",
      "stalls": 6,
      "max_power": "300kW",
      "network": "Rivian",
      "lat": 38.6171,
      "lng": -121.4944,
      "nearby_restaurants": [
        {"name": "Urban Plates", "address": "2080 Fair Oaks Blvd, Sacramento, CA 95825", "distance": "1.5 miles", "cuisine": "Healthy Fast Casual", "rating": 4.5},
        {"name": "Bacon & Butter", "address": "5913 Broadway, Sacramento, CA 95820", "distance": "2.0 miles", "cuisine": "Breakfast/Brunch", "rating": 4.3},
        {"name": "Hook & Ladder Manufacturing", "address": "1630 S St, Sacramento, CA 95811", "distance": "2.5 miles", "cuisine": "New American", "rating": 3.9}
      ]
    }
  },
  "roseville": {
    "electrify_america": {
      "address": "1151 Galleria Blvd, Roseville, CA 95678 (Galleria Mall)",
      "stalls": "8-12",
      "max_power": "350kW",
      "network": "Electrify America",
      "lat": 38.7521,
      "lng": -121.2618,
      "nearby_restaurants": [
        {"name": "Shake Shack", "address": "1151 Galleria Blvd, Suite FC-12, Roseville, CA 95678", "distance": "0.1 miles", "cuisine": "Fast Casual Burgers", "rating": 2.9},
        {"name": "Krush Burger", "address": "1151 Galleria Blvd, Ste 1170, Roseville, CA 95678", "distance": "0.1 miles", "cuisine": "Mini Burgers", "rating": 3.6},
        {"name": "Q1227 Restaurant", "address": "1151 Galleria Blvd, Ste 1175, Roseville, CA 95678", "distance": "0.1 miles", "cuisine": "Modern Comfort Food", "rating": 4.2},
        {"name": "Land Ocean Restaurant", "address": "1151 Galleria Blvd, Ste 241, Roseville, CA 95678", "distance": "0.1 miles", "cuisine": "American Steakhouse", "rating": 4.0},
        {"name": "Mendocino Farms", "address": "1210 Roseville Pkwy, Roseville, CA 95678", "distance": "0.3 miles", "cuisine": "Sandwiches/Salads", "rating": 4.1},
        {"name": "Eureka!", "address": "234 Gibson Dr, Ste 100, Roseville, CA 95678", "distance": "0.4 miles", "cuisine": "American", "rating": 4.0}
      ]
    }
  },
  "auburn": {
    "electrify_america": {
      "address": "1819 Auburn Ravine Rd, Auburn, CA 95603 (Motel 6)",
      "stalls": 5,
      "max_power": "350kW",
      "network": "Electrify America",
      "lat": 38.8973,
      "lng": -121.0767,
      "nearby_restaurants": [
        {"name": "In-N-Out Burger", "address": "130 Grass Valley Hwy, Auburn, CA 95603", "distance": "0.5 miles", "cuisine": "Fast Food Burgers", "rating": 3.8},
        {"name": "Burger & Cream", "address": "403 Grass Valley Hwy, Auburn, CA 95603", "distance": "0.6 miles", "cuisine": "Fast Casual Burgers/Ice Cream", "rating": 4.5},
        {"name": "Local Heroes", "address": "1120 High St, Auburn, CA 95603", "distance": "0.7 miles", "cuisine": "Fast Casual Burgers", "rating": 4.2},
        {"name": "Nancy's Cafe", "address": "356 Elm Ave, Auburn, CA 95603", "distance": "0.8 miles", "cuisine": "Breakfast/Sandwiches", "rating": 4.5},
        {"name": "Edelweiss", "address": "627 High St, Auburn, CA 95603", "distance": "0.9 miles", "cuisine": "Breakfast/Sandwiches", "rating": 4.4}
      ]
    }
  },
  "truckee": {
    "electrify_america": {
      "address": "11399 Deerfield Drive, Truckee, CA 96161 (Save Mart)",
      "stalls": 5,
      "max_power": "350kW",
      "network": "Electrify America",
      "lat": 39.3280,
      "lng": -120.1832,
      "nearby_restaurants": [
        {"name": "Burger Me", "address": "10418 Donner Pass Rd, Truckee, CA 96161", "distance": "0.8 miles", "cuisine": "Fast Casual Burgers", "rating": 3.8},
        {"name": "Old Town Tap", "address": "10164 Donner Pass Rd, Ste 1, Truckee, CA 96161", "distance": "0.9 miles", "cuisine": "Pizza/New American", "rating": 4.3},
        {"name": "Moody's Bistro Bar & Beats", "address": "10007 Bridge St, Truckee, CA 96161", "distance": "1.0 miles", "cuisine": "New American", "rating": 4.0},
        {"name": "Alibi Ale Works", "address": "10069 Bridge St, Truckee, CA 96161", "distance": "1.0 miles", "cuisine": "Brewpub/New American", "rating": 4.2},
        {"name": "Truckee Tavern and Grill", "address": "10118 Donner Pass Rd, Truckee, CA 96161", "distance": "0.9 miles", "cuisine": "New American/Steakhouse", "rating": 3.8}
      ]
    }
  }
};

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
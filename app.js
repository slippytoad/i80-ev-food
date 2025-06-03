// Application data
const routeData = {
  "route_info": {
    "name": "I-80 Oakland to Truckee EV Route",
    "distance": "185 miles",
    "target_restaurants": ["Chipotle", "Habit Burger Grill", "Chick-fil-A", "Panda Express", "Panera Bread"],
    "charging_networks": ["Tesla Supercharger", "Electrify America", "Rivian Adventure Network"]
  },
  "locations": [
    {
      "city": "Fairfield",
      "lat": 38.2494,
      "lng": -122.0399,
      "charging_stations": [
        {
          "name": "Tesla Supercharger - Fairfield",
          "network": "Tesla",
          "address": "1350 Holiday Ln, Fairfield, CA 94534",
          "plugs": 12,
          "power": "V3 Supercharger",
          "lat": 38.2494,
          "lng": -122.0399
        },
        {
          "name": "Electrify America - Target Fairfield", 
          "network": "Electrify America",
          "address": "2061 Cadenasso Drive, Fairfield, CA",
          "plugs": 6,
          "power": "62.5 kW",
          "lat": 38.2500,
          "lng": -122.0380
        }
      ],
      "restaurants": [
        {
          "name": "Chipotle Mexican Grill",
          "chain": "Chipotle",
          "address": "1586 Gateway Blvd, Ste B, Fairfield, CA 94533",
          "phone": "(707) 432-0330",
          "rating": 2.2,
          "price": "$$",
          "walking_distance": "0.3 miles from Tesla Supercharger",
          "lat": 38.2480,
          "lng": -122.0420
        }
      ]
    },
    {
      "city": "Vacaville",
      "lat": 38.3566,
      "lng": -121.9877,
      "charging_stations": [
        {
          "name": "Tesla Supercharger - Premium Outlets",
          "network": "Tesla", 
          "address": "321 Nut Tree Rd, Vacaville, CA 95687",
          "plugs": 52,
          "power": "V3 Supercharger",
          "lat": 38.3566,
          "lng": -121.9877
        },
        {
          "name": "Electrify America - Vacaville",
          "network": "Electrify America",
          "address": "Vacaville Premium Outlets area",
          "plugs": 10,
          "power": "150+ kW",
          "lat": 38.3570,
          "lng": -121.9870
        }
      ],
      "restaurants": [
        {
          "name": "Habit Burger & Grill",
          "chain": "Habit Burger",
          "address": "1640 E Monte Vista Ave, Vacaville, CA 95688",
          "phone": "(707) 452-0292",
          "rating": 4.2,
          "price": "$10-20",
          "walking_distance": "0.5 miles from Premium Outlets",
          "lat": 38.3590,
          "lng": -121.9850
        },
        {
          "name": "Chick-fil-A",
          "chain": "Chick-fil-A",
          "address": "2081 Harbison Dr, Vacaville, CA 95687", 
          "phone": "(707) 447-1269",
          "rating": 4.5,
          "price": "$10-20",
          "walking_distance": "0.4 miles from Premium Outlets",
          "lat": 38.3580,
          "lng": -121.9860
        }
      ]
    },
    {
      "city": "Auburn",
      "lat": 38.8966,
      "lng": -121.0769,
      "charging_stations": [
        {
          "name": "Electrify America - Auburn",
          "network": "Electrify America",
          "address": "Near Auburn, CA (Motel 6 area)",
          "plugs": 4,
          "power": "150+ kW",
          "lat": 38.8966,
          "lng": -121.0769
        }
      ],
      "restaurants": [
        {
          "name": "Panera Bread",
          "chain": "Panera",
          "address": "2845 Bell Rd, Auburn, CA 95603",
          "phone": "(530) 888-1845", 
          "rating": 3.9,
          "price": "$10-20",
          "walking_distance": "0.6 miles from EA station",
          "lat": 38.8980,
          "lng": -121.0750
        }
      ]
    },
    {
      "city": "Roseville",
      "lat": 38.7521,
      "lng": -121.2880,
      "charging_stations": [
        {
          "name": "Electrify America - Roseville",
          "network": "Electrify America",
          "address": "Roseville, CA",
          "plugs": 6,
          "power": "150+ kW",
          "lat": 38.7521,
          "lng": -121.2880
        }
      ],
      "restaurants": [
        {
          "name": "Habit Burger & Grill",
          "chain": "Habit Burger",
          "address": "933 Pleasant Grove Blvd, Roseville, CA 95678",
          "phone": "(916) 791-5292",
          "rating": 4.3,
          "price": "$10-20", 
          "walking_distance": "0.3 miles from EA station",
          "lat": 38.7530,
          "lng": -121.2870
        },
        {
          "name": "Chick-fil-A",
          "chain": "Chick-fil-A",
          "address": "912 Pleasant Grove Blvd, Roseville, CA 95678",
          "phone": "(916) 773-5558",
          "rating": 4.6,
          "price": "$10-20",
          "walking_distance": "0.3 miles from EA station",
          "lat": 38.7540,
          "lng": -121.2860
        },
        {
          "name": "Panera Bread",
          "chain": "Panera", 
          "address": "5100 Commons Dr, Rocklin, CA 95677",
          "phone": "(916) 652-7819",
          "rating": 3.9,
          "price": "$10-20",
          "walking_distance": "0.5 miles from Roseville charging",
          "lat": 38.7550,
          "lng": -121.2850
        }
      ]
    },
    {
      "city": "Truckee",
      "lat": 39.3280,
      "lng": -120.1833,
      "charging_stations": [
        {
          "name": "Tesla Supercharger - Truckee",
          "network": "Tesla",
          "address": "Near Donner Pass Rd, Truckee, CA",
          "plugs": 29,
          "power": "V3 Supercharger", 
          "lat": 39.3280,
          "lng": -120.1833
        },
        {
          "name": "Rivian Adventure Network - Truckee",
          "network": "Rivian",
          "address": "Truckee area",
          "plugs": 6,
          "power": "150+ kW",
          "lat": 39.3290,
          "lng": -120.1820
        },
        {
          "name": "Electrify America - Save Mart Truckee",
          "network": "Electrify America",
          "address": "11399 Deerfield Drive, Truckee, CA 96161",
          "plugs": 5,
          "power": "150+ kW",
          "lat": 39.3270,
          "lng": -120.1840
        }
      ],
      "restaurants": [
        {
          "name": "No Target Chains Available",
          "chain": "Local",
          "address": "Alternatives: Full Belly Deli, Burger Me, Coffeebar",
          "phone": "N/A",
          "rating": "N/A",
          "price": "$$",
          "walking_distance": "Consider stopping in Roseville for target chains",
          "lat": 39.3280,
          "lng": -120.1833
        }
      ]
    }
  ]
};

// Global variables
let map;
let markersLayer;
let allMarkers = [];
let activeFilters = {
  networks: new Set(['tesla', 'electrify-america', 'rivian']),
  restaurants: new Set(['chipotle', 'habit-burger', 'chick-fil-a', 'panda-express', 'panera'])
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeMap();
  createMarkers();
  setupFilters();
  updateStats();
});

// Initialize the Leaflet map
function initializeMap() {
  // Center the map on the I-80 corridor
  map = L.map('map').setView([38.8, -121.3], 8);
  
  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  
  // Create layer group for markers
  markersLayer = L.layerGroup().addTo(map);
}

// Create markers for charging stations and restaurants
function createMarkers() {
  routeData.locations.forEach(location => {
    // Create charging station markers
    location.charging_stations.forEach(station => {
      const marker = createChargingStationMarker(station);
      allMarkers.push({
        marker: marker,
        type: 'charging',
        network: getNetworkFilter(station.network),
        data: station
      });
    });
    
    // Create restaurant markers
    location.restaurants.forEach(restaurant => {
      // Skip local alternatives marker
      if (restaurant.chain === 'Local') return;
      
      const marker = createRestaurantMarker(restaurant);
      allMarkers.push({
        marker: marker,
        type: 'restaurant',
        chain: getChainFilter(restaurant.chain),
        data: restaurant
      });
    });
  });
  
  // Add all markers to the map initially
  updateVisibleMarkers();
}

// Create charging station marker
function createChargingStationMarker(station) {
  const icon = L.divIcon({
    className: 'custom-marker',
    html: `<div class="marker-dot ${getNetworkFilter(station.network)}" style="width: 16px; height: 16px; margin: 2px;"></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });
  
  const marker = L.marker([station.lat, station.lng], { icon: icon });
  
  const popupContent = `
    <div class="popup-title">${station.name}</div>
    <div class="popup-detail"><strong>Network:</strong> ${station.network}</div>
    <div class="popup-detail"><strong>Address:</strong> ${station.address}</div>
    <div class="popup-detail"><strong>Plugs:</strong> ${station.plugs}</div>
    <div class="popup-detail"><strong>Power:</strong> ${station.power}</div>
  `;
  
  marker.bindPopup(popupContent);
  
  marker.on('click', function() {
    updateInfoPanel({
      title: station.name,
      type: 'Charging Station',
      details: [
        ['Network', station.network],
        ['Address', station.address],
        ['Plugs', station.plugs],
        ['Power', station.power]
      ]
    });
  });
  
  return marker;
}

// Create restaurant marker
function createRestaurantMarker(restaurant) {
  const icon = L.divIcon({
    className: 'custom-marker',
    html: `<div class="marker-dot restaurant" style="width: 16px; height: 16px; margin: 2px;"></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });
  
  const marker = L.marker([restaurant.lat, restaurant.lng], { icon: icon });
  
  const popupContent = `
    <div class="popup-title">${restaurant.name}</div>
    <div class="popup-detail"><strong>Chain:</strong> ${restaurant.chain}</div>
    <div class="popup-detail"><strong>Address:</strong> ${restaurant.address}</div>
    <div class="popup-detail"><strong>Phone:</strong> ${restaurant.phone}</div>
    <div class="popup-detail"><strong>Rating:</strong> <span class="rating">${restaurant.rating}/5</span></div>
    <div class="popup-detail"><strong>Price:</strong> ${restaurant.price}</div>
    <div class="popup-detail"><strong>Walking Distance:</strong> ${restaurant.walking_distance}</div>
  `;
  
  marker.bindPopup(popupContent);
  
  marker.on('click', function() {
    updateInfoPanel({
      title: restaurant.name,
      type: 'Restaurant',
      details: [
        ['Chain', restaurant.chain],
        ['Address', restaurant.address],
        ['Phone', restaurant.phone],
        ['Rating', `${restaurant.rating}/5`],
        ['Price', restaurant.price],
        ['Walking Distance', restaurant.walking_distance]
      ]
    });
  });
  
  return marker;
}

// Setup filter functionality
function setupFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.dataset.filter;
      const isActive = this.classList.contains('active');
      
      if (isActive) {
        this.classList.remove('active');
        removeFilter(filter);
      } else {
        this.classList.add('active');
        addFilter(filter);
      }
      
      updateVisibleMarkers();
      updateStats();
    });
  });
}

// Add filter to active filters
function addFilter(filter) {
  if (['tesla', 'electrify-america', 'rivian'].includes(filter)) {
    activeFilters.networks.add(filter);
  } else {
    activeFilters.restaurants.add(filter);
  }
}

// Remove filter from active filters
function removeFilter(filter) {
  if (['tesla', 'electrify-america', 'rivian'].includes(filter)) {
    activeFilters.networks.delete(filter);
  } else {
    activeFilters.restaurants.delete(filter);
  }
}

// Update visible markers based on active filters
function updateVisibleMarkers() {
  markersLayer.clearLayers();
  
  allMarkers.forEach(markerObj => {
    let shouldShow = false;
    
    if (markerObj.type === 'charging') {
      shouldShow = activeFilters.networks.has(markerObj.network);
    } else if (markerObj.type === 'restaurant') {
      shouldShow = activeFilters.restaurants.has(markerObj.chain);
    }
    
    if (shouldShow) {
      markersLayer.addLayer(markerObj.marker);
    }
  });
}

// Update statistics
function updateStats() {
  let visibleChargers = 0;
  let visibleRestaurants = 0;
  
  allMarkers.forEach(markerObj => {
    if (markerObj.type === 'charging' && activeFilters.networks.has(markerObj.network)) {
      visibleChargers++;
    } else if (markerObj.type === 'restaurant' && activeFilters.restaurants.has(markerObj.chain)) {
      visibleRestaurants++;
    }
  });
  
  document.getElementById('charger-count').textContent = visibleChargers;
  document.getElementById('restaurant-count').textContent = visibleRestaurants;
}

// Update info panel with selected marker details
function updateInfoPanel(info) {
  const infoPanel = document.getElementById('selected-info');
  
  let detailsHTML = '';
  info.details.forEach(([label, value]) => {
    detailsHTML += `
      <div class="detail-label">${label}:</div>
      <div class="detail-value">${value}</div>
    `;
  });
  
  infoPanel.innerHTML = `
    <h4>${info.title}</h4>
    <p class="status status--info">${info.type}</p>
    <div class="detail-grid">
      ${detailsHTML}
    </div>
  `;
}

// Helper functions
function getNetworkFilter(network) {
  const networkMap = {
    'Tesla': 'tesla',
    'Electrify America': 'electrify-america',
    'Rivian': 'rivian'
  };
  return networkMap[network] || 'tesla';
}

function getChainFilter(chain) {
  const chainMap = {
    'Chipotle': 'chipotle',
    'Habit Burger': 'habit-burger',
    'Chick-fil-A': 'chick-fil-a',
    'Panda Express': 'panda-express',
    'Panera': 'panera'
  };
  return chainMap[chain] || 'chipotle';
}
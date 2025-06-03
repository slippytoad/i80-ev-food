// Tesla Supercharger Map Application
class TeslaMapApp {
    constructor() {
        this.map = null;
        this.teslaMarkers = [];
        this.restaurantMarkers = [];
        this.routeLine = null;
        this.data = null;
        
        this.init();
    }

    async init() {
        this.setupData();
        this.initMap();
        this.createMarkers();
        this.drawRoute();
        this.setupEventListeners();
        this.updateStatistics();
    }

    setupData() {
        // Tesla locations and restaurant data from the provided JSON
        this.data = {"tesla_locations": [{"name": "Oakland - Hegenberger Road", "address": "Hegenberger Road, Oakland, CA", "lat": 37.7698, "lng": -122.2758, "chargers": 12, "power": "150kW", "restaurants": []}, {"name": "Emeryville - Christie Ave", "address": "Christie Ave, Emeryville, CA", "lat": 37.8315, "lng": -122.2922, "chargers": 12, "power": "150kW", "restaurants": []}, {"name": "Alameda South Shore Center", "address": "523 South Shore Center West, Alameda, CA 94501", "lat": 37.7726, "lng": -122.2661, "chargers": 12, "power": "150kW", "restaurants": ["Panda Express", "Chipotle", "Panera"]}, {"name": "Fairfield - Travis Boulevard/Solano Town Center", "address": "1350 Travis Blvd, Fairfield, CA 94533", "lat": 38.2574, "lng": -122.0654, "chargers": 12, "power": "150kW", "restaurants": ["Panda Express", "Chick-fil-A"]}, {"name": "Fairfield - Holiday Lane", "address": "Holiday Lane, Fairfield, CA", "lat": 38.2501, "lng": -122.0539, "chargers": 12, "power": "150kW", "restaurants": []}, {"name": "Vacaville - Nut Tree Road", "address": "321 Nut Tree Road, Vacaville, CA 95687", "lat": 38.3566, "lng": -121.9877, "chargers": 16, "power": "150kW", "restaurants": ["Panda Express", "Chipotle", "Panera"]}, {"name": "Vacaville - Alamo Drive", "address": "Alamo Drive, Vacaville, CA", "lat": 38.3542, "lng": -121.9654, "chargers": 12, "power": "250kW", "restaurants": []}, {"name": "Vacaville - Harbison Drive", "address": "Harbison Drive, Vacaville, CA", "lat": 38.3601, "lng": -121.9742, "chargers": 12, "power": "250kW", "restaurants": []}, {"name": "Davis", "address": "Davis, CA", "lat": 38.5449, "lng": -121.7405, "chargers": 8, "power": "150kW", "restaurants": []}, {"name": "Sacramento - Arden Way", "address": "Arden Way, Sacramento, CA", "lat": 38.5949, "lng": -121.4289, "chargers": 12, "power": "150kW", "restaurants": ["Chick-fil-A"]}, {"name": "Sacramento - Point West Way", "address": "Point West Way, Sacramento, CA", "lat": 38.5816, "lng": -121.4944, "chargers": 10, "power": "150kW", "restaurants": []}, {"name": "Sacramento - Freeport Boulevard", "address": "Freeport Boulevard, Sacramento, CA", "lat": 38.5382, "lng": -121.4944, "chargers": 8, "power": "150kW", "restaurants": []}, {"name": "Folsom - Palladio Parkway", "address": "Palladio Parkway, Folsom, CA", "lat": 38.669, "lng": -121.176, "chargers": 30, "power": "250kW", "restaurants": ["Panera"]}, {"name": "Loomis - Raley's", "address": "Loomis, CA", "lat": 38.8185, "lng": -121.1858, "chargers": 8, "power": "250kW", "restaurants": []}, {"name": "Rocklin - Granite Drive", "address": "4800 Granite Drive, Rocklin, CA 95677", "lat": 38.7906, "lng": -121.2358, "chargers": 12, "power": "250kW", "restaurants": ["Panda Express", "Habit Burger"]}, {"name": "Rocklin (SC) - Granite Drive", "address": "4361 Granite Drive, Rocklin, CA 95677", "lat": 38.7889, "lng": -121.2344, "chargers": 18, "power": "250kW", "restaurants": []}, {"name": "Roseville - Galleria Boulevard", "address": "Galleria Boulevard, Roseville, CA", "lat": 38.7312, "lng": -121.288, "chargers": 7, "power": "150kW", "restaurants": ["Chick-fil-A"]}, {"name": "Auburn - Bowman Road", "address": "13431 Bowman Road, Auburn, CA 95603", "lat": 38.914, "lng": -121.0773, "chargers": 12, "power": "250kW", "restaurants": ["Panda Express", "Chick-fil-A"]}, {"name": "Auburn - Lincoln Way", "address": "13446 Lincoln Way, Auburn, CA 95603", "lat": 38.9165, "lng": -121.0801, "chargers": 12, "power": "150kW", "restaurants": []}, {"name": "Truckee - Donner Pass Road", "address": "11290 Donner Pass Rd, Truckee, CA 96161", "lat": 39.3274, "lng": -120.2074, "chargers": 11, "power": "150kW", "restaurants": ["Panda Express"]}, {"name": "Truckee - Soaring Way", "address": "Soaring Way, Truckee, CA 96161", "lat": 39.3301, "lng": -120.2045, "chargers": 12, "power": "250kW", "restaurants": []}], "restaurant_details": {"Panda Express": [{"name": "Alameda South Shore Center", "address": "2630 Fifth Street, Alameda, CA", "lat": 37.7721, "lng": -122.2665}, {"name": "Fairfield Gateway", "address": "1630 Gateway Blvd Suite A, Fairfield, CA", "lat": 38.2569, "lng": -122.0648}, {"name": "Vacaville Nut Tree", "address": "Nut Tree area, Vacaville, CA", "lat": 38.357, "lng": -121.988}, {"name": "Rocklin", "address": "5414 Crossings Drive, Rocklin, CA", "lat": 38.7902, "lng": -121.2354}, {"name": "Auburn", "address": "2775 Grass Valley Highway, Auburn, CA", "lat": 38.9145, "lng": -121.0769}, {"name": "Truckee", "address": "11262 Donner Pass Road Suite A, Truckee, CA", "lat": 39.3271, "lng": -120.2071}], "Chick-fil-A": [{"name": "Fairfield Travis", "address": "1750 Travis Blvd, Fairfield, CA", "lat": 38.2571, "lng": -122.0651}, {"name": "Sacramento Arden", "address": "Sacramento Arden area, CA", "lat": 38.5945, "lng": -121.4285}, {"name": "Auburn Gold Rush", "address": "2755 Grass Valley Highway, Auburn, CA", "lat": 38.9142, "lng": -121.0771}, {"name": "Roseville Blue Oaks", "address": "1490 Blue Oaks Blvd, Roseville, CA", "lat": 38.7308, "lng": -121.2876}], "Panera": [{"name": "Alameda South Shore", "address": "South Shore Center, Alameda, CA", "lat": 37.7724, "lng": -122.2663}, {"name": "Vacaville", "address": "1637 E Monte Vista Ave, Vacaville, CA", "lat": 38.3568, "lng": -121.9875}, {"name": "Folsom Palladio", "address": "Palladio Parkway, Folsom, CA", "lat": 38.6688, "lng": -121.1758}], "Chipotle": [{"name": "Alameda South Shore", "address": "South Shore Center, Alameda, CA", "lat": 37.7722, "lng": -122.2667}, {"name": "Vacaville Nut Tree", "address": "1620 E Monte Vista Ave, Vacaville, CA", "lat": 38.3572, "lng": -121.9873}], "Habit Burger": [{"name": "Rocklin", "address": "4640 Sierra College Blvd, Rocklin, CA", "lat": 38.7904, "lng": -121.2356}]}};
    }

    initMap() {
        // Initialize the map centered on the I-80 corridor
        this.map = L.map('map').setView([38.5, -121.5], 8);

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(this.map);

        // Fit bounds to show the entire route
        const bounds = L.latLngBounds([
            [37.7, -122.3], // Southwest corner (Oakland area)
            [39.4, -120.1]  // Northeast corner (Truckee area)
        ]);
        this.map.fitBounds(bounds, { padding: [20, 20] });
    }

    createTeslaIcon() {
        return L.divIcon({
            className: 'tesla-marker-icon',
            html: `<div style="
                background: #e53e3e;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                border: 2px solid white;
                box-shadow: 0 2px 5px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 12px;
                font-weight: bold;
            ">⚡</div>`,
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });
    }

    createRestaurantIcon(type) {
        const colors = {
            'Panda Express': '#ff6b35',
            'Chick-fil-A': '#e53e3e',
            'Panera': '#38a169',
            'Chipotle': '#8b4513',
            'Habit Burger': '#3182ce'
        };

        return L.divIcon({
            className: `restaurant-marker-icon ${type.toLowerCase().replace(/[^a-z]/g, '')}`,
            html: `<div style="
                background: ${colors[type] || '#666'};
                width: 16px;
                height: 16px;
                border-radius: 50%;
                border: 2px solid white;
                box-shadow: 0 1px 3px rgba(0,0,0,0.3);
            "></div>`,
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });
    }

    createTeslaPopup(location) {
        let restaurantList = '';
        if (location.restaurants && location.restaurants.length > 0) {
            restaurantList = `
                <div class="popup-restaurants">
                    <h5>Walking Distance Restaurants:</h5>
                    <div class="popup-restaurant-list">
                        ${location.restaurants.map(r => `<div class="popup-restaurant-item">• ${r}</div>`).join('')}
                    </div>
                </div>
            `;
        }

        return `
            <div class="popup-title">${location.name}</div>
            <div class="popup-address">${location.address}</div>
            <div class="popup-details">
                <div class="popup-detail">
                    <span class="popup-label">Chargers:</span>
                    <span class="popup-value">${location.chargers} stalls</span>
                </div>
                <div class="popup-detail">
                    <span class="popup-label">Max Power:</span>
                    <span class="popup-value">${location.power}</span>
                </div>
            </div>
            ${restaurantList}
        `;
    }

    createRestaurantPopup(restaurant, type) {
        const nearbyTesla = this.findNearbyTeslaLocation(restaurant.lat, restaurant.lng);
        let teslaInfo = '';
        if (nearbyTesla) {
            teslaInfo = `
                <div class="popup-restaurants">
                    <h5>Nearby Tesla Charger:</h5>
                    <div class="popup-restaurant-item">• ${nearbyTesla.name}</div>
                    <div class="popup-restaurant-item" style="font-size: 11px; color: #666;">
                        ${nearbyTesla.chargers} stalls, ${nearbyTesla.power}
                    </div>
                </div>
            `;
        }

        return `
            <div class="popup-title">${restaurant.name}</div>
            <div class="popup-address">${restaurant.address}</div>
            <div class="popup-details">
                <div class="popup-detail">
                    <span class="popup-label">Restaurant Type:</span>
                    <span class="popup-value">${type}</span>
                </div>
            </div>
            ${teslaInfo}
        `;
    }

    findNearbyTeslaLocation(lat, lng) {
        // Find Tesla location within reasonable distance (approximately 0.5 miles)
        const threshold = 0.008; // roughly 0.5 miles in degrees
        return this.data.tesla_locations.find(tesla => {
            const distance = Math.sqrt(
                Math.pow(tesla.lat - lat, 2) + Math.pow(tesla.lng - lng, 2)
            );
            return distance < threshold;
        });
    }

    createMarkers() {
        // Clear existing markers
        this.teslaMarkers = [];
        this.restaurantMarkers = [];

        // Create Tesla Supercharger markers
        this.data.tesla_locations.forEach(location => {
            const marker = L.marker([location.lat, location.lng], {
                icon: this.createTeslaIcon()
            }).bindPopup(this.createTeslaPopup(location));

            marker.teslaData = location;
            marker.markerType = 'tesla';
            marker.isVisible = true;
            this.teslaMarkers.push(marker);
            marker.addTo(this.map);
        });

        // Create restaurant markers
        Object.entries(this.data.restaurant_details).forEach(([type, restaurants]) => {
            restaurants.forEach(restaurant => {
                const marker = L.marker([restaurant.lat, restaurant.lng], {
                    icon: this.createRestaurantIcon(type)
                }).bindPopup(this.createRestaurantPopup(restaurant, type));

                marker.restaurantData = restaurant;
                marker.restaurantType = type;
                marker.markerType = 'restaurant';
                marker.isVisible = true;
                this.restaurantMarkers.push(marker);
                marker.addTo(this.map);
            });
        });
    }

    drawRoute() {
        // Create a simplified I-80 route line
        const routePoints = this.data.tesla_locations
            .sort((a, b) => a.lng - b.lng) // Sort by longitude (west to east)
            .map(location => [location.lat, location.lng]);

        this.routeLine = L.polyline(routePoints, {
            color: '#3182ce',
            weight: 4,
            opacity: 0.7,
            smoothFactor: 1
        }).addTo(this.map);
    }

    setupEventListeners() {
        // Panel toggles
        document.getElementById('toggleControls').addEventListener('click', () => {
            this.togglePanel('controlsContent', 'toggleControls');
        });

        document.getElementById('toggleInfo').addEventListener('click', () => {
            this.togglePanel('infoContent', 'toggleInfo');
        });

        // Filter checkboxes
        document.getElementById('showTesla').addEventListener('change', (e) => {
            this.toggleTeslaMarkers(e.target.checked);
        });

        document.getElementById('showOnlyWithRestaurants').addEventListener('change', (e) => {
            this.filterTeslaByRestaurants(e.target.checked);
        });

        // Restaurant type filters
        ['PandaExpress', 'ChickFilA', 'Panera', 'Chipotle', 'HabitBurger'].forEach(type => {
            const element = document.getElementById(`show${type}`);
            if (element) {
                element.addEventListener('change', (e) => {
                    this.toggleRestaurantType(type, e.target.checked);
                });
            }
        });

        // Quick action buttons
        document.getElementById('showAll').addEventListener('click', () => {
            this.showAllMarkers();
        });

        document.getElementById('clearAll').addEventListener('click', () => {
            this.hideAllMarkers();
        });
    }

    togglePanel(contentId, toggleId) {
        const content = document.getElementById(contentId);
        const toggle = document.getElementById(toggleId);
        
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            toggle.textContent = 'Hide';
        } else {
            content.classList.add('hidden');
            toggle.textContent = 'Show';
        }
    }

    toggleTeslaMarkers(show) {
        this.teslaMarkers.forEach(marker => {
            if (show) {
                if (!this.map.hasLayer(marker)) {
                    marker.addTo(this.map);
                }
                marker.isVisible = true;
            } else {
                if (this.map.hasLayer(marker)) {
                    this.map.removeLayer(marker);
                }
                marker.isVisible = false;
            }
        });
    }

    filterTeslaByRestaurants(onlyWithRestaurants) {
        this.teslaMarkers.forEach(marker => {
            const hasRestaurants = marker.teslaData.restaurants && marker.teslaData.restaurants.length > 0;
            
            if (onlyWithRestaurants) {
                if (hasRestaurants) {
                    if (!this.map.hasLayer(marker)) {
                        marker.addTo(this.map);
                    }
                    marker.isVisible = true;
                } else {
                    if (this.map.hasLayer(marker)) {
                        this.map.removeLayer(marker);
                    }
                    marker.isVisible = false;
                }
            } else {
                // Show all Tesla markers if main Tesla checkbox is checked
                if (document.getElementById('showTesla').checked) {
                    if (!this.map.hasLayer(marker)) {
                        marker.addTo(this.map);
                    }
                    marker.isVisible = true;
                }
            }
        });
    }

    toggleRestaurantType(type, show) {
        const typeMap = {
            'PandaExpress': 'Panda Express',
            'ChickFilA': 'Chick-fil-A',
            'Panera': 'Panera',
            'Chipotle': 'Chipotle',
            'HabitBurger': 'Habit Burger'
        };

        const restaurantType = typeMap[type];
        
        this.restaurantMarkers.forEach(marker => {
            if (marker.restaurantType === restaurantType) {
                if (show) {
                    if (!this.map.hasLayer(marker)) {
                        marker.addTo(this.map);
                    }
                    marker.isVisible = true;
                } else {
                    if (this.map.hasLayer(marker)) {
                        this.map.removeLayer(marker);
                    }
                    marker.isVisible = false;
                }
            }
        });
    }

    showAllMarkers() {
        // Check all checkboxes
        document.getElementById('showTesla').checked = true;
        document.getElementById('showOnlyWithRestaurants').checked = false;
        ['PandaExpress', 'ChickFilA', 'Panera', 'Chipotle', 'HabitBurger'].forEach(type => {
            const element = document.getElementById(`show${type}`);
            if (element) element.checked = true;
        });

        // Show all markers
        this.teslaMarkers.forEach(marker => {
            if (!this.map.hasLayer(marker)) {
                marker.addTo(this.map);
            }
            marker.isVisible = true;
        });
        this.restaurantMarkers.forEach(marker => {
            if (!this.map.hasLayer(marker)) {
                marker.addTo(this.map);
            }
            marker.isVisible = true;
        });
    }

    hideAllMarkers() {
        // Uncheck all checkboxes
        document.getElementById('showTesla').checked = false;
        document.getElementById('showOnlyWithRestaurants').checked = false;
        ['PandaExpress', 'ChickFilA', 'Panera', 'Chipotle', 'HabitBurger'].forEach(type => {
            const element = document.getElementById(`show${type}`);
            if (element) element.checked = false;
        });

        // Hide all markers
        this.teslaMarkers.forEach(marker => {
            if (this.map.hasLayer(marker)) {
                this.map.removeLayer(marker);
            }
            marker.isVisible = false;
        });
        this.restaurantMarkers.forEach(marker => {
            if (this.map.hasLayer(marker)) {
                this.map.removeLayer(marker);
            }
            marker.isVisible = false;
        });
    }

    updateStatistics() {
        // Count restaurants by type
        const restaurantCounts = {
            'Panda Express': this.data.restaurant_details['Panda Express']?.length || 0,
            'Chick-fil-A': this.data.restaurant_details['Chick-fil-A']?.length || 0,
            'Panera': this.data.restaurant_details['Panera']?.length || 0,
            'Chipotle': this.data.restaurant_details['Chipotle']?.length || 0,
            'Habit Burger': this.data.restaurant_details['Habit Burger']?.length || 0
        };

        // Update restaurant count displays
        document.getElementById('pandaCount').textContent = restaurantCounts['Panda Express'];
        document.getElementById('chickFilACount').textContent = restaurantCounts['Chick-fil-A'];
        document.getElementById('paneraCount').textContent = restaurantCounts['Panera'];
        document.getElementById('chipotleCount').textContent = restaurantCounts['Chipotle'];
        document.getElementById('habitCount').textContent = restaurantCounts['Habit Burger'];

        // Count locations with restaurants
        const locationsWithRestaurants = this.data.tesla_locations.filter(
            location => location.restaurants && location.restaurants.length > 0
        ).length;
        document.getElementById('restaurantLocationsCount').textContent = locationsWithRestaurants;
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TeslaMapApp();
});
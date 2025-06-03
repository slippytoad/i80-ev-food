# Update the charging stations data to include Rivian stations
charging_stations_data_with_rivian = {
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
}

# Save the data as JSON for the map application
import json

map_data = json.dumps(charging_stations_data_with_rivian, indent=2)
print("Data structure created successfully for interactive map!")
print(f"Total charging stations: {sum(len(stations) for stations in charging_stations_data_with_rivian.values())}")
print(f"Cities covered: {len(charging_stations_data_with_rivian)}")

# Count total restaurants
total_restaurants = sum(len(station['nearby_restaurants']) for city_data in charging_stations_data_with_rivian.values() for station in city_data.values())
print(f"Total restaurants: {total_restaurants}")
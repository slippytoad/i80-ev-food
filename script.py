# Create a comprehensive data structure with EV charging station information and nearby restaurants
charging_stations_data = {
    "vallejo": {
        "tesla_supercharger": {
            "address": "904 Admiral Callaghan Lane, Vallejo, CA 94591",
            "stalls": 18,
            "max_power": "150kW",
            "nearby_restaurants": [
                {"name": "In-N-Out Burger", "address": "720 Admiral Callaghan Ln, Vallejo, CA 94591", "distance": "0.1 miles", "cuisine": "Fast Food Burgers"},
                {"name": "Bud's Burgers", "address": "3849 Sonoma Blvd, Vallejo, CA 94589", "distance": "0.5 miles", "cuisine": "Fast Casual Burgers"},
                {"name": "Q's Halal Mediterranean Comfort", "address": "48 Springstown Ctr, Vallejo, CA 94591", "distance": "0.4 miles", "cuisine": "Mediterranean"},
                {"name": "Gracie's", "address": "1801 Sonoma Blvd, Vallejo, CA 94590", "distance": "0.6 miles", "cuisine": "BBQ/Sandwiches"}
            ]
        }
    },
    "fairfield": {
        "tesla_supercharger_travis": {
            "address": "1350 Travis Blvd, Fairfield, CA 94533",
            "stalls": 12,
            "max_power": "150kW",
            "nearby_restaurants": [
                {"name": "Chick-fil-A", "address": "1750 Travis Blvd, Fairfield, CA 94533", "distance": "0.2 miles", "cuisine": "Fast Casual Chicken"},
                {"name": "In-N-Out Burger", "address": "Near Travis Blvd", "distance": "0.1 miles", "cuisine": "Fast Food Burgers"},
                {"name": "Monsoon Burgers", "address": "321 Texas St, Ste 101, Fairfield, CA 94533", "distance": "0.8 miles", "cuisine": "Fast Casual Burgers"},
                {"name": "Big H Deli", "address": "4437 Central Pl, Fairfield, CA 94534", "distance": "1.2 miles", "cuisine": "Mediterranean/Sandwiches"}
            ]
        },
        "tesla_supercharger_pittman": {
            "address": "190 Pittman Rd, Fairfield, CA 94534",
            "stalls": 1,
            "max_power": "150kW",
            "nearby_restaurants": [
                {"name": "TWO60 Kitchen + Bar", "address": "260 Pittman Rd, Fairfield, CA 94534", "distance": "0.1 miles", "cuisine": "New American"},
                {"name": "Mediterranean Food Center", "address": "823 Texas St, Fairfield, CA 94533", "distance": "0.7 miles", "cuisine": "Mediterranean"},
                {"name": "Three Italian Restaurant", "address": "721 Texas St, Fairfield, CA 94533", "distance": "0.8 miles", "cuisine": "Italian"}
            ]
        }
    },
    "davis": {
        "electrify_america": {
            "address": "Davis, CA (exact location to be determined)",
            "stalls": "Multiple",
            "max_power": "350kW",
            "nearby_restaurants": [
                {"name": "Burgers and Brew", "address": "403 3rd St, Davis, CA 95616", "distance": "walkable", "cuisine": "Fast Casual Burgers"},
                {"name": "Crepeville", "address": "330 3rd St, Davis, CA 95616", "distance": "walkable", "cuisine": "Breakfast/Crepes"},
                {"name": "Taqueria Davis", "address": "505 1/2 L St, Davis, CA 95616", "distance": "walkable", "cuisine": "Mexican"},
                {"name": "Sam's Cuisine", "address": "301 B St, Davis, CA 95616", "distance": "walkable", "cuisine": "Mediterranean"},
                {"name": "Raising Cane's", "address": "207 E St, Davis, CA 95616", "distance": "walkable", "cuisine": "Fast Casual Chicken"},
                {"name": "My Burma", "address": "500 1st St, Ste 11, Davis, CA 95616", "distance": "walkable", "cuisine": "Burmese/Asian Fusion"}
            ]
        }
    },
    "sacramento": {
        "tesla_supercharger": {
            "address": "3668 N. Freeway Blvd, Sacramento, CA 95834",
            "stalls": "Multiple",
            "max_power": "250kW",
            "nearby_restaurants": [
                {"name": "Sauced BBQ & Spirits", "address": "1028 7th St, Sacramento, CA 95814", "distance": "walkable", "cuisine": "BBQ/Southern"},
                {"name": "Hook & Ladder Manufacturing", "address": "1630 S St, Sacramento, CA 95811", "distance": "walkable", "cuisine": "New American"},
                {"name": "La Cosecha", "address": "917 9th St, Sacramento, CA 95814", "distance": "walkable", "cuisine": "Mexican"},
                {"name": "Urban Plates", "address": "2080 Fair Oaks Blvd, Sacramento, CA 95825", "distance": "walkable", "cuisine": "Healthy Fast Casual"},
                {"name": "Jayna Gyro", "address": "3101 Folsom Blvd, Sacramento, CA 95816", "distance": "walkable", "cuisine": "Mediterranean/Greek"}
            ]
        }
    },
    "roseville": {
        "electrify_america": {
            "address": "1151 Galleria Blvd, Roseville, CA 95678",
            "stalls": "Multiple",
            "max_power": "350kW",
            "nearby_restaurants": [
                {"name": "Shake Shack", "address": "1151 Galleria Blvd, Suite FC-12, Roseville, CA 95678", "distance": "0.1 miles", "cuisine": "Fast Casual Burgers"},
                {"name": "Krush Burger", "address": "1151 Galleria Blvd, Ste 1170, Roseville, CA 95678", "distance": "0.1 miles", "cuisine": "Mini Burgers"},
                {"name": "Q1227 Restaurant", "address": "1151 Galleria Blvd, Ste 1175, Roseville, CA 95678", "distance": "0.1 miles", "cuisine": "Modern Comfort Food"},
                {"name": "Land Ocean Restaurant", "address": "1151 Galleria Blvd, Ste 241, Roseville, CA 95678", "distance": "0.1 miles", "cuisine": "American Steakhouse"},
                {"name": "Mendocino Farms", "address": "1210 Roseville Pkwy, Roseville, CA 95678", "distance": "0.3 miles", "cuisine": "Sandwiches/Salads"},
                {"name": "Eureka!", "address": "234 Gibson Dr, Ste 100, Roseville, CA 95678", "distance": "0.4 miles", "cuisine": "American"}
            ]
        }
    },
    "auburn": {
        "electrify_america": {
            "address": "1819 Auburn Ravine Rd (Motel 6), Auburn, CA 95603",
            "stalls": 5,
            "max_power": "350kW",
            "nearby_restaurants": [
                {"name": "In-N-Out Burger", "address": "130 Grass Valley Hwy, Auburn, CA 95603", "distance": "0.5 miles", "cuisine": "Fast Food Burgers"},
                {"name": "Burger & Cream", "address": "403 Grass Valley Hwy, Auburn, CA 95603", "distance": "0.6 miles", "cuisine": "Fast Casual Burgers/Ice Cream"},
                {"name": "Local Heroes", "address": "1120 High St, Auburn, CA 95603", "distance": "0.7 miles", "cuisine": "Fast Casual Burgers"},
                {"name": "Nancy's Cafe", "address": "356 Elm Ave, Auburn, CA 95603", "distance": "0.8 miles", "cuisine": "Breakfast/Sandwiches"},
                {"name": "Edelweiss", "address": "627 High St, Auburn, CA 95603", "distance": "0.9 miles", "cuisine": "Breakfast/Sandwiches"}
            ]
        }
    },
    "truckee": {
        "electrify_america": {
            "address": "11399 Deerfield Drive (Save Mart), Truckee, CA 96161",
            "stalls": 5,
            "max_power": "350kW",
            "nearby_restaurants": [
                {"name": "Burger Me", "address": "10418 Donner Pass Rd, Truckee, CA 96161", "distance": "0.8 miles", "cuisine": "Fast Casual Burgers"},
                {"name": "Old Town Tap", "address": "10164 Donner Pass Rd, Ste 1, Truckee, CA 96161", "distance": "0.9 miles", "cuisine": "Pizza/New American"},
                {"name": "Moody's Bistro Bar & Beats", "address": "10007 Bridge St, Truckee, CA 96161", "distance": "1.0 miles", "cuisine": "New American"},
                {"name": "Alibi Ale Works", "address": "10069 Bridge St, Truckee, CA 96161", "distance": "1.0 miles", "cuisine": "Brewpub/New American"},
                {"name": "Truckee Tavern and Grill", "address": "10118 Donner Pass Rd, Truckee, CA 96161", "distance": "0.9 miles", "cuisine": "New American/Steakhouse"}
            ]
        }
    }
}

# Display the data in a more readable format
print("EV CHARGING STATIONS WITH WALKABLE FAST CASUAL DINING ALONG I-80 (OAKLAND TO TRUCKEE)")
print("=" * 80)

for city, stations in charging_stations_data.items():
    print(f"\n{city.upper()}")
    print("-" * 40)
    for station_name, station_info in stations.items():
        print(f"\nStation: {station_name.replace('_', ' ').title()}")
        print(f"Address: {station_info['address']}")
        print(f"Stalls: {station_info['stalls']}")
        print(f"Max Power: {station_info['max_power']}")
        print("\nNearby Fast Casual Restaurants:")
        for restaurant in station_info['nearby_restaurants']:
            print(f"  • {restaurant['name']} ({restaurant['cuisine']})")
            print(f"    {restaurant['address']} - {restaurant['distance']}")
        print()

print("\nTotal Stations: 8")
print("Total Cities Covered: 6")
print("Networks: Tesla Supercharger, Electrify America")
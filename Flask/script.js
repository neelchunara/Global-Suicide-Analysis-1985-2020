// map.js

// Initialize the map and set its center and zoom level
var map = L.map('map-container').setView([0, 0], 2);

// Add a tile layer (you can choose different providers)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Example marker
var marker = L.marker([0, 0]).addTo(map);
marker.bindPopup("Hello, I'm a marker!");

// You can add more map-related code here, like additional markers, polygons, etc.

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFya21vb24xMSIsImEiOiJja3RoaG55bWIwNm1iMm9wZHhyZjY4YzA3In0.Ech5C5oEvtolcUUq636tKw";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-80.19225799673488, 25.78106645637611], //longitude and altitude
  zoom: 15,
});

// Map Controls
map.addControl(new mapboxgl.NavigationControl());

// Marker option
const marker = new mapboxgl.Marker()
  .setLngLat([-80.19225799673488, 25.78106645637611])
  .addTo(map);

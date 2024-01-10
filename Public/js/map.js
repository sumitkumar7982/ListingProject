

mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: 'map', // container ID
  // Style:"mapbox://styles/mapbox/outdoors-v12",//style Url
  center: listing.geometry.coordinates, // starting position [lng, lat]
  zoom: 5 // starting zoom
});



const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(new mapboxgl.Popup({ offset: 25 })

    .setHTML(`<h4>${listing.location}</h4><p>Exact Location provided after Booking</p>`))
  .addTo(map);

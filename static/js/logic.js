
// API queryUrl
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

d3.json(queryUrl, function(data) {
  // createFeatures function
  createFeatures(data.features);
});

function createFeatures(earthquakeData) {

    // Define a function we want to run once for each feature in the features array
    // Give each feature a popup describing the place and time of the earthquake
    function onEachFeature(feature, layer) {
      layer.bindPopup("<h3>" + feature.properties.place + " " + feature.properties.mag +
        "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
    }
  
    // Create a GeoJSON layer containing the features array on the earthquakeData object
    // Run the onEachFeature function once for each piece of data in the array
    
    function mag_color(mag){
      if (mag >4)
          return "red"
      else if (mag >3.5)
          return "orange"
      else if (mag >3.0)
          return "yellow"
      else if (mag >2.5)
          return "blue"
      else if (mag >2.0)
          return "green"
      else if (mag >1.5)
          return "lightgreen"
      else if (mag >1.0)
          return "gray"
      else if (mag >0.5)
          return "black"
      else
          return "white"
  
  
    }
    
    
  
  
  
  };
//***
// For all functions that want to use any of the data in dataVars.js
// Use the format:
// dataPromise.then(()=> yourFunction())
// There is a some data cleaning that needs to happen before you use state or county summaries
//***
dataPromise.then(() => createHeatMap(map));

function createHeatMap(map) {
  //Adjusted to use globalData for consistency
    console.log(globalData);
  points = globalData.map((traffic) => [traffic.lat, traffic.lng]);
  // console.log(points);
  let heat = L.heatLayer(points, { radius: 3, blur: 5 });
  heat.addTo(map);
}

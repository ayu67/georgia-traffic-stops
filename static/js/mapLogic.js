//Map Renders Best in Firefox

let map = createMap();

function createMap() {
    let map = L.map("map", {
        center: [32.9, -83.251162],
        zoom:7,
        //Attempted to keep map movement over Georgia only
        //maxBounds:[[31,-84],[33,-82]]
    });
    return map
};

createLayers(map);

function createLayers(map) {
    let Standard = L.tileLayer(
      "https://api.mapbox.com/styles/v1/npvoravong/ckk674dh20fes17o003h2fj2k/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
      attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 10,
      accessToken: API_KEY,
  }
  );

  let dark = L.tileLayer(
    "https://api.mapbox.com/styles/v1/npvoravong/ckk789atq058v17od5oxukhq7/tiles/{z}/{x}/{y}?access_token={accessToken}",
{
    attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 10,
    accessToken: API_KEY,
}
);

    dark.addTo(map);

    let baseMaps = {
    "Street": Standard,
    "Dark": dark,
    };

    let overlays = {
    // "Counties": county,
    };

    L.control
    .layers(baseMaps, overlays, {
      collapsed: true,
    })
    .addTo(map);
};



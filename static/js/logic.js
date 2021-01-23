//Map Renders Best in Firefox

trafficData = d3.csv("data/traffic_stops_2016.csv");

let map = createMap();

function createMap() {
    let map = L.map("map", {
        center: [32.9, -83.251162],
        zoom:7,
    });
    return map
};

createLayers(map);

function createLayers(map) {
    let streetMap = L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
          tileSize: 512,
          maxZoom: 10,
          zoomOffset: -1,
          id: "mapbox/streets-v11",
          accessToken: API_KEY,
        }
      );

    let customMap = L.tileLayer(
        "https://api.mapbox.com/styles/v1/npvoravong/ckk789atq058v17od5oxukhq7/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
        attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 10,
        accessToken: API_KEY,
    }
    );

    customMap.addTo(map);

    let baseMaps = {
    "Street": streetMap,
    "Default": customMap,
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



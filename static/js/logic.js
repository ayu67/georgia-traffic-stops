//Map Renders Best in Firefox

let map = createMap();
addLayers(map);
createCounties(map);

function createMap() {
    let map = L.map("map", {
        center: [32.9, -83.251162],
        zoom:7,
    });
    return map
};

function addLayers(map) {
    let streetMap = L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
          tileSize: 512,
          maxZoom: 18,
          zoomOffset: -1,
          id: "mapbox/streets-v11",
          accessToken: API_KEY,
        }
      );
    let satelliteMap = L.tileLayer(
    "https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
        attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "satellite-streets-v11",
        accessToken: API_KEY,
    }
    );
    let lightMap = L.tileLayer(
        "https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "light-v10",
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
    "Light Map": lightMap,
    "Satellite Map": satelliteMap,
    "Street Map": streetMap,
    "Custom Map": customMap,
    };

    let mapLayers = {
    // Earthquake: earthquakes,
    };

    L.control
    .layers(baseMaps, mapLayers, {
      collapsed: true,
    })
    .addTo(map);
};

function createCounties(map){
    const geoJson = "data/Counties_Georgia.geojson"
    d3.json(geoJson).then(data =>{
        console.log(data);
        let options = {
            style: mapStyle,
            onEachFeature: onEachFeature,
        };
        let county = L.geoJSON(data, options);
        county.addTo(map);
    });
};

function mapStyle() {
    return {
      color: "white",
    //   fillColor: color(feature.properties.Reg_Comm),
      fillColor:"#ED44FA",
      fillOpacity: 0.5,
      weight: 1.5,
    };
  };

  function onEachFeature(feature,layer) {
    layer.on({
      mouseover: MouseOver,
      mouseout: MouseOut,
      click: onClick,
    });
    function MouseOver(event) {
      layer = event.target;
      layer.setStyle({
        fillOpacity: 0.9,
        fillColor:"#FA506A"
      });
    }
    function MouseOut(event) {
      layer = event.target;
      layer.setStyle({
        fillOpacity: 0.5,
        fillColor:"#ED44FA",
      });
    }
    function onClick(event) {
    //   console.log(event);
    //   layer = event.target;
    //   map.flyToBounds(layer.getBounds());
  }
  layer.bindPopup(function(){
      getCountySummary(feature.properties.NAMELSAD10);      
      return `<h3> ${countySummary.name} 
          </h3>
          <h4>Total Stops: ${countySummary.stops.length}</h4>
          `;
    });
  };

  (function(){
    var originalInitTile = L.GridLayer.prototype._initTile
    L.GridLayer.include({
        _initTile: function (tile) {
            originalInitTile.call(this, tile);

            var tileSize = this.getTileSize();

            tile.style.width = tileSize.x + 1 + 'px';
            tile.style.height = tileSize.y + 1 + 'px';
        }
    });
})()
renderChoropleth(map);

function renderChoropleth(map){
    const geoJson = "data/Counties_Georgia.geojson"
    d3.json(geoJson).then(data =>{
        console.log(data);
        let options = {
            style:choroplethStyle,
            onEachFeature: onEachFeature,
        };
        let county = L.geoJSON(data, options);
        county.addTo(map);
  
    });

    function getColor(d) {
        return d > 300000 ? '#800026' :
               d > 100000  ? '#BD0026' :
               d > 50000  ? '#E31A1C' :
               d > 25000  ? '#FC4E2A' :
               d > 10000   ? '#FD8D3C' :
               d > 7000   ? '#FEB24C' :
               d > 3000   ? '#FED976' :
                          '#FFEDA0';
      };
      
      function choroplethStyle(feature) {
        return {
          color: "white",
          fillColor: getColor(feature.properties.totpop10),
          fillOpacity: 0.7,
          weight: 1.5,
          dashArray: '3',
          opacity: 1,
        };
      };

      function onEachFeature(feature,layer) {
        let geojson = L.geoJSON();
        layer.on({
        //   mouseover: highlightFeature,
        //   mouseout:  resetHighlight,
          click: onClick,
        });
    
        function highlightFeature(e) {
            var layer = e.target;
        
            layer.setStyle({
                weight: 5,
                color: '#666',
                dashArray: '',
                fillOpacity: 0.7
            });
        };
        
        function resetHighlight() {
            geojson.resetStyle(choroplethStyle);
        };
    
        function onClick(event) {
            console.log(event);
        };
    
        layer.bindPopup(
            `<h2> ${feature.properties.NAMELSAD10} </h3>
            <hr> <h4>Population (2010): ${feature.properties.totpop10} <//h3>`
            );
    };
  };
  
  



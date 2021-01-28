dataPromise.then(() => renderChoropleth(map));

function renderChoropleth(map){
    var geoJson = '/geojson'

    fetch('/geojson').then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log('GET response text:');
        console.log(text); 
    });
    
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
          // dashArray: '3',
          opacity: 1,
        };
      };

      function onEachFeature(feature,layer) {
        let geojson = L.geoJSON();
        layer.on({
          // mouseover: highlightFeature,
          mouseout:  resetHighlight,
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
            geojson.resetStyle();
        };
    
        function onClick(event) {
            console.log(event);
        };
      layer.bindPopup(function(){
        getCountySummary(feature.properties.NAMELSAD10);
        //Added link to County Dashboard      
        return `<a href="countySummary.html?county=${countySummary.name}" target="_blank" rel="noopener noreferrer"><h1> ${countySummary.name} </h1></a>
        <h4>Click County Name for more detailed stats</h4> <hr> <h4>Population (2010): ${feature.properties.totpop10} </h4>
            <h4>Total Stops: ${countySummary.totalStops}</h4>
            `;
      });
    };
  };

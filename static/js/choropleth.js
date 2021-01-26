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
    
        // layer.bindPopup(
        //     `<h2> ${feature.properties.NAMELSAD10} </h3>
        //     <hr> <h4>Population (2010): ${feature.properties.totpop10} <//h3>`
        //     );

            // layer.bindPopup(function(){
      layer.bindPopup(function(){
        getCountySummary(feature.properties.NAMELSAD10);
        //Added link to County Dashboard      
        return `<a href="countySummary.html?county=${countySummary.name}"><h3> ${countySummary.name} </h3></a>
        <hr> <h4>Population (2010): ${feature.properties.totpop10} <//h4>
            <h4>Total Stops: ${countySummary.totalStops}</h4>
            `;
      });
    // });
    // };
    };
  };


//   function onEachFeature(feature,layer) {
//     layer.on({
//       mouseover: MouseOver,
//       mouseout: MouseOut,
//       click: onClick,
//     });
//     function MouseOver(event) {
//       layer = event.target;
//       layer.setStyle({
//         fillOpacity: 0.9,
//         fillColor:"#FA506A"
//       });
//     }
//     function MouseOut(event) {
//       layer = event.target;
//       layer.setStyle({
//         fillOpacity: 0.5,
//         fillColor:"#ED44FA",
//       });
//     }
//     function onClick(event) {
//       console.log(event);
//   }
// };

  
/* Code for adding graphs to popups. Not working yet */  
//   // Bind popup to layer with div as content
//   layer.bindPopup('<div id="chart"></div>');
  
//   // Handle event when popup opens
//   layer.on('popupopen', function (e) {

//       console.log(e.target);  // layer object
//       console.log(e.target.feature); // layer's feature object
//       console.log(e.popup); // popup object
//       console.log(e.popup.getContent()); // the div

//       let trace = {

//       }
      
//       Plotly.newPlot('chart', 
//       [{
//         x:
//         y: 
//         type: 'bar',

//       }], 
//       {
//         autosize: false,
//         width: 300,
//         height: 150,
//         margin: {
//             l: 0,
//             r: 0,
//             b: 0,
//             t: 0,
//             pad: 0
//         }
//       });
//   });
// };


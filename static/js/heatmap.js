createHeatMap(map)

function createHeatMap(map){
    trafficData.then(data =>{
        // console.log(data)
        points = data.map(traffic =>[
            traffic.lat,
            traffic.lng,
        ]);
        // console.log(points);
        let heat = L.heatLayer(points, { radius: 3, blur: 5 })
        heat.addTo(map);
    });
};
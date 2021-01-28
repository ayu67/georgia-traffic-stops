// Read the data from CSV
d3.json(url).then (function(data) {
    var data = sampledata
    // var asian = data.subject_race.filter(function(d){return d === 'asian/pacific islander'});
 
    var data_male = data.filter(element => element.subject_sex === 'male')
    var data_female = data.filter(element => element.subject_sex === 'female')
    
    demographic_male = []
    demographic_female = []
    data_male.forEach(element => demographic_male.push(element.subject_race))
    data_female.forEach(element => demographic_female.push(element.subject_race))

    console.log(demographic_male)
    console.log(demographic_female)

    var asian_m = demographic_male.filter(function(d){return d === 'asian/pacific islander'}).length;
    var black_m = demographic_male.filter(function(d){return d === 'black'}).length;
    var hispanic_m = demographic_male.filter(function(d){return d === 'hispanic'}).length;
    var white_m = demographic_male.filter(function(d){return d === 'white'}).length;
    var other_m = demographic_male.filter(function(d){return d === 'other'}).length;
    console.log(asian_m)
    console.log(black_m)
    console.log(hispanic_m)
    console.log(white_m)
    console.log(other_m)

    var asian_f = demographic_female.filter(function(d){return d === 'asian/pacific islander'}).length;
    var black_f = demographic_female.filter(function(d){return d === 'black'}).length;
    var hispanic_f = demographic_female.filter(function(d){return d === 'hispanic'}).length;
    var white_f = demographic_female.filter(function(d){return d === 'white'}).length;
    var other_f = demographic_female.filter(function(d){return d === 'other'}).length;
    console.log(asian_f)
    console.log(black_f)
    console.log(hispanic_f)
    console.log(white_f)
    console.log(other_f)

    trace1 = {
            x: ['asian', 'black', 'hispanic', 'white', 'other'],
            y: [asian_m, black_m, hispanic_m, white_m, other_m],
            name: 'male',
            type: 'bar'
        }

        trace2 = {
            x: ['asian', 'black', 'hispanic', 'white', 'other'],
            y: [asian_f, black_f, hispanic_f, white_f, other_f],
            name: 'female',
            type: 'bar'
        }

    var data4plot = [trace1, trace2];

    var layout = {
        title: 'Traffic Stops by Gender/Race',
        barmode: 'stack'};   
    
    Plotly.newPlot('plot', data4plot, layout);
})



    

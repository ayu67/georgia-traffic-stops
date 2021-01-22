d3.csv("data/traffic_stops_2016.csv").then(doTheThing);
globalData = 0;
unique = {};
countySummary = {};

function doTheThing(data)
{
    globalData = data
    getUniqueArrays();
    console.log(globalData);
}

//Collect Unique data to make menus easily
function getUniqueArrays()
{
    //Make arrays to hold unique values
    unique.county = []
    unique.sex = []
    unique.race = []
    unique.carColor = []
    unique.violation = []

    globalData.forEach(element => {
        if (!unique.county.includes(element.county_name))
        {
            unique.county.push(element.county_name);
        }
        if (!unique.sex.includes(element.subject_sex))
        {
            unique.sex.push(element.subject_sex);
        }
        if (!unique.race.includes(element.subject_race))
        {
            unique.race.push(element.subject_race);
        }
        if (!unique.carColor.includes(element.vehicle_color))
        {
            unique.carColor.push(element.vehicle_color);
        }
        //Split multiple violations into an array
        element.violation = element.violation.split("|");
        element.violation.forEach(v => {
            v = v.replace(/\s+/g,"").toUpperCase();
            if (!unique.violation.includes(v))
            {
                unique.violation.push(v);
            }
        });
    });

    unique.county.sort();
    unique.sex.sort();
    unique.race.sort();
    unique.carColor.sort();
    unique.violation.sort();

    console.log(unique);
}

function getCountySummary(county)
{
    countySummary.name = county;
    countySummary.stops = globalData.filter(el => el.county_name == county);
    console.log(countySummary.name + ": " + countySummary.stops.length);
}
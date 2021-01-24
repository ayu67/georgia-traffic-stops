d3.csv("data/traffic_stops_2016.csv").then(doTheThing);
globalData = []; 
globalUnique = {}; //Unique data for full data
countySummary = {};

function doTheThing(data)
{
    globalData = data
    globalUnique = getUniqueArrays(globalData);
    console.log(globalUnique);
}

//Return Unique data for any subset of stops data
function getUniqueArrays(stops)
{
    unique = {};
    //Make arrays to hold unique values
    unique.county = {}
    unique.sex = {}
    unique.race = {}
    unique.carColor = {}
    unique.violation = {}

    stops.forEach(element => {
        //County
        if (!Object.keys(unique.county).includes(element.county_name))
        {
            unique.county[element.county_name] = 1;
        }
        else{
            unique.county[element.county_name]++;
        }
        //Sex
        if (!Object.keys(unique.sex).includes(element.subject_sex))
        {
            unique.sex[element.subject_sex] = 1;
        }
        else{
            unique.sex[element.subject_sex]++;
        }
        //Race
        if (!Object.keys(unique.race).includes(element.subject_race))
        {
            unique.race[element.subject_race] = 1;
        }
        else{
            unique.race[element.subject_race]++;
        }
        //Car Color
        if (!Object.keys(unique.carColor).includes(element.vehicle_color))
        {
            unique.carColor[element.vehicle_color] = 1;
        }
        else
        {
            unique.carColor[element.vehicle_color]++;
        }

        //Split multiple violations into an array
        if((typeof element.violation) == "string")
            element.violation = element.violation.split("|");
        element.violation.forEach(v => {
            v = v.replace(/\s+/g,"").toUpperCase();
        if (!Object.keys(unique.violation).includes(v))
        {
            unique.violation[v] = 1;
        }
        else{
            unique.violation[v]++;
        }
        });
    });

    return unique;
}

//Fill in countySummary object
function getCountySummary(county) //county parameter is the name of the county as a string
{
    countySummary.name = county;
    countySummary.stops = globalData.filter(el => el.county_name == county);
    countySummary.unique = getUniqueArrays(countySummary.stops);
    
    console.log(countySummary);
}

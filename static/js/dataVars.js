// Prevent duplicate data loads
if(typeof globalData == "undefined"){
    globalData = []; 
    stateSummary = {}; //Unique data for full data
    countySummary = {};
    //Extended promise chain for csv data
    dataPromise = d3.json('/data').then(doTheThing);
}

function doTheThing(d)
{
    globalData = d.data;
    getStateSummary();
    globalData = stateSummary.stops;
    //Return simple resolved Promise to allow dataPromise.then() in other .js files
    return Promise.resolve();
}


//Return Unique data for any subset of stops data.
function getUniqueArrays(stops)
{
    unique = {};
    //Make arrays to hold unique values
    unique.county = {}
    unique.sex = {}
    unique.race = {}
    unique.carColor = {}
    unique.violation = {}
    unique.dates = {}

    stops.forEach(stop => {
        //County
        if (!Object.keys(unique.county).includes(stop.county_name)) //if(the county of this stop is NOT in the list of unique county keys)
        {
            unique.county[stop.county_name] = 1;
        }
        else{
            unique.county[stop.county_name]++;
        }
        //Sex
        if (!Object.keys(unique.sex).includes(stop.subject_sex))
        {
            unique.sex[stop.subject_sex] = 1;
        }
        else{
            unique.sex[stop.subject_sex]++;
        }
        //Race
        if (!Object.keys(unique.race).includes(stop.subject_race))
        {
            unique.race[stop.subject_race] = 1;
        }
        else{
            unique.race[stop.subject_race]++;
        }
        //Car Color
        if (!Object.keys(unique.carColor).includes(stop.vehicle_color))
        {
            unique.carColor[stop.vehicle_color] = 1;
        }
        else
        {
            unique.carColor[stop.vehicle_color]++;
        }
        //date
        if (!Object.keys(unique.dates).includes(stop.date))
        {
            unique.dates[stop.date] = 1;
        }
        else
        {
            unique.dates[stop.date]++;
        }
        //Split multiple violations into an array
        if((typeof stop.violation) == "string")
            stop.violation = stop.violation.split("|"); //Turn the one string into an array
        stop.violation.forEach(v => {
            v = v.replace(/\s+/g,"").toUpperCase(); //Force to uppercase and remove all spaces
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
    countySummary.totalStops = countySummary.stops.length;
    countySummary.unique = getUniqueArrays(countySummary.stops);
    
    //Added min/max keys and values
    countySummary.maxRace = Object.keys(countySummary.unique.race).reduce((a,b) => countySummary.unique.race[a] > countySummary.unique.race[b] ? a : b)
    countySummary.maxSex = Object.keys(countySummary.unique.sex).reduce((a,b) => countySummary.unique.sex[a] > countySummary.unique.sex[b] ? a : b)
    countySummary.maxViolation = Object.keys(countySummary.unique.violation).reduce((a,b) => countySummary.unique.violation[a] > countySummary.unique.violation[b] ? a : b)

    countySummary.minRace = Object.keys(countySummary.unique.race).reduce((a,b) => countySummary.unique.race[a] < countySummary.unique.race[b] ? a : b)
    countySummary.minSex = Object.keys(countySummary.unique.sex).reduce((a,b) => countySummary.unique.sex[a] < countySummary.unique.sex[b] ? a : b)
    countySummary.minViolation = Object.keys(countySummary.unique.violation).reduce((a,b) => countySummary.unique.violation[a] < countySummary.unique.violation[b] ? a : b)

    console.log(countySummary.unique);
}

//Fill in stateSummary object
function getStateSummary()
{
    stateSummary.name = "Georgia";
    stateSummary.stops = globalData;
    stateSummary.totalStops = stateSummary.stops.length;
    stateSummary.unique = getUniqueArrays(stateSummary.stops);
    
    stateSummary.maxRace = Object.keys(stateSummary.unique.race).reduce((a,b) => stateSummary.unique.race[a] > stateSummary.unique.race[b] ? a : b)
    stateSummary.maxSex = Object.keys(stateSummary.unique.sex).reduce((a,b) => stateSummary.unique.sex[a] > stateSummary.unique.sex[b] ? a : b)
    stateSummary.maxViolation = Object.keys(stateSummary.unique.violation).reduce((a,b) => stateSummary.unique.violation[a] > stateSummary.unique.violation[b] ? a : b)

    stateSummary.minRace = Object.keys(stateSummary.unique.race).reduce((a,b) => stateSummary.unique.race[a] < stateSummary.unique.race[b] ? a : b)
    stateSummary.minSex = Object.keys(stateSummary.unique.sex).reduce((a,b) => stateSummary.unique.sex[a] < stateSummary.unique.sex[b] ? a : b)
    stateSummary.minViolation = Object.keys(stateSummary.unique.violation).reduce((a,b) => stateSummary.unique.violation[a] < stateSummary.unique.violation[b] ? a : b)

    console.log(stateSummary);
}


//County Summary Dashboard Javascript

//Get county name from url query string
queryString = window.location.search;
urlParams = new URLSearchParams(queryString);
firstSel = "ALL" //Default value
if(urlParams.has("county")) //If we came from a map pop-up link
{
    firstSel = urlParams.get("county");
}

//Wait for data to be ready, the load options for the dropdown
dataPromise.then(() => loadCountySelector());

function optionChanged(value)
{
    //console.log(value);
    if(value == "ALL")
    {
        //Load State Data
        loadCountyInfo(stateSummary);
        createBarChart(stateSummary);
        createLineChart(stateSummary);
        //Feel Free to add Pie chart
    }
    else{
        //Load County Data
        getCountySummary(value);
        loadCountyInfo(countySummary);
        createBarChart(countySummary);
        createLineChart(countySummary);
        //Feel Free to add Pie chart
    }
}

function loadCountySelector()
{
    var select = d3.select("#selCounty")
    
    select.selectAll("option")
    .data(Object.keys(stateSummary.unique.county).sort()) //Take all of the keys for the counties
    .enter()
      .append("option") //... and create a new option for each of them
      .attr("value", function (v,i) { return v; }) //Using the county name as the value and text
      .text(function (v,i) { return v; });

    //Find the option that is firstSel and make it selected in the dropdown
    select.selectAll("option")
        .each(function(d,i){
            op = d3.select(this)
            county = op.attr("value");
            //console.log(county);
            if(county == firstSel)
            {
                op.attr("selected","selected");
            }
        });
    
    //Trigger first call of optionChanged
    optionChanged(firstSel);
    }

    //Fill in panel data
function loadCountyInfo(summary)
{
    d3.select("#name")
        .text(summary.name);
    
    d3.select("#stops")
        .text("Total Stops: " + summary.totalStops);
    
    d3.select("#maxViolation")
        .text("Most Frequent Violation: " + summary.maxViolation + " ("+summary.unique.violation[summary.maxViolation]+")");

    d3.select("#maxDate")
    .text("Most Frequent Stop Date: " + summary.maxViolation + " ("+summary.unique.violation[summary.maxViolation]+")");
    
    // d3.select("#minViolation")
    //     .text("Least Frequent Violation: " + summary.minViolation + " ("+summary.unique.violation[summary.minViolation]+")");
        
    d3.select("#maxRace")
        .text("Most Stopped Race: " + summary.maxRace.toUpperCase() + " ("+summary.unique.race[summary.maxRace]+")");
        
    // d3.select("#minRace")
    //     .text("Least Stopped Race: " + summary.minRace.toUpperCase() + " ("+summary.unique.race[summary.minRace]+")");
        
    d3.select("#sex")
        .text("Most Stopped Gender: " + summary.maxSex.toUpperCase() + " ("+summary.unique.sex[summary.maxSex]+")");

}

//Create Violation by Race bar chart using JQWidgets library
function createBarChart(summary)
{
    topViolations = getTopTen(summary.unique.violation)
    console.log(topViolations);
    // console.log(summary.unique.dates);
    // prepare chart data
    var  sampleData = [
        { Violation:topViolations[0], White:getRaceCount(summary.stops,topViolations[0],"white"), Black:getRaceCount(summary.stops,topViolations[0],"black"), Hispanic: getRaceCount(summary.stops,topViolations[0],"hispanic"), Asian:getRaceCount(summary.stops,topViolations[0],"asian/pacific islander"), Other:getRaceCount(summary.stops,topViolations[0],"other")},
        { Violation:topViolations[1], White:getRaceCount(summary.stops,topViolations[1],"white"), Black:getRaceCount(summary.stops,topViolations[1],"black"), Hispanic: getRaceCount(summary.stops,topViolations[1],"hispanic"), Asian:getRaceCount(summary.stops,topViolations[1],"asian/pacific islander"), Other:getRaceCount(summary.stops,topViolations[1],"other")},
        { Violation:topViolations[2], White:getRaceCount(summary.stops,topViolations[2],"white"), Black:getRaceCount(summary.stops,topViolations[2],"black"), Hispanic: getRaceCount(summary.stops,topViolations[2],"hispanic"), Asian:getRaceCount(summary.stops,topViolations[2],"asian/pacific islander"), Other:getRaceCount(summary.stops,topViolations[2],"other")},
        { Violation:topViolations[3], White:getRaceCount(summary.stops,topViolations[3],"white"), Black:getRaceCount(summary.stops,topViolations[3],"black"), Hispanic: getRaceCount(summary.stops,topViolations[3],"hispanic"), Asian:getRaceCount(summary.stops,topViolations[3],"asian/pacific islander"), Other:getRaceCount(summary.stops,topViolations[3],"other")},
        { Violation:topViolations[4], White:getRaceCount(summary.stops,topViolations[4],"white"), Black:getRaceCount(summary.stops,topViolations[4],"black"), Hispanic: getRaceCount(summary.stops,topViolations[4],"hispanic"), Asian:getRaceCount(summary.stops,topViolations[4],"asian/pacific islander"), Other:getRaceCount(summary.stops,topViolations[4],"other")},
        { Violation:topViolations[5], White:getRaceCount(summary.stops,topViolations[5],"white"), Black:getRaceCount(summary.stops,topViolations[5],"black"), Hispanic: getRaceCount(summary.stops,topViolations[5],"hispanic"), Asian:getRaceCount(summary.stops,topViolations[5],"asian/pacific islander"), Other:getRaceCount(summary.stops,topViolations[5],"other")},
        { Violation:topViolations[6], White:getRaceCount(summary.stops,topViolations[6],"white"), Black:getRaceCount(summary.stops,topViolations[6],"black"), Hispanic: getRaceCount(summary.stops,topViolations[6],"hispanic"), Asian:getRaceCount(summary.stops,topViolations[6],"asian/pacific islander"), Other:getRaceCount(summary.stops,topViolations[6],"other")},
        { Violation:topViolations[7], White:getRaceCount(summary.stops,topViolations[7],"white"), Black:getRaceCount(summary.stops,topViolations[7],"black"), Hispanic: getRaceCount(summary.stops,topViolations[7],"hispanic"), Asian:getRaceCount(summary.stops,topViolations[7],"asian/pacific islander"), Other:getRaceCount(summary.stops,topViolations[7],"other")},
        { Violation:topViolations[8], White:getRaceCount(summary.stops,topViolations[8],"white"), Black:getRaceCount(summary.stops,topViolations[8],"black"), Hispanic: getRaceCount(summary.stops,topViolations[8],"hispanic"), Asian:getRaceCount(summary.stops,topViolations[8],"asian/pacific islander"), Other:getRaceCount(summary.stops,topViolations[8],"other")},
        { Violation:topViolations[9], White:getRaceCount(summary.stops,topViolations[9],"white"), Black:getRaceCount(summary.stops,topViolations[9],"black"), Hispanic: getRaceCount(summary.stops,topViolations[9],"hispanic"), Asian:getRaceCount(summary.stops,topViolations[9],"asian/pacific islander"), Other:getRaceCount(summary.stops,topViolations[9],"other")},
    ];
    
// prepare jqxChart settings
var settings = {
    title: "Top 10 Violations by Race",
    description: "Total number of stops by race for the Top 10 Violations in this county/state",
    enableAnimations: true,
    showLegend: true,
    padding: { left: 30, top: 30, right: 30, bottom: 30 },
    titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
    source: sampleData,
    xAxis:
        {
            dataField: 'Violation',
            flip: false,
            textRotationAngle: 90,
            unitInterval: 1,
            axisSize: 'auto',
            tickMarks: {
                visible: true,
                interval: 1,
                color: '#BCBCBC'
                        },
            gridLines: {
                visible: true,
                interval: 1,
                color: '#BCBCBC'
                        }
        },
    valueAxis:
        {
            unitInterval: 10,
            minValue: 0,
            title: { text: 'Number of Stops' },
            tickMarks: { color: '#BCBCBC' }
        },
    colorScheme: 'scheme03',
    seriesGroups:
        [
            {
                type: 'stackedcolumn',
                orientation: 'horizontal',
                useGradient: false,
                columnsGapPercent: 20,
                valueAxis:
                {
                    minValue: 0,
                    flip: true,
                    description: 'Number of Stops'
                },
                series: [
                        { dataField: 'White', displayText: 'White'},
                        { dataField: 'Black', displayText: 'Black'},
                        { dataField: 'Hispanic', displayText: 'Hispanic'},
                        { dataField: 'Asian', displayText: 'Asian'},
                        { dataField: 'Other', displayText: 'Other'}
                    ]
            }
        ]
};

// select the chartContainer DIV element and render the chart.
$('#bar').jqxChart(settings);
};

function createLineChart (summary){
    let trace = {
        type: "scatter",
        x: Object.keys(summary.unique.dates),
        y:Object.values(summary.unique.dates),
    };

    let myData = [trace];

    let layout = {
        // plot_bgcolor: "#E1EFFF",
        // paper_bgcolor: "#FFF3",
        margin:{
            // pad:30,
        },
        title:{
            text: "Traffic Stops by Date",
            font: {
                size: 24,
                family: 'Tahoma, sans-serif',
            },
        },
        yaxis: {
            title: {
                text: 'Number of Stops',
                size: 8,
                family: 'Tahoma, sans-serif',
            },
        },
    };

    Plotly.newPlot("line", myData, layout);
};



//Return top ten keys in unique violations
function getTopTen(obj)
{
    keys = Object.keys(obj)
    keys.sort(function(a,b){ return obj[b] - obj[a];});
    topKeys = keys.slice(0,10);
    return topKeys;
}

//Get total count of violations per race
function getRaceCount(stops,vio,race)
{
    res = stops.filter(function(st){
        v = st.violation.includes(vio)
        r = st.subject_race == race
        return v && r;
    });
    return res.length;
}


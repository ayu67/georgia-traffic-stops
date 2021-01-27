queryString = window.location.search;
urlParams = new URLSearchParams(queryString);
firstSel = "ALL"
if(urlParams.has("county"))
{
    firstSel = urlParams.get("county");
}

dataPromise.then(() => loadCountySelector());

function optionChanged(value)
{
    console.log(value);
    getCountySummary(value);
    if(value == "ALL")
    {
        loadCountyInfo(stateSummary);

    }
    else{
        loadCountyInfo(countySummary);
        createBarChart(countySummary);
    }
}

function loadCountySelector()
{
    var select = d3.select("#selCounty")
    
    select.selectAll("option")
    .data(Object.keys(stateSummary.unique.county).sort()) //Take all of these name values (940,941,942,etc.)
    .enter()
      .append("option") //... and create a new option for each of them
      .attr("value", function (v,i) { return v; }) //Using the index as the value
      .text(function (v,i) { return v; }); //...and the value as the option text

    select.selectAll("option")
        .each(function(d,i){
            op = d3.select(this)
            county = op.attr("value");
            console.log(county);
            if(county == firstSel)
            {
                op.attr("selected","selected");
            }
        });
    optionChanged(firstSel);
    }

function loadCountyInfo(summary)
{
    d3.select("#name")
        .text(summary.name);
    
    d3.select("#stops")
        .text("Total Stops: " + summary.totalStops);
    
    d3.select("#maxViolation")
        .text("Most Frequent Violation: " + summary.maxViolation + " ("+summary.unique.violation[summary.maxViolation]+")");
    
    d3.select("#minViolation")
        .text("Least Frequent Violation: " + summary.minViolation + " ("+summary.unique.violation[summary.minViolation]+")");
        
        d3.select("#maxRace")
        .text("Most Stopped Race: " + summary.maxRace.toUpperCase() + " ("+summary.unique.race[summary.maxRace]+")");
            
        d3.select("#minRace")
        .text("Least Stopped Race: " + summary.minRace.toUpperCase() + " ("+summary.unique.race[summary.minRace]+")");
            
            d3.select("#sex")
        .text("Most Stopped Gender: " + summary.maxSex.toUpperCase() + " ("+summary.unique.sex[summary.maxSex]+")");
}
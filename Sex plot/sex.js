// // Filter data for the specific sex categories
// let sexCategories = ["female", "male"];
// let filteredData = suicide_rates.filter(entry => sexCategories.includes(entry.sex));

// // Group data by sex categories
// let sexgroupedData = sexCategories.map(sex => ({
//     sex,
//     suicides: filteredData
//     .filter(entry => entry.sex === sex)
//     .reduce((sum, entry) => sum + entry.sucides_100k_pop, 0)
// }));

// // Define colors for each sex category
// let colors = ["red", "blue"];

// // Prepare data for Plotly
// let data = [{
//     x: sexCategories,
//     y: sexgroupedData.map(group => group.suicides),
//     type: 'bar',
//     marker:{
//       color: colors
//     }
// }];

// // Create a layout for the bar chart
// let layout_sexbar = {
//     title: 'Global Suicides by Sex Category',
//     xaxis: { title: 'Sex' },
//     yaxis: { title: 'Suicides per 100k Population' }
// };

// // Create the Plotly bar chart
// Plotly.newPlot('sexbar', data, layout_sexbar);

////////////////////////////////////////////////////////////////

let maleData = suicide_rates.filter(data => data.sex === "male");
let femaleData = suicide_rates.filter(data => data.sex === "female");

// Group data by year and calculate average suicide rates
function groupDataByYear(data) {
    let groupedData = {};
    data.forEach(entry => {
        if (!groupedData[entry.year]) {
            groupedData[entry.year] = [];
        }
        groupedData[entry.year] += entry.sucides_100k_pop;
    });

    let years = Object.keys(groupedData);
    let sumRates = years.map(year => groupedData[year]);
    
    return { years, sumRates };
}

let maleGroupedData = groupDataByYear(maleData);
let femaleGroupedData = groupDataByYear(femaleData);

// Create the Plotly chart
let femaleTrace = {
    x: femaleGroupedData.years,
    y: femaleGroupedData.avgRates,
    mode: 'lines+markers',
    name: 'Female',
    line: { color: 'red' }
};

let maleTrace = {
    x: maleGroupedData.years,
    y: maleGroupedData.avgRates,
    mode: 'lines+markers',
    name: 'Male',
    line: { color: 'blue' }
};


let layout_sextrend = {
    title: 'Suicide Trend Overtime for Female and Male',
    xaxis: { title: 'Year' },
    yaxis: { title: 'Suicides per 100k Population' },
};

Plotly.newPlot('sexchart', [femaleTrace, maleTrace], layout_sextrend);
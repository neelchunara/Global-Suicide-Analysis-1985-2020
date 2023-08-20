// Filter data for the specific age categories
let ageCategories = ["5-14 years", "15-24 years", "25-34 years", "35-54 years", "55-74 years", "75+ years"];
let filteredData_ = suicide_rates.filter(entry => ageCategories.includes(entry.age));

// Group data by age categories
let groupedData = ageCategories.map(age => ({
    age,
    suicides: filteredData_
    .filter(entry => entry.age === age)
    .reduce((sum, entry) => sum + entry.sucides_100k_pop, 0)
}));

// Define colors for each age category
let colors_ = ["red", "yellow", "green", "blue", "purple", "orange"];

// Prepare data for Plotly
let data_ = [{
    x: ageCategories,
    y: groupedData.map(group => group.suicides),
    type: 'bar',
    marker:{
      color: colors_
    }
}];

// Create a layout for the barchart
let layout = {
    title: 'Suicides by Age Category',
    xaxis: { title: 'Age Category' },
    yaxis: { title: 'Suicides per 100k Population' }
};

// Create the Plotly bar chart
Plotly.newPlot('plot', data_, layout);


////2nd Chart - Age Categories and sucide rates from 1985 - 20///// 

// Group data by age category and calculate average suicide rates
function groupDataByAge(data, ageCategory) {
    let groupedData = {};
    data.forEach(entry => {
        if (!groupedData[entry.year]) {
            groupedData[entry.year] = entry.sucides_100k_pop;
        } else {
            groupedData[entry.year] += entry.sucides_100k_pop;
        }
    });

    let years = Object.keys(groupedData);
    let sumRates = years.map(year => groupedData[year]);

    return { years, sumRates };
}

// Create an array of traces for different age categories
let ageTraces = ageCategories.map((ageCategory, index) => {
    let ageCategoryData = suicide_rates.filter(entry => entry.age === ageCategory);
    let ageCategoryGroupedData = groupDataByAge(ageCategoryData, ageCategory);

    return {
        x: ageCategoryGroupedData.years,
        y: ageCategoryGroupedData.sumRates,
        mode: 'lines+markers',
        name: ageCategory,
        line: { color: colors[index] }
    };
});

// Create the Plotly chart
let layout_ageTrend = {
    title: 'Suicide Trend Overtime for Different Age Categories',
    xaxis: { title: 'Year' },
    yaxis: { title: 'Suicides per 100k Population' },
};

Plotly.newPlot('agechart', ageTraces, layout_ageTrend);





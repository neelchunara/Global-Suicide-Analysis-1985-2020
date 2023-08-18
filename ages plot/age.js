// Filter data for the specific age categories
let ageCategories = ["5-14 years", "15-24 years", "25-34 years", "35-54 years", "55-74 years", "75+ years"];
let filteredData = suicide_rates.filter(entry => ageCategories.includes(entry.age));

// Group data by age categories
let groupedData = ageCategories.map(age => ({
    age,
    suicides: filteredData
    .filter(entry => entry.age === age)
    .reduce((sum, entry) => sum + entry.sucides_100k_pop, 0)
}));

// Define colors for each age category
let colors = ["red", "yellow", "green", "blue", "purple", "orange"];

// Prepare data for Plotly
let data = [{
    x: ageCategories,
    y: groupedData.map(group => group.suicides),
    type: 'bar',
    marker:{
      color: colors
    }
}];

// Create a layout for the barchart
let layout = {
    title: 'Suicides by Age Category',
    xaxis: { title: 'Age Category' },
    yaxis: { title: 'Suicides per 100k Population' }
};

// Create the Plotly bar chart
Plotly.newPlot('plot', data, layout);

//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
////////////////////////// 2nd Graph ///////////////////////////



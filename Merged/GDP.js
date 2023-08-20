// Group data by gdp and calculate average suicide rates
function groupDataBygdp(data) {
  let gdpgroupedData = {};
  data.forEach(entry => {
      if (!gdpgroupedData[entry.gdp_per_capita]) {
          gdpgroupedData[entry.gdp_per_capita] = entry.sucides_100k_pop;
      }
      else {gdpgroupedData[entry.gdp_per_capita] += entry.sucides_100k_pop};
  });

  let gdp_per_capita = Object.keys(gdpgroupedData);
  let gdpsumRates = gdp_per_capita.map(gdp_per_capita => gdpgroupedData[gdp_per_capita]);
  
  return { gdp_per_capita, gdpsumRates };
}


let gdpTrace = {
    x: suicide_rates.map(entry => entry.gdp_per_capita),
    y: suicide_rates.map(entry => entry.sucides_100k_pop),
    mode: 'markers',
    marker: { color: 'green' },
    type: 'scatter'
};

let layout_gdpTrend = {
    title: 'Suicide Rate vs. GDP per Capita',
    xaxis: { title: 'GDP per Capita' },
    yaxis: { title: 'Suicides per 100k Population' }
};

Plotly.newPlot('GDPchart', [gdpTrace], layout_gdpTrend);



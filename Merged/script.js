// Top 10 countries with highest suicide rates 
let countries = ["Albania","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Barbados","Belarus","Belgium","Belize","Bosnia and Herzegovina","Brazil","Bulgaria","Cabo Verde","Canada","Chile","Colombia","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Dominica","Ecuador","El Salvador","Estonia","Fiji","Finland","France","Georgia","Germany","Greece","Grenada","Guatemala","Guyana","Hungary","Iceland","Ireland","Israel","Italy","Jamaica","Japan","Kazakhstan","Kiribati","Kuwait","Kyrgyzstan","Latvia","Lithuania","Luxembourg","Macau","Maldives","Malta","Mauritius","Mexico","Mongolia","Montenegro","Netherlands","New Zealand","Nicaragua","Norway","Oman","Panama","Paraguay","Philippines","Poland","Portugal","Puerto Rico","Qatar","Republic of Korea","Romania","Russian Federation","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and Grenadines","San Marino","Serbia","Seychelles","Singapore","Slovakia","Slovenia","South Africa","Spain","Sri Lanka","Suriname","Sweden","Switzerland","Thailand","Trinidad and Tobago","Turkey","Turkmenistan","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Brunei Darussalam","China, Hong Kong SAR","Czechia","Dominican Republic","Egypt","Jordan","Lebanon","North Macedonia","Peru","Republic of Moldova","Saint Vincent and the Grenadines","Tajikistan","United States of America"];
let countryData = suicide_rates.filter(entry => countries.includes(entry.country));

let groupCountry = countries.map(country => ({
    country,
    suicides: countryData
        .filter(entry => entry.country === country)
        .reduce((sum, entry) => sum + entry.sucides_100k_pop, 0)
}))
.filter(entry => entry.suicides > 0) 
.sort((a, b) => b.suicides - a.suicides) 
.slice(0, 10); 

var ctx = document.getElementById("myChart").getContext("2d");

var topCountries = groupCountry.map(group => group.country); 

var myChart = new Chart(ctx, {
    type: "horizontalBar",
    data: {
        labels: topCountries, 
        datasets: [{
            label: 'Rate per 100k',
            data: groupCountry.map(group => group.suicides),
            backgroundColor: 'rgb(0, 64, 255)', 
            borderWidth: 1,
            barThickness: 1, // Ajusta este valor para cambiar el grosor de las barras
        }]
    },
    options: {
        responsive: true, 
        maintainAspectRatio: false, 
        width: 100, 
        height: 100, 
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});





// Overall trend over time

let years = [1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]
let yearData = suicide_rates.filter(entry => years.includes(entry.year));

let groupYear = years.map(year => ({
year,
suicides: yearData
.filter(entry => entry.year === year)
.reduce((sum, entry) => sum + entry.sucides_100k_pop, 0)
}));

//Line chart


      var ctx= document.getElementById("linechart").getContext("2d");
      var linechart= new Chart(ctx,{
          type:"line",
          data:{
              labels:years,
              datasets:[{
                      label:'Rate per 100k',
                      data:groupYear.map(group => group.suicides),
                      borderColor: 'rgb(255, 69, 0)', 
                      backgroundColor: 'rgba(0, 0, 0, 0)', 
                      borderWidth: 3
                      

                      
              }]
          },
          options:{
              width: 100, 
              height: 100, 
              scales:{
                  yAxes:[{
                          ticks:{
                              beginAtZero:true
                          }
                  }]
              }
          }
      });        
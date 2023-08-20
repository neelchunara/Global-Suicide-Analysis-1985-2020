 let countries = ["Albania","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Barbados","Belarus","Belgium","Belize","Bosnia and Herzegovina","Brazil","Bulgaria","Cabo Verde","Canada","Chile","Colombia","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Dominica","Ecuador","El Salvador","Estonia","Fiji","Finland","France","Georgia","Germany","Greece","Grenada","Guatemala","Guyana","Hungary","Iceland","Ireland","Israel","Italy","Jamaica","Japan","Kazakhstan","Kiribati","Kuwait","Kyrgyzstan","Latvia","Lithuania","Luxembourg","Macau","Maldives","Malta","Mauritius","Mexico","Mongolia","Montenegro","Netherlands","New Zealand","Nicaragua","Norway","Oman","Panama","Paraguay","Philippines","Poland","Portugal","Puerto Rico","Qatar","Republic of Korea","Romania","Russian Federation","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and Grenadines","San Marino","Serbia","Seychelles","Singapore","Slovakia","Slovenia","South Africa","Spain","Sri Lanka","Suriname","Sweden","Switzerland","Thailand","Trinidad and Tobago","Turkey","Turkmenistan","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Brunei Darussalam","China, Hong Kong SAR","Czechia","Dominican Republic","Egypt","Jordan","Lebanon","North Macedonia","Peru","Republic of Moldova","Saint Vincent and the Grenadines","Tajikistan","United States of America"];
  let countryData = suicide_rates.filter(entry => countries.includes(entry.country));

 let groupCountry = countries.map(country => ({
    country,
    suicides: countryData
    .filter(entry => entry.country === country)
    .reduce((sum, entry) => sum + entry.sucides_100k_pop, 0)
}));

let years = [1987,1988,1989,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,1985,1986,1990,1991,2012,2013,2014,2015,2011,2016,2020,2019,2018,2017]
let yearData = suicide_rates.filter(entry => years.includes(entry.year));

let groupYear = years.map(year => ({
  year,
  suicides: yearData
  .filter(entry => entry.year === year)
  .reduce((sum, entry) => sum + entry.sucides_100k_pop, 0)
}));


var ctx= document.getElementById("myChart").getContext("2d");
        var myChart= new Chart(ctx,{
            type:"bar",
            data:{
                labels:countries,
                datasets:[{
                        label:'Rate per 100k',
                        data:groupCountry.map(group => group.suicides),
                        backgroundColor: 'rgb(0, 64, 255)', // Puedes ajustar el color de fondo como desees
                        borderWidth: 1
                }]
            },
            options:{
                width: 100, // Ancho en píxeles
                height: 100, // Altura en píxeles
                scales:{
                    yAxes:[{
                            ticks:{
                                beginAtZero:true
                            }
                    }]
                }
            }
        });


        var ctx= document.getElementById("linechart").getContext("2d");
        var linechart= new Chart(ctx,{
            type:"line",
            data:{
                labels:years,
                datasets:[{
                        label:'Rate per 100k',
                        data:groupYear.map(group => group.suicides),
                        borderColor: 'rgb(255, 69, 0)', // Puedes ajustar el color de fondo como desees
                        backgroundColor: 'rgba(0, 0, 0, 0)', // Color de fondo transparente
                        borderWidth: 3
                        

                        
                }]
            },
            options:{
                width: 100, // Ancho en píxeles
                height: 100, // Altura en píxeles
                scales:{
                    yAxes:[{
                            ticks:{
                                beginAtZero:true
                            }
                    }]
                }
            }
        });        





function init (){
    let selector = d3.select ("#selDataset")
    d3.json ("sucide.json").then((data)=>{
        console.log(data)
        let years = [...new Set(data.map(d=>d.year))]
        console.log(years);

        for (let i = 0; i < years.length; i ++) {
            selector.append("option").text(years[i]).property("value", years[i]);
            console.log(selector);
        }

        // years.forEach((sample)=>{
        //     selector.append("option").text(sample).property("value", sample)
        // })
        
        // delector.selectAll("option").data(years).enter().append("option").text(d=>d).attr("value",d=>d)
        let firstItem = years[0]
        charts(firstItem)

    });
}

init();



function optionChanged(newsample){
   
    charts(newsample);
}

function charts(sample){
    var data = [
        {
          x: ['giraffes', 'orangutans', 'monkeys'],
          y: [20, 14, 23],
          type: 'bar'
        }
      ];
      
      Plotly.newPlot('bar', data);
      
}

document.addEventListener("DOMContentLoaded", init);

// // Agrega el evento de cambio al menú desplegable
// document.getElementById("selDataset").addEventListener("change", function () {
//     optionChanged(this.value); // Llama a la función optionChanged con el valor seleccionado
// });


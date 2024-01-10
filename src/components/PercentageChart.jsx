import React from 'react'
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

Chart.register(CategoryScale);

const PercentageChart = ({percentage, title}) => {
    const data = {
        datasets: [{
        data: [percentage, 100-percentage],
        backgroundColor: [
          '#49d3cc',
          '#d0f0e3'
        ]
      }],
       text: '4'
    };
    var options = {        
      cutout: 38
  };
    const plugins = [{
      beforeDraw: function(chart) {
       var width = chart.width,
           height = chart.height,
           ctx = chart.ctx;
           ctx.restore();
           var fontSize = (height / 160).toFixed(2);
           ctx.font = fontSize + "em sans-serif";
           ctx.textBaseline = "top";
           var text = `${percentage}%`,
           textX = Math.round((width - ctx.measureText(text).width) / 2),
           textY = height / 2;
           ctx.fillText(text, textX, textY);
           ctx.save();
      } 
    }];

  return (
   <div className='w-[110px] flex flex-col justify-center items-center'>
    <Doughnut 
    type="doughnut" 
    data={data} 
    plugins={plugins} 
    options={options}
   />
   <span >{title}</span>
   </div>
  )
}

export default PercentageChart;
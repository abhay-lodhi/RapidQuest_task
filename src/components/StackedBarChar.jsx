import React from "react";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);

const StackedBarChart = () => {
  const data = {
    labels: ["20", "", "25", "", "30", "", "35", "", "40", "", "60", "", "65"],
    datasets: [
      {
        label: "Employer: K 73,500",
        backgroundColor: "#06067a",
        borderColor: "#06067a",
        barThickness: 16,
        data: [20, 25, 28, 31, 34, 37, 41, 45, 53, 61, 70, 80, 91],
      },
      {
        label: "Employee: K 52,500",
        backgroundColor: "#3737cd",
        borderColor: "#3737cd",
        barThickness: 16,
        data: [20, 25, 28, 31, 34, 37, 41, 45, 53, 61, 70, 80, 91],
      },
      {
        label: "Total Interest: K 244,313",
        backgroundColor: "#ADD8E6",
        borderColor: "#ADD8E6",
        barThickness: 16,
        data: [20, 25, 28, 31, 34, 37, 41, 45, 53, 61, 70, 80, 91],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
        text: "Contributers Overtime",
      },
    },
    responsive: true,
    scales: {
      x: {
        grid: {
          color: "#ffffff",
        },
        stacked: true,
      },
      y: {
        ticks: {
          stepSize: 100,
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            return value % 100 === 0 ? "$" + value : "";
          },
        },
        stacked: true,
      },
    },
  };
  return (
    <div className="chart w-[100%]  h-[30vh]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default StackedBarChart;

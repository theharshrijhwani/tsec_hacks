import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [chartState, setChartState] = useState({
    series: [55, 15, 20, 10],
    options: {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      labels: ["Kitchen", "Washroom", "Flooring", "Ceiling"],
    },
  });

  return (
    <div className="w-[500px] m-auto">
      <div id="chart" className="">
        <ReactApexChart
          options={chartState.options}
          series={chartState.series}
          type="donut"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;

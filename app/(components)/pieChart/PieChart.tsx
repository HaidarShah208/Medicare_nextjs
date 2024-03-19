'use client'

import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
interface DonutChartProps {
  series: number[];
}

const DonutChart: React.FC<DonutChartProps> = ({ series }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const options = {
        series: series,
        chart: {
          width: 170,
          type: 'donut',
        },
        dataLabels: {
          enabled: false,  
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: true
            }
          }
        }],
        legend: {
          show: false, // Hide legend
        },
        // legend: {
        //   position: 'right',
        //   offsetY: 0,
        //   height: 230,
        // }
      };

      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, [series]);

   

  return (
    <div>
      <div id="chart" ref={chartRef}></div>
    </div>
  );
};

export default DonutChart;

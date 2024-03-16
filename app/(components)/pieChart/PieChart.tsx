'use client'
import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const DonutChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const options = {
        plotOptions: {
            pie: {
              customScale: 0.6
            }
          },
        series: [44, 55],
        chart: {
          type: 'donut',
        },
        dataLabels: {
            enabled: false, // Hide data labels
          },
          legend: {
            show: false, // Hide legend
          },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      };

      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return <div id="chart" ref={chartRef} />;
};

export default DonutChart;

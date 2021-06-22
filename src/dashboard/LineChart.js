import { useRef, useState, useEffect } from "react";
import { Chart } from "chart.js";

const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const data = {
  labels: labels,
  datasets: [
    {
      backgroundColor: "rgba(99, 102, 241, 0.1)",
      borderColor: "rgb(99, 102, 241)",
      pointBackgroundColor: "rgb(99, 102, 241)",
      data: [0, 10, 5, 2, 20, 30, 45],
      tension: 0.3,
      fill: true,
    },
  ],
};

const chartConfig = {
  type: "line",
  data: data,
  options: {
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          drawTicks: false,
        },
        ticks: {
            padding: 8
        }
      },
    },
  },
};

function LineChart() {
  const chartContainer = useRef(null);
  const [, setChart] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const chartInstance = new Chart(chartContainer.current, chartConfig);
      //chartInstance.canvas.parentNode.style.height = "340px";
      setChart(chartInstance);
    }
    return () => {
      chartContainer.current = null;
      setChart(null);
    };
  }, [chartContainer]);

  return (
    <div className="bg-white rounded-md shadow p-5">
      <div className="text-xl text-gray-600 mb-3 font-semibold">Weekly</div>
      <div className="">
        <canvas ref={chartContainer} />
      </div>
    </div>
  );
}

export default LineChart;

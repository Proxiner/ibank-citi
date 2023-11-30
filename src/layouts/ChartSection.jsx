import React from "react";
import styles from "./_Chart.module.scss";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
// Chart Datas 

function ChartSection() {
  const labels = ["Dribbble", "Spotify", "Be`", "NEM"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Transactions",
        backgroundColor: "#a29bfd",
        borderColor: "rgb(255, 99, 132)",
        data: [200000, 185000000, 197000, 30000],
        tickLength: 20,
      },
    ],
  };
  return (
    <div className={styles.chart}>
      <Bar data={data} />
    </div>
  );
}

export default ChartSection;

import React, { useEffect, useState } from "react";
import styles from "./_Chart.module.scss";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
// Chart Datas

function ChartSection() {
  const [productsPrice, setProductPrice] = useState([]);

  async function fetchData() {
    const response = await fetch("https://dummyjson.com/products/");
    const data = response.json();
    const result = data;
    return result;
  }
  useEffect(() => {
    async function fetchDataAndUpdate() {
      const data = await fetchData();
    const products = data.products.map((product) => product.price * 1000);
      setProductPrice(products);
      return data;
    }

    fetchDataAndUpdate();
  }, []);

  const labels = ["Dribbble", "Spotify", "Be`", "NEM"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Dribbble",
        backgroundColor: "#FF075C61",
        borderColor: "rgb(255, 99, 132)",
        data: [productsPrice[0], 0, 0, 0],
        tickLength: 10,
      },
      {
        label: "Spotify",
        backgroundColor: "#1DD46061",
        borderColor: "rgb(255, 99, 132)",
        data: [0, productsPrice[1],0, 0],
        tickLength: 10,
      },
      {
        label: "Be",
        backgroundColor: "#9791FC61",
        borderColor: "rgb(255, 99, 132)",
        data: [0,0, productsPrice[2], 0],
        tickLength: 10,
      },
      {
        label: "NEM",
        backgroundColor: "#D0D61761",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 0, 0,productsPrice[3]],
        tickLength: 10,
      },
    ],
  };
  const options = {
    plugins: { legend: { display: true } },
    scales: { x: { grid: { display: false } }, y: { grid: { display: true } } },
    datasets: { bar: { barPercentage: 8, categoryPercentage: 0.2 } },
  };

  return (
    <div className={styles.chart}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default ChartSection;

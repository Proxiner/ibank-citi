import React, { useEffect, useRef, useState } from "react";
import styles from "./_Chart.module.scss";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
// Chart Datas 



function  useChartDataSelection() {
const [productPrice , setProductPrice] = useState([])
  async function fetchData() {
    const response = await fetch("https://dummyjson.com/products/")
    const data = response.json()
    const result = data
    return result
  }

  const cards = useRef()
  useEffect(() => {
    async function fetchDataAndUpdate() {
      const data = await fetchData()
      const product =data.products.map((p ) => p.price);
      setProductPrice(product)
      return data
    }

    fetchDataAndUpdate()
  }, [])

}
const options = {
  plugins: { legend: { display: true } },
  scales: { x: { grid: { display: false } }, y: { grid: { display: true } } },
  datasets: { bar: { barPercentage: 8, categoryPercentage: 0.2 } },
};


  function ChartSection() {
    const labels = ["Dribbble", "Spotify", "Behance", "NEM(IR)"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "dribbble",
          backgroundColor: "#FF075C",
          borderColor: "rgb(255, 99, 132)",
          data: [data.products[0].price, 0, 0, 0],
          tickLength: 5,
        },
        {
          label: "spotify",
          backgroundColor: "#1DD460",
          borderColor: "rgb(255, 99, 132)",
          data: [0, data.products[1].price, 0, 0],
          tickLength: 5,
        },
        {
          label: "Behance",
          backgroundColor: "#9791FC",
          borderColor: "rgb(255, 99, 132)",
          data: [0, 0, data.products[2].price, 0],
          tickLength: 5,
        },
        {
          label: "NEM(IR)",
          backgroundColor: "#D0D617",
          borderColor: "rgb(255, 99, 132)",
          data: [0, 0, 0, data.products[3].data],
          tickLength: 5,
        },
      ],
    };
    return (
      <div className={styles.chart} >
        <Bar data={data} options={options} />
      </div>
    );
  }

  export default ChartSection;

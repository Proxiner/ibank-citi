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
      const products = data.products.map((product) => product.price);
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
        data: [0, 100000, 0, 0],
        tickLength: 10,
      },
      {
        label: "Be",
        backgroundColor: "#9791FC61",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 0, 197000, 0],
        tickLength: 10,
      },
      {
        label: "NEM",
        backgroundColor: "#D0D61761",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 0, 0, 30000],
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

import React from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
 import { cardShadow, hoverEffect } from "../uthis";
  import Doctor from "../assets/Doctor2.jpeg";

const Bloodanalysis = () => {
  const data = {
    series: [
      {
        name: "Blood report Card",
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      yaxis: {
        show: false,
      },
      toolbar: {
        show: false,
      },
    },
  };
  return (
    <InvoicesContainer className="Bloodanalysis">
      <Chart options={data.options} series={data.series} type="area" />
    </InvoicesContainer>

  );
};



const InvoicesContainer = styled.div`
  margin-left: 2rem;
  margin-right:2rem;
  width: 30rem;
  border-radius: 3rem;
  margin-top: 1rem;
  background-color: white;
  height: 90%;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: ${hoverEffect};
  }`


export default Bloodanalysis;




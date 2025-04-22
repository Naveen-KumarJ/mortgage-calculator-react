import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

function ChartComponent({ info }) {
  const { loanAmount, interestRate, tenure } = info;
  const totalLoanMonths = Number(tenure) * 12;
  const interestPerMonth = interestRate / 100 / 12;
  let monthlyPayment = 0;
  if (interestPerMonth === 0) {
    monthlyPayment = loanAmount / totalLoanMonths;
  } else {
    monthlyPayment =
      (loanAmount *
        interestPerMonth *
        Math.pow(1 + interestPerMonth, totalLoanMonths)) /
      (Math.pow(1 + interestPerMonth, totalLoanMonths) - 1);
  }
  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ["Principle", "Interest"],
    datasets: [
      {
        // label: "# of Votes",
        data: [loanAmount, totalInterestGenerated],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        bodyColor: "#ffffff",
        titleColor: "#ffcc00",
      },
    },
  };

  return (
    <div className="border-1 border-neutral-200 flex-1 rounded-xl p-2 flex flex-col justify-center items-center gap-2">
      <h3 className="text-neutral-300">
        Monthly Payment: ₹{" "}
        <span className="font-semibold">{monthlyPayment.toFixed(2)}</span>{" "}
      </h3>
      <div className="text-white">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default ChartComponent;

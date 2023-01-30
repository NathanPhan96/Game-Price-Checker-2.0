var ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "January",
      "Febraury",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "History Of Game Price",
        data: [12, 19, 3, 5, 2, 3, 18, 9, 15, 9, 1, 30],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

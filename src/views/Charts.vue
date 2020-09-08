<template>
  <div>
    <div class="row">
      <div class="s12">
        <div class="card">
          <div class="card-header">Line chart</div>
          <line-chart :chartdata="chartdata" :options="options"></line-chart>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="s12">
        <div class="card">
          <div class="card-header">Bar chart</div>
          <bar-chart :chartdata="chartdata" :options="options"></bar-chart>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import LineChart from "@/utils/LineChart.js";
import BarChart from "@/utils/BarChart.js";


export default {
  name: 'Charts',  
  components: {
    LineChart, BarChart
  },
  data() {
    return {
      chartdata: {
        labels: ["January", "February", "Mart", "April", "May", "June", "Jule"],
        datasets: [
          {
            label: "Data set 1",
            backgroundColor: "lightblue",
            data: [40, 20, 43, 54, 4, 32, 43],
            borderColor: "rgba(255, 99, 132, 1)",
          },

          {
            label: "Data set 2",
            backgroundColor: "green",
            data: [10, 20, 33, 34, 23, 12, 43],
            borderColor: "rgba(54, 162, 235, 1)",
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>



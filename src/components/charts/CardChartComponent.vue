<template>
    <div>
    <div class="col s3">
        <div class="card gradient--blue text-white">
          <div class="card-header">
            <div class="text-value-lg bold">9.823</div>
            <div>Members online</div>
          </div>
          <div class="card-body">
            <line-chart :chartdata="chartdata" :options="options"></line-chart>
          </div>
        </div>
      </div>

      <div class="col s3">
        <div class="card gradient--lightblue text-white">
          <div class="card-header">
            <div class="text-value-lg bold">9.823</div>
            <div>Members online</div>
          </div>
          <div class="card-body">
            <bar-chart :chartdata="chartdata" :options="options"></bar-chart>
          </div>
        </div>
      </div>

      <div class="col s3">
        <div class="card gradient--orange text-white">
          <div class="card-header">
            <div class="text-value-lg bold">9.823</div>
            <div>Members online</div>
          </div>
          <div class="card-body">
            <line-chart :chartdata="chartdata" :options="options"></line-chart>
          </div>
        </div>
      </div>

      <div class="col s3">
        <div class="card gradient--red text-white">
          <div class="card-header">
            <div class="text-value-lg bold">9.823</div>
            <div>Members online</div>
          </div>
          <div class="card-body">
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
  name: "Home",
  components: {
    LineChart,
    BarChart,
  },

  data() {
    return {
      chartdata: {
        labels: ["January", "February", "Mart", "April", "May", "June", "Jule"],
        datasets: [
          {
            label: "Data set 1",
            backgroundColor: "transparent",
            data: [40, 20, 43, 54, 4, 32, 43],
            borderColor: "rgba(255, 255, 255, 1)",
            borderWidth: 0.7,
            pointBackgroundColor: "rgba(255, 255, 255, 1)",
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>


<style lang="scss">
.card-body {
  padding-top: 20px;
  canvas {
    height: 70px;
  }
}
</style>